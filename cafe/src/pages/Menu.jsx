import "../sass/menu/main.sass";
import BearSVG from "../img/Bear.svg";
import BearMidl from "../img/Bear-midl.svg";
function Menu() {
  return (
    <>
      <div className="main-menupage">
        <div className="main-menupage-menu">
          <div className="main-menupage-sidebar">
            <button className="main-menupage-sidebar__hamburger"></button>
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
                  <a href="/mainpage/" className="main-menupage-nav__link">
                    ГЛАВНАЯ
                  </a>
                </li>
                <li className="main-menupage-nav__item">
                  <a href="#" className="main-menupage-nav__link">
                    АКЦИИ
                  </a>
                </li>
                <li className="main-menupage-nav__item">
                  <a href="#" className="main-menupage-nav__link">
                    О НАС
                  </a>
                </li>
                <li className="main-menupage-nav__item">
                  <a href="#" className="main-menupage-nav__link">
                    КОНТАКТЫ
                  </a>
                </li>
                <li className="main-menupage-nav__item">
                  <a href="#" className="main-menupage-nav__link">
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
