const mongoose = require('mongoose');

// Define a schema for the Todo item
const todoSchema = new mongoose.Schema(
  {
    // 'task' is a required string field representing the to-do item description
    task: {
      type: String,
      required: true  // This means the field must be provided when creating a new Todo
    },

    // 'status' is a string that can only be one of three allowed values
    status: {
      type: String,
      enum: ['todo', 'inprogress', 'done'], // Limits values to these options
      default: 'todo' // If not specified, default to 'todo'
    }
  },
  {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Create and export a Mongoose model named 'Todo' using the defined schema
// This will map to the 'todos' collection in MongoDB (pluralized automatically)
module.exports = mongoose.model('Todo', todoSchema);
