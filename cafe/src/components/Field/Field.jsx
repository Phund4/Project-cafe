import "./field.sass";
// eslint-disable-next-line react/prop-types
function Field({ text, type, idInput, placeholder, idText }) {
  return (
    <div className="field">
      <p className="field__p" id={idText}>{text}</p>
      <input
        type={type}
        id={idInput}
        placeholder={placeholder}
        className="field__input field-yellow"
      />
    </div>
  );
}

export default Field;
