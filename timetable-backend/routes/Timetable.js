// routes/timetable.js
const express = require('express');
const router = express.Router();
const Timetable = require('../models/Timetable');
const User = require('../models/user');

// Get all timetables (for HOD)
router.get('/', async (req, res) => {
  try {
    const timetables = await Timetable.find().populate('teacher');
    res.json(timetables);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Create or update a timetable (HOD)
router.post('/', async (req, res) => {
  const { teacherId, subject, class: className, time, day } = req.body;

  try {
    let timetable = await Timetable.findOne({ teacher: teacherId, day, time });
    if (timetable) {
      timetable.subject = subject;
      timetable.class = className;
      timetable.time = time;
      timetable.day = day;
      timetable = await timetable.save();
      res.json(timetable);
    } else {
      timetable = new Timetable({ teacher: teacherId, subject, class: className, time, day });
      await timetable.save();
      res.json(timetable);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
