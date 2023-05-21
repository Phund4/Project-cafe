import "../sass/email/main.sass";
import LoginBear from "../img/login-bear.svg";
import Field from "../components/Field/Field";
import { HashLink as Link } from "react-router-hash-link";

function Email() {
  return (
    <>
      <div className="email-main">
        <header className="email-header">
          <img className="email-header__img" src={LoginBear} />
          <h1 className="email-header__h1">ВВЕДИТЕ ПОЧТУ</h1>
        </header>
        <div className="email-content">
          <Field type="email" id="email-field-name" />
        </div>
        <button className="email-button">
          <Link to="#" className="email-button__link">
            ПРОДОЛЖИТЬ
          </Link>
        </button>
      </div>
    </>
  );
}

export default Email;
