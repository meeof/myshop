import {useState} from "react";
import MenuContainer from "../MenuContainer";
import HeadBasket from "../basket/HeadBasket";
import GoodCard from "../cards/GoodCard";
import HeadHistory from "./HeadHistory";

export default function History({handlerGo, activeButton, handlerActiveMenu, userBase, goods, sells, logged, handlerOutGood,
                                    handlerToFavorites, handlerAddMyBuy}) {
    let [viewHistoryPage, setViewHistoryPage] = useState('purchased');
    let outPage;
    let purchased = [];
    let sales = [];
    for (let key of userBase[logged].historyBuys) {
        purchased.push(<GoodCard key={key} good={goods[key]} handlerGo={handlerGo} handlerOutGood={handlerOutGood}
                                 goodId={key} handlerToFavorites={handlerToFavorites} handlerAddMyBuy={handlerAddMyBuy}/>);
    }
    for (let key of userBase[logged].historySells) {
        sales.push(<GoodCard key={key} good={goods[key]} handlerGo={handlerGo} handlerOutGood={handlerOutGood}
                                 goodId={key} handlerToFavorites={handlerToFavorites} handlerAddMyBuy={handlerAddMyBuy}/>);
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
        <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <HeadHistory viewHistoryPage={viewHistoryPage} handlerHeadHistory={handlerHeadHistory}/>
            <div className={'contentContainer'}>
                <div className={'cardPlace'}>
                    {outPage}
                </div>
            </div>
            {}
        </MenuContainer>
    </>
}