import "../sass/startMob/main.sass";
import LoginBear from "../img/login-bear.svg";
import BurgerMini from "../img/Burger-mini.svg";
import Field from "../components/Field/Field";
import { HashLink as Link } from "react-router-hash-link";

function StartMob() {
  return (
    <>
      <div className="startMob-main">
        <header className="startMob-header">
          <img className="startMob-header__img-burger" src={BurgerMini} />
          <div className="startMob-header__line">
            <h1 className="startMob-header__h1">Подкрепление</h1>
          </div>
        </header>
        <div className="startMob-content">
          <img className="startMob-header__img-beer" src={LoginBear} />
        </div>
        <button className="startMob-button">
          <Link to="/mainpage/" className="startMob-button__link">
            Смотреть меню
          </Link>
        </button>
        <div className="startMob-sidebar">
          <Link to="/menu/" className="startMob-sidebar__hamburger" />
        </div>
      </div>
    </>
  );
}

export default StartMob;
