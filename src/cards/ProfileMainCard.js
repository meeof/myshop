import imageLines from '../images/lines.svg'
import {randomColor} from "../App";
import {useMemo} from "react";
export default function ProfileMainCard({name, description, userSells, sells, handlerOutSell, handlerGo, handlerOutUserKey}) {
    const bgColor = useMemo(
        () => randomColor(0.08),
        []
    );
    let buttons = [];
    for (let key of userSells) {
        buttons.push(<div className="profileSellButton" key={key} onClick={(e) => {
            handlerOutSell(key);
            handlerGo(e, 'viewSellMain');
        }}>
            <img src={imageLines}/>
            <span>{sells[key].name}</span>
        </div>)
    }
    return <div className={'addUserCard basketCardContainer'} style={{backgroundColor: bgColor}}>
        <div>
            <h3 className="basketCardHeader">{name}</h3>
            <div className={'addUserText'}>{description}</div>
        </div>
        <div className={'cardButtons'}>
            {buttons}
            <div className="profileSellButton" onClick={(e) => {
                handlerOutUserKey(name);
                handlerGo(e, 'sellInUser');
            }}>
                <img src={imageLines}/>
                <span>Ещё...</span>
            </div>
        </div>
    </div>
}