import styled from "styled-components";
import imageChevron from '../images/chevron.svg';
import {useState} from "react";

let HeaderMyGoodCard = styled.div`
    display: flex;
  justify-content: flex-end;
`;
export default function MyBuyerCard({goods, goodsBuyers, name}) {
    let [showCard, setShowCard] = useState(true);
    let outBuyers = [];
    let counter = 0;
    for (let good of goodsBuyers) {
        let preCostProc = goods[good.id].preCost.match(/\d+%/);
        let isOrange = false;
        if (parseInt(preCostProc[0]) < 51) {
            isOrange = true;
        }
        outBuyers.push(
            <div className="myBuyContainer" key={counter}>
                <div>{goods[good.id].name}</div>
                <div>₽ <span className={!isOrange ? 'myBuyGreen' : 'myBuyOrange'}>{preCostProc}</span></div>
                <div className={!isOrange ? 'myBuyGreen' : 'myBuyOrange'}>{good.amount}</div>
                <div>{good.num}</div>
            </div>
        )
        counter++;
    }
    return <div className={'basketCardContainer'}>
        <HeaderMyGoodCard>
            <h3 className="basketCardHeader">{name}</h3>
            <img src={imageChevron} className={showCard ? 'cardChevron' : 'cardChevron cardChevron-rotate'}
                 onClick={() => setShowCard(!showCard)}/>
        </HeaderMyGoodCard>
        {showCard ? <>{outBuyers}
            <div className={'basketAdd'}>+ Добавить товар</div>
        </> : <></>}
    </div>
}