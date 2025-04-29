import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const facultyData = [
  {
    name: "Dr. Priya Sharma",
    designation: "Professor",
    subjects: ["DBMS", "Operating Systems"],
    classes: ["4th Sem A", "6th Sem B"]
  },
  {
    name: "Mr. Ravi Kumar",
    designation: "Assistant Professor",
    subjects: ["Data Structures", "Algorithms"],
    classes: ["2nd Sem C", "4th Sem A"]
  },
  {
    name: "Dr. Anjali Rao",
    designation: "Lecturer",
    subjects: ["OOP", "Web Technologies"],
    classes: ["6th Sem A", "4th Sem B"]
  },
  {
    name: "Mr. Suresh Mehta",
    designation: "Senior Lecturer",
    subjects: ["Computer Networks", "Cybersecurity"],
    classes: ["5th Sem B", "6th Sem A"]
  },
  {
    name: "Mr. Suresh Mehta",
    designation: "Senior Lecturer",
    subjects: ["Introduction to Artificial Intelligence", "Cybersecurity"],
    classes: ["4th Sem B", "7th Sem A"]
  },
  {
    name: "Mr. Ramesh Gupta",
    designation: "Senior Lecturer",
    subjects: ["Neural Networks", "Machine Learning"],
    classes: ["3rd Sem B", "6th Sem A"]
  },
  {
    name: "Mr. Rachana Sharma",
    designation: "Senior Lecturer",
    subjects: ["Linear Algebra for ML", "R Programming"],
    classes: ["5th Sem B", "6th Sem A"]
  },
  {
    name: "Mr. Rachana Sharma",
    designation: "Senior Lecturer",
    subjects: ["AI for Robotics", "Computer Vision"],
    classes: ["4th Sem B", "7th Sem A"]
  },
  // Add more as needed
];

const FacultyPage = () => {
  return (
    <div className="w-100 min-vh-100 bg-light py-4 px-5">
      <h2 className="mb-4 text-center fw-bold">Faculty Details</h2>
      <div className="row gx-4 gy-4">
        {facultyData.map((faculty, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm rounded-4 p-3 text-center">
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="fw-bold">{faculty.name}</h5>
                <h6 className="text-muted">{faculty.designation}</h6>
                <p><strong>Subjects:</strong><br />{faculty.subjects.join(', ')}</p>
                <p><strong>Classes:</strong><br />{faculty.classes.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;
