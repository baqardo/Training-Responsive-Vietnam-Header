import React from "react";
import Button from "../Button/Button";
import SocialMedia from "../SocialMedia/SocialMedia";

import "./Header.scss";

import vietnamImage from "../../assets/vietnam.png";
import landscapeImage1 from "../../assets/landscape-1.png";
import landscapeImage2 from "../../assets/landscape-2.png";
import landscapeImage3 from "../../assets/landscape-3.png";
import arrowImage from "../../assets/arrow.png";
import decorationImage from "../../assets/decoration.png";

const Header = props => (
  <header className="header">
    <div className="header__left">
      <div className="header__social-media">
        <SocialMedia />
      </div>

      <div className="header__tour">
        <div className="header__preview">
          <img className="header__preview-image" src={vietnamImage} alt="vietnam" />
          <img className="header__decoration" src={decorationImage} alt="" />
          <img className="header__decoration header__decoration--rotate" src={decorationImage} alt="" />
        </div>
        <div className="header__preview-description">
          <p className="header__time">2 Days</p>
          <p className="header__price">$166 per person</p>
        </div>
      </div>

      <div className="header__next-trip">
        <div className="header__arrow-container">
          <img className="header__arrow-down" src={arrowImage} alt="arrow down" />
        </div>
        <span className="header__next">More Short Trips</span>
      </div>
    </div>
    <div className="header__right">
      <div className="header__info">
        <div className="header__title">
          <p className="header__title-line">Mekong</p>
          <p className="header__title-line">Delta</p>
          <p className="header__title-line">Tour</p>
          <span className="header__title-line header__title-line--country">Vietnam</span>
        </div>
        <div className="header__cta">
          <p className="header__description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          </p>
          <div className="header__btn">
            <Button>Book Now</Button>
          </div>
        </div>
        <div className="header__carousel">
          <div className="header__place">
            <img className="header__place-image" src={landscapeImage1} alt="landscape 1" />
          </div>

          <div className="header__place">
            <img className="header__place-image" src={landscapeImage2} alt="landscape 2" />
          </div>

          <div className="header__place">
            <img className="header__place-image" src={landscapeImage3} alt="landscape 3" />
          </div>
        </div>
        <div className="header__show-photos">
          <div className="header__show-all">
            <p className="header__show">See all photos</p>
          </div>
          <div className="header__arrow-container">
            <img className="header__arrow-right" src={arrowImage} alt="arrow right" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
