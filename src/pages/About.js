import React from 'react';
import '../styles/About.css';

const AboutPage = () => {
  return (
    <div className="about-container">
     <header className="about-header">
  <img src="/assets/about-banner.png" alt="About Us Banner" className="about-header-image" />
  <div className="about-header-content">
    <h1>About Us</h1>
    <p>Renewable energy is the future</p>
  </div>
</header>



      <section className="about-story">
        <h2>Our Journey        </h2>
        <p>
          We’re an IIT Delhi alumni startup. Our team comprises of highly-motivated people educated as
          engineers and practicing as problem solvers. We think sustainability in every aspect of life
          is critical for the conscious life on this planet to further enhance and grow. With that
          vision in mind, Greenleap Robotics is out there to play its part in moving the world
          towards a sustainable energy future. With our advanced robotic solar panel cleaning
          solutions, we're transforming the way large-scale solar plants are cleaned and maintained.
          It will further help in improving the position of solar as one of the mainstream sources of
          energy.
        </p>
      </section>

      <section className="team-section">
  <h2>Meet the Professionals</h2>
  <div className="team-grid">
    <div className="team-member">
      <div className="avatar">
        <img src="/assets/naveen.png" alt="Team Member 1" />
      </div>
      <h3>Naveen Kumar</h3>
      <p>Founder</p>
    </div>
    <div className="team-member">
      <div className="avatar">
        <img src="/assets/rahul.png" alt="Team Member 2" />
      </div>
      <h3>Rahul Sharma</h3>
      <p>Co-Founder</p>
    </div>
    <div className="team-member">
      <div className="avatar">
        <img src="/assets/divya.png" alt="Team Member 3" />
      </div>
      <h3>Priya Singh</h3>
      <p>CTO</p>
    </div>
    <div className="team-member">
      <div className="avatar">
        <img src="/assets/ravi.png" alt="Team Member 4" />
      </div>
      <h3>Ravi Mehta</h3>
      <p>Engineer</p>
    </div>
    <div className="team-member">
      <div className="avatar">
        <img src="/assets/dif.png" alt="Team Member 5" />
      </div>
      <h3>Neha Gupta</h3>
      <p>Designer</p>
    </div>
    <div className="team-member">
      <div className="avatar">
        <img src="/assets/dif.png" alt="Team Member 6" />
      </div>
      <h3>Ankit Verma</h3>
      <p>Product Manager</p>
    </div>
  </div>
</section>


      <footer className="partners">
        <h3>Our Trusted Partners</h3>
        <div className="partners-logos">
          <img src="/assets/dif.png" alt="Partner 1" />
          <img src="/assets/dtu.png" alt="Partner 2" />
          <img src="/assets/tihan.png" alt="Partner 3" />
          <img src="/assets/startupindia.png" alt="Partner 4" />
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
