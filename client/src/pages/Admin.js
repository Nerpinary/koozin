import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateColor from "../components/modals/CreateColor";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [colorVisible, setColorVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)

    return (
        <Container style={{display: 'flex', flexDirection: 'column', marginTop: 100, gap: 20}}>
            <Button onClick={() => setTypeVisible(true)} style={{cursor: 'pointer', width: 200, borderRadius: 18, background: 'transparent', color: 'black'}}>Добавить тип</Button>
            <Button onClick={() => setColorVisible(true)} style={{cursor: 'pointer', width: 200, borderRadius: 18, background: 'transparent', color: 'black'}}>Добавить цвет</Button>
            <Button onClick={() => setProductVisible(true)} style={{cursor: 'pointer', width: 200, borderRadius: 18, background: 'transparent', color: 'black'}}>Добавить продукт</Button>
            <CreateColor show={colorVisible} onHide={() => setColorVisible(false)} />
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
        </Container>
    );
};

export default Admin;