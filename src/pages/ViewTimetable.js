import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { timetables } from '../data/timetables'; // Assuming timetables is an object where class names are keys
import './ViewTimetable.css'; // Import the CSS from the same folder

const ViewTimetable = () => {
  const { className } = useParams(); 
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    // Fetch timetable data for the specific class
    const classTimetable = timetables[className.toLowerCase()]; // Using lowercase to match the key

    if (classTimetable) {
      setTimetable(classTimetable);
    } else {
      setTimetable([]); // If no data found, set empty array to handle the case
    }
  }, [className]);

  if (timetable.length === 0) {
    return <div className="text-center">Timetable not available for {className}</div>;
  }

  const periods = ['Period 1', 'Period 2', 'Period 3']; // Adjust this according to the number of periods

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-primary fw-bold">{`${className} Timetable`}</h2>
      
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Day</th>
              {periods.map((period, index) => (
                <th key={index}>{period}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetable.map((entry, index) => (
              <tr key={index}>
                <td>{entry.day}</td>
                {periods.map((period, idx) => (
                  <td key={idx}>{entry[period.toLowerCase().replace(' ', '')] || '-'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTimetable;
