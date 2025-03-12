import React from "react";
import "./nav.css";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="title">Library Management App</div>
        <div className="loginsign">
        <NavLink to="/Login" end>
            Login
          </NavLink>
          <p>/</p>
          <NavLink to="/Register" end>
            Register
          </NavLink>
        </div>
        <div className="extra">
        <NavLink to="/About" end>
            About
          </NavLink>

          <NavLink to="/Contact" end>
            contacts
          </NavLink>
          <NavLink to="/" end>
            Home
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
