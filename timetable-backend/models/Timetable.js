// models/Timetable.js
const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subject: { type: String, required: true },
  class: { type: String, required: true },
  time: { type: String, required: true },
  day: { type: String, required: true },
});

const Timetable = mongoose.model('Timetable', timetableSchema);

module.exports = Timetable;
