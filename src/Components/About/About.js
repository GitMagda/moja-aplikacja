import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <h1 className="name">Nasi specjaliści</h1>
      <ul className="specjaliści">
        <li>
          <div className="person1"></div>
          <div>
            <h3>Naziwsko imię [dział]</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              commodi voluptatem expedita ea soluta, voluptatum magnam, animi
              sunt blanditiis esse recusandae quisquam modi porro, molestiae
              vitae numquam? Libero, saepe praesentium.
            </p>
          </div>
        </li>
        <li>
          <div className="person2"></div>
          <div>
            <h3 className="person">Naziwsko imię [dział]</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              commodi voluptatem expedita ea soluta, voluptatum magnam, animi
              sunt blanditiis esse recusandae quisquam modi porro, molestiae
              vitae numquam? Libero, saepe praesentium.
            </p>
          </div>
        </li>
        <li></li>
      </ul>
    </section>
  );
}
export default About;
