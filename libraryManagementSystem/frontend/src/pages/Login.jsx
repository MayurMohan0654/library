import React from "react";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router";

import "./login.css";

function Login() {
  async function login() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('upass').value;

    const result = await fetch(`http://localhost:5000/fetch/${username}`);  
    const data = await result.json();
    // console.log(data);

    if(data.length == 0){
      alert("user not exists");
    }else{
      const pass = data[0].password;
  
      if(pass == password){
        alert("Login Sccessfully")
      }else{
        alert("password incorect")
      }   
    }


  }

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="loginMain">
          <h1 className="text-2xl font-bold mb-3">LOGIN</h1>
          <input type="text" placeholder="Username" id="uname" className="loginInput" />
          <input type="text" placeholder="Password" id="upass" className="loginInput" />
          <button className="loginButton" onClick={login}>Login</button>
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
            <h2 className="mb-3">Haven't sign in yet?</h2>
            <button className="toRegisterButton">
              <NavLink to="/Register" end>
                Register Here
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
