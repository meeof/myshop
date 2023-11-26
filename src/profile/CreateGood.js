import MenuContainer from "../MenuContainer";
import {useEffect, useState} from "react";
import Carousel from "../Carousel";
import imageCamera from '../images/cameraBig.svg'
import {useNavigate} from "react-router-dom";

export default function CreateGood({activeButton, handlerActiveMenu, handlerCreateGood, logged}) {
    useEffect(() => {
        handlerActiveMenu('catalog');
    }, []);
    const navigate = useNavigate();
    let [name, setName] = useState('');
    let [cost, setCost] = useState('');
    let [preCost, setPreCost] = useState('');
    let [delivery, setDelivery] = useState('');
    let [description, setDescription] = useState('');
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
        <div className={'createProdContainer'}>
            <Carousel imagesUrlArr={[]} mainImage={'#'}>
                <img alt={'#'} className={'addImageButton'} src={imageCamera}/>
                <div className="closeButton">x</div>
            </Carousel>
        </div>
        <div className="contentContainer">
            <form className="formContainer">
                <input className="shopInteractiveElement" placeholder="Наименование товара" value={name}
                onChange={(e)=> setName(e.target.value)}/>
                    <div className="productCostContainer">
                        <input className="shopInteractiveElement" placeholder="Цена" value={cost}
                               onChange={(e)=> setCost(e.target.value)}/>
                        <span>₽</span>
                        <input className="shopInteractiveElement" placeholder="Предоплата" value={preCost}
                               onChange={(e)=> setPreCost(e.target.value)}/>
                    </div>
                    <input className="shopInteractiveElement" placeholder="Доставка" value={delivery}
                           onChange={(e)=> setDelivery(e.target.value)}/>
                    <textarea className="productDescriptionField" placeholder="Описание" value={description}
                              onChange={(e)=> setDescription(e.target.value)}/>
            </form>
            <input type={"button"} value={'Сохранить'} className={'shopInteractiveElement bottomButton'}
            onClick={() => {
                handlerCreateGood({
                    name,
                    cost,
                    preCost,
                    delivery,
                    description,
                });
                navigate('../myShop', { replace: false });
            }}/>
        </div>
    </MenuContainer>
}