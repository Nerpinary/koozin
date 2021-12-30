import React from "react";
import Popup from "../components/Popup";
import Step1Swiper from "../components/Step1Swiper";
import BottomPanel from "../components/BottomPanel";
import {Container} from "react-bootstrap";
import Step2Swiper from "../components/Step2Swiper";
import Step2ColorCarousel from "../components/Step2ColorCarousel";

import color1 from '../images/gradient1.svg'
import color2 from '../images/gradient2.svg'
import color3 from '../images/gradient5.svg'
import color4 from '../images/gradient3.svg'
import color5 from '../images/gradient4.svg'

const colors = [color1, color2, color3, color4, color5]

export default function Step2() {

    const hidePopup = () => {
        document.querySelector('.popup').classList.remove('popup_opened')
    }

    setTimeout(hidePopup, 2000)

    return(
        <Container style={{margin: 0, display: "flex", alignItems: "center", padding: 0}}>
            <Popup
                number='Шаг 2'
                title='Дизайн и цвет кармана и капюшона'
                text=''
            />
            <Step2Swiper />
            <BottomPanel carousel={<Step2ColorCarousel array={colors} />} title='Цвет элементов' linkBack='step1' />
        </Container>
    )
}