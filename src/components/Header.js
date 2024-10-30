// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/assets/eythor.png`} alt="Eythor Logo" />
        Eythor
      </Link>
      <nav className="navbar">
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/offerings">Features</a></li>
          <li><a href="/solutions">Our Mission</a></li>
          <li><a href="/team">Team</a></li>
        </ul>
      </nav>
      <Link to="/contact">
        <button className="contact-btn">Contact Us</button>
      </Link>
    </header>
  );
};

export default Header;
