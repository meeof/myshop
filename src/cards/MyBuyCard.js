import {randomColor} from "../App";
import {useMemo} from "react";

export default function MyBuyCard({date, goodsKeys, goods}) {
    const bgColor = useMemo(
        () => randomColor(0.08),
        []
    );
    let outGoods = [];
    let counter = 0;
    for (let good of goodsKeys) {

        let preCostProc = goods[good.key].preCost.match(/\d+%/);
        let isOrange = false;
        if (parseInt(preCostProc[0]) < 51) {
            isOrange = true;
        }
        outGoods.push(
        <div className="myBuyContainer" key={counter}>
            <div>{goods[good['key']].name}</div>
            <div>₽ <span className={!isOrange ? 'myBuyGreen' : 'myBuyOrange'}>{preCostProc}</span></div>
            <div className={!isOrange ? 'myBuyGreen' : 'myBuyOrange'}>{good.amount} шт</div>
            <div>{goods[good.key].cost}</div>
        </div>
        )
        counter++;
    }
    return <div className={'basketCardContainer'} style={{backgroundColor: bgColor}}>
        <h3 className="basketCardHeader">{date}</h3>
            {outGoods}
    </div>
}