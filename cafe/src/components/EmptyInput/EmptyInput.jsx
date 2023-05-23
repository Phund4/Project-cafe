import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function EmptyInput({ text, link, className }) {
  return (
    <Link to={link} className={className}>
      {text}
    </Link>
  );
}

export default EmptyInput;
