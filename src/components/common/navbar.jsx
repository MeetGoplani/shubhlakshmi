import React, { useState } from 'react';
import "../css/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handlePitchClick = () => {
    alert("PITCH TO US button clicked!");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="logo-link">
            <div className="logo-text">
              <span className="logo-sharpp">Sharrp</span>
              <span className="logo-ventures">Ventures</span>
            </div>
          </a>
        </div>

        {/* mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation links */}
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li><a href="/about">About</a></li>
            <li className="dropdown">
              <a href="/portfolio">Portfolio <span className="arrow">▼</span></a>
              <ul className="dropdown-menu">
                <li><a href="/portfolio/tab1">Public Portfolio</a></li>
                <li><a href="/portfolio/tab2">Private Portfolio</a></li>
                <li><a href="/portfolio/tab3">Funds and Incubators</a></li>
              </ul>
            </li>
            <li><a href="/team">Team</a></li>
            <li><a href="/sharpp-ecosystem">Sharrp Ecosystem</a></li>
            <li><a href="/media">Media</a></li>
            <li><a href="/careers">Careers</a></li>
            <li className="mobile-pitch-button-container">
              <button className="pitch-button mobile-pitch-button" onClick={handlePitchClick}>
                PITCH TO US <span className="arrow-icon">↗</span>
              </button>
            </li>
          </ul>
        </div>

        
        <div className="navbar-right desktop-only">
          <button className="pitch-button" onClick={handlePitchClick}>
            PITCH TO US <span className="arrow-icon">↗</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
