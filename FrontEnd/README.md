# To Do List
This To Do List fetches data from a remote server hosted on Heroku. You can access your To Do List from anywhere, and make changes on the go. 
The page is styled using custom CSS.

## Live Link 
[https://anonyda.github.io/to-do/](https://anonyda.github.io/to-do/)

## The Logic
1. Add new Task
2. Strike Task if completed
3. Delete Task
4. Update Task Content
5. Save Tasks on Local Storage

## Rendering Tasks
When the browser loads for the first time, it sends a ```GET``` request to the server to fetch all tasks.
The response contains an array of existing tasks on the server, and the application renders all the tasks to the DOM. The ```createTaskDiv()``` function takes a task object as in input and renders it to the DOM by creating relevant DOM nodes.


## Adding Tasks
When you add a task, it creates a sends a ```POST``` request with the appropriate task content. If the task is successfully created, a response containing the created task is received.
The application then renders it to the DOM.


## Updating Tasks
Updating tasks includes both, striking the task when completed, and changing the task content. The application sends a ```PUT``` request to the server with the updates in the request body. These updates sent to the server, and in return we get a response whether our update was successful or not. If successful, the updated task is re-rendered on the DOM.

## Deleting Tasks
When you delete a task, a ```DELETE``` request is sent to the server with the appropriate TaskId. If the task is successfully deleted from the server, we get an ```204``` response, and the task is removed from the DOM.

### Concepts Applied
<li> DOM Manipulation with JavaScript
<li> Asynchronous Functions
<li> Integration with Remote Server
<li> ES6 Functions
<li> Git
