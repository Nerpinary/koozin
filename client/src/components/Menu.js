import React from 'react';
import {Link} from "react-router-dom";
import close from '../images/tap-target.svg'

const Menu = ({handleClose}) => {
    return (
        <div className='menu' style={{width: '100vw', height: '100vh', position: 'absolute', top: 0, alignItems: 'flex-end', display: 'flex', flexDirection: 'column'}}>
            <div style={{width: '100%', background: '#ED5A51', color: '#f4f4f4', display: 'flex', flexDirection: 'column', paddingLeft: '32px'}}>
                <button onClick={handleClose} style={{background: 'transparent', width: '48px', height: '48px', border: 'none', padding: 0, position: 'absolute', right: 0}}>
                    <img src={close} />
                </button>
                <p style={{color: '#f4f4f4', fontSize: 14, lineHeight: '22px', marginTop: '48px', transform: 'rotate(90deg)', width: 'fit-content', fontFamily: 'Raleway', marginLeft: '-24px'}}>koozin</p>
                <Link onClick={handleClose} style={{color: '#f4f4f4', textDecoration: 'none', fontFamily: 'Raleway', fontSize: 36, lineHeight: '42px'}} to='/'>
                    Конструктор
                    <div style={{width:'100%', height: '1px', background: '#f4f4f4', marginTop: '16px', marginBottom: '20px'}}></div>
                </Link>
                <Link style={{color: '#f4f4f4', textDecoration: 'none', fontFamily: 'Raleway', fontSize: 36, lineHeight: '42px'}} to='/'>
                    Отдельные детали
                    <div style={{width:'100%', height: '1px', background: '#f4f4f4', marginTop: '16px', marginBottom: '20px'}}></div>
                </Link>
                <Link style={{color: '#f4f4f4', textDecoration: 'none', fontFamily: 'Raleway', fontSize: 36, lineHeight: '42px'}} to='/'>
                    Как это работает
                    <div style={{width:'100%', height: '1px', background: '#f4f4f4', marginTop: '16px', marginBottom: '20px'}}></div>
                </Link>
                <Link style={{color: '#f4f4f4', textDecoration: 'none', fontFamily: 'Raleway', fontSize: 36, lineHeight: '42px'}} to='/'>
                    Доставка и оплата
                    <div style={{width:'100%', height: '1px', background: '#f4f4f4', marginTop: '16px', marginBottom: '80px'}}></div>
                </Link>
            </div>
        </div>
    );
};

export default Menu;