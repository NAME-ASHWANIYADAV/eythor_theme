// src/pages/AboutPage.js
import React from 'react';
import '../styles/About.css';
import { FaCheckCircle } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="text-section">
          <h1>Smart Solar Panel Cleaning Robots</h1>
          <p className="description">
            At Eythor, we focus on developing innovative sustainable solutions to the world's climate crisis.
          </p>
          <div className="bullet-point">
            <FaCheckCircle className="icon" />
            <p>
              Enhances the solar power harnessing capacity of solar panels while reducing the need for manual power and water consumption for cleaning.
            </p>
          </div>
          <button className="learn-more">KNOW MORE</button>
        </div>
        <div className="circle-section">
          <div className="outer-circle">
            <div className="inner-circle">
              <img src={`${process.env.PUBLIC_URL}/assets/eythor.png`} alt="Eythor Logo" className="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
