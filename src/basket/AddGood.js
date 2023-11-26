import GoodCard from "../cards/GoodCard";
import Find from "../Find";
import MenuContainer from "../MenuContainer";
import {useEffect} from "react";

export default function AddGood({goods, handlerOutGood, activeButton, handlerActiveMenu, logged}) {
    useEffect(() => {
        handlerActiveMenu('profile');
    }, []);
    let outCards = [];
    for (let key in goods) {
        outCards.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
                                 goodId={key} isSeller={true}/>)
    }
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
        <Find/>
        <div className={'cardPlace'}>
            {outCards}
        </div>
    </MenuContainer>
}
