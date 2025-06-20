// Import the Express framework
const express = require('express');

// Create a new router object
const router = express.Router();

// Import the Todo Mongoose model
const Todo = require('../models/Todo');

// ===========================
// GET all todos
// ===========================
router.get('/', async (req, res) => {
  // Fetch all todos from the database
  const todos = await Todo.find();
  // Send them as JSON response
  res.json(todos);
});

// ===========================
// POST a new todo
// ===========================
router.post('/', async (req, res) => {
  // Destructure task and status from the request body
  const { task, status } = req.body;

  // Create a new Todo document
  const newTodo = new Todo({ task, status });

  // Save the todo to the database
  await newTodo.save();

  // Send back the created todo with 201 status
  res.status(201).json(newTodo);
});

// ===========================
// PUT (Update) an existing todo
// ===========================
router.put('/:id', async (req, res) => {
  // Destructure updated task and status from request body
  const { task, status } = req.body;

  // Find the todo by ID and update it
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { task, status },
    { new: true } // Return the updated document
  );

  // Respond with the updated todo
  res.json(updated);
});

// ===========================
// DELETE a todo
// ===========================
router.delete('/:id', async (req, res) => {
  // Find the todo by ID and delete it
  await Todo.findByIdAndDelete(req.params.id);

  // Respond with a success message
  res.json({ message: 'Todo deleted' });
});

// Export the router to be used in other parts of the app
module.exports = router;
