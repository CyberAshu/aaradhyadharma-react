import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import '../assets/css/Contact.css';

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
         <h2>Get in Touch</h2>
         <p>Have a project in mind? Let’s collaborate and bring your ideas to life.</p>
         <div className="contact-form">
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
      </section>
   );
};

export default Contact;
