import React from "react";
import Popup from "./Popup";
import { selectedHoody } from "./Step1";
import baseBlack from '../images/opt/A/a__black_false_disabled_base-only.png';
import baseWhite from '../images/opt/A/a__white_false_disabled_base-only.png';
import baseGrey from '../images/opt/A/a__grey_false_disabled_base-only.png';
import blackDBase from '../images/opt/D/d__black_none_disabled_base-only.png';
import blackAprAllA from '../images/opt/A/apricot/a__black_true_apricot_all.png';
import blackBBase from '../images/opt/B/b__black_none_disabled_base-only.png';
import blackCBase from '../images/opt/C/c__black_none_disabled_base-only.png';
import whiteDBase from '../images/opt/D/d__white_none_disabled_base-only.png';
import whiteAprAllA from '../images/opt/A/apricot/a__white_true_apricot_all.png';
import whiteBBase from '../images/opt/B/b__white_none_disabled_base-only.png';
import whiteCBase from '../images/opt/C/c__white_none_disabled_base-only.png';
import greyDBase from '../images/opt/D/d__grey_none_disabled_base-only.png';
import greyAprAllA from '../images/opt/A/apricot/a__grey_true_apricot_all.png';
import greyBBase from '../images/opt/B/b__grey_none_disabled_base-only.png';
import greyCBase from '../images/opt/C/c__grey_none_disabled_base-only.png';
import whiteAprPocketD from '../images/opt/D/banana-apricot/d__white_none_banana-apricot_pocket-only.png'
import whiteAprPocketA from '../images/opt/A/apricot/a__white_false_apricot_pocket-only.png'
import whiteAprPocketB from '../images/opt/B/banana-apricot/b__white_none_banana-apricot_pocket-only.png'
import whiteAprPocketC from '../images/opt/C/banana-apricot/c__white_none_banana-apricot_pocket-only.png'
import whiteAprAllDlr from '../images/opt/D/banana-apricot/d__white_l-r_banana-apricot_all.png'
import whiteAprAllBlr from '../images/opt/B/banana-apricot/b__white_l-r_banana-apricot_all.png'
import whiteAprAllClr from '../images/opt/C/banana-apricot/c__white_l-r_banana-apricot_all.png'
import whiteAprAllDio from '../images/opt/D/banana-apricot/d__white_i-o_banana-apricot_all.png'
import whiteAprAllBio from '../images/opt/B/banana-apricot/b__white_i-o_banana-apricot_all.png'
import whiteAprAllCio from '../images/opt/C/banana-apricot/c__white_i-o_banana-apricot_all.png'
import blackAprPocketD from '../images/opt/D/banana-apricot/d__black_none_banana-apricot_pocket-only.png'
import blackAprPocketA from '../images/opt/A/apricot/a__black_false_apricot_pocket-only.png'
import blackAprPocketB from '../images/opt/B/banana-apricot/b__black_none_banana-apricot_pocket-only.png'
import blackAprPocketC from '../images/opt/C/banana-apricot/c__black_none_banana-apricot_pocket-only.png'
import blackAprAllDlr from '../images/opt/D/banana-apricot/d__black_l-r_banana-apricot_all.png'
import blackAprAllBlr from '../images/opt/B/banana-apricot/b__black_l-r_banana-apricot_all.png'
import blackAprAllClr from '../images/opt/C/banana-apricot/c__black_l-r_banana-apricot_all.png'
import blackAprAllDio from '../images/opt/D/banana-apricot/d__black_i-o_banana-apricot_all.png'
import blackAprAllBio from '../images/opt/B/banana-apricot/b__black_i-o_banana-apricot_all.png'
import blackAprAllCio from '../images/opt/C/banana-apricot/c__black_i-o_banana-apricot_all.png'
import greyAprPocketD from '../images/opt/D/banana-apricot/d__grey_none_banana-apricot_pocket-only.png'
import greyAprPocketA from '../images/opt/A/apricot/a__grey_false_apricot_pocket-only.png'
import greyAprPocketB from '../images/opt/B/banana-apricot/b__grey_none_banana-apricot_pocket-only.png'
import greyAprPocketC from '../images/opt/C/banana-apricot/c__grey_none_banana-apricot_pocket-only.png'
import greyAprAllDlr from '../images/opt/D/banana-apricot/d__grey_l-r_banana-apricot_all.png'
import greyAprAllBlr from '../images/opt/B/banana-apricot/b__grey_l-r_banana-apricot_all.png'
import greyAprAllClr from '../images/opt/C/banana-apricot/c__grey_l-r_banana-apricot_all.png'
import greyAprAllDio from '../images/opt/D/banana-apricot/d__grey_i-o_banana-apricot_all.png'
import greyAprAllBio from '../images/opt/B/banana-apricot/b__grey_i-o_banana-apricot_all.png'
import greyAprAllCio from '../images/opt/C/banana-apricot/c__grey_i-o_banana-apricot_all.png'
import Color from "./Color";
import BottomPanel from "./BottomPanel";

