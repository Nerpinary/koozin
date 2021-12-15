import React, {useContext, useEffect} from "react";
import Popup from "../components/Popup";
import {Context} from "../index";
import {fetchProducts} from "../http/productAPI";
import ProductList from "../components/ProductList";
import {Container} from "react-bootstrap";


function Step1() {

    const {product} = useContext(Context)

    useEffect(() => {
        fetchProducts().then(data => product.setProducts(data))
    }, [])

    return(
        <Container style={{margin: 0, display: "flex", alignItems: "center"}}>
            <ProductList />
        </Container>
    )
}

export {Step1};