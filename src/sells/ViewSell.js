import MenuContainer from "../MenuContainer";
import './sells.css';
import GoodInSellCard from "../cards/GoodInSellCard";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function ViewSell({sells, goods, outSellKey, handlerActiveMenu, activeButton, handlerOutGood,
                                     handlerDeleteGoodInSell, logged}) {
    const navigate = useNavigate();
    let redFlag = false;
    if (!logged || !outSellKey) {
        redFlag = true;
    }
    useEffect(() => {
        if (redFlag) {
            navigate('/', { replace: false });
        }
        handlerActiveMenu('sells');
    }, []);
    let goodsInSell = [];
    let cards = [];
    if (!redFlag) {
        goodsInSell = sells[outSellKey].goods;
    }
    for (let key of goodsInSell) {
        cards.push(<GoodInSellCard key={key} goodId={key} goods={goods} handlerOutGood={handlerOutGood}
                                   handlerDeleteGoodInSell={handlerDeleteGoodInSell}/>)
    }
    return <>
    {redFlag ? <></> : <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
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
            <div className={'bottomButtonContainer'}>
                <input type={"button"} value={'Добавить товар'} className={'shopInteractiveElement bottomButton'}
                       onClick={() =>  {
                           navigate('../goodsInSell', { replace: false });
                       }}/>
            </div>
        </div>
    </MenuContainer>}
    </>
}