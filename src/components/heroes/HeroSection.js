import React from "react";
import '../../App.css'
import Button from "./../button/Button";
import './HeroSection.css';
const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-3.mp4" autoPlay loop muted /> */}
      <h1>LET'S TRAVEL</h1>
      <p>Vamos qué estás esperando?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          EMPEZAR YA
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          VER TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
