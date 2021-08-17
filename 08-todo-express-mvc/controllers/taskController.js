const fs = require('fs');
const path = require('path');
const Task = require('../models/taskModel');
const sendResponse = require('../utils/sendResponse');
const dataSource = path.join(__dirname, '..', 'data', 'tasks.json');
const Tasks = JSON.parse(fs.readFileSync(dataSource, 'utf-8'));

const getAllTasks = (req, res, next) => {
    res.status(200).json({
        message: 'data fetched',
        data: Tasks
    });
}

const getTaskById = (req, res, next) => {
    let foundTask = Tasks.find((task) => task.taskId === req.params.taskId);
    if(!foundTask){
        return sendResponse({
            res,
            statusCode: 404,
            message: 'ID not found',
            error: 'Send Valid ID'
        })
        
    }
    sendResponse({
        res,
        statusCode: 200,
        message: 'Task Found',
        data: foundTask
    })
}

const validateTask = (req, res, next) => {

    let validKeys = ['content', 'createdAt', 'updatedAt'];
    if(req.params.taskId){
        validKeys.push('isComplete');
    }

    
    if(!validKeys.every(key => {
        return Object.keys(req.body).includes(key);
    })){
        return sendResponse({
            res,
            statusCode: 400,
            message: 'Response Body not formed properly',
            error: 'parameters missing'
        })
    }

    next();
}


const addTask = (req, res, next) => {
    let newTask = new Task(req.body);
    Tasks.push(newTask);
    fs.writeFile(dataSource, JSON.stringify(Tasks, null, 2), (err) => {
        if(err){
            Tasks.pop();
            return sendResponse({
                res,
                statusCode: 500,
                message: 'File Write Failed',
                error: err
            })
        }
        sendResponse({
            res,
            statusCode: 200,
            message: 'Task Added Successfully',
            data: newTask
        })
    })
}

const validateTaskID = (req, res, next) => {
    let foundTaskIndex = Tasks.findIndex((task) => task.taskId === req.params.taskId);
    if(foundTaskIndex === -1){
        return sendResponse({
            res,
            statusCode: 404,
            message: 'ID not found',
            error: 'Send Valid ID'
        })
    }

    req.foundTaskIndex = foundTaskIndex;

    next();
}



const updateTask = (req, res, next) => {
    
    foundTaskIndex = req.foundTaskIndex;

    Object.keys(req.body).forEach((key) => {
        Tasks[foundTaskIndex][key] = req.body[key];
    });

    fs.writeFile(dataSource, JSON.stringify(Tasks, null, 2), (err) => {
        if(err){
            return res.status(500).json({
                message: 'File Write Failed',
                error: err
            });
        }
        res.status(200).json({
            message: 'Task Updated Successfully',
            data: Tasks[foundTaskIndex]
        });
    })

}

const deleteTask = (req, res, next) => {
    foundTaskIndex = req.foundTaskIndex;
    Tasks.splice(foundTaskIndex, 1);
    fs.writeFile(dataSource, JSON.stringify(Tasks, null, 2), (err) => {
        if(err){
            Tasks.pop();
            return sendResponse({res, statusCode: 500, message: 'Cannot delete task', error: err});
        }
        return sendResponse({res, statusCode: 204, message: 'Task Successfully Deleted'});
    })
}

module.exports = {
    getAllTasks,
    getTaskById,
    addTask,
    validateTask,
    updateTask,
    validateTaskID,
    deleteTask
};