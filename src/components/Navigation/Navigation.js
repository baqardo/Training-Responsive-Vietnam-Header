import React from "react";

import "./Navigation.scss";

const Navigation = props => (
  <nav className="nav">
    <div className="nav__logo-container">
      <a className="nav__logo" href="#home">
        FLY<span className="nav__logo nav__logo--green">AWAY</span>
      </a>
    </div>

    <ul className="nav__link-list">
      <li className="nav__link-container">
        <a className="nav__link" href="#home">
          <div className="nav__drop-down">Short Trips</div>
        </a>
      </li>
      <li className="nav__link-container">
        <a className="nav__link" href="#home">
          About Us
        </a>
      </li>
      <li className="nav__link-container">
        <a className="nav__link" href="#home">
          Testimonials
        </a>
      </li>
      <li className="nav__link-container">
        <a className="nav__link" href="#home">
          Blog
        </a>
      </li>
    </ul>

    <ul className="nav__btn-list">
      <li className="nav__btn-container">
        <button className="nav__btn nav__btn--login">Login</button>
      </li>
      <li className="nav__btn-container">
        <button className="nav__btn nav__btn--sign">Sign Up</button>
      </li>
    </ul>
  </nav>
);

export default Navigation;
