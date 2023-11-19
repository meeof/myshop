import GoodInSellCard from "../cards/GoodInSellCard";
import MenuContainer from "../MenuContainer";
import GoodCard from "../cards/GoodCard";
import Find from "../Find";

export default function GoodsInSell({sells, goods, outSellKey, handlerGo, handlerActiveMenu, activeButton, handlerOutGood,
                                        handlerAddToSell}) {
    let goodsInSell = sells[outSellKey].goods;
    let cards = [];
    for (let key in goods) {
        if (!goodsInSell.includes(key)) {
            cards.push(<GoodCard key={key} goodId={key} goods={goods} handlerOutGood={handlerOutGood} isSeller={true}
                                 handlerGo={handlerGo} good={goods[key]} handlerAddToSell={handlerAddToSell}/>)
        }
    }
    return <>
        <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <Find place={'goods'}/>
            <div className={'contentContainer'}>
                <div className={'cardPlace'}>
                    {cards}
                </div>
                <input type={"button"} value={'Создать товар'} className={'shopInteractiveElement bottomButton'}
                       onClick={(e) =>  {
                           handlerGo(e, 'createGood');
                       }}/>
            </div>
        </MenuContainer>
    </>

}