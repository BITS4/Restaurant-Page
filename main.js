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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n    const content = document.getElementById('content');\r\n    \r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'Contact Us';\r\n  \r\n    const phone = document.createElement('p');\r\n    phone.textContent = '📞 Phone: (123) 456-7890';\r\n  \r\n    const address = document.createElement('p');\r\n    address.textContent = '🏠 Address: 123 Delicious Street, Food City, Yumland';\r\n  \r\n    const form = document.createElement('form');\r\n    form.innerHTML = `\r\n      <label for=\"name\">Name:</label><br>\r\n      <input type=\"text\" id=\"name\" name=\"name\"><br>\r\n      <label for=\"email\">Email:</label><br>\r\n      <input type=\"email\" id=\"email\" name=\"email\"><br>\r\n      <button type=\"submit\">Submit</button>\r\n    `;\r\n  \r\n    content.appendChild(heading);\r\n    content.appendChild(phone);\r\n    content.appendChild(address);\r\n    content.appendChild(form);\r\n  }\r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n    const content = document.getElementById('content');\r\n    \r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'Welcome to Our Restaurant';\r\n  \r\n    const description = document.createElement('p');\r\n    description.textContent = 'Enjoy the finest meals prepared with love and care.';\r\n  \r\n    const image = document.createElement('img');\r\n    image.src = 'path/to/your/homepage-image.jpg'; // Add your image path here\r\n    image.alt = 'A picture of the restaurant';\r\n  \r\n    content.appendChild(heading);\r\n    content.appendChild(description);\r\n    content.appendChild(image);\r\n  }\r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\nconsole.log('Webpack is working!');\r\n\r\nconst content = document.getElementById('content');\r\n\r\nfunction createHomePage() {\r\n  const title = document.createElement('h1');\r\n  title.textContent = 'Welcome to Our Restaurant';\r\n\r\n  const description = document.createElement('p');\r\n  description.textContent = 'The best place to enjoy delicious meals!';\r\n\r\n  content.appendChild(title);\r\n  content.appendChild(description);\r\n}\r\n\r\ncreateHomePage();\r\n\r\n\r\n\r\n\r\n\r\ndocument.getElementById('home').addEventListener('click', () => {\r\n  clearContent();\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\ndocument.getElementById('menu').addEventListener('click', () => {\r\n  clearContent();\r\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\ndocument.getElementById('contact').addEventListener('click', () => {\r\n  clearContent();\r\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\nfunction clearContent() {\r\n  const content = document.getElementById('content');\r\n  content.textContent = '';\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n    const content = document.getElementById('content');\r\n    \r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'Our Menu';\r\n  \r\n    const menuItems = [\r\n      { name: 'Spaghetti Carbonara', price: '$12' },\r\n      { name: 'Margherita Pizza', price: '$10' },\r\n      { name: 'Caesar Salad', price: '$8' },\r\n      { name: 'Tiramisu', price: '$6' }\r\n    ];\r\n  \r\n    const menuList = document.createElement('ul');\r\n    menuItems.forEach(item => {\r\n      const listItem = document.createElement('li');\r\n      listItem.textContent = `${item.name} - ${item.price}`;\r\n      menuList.appendChild(listItem);\r\n    });\r\n  \r\n    content.appendChild(heading);\r\n    content.appendChild(menuList);\r\n  }\r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;