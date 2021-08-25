const fs = require('fs');
const path = require('path');
const Task = require('../model/taskConstructor');
const dataSource = path.join(__dirname, '..', 'data', 'tasks.json');

const Tasks = JSON.parse(fs.readFileSync(dataSource, 'utf-8'));

class FileAdapter{
    getAllTasks(req, res, next){
        res.status(200).json({
            message: 'Data Fetched',
            data: Tasks
        });
    }
    
    getTaskById(req, res, next){
        let foundTask = Tasks.find((task) => task.taskId === req.params.taskId);
        if(!foundTask){
            return res.status(404).json({
                message: 'No such task.',
                error: 'Task not found.'
            });
            
        }
        res.status(200).json({
            message: 'Task Found',
            data: foundTask
        });
    }
    
    validateTask(req, res, next){
    
        let validKeys = ['content', 'createdAt', 'updatedAt'];
        if(req.params.taskId){
            validKeys.push('isComplete');
        }
    
        
        if(!validKeys.every(key => {
            return Object.keys(req.body).includes(key);
        })){
            return res.status(400).json({
                message: 'Request Body not formed properly.',
                error: 'Bad Request'
            });
        }
    
        next();
    }
    
    
    addTask(req, res, next){
        let newTask = new Task(req.body);
        Tasks.push(newTask);
        fs.writeFile(dataSource, JSON.stringify(Tasks, null, 2), (err) => {
            if(err){
                Tasks.pop();
                return res.status(500).json({
                    message: 'File Write Failed',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Task created successfully.',
                data: newTask
            });
        })
    }
    
    validateTaskID(req, res, next){
        let foundTaskIndex = Tasks.findIndex((task) => task.taskId === req.params.taskId);
        if(foundTaskIndex === -1){
            return res.status(404).json({
                message: 'No such task.',
                error: 'Task not found.'
            });
        }
    
        req.foundTaskIndex = foundTaskIndex;
    
        next();
    }
    
    
    
    updateTask(req, res, next){
        
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
    
    deleteTask(req, res, next){
        foundTaskIndex = req.foundTaskIndex;
        Tasks.splice(foundTaskIndex, 1);
        fs.writeFile(dataSource, JSON.stringify(Tasks, null, 2), (err) => {
            if(err){
                Tasks.pop();
                return res.status(500).json({
                    message: 'Cannot Delete Task.',
                    
                });
            }
            return res.status(204).json({
                message: 'Task Deleted Successfully',
            });
        })
    }
}

module.exports = FileAdapter;