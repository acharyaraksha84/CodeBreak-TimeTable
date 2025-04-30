// src/pages/HODDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HODDashboard.css'; // Keep this for custom styles
import pic1 from '../images/pic1.jpg';

const HODDashboard = () => {
  return (
    <div className="hod-dashboard">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top px-5 py-3">
        <Link to="/" className="navbar-brand fw-bold fs-3 text-primary">Timely</Link>
        <div className="ms-auto d-flex gap-4 align-items-center">
          <Link to="/hod" className="nav-link fw-semibold">Home</Link>
          <Link to="/classes" className="nav-link fw-semibold">Classes</Link>
          <Link to="/labs" className="nav-link fw-semibold">Labs</Link> {/* Ensure this link is correct */}
          <Link to="/faculty" className="nav-link fw-semibold">Faculty</Link>
          <Link to="/dashboard" className="btn btn-primary px-4">Dashboard</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center justify-content-between px-5" style={{ height: '100vh', background: '#f0f8ff' }}>
        {/* Text Section */}
        <div className="text-section text-dark">
          <h1 className="display-4 fw-bold mb-3">
            Design, Assign, <br /> Smart Timetables
          </h1>
          <p className="lead text-muted mb-4" style={{ maxWidth: '600px' }}>
            Efficiently manage department schedules with smart dropdowns, automated assignment, and full control.
          </p>
          <Link to="/dashboard" className="btn btn-primary btn-lg">Get Started</Link>
        </div>

        {/* Image */}
        <div className="image-section">
          <img
            src={pic1}
            alt="Timetable Illustration"
            className="img-fluid"
            style={{ maxHeight: '450px' }}
          />
        </div>
      </div>
     </div>
  );
};

export default HODDashboard;
