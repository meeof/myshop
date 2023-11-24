import './basket.css';
import '../App.css';
import MyGoodCard from "../cards/MyGoodCard";

export default function MyGoods({userBase, logged, goods}) {
    let outCards = [];
    let myBuysObj = userBase[logged].basketGoods;
    for (let key in myBuysObj) {
        outCards.push(<MyGoodCard key={key} date={myBuysObj[key].date} good={myBuysObj[key].good}
                                  number={myBuysObj[key].number} sellers={myBuysObj[key].sellers} goods={goods}/>);
    }
    return <div className={'contentContainer'}>
        <div className={'cardPlace'}>
            {outCards}
        </div>
       <input type={"button"} value={'Добавить товар'} className={'shopInteractiveElement bottomButton'}
              onClick={() =>  {}}/>
    </div>
}