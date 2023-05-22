import "../sass/beerpage/main.sass";
import BearPizzapage from "../img/Bear-pizzapage.svg";
import Pizza from "../img/pizza.svg";
import PizzaHover from "../img/pizza-hover.svg";
import Burger from "../img/burger.svg";
import BurgerHover from "../img/burger-hover.svg";
import Beer from "../img/beer.svg";
import BeerHover from "../img/beer-hover.svg";
import SidebarBurger from "../components/SidebarBurger/SidebarBurger";
import { HashLink as Link } from "react-router-hash-link";

function BeerPage() {
  return (
    <>
      <div className="main-beerpage">
        <SidebarBurger />
        <header className="main-beerpage-header">
          <h1 className="main-beerpage-header__h1-blur">Подкрепление</h1>
          <h1 className="main-beerpage-header__h1">МЕНЮ</h1>
          <img
            className="main-beerpage-header__img"
            src={BearPizzapage}
            alt="Bear"
          />
        </header>
        <div className="main-beerpage-content">
          <div className="main-beerpage-content__icons">
            <div className="beer-container main-beerpage-icon-container">
              <img
                className="main-beerpage-icon-container__icon"
                src={Pizza}
              ></img>
              <Link to="/pizzapage/">
                <img
                  src={PizzaHover}
                  className="main-beerpage-icon-container__icon-hover"
                ></img>
              </Link>
            </div>
            <div className="beer-container main-beerpage-icon-container">
              <img
                className="main-beerpage-icon-container__icon"
                src={Burger}
              ></img>
              <Link to="/burgerpage/">
                <img
                  className="main-beerpage-icon-container__icon-hover"
                  src={BurgerHover}
                ></img>
              </Link>
            </div>
            <div className="beer-container main-beerpage-icon-container">
              <img
                className="main-beerpage-icon-container__icon"
                src={Beer}
              ></img>
              <Link to="/beerpage/">
                <img
                  className="main-beerpage-icon-container__icon-hover"
                  src={BeerHover}
                ></img>
              </Link>
            </div>
          </div>
        </div>
        <h3 className="main-beerpage__text-pizza">НАПИТКИ</h3>
        <h4 className="main-beerpage__text-tel">8-958-525-23-45</h4>
        <div className="main-beerpage__footer"></div>
      </div>
    </>
  );
}

export default BeerPage;
