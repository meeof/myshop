import styled from "styled-components";

export default function MyBuyCard({date, goodsKeys, goods}) {
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
    return <div className={'basketCardContainer'}>
        <h3 className="basketCardHeader">{date}</h3>
            {outGoods}
    </div>
}