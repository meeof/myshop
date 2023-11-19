import styled from "styled-components";
import './restorePassword.css'
import {useState} from "react";

let docHeight = document.documentElement.scrollHeight - 20;
let Container = styled.div`
  height: ${docHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
`;
export default function RestorePassword({handlerRestore}) {
    let [email, setEmail] = useState('');
    return <Container>
        <form className="restoreRegisterForm">
            <p className={"shopH1"}>Восстановление пароля</p>
            <div className={'labelContainer'}>
                <span>Email *</span>
                <input type={"text"} className={'shopInteractiveElement'} value={email}
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <p className="text">Введите ваш адрес электронной почты и мы отправим ссылку для восстановления пароля.</p>
            <input type="submit" value="Восстановить пароль"
                   className={'shopInteractiveElement shopBottomButton'} onClick={(e) => {
                       e.preventDefault();
                       handlerRestore(email);
            }}/>
        </form>
    </Container>
}