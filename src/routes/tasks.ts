import {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks_controller';

import express, { Router } from 'express';

const router = express.Router();

// Убраны скобки после функций: getTask, updateTask, deleteTask
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default router;