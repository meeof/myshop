import MenuContainer from "../MenuContainer";
import Find from "../Find";
import AddUserCard from "../cards/AddUserCard";

export default function AddBuyer({activeButton, handlerActiveMenu, handlerGo, userBase}) {
    let outCards = [];
    for (let user in userBase) {
        outCards.push(<AddUserCard key={user} name={user} description={userBase[user].description}/>)
    }
    return <MenuContainer handlerGo={handlerGo} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
        <Find/>
        <div className={'cardPlace'}>
            {outCards}
        </div>
    </MenuContainer>
}