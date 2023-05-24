import React from "react";
import "./button.css";

const Button = ({ title, color, background }) => {
  return (
    <button
      className="buttons_shared"
      style={{ backgroundColor: `${background}`, color: `${color}` }}
    >
      {title}
    </button>
  );
};

export default Button;
