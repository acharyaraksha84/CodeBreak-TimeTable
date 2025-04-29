import React, { useState } from 'react';
import './HODDashboard.css'; // You can reuse styles from this or add your own
import './TeacherView.css'; // Create and customize this file for specific styles

function TeacherView() {
  const [availability, setAvailability] = useState({});
  const [leaveReason, setLeaveReason] = useState('');
  const [assignments, setAssignments] = useState([]);
  const [courseProgress, setCourseProgress] = useState({
    'Mathematics': 60,
    'Physics': 40,
    'Computer Science': 80,
  });

  const handleAvailabilityChange = (day, isAvailable) => {
    setAvailability(prev => ({ ...prev, [day]: isAvailable }));
  };

  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    alert(`Leave Requested: ${leaveReason}`);
    setLeaveReason('');
  };

  const handleAssignmentAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const dueDate = e.target.dueDate.value;
    setAssignments([...assignments, { title, dueDate }]);
    e.target.reset();
  };

  return (
    <div className="teacher-dashboard">
      <h1 className="header">Teacher Dashboard</h1>

      {/* Timetable Section */}
      <section className="section">
        <h2>Weekly Timetable</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Day</th>
              <th>9:00 - 10:00</th>
              <th>10:00 - 11:00</th>
              <th>11:00 - 12:00</th>
              <th>1:00 - 2:00</th>
              <th>2:00 - 3:00</th>
            </tr>
          </thead>
          <tbody>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
              <tr key={day}>
                <td>{day}</td>
                <td>Math</td>
                <td>Physics</td>
                <td>CS</td>
                <td>Free</td>
                <td>Lab</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Availability Selection */}
      <section className="section">
        <h2>Availability</h2>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
          <div key={day}>
            <label>
              <input
                type="checkbox"
                checked={availability[day] || false}
                onChange={(e) => handleAvailabilityChange(day, e.target.checked)}
              />
              Available on {day}
            </label>
          </div>
        ))}
      </section>

      {/* Leave Request Form */}
      <section className="section">
        <h2>Request Leave</h2>
        <form onSubmit={handleLeaveSubmit}>
          <textarea
            placeholder="Reason for leave"
            value={leaveReason}
            onChange={(e) => setLeaveReason(e.target.value)}
          />
          <button type="submit">Submit Request</button>
        </form>
      </section>

      {/* Notifications Section */}
      <section className="section">
        <h2>Notifications</h2>
        <ul>
          <li>Department meeting on Friday at 3 PM.</li>
          <li>Submit grades by end of the week.</li>
        </ul>
      </section>

      {/* Assignment Tracker */}
      <section className="section">
        <h2>Assignments</h2>
        <form onSubmit={handleAssignmentAdd}>
          <input name="title" placeholder="Assignment Title" required />
          <input type="date" name="dueDate" required />
          <button type="submit">Add Assignment</button>
        </form>
        <ul>
          {assignments.map((assignment, idx) => (
            <li key={idx}>{assignment.title} - Due: {assignment.dueDate}</li>
          ))}
        </ul>
      </section>

      {/* Course Progress Tracker */}
      <section className="section">
        <h2>Course Progress</h2>
        {Object.entries(courseProgress).map(([course, progress]) => (
          <div key={course}>
            <strong>{course}</strong>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}>
                {progress}%
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Profile Section */}
      <section className="section">
        <h2>Profile</h2>
        <p><strong>Name:</strong> Prof. John Doe</p>
        <p><strong>Department:</strong> Computer Science</p>
        <p><strong>Email:</strong> john.doe@example.edu</p>
      </section>
    </div>
  );
}

export default TeacherView;
