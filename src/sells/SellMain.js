import GoodCard from "../cards/GoodCard";
import MenuContainer from "../MenuContainer";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function SellMain({sells, goods, outSellKey, handlerActiveMenu, activeButton, handlerOutGood,
                                     handlerToFavorites, handlerAddMyBuy, logged}) {
    const nav = useNavigate();
    let redFlag = false;
    if (!logged || !outSellKey) {
        redFlag = true;
    }
    useEffect(() => {
        if (redFlag) {
            nav('/', { replace: false });
        }
        handlerActiveMenu('sells');
    }, []);
    let goodsInSell = [];
    let cards = [];
    if (!redFlag) {
        goodsInSell = sells[outSellKey].goods;
        for (let key of goodsInSell) {
            cards.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
                                 goodId={key} handlerToFavorites={handlerToFavorites} handlerAddMyBuy={handlerAddMyBuy}/>)
        }
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
        </div>
    </MenuContainer>}
    </>
}