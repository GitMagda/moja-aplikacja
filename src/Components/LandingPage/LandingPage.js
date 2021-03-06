import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="intro-text">
        <h1>
          Nasza firma oferuje najwyższej <br /> jakości produkty
        </h1>
        <p className="intro">Nie wierz nam na słowo - sprawdź</p>
        <a className="btn-offer" href="#offer">
          oferta
        </a>
      </div>
    </section>
  );
}
export default LandingPage;
