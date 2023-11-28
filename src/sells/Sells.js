import MenuContainer from "../MenuContainer";
import Find from "../Find";
import SellCard from "../cards/SellCard";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {findMatch} from "../App";

export default function Sells({activeButton, handlerActiveMenu, sells, goods, handlerDeleteSell, handlerOutSell,
                                  handlerOutGood, logged, handlerFind, findText}) {
    useEffect(() => {
        handlerFind('');
        handlerActiveMenu('sells');
    }, []);
    const navigate = useNavigate();
    let cards = [];
    for (let key in sells) {
        if (findMatch(findText, sells[key].name + sells[key].description + sells[key].user)) {
            cards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerDeleteSell={handlerDeleteSell}
                                 handlerOutSell={handlerOutSell} handlerOutGood={handlerOutGood} profile={false}/>)
        }
    }
    return  <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
        <Find place={'sells'} findText={findText} handlerFind={handlerFind}/>
        <div className={'contentContainer'}>
            <div className={'cardPlace'}>
                {cards}
            </div>
            <div className={'bottomButtonContainer'}>
                <input type={"button"} value={'Создать продажу'} className={'shopInteractiveElement bottomButton'}
                       onClick={() =>  {navigate('../createSell', { replace: false })}}/>
            </div>
        </div>
    </MenuContainer>
}