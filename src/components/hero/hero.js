import React from "react";
import "./hero.scss";
import Signup from "../signup/signup";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-sam"></div>
      </div>
      <div className="hero-headline">
        <div className="hero-headline-text">
          <p>The <span className="dark-blue">Right Choice</span></p>
          <p>for Texas</p>
        </div>
      </div>
      <div className="hero-signup">
        <Signup />
      </div>
    </div>
  );
}

export default Hero;
