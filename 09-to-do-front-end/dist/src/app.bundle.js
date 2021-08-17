/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://09-to-do-front-end/./styles/style.css?");

/***/ }),

/***/ "./src/actions/domOperations.js":
/*!**************************************!*\
  !*** ./src/actions/domOperations.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTasks\": () => (/* binding */ getTasks),\n/* harmony export */   \"createNewTask\": () => (/* binding */ createNewTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"updateTask\": () => (/* binding */ updateTask),\n/* harmony export */   \"updateTaskContent\": () => (/* binding */ updateTaskContent),\n/* harmony export */   \"isCompletedTask\": () => (/* binding */ isCompletedTask)\n/* harmony export */ });\n/* harmony import */ var _apiCalls_taskAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apiCalls/taskAPI.js */ \"./src/apiCalls/taskAPI.js\");\n/* harmony import */ var _components_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/task.js */ \"./src/components/task.js\");\n/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/format.js */ \"./src/utils/format.js\");\n/* harmony import */ var _utils_addModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/addModal.js */ \"./src/utils/addModal.js\");\n\n\n\n\n\nlet taskInput = document.getElementById('task');\n\n\n\nconst getTasks = async () => {\n    if(!window.navigator.onLine){\n        // alert(\"You're offline. Please check your Internet Connection.\");\n        (0,_utils_addModal_js__WEBPACK_IMPORTED_MODULE_3__.createModal)('You are offline. Please check your Internet Connection.');\n        return;\n    }\n    let tasks = await (0,_apiCalls_taskAPI_js__WEBPACK_IMPORTED_MODULE_0__.fetchAllTasks)();\n    if(tasks.data != null){\n        tasks.data.forEach((task) => {\n            (0,_components_task_js__WEBPACK_IMPORTED_MODULE_1__.createTaskDiv)(task);\n        })\n    }\n    \n}\n\nconst createNewTask = async (event) => {\n    event.preventDefault();\n    \n    if(!window.navigator.onLine){\n        // alert(\"You're offline. Please check your Internet Connection.\");\n        (0,_utils_addModal_js__WEBPACK_IMPORTED_MODULE_3__.createModal)('You are offline. Please check your Internet Connection.');\n        return;\n    }\n\n    let task = {\n        \"content\": taskInput.value,\n        \"createdAt\": new Date(),\n        \"updatedAt\": null\n    }\n\n    let taskData = await (0,_apiCalls_taskAPI_js__WEBPACK_IMPORTED_MODULE_0__.addTaskToServer)(task);\n    if(taskData.data){\n        (0,_components_task_js__WEBPACK_IMPORTED_MODULE_1__.createTaskDiv)(taskData.data)\n    }\n    taskInput.value = \"\";\n\n}\n\nconst deleteTask = async (event) => {\n    if(!window.navigator.onLine){\n        (0,_utils_addModal_js__WEBPACK_IMPORTED_MODULE_3__.createModal)('You are offline. Please check your Internet Connection.');\n        return;\n    }\n    if(confirm('Do you really want to delete this task?')){\n        let taskId = event.target.parentNode.id;\n        let response = await (0,_apiCalls_taskAPI_js__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromServer)(taskId);\n        if(response.error){\n            console.log(response);\n            return;\n        }\n        document.getElementById(taskId).remove();\n    }\n}\n\n\n\nconst updateTask = async (event) => {\n\n    let selectedItem = event.target.parentNode;\n\n    if(selectedItem.querySelector('.checkbox').checked){\n        (0,_utils_addModal_js__WEBPACK_IMPORTED_MODULE_3__.createModal)(\"Task is already completed! Can't edit :(\");\n        return;\n    }\n    let taskData = selectedItem.querySelector('.task-data');\n    event.target.style.display = 'none';\n    event.target.nextElementSibling.style.display = 'unset';\n    taskData.contentEditable = true;\n    taskData.classList.add('box-shadow');\n    \n\n}\n\nconst updateTaskContent = async (event) => {\n\n    if(!window.navigator.onLine){\n        (0,_utils_addModal_js__WEBPACK_IMPORTED_MODULE_3__.createModal)('You are offline. Please check your Internet Connection.');\n        return;\n    }\n\n    let selectedItem = event.target.parentNode;\n    let taskData = selectedItem.querySelector('.task-data');\n    \n    event.target.style.display = 'none';\n    event.target.previousElementSibling.style.display = 'unset';\n    taskData.contentEditable = false;\n    taskData.classList.remove('box-shadow');\n\n    if(selectedItem.isEdited){\n        let task = {\n            content: taskData.innerText,\n            createdAt: selectedItem.querySelector('.date-time').innerText,\n            updatedAt: new Date(),\n            isComplete: selectedItem.querySelector('.checkbox').checked\n        }\n    \n        await (0,_apiCalls_taskAPI_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskOnServer)(selectedItem.id, task);\n        selectedItem.isEdited = false;\n        selectedItem.querySelector('.date-time').innerText = (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_2__.formatTime)(task.updatedAt);\n    }\n\n    \n\n}\n\nconst isCompletedTask = async (event) => {\n\n    if(!window.navigator.onLine){\n        (0,_utils_addModal_js__WEBPACK_IMPORTED_MODULE_3__.createModal)('You are offline. Please check your Internet Connection.');\n        return;\n    }\n    let selectedItem = event.target.parentNode;\n\n    let task = {\n        content: selectedItem.querySelector('.task-data').innerText,\n        createdAt: selectedItem.querySelector('.date-time').innerText,\n        updatedAt: new Date(),\n        isComplete: selectedItem.querySelector('.checkbox').checked\n    }\n    let response = await (0,_apiCalls_taskAPI_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskOnServer)(selectedItem.id, task);\n    if(response.error){\n        alert(error);\n        return;\n    }\n    selectedItem.querySelector('.checkbox').checked\n        ? event.target.nextElementSibling.classList.add('checked') \n        : event.target.nextElementSibling.classList.remove('checked')\n\n    selectedItem.querySelector('.date-time').innerText = (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_2__.formatTime)(task.updatedAt);\n}\n\n\n\n//# sourceURL=webpack://09-to-do-front-end/./src/actions/domOperations.js?");

