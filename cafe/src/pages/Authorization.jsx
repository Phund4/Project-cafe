import "../sass/authorization/main.sass";
import LoginBear from "../img/login-bear.svg";
import Field from "../components/Field/Field";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Authorization() {
  return (
    <>
      <div className="authorization-main">
        <header className="authorization-header">
          <img className="authorization-header__img" src={LoginBear} />
          <h1 className="authorization-header__h1">АВТОРИЗАЦИЯ</h1>
        </header>
        <div className="authorization-content">
          <Field
            type="text"
            id="authorization-field-name"
            text="Ваше имя"
            placeholder="ИМЯ"
          />
          <Field
            type="tel"
            id="authorization-field-phone"
            text="Ваш телефон для связи"
            placeholder="+7"
          />

          <Field
            type="email"
            id="authorization-field-email"
            text="Ваша электронная почта"
          />
          <Field
            type="date"
            id="authorization-field-birthday"
            text="Дата рождения"
          />
          <Field type="text" id="authorization-field-password" text="Пароль" />
        </div>
        <button className="authorization-button">
          <Link to="/mainpage/" className="authorization-button__link">
            ВОЙТИ
          </Link>
        </button>
      </div>
    </>
  );
}

export default Authorization;
