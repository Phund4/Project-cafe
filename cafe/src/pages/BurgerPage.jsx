import "../sass/burgerpage/main.sass";
import BearPizzapage from "../img/Bear-pizzapage.svg";
import Pizza from "../img/pizza.svg";
import PizzaHover from "../img/pizza-hover.svg";
import Burger from "../img/burger.svg";
import BurgerHover from "../img/burger-hover.svg";
import Beer from "../img/beer.svg";
import BeerHover from "../img/beer-hover.svg";
import Burger1 from "../img/burger-1.png";
import Burger2 from "../img/burger-2.png";
import Burger3 from "../img/burger-3.png";
import Burger4 from "../img/burger-4.png";
import Burger5 from "../img/burger-5.png";
import Burger6 from "../img/burger-6.png";
import Burger7 from "../img/burger-7.png";
import Burger8 from "../img/burger-8.png";
import { HashLink as Link } from "react-router-hash-link";
import SidebarBurger from '../components/SidebarBurger/SidebarBurger';

function BurgerPage() {
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
                        <div className="burger-container main-burgerpage-icon-container">
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
                <div className="main-burgerpage-gallery">
                    <div className="main-burgerpage-gallery__item main-burgerpage-gallery__item-1">
                        <img
                            src={Burger1}
                            alt="гамбурегер"
                            className="main-burgerpage-gallery__img"
                        />
                        <h2 className="main-burgerpage-gallery__h2">220</h2>
                    </div>
                    <div className="main-burgerpage-gallery__item main-burgerpage-gallery__item-2">
                        <img
                            src={Burger2}
                            alt="чизбургер"
                            className="main-burgerpage-gallery__img"
                        />
                        <h2 className="main-burgerpage-gallery__h2">280</h2>
                    </div>
                    <div className="main-burgerpage-gallery__item main-burgerpage-gallery__item-3">
                        <img
                            src={Burger3}
                            alt="бургер с яйцом и беконом"
                            className="main-burgerpage-gallery__img"
                        />
                        <h2 className="main-burgerpage-gallery__h2">310</h2>
                    </div>
                    <div className="main-burgerpage-gallery__item main-burgerpage-gallery__item-4">
                        <img
                            src={Burger4}
                            alt="бургер со свиной котлетой и беконом"
                            className="main-burgerpage-gallery__img"
                        />
                        <h2 className="main-burgerpage-gallery__h2">280</h2>
                    </div>
                    <div className="main-burgerpage-gallery__item main-burgerpage-gallery__item-5">
                        <img
                            src={Burger5}
                            alt="бургер с курицей"
                            className="main-burgerpage-gallery__img"
                        />
                        <h2 className="main-burgerpage-gallery__h2">260</h2>
                    </div>
                    <div className="main-burgerpage-gallery__item main-burgerpage-gallery__item-6">
                        <img
                            src={Burger6}
                            alt="бургер Ранчо"
                            className="main-burgerpage-gallery__img"
                        />
                        <h2 className="main-burgerpage-gallery__h2">320</h2>
                    </div>
                    <div className="main-burgerpage-gallery__item main-burgerpage-gallery__item-7">
                        <img
                            src={Burger7}
                            alt="бургер BBQ"
                            className="main-burgerpage-gallery__img"
                        />
                        <h2 className="main-burgerpage-gallery__h2">340</h2>
                    </div>
                    <div className="main-burgerpage-gallery__item main-burgerpage-gallery__item-8">
                        <img
                            src={Burger8}
                            alt="бургер двойной"
                            className="main-burgerpage-gallery__img"
                        />
                        <h2 className="main-burgerpage-gallery__h2">410</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BurgerPage;
