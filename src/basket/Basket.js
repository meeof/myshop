import MenuContainer from "../MenuContainer";
import HeadBasket from "./HeadBasket";
import {useEffect, useState} from "react";
import MyBuys from "./MyBuys";
import MyGoods from "./MyGoods";
import MyBuyers from "./MyBuyers";
import {useNavigate} from "react-router-dom";

export default function Basket({activeButton, handlerActiveMenu, userBase, goods, logged, handlerFind, findText}) {
    const navigate = useNavigate();
    useEffect(() => {
        handlerFind('');
        if (!logged) {
            navigate('/', { replace: false });
        }
        handlerActiveMenu('basket');
    }, []);
    let [viewBasketPage, setViewBasketPage] = useState('buys');
    let outPage;
    if (logged) {
        switch (viewBasketPage) {
            case 'buys' : {
                outPage = <MyBuys userBase={userBase} goods={goods} logged={logged} findText={findText}/>
                break;
            }
            case 'goods' : {
                outPage = <MyGoods userBase={userBase} goods={goods} logged={logged} findText={findText}/>
                break
            }
            case 'buyers' : {
                outPage = <MyBuyers userBase={userBase} goods={goods} logged={logged} findText={findText}/>
                break
            }
        }
    }
    function handlerHeadBasket(pageKey) {
        setViewBasketPage(pageKey);
    }
    return <>
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
            <HeadBasket viewBasketPage={viewBasketPage} handlerHeadBasket={handlerHeadBasket} handlerFind={handlerFind}
                        findText={findText}/>
            {outPage}
        </MenuContainer>
    </>
}