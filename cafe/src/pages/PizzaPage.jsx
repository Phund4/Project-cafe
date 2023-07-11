import "../sass/pizzapage/main.sass";
import BearPizzapage from "../img/Bear-pizzapage.svg";
import Pizza from "../img/pizza.svg";
import PizzaHover from "../img/pizza-hover.svg";
import Burger from "../img/burger.svg";
import BurgerHover from "../img/burger-hover.svg";
import Beer from "../img/beer.svg";
import BeerHover from "../img/beer-hover.svg";
import Food from '../components/Food/Food';
import {useState, useEffect} from 'react';
import { HashLink as Link } from "react-router-hash-link";
import SidebarBurger from "../components/SidebarBurger/SidebarBurger";
function PizzaPage() {
    const [pizza, setPizza] = useState('[]');
    useEffect(() => {
        getPizza();
    }, []);

    function getPizza() {
        fetch('http://localhost:3000/pizza')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setPizza(data);
            });
    }

    return (
        <>
            <div className="main-pizzapage">
                <SidebarBurger />
                <header className="main-pizzapage-header">
                    <h1 className="main-pizzapage-header__h1-blur">Подкрепление</h1>
                    <h1 className="main-pizzapage-header__h1">МЕНЮ</h1>
                    <img
                        className="main-pizzapage-header__img"
                        src={BearPizzapage}
                        alt="Bear"
                    />
                </header>
                <div className="main-pizzapage-content">
                    <div className="main-pizzapage-content__icons">
                        <div className="pizza-container main-pizzapage-icon-container">
                            <img
                                className="main-pizzapage-icon-container__icon"
                                src={Pizza}
                            ></img>
                            <Link to="/pizzapage/">
                                <img
                                    src={PizzaHover}
                                    className="main-pizzapage-icon-container__icon-hover"
                                ></img>
                            </Link>
                        </div>
                        <div className="burger-container main-pizzapage-icon-container">
                            <img
                                className="main-pizzapage-icon-container__icon"
                                src={Burger}
                            ></img>
                            <Link to="/burgerpage/">
                                <img
                                    className="main-pizzapage-icon-container__icon-hover"
                                    src={BurgerHover}
                                ></img>
                            </Link>
                        </div>
                        <div className="beer-container main-pizzapage-icon-container">
                            <img
                                className="main-pizzapage-icon-container__icon"
                                src={Beer}
                            ></img>
                            <Link to="/beerpage/">
                                <img
                                    className="main-pizzapage-icon-container__icon-hover"
                                    src={BeerHover}
                                ></img>
                            </Link>
                        </div>
                    </div>
                </div>
                <h3 className="main-pizzapage__text-pizza">ПИЦЦА</h3>
                <ul className="main-pizzapage-gallery">
                    {JSON.parse(pizza).map((el, index) =>
                        <Food text={el.name} price={el.price} key={index}/>)}
                </ul>
                <h4 className="main-pizzapage__text-tel">8-958-525-23-45</h4>
                <div className="main-pizzapage__footer"></div>
            </div>
        </>
    );
}

export default PizzaPage;
