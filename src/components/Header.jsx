import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/LogoAP.png";
import admin from "../assets/images/admin.png";
import home from "../assets/images/home.png";
import blog from "../assets/images/blog.png";
import about from "../assets/images/about.png";
import contact from "../assets/images/contact.png";

function NavPannel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollClass, setScrollClass] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token !== null);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrollClass("scrolled");
      } else {
        setScrollClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className={`Banner ${scrollClass}`}>
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
      <div className={"mobile-menu "}>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "mobile-nav" + (isActive ? " active" : "")
            }
          >
            <img src={home} alt="" />
          </NavLink>
          <NavLink
            to="/AboutUs"
            className={({ isActive }) =>
              "mobile-nav" + (isActive ? " active" : "")
            }
          >
            <img src={about} alt="" />
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              "mobile-nav" + (isActive ? " active" : "")
            }
          >
            <img src={blog} alt="" />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "mobile-nav" + (isActive ? " active" : "")
            }
          >
            <img src={contact} alt="" />
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default NavPannel;
