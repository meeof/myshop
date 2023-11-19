import MenuContainer from "../MenuContainer";
import HeadBasket from "./HeadBasket";
import {useState} from "react";
import MyBuys from "./MyBuys";
import MyGoods from "./MyGoods";
import MyBuyers from "./MyBuyers";

export default function Basket({handlerGo, activeButton, handlerActiveMenu, userBase, goods, logged}) {
    let [viewBasketPage, setViewBasketPage] = useState('buys');
    let outPage;
    switch (viewBasketPage) {
        case 'buys' : {
            outPage = <MyBuys userBase={userBase} goods={goods} logged={logged}/>
            break;
        }
        case 'goods' : {
            outPage = <MyGoods userBase={userBase} goods={goods} logged={logged} handlerGo={handlerGo}/>
            break
        }
        case 'buyers' : {
            outPage = <MyBuyers userBase={userBase} goods={goods} logged={logged} handlerGo={handlerGo}/>
            break
        }
    }
    function handlerHeadBasket(pageKey) {
        setViewBasketPage(pageKey);
    }
    return <>
        <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <HeadBasket viewBasketPage={viewBasketPage} handlerHeadBasket={handlerHeadBasket}/>
            {outPage}
        </MenuContainer>
    </>
}