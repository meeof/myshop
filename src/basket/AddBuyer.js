import MenuContainer from "../MenuContainer";
import Find from "../Find";
import AddUserCard from "../cards/AddUserCard";

export default function AddBuyer({activeButton, handlerActiveMenu, userBase}) {
    handlerActiveMenu('basket');
    let outCards = [];
    for (let user in userBase) {
        outCards.push(<AddUserCard key={user} name={user} description={userBase[user].description}/>)
    }
    return <MenuContainer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}>
        <Find/>
        <div className={'cardPlace'}>
            {outCards}
        </div>
    </MenuContainer>
}