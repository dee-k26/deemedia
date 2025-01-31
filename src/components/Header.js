import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="App-header">
      <h1>DeeMedia</h1>
      <nav>
        <Link to="/">Home</Link>
        <div 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="/shows">Shows ▼</Link>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/shows/the-fix">The Fix</Link>
              <Link to="/shows/the-bookkeeper">The Bookkeeper</Link>
              <Link to="/shows/tide">Tide</Link>
              <Link to="/shows/tidy">Tidy</Link>
            </div>
          )}
        </div>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
