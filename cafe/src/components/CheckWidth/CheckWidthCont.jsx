import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function CheckWidthCont({ text, className }) {
  if (window.innerWidth <= 830) {
    return (
      <Link to="/#/" className={className}>
        {text}
      </Link>
    );
  } else if (window.innerWidth > 830) {
    return (
      <Link to="../mainpage#contacts" className={className}>
        {text}
      </Link>
    );
  }
}

export default CheckWidthCont;
