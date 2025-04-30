// src/pages/Attendance.js
import React from 'react';
import './Attendance.css'; // Import the CSS file

const Attendance = () => (
  <div className="attendance-container">
    <h2 className="attendance-title">Attendance Summary</h2>
    <div className="attendance-details">
      <div className="attendance-subject">
        <strong>AI:</strong>
        <span>Classes Missed: 2</span>
        <span>Attendance: 92%</span>
      </div>
      <div className="attendance-subject">
        <strong>OS:</strong>
        <span>Classes Missed: 1</span>
        <span>Attendance: 95%</span>
      </div>
      <div className="attendance-subject">
        <strong>CN:</strong>
        <span>Classes Missed: 3</span>
        <span>Attendance: 90%</span>
      </div>
      {/* You can add more detailed attendance information here if needed */}
    </div>
  </div>
);

export default Attendance;
