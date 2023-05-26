import "../sass/contacts/main.sass";
import BearPizzapage from "../img/Bear-pizzapage.svg";
import SidebarBurger from "../components/SidebarBurger/SidebarBurger";
import StocksLeftImg from "../img/mainpage-stocks-left.png";

function Contacts() {
  return (
    <>
      <div className="main-contactspage">
        <SidebarBurger />
        <header className="main-contactspage-header">
          <h1 className="main-contactspage-header__h1">КОНТАКТЫ</h1>
          <img
            className="main-contactspage-header__img"
            src={BearPizzapage}
            alt="Bear"
          />
        </header>
        <div className="main-contactspage-content">
          <p className="main-contactspage-content__we">8-958-525-23-45</p>
          <img
            className="main-contactspage-content__img"
            src={StocksLeftImg}
          ></img>
          <p className="main-contactspage-content__bestcafe">
            Если не можешь прийти,то <br /> позвони нам, чтобы заказать!
          </p>
        </div>
      </div>
    </>
  );
}

export default Contacts;
