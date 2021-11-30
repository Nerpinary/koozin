import React from "react";
import { Link } from "react-router-dom";
import Color from "./Color";


export default function BottomPanel({back, next, colors}) {

    function checkArrows() {
        const left = document.querySelector('.bottom-panel__left-button')
        const right = document.querySelector('.bottom-panel__right-button')

        if (colors.length === 1) {
            left.style.display = 'none'
            right.style.display = 'none'
            console.log('noDisp')
        } else {
            left.style.display = 'block'
            right.style.display = 'block'
            console.log('Disp')
        }
    }

    setTimeout(checkArrows, 2000)

    return(
        <div className='bottom-panel'>
            <Link to={back} className='bottom-panel__button-back' />
            <div className='bottom-panel__color-choose'>
                <button className='bottom-panel__left-button' />
                <ul className='bottom-panel__colors'>
                    {colors.map((item) => (
                        item
                    ))}
                </ul>
                <button className='bottom-panel__right-button' />
            </div>
            <Link to={next} className='bottom-panel__button-next'>Продолжить</Link>
        </div>
    )
}