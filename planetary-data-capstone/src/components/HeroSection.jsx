import React from 'react';
import Navbar from './Navbar';
import HeroButtons from './HeroButtons';
// 1. Import your planet image
import planetImage from '../assets/planet.png'; 
import './Hero.css';

const HeroSection = () => {
  return (
    <header className="hero-container">
      {/* Left Column */}
      <div className="hero-left">
        <Navbar />
        <div className="hero-text-area">
          <h1>Explore Our Solar System Through Data</h1>
          <p>Understand the planets not just by name, but by measurable facts. From size and mass to gravity and density, this page breaks down the solar system in a clear, data-driven way.</p>
          <HeroButtons />
        </div>
      </div>

      {/* Right Column */}
      <div className="hero-right">
        {/* 2. Replace the video with the imported image variable */}
        <img src={planetImage} alt="Abstract Blue Planet" className="hero-media" />
      </div>
    </header>
  );
};

export default HeroSection;