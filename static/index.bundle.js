/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component-js/landing-page.js":
/*!******************************************!*\
  !*** ./src/component-js/landing-page.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

doc_query;
window.addEventListener("DOMContentLoaded", function () {
  var baybayinLogo = doc_query(".baybayin__logo"); // <- ganito

  var circleVector = doc_query(".circle__vector");
  var handGestures = doc_query_all(".hand__gestures");
  var bannerTwoImage = doc_query_all(".banner__2-image");
  var cardLinkIcon = doc_query_all(".card__link-icon"); // Banner 1 images

  for (var i = 0; i < handGestures.length; i++) {
    handGestures[i].src = "./assets/landing-page/banner-1/hand_gest-".concat(i + 1, ".svg");
    handGestures[i].classList.add("z-index-1");
  } //Banner 2


  for (var _i = 0; _i < bannerTwoImage.length; _i++) {
    bannerTwoImage[_i].src = "./assets/landing-page/banner-2/icon".concat(_i + 1, ".svg");
  } //Banner 3


  for (var _i2 = 0; _i2 < cardLinkIcon.length; _i2++) {
    cardLinkIcon[_i2].src = "./assets/landing-page/banner-3/card-link-icon-".concat(_i2 + 1, ".svg");
  }

  baybayinLogo.src = "./assets/logo/logo.png";

  if (circleVector !== null) {
    circleVector.src = "./assets/landing-page/banner-1/Ellipse_1.svg";
  }
});

/***/ }),

/***/ "./src/component-js/learning-module-2.js":
/*!***********************************************!*\
  !*** ./src/component-js/learning-module-2.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

window.addEventListener("DOMContentLoaded", function () {
  var baybayinIntroImages = doc_query_all(".baybayin__def-image-l2");

  for (var i = 0; i < baybayinIntroImages.length; i++) {
    baybayinIntroImages[i].src = "./assets/learning-module-2/image-".concat(i + 1, ".jpg");
  }
});

/***/ }),

/***/ "./src/component-js/learning-module.js":
/*!*********************************************!*\
  !*** ./src/component-js/learning-module.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

window.addEventListener("DOMContentLoaded", function () {
  var baybayinIntroImages = doc_query_all(".baybayin__def-image");
  var baybayinCultureAsset = doc_query(".baybayin__culture-asset");

  for (var i = 0; i < baybayinIntroImages.length; i++) {
    baybayinIntroImages[i].src = "./assets/learning-module/baybayin-def-".concat(i + 1, ".jpg");
  }

  if (baybayinCultureAsset !== null) {
    baybayinCultureAsset.src = "./assets/learning-module/culture_asset.jpg";
  }
});

/***/ }),

/***/ "./src/component-js/query_method.js":
/*!******************************************!*\
  !*** ./src/component-js/query_method.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc_query": function() { return /* binding */ doc_query; },
