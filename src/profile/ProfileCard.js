import imagePen from "../images/pen.svg";
import './profile.css';

export default function ProfileCard({phone, email, image, isShop, name, description}) {
    let shortName;
    if (!isShop) {
        shortName = email.match(/[a-zA-Z]+(?=@[a-zA-Z]+\.[a-zA-Z]+)/);
    }
    return <div className="profileCard">
        <div className="profilePhoto">
            <img src={image}/>
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
            <div className="imageCard" onClick={(e)=> {}}>
                <img src={imagePen}/>
            </div>
        </div>
    </div>
}