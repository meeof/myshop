import {useEffect, useState} from "react";
import MenuContainer from "../MenuContainer";
import GoodCard from "../cards/GoodCard";
import HeadHistory from "./HeadHistory";
import {useNavigate} from "react-router-dom";
import {findMatch} from "../App";

export default function History({activeButton, handlerActiveMenu, userBase, goods, logged, handlerOutGood,
                                    handlerToFavorites, handlerAddMyBuy, handlerFind, findText}) {
    const nav = useNavigate();
    useEffect(() => {
        !logged && nav('/', { replace: false });
        handlerActiveMenu('profile');
        handlerFind('');
    }, []);
    let [viewHistoryPage, setViewHistoryPage] = useState('purchased');
    let outPage;
    let purchased = [];
    let sales = [];
    if (logged) {
        for (let key of userBase[logged].historyBuys) {
            if (findMatch(findText, goods[key].name + goods[key].shortDescription + goods[key].user)) {
                purchased.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
                                         goodId={key} handlerToFavorites={handlerToFavorites} handlerAddMyBuy={handlerAddMyBuy}/>);
            }
        }
        for (let key of userBase[logged].historySells) {
            if (findMatch(findText, goods[key].name + goods[key].shortDescription + goods[key].user)) {
                sales.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
                                     goodId={key} handlerToFavorites={handlerToFavorites} handlerAddMyBuy={handlerAddMyBuy}/>);
            }
        }
    }
    switch (viewHistoryPage) {
        case 'purchased' : {
            outPage = purchased;
            break;
        }
        case 'sales' : {
            outPage = sales;
            break
        }
    }
    function handlerHeadHistory(pageKey) {
        setViewHistoryPage(pageKey);
    }
    return <>
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
            <HeadHistory viewHistoryPage={viewHistoryPage} handlerHeadHistory={handlerHeadHistory} findText={findText}
                         handlerFind={handlerFind}/>
                <div className={'cardPlace'}>
                    {outPage}
                </div>
            {}
        </MenuContainer>
    </>
}