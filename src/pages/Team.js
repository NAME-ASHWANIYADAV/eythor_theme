import React from 'react';
import '../styles/Team.css';

const teamMembers = [
  { name: 'Naveen Kumar', role: 'Founder, CEO', image: `${process.env.PUBLIC_URL}/assets/naveen.png`, id: 1 },
  { name: 'Lucky Rana', role: 'Co-Founder, CTO', image: `${process.env.PUBLIC_URL}/assets/Lucky.png`, id: 2 },
  { name: 'Nitish Kumar', role: 'Software Developer', image: `${process.env.PUBLIC_URL}/assets/Nitish.png`, id: 3 },
  { name: 'Abhigyan Adarsh', role: 'Embedded circuit designer', image: `${process.env.PUBLIC_URL}/assets/Abhigyan.png`, id: 4 },
  { name: 'Divya Balchandani', role: 'Product Designer in CAD', image: `${process.env.PUBLIC_URL}/assets/Divya.png`, id: 5 },

];

const Team = () => {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-carousel">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={`${member.name}`} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <button className="connect-btn">Connect</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
