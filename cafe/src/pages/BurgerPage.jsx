import "../sass/burgerpage/main.sass";
import BearPizzapage from "../img/Bear-pizzapage.svg";
import Pizza from "../img/pizza.svg";
import PizzaHover from "../img/pizza-hover.svg";
import Burger from "../img/burger.svg";
import BurgerHover from "../img/burger-hover.svg";
import Beer from "../img/beer.svg";
import BeerHover from "../img/beer-hover.svg";
import {useState, useEffect} from 'react';
import { HashLink as Link } from "react-router-hash-link";
import Food from '../components/Food/Food';
import SidebarBurger from "../components/SidebarBurger/SidebarBurger";

function BurgerPage() {
    const [burger, setBurger] = useState([[]]);
    useEffect(() => {
        getBurger();
    }, []);

    function getBurger() {
        fetch('http://127.0.0.1:8000/burger')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                var result = [];
                for (var i in data)
                    result.push([i, data[i]]);
                setBurger(result);
            });
    }
    console.log(burger)
    return (
        <>
            <div className="main-burgerpage">
                <SidebarBurger />
                <header className="main-burgerpage-header">
                    <h1 className="main-burgerpage-header__h1-blur">Подкрепление</h1>
                    <h1 className="main-burgerpage-header__h1">МЕНЮ</h1>
                    <img
                        className="main-burgerpage-header__img"
                        src={BearPizzapage}
                        alt="Bear"
                    />
                </header>
                <div className="main-burgerpage-content">
                    <div className="main-burgerpage-content__icons">
                        <div className="pizza-container main-burgerpage-icon-container">
                            <img
                                className="main-burgerpage-icon-container__icon"
                                src={Pizza}
                            ></img>
                            <Link to="/pizzapage/">
                                <img
                                    src={PizzaHover}
                                    className="main-burgerpage-icon-container__icon-hover"
                                ></img>
                            </Link>
                        </div>
                        <div className="burger-container main-burgerpage-icon-container">
                            <img
                                className="main-burgerpage-icon-container__icon"
                                src={Burger}
                            ></img>
                            <Link to="/burgerpage/">
                                <img
                                    className="main-burgerpage-icon-container__icon-hover"
                                    src={BurgerHover}
                                ></img>
                            </Link>
                        </div>
                        <div className="beer-container main-burgerpage-icon-container">
                            <img
                                className="main-burgerpage-icon-container__icon"
                                src={Beer}
                            ></img>
                            <Link to="/beerpage/">
                                <img
                                    className="main-burgerpage-icon-container__icon-hover"
                                    src={BeerHover}
                                ></img>
                            </Link>
                        </div>
                    </div>
                </div>
                <h3 className="main-burgerpage__text-burger">БУРГЕРЫ</h3>
                <div className="main-burgerpage-gallery">
                    {burger.map((el, index) =>
                        <Food text={el[0]} price={el[1]} key={index}/>)}
                </div>
                <h4 className="main-burgerpage__text-tel">8-958-525-23-45</h4>
                <div className="main-burgerpage__footer"></div>
            </div>
        </>
    );
}

export default BurgerPage;
