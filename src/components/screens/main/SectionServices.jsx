import React from "react";
import "./sectionServices.css";
import pay from "../../../app/icons/pay.svg";
import support from "../../../app/icons/support.svg";
import cash from "../../../app/icons/cash.svg";

const SectionServices = () => {
  return (
    <div className="container">
      <h2 className="section_title">Билеты на автобус в Алмате</h2>
      <div className="section_blocks">
        <div className="section_block">
          <img src={pay} width={100} alt="pay" />
          <h2 className="section_block-title">Безопасная оплата </h2>
          <p className="section_block-desc">
            Вы можете легко, быстро и надежно совершать все покупки билетов на
            автобус, дома, в офисе или, если хотите, со своего мобильного
            телефона.
          </p>
        </div>
        <div className="section_block">
          <img src={cash} width={100} alt="cash" />
          <h2 className="section_block-title">Доступные цены </h2>
          <p className="section_block-desc">
            Билет - предлагает вам возможность поиска и сравнения билетов на
            автобусы всех фирм. Таким образом, вы можете легко выбрать и
            приобрести билет на автобус по доступной цене.
          </p>
        </div>
        <div className="section_block">
          <img src={support} width={100} alt="support" />
          <h2 className="section_block-title">
            Круглосуточное обслуживание клиентов
          </h2>
          <p className="section_block-desc">
            Наша команда обслуживания клиентов работает с вами 24/7 для всех
            транзакций, которые вы совершаете через obilet.com и мобильные
            приложения obilet. Одним щелчком мыши вы можете запустить горячую
            линию поддержки и получить помощь.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionServices;
