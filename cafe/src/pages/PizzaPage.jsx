import "../sass/pizzapage/main.sass";
import BearPizzapage from "../img/Bear-pizzapage.svg";
import Pizza from "../img/pizza.svg";
import PizzaHover from "../img/pizza-hover.svg";
import Burger from "../img/burger.svg";
import BurgerHover from "../img/burger-hover.svg";
import Beer from "../img/beer.svg";
import BeerHover from "../img/beer-hover.svg";
import Pizza1 from "../img/pizza-1.png";
import Pizza2 from "../img/pizza-2.png";
import Pizza3 from "../img/pizza-3.png";
import Pizza4 from "../img/pizza-4.png";
import Pizza5 from "../img/pizza-5.png";
import Pizza6 from "../img/pizza-6.png";
import Pizza7 from "../img/pizza-7.png";
import { HashLink as Link } from "react-router-hash-link";
import SidebarBurger from '../components/SidebarBurger/SidebarBurger';
function PizzaPage() {
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
                <div className="main-pizzapage-gallery">
                    <div className="main-pizzapage-gallery__item main-pizzapage-gallery__item-1">
                        <img
                            src={Pizza1}
                            alt="4 сезона"
                            className="main-pizzapage-gallery__img"
                        />
                        <h2 className="main-pizzapage-gallery__h2">470</h2>
                    </div>
                    <div className="main-pizzapage-gallery__item main-pizzapage-gallery__item-2">
                        <img
                            src={Pizza2}
                            alt="4 сыра"
                            className="main-pizzapage-gallery__img"
                        />
                        <h2 className="main-pizzapage-gallery__h2">480</h2>
                    </div>
                    <div className="main-pizzapage-gallery__item main-pizzapage-gallery__item-3">
                        <img
                            src={Pizza3}
                            alt="деревенская"
                            className="main-pizzapage-gallery__img"
                        />
                        <h2 className="main-pizzapage-gallery__h2">480</h2>
                    </div>
                    <div className="main-pizzapage-gallery__item main-pizzapage-gallery__item-4">
                        <img
                            src={Pizza4}
                            alt="мясная"
                            className="main-pizzapage-gallery__img"
                        />
                        <h2 className="main-pizzapage-gallery__h2">470</h2>
                    </div>
                    <div className="main-pizzapage-gallery__item main-pizzapage-gallery__item-5">
                        <img
                            src={Pizza5}
                            alt="карбонара"
                            className="main-pizzapage-gallery__img"
                        />
                        <h2 className="main-pizzapage-gallery__h2">450</h2>
                    </div>
                    <div className="main-pizzapage-gallery__item main-pizzapage-gallery__item-6">
                        <img
                            src={Pizza6}
                            alt="пепперони"
                            className="main-pizzapage-gallery__img"
                        />
                        <h2 className="main-pizzapage-gallery__h2">410</h2>
                    </div>
                    <div className="main-pizzapage-gallery__item main-pizzapage-gallery__item-7">
                        <img
                            src={Pizza7}
                            alt="этна"
                            className="main-pizzapage-gallery__img"
                        />
                        <h2 className="main-pizzapage-gallery__h2">470</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PizzaPage;
