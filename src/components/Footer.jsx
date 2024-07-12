import React from "react";
import { NavLink } from "react-router-dom";
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
        <div className="nav-footer-container">
          <h3>Navigation</h3>
          <nav>
            <div className="nav-section">
              <NavLink to="/">Accueil</NavLink>
            </div>
            <div className="nav-section">
              <NavLink to="/AboutUs">À propos</NavLink>
            </div>
            <div className="nav-section">
              <NavLink to="/blog">Blog</NavLink>
            </div>
            <div className="nav-section">
              <NavLink to="/contact">Contact</NavLink>
            </div>{" "}
          </nav>
        </div>
        <div className="contact-footer">
          <div>
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
          <div>
            {" "}
            <a href="later">Mentions légales </a>{" "}
          </div>
        </div>
      </div>
      <div className="rights">© 2024 Anna Perla – Tous droits réservés</div>
    </footer>
  );
}

export default Footer;
