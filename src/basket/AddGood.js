import GoodCard from "../cards/GoodCard";
import Find from "../Find";
import MenuContainer from "../MenuContainer";

export default function AddGood({goods, handlerOutGood, activeButton, handlerActiveMenu}) {
    handlerActiveMenu('profile');
    let outCards = [];
    for (let key in goods) {
        outCards.push(<GoodCard key={key} good={goods[key]} handlerOutGood={handlerOutGood}
                                 goodId={key} isSeller={true}/>)
    }
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
        <Find/>
        <div className={'cardPlace'}>
            {outCards}
        </div>
    </MenuContainer>
}
