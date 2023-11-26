import MenuContainer from "../MenuContainer";
import Find from "../Find";
import styled from "styled-components";
import GoodCard from "../cards/GoodCard";
import SellCard from "../cards/SellCard";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

let NoFavorites = styled.div`
    margin-left: auto;
  margin-right: auto;
  width: max-content;
  opacity: .5;
`
export default function Favorites({activeButton, handlerActiveMenu, goods, sells, handlerOutSell,
                                      userBase, logged, handlerOutGood, handlerFromFavorites, handlerAddMyBuy}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!logged) {
            navigate('/', { replace: false });
        }
        handlerActiveMenu('favorites');
    }, []);
    let outCards = [];
    let arrKeys;
    if (logged) {
        arrKeys = userBase[logged].favorites;
        outCards = [];
        for (let key of arrKeys) {
            if (goods[key]) {
                outCards.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
                                        goodId={key} handlerFromFavorites={handlerFromFavorites} handlerAddMyBuy={handlerAddMyBuy}/>)
            }
            else if (sells[key]) {
                outCards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerOutGood={handlerOutGood}
                                        main={true} handlerFromFavorites={handlerFromFavorites}
                                        handlerOutSell={handlerOutSell}/>)
            }
        }
    }
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
        <Find/>
        {outCards.length !== 0 ? <div className={'cardPlace'}>
            {outCards}
        </div> :
        <NoFavorites>Нет избранных</NoFavorites>}
    </MenuContainer>
}