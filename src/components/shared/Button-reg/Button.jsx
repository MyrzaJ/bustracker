import React from "react";
import "./button.css";

const Button = ({ title, color, background, setChangeForm, changeForm }) => {
  return (
    <button
      onClick={() => setChangeForm(!changeForm)}
      className="buttons_shared"
      style={{ backgroundColor: `${background}`, color: `${color}` }}
    >
      {title}
    </button>
  );
};

export default Button;
