import MenuContainer from "../MenuContainer";
import './profile.css';
import {useState} from "react";

export default function CreateSell({handlerGo, activeButton, handlerActiveMenu, handlerCreateSell}) {
    let [installment, setInstallment] = useState('pre');
    let [proc, setProc] = useState(true);
    let [preCost, setPreCost] = useState('100');
    let [days, setDays] = useState('100');
    let [name, setName] = useState('');
    let [date, setDate] = useState('');
    let [time, setTime] = useState('');
    let [place, setPlace] = useState('');
    function handlerRadio(val) {
        setInstallment(val);
    }
    function handlerSwitch(val) {
        setProc(val);
    }
    return <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
        <div className="contentContainer">
            <h3 className="shopH1">Создание продажи</h3>
            <form className="formContainer">
                <div className="fieldAndLabel">
                    <span>Название</span>
                    <input className="shopInteractiveElement" value={name}
                           onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="sellDateContainer">
                    <div className="fieldAndLabel">
                        <span>Дата</span>
                        <input className="shopInteractiveElement" value={date}
                               onChange={(e)=> setDate(e.target.value)}/>
                    </div>
                    <div className="fieldAndLabel">
                        <span>Время</span>
                        <input className="shopInteractiveElement" value={time}
                               onChange={(e)=> setTime(e.target.value)}/>
                    </div>
                </div>
                <div className="fieldAndLabel">
                    <span>Место</span>
                    <input className="shopInteractiveElement" value={place}
                           onChange={(e)=> setPlace(e.target.value)}/>
                </div>
                <div className="installmentBlock">
                    <span>Оплата:</span>
                    <label><input type="radio" name="sellCreatePay" checked={installment === 'pre'} value={'pre'}
                    onChange={()=> handlerRadio('pre')}/>Предварительно в размере</label>
                    <div className="inputContainer">
                        <input className="shopInteractiveElement" type={"number"} value={preCost} disabled={installment !== 'pre'}
                        onChange={(e) => setPreCost(e.target.value)}/>
                        <div className="headButtons">
                            <input type="button"
                                   className={proc ? "headButton activeHeadButton" : "headButton"}
                                   onClick={() => handlerSwitch(true)} value="%"/>
                            <input type="button"
                                   className={!proc ? "headButton activeHeadButton" : "headButton"}
                                   onClick={() => handlerSwitch(false)} value="Руб"/>
                        </div>
                    </div>
                    <label><input type="radio" name="sellCreatePay" checked={installment === 'rec'} value={'rec'}
                                  onChange={()=> handlerRadio('rec')}/>При получении</label>
                    <label><input type="radio" name="sellCreatePay" checked={installment === 'del'} value={'del'}
                                  onChange={()=> handlerRadio('del')}/>С отсрочкой</label>
                    <div className="inputContainer">
                        <input className="shopInteractiveElement" type={"number"} value={days} disabled={installment !== 'del'}
                        onChange={(e)=> setDays(e.target.value)}/>
                        <span>дней</span>
                    </div>
                </div>
            </form>
            <input type={"button"} value={'Сохранить'} className={'shopInteractiveElement bottomButton'}
                   onClick={(e) =>  {
                       let outPreCost;
                       switch (installment) {
                           case 'pre' : {
                               outPreCost = `Предоплата: ${preCost} ${proc ? "%" : "Руб."}`
                               break;
                           }
                           case 'rec' : {
                               outPreCost = 'Оплата при получении';
                               break;
                           }
                           case 'del' : {
                               outPreCost = `Оплата с отсрочкой ${days} дней`;
                           }
                       }
                       handlerCreateSell({
                           name,
                           date,
                           time,
                           place,
                           description : '',
                           goods : [],
                           preCost : outPreCost,
                       })
                   }}/>
        </div>
    </MenuContainer>
}