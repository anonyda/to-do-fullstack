const Task = require('../model/taskModel')
const uniqid = require('uniqid');
class MongoAdapter{
    
    async getAllTasks(req, res){
        try{
            let tasks = await Task.find();
            res.status(200).json({
                message: 'Data fetched successfully.',
                data: [...tasks]
            });
        }catch(err){
            res.status(500).json({
                message: 'Server Error',
                error: err
            });
        }
        
       
    };
    
    async getTaskById(req, res){
        try{
            let foundTask = await Task.findOne({taskId: req.params.taskId});
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
    
        }catch(err){
            res.status(500).json({
                message: 'Server Error',
                error: err
            });
        }
    
    };
    
    async addTask(req, res){
        let { content, createdAt, updatedAt} = req.body;
        try{
            const newTask = await Task.create({
                taskId: uniqid(),
                content,
                createdAt,
                updatedAt,
                isComplete: false
            });
            res.status(200).json({
                message: 'Task created successfully.',
                data: newTask
            });
        }catch(err){
            res.status(500).json({
                message: 'Server Error',
                error: err
            });
        }  
    
    };
    
    async updateTask(req, res){
        try{
            let updatedTask = await Task.findOneAndUpdate({taskId: req.params.taskId}, {$set: req.body}, {returnDocument: 'after', returnOriginal: false});
            if(!updatedTask){
                return res.status(404).json({
                    message: 'No such task.',
                    error: 'Task not found.'
                });
            }
            res.status(200).json({
                message: 'Task updated successfully.',
                data: updatedTask
            });
    
        }catch(err){
            res.status(500).json({
                message: 'Server Error',
                error: err
            });
        }
    
    };
    
    async deleteTask(req, res){
        try{
            let updatedTask = await Task.findOneAndDelete({taskId: req.params.taskId});
            if(!updatedTask){
                return res.status(404).json({
                    message: 'No such task.',
                    error: 'Task not found.'
                });
            }
            res.status(204).json({
                message: 'Task Deleted successfully.',
            });
    
        }catch(err){
            res.status(500).json({
                message: 'Server Error',
                error: err
            });
        }
        
    
    }

    validateTask(req, res, next){
        next();
    }

    validateTaskID(req, res, next){
        next();
    }

    
}

module.exports = MongoAdapter;