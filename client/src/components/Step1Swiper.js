import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import glow from '../images/glow.webp'
import black from '../images/hoodies/A/a__black_false_disabled_base-only.webp'
import white from '../images/hoodies/A/a__white_false_disabled_base-only.webp'
import grey from '../images/hoodies/A/a__grey_false_disabled_base-only.webp'
import desc1 from '../images/black.svg'
import desc2 from '../images/white.svg'
import desc3 from '../images/grey.svg'

export let selector = ''

export default function Step1Swiper() {

    let clientXStart = ''
    let clientXEnd = ''

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
    }

    const handleBack = () => {
        let back = document.querySelector('.backgrounds')
        let texts = document.querySelectorAll('.colortexts')
        let selectedColor = document.querySelector('.selected').children[0].children[0].alt
        if (selectedColor === 'white') {
            back.classList.remove('backgrounds-black')
            back.classList.remove('backgrounds-grey')
            back.classList.add('backgrounds-white')
            for (let i = 0; i < texts.length; i++) {
                if (texts[i].alt === 'white') {
                    texts[i].classList.add('colortexts_active')
                } else {
                    texts[i].classList.remove('colortexts_active')
                }
            }
        } else if (selectedColor === 'black') {
            back.classList.remove('backgrounds-white')
            back.classList.remove('backgrounds-grey')
            back.classList.add('backgrounds-black')
            for (let i = 0; i < texts.length; i++) {
                if (texts[i].alt === 'black') {
                    texts[i].classList.add('colortexts_active')
                } else {
                    texts[i].classList.remove('colortexts_active')
                }
            }
        } else if (selectedColor === 'grey') {
            back.classList.remove('backgrounds-black')
            back.classList.remove('backgrounds-white')
            back.classList.add('backgrounds-grey')
            for (let i = 0; i < texts.length; i++) {
                if (texts[i].alt === 'grey') {
                    texts[i].classList.add('colortexts_active')
                } else {
                    texts[i].classList.remove('colortexts_active')
                }
            }
        } else {
            console.log('sss')
        }
    }

    const handleSelectColor = () => {
        let selectedColor = document.querySelector('.selected').children[0].children[0].alt
        selector = selectedColor
    }

    setTimeout(handleSelectColor, 300)

    return (
        <>
            <div className='backgrounds backgrounds-black' style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, width: '100%'}}></div>
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows={true}
                onSwipeStart={(event: React.TouchEvent) => {
                    clientXStart = event.changedTouches[0].screenX
                }}
                onSwipeEnd={(event: React.TouchEvent) => {
                    let buttons = document.querySelectorAll('.control-arrow')
                    clientXEnd = event.changedTouches[0].screenX
                    if (clientXEnd > clientXStart) {
                        buttons[2].click()
                    } else {
                        buttons[3].click()
                    }
                    setTimeout(handleCol, 300)
                    setTimeout(handleBack, 300)
                    setTimeout(handleSelectColor, 300)
                }}
                arr
            >
                <div style={{height: 'calc(100vh - 100px)', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                    <img style={{width: '60%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%', zIndex: 3}} src={black} alt='black' />
                    <img style={{width: '80%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%'}} src={glow} />
                    <img className='colortexts colortexts_active' src={desc1} alt='black' />
                </div>
                <div style={{height: 'calc(100vh - 100px)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                    <img style={{width: '60%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%', zIndex: 3}} src={white} alt='white' />
                    <img style={{width: '80%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%'}} src={glow} />
                    <img className='colortexts colortexts_active' src={desc2} alt='white' />
                </div>
                <div style={{height: 'calc(100vh - 100px)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                    <img style={{width: '60%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%', zIndex: 3}} src={grey} alt='grey' />
                    <img style={{width: '80%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%'}} src={glow} />
                    <img className='colortexts colortexts_active' src={desc3} alt='grey' />
                </div>
            </Carousel>

        </>
    );
};