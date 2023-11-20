import imagePen from  '../images/pen.svg';
import imageDelete from '../images/delete.svg';
import starImage from "../images/star.svg";
import noFavoritesImage from "../images/noFavorites.svg";
import findImage from  "../images/findBlack.svg";
import {useMemo, useState} from "react";
import {randomColor} from "../App";
export default function SellCard({sell, goods, isSeller, id, handlerDeleteSell, handlerOutSell, handlerGo,
                                     handlerDeleteSellInProfile, profile, handlerAddSellToProfile, main, handlerToFavorites,
                                 handlerFromFavorites}) {
    const bgColor = useMemo(
        () => randomColor(0.08),
        []
    );
    let [addFav, setAddFav] = useState('');
    function clearPopUpActive() {
        setAddFav('');
    }
    let images = [];
    for (let i=0; i<4; i++) {
        if (sell.goods[i]) {
            let goodKey = sell.goods[i];
            images.push(goods[goodKey].image);
        }
        else {
            images.push("#");
        }
    }
    let cardButtons;
    if (!isSeller) {
        cardButtons = <>
            <div className="imageCard" onClick={(e)=> {handlerOutSell(id);
                handlerGo(e, 'viewSells')}}>
                <img src={imagePen}/>
            </div>
            <div className="imageCard" onClick={()=> {
                if (!profile) {
                    handlerDeleteSell(id);
                }
                else {
                    handlerDeleteSellInProfile(id);
                }
            }}>
                <img src={imageDelete}/>
            </div>
        </>
    }
    else {
        cardButtons = <>
            <div className="imageCard" onClick={()=> {
                handlerAddSellToProfile(id);
            }}>+</div></>
    }
    if (main) {
        cardButtons = <>
            <div className="imageCard" onClick={(e)=> {
                handlerOutSell(id);
                handlerGo(e, 'viewSellMain');
            }}>
                <img src={findImage}/>
            </div>
            <div className="imageCard" onClick={
                () => {
                    if (handlerToFavorites) {
                        handlerToFavorites(id);
                        setAddFav('popUp-active');
                        let timeoutPopUp = window.setTimeout(clearPopUpActive, 1000);
                    }
                    else {
                        handlerFromFavorites(id);
                    }
                }}>
                {handlerToFavorites ? <>
                    <img src={starImage}/>
                    <div className={`popUp ${addFav}`}>Добавлено</div>
                </> : <img src={noFavoritesImage}/>}
            </div>
        </>
    }
    return <div className={'cardContainer'} style={{backgroundColor: bgColor}}>
        <div className="goodLabels">
            <h4>{sell.name}</h4>
            <p>{sell.description}</p>
            <span>by {sell.user}</span>
        </div>
        <div className={'sellImgContainer'}>
            <img src={images[0]} className={'sellImage'}/>
            <img src={images[1]} className={'sellImage'}/>
            <img src={images[2]} className={'sellImage'}/>
            <img src={images[3]} className={'sellImage'}/>
        </div>
        <div className='cardButtons'>
            {cardButtons}
        </div>
    </div>
}