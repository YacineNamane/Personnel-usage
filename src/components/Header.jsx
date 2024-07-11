import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/LogoAP.png";
import user from "../assets/images/user.png";

function NavPannel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Vérifier si l'utilisateur est connecté
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token !== null);
  }, []);

  // Fonction de déconnexion
  const handleLogout = () => {
    // Supprimer le token du local storage
    localStorage.removeItem("token");
    // Mettre à jour l'état de connexion
    setIsLoggedIn(false);
  };

  return (
    <div className="Banner">
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
          </div>{" "}
        </nav>
      </div>
      <div className="sign-out-btncontainer">
        {isLoggedIn ? (
          <button className="sign-out-button" onClick={handleLogout}>
            <img src={user} alt="LogoAnna" id="Login" />
          </button>
        ) : (
          <NavLink to="/signin">
            <img src={user} alt="LogoAnna" id="Login" />
          </NavLink>
        )}
      </div>
    </div>
  );
}
export default NavPannel;
