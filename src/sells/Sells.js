import MenuContainer from "../MenuContainer";
import Find from "../Find";
import SellCard from "../cards/SellCard";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Sells({activeButton, handlerActiveMenu, sells, goods, handlerDeleteSell, handlerOutSell,
                                  handlerOutGood, logged}) {
    useEffect(() => {
        handlerActiveMenu('sells');
    }, []);
    const navigate = useNavigate();
    let cards = [];
    for (let key in sells) {
        cards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerDeleteSell={handlerDeleteSell}
                             handlerOutSell={handlerOutSell} handlerOutGood={handlerOutGood} profile={false}/>)
    }
    return  <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
        <Find place={'sells'}/>
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