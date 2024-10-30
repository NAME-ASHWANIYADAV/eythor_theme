// src/pages/Offerings.js
import React from 'react';
import '../styles/Offerings.css';
import { FaMobileAlt, FaCogs, FaBatteryHalf, FaBolt, FaThermometerHalf, FaLeaf } from 'react-icons/fa';

const Offerings = () => {
  const offerings = [
    {
      title: "Intelligent control",
      description: "Control web apps via mobile. Set automatic cleaning times and modes with ease, enhancing user convenience and efficiency.",
      icon: <FaMobileAlt className="icon purple" />,
    },
    {
      title: "IoT application",
      description: "Offers independent control, grouping, and automatic cleaning features, leveraging IoT technology for smarter, more efficient operations.",
      icon: <FaCogs className="icon yellow" />,
    },
    {
      title: "Solar power system",
      description: "Equipped with a self-charging solar power system for convenience and efficiency, ensuring operation lasts between 8-10 hours.",
      icon: <FaBatteryHalf className="icon green" />,
    },
    {
      title: "Strong adaptability",
      description: "Designed for compatibility with various arrangement arrays and power stations, offering strong adaptability across different setups.",
      icon: <FaBolt className="icon red" />,
    },
    {
      title: "Temperature sensing",
      description: "Monitor and optimize panel efficiency with real-time temperature tracking, ensuring optimal performance under various conditions.",
      icon: <FaThermometerHalf className="icon purple" />,
    },
    {
      title: "Dust sensing",
      description: "Automatically detects and responds to dust accumulation on solar panels, ensuring peak performance and longevity of the system.",
      icon: <FaLeaf className="icon yellow" />,
    },
  ];

  return (
    <div className="offerings-container">
      <h2>What we offer</h2>
      <div className="cards-container">
        {offerings.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="icon-container">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
