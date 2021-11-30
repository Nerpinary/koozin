import React from "react";
import Popup from "./Popup";
import hoodyBlack from '../images/opt/A/a__black_false_disabled_base-only.png';
import hoodyWhite from '../images/opt/A/a__white_false_disabled_base-only.png';
import hoodyGrey from '../images/opt/A/a__grey_false_disabled_base-only.png';

let selectedHoody = {};
let hoodies = [hoodyWhite, hoodyBlack, hoodyGrey];
const baseUrl = 'http://u115964.test-handyhost';

function Step1() {

    function handleRight() {
        const images = document.querySelectorAll('.step1__image')
        let save = hoodies[0]

        for (let i = 0; i < hoodies.length; i++) {
            if (i === hoodies.length - 1) {
                hoodies[i] = save
                images[i].classList.add('move_left-tp')
            } else {
                hoodies[i] = hoodies[i + 1]
                images[1].classList.add('move_left-plus')
                images[0].classList.add('move_left-minus')
            }
            images[i].src = hoodies[i]
        }
        removeMove(images[1])
        removeMove(images[0])
        removeMove(images[2])
        selectedBase()
    }

    function handleLeft() {
        const images = document.querySelectorAll('.step1__image')
        let save = hoodies[hoodies.length - 1]

        for (let i = hoodies.length - 1; i >= 0; i--) {
            if (i === 0) {
                hoodies[i] = save
                images[i].classList.add('move_right-tp')
            } else {
                hoodies[i] = hoodies[i - 1]
                images[1].classList.add('move_right-plus')
                images[2].classList.add('move_right-minus')
            }
            images[i].src = hoodies[i]
        }
        removeMove(images[1])
        removeMove(images[0])
        removeMove(images[2])
        selectedBase()
    }

    function removeMove(item) {
        setTimeout(() => item.classList.remove('move_left-plus'), 500)
        setTimeout(() => item.classList.remove('move_left-minus'), 500)
        setTimeout(() => item.classList.remove('move_left-tp'), 500)
        setTimeout(() => item.classList.remove('move_right-plus'), 500)
        setTimeout(() => item.classList.remove('move_right-minus'), 500)
        setTimeout(() => item.classList.remove('move_right-tp'), 500)
    }

    function selectedBase(){

        const radios = document.querySelectorAll('.step1__radio');

        if (radios) {
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked === true) {
                    selectedHoody = radios[i].labels[0].children[0].attributes.src.nodeValue;
                    console.log(selectedHoody)
                return
                }
            }
        }
    }

    function hidePopup(){
        document.querySelector('#popup').classList.remove('popup_opened')
    }

    setTimeout(selectedBase, 2900);
    setTimeout(hidePopup, 3000);

    return(
        <div className='step1'>
            <Popup 
            number='01'
            text='Для начала выберем цвет основы'
            />
            <div id='step1Choose' className='step1__choose'>
                <input name='step1' type='radio' id='radio-1' value='hoodyWhite' className='step1__radio' disabled='true' />
                <label className='step1__variant step1__variant_mobile' htmlFor='radio-1'>
                    <img className='step1__image' src={hoodies[0]} alt={hoodies[0]} />
                </label>
                <button className='step1__left-arrow' onClick={handleLeft} />
                <input name='step1' type='radio' id='radio-2' value='hoodyBlack' className='step1__radio step1__radio_active' defaultChecked />
                <label className='step1__variant' htmlFor='radio-2'>
                    <img className='step1__image' src={hoodies[1]} alt={hoodies[1]} />
                </label>
                <button className='step1__right-arrow' onClick={handleRight} />
                <input name='step1' type='radio' id='radio-3' value='hoodyGrey' className='step1__radio' disabled='true' />
                <label className='step1__variant step1__variant_mobile' htmlFor='radio-3'>
                    <img className='step1__image' src={hoodies[2]} alt={hoodies[2]} />
                </label>
            </div>   
        </div>
    )
}

export {selectedHoody, Step1};