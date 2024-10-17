import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  const portfolioItems = [
    {
      category: "web",
      img: "../images/E-commerce.jpg",
      title: "E-commerce Platform",
      description:
        "Cutting-edge online shopping experience with custom features and secure transactions.",
    },
    {
      category: "software",
      img: "../images/Enterprise.jpg",
      title: "Enterprise Software Solution",
      description:
        "Robust enterprise-level solutions to streamline business processes and improve efficiency.",
    },
    {
      category: "mobile",
      img: "../images/Social.jpg",
      title: "Social Media App",
      description:
        "An interactive social platform to connect users globally with real-time features.",
    },
    {
      category: "web",
      img: "../images/Enterprise.jpg",
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website to showcase your personal or business projects.",
    },
    {
      category: "mobile",
      img: "../images/E-commerce.jpg",
      title: "Food Delivery App",
      description:
        "A seamless and intuitive food delivery mobile app for users to order from local restaurants.",
    },
    {
      category: "software",
      img: "../images/Enterprise.jpg",
      title: "CRM Software",
      description:
        "Advanced Customer Relationship Management system to manage customer data efficiently.",
    },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );


  return (
    <div className="home-container">


      {/* Slider Section */}

      <section className="slider-section">
        <Slider {...settings}>
          <div className="slide">
            <img src="./images/slide1.jpg" alt="Slide 1" />
            <div className="slide-caption">
              <h2>Website Designing & Development</h2>
              <p>Ancient Wisdom, Modern Solutions</p>
            </div>
          </div>
          <div className="slide">
            <img src="./images/slide2.jpg" alt="Slide 2" />
            <div className="slide-caption">
              <h2>Software Development</h2>
              <p>High Quality Custom Solutions</p>
              
            </div>
          </div>
          <div className="slide">
            <img src="./images/slide3.jpg" alt="Slide 3" />
            <div className="slide-caption">
              <h2>Mobile Application Development</h2>
              <p>Android & iOS Development</p>
            </div>
          </div>
        </Slider>
      </section>



   {/* Intro Section with 3D Elements and More Info */}
   <section className="intro-section">
      <div className="intro-content">
        <h1>Welcome to Aaradhyadharma Web Solutions</h1>
        <p>Blending ancient wisdom with modern technology to create future-ready digital solutions.</p>
        
        {/* Key Information Section */}
        <div className="info-cards">
          <div className="info-card">
            <img src="../images/vs-code.png" alt="3D Icon" />
            <h3>Innovative Solutions</h3>
            <p>We bring you the latest in web development technology.</p>
          </div>
          <div className="info-card">
            <img src="../images/python.png" alt="3D Icon" />
            <h3>Global Standards</h3>
            <p>Our services align with global digital trends and best practices.</p>
          </div>
          <div className="info-card">
            <img src="../images/github.png" alt="3D Icon" />
            <h3>Client Focused</h3>
            <p>Your vision, our mission—tailored to your needs.</p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <button className="cta-button">Explore Our Services</button>
      </div>
      
      {/* 3D Floating Elements */}
      <div className="floating-3d-elements">
        <img src="../images/3d-cube.png" alt="3D Cube" className="cube" />
        <img src="../images/3d-sphere.png" alt="3D Sphere" className="sphere" />
      </div>
    </section>


    
           {/* Services Section */}
<section className="services-section">
  <h2>Our Services</h2>
  <div className="services-grid">
    <div className="service">
      <img src="../images/Web.jpg" alt="Web Development" />
      <h3>Web Development</h3>
      <p>Creating dynamic, responsive websites tailored to your business needs.</p>
    </div>
    <div className="service">
      <img src="../images/Software.jpg" alt="Software Development" />
      <h3>Software Development</h3>
      <p>Delivering custom software solutions for business automation and optimization.</p>
    </div>
    <div className="service">
      <img src="../images/Mobile.jpg" alt="Mobile App Development" />
      <h3>Mobile App Development</h3>
      <p>Designing and developing apps for both iOS and Android platforms.</p>
    </div>
  </div>
</section>

{/* Portfolio Section */}
<section className="portfolio-section">
  <div className="container">
    <h2>Our Projects</h2>
    <div className="filter-buttons">
      <button
        data-filter="all"
        className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
        onClick={() => handleFilterClick("all")}
      >
        All
      </button>
      <button
        data-filter="web"
        className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
        onClick={() => handleFilterClick("web")}
      >
        Web Development
      </button>
      <button
        data-filter="mobile"
        className={`filter-btn ${activeFilter === "mobile" ? "active" : ""}`}
        onClick={() => handleFilterClick("mobile")}
      >
        Mobile Apps
      </button>
      <button
        data-filter="software"
        className={`filter-btn ${activeFilter === "software" ? "active" : ""}`}
        onClick={() => handleFilterClick("software")}
      >
        Software Solutions
      </button>
    </div>

    <div className="portfolio-grid">
      {filteredItems.map((item, index) => (
        <div className="portfolio-item" data-category={item.category} key={index}>
          <div className="image-wrapper">
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="tech-stack">Technologies: {item.techStack ? item.techStack.join(', ') : 'React + Django'}</p>

              <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="btn view-more">
                View Project
              </a>
              <a href={item.repoLink} target="_blank" rel="noopener noreferrer" className="btn github-repo">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

 

{/* Team Section */}
<section className="team-section">
  <h2>Meet Our Team</h2>
  <div className="team-grid">
    <div className="team-member">
      <img src="../images/ayush.png" alt="Ayush Sen" />
      <h3>Ayush Sen</h3>
      <p>Lead Developer</p>
      <p className="bio">Ayush is the brains behind the code, ensuring everything runs smoothly.</p>
    </div>
    <div className="team-member">
      <img src="./images/ashu.jpg" alt="Ashutosh Patidar" />
      <h3>Ashutosh Patidar</h3>
      <p>Project Manager</p>
      <p className="bio">Ashutosh ensures projects are delivered on time and meet the highest standards.</p>
    </div>
    <div className="team-member">
      <img src="./images/rahul.jpg" alt="Rahul Patidar" />
      <h3>Rahul Patidar</h3>
      <p>UX/UI Designer</p>
      <p className="bio">Rahul creates intuitive and beautiful user experiences.</p>
    </div>
  </div>
</section>


      {/* FAQ Section */}
<section className="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div className="faq">
    <div className="faq-item">
      <h3>What services do you offer?</h3>
      <p>We provide web development, mobile app development, software solutions, and more.</p>
    </div>
    <div className="faq-item">
      <h3>How can we contact you?</h3>
      <p>Reach us via our contact page or email at aaradhyadharmaitsolution@gmail.com.</p>
    </div>
    {/* Add more FAQ items similarly */}
  </div>
</section>
  </div>
  );
};

export default Home;
