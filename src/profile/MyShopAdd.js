import MenuContainer from "../MenuContainer";
import Find from "../Find";
import GoodCard from "../cards/GoodCard";
import SellCard from "../cards/SellCard";
import {useNavigate} from "react-router-dom";

export default function MyShopAdd({activeButton, handlerActiveMenu, addSellOut, userBase, logged, goods,
                                      handlerOutGood, handlerAddGoodToProfile, sells, handlerDeleteSellInProfile,
                                      handlerOutSell, handlerAddSellToProfile}) {
    handlerActiveMenu('profile');
    const navigate = useNavigate();
    let goodsContent = [];
    let goodsInProfile = userBase[logged].myGoods;
    for (let key in goods) {
        if (!goodsInProfile.includes(key)) {
            goodsContent.push(<GoodCard key={key} goodId={key} goods={goods} handlerOutGood={handlerOutGood} isSeller={true}
                                        good={goods[key]} handlerAddGoodToProfile={handlerAddGoodToProfile} profile={true}/>)
        }
    }
    let sellsContent = [];
    let sellsInProfile = userBase[logged].mySells;
    for (let key in sells) {
        if (!sellsInProfile.includes(key)) {
            sellsContent.push(<SellCard key={key} sell={sells[key]} goods={goods} id={key} handlerDeleteSellInProfile={handlerDeleteSellInProfile}
                                        handlerOutSell={handlerOutSell} handlerOutGood={handlerOutGood}
                                        profile={true} handlerAddSellToProfile={handlerAddSellToProfile} isSeller={true}/>)
        }
    }

    return <>
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <Find place={!addSellOut ? 'goods' : 'sells'}/>
            {!addSellOut ? <>
                <div className={'contentContainer'}>
                    <div className={'cardPlace'}>
                        {goodsContent}
                    </div>
                    <input type={"button"} value={'Создать товар'} className={'shopInteractiveElement bottomButton'}
                           onClick={() =>  {
                               navigate('../createGood', { replace: false });
                           }}/>
                </div>
            </> : <>
                <div className={'contentContainer'}>
                    <div className={'cardPlace'}>
                        {sellsContent}
                    </div>
                    <input type={"button"} value={'Создать продажу'} className={'shopInteractiveElement bottomButton'}
                           onClick={() =>  {
                               navigate('../createSell', { replace: false });
                           }}/>
                </div></>}
        </MenuContainer>
    </>
}