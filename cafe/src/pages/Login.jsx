import "../sass/login/main.sass";
import LoginBear from "../img/login-bear.svg";
import Field from "../components/Field/Field";
import { HashLink as Link } from "react-router-hash-link";
function Login() {
  return (
    <>
      <div className="login-main">
        <header className="login-header">
          <img className="login-header__img" src={LoginBear} />
          <h1 className="login-header__h1">ВХОД</h1>
        </header>
        <div className="login-content">
          <Field type="email" id="login-field-email" text="Почта" />
          <Field
            type="tel"
            id="login-field-phone"
            text="Ваш телефон для связи"
          />
          <Link to="/authorization/" className="login-content__link">
            <p className="login-content__registration">Регистрация</p>
          </Link>
        </div>
        <button className="login-button">
          <Link to="/login/error" className="login-button__link">
            ВОЙТИ
          </Link>
        </button>
      </div>
    </>
  );
}

export default Login;
