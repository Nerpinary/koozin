import React from "react";
import { Link } from "react-router-dom";
import arrow from '../images/arrowWhite.svg'

export default function BottomPanel({carousel, linkNext, linkBack, title}) {

    return(
        <div style={{background: '#161616', position: 'fixed', bottom: 0, left: 0, width: '100vw'}}>
            <div style={{height: '4px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 0}}>
                <div className='stripe stripe_active'></div>
                <div className='stripe'></div>
                <div className='stripe'></div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Link to={linkBack} style={{border: 'none', background: 'transparent', height: '28px'}}>
                    <img style={{height: '28px', transform: 'rotate(180deg)'}} src={arrow}/>
                </Link>
                <p style={{color: '#f4f4f4', fontSize: '20px', lineHeight: '28px', fontFamily: 'Raleway', margin: 0}}>{title}</p>
                <Link to={linkNext} style={{border: 'none', background: 'transparent', height: '28px'}}>
                    <img style={{height: '28px'}} src={arrow}/>
                </Link>
            </div>
            {carousel}
        </div>
    )
}