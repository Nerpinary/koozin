import React from "react";

export default function Popup({number, text}) {
    return(
        <div id='popup' className='popup popup_opened'>
            <div className='popup__container'>
                <p className='popup__number'>{number}</p>
                <p className='popup__text'>{text}</p>
            </div>
        </div>
    )
}