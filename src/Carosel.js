import React, { useEffect, useRef, useState } from 'react'
import './Carosel.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./assets/all', false, /\.(png|jpe?g|svg)$/));

const Carousel = ({ direction }) => {
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
	

    const carouselRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let startPosition = 0;

        const animate = () => {
            if (!isHovered) {
                startPosition += direction === 'left' ? -1 : 1;
                carousel.scrollLeft = startPosition;
                if (startPosition >= carousel.scrollWidth - carousel.clientWidth) {
                    startPosition = 0;
                } else if (startPosition < 0) {
                    startPosition = carousel.scrollWidth - carousel.clientWidth;
                }
            }
            requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animate);
    }, [direction, isHovered]);

    return (
        <div
            className="carousel-container"
            ref={carouselRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="carousel-content">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`carousel-item-${index}`}
                        className={ isPortrait ? "carousel-image" : "carousel-image mobile"}
                        onClick={() => setModalImage(image)}
                    />
                ))}
            </div>

            {modalImage && (
                <div className="modal-window-image" onClick={() => setModalImage(null)}>
                    <img src={modalImage} alt="Modal View" className="modal-image" />
                    <button className="modal-image-close-button" onClick={() => setModalImage(null)} />
                </div>
            )}
        </div>
    );
};

export default Carousel;
