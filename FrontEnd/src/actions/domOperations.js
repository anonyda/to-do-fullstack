import { addTaskToServer, deleteTaskFromServer, fetchAllTasks, updateTaskOnServer } from "../apiCalls/taskAPI.js";
import { createTaskDiv } from "../components/task.js";
import { formatTime } from "../utils/format.js";
import { createModal } from "../utils/addModal.js"

let taskInput = document.getElementById('task');



export const getTasks = async () => {
    if(!window.navigator.onLine){
        // alert("You're offline. Please check your Internet Connection.");
        createModal('You are offline. Please check your Internet Connection.');
        return;
    }
    let tasks = await fetchAllTasks();
    if(tasks.data != null){
        tasks.data.forEach((task) => {
            createTaskDiv(task);
        })
    }
    
}

export const createNewTask = async (event) => {
    event.preventDefault();
    
    if(!window.navigator.onLine){
        // alert("You're offline. Please check your Internet Connection.");
        createModal('You are offline. Please check your Internet Connection.');
        return;
    }

    let task = {
        "content": taskInput.value,
        "createdAt": new Date(),
        "updatedAt": null
    }

    let taskData = await addTaskToServer(task);
    if(taskData.data){
        createTaskDiv(taskData.data)
    }
    taskInput.value = "";

}

export const deleteTask = async (event) => {
    if(!window.navigator.onLine){
        createModal('You are offline. Please check your Internet Connection.');
        return;
    }
    if(confirm('Do you really want to delete this task?')){
        let taskId = event.target.parentNode.id;
        let response = await deleteTaskFromServer(taskId);
        if(response.error){
            console.log(response);
            return;
        }
        document.getElementById(taskId).remove();
    }
}



export const updateTask = async (event) => {

    let selectedItem = event.target.parentNode;

    if(selectedItem.querySelector('.checkbox').checked){
        createModal("Task is already completed! Can't edit :(");
        return;
    }
    let taskData = selectedItem.querySelector('.task-data');
    event.target.style.display = 'none';
    event.target.nextElementSibling.style.display = 'unset';
    taskData.contentEditable = true;
    taskData.classList.add('box-shadow');
    

}

export const updateTaskContent = async (event) => {

    if(!window.navigator.onLine){
        createModal('You are offline. Please check your Internet Connection.');
        return;
    }

    let selectedItem = event.target.parentNode;
    let taskData = selectedItem.querySelector('.task-data');
    
    event.target.style.display = 'none';
    event.target.previousElementSibling.style.display = 'unset';
    taskData.contentEditable = false;
    taskData.classList.remove('box-shadow');

    if(selectedItem.isEdited){
        let task = {
            content: taskData.innerText,
            createdAt: selectedItem.querySelector('.date-time').innerText,
            updatedAt: new Date(),
            isComplete: selectedItem.querySelector('.checkbox').checked
        }
    
        await updateTaskOnServer(selectedItem.id, task);
        selectedItem.isEdited = false;
        selectedItem.querySelector('.date-time').innerText = formatTime(task.updatedAt);
    }

    

}

export const isCompletedTask = async (event) => {

    if(!window.navigator.onLine){
        createModal('You are offline. Please check your Internet Connection.');
        return;
    }
    let selectedItem = event.target.parentNode;

    let task = {
        content: selectedItem.querySelector('.task-data').innerText,
        createdAt: selectedItem.querySelector('.date-time').innerText,
        updatedAt: new Date(),
        isComplete: selectedItem.querySelector('.checkbox').checked
    }
    let response = await updateTaskOnServer(selectedItem.id, task);
    if(response.error){
        alert(error);
        return;
    }
    selectedItem.querySelector('.checkbox').checked
        ? event.target.nextElementSibling.classList.add('checked') 
        : event.target.nextElementSibling.classList.remove('checked')

    selectedItem.querySelector('.date-time').innerText = formatTime(task.updatedAt);
}

