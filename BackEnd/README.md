# To Do List Backend 

This project is a backend REST API that performs CRUD operations for a ToDo List. The backend is built using Node.js and Express. 
The data storage has two modes:
1. File Storage
2. Local MongoDB

## Installation

### Modes

Before installing this project, you need to have [Node.js](https://nodejs.dev/download/) on your machine.  
Fork or clone this repository, and run the following commands in the terminal at the root directory.

#### File Mode
If you're running the backend on the file mode, you will have your storage on your local disk storage.
All your tasks will be stored as an array under the ```/data/tasks.json``` file.

#### Database Mode
With the Database Mode, you will be able to perform CRUD Operations on the Local MongoDB database. You will have to install [MongoDB](https://www.mongodb.com/try/download/community) locally on your machine.
Run the ```mongod``` command on your terminal before starting the application.

#### Switching Modes
In the config.env file, you can change the ```DATA_SOURCE``` variable to either of the following options:
1. ```DATA_SOURCE = Database```
2. ```DATA_SOURCE = File```

Default mode is ```Database```

After you have configured the mode, you can run the following commands to start the backend server.

```bash
npm install
npm run start
```
These two commands will install all the dependencies for this project and run the app in the development mode. 

## Features
* Gets all tasks
* Gets a task by ID
* Updates a task
* Deletes a task



## API Endpoints

### Fetch the tasks

###  ```GET /tasks```

A request to this endpoint returns a response with all the tasks.

###  ```GET /tasks/taskId```
A request to this endpoint requires a Task ID to be passed in the URL. If such a task with the given Task ID exists, you get a response containing the task you requested for.  
If the task does not exist, you get the ```404``` status code. 

### Create New Task

### ```POST /tasks```
This endpoint requires a body to be passed along with the request. If a valid body is passed with the request, a new task will be created.  
If not, you get the ```400 Bad Request``` status code.  


**Sample Body**
```javascript
{
    "content": "Your task content goes here.",
    "createdAt": "Task creation date",
    "updatedAt": "Task updation date"
}
```
All these values are required to create a new Task.

### Update A Task

### ``` PUT /tasks/taskId```
This endpoint will modify an existing task if it exists. It requires a valid task ID for modification. An additional key ```isComplete``` is also required in the body, for updating the task completion status.    

**Sample Body**
```javascript
{
    "content": "Modified task content goes here.",
    "createdAt": "Task creation date",
    "updatedAt": "Task updation date",
    "isComplete": true/false
}
```

### Delete A Task

### ``` DELETE /tasks/taskId```
This endpoint will delete an existing task. It requires a valid task ID for deletion. If the task does not exist, the response contains ```404``` status code.   

## Additional Details

* Uses MVC Architecture
* Validates requests and detects malformed body
* Follows Javascript Adapter Pattern


## Directory Structure

```bash
.
├── app.js
├── server.js
├── config.env
├── package.json
├── README.md
├── adapters
│   ├── fileAdapter.js
│   └── mongoAdapter.js
├── controller
│   └── taskController.js
├── data
│   └── tasks.json
├── model
│   ├── taskConstructor.js
│   └── taskModel.js
└── routes
    └── taskRouter.js

```

## Try It Yourself
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/13174206-e9e34665-d623-4fb7-be38-499dde8cddde?action=collection%2Ffork&collection-url=entityId%3D13174206-e9e34665-d623-4fb7-be38-499dde8cddde%26entityType%3Dcollection%26workspaceId%3Df3c769ec-7032-4d9f-9b5a-b5fa49b429da)
