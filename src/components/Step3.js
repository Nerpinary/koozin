import React from "react";
import Popup from "./Popup";
import { selectedHoody } from "./Step1";
import polovina from '../images/polovina.png';
import full from '../images/full.png';
import vn from '../images/vn.png';
import fullPocket from '../images/fullPocket.png';
import squarePocket from '../images/squarePocket.png';
import circlePocket from '../images/circlePocket.png';
import vnPocket from '../images/vnPocket.png';

const baseUrl = 'http://localhost:3000'
let selectedCaption2 = '';
let selectedPocket2 = '';
let captionArrow = [polovina, full, vn]

export default function Step3() {

    function handleCaptionRight(){
        let captions = Array.from(document.querySelectorAll('.step2__caption'))

        for (let i = 0; i < captions.length; i++) {
            if (i === captions.length - 1) {
                captions[i].src = captionArrow[0]
                captions[i].alt = i
            } else {
                captions[i].src = captionArrow[i + 1]
                captions[i].alt = i
            }    
        }
        let zero = captionArrow[0]
        captionArrow[0] = captionArrow[1]
        captionArrow[1] = captionArrow[2]
        captionArrow[2] = zero 
        selectedCaptions()
        handlePockets()
    }

    function handleCaptionLeft(){       
        let captions = Array.from(document.querySelectorAll('.step2__caption'))

        for (let i = 0; i < captions.length; i++) {
            if (i === 0) {
                captions[i].src = captionArrow[captionArrow.length - 1]
                captions[i].alt = i
            } else {
                captions[i].src = captionArrow[i - 1]
                captions[i].alt = i
            }    
        }
        let zero = captionArrow[0]
        captionArrow[0] = captionArrow[2]
        captionArrow[2] = captionArrow[1]
        captionArrow[1] = zero   
        selectedCaptions() 
        handlePockets()
    }

    function handleHoverCaption() {
        let captions = document.querySelectorAll('.step2__caption')
        let pockets = document.querySelectorAll('.step2__pocket')
        let hoodies = document.querySelectorAll('.step1__image')

        pockets.forEach(pocket => pocket.classList.add('step2_opacity_05'))
        hoodies.forEach(hoodie => hoodie.classList.add('step2_opacity_05'))
        captions.forEach(caption => caption.classList.add('step2_opacity_1'))
        
    }
    function handlePocketRight() {
        let pockets = document.querySelectorAll('.step2__pocket')

        let savedPocket = pockets[1].src;
        pockets[1].src = pockets[2].src;
        pockets[2].src = pockets[0].src;
        pockets[0].src = savedPocket;
        selectedPockets()
    }

    function handlePocketLeft() {
        let pockets = document.querySelectorAll('.step2__pocket')

        let savedPocket = pockets[1].src;
        pockets[1].src = pockets[0].src;
        pockets[0].src = pockets[2].src;
        pockets[2].src = savedPocket;
        selectedPockets()
    }

    function hidePopup(){
        document.querySelector('#popup').classList.remove('popup_opened')
    }

    function selectedCaptions(){

        const radios = document.querySelectorAll('.step1__radio');
        if (radios) {
            for (let i = 0; i < radios.length; i++) {
                // eslint-disable-next-line no-cond-assign
                if (radios[i].checked === true) {
                    selectedCaption2 = radios[i].labels[0].children[1].attributes.src.nodeValue;
                    console.log(selectedCaption2)
                return
                }
            }
        }
    }

    function selectedPockets() {
        const radios = document.querySelectorAll('.step1__radio');
        if (radios) {
            for (let i = 0; i < radios.length; i++) {
                // eslint-disable-next-line no-cond-assign
                if (radios[i].checked === true) {
                    selectedPocket2 = radios[i].labels[0].children[2].attributes.src.nodeValue;
                    console.log(selectedPocket2)
                return
                }
            }
        }
    }

    function handlePockets() {
        let captions = Array.from(document.querySelectorAll('.step2__caption'))
        let pockets = Array.from(document.querySelectorAll('.step2__pocket'))
        let centerCaption = captions[1]
        const leftPocket = document.querySelector('#pocketLeft')
        const rigthPocket = document.querySelector('#pocketRight')
        console.log(centerCaption.src)
        console.log(full)

        if (centerCaption.src === baseUrl + full) {
            leftPocket.disabled = true
            rigthPocket.disabled = true
            pockets[1].src = fullPocket 
        } else {
            leftPocket.disabled = false
            rigthPocket.disabled  = false
            pockets[1].src = vnPocket
        }
        console.log(centerCaption)
    }

    function handleHoverPockets() {
        let captionsArray = Array.from(document.querySelectorAll('.step2__caption'))
        let captions = document.querySelectorAll('.step2__caption')
        let pockets = document.querySelectorAll('.step2__pocket')
        let hoodies = document.querySelectorAll('.step1__image')

        if (captionsArray[1].src !== baseUrl + full) {
        captions.forEach(pocket => pocket.classList.add('step2_opacity_05'))
        hoodies.forEach(hoodie => hoodie.classList.add('step2_opacity_05'))
        pockets.forEach(caption => caption.classList.add('step2_opacity_1'))
        }
    }

    function handleHoverLeavePocket() {
        let captionsArray = Array.from(document.querySelectorAll('.step2__caption'))
        let captions = document.querySelectorAll('.step2__caption')
        let pockets = document.querySelectorAll('.step2__pocket')
        let hoodies = document.querySelectorAll('.step1__image')

        if (captionsArray[1].src !== baseUrl + full) {
        captions.forEach(pocket => pocket.classList.toggle('step2_opacity_05'))
        hoodies.forEach(hoodie => hoodie.classList.toggle('step2_opacity_05'))
        pockets.forEach(caption => caption.classList.remove('step2_opacity_1'))
        }
    }

    function handleHoverLeaveCaption() {
        let captions = document.querySelectorAll('.step2__caption')
        let pockets = document.querySelectorAll('.step2__pocket')
        let hoodies = document.querySelectorAll('.step1__image')
        let captionsArray = Array.from(document.querySelectorAll('.step2__caption'))
        let centerCaption = captionsArray[1]

        pockets.forEach(pocket => pocket.classList.toggle('step2_opacity_05'))
        hoodies.forEach(hoodie => hoodie.classList.toggle('step2_opacity_05'))
        captions.forEach(caption => caption.classList.remove('step2_opacity_1'))

        for (let i = 0; i < captionsArray.length; i++) {
            captionsArray[i] = centerCaption
        }
    }

    setTimeout(selectedCaptions, 2900)
    setTimeout(selectedPockets, 2900)
    setTimeout(hidePopup, 3000)
    setTimeout(handlePockets, 2900)

    return(
        <div className='step1'>
            <Popup 
            number='03'
            text='Теперь выбери второй комплект в подарок'
            />
            <div className='step1__choose'>
                <input name='step2' type='radio' id='radio-11' value='' className='step1__radio' disabled='true' />
                <label className='step1__variant' for='radio-11'>
                    <img className='step1__image' src={selectedHoody} alt='' />
                    <img className='step2__caption' src={polovina} alt='polovina' />
                    <img className='step2__pocket' src={squarePocket} alt='' />
                </label>
                <div className='step2__arrows'>
                    <button onMouseLeave={handleHoverLeaveCaption} onMouseEnter={handleHoverCaption} onClick={handleCaptionLeft} className='step1__left-arrow' />
                    <button onMouseLeave={handleHoverLeavePocket} onMouseEnter={handleHoverPockets} onClick={handlePocketLeft} id='pocketLeft' className='step1__left-arrow' />
                </div>
                <input name='step2' type='radio' id='radio-12' value='' className='step1__radio center' defaultChecked />
                <label className='step1__variant' for='radio-12'>
                    <img className='step1__image' src={selectedHoody} alt='' />
                    <img className='step2__caption' src={full} alt='full' />
                    <img className='step2__pocket' src={fullPocket} alt='' />
                </label>
                <div className='step2__arrows'>
                    <button onMouseLeave={handleHoverLeaveCaption} onMouseEnter={handleHoverCaption} onClick={handleCaptionRight} className='step1__right-arrow' />
                    <button onMouseLeave={handleHoverLeavePocket} onMouseEnter={handleHoverPockets} onClick={handlePocketRight} id='pocketRight' className='step1__right-arrow' />
                </div>
                <input name='step2' type='radio' id='radio-13' value='' className='step1__radio' disabled='true' />
                <label className='step1__variant' for='radio-13'>
                    <img className='step1__image' src={selectedHoody} alt='' />
                    <img className='step2__caption' src={vn} alt='vn' />
                    <img className='step2__pocket' src={circlePocket} alt='' />
                </label>
            </div>   
        </div>
    )
}

export {selectedPocket2, selectedCaption2}