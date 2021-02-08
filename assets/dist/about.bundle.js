/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
window.APST =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/About.js":
/*!*************************!*\
  !*** ./src/js/About.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scss_about_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/about.scss */ \"./src/scss/about.scss\");\n/* harmony import */ var _tools_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/Utils */ \"./src/js/tools/Utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar About = /*#__PURE__*/function () {\n  function About() {\n    _classCallCheck(this, About);\n\n    this._init();\n\n    (0,_tools_Utils__WEBPACK_IMPORTED_MODULE_1__.creditModal)();\n  }\n\n  _createClass(About, [{\n    key: \"_init\",\n    value: function _init() {\n      (0,_tools_Utils__WEBPACK_IMPORTED_MODULE_1__.adoptionHighlight)();\n    }\n  }]);\n\n  return About;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n//# sourceURL=webpack://APST/./src/js/About.js?");

/***/ }),

/***/ "./src/js/modal/AnimalModal.js":
/*!*************************************!*\
  !*** ./src/js/modal/AnimalModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.js */ \"./src/js/modal/Modal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar AnimalModal = /*#__PURE__*/function (_Modal) {\n  _inherits(AnimalModal, _Modal);\n\n  var _super = _createSuper(AnimalModal);\n\n  function AnimalModal(options) {\n    var _this;\n\n    _classCallCheck(this, AnimalModal);\n\n    _this = _super.call(this, options);\n    _this._info = options.info;\n\n    _this._fillAttributes();\n\n    return _this;\n  }\n\n  _createClass(AnimalModal, [{\n    key: \"_fillAttributes\",\n    value: function _fillAttributes() {\n      var genderLogo = this._info.gender === 'female' ? 'venus' : 'mars';\n      document.querySelector('#animal-name').innerHTML = \"\".concat(this._info.name, \"<i class=\\\"fa fa-sm fa-\").concat(genderLogo, \" \").concat(this._info.gender, \"\\\"></i>\");\n      document.querySelector('#modal-container').innerHTML = \"\\n    \\t<div class=\\\"dog\\\">\\n\\t      <img src=\\\"\".concat(this._info.picture, \"\\\" class=\\\"dog-pp\\\" alt=\\\"\\\">\\n\\t      <div>\\n\\t\\t      <h3>\").concat(this._info.breed, \" (\").concat(this._info.age, \")</h3>\\n\\t\\t      <p class=\\\"desc\\\">\").concat(this._info.description, \"</p>\\n\\t        <p><u>Affinit\\xE9s :</u></p>\\n\\t        <p>\\n\\t\\t        <span><i class=\\\"fa fa-dog \").concat(this._info.affinity.dogs, \"\\\"></i>\").concat(this._info.affinity.dogs.toUpperCase(), \" chiens</span><br>\\n\\t\\t        <span><i class=\\\"fa fa-cat \").concat(this._info.affinity.cats, \"\\\"></i>\").concat(this._info.affinity.cats.toUpperCase(), \" chats</span><br>\\n\\t\\t        <span><i class=\\\"fa fa-baby \").concat(this._info.affinity.baby, \"\\\"></i>\").concat(this._info.affinity.baby.toUpperCase(), \" enfants</span>\\n\\t        </p>\\n\\t        <p class=\\\"desc\\\">Vous voulez changer la vie de cet animal? Consultez la page \\\"\\xC0 l'adoption\\\" pour plus d'information, ou n'h\\xE9sitez pas \\xE0 nous contacter pour vous positionnez pour une adoption!</p>\\n\\t\\t\\t\\t\\t<p><i><a href=\\\"tel:33619270852\\\"><b>+33 6 19 27 08 52</b></a> ou par <a href=\\\"mailto:contact@pitbulls-sans-toit.com\\\"><b>mail</b></a></i></p>\\n\\t      </div>\\n\\t    </div>\");\n    }\n  }]);\n\n  return AnimalModal;\n}(_Modal_js__WEBPACK_IMPORTED_MODULE_0__.default);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimalModal);\n\n//# sourceURL=webpack://APST/./src/js/modal/AnimalModal.js?");

/***/ }),

