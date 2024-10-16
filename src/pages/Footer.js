import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../assets/css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Quick Links Section */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <div className="footer-links">
                        <Link to="/">Homepage</Link>
                        <Link to="/about">Company Overview</Link>
                        <Link to="/portfolio">Our Portfolio</Link>
                        <Link to="/services">Our Packages</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>

                {/* Our Services Section */}
                <div className="footer-column">
                    <h3>Our Services</h3>
                    <div className="footer-links">
                        <Link to="/uiux-design">Website Designing</Link>
                        <Link to="/software-development">Website Development</Link>
                        <Link to="/software-development">Software Development</Link>
                        <Link to="/ecommerce-website">Android Application</Link>
                        <Link to="#">Web Hosting Services</Link>
                        <Link to="/digital-marketing">Digital Marketing</Link>
                    </div>
                </div>

                {/* e-Commerce Solution Section */}
                <div className="footer-column">
                    <h3>e-Commerce Solution</h3>
                    <div className="footer-links">
                        <Link to="/ecommerce-website">Magento Website</Link>
                        <Link to="/ecommerce-website">e-Commerce Website</Link>
                        <Link to="#">Joomla Website</Link>
                        <Link to="#">Payment Gateway</Link>
                        <Link to="#">Web Portal Development</Link>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="footer-column contact-column">
                    <h3>Aaradhyadharma IT Solution</h3>
                    <p>Indore, Madhya Pradesh, India</p>
                    <p>Phone: +91 7489014432</p>
                    <p>Email: <a href="mailto:aaradhyadharma@gmail.com">aaradhyadharma@gmail.com</a></p>
                    <div className="footer-map"></div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>&copy; 2024 Aaradhyadharma IT Solutions. All rights reserved.</p>
                </div>
                <div className="footer-bottom-right">
                    <Link to="#">Get a Quote</Link>
                    <Link to="#">Enquiry</Link>
                    <Link to="#">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
