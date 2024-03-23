import React from "react";
import heroImg from "../../assets/hero-img.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <img src={heroImg} alt="" />
      </div>

      <div className="hero-text">
        <div className="deal">
          <h1 className="yellow">BIG SALE</h1>
          <h1 className="white">BIG DEAL</h1>
        </div>
        <div className="hero-offer">
          up to <span>50%</span> off
        </div>
      </div>
    </>
  );
};

export default Hero;
