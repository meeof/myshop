import MenuContainer from "../MenuContainer";
import HeadBasket from "./HeadBasket";
import {useState} from "react";
import MyBuys from "./MyBuys";
import MyGoods from "./MyGoods";
import MyBuyers from "./MyBuyers";

export default function Basket({activeButton, handlerActiveMenu, userBase, goods, logged}) {
    handlerActiveMenu('basket');
    let [viewBasketPage, setViewBasketPage] = useState('buys');
    let outPage;
    switch (viewBasketPage) {
        case 'buys' : {
            outPage = <MyBuys userBase={userBase} goods={goods} logged={logged}/>
            break;
        }
        case 'goods' : {
            outPage = <MyGoods userBase={userBase} goods={goods} logged={logged}/>
            break
        }
        case 'buyers' : {
            outPage = <MyBuyers userBase={userBase} goods={goods} logged={logged}/>
            break
        }
    }
    function handlerHeadBasket(pageKey) {
        setViewBasketPage(pageKey);
    }
    return <>
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <HeadBasket viewBasketPage={viewBasketPage} handlerHeadBasket={handlerHeadBasket}/>
            {outPage}
        </MenuContainer>
    </>
}