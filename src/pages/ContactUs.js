// src/components/ContactUs.js

import React from 'react';
import '../styles/ContactUs.css';

function ContactUs() {
    return (
        <section className="contact-section">
            <h2>Contact us</h2>
            <div className="contact-container">
                <div className="contact-animation">
                <img src={`${process.env.PUBLIC_URL}/assets/eythor.png`} alt="Eythor Logo" className='logo' />                    <div className="sphere-animation"></div>
                </div>
                <form className="contact-form">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="What's your good name?" />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="What's your web address?" />

                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" placeholder="What do you want to say?" rows="4"></textarea>

                    <button type="submit" className="send-button">Send</button>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
