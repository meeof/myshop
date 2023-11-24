import MenuContainer from "../MenuContainer";
import './sells.css';
import GoodInSellCard from "../cards/GoodInSellCard";
import {useNavigate} from "react-router-dom";

export default function ViewSell({sells, goods, outSellKey, handlerActiveMenu, activeButton, handlerOutGood,
                                     handlerDeleteGoodInSell}) {
    handlerActiveMenu('sells');
    const navigate = useNavigate();
    let goodsInSell = sells[outSellKey].goods;
    let cards = [];
    for (let key of goodsInSell) {
        cards.push(<GoodInSellCard key={key} goodId={key} goods={goods} handlerOutGood={handlerOutGood}
                                   handlerDeleteGoodInSell={handlerDeleteGoodInSell}/>)
    }
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
        <div className={'contentContainer'}>
            <div className={'sellHead'}>
                <h3>{sells[outSellKey].name}</h3>
                <p>by {sells[outSellKey].user}</p>
                <div>
                    <span>Место: {sells[outSellKey].place}</span>
                    <span> {sells[outSellKey].date}</span>
                </div>
                <p>{sells[outSellKey].preCost}</p>
                <p>{sells[outSellKey].description}</p>
            </div>
            <div className={'cardPlace'}>
                {cards}
            </div>
            <input type={"button"} value={'Добавить товар'} className={'shopInteractiveElement bottomButton'}
                   onClick={() =>  {
                       navigate('../goodsInSell', { replace: false });
                   }}/>
        </div>
    </MenuContainer>
}