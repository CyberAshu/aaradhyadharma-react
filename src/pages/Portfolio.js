// src/pages/Portfolio.js
import React from 'react';

const Portfolio = () => {
  return (
    <div className="page-container">
      <h1>Our Portfolio</h1>
      <p>Take a look at some of our featured projects:</p>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 3</h3>
          <p>Description of Project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
