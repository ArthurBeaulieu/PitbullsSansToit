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

/***/ "./src/js/APST.js":
/*!************************!*\
  !*** ./src/js/APST.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scss_apst_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/apst.scss */ \"./src/scss/apst.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar APST = /*#__PURE__*/function () {\n  function APST(view) {\n    _classCallCheck(this, APST);\n\n    if (view === 'homepage') {\n      this._initHomepage();\n    } else if (view === 'adopt') {\n      this._initAdopt();\n    } else if (view === 'help') {\n      this._initHelp();\n    }\n  }\n\n  _createClass(APST, [{\n    key: \"_initHomepage\",\n    value: function _initHomepage() {\n      this._fetchJSON('assets/json/adopt.json').then(function (animals) {\n        for (var i = 0; i < animals.length; ++i) {\n          var animalContainer = document.createElement('DIV');\n          animalContainer.classList.add('dog');\n          var genderLogo = animals[i].gender === 'female' ? 'venus' : 'mars';\n          animalContainer.innerHTML = \"\\n            <div class=\\\"dog-info\\\">\\n              <h3 class=\\\"name\\\">\".concat(animals[i].name, \"<i class=\\\"fa fa-\").concat(genderLogo, \" \").concat(animals[i].gender, \"\\\"></i></h3>\\n              <p class=\\\"lead desc\\\">\").concat(animals[i].breed, \"</p>\\n              <img src=\\\"\").concat(animals[i].picture, \"\\\" class=\\\"dog-pp\\\" alt=\\\"\\\">\\n              <div class=\\\"dog-match\\\">\\n                <p>Affinit\\xE9s :</p>&nbsp;\\n                <i class=\\\"fa fa-dog ok\\\"></i>&nbsp;\\n                <i class=\\\"fa fa-cat ko\\\"></i>&nbsp;\\n                <i class=\\\"fa fa-baby ok\\\"></i>\\n              </div>\\n              <p class=\\\"more\\\">En savoir plus...</p>\\n            </div>\");\n          document.querySelector('#dogs-to-adopt').appendChild(animalContainer);\n        }\n      });\n    }\n  }, {\n    key: \"_initAdopt\",\n    value: function _initAdopt() {\n      console.log('Adoption');\n    }\n  }, {\n    key: \"_initHelp\",\n    value: function _initHelp() {\n      console.log('Help');\n    }\n  }, {\n    key: \"_fetchJSON\",\n    value: function _fetchJSON(url) {\n      return new Promise(function (resolve) {\n        var options = {\n          method: 'GET',\n          headers: new Headers([['Content-Type', 'application/json; charset=UTF-8']])\n        };\n        fetch(url, options).then(function (response) {\n          if (response) {\n            if (response.ok) {\n              resolve(response.json());\n            } else {\n              console.error(response.status);\n            }\n          }\n        })[\"catch\"](function (error) {\n          console.error(error);\n        });\n      });\n    }\n  }]);\n\n  return APST;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APST);\n\n//# sourceURL=webpack://APST/./src/js/APST.js?");

/***/ }),

/***/ "./src/scss/apst.scss":
/*!****************************!*\
  !*** ./src/scss/apst.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://APST/./src/scss/apst.scss?");

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
/******/ 	return __webpack_require__("./src/js/APST.js");
/******/ })()
.default;