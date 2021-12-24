import React, {useContext, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import Menu from "./Menu";
import Basket from "./Basket";

const Header = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const handlerMenu = () => {
        document.querySelector('.menu').classList.add('menu_opened')
    }

    const handlerBasket = () => {
        document.querySelector('.basket').classList.add('basket_opened')
    }

    const closePopup = () => {
        document.querySelector('.menu').classList.remove('menu_opened')
        document.querySelector('.basket').classList.remove('basket_opened')
    }

    return (
    <div className='header'>
        <Menu handleClose={closePopup} />
        <Basket handleClose={closePopup} />
        <div className='header__left'>
            <button onClick={handlerMenu} className='header__menu-button' />
            <Link to='/' className='header__logo' />
            <Link className='header__link header__link_selected' to=''>Конструктор</Link>
            <Link className='header__link' to=''>Отдельные детали</Link>
            <Link className='header__link' to=''>Как это работает</Link>
        </div>
        {user.isAuth ?
            <div>
                <Button className='header__link' onClick={() => history.push(ADMIN_ROUTE)}>Админка</Button>
                <Button className='header__link' onClick={() => logOut()}>Выйти</Button>
            </div>
            : <div>
                <Button className='header__link' onClick={() => history.push(LOGIN_ROUTE)}>Войти</Button>
            </div>
        }
        <button onClick={handlerBasket} className='header__cart-button' />
    </div>
    );
})

export default Header