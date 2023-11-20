import {randomColor} from "../App";
import {useMemo} from "react";

export default function AddUserCard({name, description}) {
    const bgColor = useMemo(
        () => randomColor(0.08),
        []
    );
    return <div className={'addUserCard basketCardContainer'} style={{backgroundColor: bgColor}}>
        <div>
            <h3 className="basketCardHeader">{name}</h3>
            <div className={'addUserText'}>{description}</div>
        </div>
        <div className={'cardButtons'}>
            <div className="imageCard">+</div>
        </div>
    </div>
}