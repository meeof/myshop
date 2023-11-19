import MenuContainer from "../MenuContainer";
import './product.css';
import imageArrow from '../images/prodArrow.svg'
import {useState} from "react";
import ComRevBlock from "./ComRevBlock";
import basketImage from "../images/basket.svg";
import starImage from "../images/star.svg";
import Carousel from "../Carousel";

export default function ProductView({handlerGo, activeButton, handlerActiveMenu, outGoodKey, goods, handlerAddComRev,
                                    handlerAddMyBuy, handlerToFavorites}) {
    let [comRev, setComRev] = useState('');
    let [addBasket, setAddBasket] = useState(false);
    let [goodAmount, setGoodAmount] = useState('');
    let [addFav, setAddFav] = useState('');
    function clearPopUpActive() {
        setAddFav('');
    }
    function handlerComRev(status) {
        if (comRev === status) {
            setComRev('');
        }
        else {
            setComRev(status);
        }
    }
    return <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
        <div className="productContainer">
            <Carousel imagesUrlArr={goods[outGoodKey].images} mainImage={goods[outGoodKey].image}></Carousel>
            <div className="productDescription">
                <h4>{goods[outGoodKey].name}</h4>
                <div className="productPrice">
                    <span className="prodCost">{goods[outGoodKey].cost} ₽</span>
                    <span>{goods[outGoodKey].preCost}</span>
                </div>
                <span className="productPointLabel">Доставка</span>
                <h4>{goods[outGoodKey].delivery}</h4>
                <p>{goods[outGoodKey].description}</p>
            </div>
            <div className="productButtons">
                {!addBasket ? <input type={"button"} value={'В корзину'} className={"shopInteractiveElement"}
                                     onClick={()=> setAddBasket(true)}/> :
                    <div className={"addProductToBasket shopInteractiveElement"}>
                        <input type={"number"} placeholder={'Количество'} value={goodAmount}
                               onChange={(e) => setGoodAmount(e.target.value)}/>
                        <img src={basketImage} onClick={() => {
                            handlerAddMyBuy(outGoodKey, goodAmount);
                            setAddBasket(false);
                        }}/>
                    </div>}
                <div className={'ArrowStarContainer'}>
                    <button className={"productArrow"} onClick={
                        () => {
                            handlerToFavorites(outGoodKey);
                            setAddFav('popUp-active');
                            let timeoutPopUp = window.setTimeout(clearPopUpActive, 1000);
                        }}>
                        <img src={starImage}/>
                        <div className={`popUp ${addFav}`}>Добавлено</div>
                    </button>
                    <button className={"productArrow"}>
                        <img src={imageArrow}/>
                    </button>
                </div>
                <input type="button" value="Отзывы" className="shopInteractiveElement"
                       onClick={()=> handlerComRev('reviews')}
                style={comRev === 'reviews' ? {background: "white"} : {}}/>
                <input type="button" value="Комментарии" className="shopInteractiveElement"
                       onClick={()=> handlerComRev('comments')}
                       style={comRev === 'comments' ? {background: "white"} : {}}/>
            </div>
        </div>
        <ComRevBlock comRev={comRev} outGoodKey={outGoodKey} goods={goods} handlerAddComRev={handlerAddComRev}/>
    </MenuContainer>
}
{/*<button className="shopInteractiveElement addBasket-big" onClick={()=> setAddBasket('popUpBasket-active')}>
                    В корзину

                </button>*/}