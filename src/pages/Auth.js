import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink , useLocation } from 'react-router-dom'
import { AUTH_ROUTE, REGISTRATION_ROUTE } from './components/utils/consts'



export const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname ===  AUTH_ROUTE

    return (
        <Container 
        className="d-flex justify-content-center aling-items-center"
        style={{height: window.innerHeight-54 , marginTop:window.innerHeight-700}}
        >
            <Card style={{width: 600}} className="p-5">
                
                <Form className="d-flex flex-column">
                <h2 className="m-auto" style={{color:'black'}}>{isLogin? 'Авторизация' : 'Регистрация'}</h2>
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся! </NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={AUTH_ROUTE}> Войдите! </NavLink>
                        </div>
                        }
                        <Button 
                            variant={"outline-success"}>
                               {isLogin ? 'Войти ' : 'Регистрация'} 
                        </Button>
                    </Row>    
                </Form>
            </Card>

        </Container>
    )
}
