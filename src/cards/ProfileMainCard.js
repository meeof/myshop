import imageLines from '../images/lines.svg'
import {randomColor} from "../App";
import {useMemo} from "react";
import {useNavigate} from "react-router-dom";
export default function ProfileMainCard({name, description, userSells, sells, handlerOutSell, handlerOutUserKey}) {
    const navigate = useNavigate();
    const bgColor = useMemo(
        () => randomColor(0.08),
        []
    );
    let buttons = [];
    for (let key of userSells) {
        if(!sells[key]) {
            continue;
        }
        buttons.push(<div className="profileSellButton" key={key} onClick={() => {
            handlerOutSell(key);
            navigate('../viewSellMain', { replace: false });
        }}>
            <img alt={'#'} src={imageLines}/>
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
            <div className="profileSellButton" onClick={() => {
                handlerOutUserKey(name);
                navigate('../sellInUser', { replace: false });
            }}>
                <img alt={'#'} src={imageLines}/>
                <span>Ещё...</span>
            </div>
        </div>
    </div>
}