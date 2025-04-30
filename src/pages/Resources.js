// src/pages/Resources.js
import React from 'react';
import './Resources.css';

const Resources = () => (
  <div className="resources-page">
    <h2 className="resources-page-title">Explore Resources</h2>
    <div className="resource-section">
      <h3 className="resource-subject">Lecture Materials</h3>
      <ul className="resource-list">
        <li className="resource-item">
          <span className="resource-type">PDF:</span>
          <a href="/sample1.pdf" className="resource-link">Lecture Notes 1</a>
        </li>
        <li className="resource-item">
          <span className="resource-type">PDF:</span>
          <a href="/sample2.pdf" className="resource-link">AI Module</a>
        </li>
        <li className="resource-item">
          <span className="resource-type">PDF:</span>
          <a href="/sample3.pdf" className="resource-link">Machine Learning Guide</a>
        </li>
      </ul>
    </div>

    <div className="resource-section">
      <h3 className="resource-subject">Additional Links</h3>
      <ul className="resource-list">
        <li className="resource-item">
          <span className="resource-type">Link:</span>
          <a href="https://example.com/ai-forum" className="resource-link" target="_blank" rel="noopener noreferrer">AI Discussion Forum</a>
        </li>
        <li className="resource-item">
          <span className="resource-type">Link:</span>
          <a href="https://example.com/os-tutorials" className="resource-link" target="_blank" rel="noopener noreferrer">Operating Systems Tutorials</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Resources;
