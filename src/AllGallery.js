import React from 'react';
import Carousel from './Carosel';

const AllGallery = () => {
    return (
        <div>
            {/* Ряд каруселі, яка рухається вліво */}
            <Carousel direction="left" />
            {/* Ряд каруселі, яка рухається вправо */}
            <Carousel direction="right" />
        </div>
    );
};

export default AllGallery;
