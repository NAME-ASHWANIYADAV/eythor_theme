// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/assets/facebook-icon.png`} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/assets/twitter-icon.png`} alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/assets/instagram-icon.png`} alt="Instagram" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/assets/linkedin-icon.png`} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
