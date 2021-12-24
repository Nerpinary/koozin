import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Step1ColorCarousel = () => {

    const handleCar = () => {
        let carousel = document.querySelectorAll('.carousel')
        let wrapper = document.querySelectorAll('.slider-wrapper')
        carousel[1].classList.add('carousels')
        wrapper[1].classList.add('carousels')
    }

    const handleCol = () => {
        let colslides = []
        let slides = document.querySelectorAll('.slide')
        for (let i = 0; i < slides.length / 2; i++) {
            colslides[i] = slides[slides.length/2 + i]
        }
        for (let i = 0; i < colslides.length; i++) {
            if (colslides[i].classList.contains('selected')) {
                colslides[i].classList.add('slidecolor')
            } else {
                colslides[i].classList.remove('slidecolor')
            }
        }
        console.log(slides)
        console.log(colslides)
    }

    setTimeout(handleCar, 2000)
    setTimeout(handleCol, 2000)

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel
            style={{overflow: 'visible'}}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            selectedItem={0}
            onSwipeEnd={(event: React.TouchEvent) => {
                let buttons = document.querySelectorAll('.control-arrow')
                if (event.changedTouches[0].screenX > 2280) {
                    buttons[0].click()
                } else {
                    buttons[1].click()
                }
                setTimeout(handleCol, 500)
            }}
        >
            <div style={{background: '#161616', width: '36px', height: '36px', border: '1px solid #FBF9F6', borderRadius: '50%', margin: 'auto', marginRight: 0}}></div>
            <div style={{background: '#F2F2F2', width: '36px', height: '36px', border: '1px solid #FBF9F6', borderRadius: '50%', margin: 'auto', marginRight: 0}}></div>
            <div style={{background: '#36363D', width: '36px', height: '36px', border: '1px solid #FBF9F6', borderRadius: '50%', margin: 'auto', marginRight: 0}}></div>
        </Carousel>
        </div>
    );
};

export default Step1ColorCarousel;