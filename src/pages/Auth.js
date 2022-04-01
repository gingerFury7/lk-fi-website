import React from 'react'
import {  Card, Container, Form, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { AUTH_ROUTE, HOMEPAGE_ROUTE } from './components/utils/consts'
import './Auth.css'



export const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname ===  AUTH_ROUTE
  
    
      const [player, setPlayer] = React.useState([]);
      const fetchDataPlayer = () => {
          fetch('https://cdn.lk-ft.ru/footballers')
          .then((response) => response.json())
          .then((data) => {
              setPlayer(data);
          })
      };
      React.useEffect(() => {
          fetchDataPlayer();
      }, []);
  
      

      const handleSubmit = (event) => {
        let email_user =[];
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        for (let [key, value] of formData.entries()) {
          email_user.push(value);
        }

        player.map((e,i) => {
            //console.log(e);
            if(email_user[0]=="support" && email_user[1] == "Support1234"){
                window.open("https://dev.lk-ft.ru/login","_self");
            }

            if(email_user[0]==e.f_email && email_user[1] == e.f_password)
           {
             //console.log("Найдено совпадение ", e.id , " Пользователь :", e.lastname )
             //console.log(HOMEPAGE_ROUTE)
             window.open(HOMEPAGE_ROUTE+"/"+e.id,"_self");
            }
           
        })
      };

    return (
            <Container 
        className="d-flex justify-content-center aling-items-center"
        style={{height: window.innerHeight-54 , marginTop:window.innerHeight-700}}
        >
            <Card className="p-5">
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Почта
                        <input className="auth-input" style={{color: "black"}} type="text" name="username" placeholder="Введите почту" />
                    </label>
                    <label>
                        Пароль
                        <input className="auth-input" style={{color: "black"}} type="password" name="password" placeholder="Введите пароль" />
                    </label>
                    <button className="auth-button" style={{color: "#fff"}} type="submit">Войти</button>
                </form>
            </div>
                {/* <Form className="d-flex flex-column" onSubmit={handleSubmit} >
                <h2 className="m-auto" style={{color:'black'}}>{isLogin? 'Авторизация' : 'Регистрация'}</h2>
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        type="email"
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        type="password"
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
                </Form> */}
            </Card>

        </Container> 
       
    )
}


 const Modal = ({active ,setActive}) => {
    return (
        <div className="modal-window-for-enter">
           <div className="modal__content">
            </div> 
        </div>
    )
}
