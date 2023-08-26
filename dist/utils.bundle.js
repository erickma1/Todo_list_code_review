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

/***/ "./src/modules/taskFunctions.js":
/*!**************************************!*\
  !*** ./src/modules/taskFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateList: () => (/* binding */ updateList),\n/* harmony export */   updateTask: () => (/* binding */ updateTask)\n/* harmony export */ });\nfunction updateTask(liElement, todoList) {\r\n  const taskDesc = liElement.querySelector('.task-description').value;\r\n  const chkState = liElement.querySelector('.completed-checkbox').checked;\r\n  const taskIndex = liElement.value - 1;\r\n  todoList[taskIndex].description = taskDesc;\r\n  todoList[taskIndex].completed = chkState;\r\n  localStorage.setItem('todo-list', JSON.stringify(todoList));\r\n}\r\n\r\nfunction updateList() {\r\n  const todo = [];\r\n  const liElement = document.querySelectorAll('.draggable-item');\r\n  liElement.forEach((item, index) => {\r\n    const opj = {\r\n      index: index + 1,\r\n      description: item.querySelector('.task-description').value,\r\n      completed: item.querySelector('.completed-checkbox').checked,\r\n    };\r\n    todo.push(opj);\r\n  });\r\n  localStorage.setItem('todo-list', JSON.stringify(todo));\r\n}\n\n//# sourceURL=webpack://to_do_list/./src/modules/taskFunctions.js?");

/***/ }),

/***/ "./src/modules/ul.js":
/*!***************************!*\
  !*** ./src/modules/ul.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEventListeners)\n/* harmony export */ });\n/* harmony import */ var _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFunctions.js */ \"./src/modules/taskFunctions.js\");\n\r\n\r\nfunction addEventListeners(liElement, todoObj, todoList) {\r\n  const dscr = liElement.querySelector('.task-description');\r\n  const checkbox = liElement.querySelector('.completed-checkbox');\r\n  const trash = liElement.querySelector('.trash-icon');\r\n\r\n  checkbox.addEventListener('change', function () {\r\n    dscr.style.textDecoration = this.checked ? 'line-through' : 'none';\r\n    (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(liElement, todoList);\r\n  });\r\n\r\n  dscr.addEventListener('focus', function () {\r\n    liElement.style.backgroundColor = '#ffeea8';\r\n    this.style.cursor = 'text';\r\n  });\r\n\r\n  dscr.addEventListener('focusout', function () {\r\n    liElement.style.backgroundColor = 'transparent';\r\n    this.style.cursor = 'default';\r\n    if (this.value.trim() === '') {\r\n      todoObj.removeTask(liElement);\r\n    } else {\r\n      (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(liElement, todoList);\r\n    }\r\n  });\r\n\r\n  dscr.addEventListener('keydown', (e) => {\r\n    if (e.keyCode === 13) {\r\n      e.target.blur();\r\n    }\r\n  });\r\n\r\n  trash.addEventListener('click', () => {\r\n    todoObj.removeTask(liElement);\r\n  });\r\n}\n\n//# sourceURL=webpack://to_do_list/./src/modules/ul.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/ul.js");
/******/ 	
/******/ })()
;