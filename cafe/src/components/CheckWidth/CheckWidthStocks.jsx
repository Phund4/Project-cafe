import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function CheckWidthStocks({ text, className }) {
  if (window.innerWidth <= 830) {
    return (
      <Link to="/#/" className={className}>
        {text}
      </Link>
    );
  } else if (window.innerWidth > 830) {
    return (
      <Link to="../mainpage#stocks" className={className}>
        {text}
      </Link>
    );
  }
}

export default CheckWidthStocks;
