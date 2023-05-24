import React, { useState } from "react";
import "../../screens/main/mainForm.css";
import location from "../../../app/icons/location.svg";
import calendar from "../../../app/icons/date.svg";
import { DatePicker, Space } from "antd";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Form = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="mainForm-from">
      <div className="mainForm-block">
        <img src={location} width={25} alt="" />
        <div className="mainForm__block">
          <label className="mainForm-label">Откуда</label>
          <select className="mainForm-select">
            <option value="">Выберите маршрут</option>
          </select>
        </div>
      </div>
      <div className="line"></div>
      <div className="mainForm-block">
        <img src={location} width={25} alt="" />
        <div className="mainForm__block">
          <label className="mainForm-label">Куда</label>
          <select className="mainForm-select">
            <option value="">Выберите маршрут</option>
          </select>
        </div>
      </div>
      <div className="line"></div>
      <div className="mainForm-block">
        <img src={calendar} width={25} alt="" />
        <div className="mainForm__block">
          <label className="mainForm-label">Когда</label>
          <Space direction="vertical">
            <DatePicker onChange={onChange} className="calendar" />
          </Space>
        </div>
      </div>
      <Link to="/tickets">
        <Button
          color="#fff"
          background="#1F9B78"
          title="Поиск билетов на автобус"
        />
      </Link>
    </div>
  );
};

export default Form;
