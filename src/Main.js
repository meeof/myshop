import MenuContainer from "./MenuContainer";
import Find from "./Find";
import GoodCard from "./cards/GoodCard";
import SellCard from "./cards/SellCard";
import ProfileMainCard from "./cards/ProfileMainCard";

export default function Main({activeButton, handlerActiveMenu, goods, handlerOutGood, handlerToFavorites,
                             handlerAddMyBuy, sells, handlerOutSell, userBase, handlerOutUserKey}) {
    handlerActiveMenu('catalog');
    let cards = [];
    for (let key in goods) {
        cards.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
                             goodId={key} handlerToFavorites={handlerToFavorites} handlerAddMyBuy={handlerAddMyBuy}/>)
    }
    for (let key in sells) {
        cards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerOutGood={handlerOutGood} main={true}
                             handlerToFavorites={handlerToFavorites}
                             handlerOutSell={handlerOutSell}/>)
    }
    for (let key in userBase) {
        cards.push(<ProfileMainCard sells={sells} name={key} key={key} description={userBase[key].description}
                                    userSells={userBase[key].mySells} handlerOutSell={handlerOutSell}
                                    handlerOutUserKey={handlerOutUserKey}/>)
    }
    return <>
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <Find/>
            <div className={'cardPlace'}>
                {cards}
            </div>
        </MenuContainer>
    </>
}