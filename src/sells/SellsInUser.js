import SellCard from "../cards/SellCard";
import Find from "../Find";
import MenuContainer from "../MenuContainer";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function SellsInUser({activeButton, handlerActiveMenu, sells, goods, handlerOutSell, handlerOutGood,
                                    handlerToFavorites, outUserKey, userBase, logged}) {
    const nav = useNavigate();
    let redFlag = false;
    if (!logged || !outUserKey) {
        redFlag = true;
    }
    useEffect(() => {
        if (redFlag) {
            nav('/', { replace: false });
        }
        handlerActiveMenu('sells');
    }, []);
    let cards = [];
    if (!redFlag) {
        for (let key of userBase[outUserKey].mySells) {
            if (!sells[key]) {
                continue;
            }
            cards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerOutGood={handlerOutGood}
                                 main={true} handlerToFavorites={handlerToFavorites} handlerOutSell={handlerOutSell}/>)
        }
    }
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
        <Find place={'sells'}/>
        <div className={'cardPlace'}>
            {cards}
        </div>
    </MenuContainer>
}