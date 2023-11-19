import MenuContainer from "../MenuContainer";
import './sells.css';
import GoodInSellCard from "../cards/GoodInSellCard";

export default function ViewSell({sells, goods, outSellKey, handlerGo, handlerActiveMenu, activeButton, handlerOutGood,
                                     handlerDeleteGoodInSell}) {
    let goodsInSell = sells[outSellKey].goods;
    let cards = [];
    for (let key of goodsInSell) {
        cards.push(<GoodInSellCard key={key} goodId={key} goods={goods} handlerOutGood={handlerOutGood}
                                   handlerDeleteGoodInSell={handlerDeleteGoodInSell} handlerGo={handlerGo}/>)
    }
    return <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
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
                   onClick={(e) =>  {
                       handlerGo(e, 'goodsInSell');
                   }}/>
        </div>
    </MenuContainer>
}