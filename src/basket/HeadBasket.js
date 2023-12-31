import Find from "../Find";
import arrowsImage from '../images/arrows.svg';
import shiftImage from '../images/shift.svg';
import './headBasket.css';
export default function HeadBasket({viewBasketPage, handlerHeadBasket, handlerFind, findText}) {
    return <div className={'headContainer'}>
        <div className="headButtons">
            <input type="button"
                   className={viewBasketPage === 'buys' ? "headButton activeHeadButton" : "headButton"}
                   onClick={() => handlerHeadBasket('buys')} value="Покупки"/>
            <input type="button"
                   className={viewBasketPage === 'goods' ? "headButton activeHeadButton centerHeadButton" : "headButton centerHeadButton"}
                   onClick={() => handlerHeadBasket('goods')} value="Товары"/>
            <input type="button"
                   className={viewBasketPage === 'buyers' ? "headButton activeHeadButton" : "headButton"}
                   onClick={() => handlerHeadBasket('buyers')} value="Покупатели"/>
        </div>
        <div className="findBasketCont">
                <Find handlerFind={handlerFind} findText={findText}/>
                <img alt={'#'} src={arrowsImage}/>
                <img alt={'#'} src={shiftImage}/>
        </div>
    </div>
}