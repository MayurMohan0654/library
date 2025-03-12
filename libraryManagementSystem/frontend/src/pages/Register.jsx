import React from "react";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router";
import "./register.css";
import "../scripts/regLog.js";

function Register() {
  return (
    <>
      <Navbar />
      <div className="register">
        <div className="registerMain">
          <h1 className="text-2xl font-bold mb-3">Register</h1>
          <input type="text" placeholder="Username" className="registerInput" />
          <input type="text" placeholder="Password" className="registerInput" />
          <input
            type="text"
            placeholder="Confirm Password"
            className="registerInput"
          />

          <button className="registerButton">register</button>
          <div className="orLine">
            <div className="line"></div>
            <h1>OR</h1>
            <div className="line"></div>
          </div>
          <div className="extraBox">
            <img
              src="https://img.icons8.com/color/512/google-logo.png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=100&id=EWzVSK2hyV9H&format=png&color=000000"
              alt=""
            />
          </div>
          <div className="toRegister">
            <h2 className="mb-3">have account?</h2>
            <button className="toRegisterButton">
              <NavLink to="/Login" end>
                Login Here
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
