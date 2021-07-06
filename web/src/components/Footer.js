import logo from "../images/logo-adalab.png";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__info"> Awesome profile-cards &copy; 2021</small>
      <img className="footer__logo" src={logo} alt="Logo Adalab" />
    </footer>
  );
}

export default Footer;
