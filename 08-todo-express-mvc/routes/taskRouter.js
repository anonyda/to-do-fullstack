
const express = require('express');

const { getAllTasks, getTaskById, addTask, validateTask, updateTask, validateTaskID, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.route('/').get(getAllTasks).post(validateTask,addTask);
router.route('/:taskId').get(getTaskById).put(validateTask, validateTaskID, updateTask).delete(validateTaskID, deleteTask);


module.exports = router;