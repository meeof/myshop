import './basket.css';
import '../App.css';
import MyGoodCard from "../cards/MyGoodCard";
import {findMatch} from "../App";

export default function MyGoods({userBase, logged, goods, findText}) {
    let outCards = [];
    let myBuysObj = userBase[logged].basketGoods;
    for (let key in myBuysObj) {
        let textCard = '';
        textCard += myBuysObj[key].good + myBuysObj[key].date + myBuysObj[key].number;
        for (let seller of myBuysObj[key].sellers) {
            textCard += seller.name + `₽ ${seller.preCost}%` + `${seller.amount} шт` + seller.cost;
        }
        if (findMatch(findText, textCard)) {
            outCards.push(<MyGoodCard key={key} date={myBuysObj[key].date} good={myBuysObj[key].good}
                                      number={myBuysObj[key].number} sellers={myBuysObj[key].sellers} goods={goods}/>);
        }
    }
    return <div className={'contentContainer'}>
        <div className={'cardPlace'}>
            {outCards}
        </div>
        <div className={'bottomButtonContainer'}>
            <input type={"button"} value={'Добавить товар'} className={'shopInteractiveElement bottomButton'}
                   onClick={() =>  {}}/>
        </div>
    </div>
}