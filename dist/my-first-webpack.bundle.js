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

/***/ "./assets/scripts/header.js":
/*!**********************************!*\
  !*** ./assets/scripts/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_header\": () => (/* binding */ create_header)\n/* harmony export */ });\nfunction create_header(){\r\n    let header = document.createElement(\"header\");\r\n\r\n    let title = document.createElement(\"div\");\r\n    title.className = \"title_content\";\r\n\r\n    let p_title  = document.createElement(\"p\")\r\n    p_title.className = \"title\";\r\n    p_title.innerHTML = \"Виртуальная клавиатура window\";\r\n    \r\n\r\n    document.body.append(header);\r\n    header.append(title);\r\n    title.append(p_title);\r\n}\n\n//# sourceURL=webpack://virtual-keybord/./assets/scripts/header.js?");

/***/ }),

/***/ "./assets/scripts/index.js":
/*!*********************************!*\
  !*** ./assets/scripts/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./assets/scripts/header.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./assets/scripts/main.js\");\n/* harmony import */ var _keybord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keybord */ \"./assets/scripts/keybord.js\");\n\r\n\r\n\r\n\r\n(0,_header__WEBPACK_IMPORTED_MODULE_0__.create_header)();\r\n(0,_main__WEBPACK_IMPORTED_MODULE_1__.create_main)();\r\n(0,_keybord__WEBPACK_IMPORTED_MODULE_2__.createKeyboard)();\r\n\n\n//# sourceURL=webpack://virtual-keybord/./assets/scripts/index.js?");

/***/ }),

/***/ "./assets/scripts/keybord.js":
/*!***********************************!*\
  !*** ./assets/scripts/keybord.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createKeyboard\": () => (/* binding */ createKeyboard)\n/* harmony export */ });\nfunction createKeyboard(){\r\n\r\nlet keys =[['`','1','2','3','4','5','6','7','8','9','0','-','=',\"Backspace\"],\r\n['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\\\','Del'],\r\n['CapsLock','a','s','d','f','g','h','j','k','l',';','\\'','Enter'],\r\n['Shift','z','x','c','v','b','n','m',',','.','/','↑','Shift'],\r\n['Ctrl','Win','Alt','SPACE','Alt','←','↓','→','Ctrl']];\r\n\r\n\r\nlet keyboard = document.createElement('div');\r\nkeyboard.className = \"keyboard\";\r\n\r\ndocument.querySelector(\"main\").append(keyboard);\r\n\r\nfor (let i = 0; i < keys.length; i++){\r\n    for (let j = 0; j < keys[i].length; j++){\r\n   \r\n       \r\n        let button = document.createElement('button');\r\n        button.className = \"keys\";\r\n\r\n        button.classList.add(keys[i][j]);\r\n\r\n        button.innerHTML = keys[i][j];\r\n\r\n        keyboard.append(button);\r\n        \r\n        document.addEventListener('keydown', function(event) {\r\n            if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {\r\n              alert('Отменить!')\r\n            }\r\n          });\r\n    }\r\n}\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://virtual-keybord/./assets/scripts/keybord.js?");

/***/ }),

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_main\": () => (/* binding */ create_main)\n/* harmony export */ });\nfunction create_main(){\r\n    let main = document.createElement(\"main\");\r\n    main.className = \"main\"\r\n\r\n    let text_area = document.createElement(\"textarea\");\r\n    text_area.className = \"input_field\";\r\n    text_area.setAttribute(\"rows\",\"20\")\r\n\r\n    document.body.append(main);\r\n    main.append(text_area);\r\n\r\n  \r\n  \r\n}\n\n//# sourceURL=webpack://virtual-keybord/./assets/scripts/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/scripts/index.js");
/******/ 	
/******/ })()
;