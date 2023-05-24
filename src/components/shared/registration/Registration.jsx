import React from "react";
import email from "../../../app/icons/email.svg";
import password from "../../../app/icons/password.svg";
import doc from "../../../app/icons/doc.svg";
import person from "../../../app/icons/person.svg";
import phone from "../../../app/icons/phone.svg";
import Save from "../safe-me/Save";
import Button from "../Button-reg/Button";

const Registration = ({ changeForm, setChangeForm }) => {
  return (
    <div className="auth_form">
      <div className="auth_block">
        <img src={doc} width={20} alt="email" />
        <input type="text" className="auth_input" placeholder="Введите ИНН" />
      </div>
      <div className="line"></div>
      <div className="auth_block">
        <img src={person} width={20} alt="email" />
        <input type="text" className="auth_input" placeholder="ФИО" />
      </div>
      <div className="line"></div>
      <div className="auth_block">
        <img src={person} width={20} alt="email" />
        <select type="text" className="auth_input">
          <option value="">Мужчина</option>
          <option value="">Женщина</option>
        </select>
      </div>
      <div className="line"></div>
      <div className="auth_block">
        <img src={phone} width={20} alt="email" />
        <input
          type="text"
          className="auth_input"
          placeholder="Ваш номер телефона"
        />
      </div>
      <div className="line"></div>
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
      <div className="auth_block">
        <img src={password} width={20} alt="password" />
        <input
          type="text"
          className="auth_input"
          placeholder="Повторите пароль"
        />
      </div>
      <div className="line"></div>
      <Save />
      <Button title="Регистрация" color="#fff" background="#D23B38" />
      <div className="registration_">
        <span className="registration_none">Вы уже зарегистрированы?</span>
        <Button
          setChangeForm={setChangeForm}
          changeForm={changeForm}
          title="Войти"
          background=""
          color="#D23B38"
        />
      </div>
    </div>
  );
};

export default Registration;
