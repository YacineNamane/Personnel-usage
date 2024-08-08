import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/images/LogoAP.png";
import location from "../assets/images/location.svg";
import mail from "../assets/images/contact.png";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
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
          <h3>Contact</h3>
          <div>
            <NavLink to="/contact">
              Me Contacter{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{
                  "--fa-primary-color": "#ffffff",
                  "--fa-secondary-color": "#ffffff",
                }}
              />
            </NavLink>
          </div>
          <div>
            {" "}
            <a href="later">Mentions légales </a>{" "}
          </div>
          <div>
            <span>
              {" "}
              <img src={location} alt="location" />
              île de france , France{" "}
            </span>
          </div>
          <div>
            <span>
              {" "}
              <img src={mail} alt="mail" />
              anna.perla.270@gmail.com
            </span>
          </div>
        </div>
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
      </div>
      <div className="rights">© 2024 Anna Perla – Tous droits réservés</div>
    </footer>
  );
}

export default Footer;
