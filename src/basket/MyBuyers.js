import './basket.css';
import '../App.css';
import MyGoodCard from "../cards/MyGoodCard";
import MyBuyerCard from "../cards/MyBuyerCard";

export default function MyBuyers({userBase, logged, goods, handlerGo}) {
    let outCards = [];
    let myBuysObj = userBase[logged].basketBuyers;
    for (let key in myBuysObj) {
        outCards.push(<MyBuyerCard key={key} goods={goods} name={myBuysObj[key].name} goodsBuyers={myBuysObj[key].goods}/>);
    }
    return <div className={'contentContainer'}>
        <div className={'cardPlace'}>
            {outCards}
        </div>
        <input type={"button"} value={'Добавить покупателя'} className={'shopInteractiveElement bottomButton'}
               onClick={(e) =>  {handlerGo(e, 'addBuyer')}}/>
    </div>
}