// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/eythor.png`} alt="Eythor Logo" />
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/" className="active-link">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/offerings">Our Products</Link></li>
          <li><Link to="/team">Team</Link></li>
        </ul>
      </nav>
      <div className="contact-btn-container">
        <Link to="/contact">
          <button className="contact-btn">contact us</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
