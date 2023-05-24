import "../sass/loginError/main.sass";
import LoginBear from "../img/login-bear.svg";
import { HashLink as Link } from "react-router-hash-link";
function LoginError() {
  return (
    <>
      <div className="login-error-main">
        <header className="login-error-header">
          <img className="login-error-header__img" src={LoginBear} />
          <h1 className="login-error-header__h1">ВХОД</h1>
        </header>
        <div className="login-error-content">
          <div className="login-error-content__block">
            <p className="login-error-content__info">
              Неправильный
              <br />
              пароль или почта
            </p>
            <Link to="/email" className="login-error-content__forgpass">
              Забыли пароль?
            </Link>
          </div>
        </div>
        <button className="login-error-button">
          <Link to="/login/" className="login-error-button__link">
            Еще раз
          </Link>
        </button>
        {/* <button className='login-error-button'>ВОЙТИ</button> */}
      </div>
    </>
  );
}

export default LoginError;
