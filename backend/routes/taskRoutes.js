const express = require('express');
const { body } = require('express-validator');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Validation rules
const taskValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('status').isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status'),
  body('priority').isIn(['low', 'medium', 'high']).withMessage('Invalid priority'),
];

router.use(protect); // All routes below are protected

router.route('/')
  .get(getTasks)
  .post(taskValidation, createTask);

router.route('/:id')
  .put(taskValidation, updateTask)
  .delete(deleteTask);

module.exports = router;