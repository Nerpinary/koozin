import React from "react";
import { Link } from "react-router-dom";
import arrow from '../images/arrowWhite.svg'
import Step1ColorCarousel from "./Step1ColorCarousel";


export default function BottomPanel() {


    return(
        <div style={{background: '#161616', position: 'fixed', bottom: 0, left: 0, width: '100vw', height: '120px'}}>
            <div style={{height: '4px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 0}}>
                <div style={{width: '49%', borderRadius: '4px', color: '#ED5A51'}}></div>
                <div style={{width: '24%', borderRadius: '4px', color: '#f4f4f4'}}></div>
                <div style={{width: '24%', borderRadius: '4px', color: '#f4f4f4'}}></div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Link to='/' style={{border: 'none', background: 'transparent', height: '28px'}}>
                    <img style={{height: '28px', transform: 'rotate(180deg)'}} src={arrow}/>
                </Link>
                <p style={{color: '#f4f4f4', fontSize: '20px', lineHeight: '28px', fontFamily: 'Raleway'}}>Цвет основы</p>
                <button style={{border: 'none', background: 'transparent', height: '28px'}}>
                    <img style={{height: '28px'}} src={arrow}/>
                </button>
            </div>
            <Step1ColorCarousel />
        </div>
    )
}