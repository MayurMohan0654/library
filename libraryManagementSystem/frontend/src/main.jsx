import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element = {<About/>}/>
      <Route path="/Login" element = {<Login/>}/>
      <Route path="/Register" element = {<Register/>}/>
      <Route path="/Contact" element = {<Contact/>}/>

    </Routes>
  </BrowserRouter>
);