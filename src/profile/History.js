import {useState} from "react";
import MenuContainer from "../MenuContainer";
import GoodCard from "../cards/GoodCard";
import HeadHistory from "./HeadHistory";

export default function History({activeButton, handlerActiveMenu, userBase, goods, logged, handlerOutGood,
                                    handlerToFavorites, handlerAddMyBuy}) {
    handlerActiveMenu('profile');
    let [viewHistoryPage, setViewHistoryPage] = useState('purchased');
    let outPage;
    let purchased = [];
    let sales = [];
    for (let key of userBase[logged].historyBuys) {
        purchased.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
                                 goodId={key} handlerToFavorites={handlerToFavorites} handlerAddMyBuy={handlerAddMyBuy}/>);
    }
    for (let key of userBase[logged].historySells) {
        sales.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
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
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
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