import React from "react";
import "./footer.css";
import safe from "../../../app/icons/safe.svg";
import econom from "../../../app/icons/econom.svg";
import fast from "../../../app/icons/fast.svg";
import insta from "../../../app/icons/insta.svg";
import whatsapp from "../../../app/icons/whatsapp.svg";
import telegram from "../../../app/icons/telegram.svg";
import kaspi from "../../../app/images/kaspi.png";
import halyk from "../../../app/images/halyk.png";

import { ALL_ROUTES } from "../../../routes/AllRoutes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer_blocks-top">
          <h2 className="footer_title">BILET</h2>
          <div className="footer_block">
            <img src={fast} width={30} alt="" />
            <span className="footer_block-title">Самый быстрый</span>
          </div>
          <div className="footer_block">
            <img src={safe} width={30} alt="" />
            <span className="footer_block-title">Самый надежный</span>
          </div>
          <div className="footer_block">
            <img src={econom} width={30} alt="" />
            <span className="footer_block-title">Самый экономичный</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container footer_main">
          <ul className="footer_list">
            <h4 className="footer_list-title">Страницы</h4>
            {ALL_ROUTES?.map((item) => (
              <Link key={item.id} to={item.link} className="footer_list-item">
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
          <ul className="footer_list">
            <h4 className="footer_list-title">Следуйте за нами</h4>
            <li>
              <a target="_blank" className="footer_list-social" href="">
                <img src={telegram} width={25} alt="telegram" />
                <span>Telegram</span>
              </a>
            </li>
            <li>
              <a target="_blank" className="footer_list-social" href="">
                <img src={insta} width={25} alt="instagram" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a target="_blank" className="footer_list-social" href="">
                <img src={whatsapp} width={25} alt="whatsapp" />
                <span>Whatsapp</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_pay">
          <img src={kaspi} width={100} alt="kaspi" />
          <img src={halyk} width={100} alt="halyk" />
        </div>
        <p className="footer_about">
          BILET - крупнейшая и надежный платформа по продаже билетов на автобусы
        </p>
      </div>
    </>
  );
};

export default Footer;
