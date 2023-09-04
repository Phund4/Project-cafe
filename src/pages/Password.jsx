import "../sass/password/main.sass";
import LoginBear from "../img/login-bear.svg";
import Field from "../components/Field/Field";
import { HashLink as Link } from "react-router-hash-link";

function Password() {
  return (
    <>
      <div className="password-main">
        <header className="password-header">
          <img className="password-header__img" src={LoginBear} />
          <h1 className="password-header__h1">ПРИДУМАЙТЕ ПАРОЛЬ</h1>
        </header>
        <div className="password-content">
          <Field type="password" id="password-field-name" />
        </div>
        <button className="password-button">
          <Link to="/mainpage/" className="password-button__link">
            ПРОДОЛЖИТЬ
          </Link>
        </button>
      </div>
    </>
  );
}

export default Password;
