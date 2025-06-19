require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// built-in 'path' module to handle file paths
const path = require('path');
const cors = require('cors');

// Create an instance of an Express application
const app = express();

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/todos', require('./routes/todos'));

// Connect to MongoDB
const uri = process.env.NODE_ENV === 'production'
  ? process.env.MONGO_URI_PROD
  : process.env.MONGO_URI_LOCAL;

// Log the URI and the environment (for debugging purposes)
console.log(`Running in ${process.env.NODE_ENV} mode`);
console.log(`Connecting to MongoDB at: ${uri}`);

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
// Define a function to start the server
const startServer = () => {
  app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
};

// Export the server instance and startServer function so they can be used in other files
module.exports = { app , startServer };
