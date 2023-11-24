import MenuContainer from "../MenuContainer";
import GoodCard from "../cards/GoodCard";
import Find from "../Find";
import {useNavigate} from "react-router-dom";

export default function GoodsInSell({sells, goods, outSellKey, handlerActiveMenu, activeButton, handlerOutGood,
                                        handlerAddToSell}) {
    handlerActiveMenu('sells');
    const navigate = useNavigate();
    let goodsInSell = sells[outSellKey].goods;
    let cards = [];
    for (let key in goods) {
        if (!goodsInSell.includes(key)) {
            cards.push(<GoodCard key={key} goodId={key} goods={goods} handlerOutGood={handlerOutGood} isSeller={true}
                                 good={goods[key]} handlerAddToSell={handlerAddToSell}/>)
        }
    }
    return <>
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <Find place={'goods'}/>
            <div className={'contentContainer'}>
                <div className={'cardPlace'}>
                    {cards}
                </div>
                <input type={"button"} value={'Создать товар'} className={'shopInteractiveElement bottomButton'}
                       onClick={() =>  {
                           navigate('../createGood', { replace: false });
                       }}/>
            </div>
        </MenuContainer>
    </>

}