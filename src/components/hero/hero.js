import React from 'react';
import './hero.scss';

function Hero() {
  return(
    <div className="hero">
      <div className="hero-left">
        <div className="hero-sam"></div>
      </div>
      <div className="hero-right">
        <div className="hero-headline"><p>The <span className="dark-blue">Right Choice</span></p><p>for Texas</p></div>
        <div className="hero-signup"></div>
      </div>
    </div>
  )
}

export default Hero;