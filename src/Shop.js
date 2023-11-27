import {useState} from "react";
import Login from "./loginRegister/Login";
import RestorePassword from "./loginRegister/RestorePassword";
import RegisterUser from "./loginRegister/RegisterUser";
import Main from "./Main";
import Basket from "./basket/Basket";
import {useImmer} from "use-immer";
import NewPassword from "./loginRegister/NewPassword";
import ProductView from "./product/ProductView";
import Favorites from "./favorites/Favorites";
import AddGood from "./basket/AddGood";
import AddBuyer from "./basket/AddBuyer";
import Sells from "./sells/Sells";
import ViewSell from "./sells/ViewSell";
import Profile from "./profile/Profile";
import MyShop from "./profile/MyShop";
import MyShopAdd from "./profile/MyShopAdd";
import GoodsInSell from "./sells/GoodsInSell";
import History from "./profile/History";
import CreateSell from "./profile/CreateSell";
import CreateGood from "./profile/CreateGood";
import SellMain from "./sells/SellMain";
import SellsInUser from "./sells/SellsInUser";
import {BrowserRouter, Route, Routes} from "react-router-dom";


export default function Shop() {
    let prevUserBase = {
        'meeof@yandex.ru' : {
            password : '1234',
            name : 'Alexey',
            surname : 'Smirnov',
            phone : '89777777777',
            favorites: ['good1',],
            profileImage: 'https://img.freepik.com/free-photo/beautiful-cat-portrait-close-up_23-2149152053.jpg?w=360&t=st=1700305119~exp=1700305719~hmac=0c9e301450b45785f657ee2248281b8701533cd43903586c91c96400ab849b41',
            description: 'Краткое описание. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.',
            shopName : 'ShopName',
            shopDescription : 'Описание магазина ...',
            historyBuys : ['good2', 'good5'],
            historySells : ['good1', 'good4'],
            myGoods : ['good1', 'good4'],
            mySells : ['sell1', 'sell2'],
            basketBuyers : {
                buyer1 : {
                    name : 'Миша',
                    goods : [{id:'good1', amount: '150 шт', num: 150 }, {id:'good2', amount: '1 шт', num: 2 },],
                },
                buyer2 : {
                    name : 'Петя',
                    goods : [{id:'good4', amount: '1 кг', num: 0 }, {id:'good5', amount: '1,5 кг', num: 0 },],
                },
            },
            basketBuys: {
                myBuy1 : {
                    goods : [
                        {key : 'good1',
                        amount : 20},
                        {key: 'good2',
                        amount: 15},
                    ],
                    date : '06.11.2023',
                },
            },
            basketGoods: {
                myGood1 : {
                    good : 'Джинсы Lewis 501',
                    date : '25.02.2024',
                    number : 800,
                    sellers : [
                        {name: 'Миша',
                        preCost: 100,
                        amount: 150,
                        cost: 150,},
                        {name: '@karambov',
                            preCost: 20,
                            amount: 80,
                            cost: 400,},
                        {name: '@popov',
                            preCost: 0,
                            amount: 0,
                            cost: 250,},
                    ]
                },
                myGood2 : {
                    good : 'Crocs Bayaband без ремня',
                    date : '13.05.2021',
                    number : 325,
                    sellers : [
                        {name: '@popov',
                            preCost: 100,
                            amount: 0,
                            cost: 275,},
                        {name: '@chupakab',
                            preCost: 20,
                            amount: 90,
                            cost: 300,},
                    ]
                },
            },
        },
        'IVAN@yandex.ru' : {
            password : '1234',
            name : 'Alexey',
            surname : 'Smirnov',
            phone : '89777777777',
            favorites: ['good1',],
            profileImage: 'https://img.freepik.com/free-photo/beautiful-cat-portrait-close-up_23-2149152053.jpg?w=360&t=st=1700305119~exp=1700305719~hmac=0c9e301450b45785f657ee2248281b8701533cd43903586c91c96400ab849b41',
            description: 'Краткое описание. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.',
            shopName : 'ShopName',
            shopDescription : 'Описание магазина ...',
            historyBuys : ['good2', 'good5'],
            historySells : ['good1', 'good4'],
            myGoods : ['good1', 'good4'],
            mySells : ['sell1', 'sell2'],
            basketBuyers : {
                buyer1 : {
                    name : 'Миша',
                    goods : [{id:'good1', amount: '150 шт', num: 150 }, {id:'good2', amount: '1 шт', num: 2 },],
                },
                buyer2 : {
                    name : 'Петя',
                    goods : [{id:'good4', amount: '1 кг', num: 0 }, {id:'good5', amount: '1,5 кг', num: 0 },],
                },
            },
            basketBuys: {
                myBuy1 : {
                    goods : [
                        {key : 'good1',
                            amount : 20},
                        {key: 'good2',
                            amount: 15},
                    ],
                    date : '06.11.2023',
                },
            },
            basketGoods: {
                myGood1 : {
                    good : 'Джинсы Lewis 501',
                    date : '25.02.2024',
                    number : 800,
                    sellers : [
                        {name: 'Миша',
                            preCost: 100,
                            amount: 150,
                            cost: 150,},
                        {name: '@karambov',
                            preCost: 20,
                            amount: 80,
                            cost: 400,},
                        {name: '@popov',
                            preCost: 0,
                            amount: 0,
                            cost: 250,},
                    ]
                },
                myGood2 : {
                    good : 'Crocs Bayaband без ремня',
                    date : '13.05.2021',
                    number : 325,
                    sellers : [
                        {name: '@popov',
                            preCost: 100,
                            amount: 0,
                            cost: 275,},
                        {name: '@chupakab',
                            preCost: 20,
                            amount: 90,
                            cost: 300,},
                    ]
                }
            },
        },
    }
    let prevGoods = {
        good1 : {
            name: 'Товар-1',
            cost: '100',
            preCost: 'предоплата 100% до 01.01.2023',
            delivery: '02.01.2023 13:00, ТЦ Орион строка 2',
            shortDescription: 'Краткое описание',
            description: 'Краткое описание. Мы любим животных и стараемся поддерживать тех из них, кому',
            image: 'https://img.freepik.com/free-photo/set-of-whole-and-cut-fresh-grapefruit-and-slices-isolated-on-white-surface_24972-1117.jpg?w=740&t=st=1700300301~exp=1700300901~hmac=7eddb795e7cb278f6a123c5f34e924aa47a2857f65ea4aa614f7293df1127435',
            images: [
                'https://img.freepik.com/premium-photo/orange-crop-isolated_90839-212.jpg?w=740',
                'https://img.freepik.com/free-photo/top-view-of-orange-with-leaves-concept_23-2148501437.jpg?w=740&t=st=1700321236~exp=1700321836~hmac=3a78b8ba9c6bd79d755274050218af7be1fa5e8dcd13cd5da1a6808e7594f03c',
            ],
            user: '@user777',
            comments : [
                {user : '@User123',
                    text: 'Что это такое? Зачем оно нужно?',
                    img: '',},
                {user : '@User234',
                    text: 'Выглядит классно, хочу такое домой.',
                    img: '',},
                {user : '@User345',
                    text: 'Почему я не могу добавить его в карзину?',
                    img: '#',},
            ],
            reviews : [
                {user : '@User123',
                    text: 'Всё понравилось, буду заказывать ещё.',
                    img: '',},
                {user : '@User234',
                    text: 'Мне не понравилось, больше заказывать не буду.',
                    img: '',},
                {user : '@User345',
                    text: 'Я ожидал увидеть другое ...',
                    img: '#',},
            ],
        },
        good2 : {
            name: 'Товар-1',
            cost: '100',
            preCost: 'предоплата 40% до 01.01.2023',
            delivery: '02.01.2023 13:00, ТЦ Орион строка 2',
            shortDescription: 'Краткое описание',
            description: 'Краткое описание. Мы любим животных и стараемся поддерживать тех из них, кому',
            image: 'https://img.freepik.com/free-photo/fruit-texture-concept-composition_52683-101074.jpg?w=740&t=st=1700300267~exp=1700300867~hmac=11a91b57849a23073333d42cdace5656c2e0f57a8da23c6df997194cf0cc9d0b',
            images: [],
            user: '@user777',
            comments : [
                {user : '@User123',
                    text: 'Что это такое? Зачем оно нужно?',
                    img: '',},
                {user : '@User234',
                    text: 'Выглядит классно, хочу такое домой.',
                    img: '',},
                {user : '@User345',
                    text: 'Почему я не могу добавить его в карзину?',
                    img: '#',},
            ],
            reviews : [],
        },
        good3 : {
            name: 'Товар-1',
            cost: '100',
            preCost: 'предоплата 100% до 01.01.2023',
            delivery: '02.01.2023 13:00, ТЦ Орион строка 2',
            shortDescription: 'Краткое описание',
            description: 'Краткое описание. Мы любим животных и стараемся поддерживать тех из них, кому',
            image: 'https://img.freepik.com/premium-photo/three-blueberry-berries-with-leaves-isolated-on-white-ripe-blueberry-clipping-path_299651-441.jpg?w=740',
            images: [],
            user: '@user777',
            comments : [],
            reviews : [
                {user : '@User123',
                    text: 'Всё понравилось, буду заказывать ещё.',
                    img: '',},
                {user : '@User234',
                    text: 'Мне не понравилось, больше заказывать не буду.',
                    img: '',},
                {user : '@User345',
                    text: 'Я ожидал увидеть другое ...',
                    img: '#',},
            ],
        },
        good4 : {
            name: 'Клубника',
            cost: '200',
            preCost: 'предоплата 100% до 01.01.2023',
            delivery: '02.01.2023 13:00, ТЦ Орион строка 2',
            shortDescription: 'Краткое описание',
            description: 'Краткое описание. Мы любим животных и стараемся поддерживать тех из них, кому',
            image: 'https://img.freepik.com/premium-photo/fresh-ripe-strawberry_693588-890.jpg?w=740',
            images: [],
            user: '@user777',
            comments : [],
            reviews : [
                {user : '@User123',
                    text: 'Всё понравилось, буду заказывать ещё.',
                    img: '',},
                {user : '@User234',
                    text: 'Мне не понравилось, больше заказывать не буду.',
                    img: '',},
                {user : '@User345',
                    text: 'Я ожидал увидеть другое ...',
                    img: '#',},
            ],
        },
        good5 : {
            name: 'Малина',
            cost: '300',
            preCost: 'предоплата 40% до 01.01.2023',
            delivery: '02.01.2023 13:00, ТЦ Орион строка 2',
            shortDescription: 'Краткое описание',
            description: 'Краткое описание. Мы любим животных и стараемся поддерживать тех из них, кому',
            image: 'https://img.freepik.com/premium-photo/sweet-raspberries-with-leaves-isolated-on-white-background_183352-2735.jpg?w=900',
            images: [],
            user: '@user777',
            comments : [],
            reviews : [
                {user : '@User123',
                    text: 'Всё понравилось, буду заказывать ещё.',
                    img: '',},
                {user : '@User234',
                    text: 'Мне не понравилось, больше заказывать не буду.',
                    img: '',},
                {user : '@User345',
                    text: 'Я ожидал увидеть другое ...',
                    img: '#',},
            ],
        },
        good6 : {
            name: 'sdhsdhsd',
            cost: '300',
            preCost: 'предоплата 40% до 01.01.2023',
            delivery: '02.01.2023 13:00, ТЦ Орион строка 2',
            shortDescription: 'Краткое описание',
            description: 'Краткое описание. Мы любим животных и стараемся поддерживать тех из них, кому',
            image: '#',
            images: [],
            user: '@user777',
            comments : [],
            reviews : [
                {user : '@User123',
                    text: 'Всё понравилось, буду заказывать ещё.',
                    img: '',},
                {user : '@User234',
                    text: 'Мне не понравилось, больше заказывать не буду.',
                    img: '',},
                {user : '@User345',
                    text: 'Я ожидал увидеть другое ...',
                    img: '#',},
            ],
        },
    };
    let prevSells = {
        sell1 : {
            name : 'Продажа 123',
            user : 'meeof@yandex.ru',
            date : '27.07.2023',
            time : '11.11.11',
            place : 'г. Калуга, Суворова 111, ТЦ Орион',
            preCost : 'Предоплата: 100% до 25.07.2023',
            description : 'Полное описание. Мы любим животных и стараемся поддерживать тех из них, кому нужна помощь.',
            goods : ['good1', 'good2', 'good4', 'good5'],
        },
        sell2 : {
            name : 'Продажа 123',
            user : 'meeof@yandex.ru',
            date : '27.07.2023',
            time : '11.11.11',
            place : 'г. Калуга, Суворова 111, ТЦ Орион',
            preCost : 'Предоплата: 100% до 25.07.2023',
            description : 'Полное описание. Мы любим животных и стараемся поддерживать тех из них, кому нужна помощь.',
            goods : ['good1', 'good2', 'good4', 'good5'],
        },
        sell3 : {
            name : 'Продажа МАЛИНЫ',
            user : 'meeof@yandex.ru',
            date : '27.07.2023',
            time : '11.11.11',
            place : 'г. Калуга, Суворова 111, ТЦ Орион',
            preCost : 'Предоплата: 100% до 25.07.2023',
            description : 'Полное описание. Мы любим животных и стараемся поддерживать тех из них, кому нужна помощь.',
            goods : ['good1', 'good2', 'good4', 'good5'],
        },
    }

    let [sells, setSells] = useImmer(prevSells);
    let [userBase, setUserBase] = useImmer(prevUserBase);
    let [activeButton, setActiveButton] = useState('catalog');
    let [emailChange, setEmailChange] = useState('');
    let [goods, setGoods] = useImmer(prevGoods);
    let [addSellOut, setAddSellOut] = useState(false);
    let [findText, setFindText] = useState('');

    let [outGoodKey, setOutGoodKey] = useState('');
    let [outSellKey, setOutSellKey] = useState('');
    let [outUserKey, setOutUserKey] = useState('');
    let [logged, setLogged] = useState('');
    localStorageGet();
    function localStorageGet() {
        let loggedGet = localStorage.getItem('logged');
        let outGoodKeyGet = localStorage.getItem('outGoodKey');
        let outSellKeyGet = localStorage.getItem('outSellKey');
        let outUserKeyGet = localStorage.getItem('outUserKey');
        switch ('') {
            case logged : {
                loggedGet && setLogged(loggedGet);
                break
            }
            case outGoodKey : {
                outGoodKeyGet && setOutGoodKey(outGoodKeyGet);
                break
            }
            case outSellKey : {
                outSellKeyGet && setOutSellKey(outSellKeyGet);
                break
            }
            case outUserKey : {
                outUserKeyGet && setOutUserKey(outUserKeyGet);
                break
            }
        }
    }
    function handlerFind(findValue) {
        setFindText(findValue);
    }
    function handlerCreateGood(goodParams) {
        let goodsQuantity = Object.keys(goods);
        let goodName = `sell${goodsQuantity.length + 1}`;
        let newGood = Object.assign(goodParams);
        [newGood.images, newGood.comments, newGood.reviews, newGood.image, newGood.user,] = [[], [], [], '#', logged];
        newGood.shortDescription = goodParams.description.slice(0, 30) + '...';
        setGoods((draft) => {
            draft[goodName] = newGood;
        });
        setUserBase((draft) => {
            draft[logged].myGoods.push(goodName);
        });
        setActiveButton('profile');
    }
    function handlerCreateSell(sellParams) {
        let newSell = sellParams;
        newSell.user = logged;
        let sellsQuantity = Object.keys(sells);
        let sellName = `sell${sellsQuantity.length + 1}`;
        setSells((draft) => {
            draft[sellName] = newSell;
        });
        setUserBase((draft) => {
            draft[logged].mySells.push(sellName);
        });
        setActiveButton('profile');
    }
    function handlerAddSellToProfile(id) {
        setUserBase((draft) => {
            draft[logged].mySells.push(id);
        })
    }
    function handlerAddGoodToProfile(goodId) {
        setUserBase((draft) => {
            draft[logged].myGoods.push(goodId);
        })
    }
    function handlerAddToSell(goodId) {
        setSells((draft) => {
            draft[outSellKey].goods.push(goodId);
        })
    }
    function handlerOutAddSellOrAddGood(boolean) {
        setAddSellOut(boolean);
    }
    function handlerDeleteSellInProfile(id) {
        let index = userBase[logged].mySells.indexOf(id);
        if (index !== -1) {
            setUserBase((draft)=> {
                draft[logged].mySells = [...draft[logged].mySells.slice(0, index),
                    ...draft[logged].mySells.slice(index + 1)];
            })
        }
    }
    function handlerDeleteGoodInProfile(id) {
        let index = userBase[logged].myGoods.indexOf(id);
        if (index !== -1) {
            setUserBase((draft)=> {
                draft[logged].myGoods = [...draft[logged].myGoods.slice(0, index),
                    ...draft[logged].myGoods.slice(index + 1)];
            })
        }
    }
    function handlerDeleteGoodInSell(id) {
        let index = sells[outSellKey].goods.indexOf(id);
        if (index !== -1) {
            setSells((draft)=> {
                draft[outSellKey].goods = [...draft[outSellKey].goods.slice(0, index),
                    ...draft[outSellKey].goods.slice(index + 1)];
            })
        }
    }
    function handlerOutSell(key) {
        setOutSellKey(key);
        localStorage.setItem('outSellKey', key);
    }
    function handlerOutUserKey(key) {
        setOutUserKey(key);
        localStorage.setItem('outUserKey', key);
    }
    function handlerDeleteSell(sellId) {
        setSells((draft) => {
            delete draft[sellId];
        })
    }
    function handlerAddMyBuy(goodId, amount) {
        let date = new Date();
        let len = Object.keys(userBase[logged].basketBuys);
        setUserBase((draft) => {
            draft[logged].basketBuys[`${len + 1}`] = {
                goods : [
                    {key : goodId,
                        amount : amount},
                ],
                date : `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`,
            }
        })
    }
    function handlerFromFavorites(id) {
        let index = userBase[logged].favorites.indexOf(id);
        if (index >= 0) {
            setUserBase((draft) => {
                draft[logged].favorites = [...draft[logged].favorites.slice(0, index),
                    ...draft[logged].favorites.slice(index+1)];
            });
        }
    }
    function handlerToFavorites(id) {
        if (!userBase[logged].favorites.includes(id)) {
            setUserBase((draft) => {
                draft[logged].favorites.push(id);
            });
        }
    }
    function handlerEnterUser(userEmail) {
        setLogged(userEmail);
        localStorage.setItem('logged', userEmail);
    }
    function handlerAddComRev (comRev, areaText) {
        let newComRev = {
            user: logged,
            text: areaText,
            img: '',
        }
        setGoods((draft) => {
            draft[outGoodKey][comRev].push(newComRev)
        });
    }
    function handlerOutGood(key) {
        setOutGoodKey(key);
        localStorage.setItem('outGoodKey', key);
    }
    function handlerNewPassword(password) {
        setUserBase((draft) => {
            draft[emailChange].password = password;
        });
    }
    function handlerRestore(email) {
        if (!userBase[email]) {
            alert('Пользователь не зарегистрирован');
            return false;
        }
        else {
            setEmailChange(email);
            return true;
        }
    }
    function handlerRegister(newUser) {
        if (userBase[newUser.email]) {
            alert('Пользователь уже зарегистрирован');
            return false;
        }
        else if (newUser.password !== newUser.repeat) {
            alert('Повторите пароль');
            return false;
        }
        else {
            setUserBase((draft) => {
                draft[newUser.email] = {
                    password : newUser.password,
                    name : newUser.name,
                    surname : newUser.surname,
                    phone : newUser.phone,
                    basketGoods : {},
                    basketBuys: {},
                    basketBuyers: {},
                    favorites: [],
                    profileImage: '#',
                    description: 'description...',
                    shopName : 'ShopName',
                    shopDescription : 'Описание магазина ...',
                    historyBuys : [],
                    historySells : [],
                    myGoods : [],
                    mySells : [],
                }
            });
        }
        return true;
    }
    function handlerActiveMenu (buttonKey) {
        setActiveButton(buttonKey);
    }
    return  <BrowserRouter>
            <Routes>
            <Route path={'/'} element={<Login userBase={userBase} handlerEnterUser={handlerEnterUser}/>}/>
            <Route path={"/favorites"} element={<Favorites activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                            userBase={userBase} logged={logged} goods={goods} handlerOutGood={handlerOutGood}
                            handlerFromFavorites={handlerFromFavorites} handlerAddMyBuy={handlerAddMyBuy} sells={sells}
                            handlerOutSell={handlerOutSell}/>} />
            <Route path={"basket"} element=
                {<Basket activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} findText={findText}
                         userBase={userBase} goods={goods} logged={logged} handlerFind={handlerFind}/>} />
            <Route path={'catalog'} element=
                {<Main activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                       goods={goods} handlerOutGood={handlerOutGood} handlerToFavorites={handlerToFavorites}
                       handlerAddMyBuy={handlerAddMyBuy} sells={sells} handlerOutSell={handlerOutSell} logged={logged}
                       userBase={userBase} handlerOutUserKey={handlerOutUserKey} handlerFind={handlerFind} findText={findText}/>}/>
            <Route path={'registerUser'} element={<RegisterUser handlerRegister={handlerRegister}/>}/>
            <Route path={'restorePassword'} element={<RestorePassword handlerRestore={handlerRestore}/>}/>
            <Route path={'newPassword'} element={<NewPassword handlerNewPassword={handlerNewPassword}/>}/>
            <Route path={'productView'} element=
                {<ProductView activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} logged={logged}
                              outGoodKey={outGoodKey} goods={goods} handlerAddComRev={handlerAddComRev} handlerAddMyBuy={handlerAddMyBuy}
                              handlerToFavorites={handlerToFavorites}/>}/>
            <Route path={'addGood'} element= //?
                {<AddGood activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                          goods={goods} handlerOutGood={handlerOutGood} logged={logged}/>}/>
            <Route path={'addBuyer'} element=
                {<AddBuyer activeButton={activeButton} handlerActiveMenu={handlerActiveMenu} userBase={userBase} logged={logged}/>}/>
            <Route path={'sells'} element=
                {<Sells activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                        sells={sells} goods={goods} handlerDeleteSell={handlerDeleteSell} handlerOutSell={handlerOutSell}
                        handlerOutGood={handlerOutGood} logged={logged}/>}/>
            <Route path={'viewSells'} element=
                {<ViewSell activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                           sells={sells} goods={goods} outSellKey={outSellKey} handlerDeleteGoodInSell={handlerDeleteGoodInSell}
                           handlerOutGood={handlerOutGood} logged={logged}/>}/>
            <Route path={'profile'} element=
                {<Profile activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                          goods={goods} sells={sells} logged={logged} userBase={userBase}/>}/>
            <Route path={'myShop'} element=
                {<MyShop activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                         goods={goods} sells={sells} logged={logged} userBase={userBase} handlerDeleteSell={handlerDeleteSell}
                         handlerOutSell={handlerOutSell} handlerOutGood={handlerOutGood}
                         handlerDeleteSellInProfile={handlerDeleteSellInProfile} handlerDeleteGoodInProfile={handlerDeleteGoodInProfile}
                         handlerOutAddSellOrAddGood={handlerOutAddSellOrAddGood}/>}/>
            <Route path={'мyShopAdd'} element=
                {<MyShopAdd addSellOut={addSellOut} activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                            userBase={userBase} logged={logged} goods={goods} handlerOutGood={handlerOutGood} handlerAddGoodToProfile={handlerAddGoodToProfile}
                            sells={sells} handlerDeleteSellInProfile={handlerDeleteSellInProfile} handlerOutSell={handlerOutSell}
                            handlerAddSellToProfile={handlerAddSellToProfile}/>}/>
            <Route path={'goodsInSell'} element=
                {<GoodsInSell activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                              sells={sells} goods={goods} outSellKey={outSellKey} handlerAddToSell={handlerAddToSell}
                              handlerOutGood={handlerOutGood} logged={logged}/>}/>
            <Route path={'history'} element=
                {<History activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                          userBase={userBase} goods={goods} sells={sells} logged={logged} handlerOutGood={handlerOutGood}
                          handlerToFavorites={handlerToFavorites} handlerAddMyBuy={handlerAddMyBuy}/>}/>
            <Route path={'createSell'} element=
                {<CreateSell activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                             handlerCreateSell={handlerCreateSell} logged={logged}/>}/>
            <Route path={'createGood'} element=
                {<CreateGood activeButton={activeButton} handlerActiveMenu={handlerActiveMenu}
                             handlerCreateGood={handlerCreateGood} logged={logged}/>}/>
            <Route path={'viewSellMain'} element=
                {<SellMain sells={sells} goods={goods} handlerOutGood={handlerOutGood} handlerToFavorites={handlerToFavorites}
                           handlerAddMyBuy={handlerAddMyBuy} handlerActiveMenu={handlerActiveMenu} activeButton={activeButton}
                           outSellKey={outSellKey} logged={logged}/>}/>
            <Route path={'sellInUser'} element=
                {<SellsInUser outUserKey={outUserKey} userBase={userBase} activeButton={activeButton} logged={logged}
                              handlerActiveMenu={handlerActiveMenu} sells={sells} goods={goods} handlerOutSell={handlerOutSell}
                              handlerOutGood={handlerOutGood} handlerToFavorites={handlerToFavorites}/>}/>
            </Routes>
            </BrowserRouter>
}