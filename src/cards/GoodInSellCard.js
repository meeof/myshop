import imagePen from  '../images/pen.svg';
import imageDelete from '../images/delete.svg';
import {randomColor} from "../App";
import {useMemo} from "react";
import {useNavigate} from "react-router-dom";
export default function GoodInSellCard({handlerOutGood, goodId, goods, isSeller, handlerDeleteGoodInSell,
                                           handlerDeleteGoodInProfile, profile}) {
    const navigate = useNavigate();
    const bgColor = useMemo(
        () => randomColor(0.08),
        []
    );
    let thisGood = goods[goodId];
    return <div className={'cardContainer'} style={{backgroundColor: bgColor}}>
        <div className="imgCardContainer" onClick={() => {
            navigate('../productView', { replace: false });
            handlerOutGood(goodId);
        }}>
            <img alt={'#'} src={thisGood.image}/>
        </div>
        <div className="goodLabels">
            <h4>{thisGood.name}</h4>
            <p>{thisGood.shortDescription}</p>
            <span>by {thisGood.user}</span>
        </div>
        <div className='cardButtons'>
            {!isSeller ? <>
                <div className="imageCard" onClick={()=> {
                    if (profile) {
                        navigate('../мyShopAdd', { replace: false });
                    }
                    else {
                        navigate('../goodsInSell', { replace: false });
                    }
                }}>
                    <img alt={'#'} src={imagePen}/>
                </div>
                <div className="imageCard" onClick={()=> {
                    if (!profile) {
                        handlerDeleteGoodInSell(goodId);
                    }
                    else {
                        handlerDeleteGoodInProfile(goodId);
                    }
                }}>
                    <img alt={'#'} src={imageDelete}/>
                </div>
            </> : <div className="imageCard" onClick={() => {

            }}>+</div>}
        </div>
    </div>
}