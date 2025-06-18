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

module.exports = router;
