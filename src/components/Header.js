import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
    <div className='header'>
        <div className='header__left'>
        <Link to='/' className='header__logo' href='#' />
        <Link className='header__link header__link_selected' to=''>Конструктор</Link>
        <Link className='header__link' to=''>Отдельные детали</Link>
        <Link className='header__link' to=''>Как это работает</Link>
        </div>
        <Link className='header__cart-button' to='basket' />
    </div>
    );
}