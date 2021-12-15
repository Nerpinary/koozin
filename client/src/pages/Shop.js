import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchProducts} from "../http/productAPI";
import ProductItem from "../components/ProductItem";
import arrow from '../images/arrow.svg'
import {STEP1_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const Shop = observer(() => {

    const {product} = useContext(Context)
    const history = useHistory()
    let startProd = ''

    useEffect(() => {
        fetchProducts().then(data => product.setProducts(data))
    }, [])

    const start = () => {
        product.products.map(product => {
                console.log(product.id)
                if (product.id === 8) {
                    return startProd = product
                } else {
                    console.log('sdds')
                }
            }
        )
    }

    start()

    return (
        <Container style={{
            margin: 0,
            padding: 0,
            marginTop: 60,
            display: "flex",
            alignItems: "center",
            flexDirection: "column"}}>
            <ProductItem key={startProd.id} product={startProd}/>
            <h1 style={{
                fontSize: 28,
                color: 'white',
                lineHeight: '36px',
                alignSelf: 'start',
                marginLeft: 32,
                fontWeight: 'normal',
                marginTop: -100,
                fontFamily: 'Raleway'
            }}>Собери худи<br />
                <span style={{
                    fontSize: 42,
                    lineHeight: '50px',
                    fontWeight: 'bold'
                }}>на свой вкус</span>
            </h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginTop: 32
            }}>
                <p style={{
                    fontSize: 28,
                    color: 'white',
                    lineHeight: '36px',
                    fontFamily: 'Raleway',
                    marginRight: 32
                }}>01</p>
                <div>
                    <p style={{
                        fontSize: 28,
                        color: 'white',
                        lineHeight: '36px',
                        fontFamily: 'Raleway'
                    }}>Выбери цвет базы</p>
                    <p style={{
                        fontSize: 14,
                        color: 'white',
                        lineHeight: '22px',
                        fontFamily: 'Raleway'
                    }}>Это цвет самой основы без кармана и капюшона</p>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginTop: 32
            }}>
                <p style={{
                    fontSize: 28,
                    color: 'white',
                    lineHeight: '36px',
                    fontFamily: 'Raleway',
                    marginRight: 32
                }}>02</p>
                <div>
                    <p style={{
                        fontSize: 28,
                        color: 'white',
                        lineHeight: '36px',
                        fontFamily: 'Raleway'
                    }}>Выбери дизайн кармана и капюшона</p>
                    <p style={{
                        fontSize: 14,
                        color: 'white',
                        lineHeight: '22px',
                        fontFamily: 'Raleway'
                    }}>Элементы пристегиваются с помощью молний. Их можно заменить в любой момент</p>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginTop: 32
            }}>
                <p style={{
                    fontSize: 28,
                    color: 'white',
                    lineHeight: '36px',
                    fontFamily: 'Raleway',
                    marginRight: 32
                }}>03</p>
                <div>
                    <p style={{
                        fontSize: 28,
                        color: 'white',
                        lineHeight: '36px',
                        fontFamily: 'Raleway'
                    }}>Выбери еще один комплект сменных элементов в подарок</p>
                </div>
            </div>
            <button className='' style={{
                backgroundColor: 'transparent',
                color: "#F9E74D",
                alignSelf: 'end',
                border: 'none',
                backgroundImage: arrow,
                backgroundSize: 24,
                marginRight: 18,
                fontFamily: 'Raleway',
                height: 30,
                alignText: 'center',
                marginTop: 32,
                marginBottom: 100
            }} onClick={() => history.push(STEP1_ROUTE)}>Приступим</button>
        </Container>
    );
});

export default Shop;