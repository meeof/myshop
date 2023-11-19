import './basket.css';
import '../App.css';
import MyBuyCard from "../cards/MyBuyCard";
export default function MyBuys({userBase, goods, logged}) {
    let outCards = [];
    let myBuysObj = userBase[logged].basketBuys;
    for (let key in myBuysObj) {
        outCards.push(<MyBuyCard key={key} date={myBuysObj[key].date} goodsKeys={myBuysObj[key].goods} goods={goods}/>);
    }
    return <div className={'contentContainer'}>
        <div className={'cardPlace'}>
            {outCards}
        </div>
        <input type={"button"} value={'Перейти к оплате'} className={'shopInteractiveElement bottomButton'}/>
    </div>
}