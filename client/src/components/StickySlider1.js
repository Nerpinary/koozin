import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';

export default function StickySlider1(children) {
    const params = {
        slidesPerView: 3,
    };

    return (
        <Swiper {...params}>
            {children}
        </Swiper>
    );
};