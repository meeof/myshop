import './basket.css';
import '../App.css';
import MyBuyCard from "../cards/MyBuyCard";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";
import {findMatch} from "../App";
export default function MyBuys({userBase, goods, logged, findText}) {
    const navigate = useNavigate();
    let outCards = [];
    let myBuysObj;
    if (!userBase[logged].basketBuys) {
        navigate('../', { replace: false });
    }
    else {
        myBuysObj= userBase[logged].basketBuys;
        for (let key in myBuysObj) {
            let textCard = '';
            for (let good of myBuysObj[key].goods) {
                let preCostProc = goods[good.key].preCost.match(/\d+%/);
                textCard += goods[good['key']].name + '₽' + preCostProc + good.amount + ' шт' + goods[good.key].cost
            }
            textCard += myBuysObj[key].date;

            if (findMatch(findText, textCard)) {
                outCards.push(<MyBuyCard key={key} date={myBuysObj[key].date} goodsKeys={myBuysObj[key].goods} goods={goods}/>);
            }
        }
    }
    return <div className={'contentContainer'}>
        <div className={'cardPlace'}>
            {outCards}
        </div>
        <div className={'bottomButtonContainer'}>
            <input type={"button"} value={'Перейти к оплате'} className={'shopInteractiveElement bottomButton'}/>
        </div>
    </div>
}