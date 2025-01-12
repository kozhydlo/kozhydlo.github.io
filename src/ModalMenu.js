import React, { useState, useEffect, useCallback } from 'react';
import './ModalMenu.css';

const ModalMenu = ({ show, onClose, children }) => {
	const [isVisible, setIsVisible] = useState(false);

	const hendleKeyDown = useCallback((event) => {
		if (event.key === 'Escape') {
			onClose();
		}
	}, [onClose]);

	useEffect(() => {
		if (show) {
			setIsVisible(true);
			document.addEventListener('keydown', hendleKeyDown);
		} else {
			const timer = setTimeout(() => setIsVisible(false), 900);
			document.removeEventListener('keydown', hendleKeyDown);
			return () => clearTimeout(timer);
		}
	}, [show, hendleKeyDown]);

	useEffect(() => {
		return () => {
			document.removeEventListener('keydown', hendleKeyDown);
		}
	}, [hendleKeyDown]);
	return (
		<div className={`modal-menu-backdrop ${show ? 'show' : ''}`} onClick={onClose}>
			<div className="modal-menu-content" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
	
}

export default ModalMenu
