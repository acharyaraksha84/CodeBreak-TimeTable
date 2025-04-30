// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const timetableRoutes = require('./routes/timetable');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/smart-timetable', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/timetable', timetableRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Smart Timetable Server is running!');
});

app.listen(PORT, () => {
  console.log(`🟢 Server running on http://localhost:${PORT}`);
});
