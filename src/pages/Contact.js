import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import '../assets/css/Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Template_id = "template_l930v43";
const Service_id = "service_jsz2bku";
const Public_key = "3KedthuFab4NkvMKN";

const Contact = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [formMessage, setMessage] = useState('');
   const [isSent, setIsSent] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   function handleSubmit(e) {
      e.preventDefault();
      setIsSent(false);
      setErrorMessage('');

      emailjs.send(
        Service_id,
        Template_id,
        {
          to_name: "Aaradhyadharma",
          from_name: name,
          message: formMessage,
          reply_to: email
        },
        Public_key
      )
      .then(() => {
        setIsSent(true);  // Set state to show success message
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Email sending error: ', error);
        setErrorMessage('Failed to send the message. Please try again later.');
      });
   }

   return (
      <section className="contact-section">
         <div className="contact-header">
            <h2>Contact Us</h2>
            <p>We’d love to hear from you. Feel free to reach out for any inquiries or collaborations.</p>
         </div>
         <div className="contact-content">
            <div className="contact-details">
               <h3>Get in Touch</h3>
               <p><strong>Email:</strong> info@aaradhyadharma.com</p>
               <p><strong>Phone:</strong> +91 7489014432</p>
               <p><strong>Address:</strong>Indore, Madhya Pradesh, India</p>
               <h3>Follow Us</h3>
               <div className="social-icons">
                  <a href="https://www.facebook.com/profile.php?id=61565481713795&mibextid=ZbWKwL"><i className="fab fa-facebook"></i></a>
                  <a href="https://x.com/MrAyushsen"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.linkedin.com/in/ayush-sen-b8a51b273"><i className="fab fa-linkedin"></i></a>
                  <a href="https://www.instagram.com/its_ayush_sen_/profilecard/?igsh=c2E1c3V3dmIxdmpj"><i className="fab fa-instagram"></i></a>
               </div>
            </div>
            <div className="contact-form">
               <h3>Send Us a Message</h3>
               <form onSubmit={handleSubmit}>
                  <input
                     type="text"
                     placeholder="Your Name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required
                  />
                  <input
                     type="email"
                     placeholder="Your Email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                  />
                  <textarea
                     placeholder="Your Message"
                     rows="5"
                     value={formMessage}
                     onChange={(e) => setMessage(e.target.value)}
                     required
                  ></textarea>
                  <button className="contact-button" type="submit">
                     Send Message
                  </button>
                  {isSent && <p className="success-message">Your message has been sent successfully!</p>}
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
