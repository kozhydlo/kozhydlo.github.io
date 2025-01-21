import React, { useEffect, useRef, useState } from 'react'
import Carousel from './Carosel';

const AllGallery = () => {
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
	
    return (
        <div style={{ pointerEvents: isPortrait ? '' : 'none' }}>
            {/* Ряд каруселі, яка рухається вліво */}
            <Carousel direction="left" />
            {/* Ряд каруселі, яка рухається вправо */}
            <Carousel direction="right" />
        </div>
    );
};

export default AllGallery;
