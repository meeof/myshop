import Find from "../Find";

export default function HeadHistory({viewHistoryPage, handlerHeadHistory}) {
    return <div className={'headContainer'}>
        <div className="headButtons">
            <input type="button"
                   className={viewHistoryPage === 'purchased' ? "headButton activeHeadButton" : "headButton"}
                   onClick={() => handlerHeadHistory('purchased')} value="Куплено"/>
            <input type="button"
                   className={viewHistoryPage === 'sales' ? "headButton activeHeadButton" : "headButton"}
                   onClick={() => handlerHeadHistory('sales')} value="Продано"/>
        </div>
        <div className="findBasketCont">
            <Find place={'goods'}/>
        </div>
    </div>
}