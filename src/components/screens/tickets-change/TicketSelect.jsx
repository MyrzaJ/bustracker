import React from "react";
import log from "../../../app/icons/location.svg";
import date from "../../../app/icons/date.svg";
import search from "../../../app/icons/search.svg";

import { Button, DatePicker, Space } from "antd";

const TicketSelect = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="tickets_select">
      <div className="container tickets_select_">
        <div className="tickets_select-block">
          <img src={log} width={20} alt="location" />
          <select className="tickets_select-select">
            <option value="">Выберите маршрут</option>
          </select>
        </div>
        <div className="tickets_select-block">
          <img src={log} width={20} alt="location" />
          <select className="tickets_select-select">
            <option value="">Выберите маршрут</option>
          </select>
        </div>
        <div className="tickets_select-block">
          <img src={date} width={25} alt="location" />
          <Space direction="vertical">
            <DatePicker onChange={onChange} className="tickets_calendar" />
          </Space>
        </div>
        <button className="tickets_select-btn">
          <img src={search} width={20} alt="location" />
          Изменить поиск
        </button>
      </div>
    </div>
  );
};

export default TicketSelect;
