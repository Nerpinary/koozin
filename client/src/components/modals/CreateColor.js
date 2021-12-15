import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createColor, createType} from "../../http/productAPI";

const CreateColor = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addColor = ({name: value}) => {
        createColor().then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый цвет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название цвета"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addColor}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateColor;