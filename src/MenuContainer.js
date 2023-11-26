import styled from "styled-components";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

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
    position: relative;
    width: 27.5px;
    height: 27.5px;
    border-radius: 5px;
    background: #fff;
    text-align: center;
    cursor: pointer;
  }
  .mainBarButton:before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(35deg, rgba(0, 225, 0, 0.5), rgba( 0, 0, 225, 0.5), rgba(0, 225, 0, 0.5));
    border-radius: 5px;
    z-index: -1;
  }
  .mainBarButtonLabel {
    color: #0000FF;
  }
  * {
    font-size: 0.7rem;
  }
  .activeBarButton > .mainBarButton {
    border-image: none;
    border: solid #0000FF 3px;
  }
  .activeBarButton > .mainBarButton:before {
    position: absolute;
    content: none;
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
export default function MenuContainer({children, activeButton, handlerActiveMenu, logged}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!logged) {
            navigate('/', { replace: false })
        }
    }, []);
    return <Container>
        <Menu>
            <div className={activeButton === 'catalog' ? 'activeBarButton' : ''}>
                <div className="mainBarButton"
                     onClick={() =>
                        {handlerActiveMenu('catalog');
                            navigate('../catalog', { replace: false })}}></div>
                <div className="mainBarButtonLabel">Каталог</div>
            </div>
            <div className={activeButton === 'basket' ? 'activeBarButton' : ''}>
                <div className="mainBarButton"
                     onClick={() =>
                     {handlerActiveMenu('basket');
                         navigate('../basket', { replace: false })}}></div>
                <div className="mainBarButtonLabel">Корзина</div>
            </div>
            <div className={activeButton === 'favorites' ? 'activeBarButton' : ''}>
                <div className="mainBarButton"
                     onClick={() =>
                     {handlerActiveMenu('favorites');
                         navigate('../favorites', { replace: false })}}></div>
                <div className="mainBarButtonLabel">Избранное</div>
            </div>
            <div className={activeButton === 'sells' ? 'activeBarButton' : ''}>
                <div className="mainBarButton"
                     onClick={() =>
                     {handlerActiveMenu('sells');
                         navigate('../sells', { replace: false })}}></div>
                <div className="mainBarButtonLabel">Продажи</div>
            </div>
            <div className={activeButton === 'profile' ? 'activeBarButton' : ''}>
                <div className="mainBarButton"
                     onClick={() =>
                     {handlerActiveMenu('profile');
                         navigate('../profile', { replace: false })}}></div>
                <div className="mainBarButtonLabel">Профиль</div>
            </div>
        </Menu>
        {children}
    </Container>
}