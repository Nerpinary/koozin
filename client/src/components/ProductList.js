import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ProductItem from "./ProductItem";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import 'swiper/swiper-bundle.css'
// import Carousel from "react-native-snap-carousel";

const ProductList = observer(() => {
    const {product} = useContext(Context)
    const hoodies = Array.from(product.products)
    let baseHood = []

    console.log(hoodies)

    for (let i = 0; i < hoodies.length; i++) {
        if (hoodies[i].price === 5000 && hoodies[i].colorId === 1) {
            baseHood[i] = hoodies[i]
        } else {
            console.log('fdsjbfsk')
        }
        console.log(baseHood)
    }

    return (
        <Swiper
            style={{
                width:window.innerWidth,
                height: window.innerHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 0,
                marginTop: 100
            }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
        >
            {baseHood.map(product =>
                        <SwiperSlide style={{display: "flex", justifyContent: "center"}}>
                            <ProductItem key={product.id} product={product}/>
                        </SwiperSlide>
            )}
        </Swiper>

    );
});

export default ProductList;