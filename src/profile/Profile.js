import MenuContainer from "../MenuContainer";
import './profile.css';
import imageChevron from '../images/chevron.svg'
import ProfileCard from "./ProfileCard";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Profile({handlerActiveMenu, activeButton, logged, userBase}) {
    const navigate = useNavigate();
    useEffect(() => {
        !logged && navigate('/', { replace: false });
        handlerActiveMenu('profile');
    }, []);
    return <> {!logged ? <></> : <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
        <ProfileCard email={logged} phone={userBase[logged].phone} image={userBase[logged].profileImage} isShop={false}/>
        <div className="profileLinks">
            <div className="profLink" onClick={() => {navigate('../myShop', { replace: false })}}>
                <a href="#" onClick={(e) => {e.preventDefault()}}>Мой магазин</a>
                <img alt={'#'} src={imageChevron}/>
            </div>
            <div className="profLink" onClick={() => {navigate('../history', { replace: false })}}>
                <a href="#" onClick={(e) => {e.preventDefault()}}>История покупок</a>
                <img alt={'#'} src={imageChevron}/>
            </div>
            <div className="profLink">
                <a href="#" onClick={(e) => {e.preventDefault()}}>Настройки</a>
                <img alt={'#'} src={imageChevron}/>
            </div>
        </div>
    </MenuContainer>}
    </>
}