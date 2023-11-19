import ComRevCard from "./ComRevCard";
import styled from "styled-components";
import AddComRev from "./AddComRev";
let NoComRevText = styled.p`
    opacity: 0.5;
  padding: 5px;
  box-sizing: border-box;
  @media (min-width: 430px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function ComRevBlock({comRev, goods, outGoodKey, handlerAddComRev}) {
    let outPage = [];
    let outEmpty;
    let arr = [];
    if (comRev === 'reviews') {
        arr = goods[outGoodKey].reviews;
    }
    else if (comRev === 'comments') {
        arr = goods[outGoodKey].comments;
    }
    if (arr.length > 0) {
        let counter = 0;
        for (let elem of arr) {
            outPage.push(<ComRevCard key={counter} user={elem.user} text={elem.text} img={elem.img} comRev={comRev}/>);
            counter++;
        }
    }
    else {
        if (comRev === 'reviews') {
            outEmpty = <NoComRevText>К этому товару нет отзывов.</NoComRevText>;
        }
        else if (comRev === 'comments') {
            outEmpty = <NoComRevText>К этому товару нет комментариев.</NoComRevText>
        }
    }
    return <>
        {outEmpty ? outEmpty : <div className={'cardPlace'}>{outPage}</div>}
        <AddComRev comRev={comRev} handlerAddComRev={handlerAddComRev}/>
    </>
}