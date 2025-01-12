import React, { useCallback, useEffect, useState } from 'react';
import './ModalWindow.css';
import Resize from './Resize';

const ModalWindow = ({ show, onClose, children }) => {
	const [isPortrait, setIsPortrait] = useState(
		window.innerWidth > window.innerHeight
	)

	useEffect(() => {
		const handleResize = () => {
			setIsPortrait(window.innerWidth > window.innerHeight)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	const [isVisible, setIsVisible] = useState(false);

	const handleKeyDown = useCallback((event) => {
		if (event.key === 'Escape') {
			onClose();
		}
	}, [onClose]);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleKeyDown]);

	useEffect(() => {
		if (show) {
			setIsVisible(true);
		} else {
			const timer = setTimeout(() => setIsVisible(false), 900);
			return () => clearTimeout(timer);
		}
	}, [show]);

	return (
		<div className={`modal-backdrop ${show ? 'show' : ''}`} onClick={onClose}>
			<div style={{ transform: isPortrait ? 'scale(1)' : 'scale(0.5)' }}>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					<button onClick={onClose} className="modal-close-button" aria-label="Close modal"></button>
					{children}
					<div style={{ display: 'flex', transform: isPortrait ? 'scale(1)' : 'scale(1.12)', marginLeft: isPortrait ? '' : '8vw' }}>
						<a href="https://t.me/kozhydlo" target="_blank" className="social-button">
							<div className="social telegram" /> Telegram
						</a>
						<a href="https://www.instagram.com/kozhydlomark/" target="_blank" className="social-button">
							<div className="social instagram" /> Instagram
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalWindow;
