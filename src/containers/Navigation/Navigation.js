import React, { Component } from "react";
import "./Navigation.scss";

class Navigation extends Component {
  state = { burgerActive: false };

  toggleBurger = () => {
    document.querySelector(".app").classList.toggle("app--no-overflow");

    this.setState(oldState => {
      return { burgerActive: !oldState.burgerActive };
    });
  };

  render() {
    return (
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

        <a
          href="#home"
          className={`nav__burger ${this.state.burgerActive ? "nav__burger--active" : ""}`}
          onClick={this.toggleBurger}>
          <div className="nav__burger-line"></div>
          <div className="nav__burger-line"></div>
          <div className="nav__burger-line"></div>
        </a>

        <div className="nav__mobile">
          <div
            className={`nav__mobile-background ${
              this.state.burgerActive ? "nav__mobile-background--visible" : ""
            }`}></div>
          <ul className={`nav__mobile-list ${this.state.burgerActive ? "nav__mobile-list--visible" : ""}`}>
            <li className="nav__mobile-item">
              <a className="nav__link nav__link--mobile" href="#home" onClick={this.toggleBurger}>
                Short Trips
              </a>
            </li>
            <li className="nav__mobile-item">
              <a className="nav__link nav__link--mobile" href="#home" onClick={this.toggleBurger}>
                About Us
              </a>
            </li>
            <li className="nav__mobile-item">
              <a className="nav__link nav__link--mobile" href="#home" onClick={this.toggleBurger}>
                Testimonials
              </a>
            </li>
            <li className="nav__mobile-item">
              <a className="nav__link nav__link--mobile" href="#home" onClick={this.toggleBurger}>
                Blog
              </a>
            </li>
            <li className="nav__mobile-item">
              <button className="nav__btn nav__btn--login nav__btn--mobile nav__btn--small" onClick={this.toggleBurger}>
                Login
              </button>
              <button className="nav__btn nav__btn--sign nav__btn--small" onClick={this.toggleBurger}>
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
