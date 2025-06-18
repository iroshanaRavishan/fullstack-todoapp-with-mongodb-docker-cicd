const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST new todo
router.post('/', async (req, res) => {
  const { task, status } = req.body;
  const newTodo = new Todo({ task, status });
  await newTodo.save();
  res.status(201).json(newTodo);
});

// PUT update todo
router.put('/:id', async (req, res) => {
  const { task, status } = req.body;
  const updated = await Todo.findByIdAndUpdate(req.params.id, { task, status }, { new: true });
  res.json(updated);
});

module.exports = router;
