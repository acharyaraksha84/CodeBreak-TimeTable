// src/pages/Resources.js
import React from 'react';
import './Resources.css'; // Import the CSS file

const Resources = () => (
  <div className="resources-container">
    <h2 className="resources-title">Resources</h2>
    <ul className="resources-list">
      <li><a href="/sample1.pdf" className="resource-link">PDF: Lecture Notes 1</a></li>
      <li><a href="/sample2.pdf" className="resource-link">PDF: AI Module</a></li>
      <li><a href="/sample3.pdf" className="resource-link">PDF: Machine Learning Guide</a></li>
      {/* Add more resources as needed */}
    </ul>
  </div>
);

export default Resources;