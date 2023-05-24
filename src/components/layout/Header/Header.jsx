import React from "react";
import bus from "../../../app/icons/bus.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="header_section">
      <div className="container header">
        <div className="header-main">
          <img src={bus} width={30} alt="bus" />
          <span className="header_text">Автобус</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
