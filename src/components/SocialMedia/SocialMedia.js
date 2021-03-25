import React from "react";

import "./SocialMedia.scss";

import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import shareIcon from "../../assets/share.png";

const SocialMedia = props => (
  <div className="social-media">
    <a href="#home" className="social-media__link">
      <img className="social-media__icon" src={facebookIcon} alt="facebook" />
    </a>
    <a href="#home" className="social-media__link">
      <img className="social-media__icon social-media__icon--twitter" src={twitterIcon} alt="twitter" />
    </a>
    <a href="#home" className="social-media__share">
      <div className="social-media__icon-container">
        <img className="social-media__icon" src={shareIcon} alt="share" />
      </div>
      <span className="social-media__caption">Copy Link</span>
    </a>
  </div>
);

export default SocialMedia;
