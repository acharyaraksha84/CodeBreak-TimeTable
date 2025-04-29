// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HODDashboard from './pages/HODDashboard';
import TeacherView from './pages/TeacherView';
import StudentView from './pages/StudentView';
<<<<<<< HEAD
import Classes from './pages/Classes'; 
import ViewTimetable from './pages/ViewTimetable';
=======
import FacultyPage from './pages/FacultyPage';
>>>>>>> 37630ca30392ebfa71c324a19daa787e93d1475f

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/hod" element={<HODDashboard />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/student" element={<StudentView />} />
<<<<<<< HEAD
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:className" element={<ViewTimetable />} />
=======
        <Route path="/faculty" element={<FacultyPage />} />
>>>>>>> 37630ca30392ebfa71c324a19daa787e93d1475f
      </Routes>
    </div>
  );
};

export default App;
