import styled from "styled-components";
import './restorePassword.css'
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
export default function NewPassword({handlerNewPassword}) {
    const navigate = useNavigate();
    let defaultPhoneKey = '1234';
    let [phoneKey, setPhoneKey] = useState('');
    let [password, setPassword] = useState('');
    let [repeat, setRepeat] = useState('');
    let [disabled, setDisabled] = useState(true);
    function handlerPhoneKey(e) {
        setPhoneKey(e.target.value);
        if (e.target.value.length === 4) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }
    return <Container>
        <form className="newPasswordForm">
            <p className={"shopH1"}>Восстановление пароля</p>
            <div className={'labelContainer'}>
                <span>Введите код из SMS сообщения</span>
                <input type={"password"} className={'shopInteractiveElement'} value={phoneKey}
                       onChange={e => handlerPhoneKey(e)}/>
            </div>
            <div className={'labelContainer'}>
                <span>Введите новый пароль</span>
                <input type={"password"} className={'shopInteractiveElement'} value={password} disabled={disabled}
                       onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className={'labelContainer'}>
                <span>Повторите новый пароль</span>
                <input type={"password"} className={'shopInteractiveElement'} value={repeat} disabled={disabled}
                       onChange={e => setRepeat(e.target.value)}/>
            </div>
            <input type="submit" value="Сменить пароль"
                   className={'shopInteractiveElement shopBottomButton'} onClick={(e) => {
                e.preventDefault();
                if (phoneKey !== defaultPhoneKey) {
                    alert('Неверный код');
                }
                else if (password !== repeat) {
                    alert('Повторите пароль');
                }
                else {
                    handlerNewPassword(password);
                    navigate('/', { replace: false });
                }

            }}/>
        </form>
    </Container>
}