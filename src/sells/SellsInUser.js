import SellCard from "../cards/SellCard";
import Find from "../Find";
import MenuContainer from "../MenuContainer";

export default function SellsInUser({activeButton, handlerActiveMenu, sells, goods, handlerOutSell, handlerOutGood,
                                    handlerToFavorites, outUserKey, userBase}) {
    handlerActiveMenu('profile');
    let cards = [];
    for (let key of userBase[outUserKey].mySells) {
        if (!sells[key]) {
            continue;
        }
        cards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerOutGood={handlerOutGood}
                             main={true} handlerToFavorites={handlerToFavorites} handlerOutSell={handlerOutSell}/>)
    }
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
        <Find place={'sells'}/>
        <div className={'cardPlace'}>
            {cards}
        </div>
    </MenuContainer>
}