import React from 'react';
import '../assets/css/Contact.css'

const Contact = () => {
  return (
    <section className="contact-section">
    <h2>Get in Touch</h2>
    <p>Have a project in mind? Let’s collaborate and bring your ideas to life.</p>
    <div className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <input type="text" placeholder="Subject" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button className="contact-button">Send Message</button>
    </div>
    </section>
  );
};

export default Contact;
