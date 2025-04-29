import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Don't forget the CSS import

const LoginPage = () => {
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const mockCredentials = {
    hod: { username: 'hod123', password: 'password' },
    teachers: ['faculty001', 'faculty002'],
    students: ['USN001', 'USN002'],
  };

  const handleLogin = () => {
    if (role === 'HOD' && id === mockCredentials.hod.username) {
      navigate('/hod');
    } else if (role === 'Teacher' && mockCredentials.teachers.includes(id)) {
      navigate('/teacher');
    } else if (role === 'Student' && mockCredentials.students.includes(id)) {
      navigate('/student');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="login-container">
      
      {/* Left side - TIMELY */}
      <div className="login-left">
        <h1>TIMELY</h1>
      </div>

      {/* Right side - Form */}
      <div className="login-right">
        <h2>Login</h2>
        <div className="form-group">
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="HOD">HOD</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div className="form-group">
          <label>{role ? `${role} ID` : 'ID'}</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder={`Enter ${role || 'User'} ID`}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>

    </div>
  );
};

export default LoginPage;
