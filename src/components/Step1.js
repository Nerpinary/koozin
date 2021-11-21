import React from "react";
import Popup from "./Popup";
import hoodyBlack from '../images/base__a_black.png';
import hoodyWhite from '../images/base__a_white.png';
import hoodyGrey from '../images/base__a_grey.png';

let selectedHoody = {};

function Step1() {

    function handleRight(){

        const container = document.querySelector('.step1__choose');

        if (container) {
            const input3 = container.children[3];
            const input6 = container.children[6];
            const input0 = container.children[0];
            const label1 = container.children[1];
            const label4 = container.children[4];
            const label7 = container.children[7];

            if (input0 && input3 && input6 && label1 && label4 && label7) {
                input3.attributes.defaultChecked = false
                input6.attributes.defaultChecked = true
                let saveInner1 = input0.innerHTML
                let saveInner2 = label1.innerHTML
                input0.innerHTML = input3.innerHTML
                label1.innerHTML = label4.innerHTML
                input3.innerHTML = input6.innerHTML
                label4.innerHTML = label7.innerHTML
                input6.innerHTML = saveInner1
                label7.innerHTML = saveInner2;
                selectedBase();
            } else {
                console.log('Not found')
            }
        }
    }
    
    function handleLeft(){

        const container = document.querySelector('.step1__choose');

        if (container) {
            const input3 = container.children[3];
            const input6 = container.children[6];
            const input0 = container.children[0];
            const label1 = container.children[1];
            const label4 = container.children[4];
            const label7 = container.children[7];

            if (input0 && input3 && input6 && label1 && label4 && label7) {
                input3.attributes.defaultChecked = false
                input0.attributes.defaultChecked = true
                let saveInner1 = input6.innerHTML
                let saveInner2 = label7.innerHTML
                input6.innerHTML = input3.innerHTML
                label7.innerHTML = label4.innerHTML
                input3.innerHTML = input0.innerHTML
                label4.innerHTML = label1.innerHTML
                input0.innerHTML = saveInner1
                label1.innerHTML = saveInner2;
                selectedBase();
            } else {
                console.log('Not found')
            }
            
        }     
    }
    
    function selectedBase(){

        const radios = document.querySelectorAll('.step1__radio');

        if (radios) {
            for (let i = 0; i < radios.length; i++) {
                // eslint-disable-next-line no-cond-assign
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
                <label className='step1__variant' htmlFor='radio-1'>
                    <img className='step1__image' src={hoodyWhite} alt={hoodyWhite} />
                </label>
                <button className='step1__left-arrow' onClick={handleLeft} />
                <input name='step1' type='radio' id='radio-2' value='hoodyBlack' className='step1__radio step1__radio_active' defaultChecked />
                <label className='step1__variant' htmlFor='radio-2'>
                    <img className='step1__image' src={hoodyBlack} alt={hoodyBlack} />
                </label>
                <button className='step1__right-arrow' onClick={handleRight} />
                <input name='step1' type='radio' id='radio-3' value='hoodyGrey' className='step1__radio' disabled='true' />
                <label className='step1__variant' htmlFor='radio-3'>
                    <img className='step1__image' src={hoodyGrey} alt={hoodyGrey} />
                </label>
            </div>   
        </div>
    )
}

export {selectedHoody, Step1};