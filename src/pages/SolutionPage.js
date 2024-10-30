import React from 'react';
import '../styles/SolutionPage.css';
import { FaCheckCircle } from 'react-icons/fa';

const SolutionPage = () => {
  return (
    <div className="solution-page">
      <div className="top-section">
        <img src={`${process.env.PUBLIC_URL}/assets/service-1.png`} alt="Eythor Logo" className="solar-image" />
        <div className="description">
          <h1>At Eythor, we are dedicated to sustainable energy solutions</h1>
          <p className="description-text">Advanced panel temperature sensing and innovative solutions for solar panel cleaning.</p>
          <div className="bullet-points">
            <div className="bullet-point">
              <FaCheckCircle className="icon" />
              <p>Advanced panel temperature sensing.</p>
            </div>
            <div className="bullet-point">
              <FaCheckCircle className="icon" />
              <p>Innovative dust sensing on solar panels.</p>
            </div>
            <div className="bullet-point">
              <FaCheckCircle className="icon" />
              <p>Efficient cleaning with vacuum technology.</p>
            </div>
          </div>
          <button className="learn-more">KNOW MORE</button>
        </div>
      </div>
      
      <div className="challenges-solution">
        <div className="challenges">
          <h3>The Challenges</h3>
          <p>30,000 liters of water consumed per MW...</p>
          <p>253+ hours of labor-intensive cleaning...</p>
          <p>16,240 MWh of production loss saved every month...</p>
        </div>
        <div className="solution">
          <h3>Our Solution</h3>
          <p>With a smart, dry cleaning automated solar panel...</p>
          <div className="sustainable-goals">
            <img src={`${process.env.PUBLIC_URL}/assets/goal6.png`} alt="Goal 6" />
            <img src={`${process.env.PUBLIC_URL}/assets/goal7.png`} alt="Goal 7" />
            <img src={`${process.env.PUBLIC_URL}/assets/goal8.png`} alt="Goal 8" />
            <img src={`${process.env.PUBLIC_URL}/assets/goal9.png`} alt="Goal 9" />
            <img src={`${process.env.PUBLIC_URL}/assets/goal11.png`} alt="Goal 11" />
            <img src={`${process.env.PUBLIC_URL}/assets/goal13.png`} alt="Goal 13" />
          </div>
          <img src={`${process.env.PUBLIC_URL}/assets/service-3.png`} alt="Service 3" className="solution-image" />
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;
