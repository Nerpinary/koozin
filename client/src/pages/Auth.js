import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            style={{height: window.innerHeight - 60, display: "flex", alignItems: "center", justifyContent: "center"}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 style={{margin: "auto", textAlign: 'center'}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Form.Control
                        style={{marginTop: 20, borderRadius: 5, width: 300}}
                        placeholder='Введите email...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        style={{marginTop: 10, borderRadius: 5, width: 300}}
                        placeholder='Введите пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <div style={{display: 'flex', marginTop: 20, flexDirection: 'row-reverse', justifyContent: 'space-between', gap: 100}}>
                        <Button onClick={click} style={{borderRadius: 5, width: 'max-content', cursor: 'pointer'}}>
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                        {isLogin ?
                            <NavLink style={{textDecoration: 'none', color: 'black'}}
                                     to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                            :
                            <NavLink style={{textDecoration: 'none', color: 'black'}}
                                     to={LOGIN_ROUTE}>Авторизация</NavLink>
                        }
                    </div>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;