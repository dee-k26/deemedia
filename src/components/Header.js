import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo192.png"; // Import logo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle full mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="App-header">
      <div className="logo-container">
      <img src="/logo192.png" alt="DeeMedia Logo" className="logo" />
        <h1>DeeMedia</h1>
      </div>

      {/* Menu Button for Mobile */}
      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? "Close" : "Menu"}
      </button>

      {/* Navigation Links (Visible on Desktop, Hidden on Mobile) */}
      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>

      
         <div className="dropdown">
          <Link to="/shows" className="dropdown-toggle" onClick={closeMenu}>
            Shows
          </Link>
          <div className="dropdown-menu">
            <Link to="/shows/the-fix" onClick={closeMenu}>The Fix</Link>
            <Link to="/shows/the-bookkeeper" onClick={closeMenu}>The Bookkeeper</Link>
            <Link to="/shows/tide" onClick={closeMenu}>Tide</Link>
            <Link to="/shows/tidy" onClick={closeMenu}>Tidy</Link>
          </div>
        </div>

        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
