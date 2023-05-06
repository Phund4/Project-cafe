import "../sass/mainpage/main.sass";
import BearMainpage from "../img/Bear-mainpage.svg";
import Pizza from "../img/pizza.svg";
import PizzaHover from "../img/pizza-hover.svg";
import Burger from "../img/burger.svg";
import BurgerHover from "../img/burger-hover.svg";
import Beer from "../img/beer.svg";
import BeerHover from "../img/beer-hover.svg";
import StocksLeftImg from "../img/mainpage-stocks-left.png";
import StocksRightImg from "../img/mainpage-stocks-right.png";

function MainPage() {
  return (
    <>
      <div className="main">
        <div className="mainpage-sidebar">
          <a href="/" className="mainpage-sidebar__hamburger" />
        </div>
        <header className="mainpage-header">
          <h1 className="mainpage-header__h1">Подкрепление</h1>
          <h1 className="mainpage-header__h1-blur">Подкрепление</h1>
          <img className="mainpage-header__img" src={BearMainpage} alt="Bear" />
        </header>
        <div className="mainpage-content">
          <h2 className="mainpage-content__h2 mainpage-content__h2_menu">
            МЕНЮ
          </h2>
          <div className="mainpage-content__icons">
            <div className="pizza-container mainpage-icon-container">
              <img 
                className="mainpage-icon-container__icon" 
                src={Pizza}></img>
              <img
                className="mainpage-icon-container__icon-hover"
                src={PizzaHover}
              ></img>
            </div>
            <div className="burger-container mainpage-icon-container">
              <img 
                className="mainpage-icon-container__icon" 
                src={Burger}></img>
              <img
                className="mainpage-icon-container__icon-hover"
                src={BurgerHover}
              ></img>
            </div>
            <div className="beer-container mainpage-icon-container">
              <img 
                className="mainpage-icon-container__icon" 
                src={Beer}></img>
              <img
                className="mainpage-icon-container__icon-hover"
                src={BeerHover}
              ></img>
            </div>
          </div>
          <h2 className="mainpage-content__h2 mainpage-content__h2_stocks" id='stocks'>
            АКЦИИ
          </h2>
          <div className="mainpage-content__stocks">
            <div className="mainpage-stocks-div mainpage-stocks-div_right">
              <p className="mainpage-stocks-div__h1">приведи друга</p>
              <p className="mainpage-stocks-div__h2">получи пиво в подарок</p>
              <img
                className="mainpage-stocks-div__img"
                src={StocksLeftImg}
              ></img>
            </div>
            <div className="mainpage-stocks-div">
              <p className="mainpage-stocks-div__h1">в день рождения</p>
              <p className="mainpage-stocks-div__h2">кофе в подарок</p>
              <img
                className="mainpage-stocks-div__img"
                src={StocksRightImg}
              ></img>
            </div>
          </div>
          <h2 className="mainpage-content__h2 mainpage-content__h2_about" id='about'>
            О НАС
          </h2>
          <div className="mainpage-content__about">
            <p className="mainpage-about__we">МЫ</p>
            <img className="mainpage-about__img" src={StocksLeftImg}></img>
            <p className="mainpage-about__bestcafe">
              Лучшее кафе в Кубинке!
              <br />
              Приходи к нам!
            </p>
          </div>
          <h2 className="mainpage-content__h2 mainpage-content__h2_contacts" id='contacts'>
            КОНТАКТЫ
          </h2>
          <div className="mainpage-content__contacts">
            <p className="mainpage-contacts__phone-number">8-958-525-23-45</p>
            <div className="mainpage-contacts__arrow">
              <div></div>
            </div>
            <p className="mainpage-contacts__info">
              Если не можешь прийти, то позвони нам!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
