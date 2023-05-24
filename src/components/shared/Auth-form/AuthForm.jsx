import React from "react";
import Button from "../Button-reg/Button";
import email from "../../../app/icons/email.svg";
import password from "../../../app/icons/password.svg";
import Save from "../safe-me/Save";
import { Link } from "react-router-dom";

const AuthForm = ({ setChangeForm, changeForm }) => {
  return (
    <div className="auth_form">
      <div className="auth_block">
        <img src={email} width={20} alt="email" />
        <input
          type="text"
          className="auth_input"
          placeholder="Адрес электронной почты"
        />
      </div>
      <div className="line"></div>
      <div className="auth_block">
        <img src={password} width={20} alt="password" />
        <input type="text" className="auth_input" placeholder="Пароль" />
      </div>
      <div className="line"></div>
      <Save />
      <Button title="Войти" color="#fff" background="#D23B38" />
      <div className="registration_">
        <span className="registration_none">Еще не зарегистрированы?</span>
        <Button
          setChangeForm={setChangeForm}
          changeForm={changeForm}
          title="Регистрация"
          background=""
          color="#D23B38"
        />
      </div>
    </div>
  );
};

export default AuthForm;
