import React, { useCallback, useEffect, useState } from 'react'
import './ModalWindow.css'
import Resize from './Resize'

const ModalWindow = ({ show, onClose, children }) => {
	const isPortrait = Resize()
	const [isVisible, setIsVisible] = useState(false)

	const hendleKeyDown = useCallback(
		event => {
			if (event.key === 'Escape') {
				onClose()
			}
		},
		[onClose]
	)

	useEffect(() => {
		if (show) {
			setIsVisible(true)
			document.addEventListener('keydown', hendleKeyDown)
		} else {
			const timer = setTimeout(() => setIsVisible(false), 900)
			document.removeEventListener('keydown', hendleKeyDown)
			return () => clearTimeout(timer)
		}
	}, [show, hendleKeyDown])

	useEffect(() => {
		return () => {
			document.removeEventListener('keydown', hendleKeyDown)
		}
	}, [hendleKeyDown])
	return (
		<div className={`modal-backdrop ${show ? 'show' : ''}`} onClick={onClose}>
			<div style={{ scale: isPortrait ? '1' : '0.5' }}>
				<div className='modal-content' onClick={e => e.stopPropagation()}>
					<button
						onClick={onClose}
						className='modal-close-button'
						aria-label='Close modal'
					></button>
					{children}
					<div style={{ display: 'flex', scale: isPortrait ? '1' : '1.12', marginLeft: isPortrait ? '' : '8vw' }}>
						<a
							href='https://t.me/kozhydlo'
							target='_blank'
							className='social-button'
						>
							<div className='social telegram' /> Telegram
						</a>
						<a
							href='https://www.instagram.com/kozhydlomark/'
							target='_blank'
							className='social-button'
						>
							<div className='social instagram' /> Instagram
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalWindow
