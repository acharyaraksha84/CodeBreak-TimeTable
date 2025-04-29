// src/pages/StudentView.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import './StudentView.css';

const StudentView = () => {
  const location = useLocation();
  const { usn, role } = location.state || { usn: '', role: '' };

  return (
    <div className="student-container">
      <div className="student-info">
        <div className="usn-section-container">
            <p><strong>NAME :</strong>SANIYA</p>
            <p><strong>USN:</strong> {usn}</p>
            <p><strong>Section:</strong> 4A</p> {/* You can update this dynamically if needed */}
        </div>
      </div>

      <div className="student-options">
        <div className="option-card" style={{ backgroundColor: '#81c784' }}>
          <h2>Timetable</h2>
          
        </div>
        <div className="option-card" style={{ backgroundColor: '#81c784' }}>
          <h2>Assignments</h2>
         
        </div>
      </div>
    </div>
  );
};

export default StudentView;