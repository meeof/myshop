import styled from "styled-components";
import findImage from './images/find.svg'

let FindInput = styled.input`
  outline: none;
  border: none;
  border-bottom: solid rgba(0, 0, 225, 0.5) 2px;
  margin: 5px;
  width: 100%;
  font-size: 1.2rem;
`;
let FindContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 15px;
  
  @media (max-width: 430px) {
    width: 90%;
  }
  @media (min-width: 430px) {
    width: 50%;
  }
`
export default function Find({place, findText, handlerFind}) {
    let textInput = '';
    if (findText) {
        textInput = findText;
    }
    let placeholder = "Поиск товара, продажи, пользователя";
    if (place === 'sells') {
        placeholder = 'Поиск продажи';
    }
    else if (place === 'goods') {
        placeholder = 'Поиск товара';
    }
    return <FindContainer>
        <img alt={'#'} src={findImage}/>
        <FindInput placeholder={placeholder} value={textInput} onChange={(e) => {
            if (handlerFind) {
                handlerFind(e.target.value)}}}/>
    </FindContainer>
}