/***/ }),

/***/ "./src/apiCalls/taskAPI.js":
/*!*********************************!*\
  !*** ./src/apiCalls/taskAPI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAllTasks\": () => (/* binding */ fetchAllTasks),\n/* harmony export */   \"addTaskToServer\": () => (/* binding */ addTaskToServer),\n/* harmony export */   \"deleteTaskFromServer\": () => (/* binding */ deleteTaskFromServer),\n/* harmony export */   \"updateTaskOnServer\": () => (/* binding */ updateTaskOnServer)\n/* harmony export */ });\n/* harmony import */ var _utils_addModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/addModal.js */ \"./src/utils/addModal.js\");\n\n\nconst serverURL = 'https://todo-api-express.herokuapp.com/tasks'\n// const serverURL = 'http://localhost:4000/tasks';\n\nconst fetchAllTasks = async () => {\n    try{\n        let response = await fetch(serverURL);\n        return await response.json(); \n    }catch(error){\n        (0,_utils_addModal_js__WEBPACK_IMPORTED_MODULE_0__.createModal)('Server is down. Please try again later.', error);\n    }\n    \n}\n\nconst addTaskToServer = async (task) => {\n    try{\n        let response = await fetch(serverURL, {\n            method: 'POST',\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(task)\n        });\n        return await response.json();\n    }catch(error){\n        (0,_utils_addModal_js__WEBPACK_IMPORTED_MODULE_0__.createModal)('Task could not be added since the server is down. Please try again later.', error);\n    }\n   \n}\n\nconst deleteTaskFromServer = async (taskId) => {\n    try{\n        let response = await fetch(`${serverURL}/${taskId}`, {\n            method: 'DELETE',\n        });\n        if(response.status === 204){\n            return true;\n        }\n        return await response.json();\n    }catch(error){\n        (0,_utils_addModal_js__WEBPACK_IMPORTED_MODULE_0__.createModal)('Task could not be deleted since the server is down. Please try again later.', error);\n    }\n    \n}\n\nconst updateTaskOnServer = async (taskId, task) => {\n    try{\n\n        let response = await fetch(`${serverURL}/${taskId}`, {\n            method: 'PUT',\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(task)\n        });\n        return await response.json();\n    }catch(error){\n        (0,_utils_addModal_js__WEBPACK_IMPORTED_MODULE_0__.createModal)('Task could not be updated since the server is down. Please try again later.', error);\n    }\n}\n\n\n\n//# sourceURL=webpack://09-to-do-front-end/./src/apiCalls/taskAPI.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_domOperations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/domOperations.js */ \"./src/actions/domOperations.js\");\n/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/format.js */ \"./src/utils/format.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _image_favicon_ico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/favicon.ico */ \"./image/favicon.ico\");\n\n\n\n\n\n\nlet taskSubmitButton = document.getElementById('taskForm');\ntaskSubmitButton.onsubmit = _actions_domOperations_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask;\n\n(0,_utils_format_js__WEBPACK_IMPORTED_MODULE_1__.displayDate)();\n(0,_actions_domOperations_js__WEBPACK_IMPORTED_MODULE_0__.getTasks)();\n\n//# sourceURL=webpack://09-to-do-front-end/./src/app.js?");

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskDiv\": () => (/* binding */ createTaskDiv)\n/* harmony export */ });\n/* harmony import */ var _actions_domOperations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/domOperations.js */ \"./src/actions/domOperations.js\");\n/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/format.js */ \"./src/utils/format.js\");\n\n\n\nlet taskList = document.getElementById('task-list');\n\n\nconst createTaskDiv = (task) => {\n\n    let taskDiv = document.createElement('div');\n    taskDiv.isEdited = false;\n    taskDiv.id = task.taskId;\n    taskDiv.classList.add('task');\n\n    let isCompletedBox = document.createElement('input');\n    isCompletedBox.type = 'checkbox';\n    isCompletedBox.classList.add('checkbox');\n    isCompletedBox.addEventListener('change', _actions_domOperations_js__WEBPACK_IMPORTED_MODULE_0__.isCompletedTask);\n    \n\n    let taskData = document.createElement('span');\n    taskData.classList.add('textarea');\n    taskData.role = 'textbox';\n    taskData.contentEditable = false;\n    taskData.innerText = task.content;\n    taskData.spellcheck = false;\n    taskData.addEventListener('DOMSubtreeModified', (event) => {\n        taskDiv.isEdited = true;\n    })\n    \n    taskData.classList.add('task-data')\n\n    if(task.isComplete){\n        taskData.classList.add('checked');\n        isCompletedBox.checked = true;\n    }\n\n    let taskLog = document.createElement('p');\n\n    let updateCheck = document.createElement('i');\n    updateCheck.classList.add('deleteBtn', 'fas', 'fa-check');\n    updateCheck.style.display = 'none';\n    updateCheck.addEventListener('click', _actions_domOperations_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskContent);\n\n    let updateBtn = document.createElement('i');\n    updateBtn.classList.add('fas', 'fa-edit', 'deleteBtn');\n    updateBtn.addEventListener('click', _actions_domOperations_js__WEBPACK_IMPORTED_MODULE_0__.updateTask);\n\n    let deleteBtn = document.createElement('i');\n    deleteBtn.classList.add('deleteBtn', 'fas', 'fa-trash');\n    deleteBtn.addEventListener('click', _actions_domOperations_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask);\n\n    taskData.value = task.data;\n    if(task.updatedAt){\n        taskLog.innerText = (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_1__.formatTime)(new Date(task.updatedAt));\n    }else{\n        taskLog.innerText = (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_1__.formatTime)(new Date(task.createdAt));\n    }\n    taskLog.classList.add('date-time');\n\n    taskDiv.appendChild(isCompletedBox);\n    taskDiv.appendChild(taskData);\n    taskDiv.appendChild(taskLog);\n    taskDiv.appendChild(updateBtn);\n    taskDiv.appendChild(updateCheck);\n    \n    taskDiv.appendChild(deleteBtn);\n    taskList.appendChild(taskDiv);\n}\n\n\n//# sourceURL=webpack://09-to-do-front-end/./src/components/task.js?");

