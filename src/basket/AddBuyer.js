import MenuContainer from "../MenuContainer";
import Find from "../Find";
import AddUserCard from "../cards/AddUserCard";
import {useEffect} from "react";

export default function AddBuyer({activeButton, handlerActiveMenu, userBase, logged}) {
    useEffect(() => {
        handlerActiveMenu('basket');
    }, []);
    let outCards = [];
    for (let user in userBase) {
        outCards.push(<AddUserCard key={user} name={user} description={userBase[user].description}/>)
    }
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}>
        <Find/>
        <div className={'cardPlace'}>
            {outCards}
        </div>
    </MenuContainer>
}