/* harmony export */   "doc_query_all": function() { return /* binding */ doc_query_all; }
/* harmony export */ });
var doc_query = function doc_query(class_name) {
  return document.querySelector(class_name);
};
var doc_query_all = function doc_query_all(class_name) {
  return document.querySelectorAll(class_name);
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// CSS
__webpack_require__(/*! ./style.scss */ "./src/style.scss"); // JS
// require("./component-js/model");


__webpack_require__(/*! ./component-js/landing-page */ "./src/component-js/landing-page.js");

__webpack_require__(/*! ./component-js/learning-module */ "./src/component-js/learning-module.js");

__webpack_require__(/*! ./component-js/learning-module-2 */ "./src/component-js/learning-module-2.js"); // require("./component-js/translator");
// require("./component-js/handwriting");
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlGQUFELENBQVAsRUFDQTtBQUNBLHlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvY29tcG9uZW50LWpzL2xhbmRpbmctcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9jb21wb25lbnQtanMvbGVhcm5pbmctbW9kdWxlLTIuanMiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvY29tcG9uZW50LWpzL2xlYXJuaW5nLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9jb21wb25lbnQtanMvcXVlcnlfbWV0aG9kLmpzIiwid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL3N0eWxlLnNjc3M/MmU4OCIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZG9jX3F1ZXJ5LCBkb2NfcXVlcnlfYWxsIH0gPSByZXF1aXJlKFwiLi9xdWVyeV9tZXRob2RcIik7XHJcblxyXG5kb2NfcXVlcnk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgYmF5YmF5aW5Mb2dvID0gZG9jX3F1ZXJ5KFwiLmJheWJheWluX19sb2dvXCIpOyAvLyA8LSBnYW5pdG9cclxuICBjb25zdCBjaXJjbGVWZWN0b3IgPSBkb2NfcXVlcnkoXCIuY2lyY2xlX192ZWN0b3JcIik7XHJcbiAgY29uc3QgaGFuZEdlc3R1cmVzID0gZG9jX3F1ZXJ5X2FsbChcIi5oYW5kX19nZXN0dXJlc1wiKTtcclxuICBjb25zdCBiYW5uZXJUd29JbWFnZSA9IGRvY19xdWVyeV9hbGwoXCIuYmFubmVyX18yLWltYWdlXCIpO1xyXG4gIGNvbnN0IGNhcmRMaW5rSWNvbiA9IGRvY19xdWVyeV9hbGwoXCIuY2FyZF9fbGluay1pY29uXCIpO1xyXG5cclxuICAvLyBCYW5uZXIgMSBpbWFnZXNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbmRHZXN0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaGFuZEdlc3R1cmVzW2ldLnNyYyA9IGAuL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTEvaGFuZF9nZXN0LSR7XHJcbiAgICAgIGkgKyAxXHJcbiAgICB9LnN2Z2A7XHJcbiAgICBoYW5kR2VzdHVyZXNbaV0uY2xhc3NMaXN0LmFkZChcInotaW5kZXgtMVwiKTtcclxuICB9XHJcblxyXG4gIC8vQmFubmVyIDJcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbm5lclR3b0ltYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBiYW5uZXJUd29JbWFnZVtpXS5zcmMgPSBgLi9hc3NldHMvbGFuZGluZy1wYWdlL2Jhbm5lci0yL2ljb24ke2kgKyAxfS5zdmdgO1xyXG4gIH1cclxuXHJcbiAgLy9CYW5uZXIgM1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZExpbmtJY29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYXJkTGlua0ljb25baV0uc3JjID0gYC4vYXNzZXRzL2xhbmRpbmctcGFnZS9iYW5uZXItMy9jYXJkLWxpbmstaWNvbi0ke1xyXG4gICAgICBpICsgMVxyXG4gICAgfS5zdmdgO1xyXG4gIH1cclxuXHJcbiAgYmF5YmF5aW5Mb2dvLnNyYyA9IFwiLi9hc3NldHMvbG9nby9sb2dvLnBuZ1wiO1xyXG4gIGlmIChjaXJjbGVWZWN0b3IgIT09IG51bGwpIHtcclxuICAgIGNpcmNsZVZlY3Rvci5zcmMgPSBcIi4vYXNzZXRzL2xhbmRpbmctcGFnZS9iYW5uZXItMS9FbGxpcHNlXzEuc3ZnXCI7XHJcbiAgfVxyXG59KTtcclxuIiwiY29uc3QgeyBkb2NfcXVlcnksIGRvY19xdWVyeV9hbGwgfSA9IHJlcXVpcmUoXCIuL3F1ZXJ5X21ldGhvZFwiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBiYXliYXlpbkludHJvSW1hZ2VzID0gZG9jX3F1ZXJ5X2FsbChcIi5iYXliYXlpbl9fZGVmLWltYWdlLWwyXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmF5YmF5aW5JbnRyb0ltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgYmF5YmF5aW5JbnRyb0ltYWdlc1tpXS5zcmMgPSBgLi9hc3NldHMvbGVhcm5pbmctbW9kdWxlLTIvaW1hZ2UtJHtcclxuICAgICAgaSArIDFcclxuICAgIH0uanBnYDtcclxuICB9XHJcbn0pO1xyXG4iLCJjb25zdCB7IGRvY19xdWVyeSwgZG9jX3F1ZXJ5X2FsbCB9ID0gcmVxdWlyZShcIi4vcXVlcnlfbWV0aG9kXCIpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGJheWJheWluSW50cm9JbWFnZXMgPSBkb2NfcXVlcnlfYWxsKFwiLmJheWJheWluX19kZWYtaW1hZ2VcIik7XHJcbiAgY29uc3QgYmF5YmF5aW5DdWx0dXJlQXNzZXQgPSBkb2NfcXVlcnkoXCIuYmF5YmF5aW5fX2N1bHR1cmUtYXNzZXRcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXliYXlpbkludHJvSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBiYXliYXlpbkludHJvSW1hZ2VzW2ldLnNyYyA9IGAuL2Fzc2V0cy9sZWFybmluZy1tb2R1bGUvYmF5YmF5aW4tZGVmLSR7XHJcbiAgICAgIGkgKyAxXHJcbiAgICB9LmpwZ2A7XHJcbiAgfVxyXG4gIGlmIChiYXliYXlpbkN1bHR1cmVBc3NldCAhPT0gbnVsbCkge1xyXG4gICAgYmF5YmF5aW5DdWx0dXJlQXNzZXQuc3JjID0gXCIuL2Fzc2V0cy9sZWFybmluZy1tb2R1bGUvY3VsdHVyZV9hc3NldC5qcGdcIjtcclxuICB9XHJcbn0pO1xyXG4iLCIgIGV4cG9ydCBjb25zdCBkb2NfcXVlcnkgPSAoY2xhc3NfbmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NfbmFtZSk7XHJcbiAgfTtcclxuICBleHBvcnQgY29uc3QgZG9jX3F1ZXJ5X2FsbCA9IChjbGFzc19uYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc19uYW1lKTtcclxuICB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIENTU1xyXG5yZXF1aXJlKFwiLi9zdHlsZS5zY3NzXCIpO1xyXG4vLyBKU1xyXG4vLyByZXF1aXJlKFwiLi9jb21wb25lbnQtanMvbW9kZWxcIik7XHJcbnJlcXVpcmUoXCIuL2NvbXBvbmVudC1qcy9sYW5kaW5nLXBhZ2VcIik7XHJcbnJlcXVpcmUoXCIuL2NvbXBvbmVudC1qcy9sZWFybmluZy1tb2R1bGVcIik7XHJcbnJlcXVpcmUoXCIuL2NvbXBvbmVudC1qcy9sZWFybmluZy1tb2R1bGUtMlwiKTtcclxuLy8gcmVxdWlyZShcIi4vY29tcG9uZW50LWpzL3RyYW5zbGF0b3JcIik7XHJcbi8vIHJlcXVpcmUoXCIuL2NvbXBvbmVudC1qcy9oYW5kd3JpdGluZ1wiKTtcclxuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJkb2NfcXVlcnkiLCJkb2NfcXVlcnlfYWxsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJheWJheWluTG9nbyIsImNpcmNsZVZlY3RvciIsImhhbmRHZXN0dXJlcyIsImJhbm5lclR3b0ltYWdlIiwiY2FyZExpbmtJY29uIiwiaSIsImxlbmd0aCIsInNyYyIsImNsYXNzTGlzdCIsImFkZCIsImJheWJheWluSW50cm9JbWFnZXMiLCJiYXliYXlpbkN1bHR1cmVBc3NldCIsImNsYXNzX25hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIl0sInNvdXJjZVJvb3QiOiIifQ==