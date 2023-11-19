import MenuContainer from "../MenuContainer";
import Find from "../Find";
import GoodInSellCard from "../cards/GoodInSellCard";
import GoodCard from "../cards/GoodCard";
import SellCard from "../cards/SellCard";

export default function MyShopAdd({handlerGo, activeButton, handlerActiveMenu, addSellOut, userBase, logged, goods,
                                      handlerOutGood, handlerAddGoodToProfile, sells, handlerDeleteSellInProfile,
                                      handlerOutSell, handlerAddSellToProfile}) {
    let goodsContent = [];
    let goodsInProfile = userBase[logged].myGoods;
    for (let key in goods) {
        if (!goodsInProfile.includes(key)) {
            goodsContent.push(<GoodCard key={key} goodId={key} goods={goods} handlerOutGood={handlerOutGood} isSeller={true}
                                        handlerGo={handlerGo} good={goods[key]} handlerAddGoodToProfile={handlerAddGoodToProfile}
                                        profile={true}/>)
        }
    }
    let sellsContent = [];
    let sellsInProfile = userBase[logged].mySells;
    for (let key in sells) {
        if (!sellsInProfile.includes(key)) {
            sellsContent.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerDeleteSellInProfile={handlerDeleteSellInProfile}
                                        handlerOutSell={handlerOutSell} handlerGo={handlerGo} handlerOutGood={handlerOutGood}
                                        profile={true} handlerAddSellToProfile={handlerAddSellToProfile} isSeller={true}/>)
        }
    }

    return <>
        <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <Find place={!addSellOut ? 'goods' : 'sells'}/>
            {!addSellOut ? <>
                <div className={'contentContainer'}>
                    <div className={'cardPlace'}>
                        {goodsContent}
                    </div>
                    <input type={"button"} value={'Создать товар'} className={'shopInteractiveElement bottomButton'}
                           onClick={(e) =>  {
                               {handlerGo(e, 'createGood')}
                           }}/>
                </div>
            </> : <>
                <div className={'contentContainer'}>
                    <div className={'cardPlace'}>
                        {sellsContent}
                    </div>
                    <input type={"button"} value={'Создать продажу'} className={'shopInteractiveElement bottomButton'}
                           onClick={(e) =>  {
                               {handlerGo(e, 'createSell')}
                           }}/>
                </div></>}
        </MenuContainer>
    </>
}