/***/ "./src/js/modal/CreditModal.js":
/*!*************************************!*\
  !*** ./src/js/modal/CreditModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.js */ \"./src/js/modal/Modal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar CreditModal = /*#__PURE__*/function (_Modal) {\n  _inherits(CreditModal, _Modal);\n\n  var _super = _createSuper(CreditModal);\n\n  function CreditModal(options) {\n    _classCallCheck(this, CreditModal);\n\n    return _super.call(this, options);\n  }\n\n  return CreditModal;\n}(_Modal_js__WEBPACK_IMPORTED_MODULE_0__.default);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreditModal);\n\n//# sourceURL=webpack://APST/./src/js/modal/CreditModal.js?");

/***/ }),

/***/ "./src/js/modal/Modal.js":
/*!*******************************!*\
  !*** ./src/js/modal/Modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(options) {\n    _classCallCheck(this, Modal);\n\n    this._template = options.template;\n    this._rootElement = null;\n    this._modalOverlay = null;\n    this._closeButton = null;\n    this._footerCloseButton = null;\n    this.close = this.close.bind(this);\n\n    this._loadTemplate();\n  }\n\n  _createClass(Modal, [{\n    key: \"destroy\",\n    value: function destroy() {\n      this._modalOverlay.removeEventListener('click', this.close);\n\n      this._closeButton.removeEventListener('click', this.close);\n\n      this._footerCloseButton.removeEventListener('click', this.close); // Must be overridden in child class to clean extension properties and events\n\n\n      delete this._template;\n      delete this._rootElement;\n      delete this._modalOverlay;\n      delete this._closeButton;\n    }\n  }, {\n    key: \"_loadTemplate\",\n    value: function _loadTemplate() {\n      this._rootElement = this._parseHTMLFragment(this._template); // Create overlay modal container\n\n      this._modalOverlay = document.createElement('DIV');\n      this._modalOverlay.className = 'loading-overlay';\n\n      this._modalOverlay.appendChild(this._rootElement); // Get close button from template\n\n\n      this._closeButton = this._rootElement.querySelector('#modal-close');\n      this._footerCloseButton = this._rootElement.querySelector('#modal-footer-close');\n      this.open();\n    }\n  }, {\n    key: \"_fillAttributes\",\n    value: function _fillAttributes() {// Must be overridden in child class to build modal with HTML template attributes\n    }\n  }, {\n    key: \"_parseHTMLFragment\",\n    value: function _parseHTMLFragment(htmlString) {\n      var parser = new DOMParser();\n      var dom = parser.parseFromString(htmlString, 'text/html');\n      return dom.body.firstChild;\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      document.body.appendChild(this._modalOverlay);\n\n      this._modalOverlay.addEventListener('click', this.close);\n\n      this._closeButton.addEventListener('click', this.close);\n\n      this._footerCloseButton.addEventListener('click', this.close);\n    }\n  }, {\n    key: \"close\",\n    value: function close(event) {\n      // Must be overridden in child class to properly clean extension properties and events\n      if (!event || event && (event.target === this._modalOverlay || event.target === this._closeButton || event.target === this._footerCloseButton)) {\n        // Remove the overlay from the body\n        document.body.removeChild(this._modalOverlay); // Use the child class destroy\n\n        this.destroy();\n      }\n    }\n  }]);\n\n  return Modal;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://APST/./src/js/modal/Modal.js?");

/***/ }),

