
import { getTasks, createNewTask } from "./actions/domOperations.js";
import { displayDate } from "./utils/format.js";
// import '../styles/style.css';
// import '../image/favicon.ico';

let taskSubmitButton = document.getElementById('taskForm');
taskSubmitButton.onsubmit = createNewTask;

displayDate();
getTasks();