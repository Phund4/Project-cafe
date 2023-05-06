import "../sass/menu/main.sass";
import BearSVG from "../img/Bear.svg";
import BearMidl from "../img/Bear-midl.svg";
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
                  <a href="/mainpage/" className="nav__link">
                    ГЛАВНАЯ
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    АКЦИИ
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    О НАС
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    КОНТАКТЫ
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    МОЙ АККАУНТ
                  </a>
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
