import basketImage from '../images/basket.svg';
import starImage from '../images/star.svg';
import noFavoritesImage from '../images/noFavorites.svg';
import './cards.css';
import {useMemo, useState} from "react";
import '../App.css';
import {randomColor} from '../App';

export default function GoodCard({good, handlerGo, handlerOutGood, goodId, handlerToFavorites, handlerFromFavorites,
                                     handlerAddMyBuy, isSeller, handlerAddToSell, profile, handlerAddGoodToProfile}) {
    const bgColor = useMemo(
        () => randomColor(0.08),
        []
    );
    let [addFav, setAddFav] = useState('');
    let [addBasket, setAddBasket] = useState('');
    let [goodAmount, setGoodAmount] = useState('');
    function clearPopUpActive() {
        setAddFav('');
    }
    return <div className={'cardContainer'} style={{backgroundColor: bgColor}}>
        <div className="imgCardContainer" onClick={(e) => {
            handlerGo(e, 'productView');
            handlerOutGood(goodId);
        }}>
            <img src={good.image}/>
        </div>
        <div className="goodLabels">
            <h4>{good.name}</h4>
            <p>{good.shortDescription}</p>
            <span>by {good.user}</span>
        </div>
        <div className='cardButtons'>
            {!isSeller ? <>
                <div className="imageCard" onClick={()=> setAddBasket('popUpBasket-active')}>
                <img src={basketImage}/>
                <div className={`popUp ${addBasket}`}>
                    <input type={"number"} placeholder={'Количество'} value={goodAmount}
                           onChange={(e) => setGoodAmount(e.target.value)}/>
                    <img src={basketImage} onClick={(e) => {
                        e.stopPropagation();
                        handlerAddMyBuy(goodId, goodAmount);
                        setAddBasket('');
                    }}/>
                </div>
            </div>
                <div className="imageCard" onClick={
                    () => {
                        if (handlerToFavorites) {
                            handlerToFavorites(goodId);
                            setAddFav('popUp-active');
                            let timeoutPopUp = window.setTimeout(clearPopUpActive, 1000);
                        }
                        else {
                            handlerFromFavorites(goodId);
                        }
                    }}>
                    {handlerToFavorites ? <>
                        <img src={starImage}/>
                        <div className={`popUp ${addFav}`}>Добавлено</div>
                    </> : <img src={noFavoritesImage}/>}
                </div>
            </> : <>
            <div className="imageCard" onClick={()=> {
                if (profile) {
                    handlerAddGoodToProfile(goodId);
                }
                else {
                    handlerAddToSell(goodId);
                }
            }}>+</div>
            </>}
        </div>
    </div>
}