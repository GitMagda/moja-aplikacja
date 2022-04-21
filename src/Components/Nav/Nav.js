import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <div>moja firma</div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#about">o nas</a>
        </li>
        <li className="nav-item">
          <a href="#offer">oferta</a>
        </li>
        <li className="nav-item">
          <a href="#home" className="disabled">
            kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
