import React from "react";
import "./nav.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="title">Library Management App</div>
        <div className="loginsign">
          <a href="#">Login</a>
          <p>/</p>
          <a href="#">Sign up</a>
        </div>
        <div className="extra">
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
