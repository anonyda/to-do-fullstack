const FileAdapter = require('../adapters/fileAdapter');
const MongoAdapter = require('../adapters/mongoAdapter');
const dotenv = require('dotenv');

dotenv.config({path: "./config.env"});

class TaskController{
    constructor(type){
        switch(type.toLowerCase()){
            case 'database':
                this.adapter = new MongoAdapter();
                break;

            case 'file':
                this.adapter = new FileAdapter();
                break;
        }
    }
}

console.log(process.env.DATA_SOURCE)

const taskController = new TaskController(process.env.DATA_SOURCE);
module.exports = {
    getAllTasks: taskController.adapter.getAllTasks,
    getTaskById: taskController.adapter.getTaskById,
    addTask: taskController.adapter.addTask,
    updateTask: taskController.adapter.updateTask,
    deleteTask: taskController.adapter.deleteTask,
    validateTask: taskController.adapter.validateTask,
    validateTaskID: taskController.adapter.validateTaskID,
}

