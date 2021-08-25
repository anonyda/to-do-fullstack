const express = require('express');

const {getAllTasks, addTask, getTaskById, updateTask, deleteTask, validateTask, validateTaskID} = require('../controller/taskController');

const router = express.Router();

router.route('/').get(getAllTasks).post(validateTask ,addTask);
router.route('/:taskId').get(getTaskById).put(validateTask, validateTaskID, updateTask).delete(validateTaskID, deleteTask);

// router.route('/:taskId').get(validateTaskID ,getTaskById).put(updateTask).delete(deleteTask);

module.exports = router;