import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>© 2025 DeeMedia | Built with React</p>
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-conditions">Terms & Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
