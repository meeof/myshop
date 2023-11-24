import styled from "styled-components";
import imageChevron from '../images/chevron.svg';
import {useMemo, useState} from "react";
import {randomColor} from "../App";

let HeaderMyGoodCard = styled.div`
    display: flex;
  justify-content: flex-end;
`;
export default function MyGoodCard({date, good, number, sellers}) {
    const bgColor = useMemo(
        () => randomColor(0.08),
        []
    );
    let [showCard, setShowCard] = useState(true);
    let outGoods = [];
    let counter = 0;
    for (let seller of sellers) {
        let isOrange = false;
        if (seller.preCost < 51) {
            isOrange = true;
        }
        outGoods.push(
            <div className="myBuyContainer" key={counter}>
                <div>{seller.name}</div>
                <div>₽ <span className={!isOrange ? 'myBuyGreen' : 'myBuyOrange'}>{seller.preCost}%</span></div>
                <div className={!isOrange ? 'myBuyGreen' : 'myBuyOrange'}>{seller.amount} шт</div>
                <div>{seller.cost}</div>
            </div>
        )
        counter++;
    }
    return <div className={'basketCardContainer'} style={{backgroundColor: bgColor}}>
        <HeaderMyGoodCard>
            <h3 className="basketCardHeader">{good}</h3>
            <div className={'basketCardHeader'}>{date}</div>
            <div className={'basketCardHeader'}>{number}</div>
            <img alt={'#'} src={imageChevron} className={showCard ? 'cardChevron' : 'cardChevron cardChevron-rotate'}
                 onClick={() => setShowCard(!showCard)}/>
        </HeaderMyGoodCard>
        {showCard ? <>{outGoods}
            <div className={'basketAdd'}>+ Добавить покупателя</div></> : <></>}
    </div>
}