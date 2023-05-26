import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function CheckWidthAbout({ text, className }) {
  if (window.innerWidth <= 830) {
    return (
      <Link to="/about/" className={className}>
        {text}
      </Link>
    );
  } else if (window.innerWidth > 830) {
    return (
      <Link to="../mainpage#about" className={className}>
        {text}
      </Link>
    );
  }
}

export default CheckWidthAbout;