/***/ "./src/js/tools/Utils.js":
/*!*******************************!*\
  !*** ./src/js/tools/Utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchJSON\": () => (/* binding */ fetchJSON),\n/* harmony export */   \"fetchHTML\": () => (/* binding */ fetchHTML),\n/* harmony export */   \"creditModal\": () => (/* binding */ creditModal),\n/* harmony export */   \"adoptionHighlight\": () => (/* binding */ adoptionHighlight)\n/* harmony export */ });\n/* harmony import */ var _modal_CreditModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/CreditModal */ \"./src/js/modal/CreditModal.js\");\n/* harmony import */ var _modal_AnimalModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/AnimalModal */ \"./src/js/modal/AnimalModal.js\");\n\n\n\nvar fetchJSON = function fetchJSON(url) {\n  return new Promise(function (resolve) {\n    var options = {\n      method: 'GET',\n      headers: new Headers([['Content-Type', 'application/json; charset=UTF-8']])\n    };\n    fetch(url, options).then(function (response) {\n      if (response) {\n        if (response.ok) {\n          resolve(response.json());\n        } else {\n          console.error(response.status);\n        }\n      }\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  });\n};\n\nvar fetchHTML = function fetchHTML(url) {\n  return new Promise(function (resolve) {\n    var options = {\n      method: 'GET',\n      headers: new Headers([['Content-Type', 'application/json; charset=UTF-8']])\n    };\n    fetch(url, options).then(function (response) {\n      if (response) {\n        if (response.ok) {\n          resolve(response.text());\n        } else {\n          console.error(response.status);\n        }\n      }\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  });\n};\n\nvar creditModal = function creditModal() {\n  document.querySelector('#credit-modal').addEventListener('click', function () {\n    fetchHTML('assets/html/credit.html').then(function (template) {\n      new _modal_CreditModal__WEBPACK_IMPORTED_MODULE_0__.default({\n        template: template\n      });\n    });\n  }, false);\n};\n\nvar adoptionHighlight = function adoptionHighlight() {\n  fetchJSON('assets/json/adoption.json').then(function (adoptions) {\n    var animals = getRandomElementsInArray(adoptions.adopt, adoptions.adopt.length > 4 ? 4 : adoptions.adopt.length); // Fill highlighted animals to adopt\n\n    var _loop = function _loop(i) {\n      var animalContainer = document.createElement('DIV');\n      animalContainer.classList.add('dog');\n      var genderLogo = animals[i].gender === 'female' ? 'venus' : 'mars';\n      animalContainer.innerHTML = \"\\n          <div class=\\\"dog-info\\\">\\n            <h3 class=\\\"name\\\">\".concat(animals[i].name, \"<i class=\\\"fa fa-\").concat(genderLogo, \" \").concat(animals[i].gender, \"\\\"></i></h3>\\n            <p class=\\\"lead desc\\\">\").concat(animals[i].breed, \"</p>\\n            <img src=\\\"\").concat(animals[i].picture, \"\\\" class=\\\"dog-pp\\\" alt=\\\"\\\">\\n            <div class=\\\"dog-match\\\">\\n              <p>Affinit\\xE9s :</p>&nbsp;\\n              <i class=\\\"fa fa-dog \").concat(animals[i].affinity.dogs, \"\\\"></i>&nbsp;\\n              <i class=\\\"fa fa-cat \").concat(animals[i].affinity.cats, \"\\\"></i>&nbsp;\\n              <i class=\\\"fa fa-baby \").concat(animals[i].affinity.baby, \"\\\"></i>\\n            </div>\\n            <p class=\\\"more\\\">En savoir plus...</p>\\n          </div>\");\n      requestAnimationFrame(function () {\n        document.querySelector('#dogs-to-adopt').appendChild(animalContainer);\n      });\n      animalContainer.addEventListener('click', function () {\n        fetchHTML('assets/html/animal.html').then(function (template) {\n          new _modal_AnimalModal__WEBPACK_IMPORTED_MODULE_1__.default({\n            template: template,\n            info: animals[i]\n          });\n        });\n      }, false);\n    };\n\n    for (var i = 0; i < animals.length; ++i) {\n      _loop(i);\n    }\n  });\n};\n\nvar getRandomElementsInArray = function getRandomElementsInArray(arr, n) {\n  var result = new Array(n);\n  var len = arr.length;\n  var taken = new Array(len);\n\n  while (n--) {\n    var x = Math.floor(Math.random() * len);\n    result[n] = arr[x in taken ? taken[x] : x];\n    taken[x] = --len in taken ? taken[len] : len;\n  }\n\n  return result;\n};\n\n\n\n//# sourceURL=webpack://APST/./src/js/tools/Utils.js?");

/***/ }),

/***/ "./src/scss/about.scss":
/*!*****************************!*\
  !*** ./src/scss/about.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://APST/./src/scss/about.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/js/About.js");
/******/ })()
.default;