// src/pages/Attendance.js
import React from 'react';
import './Attendance.css';

const Attendance = () => (
  <div className="attendance-page">
    <h2 className="attendance-page-title">Your Attendance Record</h2>
    <div className="attendance-summary">
      <h3 className="summary-title">Subject-wise Summary</h3>
      <div className="subject-attendance">
        <span className="subject-name">AI:</span>
        <span className="missed">Missed: 2</span>
        <span className="percentage">Attendance: 92%</span>
      </div>
      <div className="subject-attendance">
        <span className="subject-name">OS:</span>
        <span className="missed">Missed: 1</span>
        <span className="percentage">Attendance: 95%</span>
      </div>
      <div className="subject-attendance">
        <span className="subject-name">CN:</span>
        <span className="missed">Missed: 3</span>
        <span className="percentage">Attendance: 90%</span>
      </div>
    </div>

    <div className="overall-attendance">
      <h3 className="overall-title">Overall Performance</h3>
      <p className="overall-percentage">Overall Attendance: 92.3%</p>
      <p className="note">Keep up the good work!</p>
    </div>
  </div>
);

export default Attendance;
