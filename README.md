# Full Stack To-Do List

This repository contains code for both the front end and the back end of the To-Do List application. You can navigate to the respective folders for their usage. 

## Modes of Operation
### 1. Live
The Front End and the Back End are individually hosted on Github Pages and Heroku respectively.  
Although, the backend hosted on Heroku is currently on Maintenance Mode. Please contact the owner of the repo for access.

### 2. Local Host
On the Localhost, you can run the backend on two modes 
1. File System
2. Local MongoDB

To know more about how to switch between the modes, [click here](https://github.com/anonyda/to-do-fullstack/tree/master/BackEnd#readme).


If you want to run this application on your machine, you can follow this guide.

#### Step 1:
Clone the repository.


```bash
git clone https://github.com/anonyda/to-do-fullstack.git
```

#### Step 2: 
Navigate to the backend folder, and run the application with the following steps:

```bash
cd BackEnd
npm run start
```
The default mode of operation is Database mode, i.e., all your data will be stored in MongoDB. You will have to have MongoDB running on your machine.
Run ```mongod``` in your terminal to start the mongo service.

To switch between the modes, [click here to know more](https://github.com/anonyda/to-do-fullstack/tree/master/BackEnd#readme).

#### Step 3:
The default URL for API Calls is set to the live server hosted on Heroku. You have to change it to Local Host. 

1. Open the FrontEnd folder in the text editor of your choice. 
2. Navigate to ```src/apiCalls/taskAPI.js``` 
3. Comment the ```const serverURL = 'https://todo-api-express.herokuapp.com/tasks'```
4. Uncomment ```// const serverURL = 'http://localhost:4000/tasks';```

Voila! Now you will be able to make API Calls via the Local Host.

#### Step 4: 
Open the ```index.html``` file in the FrontEnd directory with Live Server.  

### And, you're done!  
### Stay Busy 🙃🐝
