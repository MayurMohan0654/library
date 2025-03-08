import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="introMain">
      <div className="introText">
        <p>Get e-books for rent at Cheapest PRICE!!.</p>
        <p>dosen't want to read in screen?</p>
        <p>Read if offline.... issue it inyour nearby libraries.</p>
      </div>
      <div className="introCard">
        <div className="part1">
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
          <div className="slide slide4"></div>
        </div>
        <div className="part2">
          <p>hello this is content in card below image</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
