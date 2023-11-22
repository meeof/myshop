import styled from "styled-components";

let Container = styled.div`
  @media (max-width: 430px) {
    padding-bottom: 70px;
  };
  @media (min-width: 430px) {
    padding-left: 60px;
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
    width: 28px;
    height: 28px;
    border: solid #CC992E 3px;
    border-radius: 5px;
    cursor: pointer;
  }
  .mainBarButtonLabel {
    color: #0000FF;
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
  .mainBarButtonLabel {
    margin-top: 5px;
  }
  @media (max-width: 430px) {
    bottom: 0;
    width: 100%;
    border-top: solid black 1px;
    justify-content: space-evenly;
    height: 50px;
    padding-bottom: 10px;
    padding-top: 10px;
  };
  @media (min-width: 430px) {
    left: 0;
    flex-direction: column;
    padding-left: 10px;
    > * {
      margin: 10px 0;
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