/***/ }),

/***/ "./src/utils/addModal.js":
/*!*******************************!*\
  !*** ./src/utils/addModal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createModal\": () => (/* binding */ createModal)\n/* harmony export */ });\n\n\nconst createModal = (message, error = \"\") => {\n    let modalContainer = document.createElement('div');\n    modalContainer.classList.add('modal-container');\n    modalContainer.id = 'modal_container';\n\n    let modalDiv = document.createElement('div');\n    modalDiv.classList.add('modal');\n\n    let heading = document.createElement('h1');\n    heading.innerText = \"Something went wrong.\";\n\n    let modalContent = document.createElement('p');\n    modalContent.innerText = message;\n\n    let errorContent = document.createElement('p');\n    errorContent.classList.add('small-text');\n    errorContent.innerText = error;\n\n    let confirmButton = document.createElement('button');\n    confirmButton.classList.add('button');\n    confirmButton.innerText = 'Got It';\n    confirmButton.addEventListener('click', ()=> {\n        document.querySelector('.modal-container').remove();\n    })\n\n    modalDiv.appendChild(heading);\n    modalDiv.appendChild(modalContent);\n    modalDiv.appendChild(errorContent);\n    modalDiv.appendChild(confirmButton);\n\n    modalContainer.appendChild(modalDiv);\n\n    document.querySelector('body').appendChild(modalContainer);\n    \n}\n\n//# sourceURL=webpack://09-to-do-front-end/./src/utils/addModal.js?");

/***/ }),

/***/ "./src/utils/format.js":
/*!*****************************!*\
  !*** ./src/utils/format.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatTime\": () => (/* binding */ formatTime),\n/* harmony export */   \"displayDate\": () => (/* binding */ displayDate)\n/* harmony export */ });\n\n\nconst formatTime = (date) =>{\n    let formattedTime = `${date.getHours()}:${date.getMinutes()}`\n    return formattedTime;\n}\n\nconst displayDate = () => {\n    let n =  new Date();\n    let y = n.getFullYear();\n    let m = n.getMonth() + 1;\n    let d = n.getDate();\n    document.getElementById(\"date\").innerText = d + \"/\" + m + \"/\" + y;\n}\n\n//# sourceURL=webpack://09-to-do-front-end/./src/utils/format.js?");

/***/ }),

/***/ "./image/favicon.ico":
/*!***************************!*\
  !*** ./image/favicon.ico ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c944a3b5ca28984d1700.ico\";\n\n//# sourceURL=webpack://09-to-do-front-end/./image/favicon.ico?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;