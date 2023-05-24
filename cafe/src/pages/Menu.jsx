import "../sass/menu/main.sass";
import BearSVG from "../img/Bear.svg";
import BearMidl from "../img/Bear-midl.svg";
import CheckWidthCont from "../components/CheckWidth/CheckWidthCont";
import CheckWidthStocks from "../components/CheckWidth/CheckWidthStocks";
import CheckWidthAbout from "../components/CheckWidth/CheckWidthAbout";
import { HashLink as Link } from "react-router-hash-link";

function Menu() {
  return (
    <>
      <div className="main-menupage">
        <div className="main-menupage-menu">
          <div className="main-menupage-sidebar">
            <Link to="/">
              <button className="main-menupage-sidebar__hamburger"></button>
            </Link>
          </div>
          <div className="main-menupage-menu__logo1">
            <img src={BearSVG} />
          </div>
          <div className="main-menupage-line"></div>
          <div className="main-menupage-text-box">
            <div className="main-menupage-text-box__menuline"></div>
            <div className="main-menupage-text-box__logo1">
              <img src={BearMidl} alt="logo" />
            </div>
            <div className="main-menupage-nav">
              <ul className="main-menupage-nav__list">
                <li className="main-menupage-nav__item">
                  <Link to="/mainpage/" className="main-menupage-nav__link">
                    ГЛАВНАЯ
                  </Link>
                </li>
                <li className="main-menupage-nav__item">
                  <CheckWidthStocks
                    text="АКЦИИ"
                    className="main-menupage-nav__link"
                  ></CheckWidthStocks>
                </li>
                <li className="main-menupage-nav__item">
                  <CheckWidthAbout
                    text="О&nbsp;НАС"
                    className="main-menupage-nav__link"
                  ></CheckWidthAbout>
                </li>
                <li className="main-menupage-nav__item">
                  <CheckWidthCont
                    text="КОНТАКТЫ"
                    className="main-menupage-nav__link"
                  ></CheckWidthCont>
                </li>
                <li className="main-menupage-nav__item">
                  <Link to="/login/" className="main-menupage-nav__link">
                    МОЙ&nbsp;АККАУНТ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
