import styled from "styled-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

let docHeight = document.documentElement.scrollHeight - 20;
let Container = styled.div`
  height: ${docHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
`;
export default function RegisterUser({handlerRegister}) {
    const navigate = useNavigate();
    let [surname, setSurname] = useState('');
    let [name, setName] = useState('');
    let [phone, setPhone] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [repeat, setRepeat] = useState('');
    function handlerField(e, field) {
        switch (field) {
            case 'surname' : {
                setSurname(e.target.value);
                break
            }
            case 'name' : {
                setName(e.target.value);
                break
            }
            case 'phone' : {
                setPhone(e.target.value);
                break
            }
            case 'email' : {
                setEmail(e.target.value);
                break
            }
            case 'password' : {
                setPassword(e.target.value);
                break
            }
            case 'repeat' : {
                setRepeat(e.target.value);
                break
            }
        }
    }
    return <Container>
        <form className="restoreRegisterForm">
            <p className={"shopH1"}>Регистрация</p>
            <div className={'labelContainer'}>
                <span>Фамилия *</span>
                <input type={"text"} className={'shopInteractiveElement'} value={surname}
                       onChange={(e) => handlerField(e, 'surname')}/>
            </div>
            <div className={'labelContainer'}>
                <span>Имя *</span>
                <input type={"text"} className={'shopInteractiveElement'} value={name}
                       onChange={(e) => handlerField(e, 'name')}/>
            </div>
            <div className={'labelContainer'}>
                <span>Телефон *</span>
                <input type={"text"} className={'shopInteractiveElement'} value={phone}
                       onChange={(e) => handlerField(e, 'phone')}/>
            </div>
            <div className={'labelContainer'}>
                <span>Email *</span>
                <input type={"text"} className={'shopInteractiveElement'} value={email}
                       onChange={(e) => handlerField(e, 'email')}/>
            </div>
            <div className={'labelContainer'}>
                <span>Пароль *</span>
                <input type="password" className={'shopInteractiveElement'} value={password}
                       onChange={(e) => handlerField(e, 'password')}/>
            </div>
            <div className={'labelContainer'}>
                <span>Повторите пароль *</span>
                <input type="password" className={'shopInteractiveElement'} value={repeat}
                       onChange={(e) => handlerField(e, 'repeat')}/>
            </div>
            <input type="submit" value="Зарегистрироваться" className={'shopBottomButton shopInteractiveElement'}
            onClick={(e)=> {
                e.preventDefault();
                let success = handlerRegister({
                    surname : surname,
                    name : name,
                    phone : phone,
                    email : email,
                    password : password,
                    repeat : repeat,
                });
                if (success) {
                    navigate('/', { replace: false });
                }
            }}/>
        </form>
    </Container>
}