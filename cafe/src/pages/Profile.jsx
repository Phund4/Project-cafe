import "../sass/profile/main.sass";
import ProfileHuman from "../img/profile-human.svg";
import LoginBear from "../img/login-bear.svg";
import React from "react";
import BurgerMini from "../img/Burger-mini.svg";
import { HashLink as Link } from "react-router-hash-link";

function Profile() {
  return (
    <>
      <div className="profile-main">
        <div className="profile-sidebar">
          <Link to="/menu/" className="profile-sidebar__hamburger" />
        </div>
        <header className="profile-header">
          <h1 className="profile-header__h1-blur">Подкрепление</h1>
          <img className="profile-header__img-beer" src={LoginBear} />
          <div className="profile-header__h2">
            <img className="profile-header__img-human" src={ProfileHuman}></img>
            <h2 className="profile-header__p">ПРОФИЛЬ</h2>
          </div>
        </header>
        <div className="profile-content">
          <div className="profile-content__field">
            <p className="profile-content__field__p">ИМЯ</p>
            <input
              type="text"
              id="profile-field-name"
              placeholder="ИМЯ"
              value="Саня"
              className="profile-content__field__input field-yellow"
            />
          </div>
          <div className="profile-content__field">
            <p className="profile-content__field__p">Ваш телефон для связи</p>
            <input
              type="tel"
              id="profile-field-phone"
              placeholder="+7"
              value="112"
              className="profile-content__field__input field-yellow"
            />
          </div>
          <div className="profile-content__field">
            <p className="profile-content__field__p">Электронная почта</p>
            <input
              type="email"
              id="profile-field-email"
              value="cool@backend.ru"
              className="profile-content__field__input field-yellow"
            />
          </div>
          <div className="profile-content__field">
            <p className="profile-content__field__p">Дата рождения</p>
            <input
              type="text"
              id="profile-field-birthday"
              value="01.01.0101"
              className="profile-content__field__input field-yellow"
            />
          </div>
          <div className="profile-content__field">
            <p className="profile-content__field__p">Пароль</p>
            <input
              type="text"
              id="profile-field-password"
              value="ты лох кста"
              className="profile-content__field__input field-yellow"
            />
          </div>
        </div>
        <div className="profile-berger">
          <img className="profile-berger__img" src={BurgerMini} />
        </div>
      </div>
    </>
  );
}

export default Profile;
