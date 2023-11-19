import imagePen from  '../images/pen.svg';
import imageDelete from '../images/delete.svg';
export default function GoodInSellCard({handlerOutGood, goodId, goods, isSeller, handlerDeleteGoodInSell, handlerGo,
                                           handlerDeleteGoodInProfile, profile}) {
    let thisGood = goods[goodId];
    return <div className={'cardContainer'}>
        <div className="imgCardContainer" onClick={(e) => {
            handlerGo(e, 'productView');
            handlerOutGood(goodId);
        }}>
            <img src={thisGood.image}/>
        </div>
        <div className="goodLabels">
            <h4>{thisGood.name}</h4>
            <p>{thisGood.shortDescription}</p>
            <span>by {thisGood.user}</span>
        </div>
        <div className='cardButtons'>
            {!isSeller ? <>
                <div className="imageCard" onClick={(e)=> {
                    if (profile) {
                        handlerGo(e, 'мyShopAdd');
                    }
                    else {
                        handlerGo(e, 'goodsInSell');
                    }
                }}>
                    <img src={imagePen}/>
                </div>
                <div className="imageCard" onClick={()=> {
                    if (!profile) {
                        handlerDeleteGoodInSell(goodId);
                    }
                    else {
                        handlerDeleteGoodInProfile(goodId);
                    }
                }}>
                    <img src={imageDelete}/>
                </div>
            </> : <div className="imageCard" onClick={(e) => {

            }}>+</div>}
        </div>
    </div>
}