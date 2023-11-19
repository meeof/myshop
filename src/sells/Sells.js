import MenuContainer from "../MenuContainer";
import Find from "../Find";
import SellCard from "../cards/SellCard";

export default function Sells({handlerGo, activeButton, handlerActiveMenu, sells, goods, handlerDeleteSell, handlerOutSell, handlerOutGood}) {
    let cards = [];
    for (let key in sells) {
        cards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerDeleteSell={handlerDeleteSell}
                             handlerOutSell={handlerOutSell} handlerGo={handlerGo} handlerOutGood={handlerOutGood} profile={false}/>)
    }
    return  <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
        <Find place={'sells'}/>
        <div className={'contentContainer'}>
            <div className={'cardPlace'}>
                {cards}
            </div>
            <input type={"button"} value={'Создать продажу'} className={'shopInteractiveElement bottomButton'}
                   onClick={(e) =>  {handlerGo(e, 'createSell')}}/>
        </div>
    </MenuContainer>
}