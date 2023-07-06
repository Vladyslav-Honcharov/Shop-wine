import React from "react";
import "./Button.scss";

const Button = ({ backgroundColor, text, onClick }) => {
  return (
    <button
      style={{ background: backgroundColor }}
      className="btn btn-outline-success btn-add"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
