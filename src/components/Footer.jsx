import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/images/LogoAP.png";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-personnel-info">
          {" "}
          <div className="logo-footer">
            <img src={Logo} alt="LogoAnna" id="logof" />
          </div>
          <div className="span-f-info">
            <span>
              Docteur en pharmacie <br /> Naturopathe
            </span>
          </div>
        </div>
        <div className="ml-container">
          {" "}
          <a href="later">Mentions légales </a>{" "}
        </div>
        <div className="contact-footer">
          <a href="later">
            Me Contacter{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{
                "--fa-primary-color": "#ffffff",
                "--fa-secondary-color": "#ffffff",
              }}
            />
          </a>{" "}
        </div>
      </div>
      <div className="rights">© 2024 Anna Perla – Tous droits réservés</div>
    </footer>
  );
}

export default Footer;
