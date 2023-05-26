import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function EmptyInput() {
  let emailInput = document.getElementById("login-field-email");
  let email = emailInput?.value || "";
  let telInput = document.getElementById("login-field-tel");
  let tel = telInput?.value || "";
  if (email === "" || tel === "") {
    return (
      <Link to="/login/error/" className="login-button__link">
        Вход
      </Link>
    );
  } else {
    return (
      <Link to="/login/mainpage/" className="login-button__link">
        ВОЙТИ
      </Link>
    );
  }
}
export default EmptyInput;
