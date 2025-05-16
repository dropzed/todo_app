import express from 'express';
import {getAllTasks, createTask, updateTask, deleteTask, getOneTask} from '../controllers/tasks.js';

const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getOneTask).delete(deleteTask).patch(updateTask);



export default router;