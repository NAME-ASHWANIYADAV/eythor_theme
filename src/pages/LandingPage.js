// src/pages/LandingPage.js
import React from 'react';
import '../styles/LandingPage.css';
// import '../styles/Footer.css';

const LandingPage = () => {
  return (
    <div>
      <main className="main-content">
        {/* Background video */}
        <video autoPlay loop muted>
          <source src={`${process.env.PUBLIC_URL}/assets/landingvideo.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero section content */}
        <div className="hero-section">
          <h1>Harness Peak Solar Performance with Eythor</h1>
          <p>Maximize Solar Efficiency with Eythor, the Ultimate Robotic Cleaning Solution</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </main>

      {/* Footer content */}
      <footer className="footer">
        <p>Our Supporting Partners</p>
        <div className="partners-logos">
          <img src={`${process.env.PUBLIC_URL}/assets/tihan.png`} alt="Partner 1" />
          <img src={`${process.env.PUBLIC_URL}/assets/dtu.png`} alt="Partner 2" />
          <img src={`${process.env.PUBLIC_URL}/assets/startupindia.png`} alt="Partner 3" />
          <img src={`${process.env.PUBLIC_URL}/assets/dif.png`} alt="Partner 3" />

        </div>

      </footer>
    </div>
  );
};

export default LandingPage;
