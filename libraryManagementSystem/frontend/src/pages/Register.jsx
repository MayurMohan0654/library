import React from "react";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router";
import "./register.css";

function Register() {

  async function exists(u){
    const result = await fetch(`http://localhost:5000/fetch/${u}`);
    const data = await result.text();

    if(data == "[]"){
      return 0;
    }else{
      return 1;
    }
  }

  async function registerUser() {
    let username = document.getElementById('uname').value;
    let password = document.getElementById('upass').value;
    let confirm = document.getElementById('cpass').value;

    const exist = await exists(username);

    if(exist == 1){
      alert("user allready exists.");
    }        
    else if(confirm != password){
      alert("passwords do not match");
    }else{
      const result = await fetch(`http://localhost:5000/add/${username}/${password}`);  
      alert("user registed sccessfully.")
      console.log(result);      
    }
  }
  

  return (
    <>
      <Navbar />
      <div className="register">
        <div className="registerMain">
          <h1 className="text-2xl font-bold mb-3">Register</h1>
          <input type="text" placeholder="Username" id="uname" className="registerInput" />
          <input type="text" placeholder="Password" id = "upass" className="registerInput" />
          <input type="text" placeholder="Confirm Password" id="cpass" className="registerInput" />

          <button className="registerButton" onClick={registerUser}>register</button>
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
