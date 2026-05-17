import React from 'react';
// 1. Import your logo from the assets folder. (Check your file extension!)
import myLogo from '../assets/logo.png'; 
import './Hero.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* 2. Replace the text div with an img tag using the imported variable */}
      <img src={myLogo} alt="Planet Creative World" className="logo-image" />
    </nav>
  );
};

export default Navbar;