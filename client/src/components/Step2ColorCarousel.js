import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Step2ColorCarousel = ({array}) => {

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Carousel
                style={{overflow: 'visible'}}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                selectedItem={0}
            >
                {array.map(item =>
                    <img src={item} alt={item} />
                )}
                {/*<div style={{background: '#161616', width: '36px', height: '36px', border: '1px solid #FBF9F6', borderRadius: '50%', margin: 'auto', marginRight: 0}}></div>*/}
                {/*<div style={{background: '#F2F2F2', width: '36px', height: '36px', border: '1px solid #FBF9F6', borderRadius: '50%', margin: 'auto', marginRight: 0}}></div>*/}
                {/*<div style={{background: '#36363D', width: '36px', height: '36px', border: '1px solid #FBF9F6', borderRadius: '50%', margin: 'auto', marginRight: 0}}></div>*/}
            </Carousel>
        </div>
    );
};

export default Step2ColorCarousel;