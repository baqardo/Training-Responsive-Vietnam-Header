import React from "react";

import "./Navigation.scss";

import logo from "../../assets/logo.png";

const Navigation = props => (
  <div className="container">
    <nav className="nav">
      <div className="nav__logo-container">
        <a className="nav__link nav__link--logo" href="#home">
          <img className="nav__logo" src={logo} alt="logo" />
        </a>
      </div>

      <div className="nav__link-container">
        <div className="nav__item">
          <a className="nav__link nav__link--current-page" href="#home">
            Short Trips
          </a>
        </div>
        <div className="nav__item">
          <a className="nav__link" href="#home">
            About Us
          </a>
        </div>
        <div className="nav__item">
          <a className="nav__link" href="#home">
            Testimonials
          </a>
        </div>
        <div className="nav__item">
          <a className="nav__link" href="#home">
            Blog
          </a>
        </div>
      </div>

      <div className="nav__button-container">
        <div className="nav__item nav__item--button">
          <a className="nav__button nav__button--login" href="#home">
            Login
          </a>
        </div>
        <div className="nav__item nav__item--button">
          <a className="nav__button nav__button--sign-up" href="#home">
            Sign Up
          </a>
        </div>
      </div>

      <div className="nav__burger-container">
        <a className="nav__link nav__link--burger" href="#home">
          <div className="nav__burger-line"></div>
          <div className="nav__burger-line"></div>
        </a>
      </div>
    </nav>
  </div>
);

export default Navigation;
