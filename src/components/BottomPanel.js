import React from "react";
import { Link } from "react-router-dom";


export default function BottomPanel({back, next}) {
    return(
        <div className='bottom-panel'>
            <Link to={back} className='bottom-panel__button-back' />
            <Link to={next} className='bottom-panel__button-next'>Продолжить</Link>
        </div>
    )
}