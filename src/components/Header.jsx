import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/LogoAP.png";
import admin from "../assets/images/admin.png";
import menuIcon from "../assets/images/Menu.png"; // Icône de menu
import closeIcon from "../assets/images/Close.png"; // Icône de fermeture
import home from "../assets/images/home.png";
import blog from "../assets/images/blog.png";
import about from "../assets/images/about.png";
import contact from "../assets/images/contact.png";

function NavPannel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token !== null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="Banner">
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu" />
        </div>
        <div className="Logo">
          <img src={Logo} alt="LogoAnna" id="LogoAP" />
        </div>
        <div className="nav-main">
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
            </div>
          </nav>
        </div>
        <div className="sign-out-btncontainer">
          {isLoggedIn ? (
            <button className="sign-out-button" onClick={handleLogout}>
              <img src={admin} alt="User" id="Login" />
            </button>
          ) : (
            <NavLink to="/signin">
              <button className="sign-out-button">
                <img src={admin} alt="User" id="Login" />
              </button>
            </NavLink>
          )}
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-mobile-header">
          <div className="close-icon" onClick={toggleMenu}>
            <img src={closeIcon} alt="Close" />
          </div>
          <div className="Logo-nav-mobile">
            <img src={Logo} alt="LogoAnna" id="LogoAP" />
          </div>
        </div>
        <nav>
          <NavLink to="/" onClick={toggleMenu}>
            <img src={home} alt="" />
            Accueil
          </NavLink>
          <NavLink to="/AboutUs" onClick={toggleMenu}>
            <img src={about} alt="" />À propos
          </NavLink>
          <NavLink to="/blog" onClick={toggleMenu}>
            <img src={blog} alt="" />
            Blog
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            <img src={contact} alt="" />
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default NavPannel;
