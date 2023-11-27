import MenuContainer from "../MenuContainer";
import GoodCard from "../cards/GoodCard";
import Find from "../Find";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function GoodsInSell({sells, goods, outSellKey, handlerActiveMenu, activeButton, handlerOutGood,
                                        handlerAddToSell, logged}) {
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
        for (let key in goods) {
            if (!goodsInSell.includes(key)) {
                cards.push(<GoodCard key={key} goodId={key} goods={goods} handlerOutGood={handlerOutGood} isSeller={true}
                                     good={goods[key]} handlerAddToSell={handlerAddToSell}/>)
            }
        }
    }
    return <>
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
            <Find place={'goods'}/>
            <div className={'contentContainer'}>
                <div className={'cardPlace'}>
                    {cards}
                </div>
                <div className={'bottomButtonContainer'}>
                    <input type={"button"} value={'Создать товар'} className={'shopInteractiveElement bottomButton'}
                           onClick={() =>  {
                               nav('../createGood', { replace: false });
                           }}/>
                </div>
            </div>
        </MenuContainer>
    </>

}