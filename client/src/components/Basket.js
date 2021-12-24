import React from 'react';
import {Link} from "react-router-dom";
import close from '../images/tap-target.svg'
import black from '../images/base-only.webp'
import arrow from '../images/arrow.svg'

const Basket = ({handleClose}) => {
    return (
        <div className='basket' style={{width: '100vw', height: '100vh', position: 'absolute', top: 0, alignItems: 'flex-end', display: 'flex', flexDirection: 'column'}}>
            <div style={{width: '100%', background: '#161616', color: '#f4f4f4', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', position: 'relative'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <p style={{fontFamily: 'Raleway', margin: 'auto 0 auto 12px'}}>Корзина</p>
                    <button onClick={handleClose} style={{background: 'transparent', width: 'auto', height: '48px', border: 'none', padding: 0, color: '#f4f4f4', display: 'inline-block'}}>
                        <img src={close} />
                    </button>
                </div>
                <img style={{width: '50%', alignSelf: 'center', opacity: 0.5}} src={black} />
                <p style={{position: 'absolute', top: '50%', left: '50%', width: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Raleway', fontSize: '42px', lineHeight: '50px', textAlign: 'center'}}>пока ничего нет</p>
                <Link onClick={handleClose} to='/step1' style={{marginTop: '50px', marginBottom: '40px', background: 'transparent', width: 'auto', height: '48px', border: 'none', padding: 0, color: '#ED5A51', display: 'inline-block', fontFamily: 'Raleway', textDecoration: 'none'}}>
                    Собрать комплект
                    <img src={arrow} />
                </Link>
            </div>
        </div>
    );
};

export default Basket;