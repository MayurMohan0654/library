import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="introMain">
      <div className="introText">
        <p className="text-3xl">Get e-books for rent at Cheapest PRICE!!.</p>
        <p className="text-xl">dosen't want to read in screen?</p>
        <p>Read if offline  issue it in your nearby libraries.</p>
      </div>
      <div className="introCard">
        <div className="part1">
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
          <div className="slide slide4"></div>
        </div>
        <div className="part2 text-base">
          <p>Explore 1000+ Books All over the world</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
