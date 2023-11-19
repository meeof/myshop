import styled from "styled-components";
import './login.css';
import {useState} from "react";
let docHeight = document.documentElement.scrollHeight - 20;
let docWidth = document.documentElement.scrollWidth - 20;
let Container = styled.div`
  height: ${docHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 430px) {
    justify-content: space-evenly;
  }
}
`;
let ContainerImg = styled.div`
  background-color: lightgray;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: inherit;
    height: inherit;
  }
  @media (max-width: 430px) {
    width: ${docHeight/3}px;
    height: ${docHeight/3}px;
    max-width: 100%;
  }
  @media (min-width: 430px) {
    width: ${docWidth/3}px;
    height: ${docWidth/3}px;
    max-height: 50%;
  }
`;
export default function Login({handlerGo, userBase, handlerEnterUser}) {
    let [userEmailEnter, setUserEmailEnter] = useState('meeof@yandex.ru');
    let [userPasswordEnter, setUserPasswordEnter] = useState('1234');
    function handlerNameEnter(e) {
        setUserEmailEnter(e.target.value);
    }
    function handlerPasswordEnter(e) {
        setUserPasswordEnter(e.target.value);
    }
    function handlerPass() {
        for (let key in userBase) {
            if (key === userEmailEnter) {
                if (userBase[key].password === userPasswordEnter) {
                    return true;
                }
                else {
                    alert('Неверный пароль');
                    return false;
                }
            }
        }
        alert('Пользователь с данным именем отсутствует');
        return false;
    }
    return <Container>
        <ContainerImg>
            <img src={'https://img.freepik.com/free-photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background_485709-54.jpg?w=740&t=st=1700299490~exp=1700300090~hmac=c87dc11608a60000589ab43e9a24703a1adcc2c55c4fb448f8cbd17f2d256dec'}/>
        </ContainerImg>
        <form className="loginForm">
            <p>Email</p>
            <input type={"text"} className="shopInteractiveElement" value={userEmailEnter}
                   onChange={(e)=> handlerNameEnter(e)}/>
            <p>Пароль</p>
            <input type="password" className="shopInteractiveElement" value={userPasswordEnter}
                   onChange={(e)=> handlerPasswordEnter(e)}/>
            <input type="button" value="Войти" className="shopInteractiveElement buttonEnter"
                   onClick={(e) => {
                       if (handlerPass()) {
                           handlerEnterUser(userEmailEnter);
                           handlerGo(e, 'catalog');
                       }
            }}/>
            <input type="button" value="Регистрация" className="shopInteractiveElement buttonReg"
                   onClick={(e) => handlerGo(e, 'registerUser')}/>
        </form>
        <a href="#" className="shopLink"
           onClick={(e) => handlerGo(e, 'restorePassword')}>Восстановить пароль</a>
    </Container>
}