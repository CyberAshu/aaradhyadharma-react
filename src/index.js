import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import LoginPage from './pages/LoginPage';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import EthicalHacking from './pages/EthicalHacking';
import PythonProject from './pages/PythonProject';
import EcommerceWebsite from './pages/EcommerceWebsite';
import UIUXDesign from './pages/UIUXDesign';
import Career from './pages/Career';
import Certificate from './pages/Certificate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/uiux-design" element={<UIUXDesign />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/ethical-hacking" element={<EthicalHacking />} />
        <Route path="/python-project" element={<PythonProject />} />
        <Route path="/ecommerce-website" element={<EcommerceWebsite />} />
        <Route path="/career" element={<Career />} />
        <Route path="/certificate" element={<Certificate />} />

  </Routes>
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
