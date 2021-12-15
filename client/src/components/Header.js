import React, {useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const Header = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
    <div className='header'>
        <div className='header__left'>
            <button className='header__menu-button' />
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
        <Link onClick={() => user.setIsAuth(true)} className='header__cart-button' to='basket' />
    </div>
    );
})

export default Header