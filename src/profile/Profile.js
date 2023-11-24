import MenuContainer from "../MenuContainer";
import './profile.css';
import imageChevron from '../images/chevron.svg'
import ProfileCard from "./ProfileCard";
import {useNavigate} from "react-router-dom";

export default function Profile({handlerActiveMenu, activeButton, logged, userBase}) {
    handlerActiveMenu('profile');
    const navigate = useNavigate();
    return <>
        <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
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
        </MenuContainer>
    </>
}