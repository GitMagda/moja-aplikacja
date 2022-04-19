import React from "react";
import "./Footer.css";
// import SocialFollow from "./SocialFollow";

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <span>Nazwa firmy - wszelkie prawa zastrzeżone, 2022</span>
        <div className="footer-icon">
          <ul className="koniec">
            <li>
              <i className="fab fa-instagram"></i>
            </li>

            <li>
              <i className="fab fa-facebook-square"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
