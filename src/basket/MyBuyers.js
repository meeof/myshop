import './basket.css';
import '../App.css';
import MyBuyerCard from "../cards/MyBuyerCard";
import {useNavigate} from "react-router-dom";

export default function MyBuyers({userBase, logged, goods}) {
    const navigate = useNavigate();
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
               onClick={() =>  {navigate('../addBuyer', { replace: false })}}/>
    </div>
}