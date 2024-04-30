import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/LogoAP.png";

function NavPannel() {
  return (
    <div className="Banner">
      <div className="Logo">
        <img src={Logo} alt="LogoAnna" id="LogoAP" />
      </div>
      <nav>
        <div>
          <NavLink to="/">Home </NavLink>
        </div>
        <div>
          <NavLink to="/AboutUs">About Me</NavLink>
        </div>
        <div>
          <NavLink to="/blog">Blog</NavLink>
        </div>
        <div>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div>
          <NavLink to="/signin">Sign In</NavLink>
        </div>
      </nav>
    </div>
  );
}
export default NavPannel;
