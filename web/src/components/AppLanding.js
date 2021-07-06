import React from "react";
import Footer from "./Footer";
import MainLanding from "./MainLanding";
import "../stylesheets/App.scss";

function AppLanding() {
  return (
    <div className="wrap">
      <MainLanding />
      <Footer />
    </div>
  );
}

export default AppLanding;
