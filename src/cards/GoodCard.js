import basketImage from '../images/basket.svg';
import starImage from '../images/star.svg';
import noFavoritesImage from '../images/noFavorites.svg';
import './cards.css';
import {useMemo, useState} from "react";
import '../App.css';
import {randomColor} from '../App';
import {useNavigate} from "react-router-dom";

export default function GoodCard({good, handlerOutGood, goodId, handlerToFavorites, handlerFromFavorites,
                                     handlerAddMyBuy, isSeller, handlerAddToSell, profile, handlerAddGoodToProfile}) {
    const navigate = useNavigate();
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
        <div className="imgCardContainer" onClick={() => {
            handlerOutGood(goodId);
            navigate('../productView', { replace: false });
        }}>
            <img alt={'#'} src={good.image}/>
        </div>
        <div className="goodLabels">
            <h4>{good.name}</h4>
            <p>{good.shortDescription}</p>
            <span>by {good.user}</span>
        </div>
        <div className='cardButtons'>
            {!isSeller ? <>
                <div className="imageCard" onClick={()=> setAddBasket('popUpBasket-active')}>
                <img alt={'#'} src={basketImage}/>
                <div className={`popUp ${addBasket}`}>
                    <input type={"number"} placeholder={'Количество'} value={goodAmount}
                           onChange={(e) => setGoodAmount(e.target.value)}/>
                    <img alt={'#'} src={basketImage} onClick={(e) => {
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
                            window.setTimeout(clearPopUpActive, 1000);
                        }
                        else {
                            handlerFromFavorites(goodId);
                        }
                    }}>
                    {handlerToFavorites ? <>
                        <img alt={'#'} src={starImage}/>
                        <div className={`popUp ${addFav}`}>Добавлено</div>
                    </> : <img alt={'#'} src={noFavoritesImage}/>}
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