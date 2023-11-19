import MenuContainer from "../MenuContainer";
import './profile.css';
import imagePen from "../images/pen.svg";
import imageChevron from '../images/chevron.svg'
import ProfileCard from "./ProfileCard";

export default function Profile({handlerGo, handlerActiveMenu, activeButton, sells, goods, logged, userBase}) {
    return <>
        <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
            <ProfileCard email={logged} phone={userBase[logged].phone} image={userBase[logged].profileImage} isShop={false}/>
            <div className="profileLinks">
                <div className="profLink" onClick={(e) => {handlerGo(e, 'myShop')}}>
                    <a href="#" onClick={(e) => {e.preventDefault()}}>Мой магазин</a>
                    <img src={imageChevron}/>
                </div>
                <div className="profLink" onClick={(e) => {handlerGo(e, 'history')}}>
                    <a href="#" onClick={(e) => {e.preventDefault()}}>История покупок</a>
                    <img src={imageChevron}/>
                </div>
                <div className="profLink">
                    <a href="#" onClick={(e) => {e.preventDefault()}}>Настройки</a>
                    <img src={imageChevron}/>
                </div>
            </div>
        </MenuContainer>
    </>
}