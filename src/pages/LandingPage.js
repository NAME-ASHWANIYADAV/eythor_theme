import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header
        className="hero-section"
        style={{
          backgroundImage: `url(/assets/herobg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>Harness Peak Solar Performance with Eythor</h1>
        <p>
          Maximize Solar Efficiency with Eythor, the Ultimate Robotic Cleaning
          Solution
        </p>
        <button className="cta-btn">Contact Us</button>
      </header>

      {/* Solutions Section */}
      <section className="solutions">
        <h2>Which Solution is right for you?</h2>
        <div className="solution-options">
          <div className="solution-card">
            <img src="/assets/solar-panel-1.png" alt="Solution 1" />
            <h3>Solution 1</h3>
            <p>A brief description of the first solution, highlighting its key features.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="solution-card">
            <img src="/assets/solar-panel-1.png" alt="Solution 2" />
            <h3>Solution 2</h3>
            <p>A brief description of the second solution, focusing on its unique benefits.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Talk about features</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Feature 1</h3>
            <p>Detail about the first feature that makes this product special.</p>
          </div>
          <div className="feature-box">
            <h3>Feature 2</h3>
            <p>Insight into another amazing feature for better performance.</p>
          </div>
          <div className="feature-box">
            <h3>Feature 3</h3>
            <p>A benefit that users will find extremely helpful and valuable.</p>
          </div>
          <div className="feature-box">
            <h3>Feature 4</h3>
            <p>Detail about the fourth feature for enhanced usability.</p>
          </div>
          <div className="feature-box">
            <h3>Feature 5</h3>
            <p>A technical advantage ensuring optimal efficiency.</p>
          </div>
          <div className="feature-box">
            <h3>Feature 6</h3>
            <p>Details about the cost-saving features for users.</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h3>Our Supporting Partners</h3>
        <div className="partners-logos">
          <img src="/assets/dif.png" alt="Partner 1" />
          <img src="/assets/dtu.png" alt="Partner 2" />
          <img src="/assets/tihan.png" alt="Partner 3" />
          <img src="/assets/startupindia.png" alt="Partner 4" />
        </div>
      </section>

      {/* Contact Section */}
      <footer className="contact-form1">
  <div className="contact-container">
    <div className="contact-image">
      <img src="/assets/contact-image.png" alt="Contact Icon" />
    </div>
    <div className="contact-box">
      <h3>Get in Touch</h3>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="url" placeholder="Your Website (Optional)" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </div>
  </div>
</footer>


    </div>
  );
};

export default LandingPage;
