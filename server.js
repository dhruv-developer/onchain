const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Database Connected"))
.catch(err => console.log(err));

// Initialize Express App
const app = express();
app.use(express.json());

// Routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