let oneColors = [Color('color_apr'), Color('color_ban'), Color('color_car'), Color('color_hea'), Color('color_ibi'), Color('color_man'), Color('color_pal'), Color('color_pin'),Color('color_pop'), Color('color_tar')]
let twoColors = [Color('color_ban-apr'), Color('color_man-ibi'), Color('color_pal-hea'), Color('color_pin-car'), Color('color_tar-pop')]

let blackBasePack = [blackDBase, blackAprAllA, blackBBase];
let whiteBasePack = [whiteDBase, whiteAprAllA, whiteBBase];
let greyBasePack = [greyDBase, greyAprAllA, greyBBase];

const whiteAprPocketPack = ['', whiteAprPocketD, whiteAprPocketA, whiteAprPocketB, whiteAprPocketC, '']
const whiteAprAllPackLr = ['', whiteAprAllDlr, whiteAprAllA, whiteAprAllBlr, whiteAprAllClr, '']
const whiteAprAllPackIo = ['', whiteAprAllDio, whiteAprAllA, whiteAprAllBio, whiteAprAllCio, '']
const whiteEmptyPack = ['', whiteDBase, baseWhite, whiteBBase, whiteCBase, '']
const blackAprPocketPack = ['', blackAprPocketD, blackAprPocketA, blackAprPocketB, blackAprPocketC, '']
const blackAprAllPackLr = ['', blackAprAllDlr, blackAprAllA, blackAprAllBlr, blackAprAllClr, '']
const blackAprAllPackIo = ['', blackAprAllDio, blackAprAllA, blackAprAllBio, blackAprAllCio, '']
const blackEmptyPack = ['', blackDBase, baseBlack, blackBBase, blackCBase, '']
const greyAprPocketPack = ['', greyAprPocketD, greyAprPocketA, greyAprPocketB, greyAprPocketC, '']
const greyAprAllPackLr = ['', greyAprAllDlr, greyAprAllA, greyAprAllBlr, greyAprAllClr, '']
const greyAprAllPackIo = ['', greyAprAllDio, greyAprAllA, greyAprAllBio, greyAprAllCio, '']
const greyEmptyPack = ['', greyDBase, baseGrey, greyBBase, greyCBase, '']

const baseUrl = 'http://u115964.test-handyhost.ru'
let selectedColors = [];
let selectedBases = [];

let dispArray = [];

// for (let i; i < whiteAprAllPackLr; i++) {
//     dispArray[i] = whiteAprAllPackLr[i]
// }

