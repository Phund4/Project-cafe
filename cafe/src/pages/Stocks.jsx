import "../sass/stocks/main.sass";
import BearPizzapage from "../img/Bear-pizzapage.svg";
import SidebarBurger from "../components/SidebarBurger/SidebarBurger";
import StocksLeftImg from "../img/mainpage-stocks-left.png";
import StocksRightImg from "../img/mainpage-stocks-right.png";

function Stocks() {
  return (
    <>
      <div className="main-stockspage">
        <SidebarBurger />
        <header className="main-stockspage-header">
          <h1 className="main-stockspage-header__h1">АКЦИИ</h1>
          <img
            className="main-stockspage-header__img"
            src={BearPizzapage}
            alt="Bear"
          />
        </header>
        <div className="main-stockspage-content">
          <p className="main-stockspage-content__we-1">Приведи друга</p>
          <p className="main-stockspage-content__bestcafe-1">
            получи пиво в подарок
          </p>
          <img
            className="main-stockspage-content__img-1"
            src={StocksLeftImg}
          ></img>
          <p className="main-stockspage-content__we-2">В день рождения</p>
          <p className="main-stockspage-content__bestcafe-2">кофе в подарок</p>
          <img
            className="main-stockspage-content__img-2"
            src={StocksRightImg}
          ></img>
        </div>
      </div>
    </>
  );
}

export default Stocks;
