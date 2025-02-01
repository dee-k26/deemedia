import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle full mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="App-header">
      <h1>DeeMedia</h1>

      {/* Menu Button for Mobile */}
      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? "Close" : "Menu"}
      </button>

      {/* Navigation Links (Visible on Desktop, Hidden on Mobile) */}
      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>

        {/* Shows Dropdown (Appears on Hover for Desktop) */}
        {/* <div className="dropdown">
          <span className="dropdown-toggle">Shows</span>
          <div className="dropdown-menu">
            <Link to="/shows/the-fix" onClick={closeMenu}>The Fix</Link>
            <Link to="/shows/the-bookkeeper" onClick={closeMenu}>The Bookkeeper</Link>
            <Link to="/shows/tide" onClick={closeMenu}>Tide</Link>
            <Link to="/shows/tidy" onClick={closeMenu}>Tidy</Link>
          </div>
        </div> */}
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
