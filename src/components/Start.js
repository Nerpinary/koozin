import React from "react";
import { Link } from "react-router-dom";
import hoody from '../images/opt/A/a__black_false_disabled_base-only.png'

export default function Start() {
    return(
        <div className='start'>
            <img className='start__image' src={hoody} alt='' />
            <div className='start__text-block'>
                <h1 className='start__title'>Собери свою худи</h1>
                <div className='start__number-block'>
                    <p className='start__number'>01</p>
                    <p className='start__text'>Выбери цвет основы</p>
                </div>
                <div className='start__number-block'>
                    <p className='start__number'>02</p>
                    <p className='start__text'>Выбери дизайн капюшона и кармана.<br />Карман и капюшон на молнии их можно менять</p>
                </div>
                <div className='start__number-block'>
                    <p className='start__number'>03</p>
                    <p className='start__text'>Выбери второй комплект в подарок</p>
                </div>
                <Link to='/step1' className='start__button'>Приступим</Link>
            </div>
        </div>
    )
}