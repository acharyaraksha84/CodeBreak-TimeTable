// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HODDashboard from './pages/HODDashboard';
import TeacherView from './pages/TeacherView';
import StudentView from './pages/StudentView';
import Classes from './pages/Classes'; 
import ViewTimetable from './pages/ViewTimetable';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/hod" element={<HODDashboard />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/student" element={<StudentView />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:className" element={<ViewTimetable />} />
      </Routes>
    </div>
  );
};

export default App;
