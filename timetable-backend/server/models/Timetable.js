// models/Timetable.js
const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  day: String, // e.g., 'Monday'
  slots: [
    {
      time: String,          // e.g., '09:00 - 10:00'
      subject: String,       // e.g., 'Math'
      teacher: String,       // e.g., 'teacherId'
      className: String,     // e.g., 'Class 1'
    }
  ]
});

module.exports = mongoose.model('Timetable', timetableSchema);
