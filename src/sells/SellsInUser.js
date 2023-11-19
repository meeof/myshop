import SellCard from "../cards/SellCard";
import Find from "../Find";
import MenuContainer from "../MenuContainer";

export default function SellsInUser({handlerGo, activeButton, handlerActiveMenu, sells, goods, handlerOutSell, handlerOutGood,
                                    handlerToFavorites, outUserKey, userBase}) {
    let cards = [];
    for (let key of userBase[outUserKey].mySells) {
        cards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerGo={handlerGo}
                             handlerOutGood={handlerOutGood} main={true} handlerToFavorites={handlerToFavorites}
                             handlerOutSell={handlerOutSell}/>)
    }
    return <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
        <Find place={'sells'}/>
        <div className={'cardPlace'}>
            {cards}
        </div>
    </MenuContainer>
}