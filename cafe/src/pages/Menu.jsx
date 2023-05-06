import "../sass/menu/main.sass";
import BearSVG from "../img/Bear.svg";
import BearMidl from "../img/Bear-midl.svg";
import { HashLink as Link } from "react-router-hash-link";

function Menu() {
  return (
    <>
      <div className="container-menupage">
        <div className="menu">
          <div className="sidebar">
            <button className="hamburger"></button>
          </div>
          <div className="menu__logo1">
            <img src={BearSVG} />
          </div>
          <div className="line"></div>
          <div className="text-box">
            <div className="line-menu"></div>
            <div className="text-box__logo1">
              <img src={BearMidl} alt="logo" />
            </div>
            <div className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link to="/mainpage" className="nav__link">
                    ГЛАВНАЯ
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to='/mainpage#stocks' className="nav__link">
                    АКЦИИ
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="mainpage#about" className="nav__link">
                    О НАС
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to='mainpage#contacts' className="nav__link">
                    КОНТАКТЫ
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="profile/" className="nav__link">
                    МОЙ АККАУНТ
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
