import React, { useState } from "react";
import "./oneTickets.css";
import bus2 from "../../../app/icons/bus2.svg";
import clock from "../../../app/icons/clock.svg";
import euro from "../../../app/icons/euro.svg";
import seat from "../../../app/icons/seat.svg";
import PlaceChoose from "./PlaceChoose";

const OneTickets = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chooseSeat, setChooseSeat] = useState(false);
  const handleChoose = () => {
    setChooseSeat(true);
  };
  const handleClick = () => {
    if (chooseSeat === false) {
      return;
    }
    setIsVisible(!isVisible);
  };
  const handleClick2 = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="one_ticket">
      <div className="one_ticket-main">
        <img src={bus2} width={80} alt="bus" />
        <div className="one_ticket-block">
          <div className="block_ticket-item">
            <img src={clock} width={25} alt="clock" />
            <span className="item_ticket-name">00:00</span>
          </div>
          <span className="block_ticket-desc">(6 Часов 30 минут)</span>
        </div>
        <div className="one_ticket-block">
          <div className="block_ticket-item">
            <img src={seat} width={18} alt="clock" />
            <span className="item_ticket-name">18</span>
          </div>
          <span className="block_ticket-desc">
            Автовокзал Алибейкой &#62; Автовокзал Анкары (Ашти)
          </span>
        </div>
        <div className="one_ticket-block">
          <div className="block_ticket-item">
            <img src={euro} width={28} alt="clock" />
            <span className="item_ticket-name">5000</span>
          </div>
        </div>
        <div className="one_ticket-block">
          <button onClick={handleClick2} className="one_ticket-btn">
            Выберите место
          </button>
          <span className="block_ticket-desc">Последние 8 места</span>
        </div>
      </div>
      {isVisible ? (
        <PlaceChoose
          handleClick={handleClick}
          handleChoose={handleChoose}
          chooseSeat={chooseSeat}
        />
      ) : null}
    </div>
  );
};

export default OneTickets;
