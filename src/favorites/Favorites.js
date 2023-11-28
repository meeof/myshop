import MenuContainer from "../MenuContainer";
import Find from "../Find";
import styled from "styled-components";
import GoodCard from "../cards/GoodCard";
import SellCard from "../cards/SellCard";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {findMatch} from "../App";

let NoFavorites = styled.div`
    margin-left: auto;
  margin-right: auto;
  width: max-content;
  opacity: .5;
`
export default function Favorites({activeButton, handlerActiveMenu, goods, sells, handlerOutSell, handlerFind, findText,
                                      userBase, logged, handlerOutGood, handlerFromFavorites, handlerAddMyBuy}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!logged) {
            navigate('/', { replace: false });
        }
        handlerActiveMenu('favorites');
        handlerFind('');
    }, []);
    let outCards = [];
    let arrKeys;
    if (logged) {
        arrKeys = userBase[logged].favorites;
        outCards = [];
        for (let key of arrKeys) {
            if (goods[key]) {
                if (findMatch(findText, goods[key].name + goods[key].shortDescription + goods[key].user)) {
                    outCards.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
                                            goodId={key} handlerFromFavorites={handlerFromFavorites} handlerAddMyBuy={handlerAddMyBuy}/>)
                }
            }
            else if (sells[key]) {
                if (findMatch(findText, sells[key].name + sells[key].description + sells[key].user)) {
                    outCards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerOutGood={handlerOutGood}
                                            main={true} handlerFromFavorites={handlerFromFavorites}
                                            handlerOutSell={handlerOutSell}/>)
                }
            }
        }
    }
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
        <Find findText={findText} handlerFind={handlerFind}/>
        {outCards.length !== 0 ? <div className={'cardPlace'}>
            {outCards}
        </div> :
        <NoFavorites>Нет избранных</NoFavorites>}
    </MenuContainer>
}