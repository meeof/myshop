import MenuContainer from "../MenuContainer";
import ProfileCard from "./ProfileCard";
import SellCard from "../cards/SellCard";
import GoodInSellCard from "../cards/GoodInSellCard";

export default function MyShop({handlerGo, handlerActiveMenu, activeButton, sells, goods, logged, userBase, handlerOutSell,
                                   handlerOutGood, handlerDeleteGoodInProfile, handlerDeleteSellInProfile,
                                   handlerOutAddSellOrAddGood}) {
    let cards = [];
    for (let key of userBase[logged].myGoods) {
        if (goods[key]) {
            cards.push(<GoodInSellCard key={key} goodId={key} goods={goods} handlerOutGood={handlerOutGood}
                                       handlerDeleteGoodInProfile={handlerDeleteGoodInProfile} handlerGo={handlerGo}
                                       profile={true}/>)
        }
    }
    for (let key of userBase[logged].mySells) {
        if (sells[key]) {
            cards.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerDeleteSellInProfile={handlerDeleteSellInProfile}
                                 handlerOutSell={handlerOutSell} handlerGo={handlerGo} handlerOutGood={handlerOutGood}
                                 profile={true}/>)
        }
    }
    return <>
        <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <ProfileCard name={userBase[logged].shopName} description={userBase[logged].shopDescription}
                         image={userBase[logged].profileImage} isShop={true}/>
            <div className={'cardPlace'}>
                {cards}
            </div>
            <div className={'myShopBottom'}>
                <input type={"button"} className={'shopInteractiveElement'} value={'Товары'} onClick={(e) => {
                    handlerOutAddSellOrAddGood(false);
                    handlerGo(e, 'мyShopAdd')
                }}/>
                <input type={"button"} className={'shopInteractiveElement'} value={'Продажи'} onClick={(e) => {
                    handlerOutAddSellOrAddGood(true);
                    handlerGo(e, 'мyShopAdd')
                }}/>
            </div>
        </MenuContainer>
    </>
}