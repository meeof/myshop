import MenuContainer from "../MenuContainer";
import ProfileCard from "./ProfileCard";
import SellCard from "../cards/SellCard";
import GoodInSellCard from "../cards/GoodInSellCard";
import {useNavigate} from "react-router-dom";

export default function MyShop({handlerActiveMenu, activeButton, sells, goods, logged, userBase, handlerOutSell,
                                   handlerOutGood, handlerDeleteGoodInProfile, handlerDeleteSellInProfile,
                                   handlerOutAddSellOrAddGood}) {
    handlerActiveMenu('profile');
    const navigate = useNavigate();
    let cards = [];
    for (let key of userBase[logged].myGoods) {
        if (goods[key]) {
            cards.push(<GoodInSellCard key={key} goodId={key} goods={goods} handlerOutGood={handlerOutGood}
                                       handlerDeleteGoodInProfile={handlerDeleteGoodInProfile} profile={true}/>)
        }
    }
    for (let key of userBase[logged].mySells) {
        if (sells[key]) {
            cards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerDeleteSellInProfile={handlerDeleteSellInProfile}
                                 handlerOutSell={handlerOutSell} handlerOutGood={handlerOutGood} profile={true}/>)
        }
    }
    return <>
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <ProfileCard name={userBase[logged].shopName} description={userBase[logged].shopDescription}
                         image={userBase[logged].profileImage} isShop={true}/>
            <div className={'cardPlace'}>
                {cards}
            </div>
            <div className={'myShopBottom'}>
                <input type={"button"} className={'shopInteractiveElement'} value={'Товары'} onClick={() => {
                    handlerOutAddSellOrAddGood(false);
                    navigate('../мyShopAdd', { replace: false });
                }}/>
                <input type={"button"} className={'shopInteractiveElement'} value={'Продажи'} onClick={() => {
                    handlerOutAddSellOrAddGood(true);
                    navigate('../мyShopAdd', { replace: false });
                }}/>
            </div>
        </MenuContainer>
    </>
}