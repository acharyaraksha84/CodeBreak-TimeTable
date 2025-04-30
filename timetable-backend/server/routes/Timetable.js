// routes/timetable.js
const express = require('express');
const router = express.Router();
const Timetable = require('../Timetable');

// Middleware for auth (optional: implement as needed)
const verifyToken = require('../middleware/verifyToken');
const verifyRole = require('../middleware/verifyRole');

// GET timetable (for TeacherView and StudentView)
router.get('/', async (req, res) => {
  try {
    const timetable = await Timetable.find();
    res.json(timetable);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: HOD updates the timetable
router.put('/update', verifyToken, verifyRole(['HOD']), async (req, res) => {
  try {
    const { updatedTimetable } = req.body;

    await Timetable.deleteMany(); // Clear old data
    await Timetable.insertMany(updatedTimetable); // Save new timetable

    res.json({ message: 'Timetable updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
