import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="App-header">
      <h1>DeeMedia</h1>

      {/* Menu Button for Mobile */}
      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? "Close" : "Menu"}
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>

        {/* Shows Dropdown */}
        <div 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-toggle">Shows ▼</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/shows/the-fix" onClick={closeMenu}>The Fix</Link>
              <Link to="/shows/the-bookkeeper" onClick={closeMenu}>The Bookkeeper</Link>
              <Link to="/shows/tide" onClick={closeMenu}>Tide</Link>
              <Link to="/shows/tidy" onClick={closeMenu}>Tidy</Link>
            </div>
          )}
        </div>

        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
