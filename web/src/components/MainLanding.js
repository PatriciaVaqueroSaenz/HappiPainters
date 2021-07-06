import React from "react";
import { Link } from "react-router-dom";

function MainLanding() {
  return (
    <main className="landing__main">
      <div className="landing__main-header">
        <div className="logo"></div>
      </div>
      <h1 className="landing__main-title">Crea tu tarjeta de visita</h1>
      <h2 className="landing__main-subtitle">
        Crea mejores contactos profesionales de forma fácil y cómoda
      </h2>
      <section>
        <ul className="landing__main-menu">
          <li className="landing__main-menu-icon1">
            <i className="far fa-object-ungroup" aria-hidden="true"></i>
          </li>
          <span className="landing__main-menu-word1">Diseña</span>
          <li className="landing__main-menu-icon2">
            <i className="far fa-keyboard"></i>
          </li>
          <span className="landing__main-menu-word2">Rellena</span>
          <li className="landing__main-menu-icon3">
            <i className="fas fa-share-alt"></i>
          </li>
          <span className="landing__main-menu-word3">Comparte</span>
        </ul>
      </section>
      <div className="landing__main-button">
        <Link
            to="/card"
            className="landing__main-button--start"
            title="Go to create card"
            tabindex="1"
          >
            Comenzar
          </Link>
      </div>
    </main>
  );
}
export default MainLanding;
