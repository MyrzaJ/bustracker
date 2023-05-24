import React, { useState } from "react";
import log from "../../../../app/images/log.svg";
import "../auth.css";
import AuthForm from "../../../shared/Auth-form/AuthForm";
import Registration from "../../../shared/registration/Registration";

const Auth = () => {
  const [changeForm, setChangeForm] = useState(false);
  return (
    <div className="container">
      <div className="auth_icon">
        <img src={log} width={80} alt="login" />
        <span className="auth_title">Вход пользователя</span>
      </div>
      <div className="auth_signIn">
        {changeForm ? (
          <Registration setChangeForm={setChangeForm} changeForm={changeForm} />
        ) : (
          <AuthForm setChangeForm={setChangeForm} changeForm={changeForm} />
        )}
      </div>
    </div>
  );
};

export default Auth;
