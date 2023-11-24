import styled from "styled-components";
import imageCamera from '../images/camera.svg'
import {useState} from "react";

let Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 5px;
  flex-direction: column;
  box-sizing: border-box;
  > img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
  > .shopInteractiveElement {
    margin-bottom: 5px;
  }
  @media (max-width: 430px) {
    width: 100%;
  }
  @media (min-width: 430px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function AddComRev({comRev, handlerAddComRev}) {
    let [write, setWrite] = useState(false);
    let [areaText, setAreaText] = useState('');
    let text;
    if (comRev === 'reviews') {
        text = 'отзыв';
    }
    else if (comRev === 'comments') {
        text = 'комментарий';
    }
    function handlerWriteButton() {
        setWrite(true);
    }
    function handlerTextArea(e) {
        setAreaText(e.target.value);
    }
    return <>
        {comRev !== '' ? <Container>
            {write ?
                <input type="button" className="shopInteractiveElement" value={`Добавить ${text}`}
                       onClick={()=> {
                           setAreaText('');
                           handlerAddComRev(comRev, areaText)
                       }}/> :
                <input type="button" className="shopInteractiveElement" value={`Написать ${text}`}
                       onClick={()=> handlerWriteButton()}/>
            }
            {
                write ? <><textarea className="addComRevArea" placeholder={`Напишите ${text} ...`}
                value={areaText} onChange={(e)=> handlerTextArea(e)}></textarea>
                    <img alt={'#'} src={imageCamera}/></> : <></>
            }
        </Container> : <></>
        }
    </>
}