import "../sass/beerpage/main.sass";
import BearPizzapage from "../img/Bear-pizzapage.svg";
import Pizza from "../img/pizza.svg";
import PizzaHover from "../img/pizza-hover.svg";
import Burger from "../img/burger.svg";
import BurgerHover from "../img/burger-hover.svg";
import Beer from "../img/beer.svg";
import BeerHover from "../img/beer-hover.svg";

function BeerPage() {
  return (
    <>
      <div className="main-beerpage">
        <sidebar className="main-beerpage-sidebar">
          <a href="/" className="main-beerpage-sidebar__hamburger" />
        </sidebar>
        <header className="main-beerpage-header">
          <h1 className="main-beerpage-header__h1">МЕНЮ</h1>
          <h1 className="main-beerpage-header__h1-blur">Подкрепление</h1>
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
              <a href="/pizzapage/">
                <img
                  src={PizzaHover}
                  className="main-beerpage-icon-container__icon-hover"
                ></img>
              </a>
            </div>
            <div className="beer-container main-beerpage-icon-container">
              <img
                className="main-beerpage-icon-container__icon"
                src={Burger}
              ></img>
              <a href="/burgerpage/">
                <img
                  className="main-beerpage-icon-container__icon-hover"
                  src={BurgerHover}
                ></img>
              </a>
            </div>
            <div className="beer-container main-beerpage-icon-container">
              <img
                className="main-beerpage-icon-container__icon"
                src={Beer}
              ></img>
              <a href="/beerpage/">
                <img
                  className="main-beerpage-icon-container__icon-hover"
                  src={BeerHover}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeerPage;
