import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/" className="nav-link active">
          Profile
        </Link>
        <Link to="#" className="nav-link disable" onClick={(e) => e.preventDefault()}>
          Score
        </Link>
        <Link to="#" className="nav-link disable" onClick={(e) => e.preventDefault()}>
          Earn
        </Link>
        <Link to="#" className="nav-link disable" onClick={(e) => e.preventDefault()}>
          Health
        </Link>
        <Link to="/events" className="nav-link active">
          Events
        </Link>
        <Link to="#" className="nav-link disable" onClick={(e) => e.preventDefault()}>
          Wallet
        </Link>
      </nav>

      <div className="footer-links">
        <span>©</span>
        <a href="/">Privacy Policy</a>
        <span>•</span>
        <a href="/">Terms of Use</a>
        <span>•</span>
        <span>DAOS.SCIENCE</span>
      </div>
    </footer>
  );
};

export default Footer;
