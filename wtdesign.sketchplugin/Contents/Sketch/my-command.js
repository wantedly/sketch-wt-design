var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function (context) {
  var document = sketch.fromNative(context.document);

  if (document.selectedLayers.length < 1) {
    return;
  }

  var outputString = UI.getStringFromUser('Elevation', '16');
  var elevation = parseInt(outputString, 10);

  var shadowY = calcShadowY(elevation);
  var shadowBlur = calcShadowBlur(elevation);
  var shadowSpread = calcShadowSpread(elevation);

  document.selectedLayers.forEach(function (layer) {
    layer.style.shadows = [{
      color: 'rgba(0, 0, 0, 0.02)',
      x: '0',
      y: '0',
      blur: '0',
      spread: '1'
    }, {
      color: 'rgba(0, 0, 0, 0.1)',
      x: '0',
      y: shadowY,
      blur: shadowBlur,
      spread: shadowSpread
    }];
  });

  context.document.showMessage("Elevation set!");
};

var sketch = __webpack_require__(1);
var UI = __webpack_require__(2);

function calcShadowY(elevation) {
  var val = 0;
  if (elevation === 0) {
    val = 0;
  } else {
    val = elevation / 2;
  }
  return val.toString();
}

function calcShadowBlur(elevation) {
  var val = 0;
  if (elevation === 0) {
    val = 0;
  } else if (elevation < 8) {
    val = elevation * 1.5;
  } else if (elevation < 16) {
    val = elevation / 2 + 8;
  } else {
    val = elevation;
  }
  return val.toString();
}

function calcShadowSpread(elevation) {
  var val = 0;
  if (elevation === 0) {
    val = 1;
  } else {
    val = 0;
  }
  return val.toString();
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })
/******/ ]);
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')
