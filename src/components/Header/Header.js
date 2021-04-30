import React from "react";

import "./Header.scss";

import landscapeImage1 from "../../assets/landscape-1.png";
import landscapeImage2 from "../../assets/landscape-2.png";
import landscapeImage3 from "../../assets/landscape-3.png";
import arrowImage from "../../assets/arrow.png";
import facebookImage from "../../assets/facebook.png";
import twitterImage from "../../assets/twitter.png";
import shareImage from "../../assets/share.png";
import vietnamImage from "../../assets/vietnam.png";
import decorationImage from "../../assets/decoration.png";

const Header = props => (
  <header className="header">
    <div className="header__left">
      <div className="header__connect">
        <a href="#home" className="header__connect-media">
          <img className="header__connect-icon" src={facebookImage} alt="facebook" />
        </a>
        <a href="#home" className="header__connect-media">
          <img className="header__connect-icon header__connect-icon--twitter" src={twitterImage} alt="twitter" />
        </a>
        <a href="#home" className="header__connect-share">
          <img className="header__connect-icon header__connect-icon--share" src={shareImage} alt="share" />
          <span className="header__connect-description">Copy Link</span>
        </a>
      </div>
      <div className="header__trip">
        <div className="header__trip-images">
          <img className="header__trip-image" src={vietnamImage} alt="mekong" />
          <img className="header__trip-decoration" src={decorationImage} alt="decoration" />
          <img
            className="header__trip-decoration header__trip-decoration--rotate"
            src={decorationImage}
            alt="decoration"
          />
        </div>
        <div className="header__trip-offer">
          <div className="header__trip-time">2 Days</div>
          <div className="header__trip-cost">$166 per person</div>
        </div>
      </div>
      <div className="header__more">
        <a href="#home" className="header__more-btn">
          <img className="header__more-icon" src={arrowImage} alt="arrow down" />
        </a>
        <div className="header__more-description">More Short Trips</div>
      </div>
    </div>
    <div className="header__right">
      <div className="header__title">
        <p className="header__title-line">
          Mekong <br className="header__title-break" />
          Delta <br className="header__title-break header__title-break--visible" />
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
        <img className="header__images-item" src={landscapeImage1} alt="tourist point 1" />
        <img className="header__images-item" src={landscapeImage2} alt="tourist point 2" />
        <img className="header__images-item" src={landscapeImage3} alt="tourist point 3" />
        <a href="#home" className="header__images-cta">
          <div className="header__images-cta-description">See all photos</div>
          <div className="header__images-cta-btn">
            <img className="header__images-cta-arrow" src={arrowImage} alt="right arrow" />
          </div>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
