import React from 'react';
import '../styles/Winnings.css';

const winnings = [
  { title: 'IMC 2023 Winner', description: 'We are thrilled to announce that our team has been recognized as the winner at the IMC 2023, a prestigious event celebrating innovation and excellence in technology. ', date: '1 May 2023', image: `${process.env.PUBLIC_URL}/assets/Winning1.png`, id: 1 },
  { title: 'Mobile Compress Pragati maidan 2023', description: 'Our project stood out for its groundbreaking approach, creativity, and impact, capturing the attention of industry leaders and experts. This achievement is a testament to our dedication, teamwork, and relentless pursuit of innovation. ', date: '1 May 2023', image: `${process.env.PUBLIC_URL}/assets/Winning2.png`, id: 2 },
];

const Winnings = () => {
  return (
    <section className="winnings-section">
      <h2>Our Winnings</h2>
      <div className="winnings-grid">
        {winnings.map((win) => (
          <div key={win.id} className="winning-card">
            <img src={win.image} alt={win.title} />
            <div className="winning-info">
              <h3>{win.title}</h3>
              <p>{win.description}</p>
              <small>{win.date}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Winnings;
