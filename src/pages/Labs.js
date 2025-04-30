// src/pages/Labs.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Labs.css'; // Import the CSS for styling

const Labs = () => {
  return (
    <div className="labs-container">
      <h2 className="labs-title">Our Laboratories</h2>
      <div className="labs-grid">
        <Link to="/labs/chemistry" className="lab-box chemistry-lab">
          <h3>Chemistry Lab</h3>
        </Link>
        <Link to="/labs/computer" className="lab-box computer-lab">
          <h3>Computer Lab</h3>
        </Link>
        <Link to="/labs/physics" className="lab-box physics-lab">
          <h3>Physics Lab</h3>
        </Link>
        {/* You can add more lab boxes here */}
      </div>
      {/* Navigation back to HOD Dashboard */}
      <div className="back-to-dashboard">
        <Link to="/hod" className="btn btn-secondary">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default Labs;
