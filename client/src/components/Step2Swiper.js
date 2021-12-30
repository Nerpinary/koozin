import React, {useState} from 'react';
import black from "../images/hoodies/A/a__black_false_disabled_base-only.webp";
import white from "../images/hoodies/A/a__white_false_disabled_base-only.webp";
import grey from "../images/hoodies/A/a__grey_false_disabled_base-only.webp";

import a_b_apr_all from '../images/opt/A/apricot/a__black_true_apricot_all.png'
import a_w_apr_all from '../images/opt/A/apricot/a__white_true_apricot_all.png'
import a_g_apr_all from '../images/opt/A/apricot/a__grey_true_apricot_all.png'

import a_b_ban_all from '../images/opt/A/banana/a__black_true_banana_all.png'
import a_w_ban_all from '../images/opt/A/banana/a__white_true_banana_all.png'
import a_g_ban_all from '../images/opt/A/banana/a__grey_true_banana_all.png'

import b_b_ba_lr_all from '../images/opt/B/banana-apricot/b__black_l-r_banana-apricot_all.png'
import b_b_ba_io_all from '../images/opt/B/banana-apricot/b__black_i-o_banana-apricot_all.png'
import b_w_ba_lr_all from '../images/opt/B/banana-apricot/b__white_l-r_banana-apricot_all.png'
import b_w_ba_io_all from '../images/opt/B/banana-apricot/b__white_i-o_banana-apricot_all.png'
import b_g_ba_lr_all from '../images/opt/B/banana-apricot/b__grey_l-r_banana-apricot_all.png'
import b_g_ba_io_all from '../images/opt/B/banana-apricot/b__grey_i-o_banana-apricot_all.png'

import c_b_ba_lr_all from '../images/opt/C/banana-apricot/c__black_l-r_banana-apricot_all.png'
import c_b_ba_io_all from '../images/opt/C/banana-apricot/c__black_i-o_banana-apricot_all.png'
import c_w_ba_lr_all from '../images/opt/C/banana-apricot/c__white_l-r_banana-apricot_all.png'
import c_w_ba_io_all from '../images/opt/C/banana-apricot/c__white_i-o_banana-apricot_all.png'
import c_g_ba_lr_all from '../images/opt/C/banana-apricot/c__grey_l-r_banana-apricot_all.png'
import c_g_ba_io_all from '../images/opt/C/banana-apricot/c__grey_i-o_banana-apricot_all.png'

import d_b_ba_lr_all from '../images/opt/D/banana-apricot/d__black_l-r_banana-apricot_all.png'
import d_b_ba_io_all from '../images/opt/D/banana-apricot/d__black_i-o_banana-apricot_all.png'
import d_w_ba_lr_all from '../images/opt/D/banana-apricot/d__white_l-r_banana-apricot_all.png'
import d_w_ba_io_all from '../images/opt/D/banana-apricot/d__white_i-o_banana-apricot_all.png'
import d_g_ba_lr_all from '../images/opt/D/banana-apricot/d__grey_l-r_banana-apricot_all.png'
import d_g_ba_io_all from '../images/opt/D/banana-apricot/d__grey_i-o_banana-apricot_all.png'

import {selector} from "./Step1Swiper";
import SlidesArray from "./SlidesArray";
import SlidesCards from "./SlidesCards";

const black_ba_io_array = [c_b_ba_io_all, a_b_ban_all, b_b_ba_io_all, d_b_ba_io_all]
const black_ba_lr_array = [c_b_ba_lr_all, a_b_apr_all, b_b_ba_lr_all, d_b_ba_lr_all]
const white_ba_io_array = [c_w_ba_io_all, a_w_ban_all, b_w_ba_io_all, d_w_ba_io_all]
const white_ba_lr_array = [c_w_ba_lr_all, a_w_apr_all, b_w_ba_lr_all, d_w_ba_lr_all]
const grey_ba_io_array = [c_g_ba_io_all, a_g_ban_all, b_g_ba_io_all, d_g_ba_io_all]
const grey_ba_lr_array = [c_g_ba_lr_all, a_g_apr_all, b_g_ba_lr_all, d_g_ba_lr_all]

const ba_lr_array = [black_ba_lr_array, white_ba_lr_array, grey_ba_lr_array]
const ba_io_array = [black_ba_io_array, white_ba_io_array, grey_ba_io_array]

const Step2Swiper = () => {

    let selectedArray = []
    const [array, setArray] = useState(selectedArray)

    for (let i = 0; i < 4; i++) {
        if (selector === 'black') {
            selectedArray[i] = ba_lr_array[0][i]
        } else if (selector === 'white') {
            selectedArray[i] = ba_lr_array[1][i]
        } else if (selector === 'grey') {
            selectedArray[i] = ba_lr_array[2][i]
        } else {
            console.log('sss')
        }
    }

    const change = () => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === ba_lr_array[0][i]) {
                setArray(ba_io_array[0])
            } else if (array[i] === ba_io_array[0][i]) {
                setArray(ba_lr_array[0])
            } else if (array[i] === ba_lr_array[1][i]) {
                setArray(ba_io_array[1])
            } else if (array[i] === ba_io_array[1][i]) {
                setArray(ba_lr_array[1])
            } else if (array[i] === ba_lr_array[2][i]) {
                setArray(ba_io_array[2])
            } else if (array[i] === ba_io_array[2][i]) {
                setArray(ba_lr_array[2])
            } else {
                console.log('sss')
            }
        }
    }

    // const host = 'http://localhost:3000'

    // const blockArrows = () => {
    //     const buttons = document.querySelectorAll('.control-arrow')
    //     const selectedSlide = document.querySelectorAll('.selected')
    //     console.log(buttons)
    //     for (let i = 0; i < selectedSlide.length; i++) {
    //         console.log(selectedSlide[i].children[0].children[0].src)
    //         console.log(ba_lr_array[1][1])
    //         if (selectedSlide[i].children[0].children[0].src === host + ba_lr_array[1][1]) {
    //             buttons[0].disabled = true
    //             buttons[1].disabled = true
    //         } else {
    //             buttons[0].disabled = false
    //             buttons[1].disabled = false
    //         }
    //     }
    // }

    // const handleBlok = () => {
    //     setTimeout(blockArrows,300)
    // }

    // setTimeout(blockArrows, 300)

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100vw'}}>
            <div className='backgrounds backgrounds-black' style={{height: 'calc(100vh - 120px)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, width: '100%'}}></div>
            <SlidesArray changeArray={change} />
            <SlidesCards array={array} />
        </div>
    );
};

export default Step2Swiper;