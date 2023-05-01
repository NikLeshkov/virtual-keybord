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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createHeader() {\n  const header = document.createElement('header');\n\n  const title = document.createElement('div');\n  title.className = 'title_content';\n\n  const pTitle = document.createElement('p');\n  pTitle.className = 'title';\n  pTitle.innerHTML = 'Виртуальная клавиатура window';\n\n  document.body.append(header);\n  header.append(title);\n  title.append(pTitle);\n}\n\n\n//# sourceURL=webpack://virtual-keybord/./assets/scripts/header.js?");

/***/ }),

/***/ "./assets/scripts/index.js":
/*!*********************************!*\
  !*** ./assets/scripts/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./assets/scripts/header.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./assets/scripts/main.js\");\n/* harmony import */ var _keybord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keybord */ \"./assets/scripts/keybord.js\");\n\n\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_keybord__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://virtual-keybord/./assets/scripts/index.js?");

/***/ }),

/***/ "./assets/scripts/keybord.js":
/*!***********************************!*\
  !*** ./assets/scripts/keybord.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createKeyboard)\n/* harmony export */ });\nfunction createKeyboard() {\n  const keys = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],\n    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'Del'],\n    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'', 'Enter'],\n    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],\n    ['Ctrl', 'Win', 'Alt', 'SPACE', 'Alt', '←', '↓', '→', 'Ctrl']];\n\n  const keyboard = document.createElement('div');\n  keyboard.className = 'keyboard';\n\n  document.querySelector('main').append(keyboard);\n\n  for (let i = 0; i < keys.length; i += 1) {\n    for (let j = 0; j < keys[i].length; j += 1) {\n      const button = document.createElement('button');\n      button.className = 'keys';\n\n      button.classList.add(keys[i][j]);\n\n      button.innerHTML = keys[i][j];\n\n      keyboard.append(button);\n    }\n  }\n\n  document.addEventListener('keypress', (e) => {\n    for (let i = 0; i < keys.length; i += 1) {\n      for (let j = 0; j < keys[i].length; j += 1) {\n        if (e.key === keys[i][j]) {\n          let key = keys[i][j];\n\n          key = document.querySelector(`.${keys[i][j]}`);\n          key.classList.add('color');\n        }\n      }\n    }\n  });\n\n  document.addEventListener('keyup', (e) => {\n    for (let i = 0; i < keys.length; i += 1) {\n      for (let j = 0; j < keys[i].length; j += 1) {\n        if (e.key === keys[i][j]) {\n          let key = keys[i][j];\n          key = document.querySelector(`.${keys[i][j]}`);\n          key.classList.remove('color');\n        }\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack://virtual-keybord/./assets/scripts/keybord.js?");

/***/ }),

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMain)\n/* harmony export */ });\nfunction createMain() {\n  const main = document.createElement('main');\n  main.className = 'main';\n\n  const inputArea = document.createElement('textarea');\n  inputArea.className = 'input_field';\n  inputArea.setAttribute('rows', '20');\n\n  document.body.append(main);\n  main.append(inputArea);\n}\n\n\n//# sourceURL=webpack://virtual-keybord/./assets/scripts/main.js?");

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