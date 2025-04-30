// src/pages/StudentView.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentView.css'; // Import the CSS file

const StudentView = () => {
  const navigate = useNavigate();

  const name = "Saniya";
  const usn = "4SF21AI017";
  const section = "4A";

  const cards = [
    { title: "Timetable", path: "/student/timetable", className: "card hoverable" },
    { title: "Assignments", path: "/student/assignments", className: "card hoverable" },
    { title: "Progress", path: "/student/progress", className: "card hoverable" },
    { title: "Resources", path: "/student/resources", className: "card hoverable" },
    { title: "Attendance", path: "/student/attendance", className: "card hoverable" },
  ];

  return (
    <div className="student-container">
      <div className="header">
        <h1 className="text-3xl font-bold">Welcome, {name}</h1> {/* You might want to style these in CSS */}
        <p className="text-lg">USN: {usn} | Section: {section}</p> {/* You might want to style these in CSS */}
      </div>

      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => navigate(card.path)}
            className={card.className}
          >
            <h2 className="text-xl font-semibold text-center">{card.title}</h2> {/* You might want to style these in CSS */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentView;
