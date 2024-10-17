import React, { useState } from 'react';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false); // State for mobile nav toggle
  const [solutionsDropdown, setSolutionsDropdown] = useState(false); // State for dropdown visibility

  // Toggle the navbar visibility on hamburger menu click
  const toggleNavbar = () => {
    setNavbarActive((prev) => !prev);
  };

  // Show dropdown on hover
  const handleMouseEnter = () => {
    setSolutionsDropdown(true);
  };

  // Hide dropdown when mouse leaves
  const handleMouseLeave = () => {
    setSolutionsDropdown(false);
  };

  return (
    <nav>
      <div className="top-nav">
        <div className="support">24/7 Support: +91 7489014432</div>
        <div className="logo">
          <img src={logo} alt="Aaradhyadharma Logo" />
        </div>
        <ul className="nav-buttons">
          <li className="button">
            <Link to="/career">Career</Link>
          </li>
          <li className="button">
            <Link to="/certificate">Certificate</Link>
          </li>
          <li className="profile-button">
            <Link to="/LoginPage">👤</Link>
          </li>
        </ul>

        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleNavbar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Main navigation for desktop and mobile */}
      <ul className={navbarActive ? "navbar-active" : "main-nav"}>
        <li>
          <Link to="/" onClick={() => setNavbarActive(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setNavbarActive(false)}>About Aaradhyadharma</Link>
        </li>

        {/* Dropdown with hover effect */}
        <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn">Web Solutions</button>
          {solutionsDropdown && (
            <div className="dropdown-content show" role="menu">
              <Link to="/uiux-design" onClick={() => setNavbarActive(false)}>UI/UX Design</Link>
              <Link to="/software-development" onClick={() => setNavbarActive(false)}>Software Development</Link>
              <Link to="/digital-marketing" onClick={() => setNavbarActive(false)}>Digital Marketing</Link>
              <Link to="/ethical-hacking" onClick={() => setNavbarActive(false)}>Ethical Hacking</Link>
              <Link to="/python-project" onClick={() => setNavbarActive(false)}>Python Project</Link>
              <Link to="/ecommerce-website" onClick={() => setNavbarActive(false)}>Ecommerce Website</Link>
            </div>
          )}
        </li>
        <li>
          <Link to="/contact" onClick={() => setNavbarActive(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
