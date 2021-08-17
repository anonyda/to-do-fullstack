import { createModal } from "../utils/addModal.js";

const serverURL = 'https://todo-api-express.herokuapp.com/tasks'
// const serverURL = 'http://localhost:4000/tasks';

export const fetchAllTasks = async () => {
    try{
        let response = await fetch(serverURL);
        return await response.json(); 
    }catch(error){
        createModal('Server is down. Please try again later.', error);
    }
    
}

export const addTaskToServer = async (task) => {
    try{
        let response = await fetch(serverURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });
        return await response.json();
    }catch(error){
        createModal('Task could not be added since the server is down. Please try again later.', error);
    }
   
}

export const deleteTaskFromServer = async (taskId) => {
    try{
        let response = await fetch(`${serverURL}/${taskId}`, {
            method: 'DELETE',
        });
        if(response.status === 204){
            return true;
        }
        return await response.json();
    }catch(error){
        createModal('Task could not be deleted since the server is down. Please try again later.', error);
    }
    
}

export const updateTaskOnServer = async (taskId, task) => {
    try{

        let response = await fetch(`${serverURL}/${taskId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });
        return await response.json();
    }catch(error){
        createModal('Task could not be updated since the server is down. Please try again later.', error);
    }
}

