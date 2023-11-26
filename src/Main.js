import MenuContainer from "./MenuContainer";
import Find from "./Find";
import GoodCard from "./cards/GoodCard";
import SellCard from "./cards/SellCard";
import ProfileMainCard from "./cards/ProfileMainCard";
import {useEffect, useState} from "react";
import {findMatch} from "./App";
import {useNavigate} from "react-router-dom";

export default function Main({activeButton, handlerActiveMenu, goods, handlerOutGood, handlerToFavorites, logged,
                             handlerAddMyBuy, sells, handlerOutSell, userBase, handlerOutUserKey, handlerFind, findText}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!logged) {
            navigate('/', { replace: false });
        }
        handlerActiveMenu('catalog');
    }, []);
    let cards = [];
    if (logged) {
        for (let key in goods) {
            if (findMatch(findText, goods[key].name + goods[key].shortDescription + goods[key].user)) {
                cards.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
                                     goodId={key} handlerToFavorites={handlerToFavorites} handlerAddMyBuy={handlerAddMyBuy}/>)
            }
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
    }
    return <>
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
            <Find findText={findText} handlerFind={handlerFind}/>
            <div className={'cardPlace'}>
                {cards}
            </div>
        </MenuContainer>
    </>
}