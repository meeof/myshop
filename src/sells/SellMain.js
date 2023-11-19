import GoodCard from "../cards/GoodCard";
import MenuContainer from "../MenuContainer";

export default function SellMain({sells, goods, outSellKey, handlerGo, handlerActiveMenu, activeButton, handlerOutGood,
                                     handlerToFavorites, handlerAddMyBuy}) {
    let goodsInSell = sells[outSellKey].goods;
    let cards = [];
    for (let key of goodsInSell) {
        cards.push(<GoodCard key={key} good={goods[key]} handlerGo={handlerGo} handlerOutGood={handlerOutGood}
                             goodId={key} handlerToFavorites={handlerToFavorites} handlerAddMyBuy={handlerAddMyBuy}/>)
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
        </div>
    </MenuContainer>
}