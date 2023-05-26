import "../sass/about/main.sass";
import BearPizzapage from "../img/Bear-pizzapage.svg";
import SidebarBurger from "../components/SidebarBurger/SidebarBurger";
import StocksLeftImg from "../img/mainpage-stocks-left.png";

function About() {
  return (
    <>
      <div className="main-aboutpage">
        <SidebarBurger />
        <header className="main-aboutpage-header">
          <h1 className="main-aboutpage-header__h1">О&nbsp;НАС</h1>
          <img
            className="main-aboutpage-header__img"
            src={BearPizzapage}
            alt="Bear"
          />
        </header>
        <div className="main-aboutpage-content">
          <p className="main-aboutpage-content__we">МЫ</p>
          <img
            className="main-aboutpage-content__img"
            src={StocksLeftImg}
          ></img>
          <p className="main-aboutpage-content__bestcafe">
            Лучшее кафе в Кубинке!
            <br />
            Приходи к нам!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
