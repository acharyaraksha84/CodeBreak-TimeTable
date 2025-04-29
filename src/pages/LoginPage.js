import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Mock credentials data
  const mockCredentials = {
    hod: { username: 'hod123', password: 'password' },
    teachers: ['faculty001', 'faculty002'],
    students: ['USN001', 'USN002'],
  };

  const handleLogin = () => {
    if (role === 'HOD' && id === mockCredentials.hod.username) {
      navigate('/hod'); // Redirect to HOD dashboard using navigate
    } else if (role === 'Teacher' && mockCredentials.teachers.includes(id)) {
      navigate('/teacher'); // Redirect to Teacher view using navigate
    } else if (role === 'Student' && mockCredentials.students.includes(id)) {
      navigate('/student'); // Redirect to Student view using navigate
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div>
        <label>Role: </label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="HOD">HOD</option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
      </div>
      <div>
        <label>{role} ID: </label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder={`Enter ${role} ID`}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
