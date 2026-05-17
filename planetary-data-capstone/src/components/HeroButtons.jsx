import React from 'react';
import './Hero.css';

const HeroButtons = () => {
  // The function that handles smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-buttons">
      <button 
        className="btn-primary" 
        onClick={() => scrollToSection('planets-section')}
      >
        Explore the Data
      </button>
      <button 
        className="btn-secondary" 
        onClick={() => scrollToSection('contact-section')}
      >
        Contact Us
      </button>
    </div>
  );
};

export default HeroButtons;