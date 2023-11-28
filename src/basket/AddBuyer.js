import MenuContainer from "../MenuContainer";
import Find from "../Find";
import AddUserCard from "../cards/AddUserCard";
import {useEffect} from "react";
import {findMatch} from "../App";

export default function AddBuyer({activeButton, handlerActiveMenu, userBase, logged, findText, handlerFind}) {
    useEffect(() => {
        handlerFind('');
        handlerActiveMenu('basket');
    }, []);
    let outCards = [];
    for (let user in userBase) {
        if (findMatch(findText, user + userBase[user].description)) {
            outCards.push(<AddUserCard key={user} name={user} description={userBase[user].description}/>)
        }
    }
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
        <Find findText={findText} handlerFind={handlerFind}/>
        <div className={'cardPlace'}>
            {outCards}
        </div>
    </MenuContainer>
}