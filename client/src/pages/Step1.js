import React, {useContext, useEffect} from "react";
import Popup from "../components/Popup";
import {Context} from "../index";
import {fetchProducts} from "../http/productAPI";
import ProductList from "../components/ProductList";
import {Container} from "react-bootstrap";
import Step1Swiper from '../components/Step1Swiper'
import BottomPanel from "../components/BottomPanel";


function Step1() {

    const {product} = useContext(Context)

    useEffect(() => {
        fetchProducts().then(data => product.setProducts(data))
    }, [])

    const hidePopup = () => {
        document.querySelector('.popup').classList.remove('popup_opened')
    }

    setTimeout(hidePopup, 2000)

    return(
        <Container style={{margin: 0, display: "flex", alignItems: "center", padding: 0}}>
            <Popup
                number='Шаг 1'
                title='Цвет базы'
                text='такого цвета будет вещь без кармана и капюшона'
            />
            <Step1Swiper />
            {/*<ProductList />*/}
            <BottomPanel />
        </Container>
    )
}

export {Step1};