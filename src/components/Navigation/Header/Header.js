import React from "react";

import "./Header.scss";

import landscape1 from "../../../assets/landscape-1.png";
import landscape2 from "../../../assets/landscape-2.png";
import landscape3 from "../../../assets/landscape-3.png";

const Header = props => (
  <header className="header">
    <div className="header__left"></div>
    <div className="header__right">
      <div className="header__title">
        <p className="header__title-line">Mekong</p>
        <p className="header__title-line">Delta</p>
        <p className="header__title-line">
          Tour, <span className="header__title-highlight">Vietnam</span>
        </p>
      </div>
      <div className="header__cta">
        <p className="header__cta-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        </p>
        <button className="header__cta-btn">Book Now</button>
      </div>
      <div className="header__images">
        <img className="header__images-item" src={landscape1} alt="tourist point 1" />
        <img className="header__images-item" src={landscape2} alt="tourist point 2" />
        <img className="header__images-item" src={landscape3} alt="tourist point 3" />
      </div>
    </div>
  </header>
);

export default Header;
