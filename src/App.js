// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HODDashboard from './pages/HODDashboard';
import TeacherView from './pages/TeacherView';
import StudentView from './pages/StudentView';
import Classes from './pages/Classes';
import ViewTimetable from './pages/ViewTimetable';
import FacultyPage from './pages/FacultyPage';
import Labs from './pages/Labs'; // Import the Labs component

import Timetable from './pages/Timetable'; // Assuming you have this
import Assignments from './pages/Assignments'; // Assuming you have this
import Progress from './pages/Progress'; // Assuming you have this
import Resources from './pages/Resources';
import Attendance from './pages/Attendance';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/hod" element={<HODDashboard />} />
      <Route path="/teacher" element={<TeacherView />} />
      <Route path="/student" element={<StudentView />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/classes/:className" element={<ViewTimetable />} />
      <Route path="/faculty" element={<FacultyPage />} />
      <Route path="/labs" element={<Labs />} /> {/* Add this route */}

      {/* Student feature routes */}
      <Route path="/student/timetable" element={<Timetable />} />
      <Route path="/student/assignments" element={<Assignments />} />
      <Route path="/student/progress" element={<Progress />} />
      <Route path="/student/resources" element={<Resources />} />
      <Route path="/student/attendance" element={<Attendance />} />
    </Routes>
  );
};

export default App;
