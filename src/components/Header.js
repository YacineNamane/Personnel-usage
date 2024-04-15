import React from "react";
import { NavLink } from "react-router-dom";

function NavPannel() {
  return (
    <div className="Banner">
      <nav>
        <div className="nav">
          <div>
            <NavLink to="/"> Home </NavLink>
          </div>
          <div>
            <NavLink to="/AboutUs">About Us</NavLink>
          </div>
          <div>
            <NavLink to="/HelpUs">Help Us</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavPannel;
