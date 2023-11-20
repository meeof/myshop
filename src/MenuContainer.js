import styled from "styled-components";

let Container = styled.div`
  @media (max-width: 430px) {
    padding-bottom: 50px;
  };
  @media (min-width: 430px) {
    padding-left: 50px;
  }
`;
let Menu = styled.div`
  position: fixed;
  display: flex;
  background-color: white;
  z-index: 999;
  > * {
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mainBarButton {
    width: 20px;
    height: 20px;
    border: solid black 2px;
    border-radius: 5px;
    cursor: pointer;
  }
  * {
    font-size: 0.7rem;
  }
  .activeBarButton > .mainBarButton {
    border-color: #0000FF;
    background-color: #B5CCE5;
  }
  .activeBarButton > .mainBarButtonLabel {
    color: #0000FF;
  }
  @media (max-width: 430px) {
    bottom: 0;
    width: 100%;
    border-top: solid black 1px;
    justify-content: space-evenly;
    height: 50px;
  };
  @media (min-width: 430px) {
    left: 0;
    flex-direction: column;
    > * {
      margin: 5px 0;
    }
`;
export default function MenuContainer({children, handlerGo, activeButton, handlerActiveMenu}) {
    return <Container>
        <Menu>
            <div className={activeButton === 'catalog' ? 'activeBarButton' : ''}>
                <div className="mainBarButton"
                     onClick={(e) =>
                     {handlerGo(e, 'catalog'); handlerActiveMenu('catalog')}}></div>
                <div className="mainBarButtonLabel">Каталог</div>
            </div>
            <div className={activeButton === 'basket' ? 'activeBarButton' : ''}>
                <div className="mainBarButton"
                     onClick={(e) =>
                     {handlerGo(e, 'basket'); handlerActiveMenu('basket')}}></div>
                <div className="mainBarButtonLabel">Корзина</div>
            </div>
            <div className={activeButton === 'favorites' ? 'activeBarButton' : ''}>
                <div className="mainBarButton"
                     onClick={(e) =>
                     {handlerGo(e, 'favorites'); handlerActiveMenu('favorites')}}></div>
                <div className="mainBarButtonLabel">Избранное</div>
            </div>
            <div className={activeButton === 'sells' ? 'activeBarButton' : ''}>
                <div className="mainBarButton"
                     onClick={(e) =>
                     {handlerGo(e, 'sells'); handlerActiveMenu('sells')}}></div>
                <div className="mainBarButtonLabel">Продажи</div>
            </div>
            <div className={activeButton === 'profile' ? 'activeBarButton' : ''}>
                <div className="mainBarButton"
                     onClick={(e) =>
                     {handlerGo(e, 'profile'); handlerActiveMenu('profile')}}></div>
                <div className="mainBarButtonLabel">Профиль</div>
            </div>
        </Menu>
        {children}
    </Container>
}