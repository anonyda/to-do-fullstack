const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskId: {
        type: String,
        unique: true,
        required: true
    },
    content: {
        type: String,
        required: [true, 'Content is required.']        
    },
    isComplete: {
        type: Boolean,
        required: true        
    },
    createdAt: {
        type: String,
        required: [true, 'Created At Time is required.']        
    },
    updatedAt: {
        type: String,      
    }

});

const Task = mongoose.model('Tasks', taskSchema);

module.exports = Task;
