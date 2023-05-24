import React, { useState } from "react";
import bus from "../../../app/images/bus.png";
import seat from "../../../app/icons/seat.svg";
import seat2 from "../../../app/icons/seat2.svg";
import seat3 from "../../../app/icons/seat3.svg";
import seat4 from "../../../app/icons/seat4.svg";
import wifi from "../../../app/images/wifi.svg";
import tv from "../../../app/images/tv.svg";
import food from "../../../app/images/food.svg";

import Modal from "../modal/Modal";

const PlaceChoose = ({ handleClick, handleChoose, chooseSeat }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="bus_icon">
      <button onClick={() => setModal(true)} className="detail_btn">
        Детали перевозки
      </button>
      <div className="place_block">
        <div className="place_bus">
          <img src={bus} className="bus" alt="" />
          <div className="seat_place">
            <img
              src={seat4}
              onClick={handleChoose}
              width={30}
              className="seat_color"
              alt="seat"
            />
            <img src={seat4} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat4} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat4} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat4} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat4} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat4} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat4} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat4} onClick={handleChoose} width={30} alt="seat" />
          </div>
          <div className="seat_place2">
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
          </div>
          <div className="seat_place3">
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
          </div>
          <div className="seat_place4">
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat2} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
            <img src={seat3} onClick={handleChoose} width={30} alt="seat" />
          </div>
        </div>
        <div className="top_line"></div>
        <div className="placed">
          <div className="chooseSeat">
            {chooseSeat ? <img src={seat} width={30} alt="seat" /> : null}
          </div>
          <button
            onClick={handleClick}
            className={
              chooseSeat ? "choose_ticket-btnActive" : "choose_ticket-btn"
            }
          >
            Подтвердить и продолжить
          </button>
        </div>
      </div>
      <div className="chooseBottom">
        <div className="chooseBottom_block">
          <img src={seat2} width={20} alt="seat" />
          <span className="chooseBottom_text">Место для мужчин</span>
        </div>
        <div className="chooseBottom_block">
          <img src={seat4} width={20} alt="seat" />
          <span className="chooseBottom_text">Место для женщин</span>
        </div>
        <div className="chooseBottom_block">
          <img src={seat3} width={20} alt="seat" />
          <span className="chooseBottom_text">Свободное место</span>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal}>
        <h3>Детали перевозки</h3>
        <p>
          Дополнительная сумма не выплачивается, если сумма купона равна цене
          нового билета.
        </p>
        <h4>Особенности перевозки:</h4>
        <img src={tv} width={30} alt="tv" />
        <img src={wifi} width={30} alt="wi fi" />
        <img src={food} width={30} alt="food" />
      </Modal>
    </div>
  );
};

export default PlaceChoose;
