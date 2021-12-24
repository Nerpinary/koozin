import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import base from '../images/2.webp'
import fon from '../images/bg-line.webp'
import hood1 from '../images/3.webp'
import hood2 from '../images/1.webp'
import desc1 from '../images/Vector.svg'
import desc2 from '../images/Vector2.svg'

export default function StartSwiper() {
        return (
            <>
                <img style={{width: '100%', position: 'absolute'}} src={fon}/>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    showArrows={false}
                    swipeScrollTolerance={5}
                    preventMovementUntilSwipeScrollTolerance={true}

                    // renderIndicator={() => {return(<></>)}}
                >
                    <div>
                        <img style={{width: '100%', position: 'relative', zIndex: 1}} src={base} />
                    </div>
                    <div>
                        <img style={{width: '100%', position: 'relative', zIndex: 3}} src={hood1} />
                        <img style={{width: '70%', position: 'absolute', bottom: 0, right: 0, zIndex: 4}} src={desc1} />
                    </div>
                    <div>
                        <img style={{width: '100%', position: 'relative', zIndex: 3}} src={hood2} />
                        <img style={{width: '70%', position: 'absolute', bottom: 0, right: 0, zIndex: 4}} src={desc2} />
                    </div>
                </Carousel>
            </>
        );
};


