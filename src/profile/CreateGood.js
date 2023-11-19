import MenuContainer from "../MenuContainer";
import {useState} from "react";
import Carousel from "../Carousel";
import imageCamera from '../images/cameraBig.svg'

export default function CreateGood({handlerGo, activeButton, handlerActiveMenu, handlerCreateGood}) {
    let [name, setName] = useState('');
    let [cost, setCost] = useState('');
    let [preCost, setPreCost] = useState('');
    let [delivery, setDelivery] = useState('');
    let [description, setDescription] = useState('');
    return <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
        <div className={'createProdContainer'}>
            <Carousel imagesUrlArr={[]} mainImage={'#'}>
                <img className={'addImageButton'} src={imageCamera}/>
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
            }}/>
        </div>
    </MenuContainer>
}