import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './HODDashboard.css'; // Custom styles
import pic1 from '../images/pic1.jpg';



const HODDashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-5 fixed-top">
        <Link to="/" className="navbar-brand fw-bold">Smart Timetable</Link>
        <div className="ms-auto d-flex gap-4">
          <Link to="/hod" className="nav-link">Home</Link>
          <Link to="/classes" className="nav-link">Classes</Link>
          <Link to="/labs" className="nav-link">Labs</Link>
          <Link to="/faculty" className="nav-link">Faculty</Link>
          <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container-fluid hero-section d-flex align-items-center justify-content-center">
        <div className="text-center text-white px-5 z-index-1">
          <h1 className="display-4 fw-bold">Design, Assign,<br /> Smart Timetables</h1>
          <p className="lead text-muted">
            Efficiently manage department schedules with smart dropdown controls and assignments.
          </p>
          <button className="btn btn-primary btn-lg mt-3">Get Started</button>
        </div>

        {/* Small Image in the Right Middle */}
        <div className="right-image-container">
        <img
          src={pic1}
          alt="Illustration"
          className="img-fluid"
          style={{ maxWidth: '150px' }}
        />

        </div>
      </div>
    </div>
  );
};

export default HODDashboard;
