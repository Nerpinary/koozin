import React from "react";

export default function Popup({number, title, text}) {
    return(
        <div id='popup' className='popup popup_opened'>
            <div className='popup__container'>
                <p className='popup__number'>{number}</p>
                <p className='popup__title'>{title}</p>
                <p className='popup__text'>{text}</p>
            </div>
        </div>
    )
}