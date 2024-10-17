import React from 'react';
import { useState ,useEffect} from 'react';
import '../assets/css/About.css'
const About = () => {
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem('reviews');
    return storedReviews ? JSON.parse(storedReviews) : [
      {
        text: "Aaradhyadharma Web Solutions exceeded our expectations! Their attention to detail and commitment to understanding our needs made them an invaluable partner.",
        client: "Michael Brown, CTO of InnovateX",
      },
      {
        text: "Working with Ayush and his team was a pleasure. They delivered on time and provided top-notch support throughout the project.",
        client: "Jane Smith, Founder of Creative Solutions",
      },
    ];
  });

  // New review input fields
  const [newReview, setNewReview] = useState({
    text: '',
    client: '',
  });

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ text: '', client: '' }); // Reset form
  };

  return (
    <>
     <section className="about-section">
  <div className="about-container">
    {/* Left Content - Text */}
    <div className="about-content">
      <h2>About Aaradhyadharma Web Solutions</h2>
      <p className='p-textcolor'> 
        Aaradhyadharma Web Solutions is a forward-thinking digital agency blending ancient wisdom with modern technology to deliver exceptional web, mobile, and software development services. We work closely with our clients to create tailored digital solutions that drive business growth and success.
      </p>
      <ul className="company-highlights">
        <li>⚡ Custom Web Development</li>
        <li>⚡ Cutting-edge Mobile Applications</li>
        <li>⚡ Full-Stack Expertise</li>
        <li>⚡ Client-Centric Approach</li>
      </ul>
      <button className="cta-button">Discover Our Work</button>
    </div>

    {/* Right Content - Founder Information */}
    <div className="founder-info-container">
      <div className="founder-image">
        <img src="../images/ayush.png" alt="Founder Ayush Sen" />
      </div>
      <div className="founder-info">
        <h3>Ayush Sen</h3>
        <p>Founder & Lead Designer, Aaradhyadharma Web Solutions</p>
        <p>
          With expertise in full-stack development and UI/UX design, I’ve built Aaradhyadharma to craft powerful, innovative digital experiences. My passion is turning ideas into reality, blending technology with creativity to meet the unique needs of every client.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses by delivering innovative and tailored digital solutions. At Aaradhyadharma Web Solutions, we focus on providing value, creativity, and quality to help our clients thrive in a rapidly evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2>Our Values</h2>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>We believe in transparency, honesty, and delivering what we promise.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>We constantly explore new ideas to keep our solutions cutting-edge.</p>
          </div>
          <div className="value-item">
            <h3>Collaboration</h3>
            <p>We work closely with our clients, ensuring their voice is heard at every stage.</p>
          </div>
          <div className="value-item">
            <h3>Excellence</h3>
            <p>We strive for perfection in every project, ensuring our clients receive top-tier solutions.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        {reviews.map((review, index) => (
          <div className="testimonial-item" key={index}>
            <p>"{review.text}"</p>
            <span>- {review.client}</span>
          </div>
        ))}

        {/* Review Submission Form */}
        <form className="add-review-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your review..."
            value={newReview.text}
            onChange={(e) =>
              setNewReview({ ...newReview, text: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Your name and position"
            value={newReview.client}
            onChange={(e) =>
              setNewReview({ ...newReview, client: e.target.value })
            }
            required
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Elevate Your Digital Presence?</h2>
          <p>Let’s work together to bring your vision to life. Contact us today to get started!</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>
    </>
  );
};

export default About;
