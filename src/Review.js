import React, { useState } from 'react'
import './index.css'

function Review({ name, text, link }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleMoreClick = () => setIsModalOpen(true)
	const handleCloseModal = () => setIsModalOpen(false)

	const truncateText = text => {
		const words = text.split(' ')
		if (words.length <= 15) return text
		const lastWords = words.slice(-2).join(' ')
		return (
			<>
				{words.slice(0, -2).join(' ')} <b>{lastWords}</b>
			</>
		)
	}

	return (
		<div className='review-card'>
			<div className='review-content'>
				<div style={{ padding: '20px' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							fontSize: '16px',
						}}
					>
						<h2>{name}</h2>
						<a
							className='link'
							href={link}
							target='_blank'
							rel='noopener noreferrer'
						>
							Перейти
						</a>
					</div>
					<p className='review' style={{ fontSize: '19px' }}>
						{truncateText(text)}
						{/* {text.split(' ').length > 15 && (
              // <button className="more-button" onClick={handleMoreClick}>Більше</button>
            )} */}
					</p>
				</div>
			</div>

			{/* {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{name}</h2>
            <p>{text}</p>
            <button className="close-button" onClick={handleCloseModal}>Закрити</button>
          </div>
        </div>
      )} */}
		</div>
	)
}

export default Review
