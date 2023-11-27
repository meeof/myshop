import './basket.css';
import '../App.css';
import MyBuyerCard from "../cards/MyBuyerCard";
import {useNavigate} from "react-router-dom";
import {findMatch} from "../App";

export default function MyBuyers({userBase, logged, goods, findText}) {
    const navigate = useNavigate();
    let outCards = [];
    let myBuysObj = userBase[logged].basketBuyers;
    for (let key in myBuysObj) {
        let textCard = '';
        textCard += myBuysObj[key].name;
        for (let good of myBuysObj[key].goods) {
            let preCostProc = goods[good.id].preCost.match(/\d+%/);
            textCard += goods[good.id].name + `₽ ${preCostProc}` + good.amount + good.num;
        }
        if (findMatch(findText, textCard)) {
            outCards.push(<MyBuyerCard key={key} goods={goods} name={myBuysObj[key].name} goodsBuyers={myBuysObj[key].goods}/>);
        }
    }
    return <div className={'contentContainer'}>
        <div className={'cardPlace'}>
            {outCards}
        </div>
        <div className={'bottomButtonContainer'}>
            <input type={"button"} value={'Добавить покупателя'} className={'shopInteractiveElement bottomButton'}
                   onClick={() =>  {navigate('../addBuyer', { replace: false })}}/>
        </div>
    </div>
}