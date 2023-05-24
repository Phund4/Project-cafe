import "./field.sass";
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line react/prop-types
function Field({ text, type, id, placeholder }) {
  return (
    <div className="field">
      <p className="field__p">{text}</p>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="field__input field-yellow"
      />
    </div>
  );
}

export default Field;
