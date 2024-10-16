import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Quick Links Section */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <div className="footer-links">
                        <a href="#">Homepage</a>
                        <a href="#">Company Overview</a>
                        <a href="#">Our Portfolio</a>
                        <a href="#">Our Packages</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>

                {/* Our Services Section */}
                <div className="footer-column">
                    <h3>Our Services</h3>
                    <div className="footer-links">
                        <a href="#">Website Designing</a>
                        <a href="#">Website Development</a>
                        <a href="#">Software Development</a>
                        <a href="#">Android Application</a>
                        <a href="#">Web Hosting Services</a>
                        <a href="#">Digital Marketing</a>
                    </div>
                </div>

                {/* e-Commerce Solution Section */}
                <div className="footer-column">
                    <h3>e-Commerce Solution</h3>
                    <div className="footer-links">
                        <a href="#">Magento Website</a>
                        <a href="#">e-Commerce Website</a>
                        <a href="#">Joomla Website</a>
                        <a href="#">Payment Gateway</a>
                        <a href="#">Web Portal Development</a>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="footer-column contact-column">
                    <h3>Aaradhyadharma IT Solution</h3>
                    <p>Indore, Madhya Pradesh, India</p>
                    <p>Phone: +91 7489014432</p>
                    <p>Email: <a href="#">aaradhyadharma@gmail.com</a></p>
                    <div className="footer-map"></div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>&copy; 2024 Aaradhyadharma IT Solutions. All rights reserved.</p>
                </div>
                <div className="footer-bottom-right">
                    <a href="#">Get a Quote</a>
                    <a href="#">Enquiry</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
