import imagePen from "../images/pen.svg";
import './profile.css';
import {useMemo} from "react";
import {randomColor} from "../App";

export default function ProfileCard({phone, email, image, isShop, name, description}) {
    const bgColor = useMemo(
        () => randomColor(0.5),
        []
    );
    let shortName;
    if (!isShop) {
        shortName = email.match(/[a-zA-Z]+(?=@[a-zA-Z]+\.[a-zA-Z]+)/);
    }
    return <div className="profileCard" style={{backgroundColor: bgColor}}>
        <div className="profilePhoto">
            <img alt={'#'} src={image}/>
        </div>
        <div className="profileLabel">
            {!isShop ? <>
                <h3 className="profileName">@{shortName}</h3>
                <p>{email}</p>
                <p>{phone}</p>
            </> : <>
                <h3 className="profileName">{name}</h3>
                <p>{description}</p>
            </>}

        </div>
        <div className='cardButtons'>
            <div className="imageCard" onClick={()=> {}}>
                <img alt={'#'} src={imagePen}/>
            </div>
        </div>
    </div>
}