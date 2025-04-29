// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Correct imports
import LoginPage from './pages/LoginPage';
import HODDashboard from './pages/HODDashboard';
import TeacherView from './pages/TeacherView';
import StudentView from './pages/StudentView';
import FacultyPage from './pages/FacultyPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/hod" element={<HODDashboard />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/student" element={<StudentView />} />
        <Route path="/faculty" element={<FacultyPage />} />
      </Routes>
    </div>
  );
};

export default App;