import React, { useState } from 'react';
import './TeacherView.css';

const TeacherView = () => {
  const teacherProfile = {
    name: 'Mrs. Jane Doe',
    email: 'jane.doe@example.com',
    department: 'Mathematics',
    bio: 'An experienced teacher in Mathematics with a passion for helping students succeed.',
  };

  const courses = [
    { subject: 'Math', class: 'Class 1', assignedTime: '9:00 AM' },
    { subject: 'Science', class: 'Class 2', assignedTime: '11:00 AM' },
  ];

  const assignments = [
    { title: 'Algebra Assignment', status: 'Pending' },
    { title: 'Physics Project', status: 'Completed' },
  ];

  const timetable = [
    { day: 'Monday', time: '9:00 AM', subject: 'Math', class: 'Class 1' },
    { day: 'Monday', time: '11:00 AM', subject: 'Science', class: 'Class 2' },
    { day: 'Tuesday', time: '10:00 AM', subject: 'English', class: 'Class 1' },
  ];

  const [leaveRequest, setLeaveRequest] = useState({
    reason: '',
    date: '',
  });

  const handleLeaveRequestChange = (e) => {
    setLeaveRequest({
      ...leaveRequest,
      [e.target.name]: e.target.value,
    });
  };

  const handleLeaveRequestSubmit = (e) => {
    e.preventDefault();
    console.log('Leave request submitted:', leaveRequest);
    setLeaveRequest({ reason: '', date: '' });
  };

  return (
    <div className="teacher-view">
      <h1 className="teacher-view__title">Teacher Dashboard</h1>

      {/* Profile Section */}
      <div className="profile teacher-view__section">
        <h2 className="teacher-view__subtitle">Profile</h2>
        <div className="profile__info">
          <p><strong>Name:</strong> {teacherProfile.name}</p>
          <p><strong>Email:</strong> {teacherProfile.email}</p>
          <p><strong>Department:</strong> {teacherProfile.department}</p>
          <p><strong>Bio:</strong> {teacherProfile.bio}</p>
        </div>
      </div>

      {/* Course Tracker Section */}
      <div className="course-tracker teacher-view__section">
        <h2 className="teacher-view__subtitle">Course Tracker</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Class</th>
              <th>Assigned Time</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.subject}</td>
                <td>{course.class}</td>
                <td>{course.assignedTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Assignment Tracker Section */}
      <div className="assignment-tracker teacher-view__section">
        <h2 className="teacher-view__subtitle">Assignment Tracker</h2>
        <ul>
          {assignments.map((assignment, index) => (
            <li key={index} className={assignment.status === 'Pending' ? 'pending' : 'completed'}>
              {assignment.title} - <span>{assignment.status}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Timetable Section */}
      <div className="timetable teacher-view__section">
        <h2 className="teacher-view__subtitle">Your Timetable</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Subject</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((entry, index) => (
              <tr key={index}>
                <td>{entry.day}</td>
                <td>{entry.time}</td>
                <td>{entry.subject}</td>
                <td>{entry.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Leave Request Form */}
      <div className="leave-request teacher-view__section">
        <h2 className="teacher-view__subtitle">Request Leave</h2>
        <form onSubmit={handleLeaveRequestSubmit}>
          <div className="leave-request__form-group">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={leaveRequest.date}
              onChange={handleLeaveRequestChange}
            />
          </div>
          <div className="leave-request__form-group">
            <label>Reason:</label>
            <textarea
              name="reason"
              value={leaveRequest.reason}
              onChange={handleLeaveRequestChange}
              required
            />
          </div>
          <button type="submit" className="leave-request__submit">Submit Leave Request</button>
        </form>
      </div>

      {/* Notifications Section */}
      <div className="notifications teacher-view__section">
        <h2 className="teacher-view__subtitle">Notifications</h2>
        <ul>
          <li>Upcoming exam schedule for Class 1 on Friday.</li>
          <li>Parent-teacher meeting on Thursday at 3:00 PM.</li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherView;