export default function Step2() {

    function displayCaptions() {
        const images = document.querySelectorAll('.step1__image')

        if (selectedHoody === baseBlack) {
            for (let i = 0; i < blackAprAllPackLr.length; i++) {
                dispArray[i] = blackAprAllPackLr[i]
                console.log('расрас')
            }
        } else if (selectedHoody === baseWhite) {
            for (let i = 0; i < whiteAprAllPackLr.length; i++) {
                dispArray[i] = whiteAprAllPackLr[i]
                console.log('расрас')
            }
        } else if (selectedHoody === baseGrey) {
            for (let i = 0; i < greyAprAllPackLr.length; i++) {
                dispArray[i] = greyAprAllPackLr[i]
                console.log('расрас')
            }
        } else {
            console.log('Not found')
        }
    }

    function handleBase() {
        const images = document.querySelectorAll('.step1__image')

        if (selectedHoody === baseBlack) {
            for (let i = 0; i < blackBasePack.length; i++) {
                selectedBases[i] = blackBasePack[i]
                images[i].src = selectedBases[i]
            }
        } else if (selectedHoody === baseWhite) {
            for (let i = 0; i < whiteBasePack.length; i++) {
                selectedBases[i] = whiteBasePack[i]
                images[i].src = selectedBases[i]
            }
        } else if (selectedHoody === baseGrey) {
            for (let i = 0; i < greyBasePack.length; i++) {
                selectedBases[i] = greyBasePack[i]
                images[i].src = selectedBases[i]
            }
        } else {
            console.log('Not found')
        }
    }

    function blockCaptionSelector() {
        const images = document.querySelectorAll('.step1__image')
        const leftCaption = document.querySelector('#captionLeft')
        const rightCaption = document.querySelector('#captionRight')

        if (images[1].src === baseUrl + blackAprAllA || images[1].src === baseUrl + whiteAprAllA || images[1].src === baseUrl + greyAprAllA) {
            console.log(leftCaption)
            console.log(rightCaption)
            leftCaption.disabled = true;
            rightCaption.disabled = true;
        } else {
            leftCaption.disabled = false;
            rightCaption.disabled = false;
            console.log(images[1].src)
        }
    }

    function hoverPocketRight() {
        const images = document.querySelectorAll('.step1__image')

        for (let i = 2; i < 6; i++) {
            if (images[2].src === baseUrl + whiteBasePack[i]) {
                images[2].src = whiteAprPocketPack[i + 1]
                return
            } else if (images[2].src === baseUrl + blackBasePack[i]) {
                images[2].src = blackAprPocketPack[i + 1]
                return
            } else if (images[2].src === baseUrl + greyBasePack[i]) {
                images[2].src = greyAprPocketPack[i + 1]
                return
            } else if (images[2].src === baseUrl + greyEmptyPack[i]) {
                images[2].src = greyAprPocketPack[i]
                return
            } else if (images[2].src === baseUrl + blackEmptyPack[i]) {
                images[2].src = blackAprPocketPack[i]
                return
            } else if (images[2].src === baseUrl + whiteEmptyPack[i]) {
                images[2].src = whiteAprPocketPack[i]
                return
            } else {
                console.log('хуйТаТам')
            }
        }
    }

    function hoverPocketLeft() {
        const images = document.querySelectorAll('.step1__image')

        for (let i = 0; i < 4; i++) {
            if (images[0].src === baseUrl + whiteBasePack[i]) {
                images[0].src = whiteAprPocketPack[i + 1]
                return
            } else if (images[0].src === baseUrl + blackBasePack[i]) {
                images[0].src = blackAprPocketPack[i + 1]
                return
            } else if (images[0].src === baseUrl + greyBasePack[i]) {
                images[0].src = greyAprPocketPack[i + 1]
                return
            } else if (images[0].src === baseUrl + greyEmptyPack[i]) {
                images[0].src = greyAprPocketPack[i]
                return
            } else if (images[0].src === baseUrl + blackEmptyPack[i]) {
                images[0].src = blackAprPocketPack[i]
                return
            } else if (images[0].src === baseUrl + whiteEmptyPack[i]) {
                images[0].src = whiteAprPocketPack[i]
                return
            } else {
                console.log('хуйТаТам')
            }
        }
    }

    function leavePocketRight() {
        const images = document.querySelectorAll('.step1__image')

        for (let i = 2; i < 6; i++) {
            if (images[2].src === baseUrl + whiteAprPocketPack[i]) {
                images[2].src = whiteEmptyPack[i]
                images[0].src = whiteEmptyPack[i - 2]
                return
            } else if (images[2].src === baseUrl + blackAprPocketPack[i]) {
                images[2].src = blackEmptyPack[i]
                images[0].src = blackEmptyPack[i - 2]
                return
            } else if (images[2].src === baseUrl + greyAprPocketPack[i]) {
                images[2].src = greyEmptyPack[i]
                images[0].src = greyEmptyPack[i - 2]
                return
            } else {
                console.log('хуйТаТам')
            }
        }
    }

    function leavePocketLeft() {
        const images = document.querySelectorAll('.step1__image')

        for (let i = 0; i < 4; i++) {
            if (images[0].src === baseUrl + whiteAprPocketPack[i]) {
                images[0].src = whiteEmptyPack[i]
                images[2].src = whiteEmptyPack[i + 2]
            } else if (images[0].src === baseUrl + blackAprPocketPack[i]) {
                images[0].src = blackEmptyPack[i]
                images[2].src = blackEmptyPack[i + 2]
            } else if (images[0].src === baseUrl + greyAprPocketPack[i]) {
                images[0].src = greyEmptyPack[i]
                images[2].src = greyEmptyPack[i + 2]
            } else {
                console.log('хуйТаТам')
            }
        }
    }

    function handlePocketRight() {
        const images = document.querySelectorAll('.step1__image')

        for (let i = 2; i < 6; i++) {
            if (images[2].src === baseUrl + whiteAprPocketPack[i]) {
                images[0].src = whiteAprPocketPack[i - 1]
                images[0].classList.add('move_left-minus')
                images[1].src = dispArray[i]
                images[1].classList.add('move_left-plus')
                images[2].src = whiteAprPocketPack[i + 1]
                images[2].classList.add('move_right-tp')
                console.log('ЧетЕсть')
                blockPocketLeft()
                blockPocketRight()
                blockCaptionSelector()
                removeMove(images[0])
                removeMove(images[1])
                removeMove(images[2])
                return
            } else if (images[2].src === baseUrl + blackAprPocketPack[i]) {
                images[0].src = blackAprPocketPack[i - 1]
                images[0].classList.add('move_left-minus')
                images[1].src = dispArray[i]
                images[1].classList.add('move_left-plus')
                images[2].src = blackAprPocketPack[i + 1]
                images[2].classList.add('move_right-tp')
                console.log('ЧетЕсть')
                blockPocketLeft()
                blockPocketRight()
                blockCaptionSelector()
                removeMove(images[0])
                removeMove(images[1])
                removeMove(images[2])
                return
            } else if (images[2].src === baseUrl + greyAprPocketPack[i]) {
                images[0].src = greyAprPocketPack[i - 1]
                images[0].classList.add('move_left-minus')
                images[1].src = dispArray[i]
                images[1].classList.add('move_left-plus')
                images[2].src = greyAprPocketPack[i + 1]
                images[2].classList.add('move_right-tp')
                console.log('ЧетЕсть')
                blockPocketLeft()
                blockPocketRight()
                blockCaptionSelector()
                removeMove(images[0])
                removeMove(images[1])
                removeMove(images[2])
                return
            } else {
                console.log('хуйТаТам')
            }
        }
    }

    function handlePocketLeft() {
        const images = document.querySelectorAll('.step1__image')

        for (let i = 0; i < 4; i++) {
            if (images[0].src === baseUrl + whiteAprPocketPack[i]) {
                images[0].src = whiteAprPocketPack[i - 1]
                images[0].classList.add('move_left-tp')
                images[1].src = dispArray[i]
                images[1].classList.add('move_right-plus')
                images[2].src = whiteAprPocketPack[i + 1]
                images[2].classList.add('move_right-minus')
                console.log('ЧетЕсть')
                blockPocketLeft()
                blockPocketRight()
                blockCaptionSelector()
                removeMove(images[0])
                removeMove(images[1])
                removeMove(images[2])
                return
            } else if (images[0].src === baseUrl + blackAprPocketPack[i]) {
                images[0].src = blackAprPocketPack[i - 1]
                images[0].classList.add('move_left-tp')
                images[1].src = dispArray[i]
                images[1].classList.add('move_right-plus')
                images[2].src = blackAprPocketPack[i + 1]
                images[2].classList.add('move_right-minus')
                console.log('ЧетЕсть')
                blockPocketLeft()
                blockPocketRight()
                blockCaptionSelector()
                removeMove(images[0])
                removeMove(images[1])
                removeMove(images[2])
                return
            } else if (images[0].src === baseUrl + greyAprPocketPack[i]) {
                images[0].src = greyAprPocketPack[i - 1]
                images[0].classList.add('move_left-tp')
                images[1].src = dispArray[i]
                images[1].classList.add('move_right-plus')
                images[2].src = greyAprPocketPack[i + 1]
                images[2].classList.add('move_right-minus')
                console.log('ЧетЕсть')
                blockPocketLeft()
                blockPocketRight()
                blockCaptionSelector()
                removeMove(images[0])
                removeMove(images[1])
                removeMove(images[2])
                return
            } else {
                console.log('хуйТаТам')
            }
        }
    }

    function blockPocketRight() {
        const images = document.querySelectorAll('.step1__image')
        const rightPocket = document.querySelector('#pocketRight')

        if (images[1].src === baseUrl + whiteAprAllPackLr[4] || images[1].src === baseUrl + blackAprAllPackLr[4] || images[1].src === baseUrl + greyAprAllPackLr[4]) {
            rightPocket.disabled = true
        } else {
            rightPocket.disabled = false
        }
    }

    function blockPocketLeft() {
        const images = document.querySelectorAll('.step1__image')
        const leftPocket = document.querySelector('#pocketLeft')

        if (images[1].src === baseUrl + dispArray[1]) {
            leftPocket.disabled = true
        } else {
            leftPocket.disabled = false
        }
    }

    function removeMove(item) {
        setTimeout(() => item.classList.remove('move_left-plus'), 500)
        setTimeout(() => item.classList.remove('move_left-minus'), 500)
        setTimeout(() => item.classList.remove('move_left-tp'), 500)
        setTimeout(() => item.classList.remove('move_right-plus'), 500)
        setTimeout(() => item.classList.remove('move_right-minus'), 500)
        setTimeout(() => item.classList.remove('move_right-tp'), 500)
        setTimeout(() => item.classList.remove('glitch-anim1'), 500)
    }


    for (let i = 0; i < oneColors.length; i++) {
        selectedColors[i] = oneColors[i]
    }

    function handleCaption() {
        const images = document.querySelectorAll('.step1__image')

        for (let j = 1; j < 5; j++) {
            if (images[1].src === baseUrl + dispArray[j]) {
                if (selectedHoody === baseBlack) {
                    for (let i = 0; i < blackAprAllPackLr.length; i++) {
                        if (dispArray[i] === blackAprAllPackIo[i]) {
                            dispArray[i] = blackAprAllPackLr[i]
                            images[1].src = dispArray[j]
                            console.log(dispArray)
                        } else if (dispArray[i] === blackAprAllPackLr[i]) {
                            dispArray[i] = blackAprAllPackIo[i]
                            images[1].src = dispArray[j]
                            console.log(dispArray)
                        } else {
                            console.log('uuu')
                        }
                    }
                } else if (selectedHoody === baseWhite) {
                    for (let i = 0; i < whiteAprAllPackLr.length; i++) {
                        if (dispArray[i] === whiteAprAllPackIo[i]) {
                            dispArray[i] = whiteAprAllPackLr[i]
                            images[1].src = dispArray[j]
                            console.log(dispArray)
                        } else if (dispArray[i] === whiteAprAllPackLr[i]) {
                            dispArray[i] = whiteAprAllPackIo[i]
                            images[1].src = dispArray[j]
                            console.log(dispArray)
                        } else {
                            console.log('uuu')
                        }
                    }
                } else if (selectedHoody === baseGrey) {
                    for (let i = 0; i < greyAprAllPackLr.length; i++) {
                        if (dispArray[i] === greyAprAllPackIo[i]) {
                            dispArray[i] = greyAprAllPackLr[i]
                            images[1].src = dispArray[j]
                            console.log(dispArray)
                        } else if (dispArray[i] === greyAprAllPackLr[i]) {
                            dispArray[i] = greyAprAllPackIo[i]
                            images[1].src = dispArray[j]
                            console.log(dispArray)
                        } else {
                            console.log('uuu')
                        }
                    }
                } else {
                    console.log('Not found')
                }
                images[1].classList.add('glitch-anim1')
                removeMove(images[1])
            } else {
                console.log('Nihyay')
            }
        }
    }

    function colorScale() {
        const colors = document.querySelectorAll('.color')
        colors[0].classList.add('color_big')
    }

    function hidePopup(){
        document.querySelector('#popup').classList.remove('popup_opened')
    }

    displayCaptions()
    handleBase()
    setTimeout(colorScale, 2500)
    setTimeout(blockCaptionSelector, 500)
    setTimeout(hidePopup, 3000)

    return(
        <div className='step1'>
            <Popup 
            number='02'
            text='Теперь дизайн капюшона и карманов'
            />
            <div className='step1__choose'>
                <input name='step2' type='radio' id='radio-11' value='' className='step1__radio' disabled='true' />
                <label className='step1__variant' for='radio-11'>
                    <img className='step1__image' src={selectedBases[0]} alt='' />
                </label>
                <div className='step2__arrows'>
                    <button onClick={handleCaption} id='captionLeft' className='step1__left-arrow' />
                    <button onClick={handlePocketLeft} onMouseEnter={hoverPocketLeft} onMouseLeave={leavePocketLeft} id='pocketLeft' className='step1__left-arrow' />
                </div>
                <input name='step2' type='radio' id='radio-12' value='' className='step1__radio center' defaultChecked />
                <label className='step1__variant' for='radio-12'>
                    <img className='step1__image' src={selectedBases[1]} alt='' />
                </label>
                <div className='step2__arrows'>
                    <button onClick={handleCaption} id='captionRight' className='step1__right-arrow' />
                    <button onClick={handlePocketRight} onMouseEnter={hoverPocketRight} onMouseLeave={leavePocketRight} id='pocketRight' className='step1__right-arrow' />
                </div>
                <input name='step2' type='radio' id='radio-13' value='' className='step1__radio' disabled='true' />
                <label className='step1__variant' for='radio-13'>
                    <img className='step1__image' src={selectedBases[2]} alt='' />
                </label>
            </div>
            <BottomPanel
                back='/step1'
                next='/step3'
                colors={selectedColors}
            />
        </div>
    )
}

// export {selectedPocket, selectedCaption}