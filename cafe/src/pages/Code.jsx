import "../sass/code/main.sass";
import LoginBear from "../img/login-bear.svg";
import Field from "../components/Field/Field";
import { HashLink as Link } from "react-router-hash-link";

function Code() {
  return (
    <>
      <div className="code-main">
        <header className="code-header">
          <img className="code-header__img" src={LoginBear} />
          <h1 className="code-header__h1">ВВЕДИТЕ КОД</h1>
        </header>
        <div className="code-content">
          <Field type="text" id="code-field-name" />
        </div>
        <button className="code-button">
          <Link to="/profile/" className="code-button__link">
            ПРОДОЛЖИТЬ
          </Link>
        </button>
      </div>
    </>
  );
}

export default Code;
