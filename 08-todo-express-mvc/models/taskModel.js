const uniqid = require('uniqid');

function Task({content, createdAt, updatedAt}){
    this.taskId = uniqid();
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isComplete = false;
}

module.exports = Task;