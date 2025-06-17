// Import the Express framework to build the web server
const express = require('express');

// Import the dotenv package to load environment variables from a .env file
require('dotenv').config();

// Import the built-in 'path' module to handle file paths
const path = require('path');

// Create an instance of an Express application
const server = express();

// Set the server's port to an environment variable or default to 3000
const PORT = process.env.PORT || 5000;

// Serve static files (like index.html, CSS, JS) from the 'public' directory
server.use(express.static(path.join(__dirname, '../public')));

// Define a function to start the server
const startServer = () => {
  // Start listening on the specified port and log a message when ready
  server.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
};

// Export the server instance and startServer function so they can be used in other files
module.exports = { server , startServer };
