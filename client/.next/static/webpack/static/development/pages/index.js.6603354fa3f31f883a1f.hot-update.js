webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/register.js":
/*!********************************!*\
  !*** ./components/register.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/piotrnapierala/Desktop/microservices/ticketing/client/components/register.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return new Promise(function (res) {\n                  return setTimeout(res, 500);\n                });\n\n              case 2:\n                alert(JSON.stringify(values, null, 2));\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }(),\n    initialValues: {\n      email: ''\n    },\n    validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__[\"object\"]().shape({\n      email: yup__WEBPACK_IMPORTED_MODULE_4__[\"string\"]().email('You should change something!').required('You')\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, function (_ref2) {\n    var isSubmitting = _ref2.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }\n    }, __jsx(\"label\", {\n      htmlFor: \"email\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }\n    }, \"Get Informed Every Week!\"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      type: \"email\",\n      name: \"email\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"email\",\n      compoenent: \"div\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }), __jsx(\"button\", {\n      type: \"submit\",\n      disabled: isSubmitting,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }\n    }, \"Submit\"));\n  });\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZ2lzdGVyLmpzPzg1YmUiXSwibmFtZXMiOlsidmFsdWVzIiwiUHJvbWlzZSIsInJlcyIsInNldFRpbWVvdXQiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsIll1cCIsInNoYXBlIiwicmVxdWlyZWQiLCJpc1N1Ym1pdHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLDJFQUFNO0FBQ25CLFNBQ0UsTUFBQyw2Q0FBRDtBQUNFLFlBQVE7QUFBQSxrTUFBRSxpQkFBT0EsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDRixJQUFJQyxPQUFKLENBQVksVUFBQ0MsR0FBRDtBQUFBLHlCQUFTQyxVQUFVLENBQUNELEdBQUQsRUFBTSxHQUFOLENBQW5CO0FBQUEsaUJBQVosQ0FERTs7QUFBQTtBQUVSRSxxQkFBSyxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFELENBQUw7O0FBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURWO0FBS0UsaUJBQWEsRUFBRTtBQUFFTyxXQUFLLEVBQUU7QUFBVCxLQUxqQjtBQU1FLG9CQUFnQixFQUFFQywwQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQ25DRixXQUFLLEVBQUVDLDBDQUFBLEdBQ0pELEtBREksQ0FDRSw4QkFERixFQUVKRyxRQUZJLENBRUssS0FGTDtBQUQ0QixLQUFuQixDQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUc7QUFBQSxRQUFHQyxZQUFILFNBQUdBLFlBQUg7QUFBQSxXQUNDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU8sYUFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixFQUVFLE1BQUMsNENBQUQ7QUFBTyxVQUFJLEVBQUMsT0FBWjtBQUFvQixVQUFJLEVBQUMsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0UsTUFBQyxtREFBRDtBQUFjLFVBQUksRUFBQyxPQUFuQjtBQUEyQixnQkFBVSxFQUFDLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixFQUlFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsY0FBUSxFQUFFQSxZQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLENBREQ7QUFBQSxHQVpILENBREY7QUF5QkQsQ0ExQkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZ2lzdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQsIEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCA1MDApKTtcbiAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICB9fVxuICAgICAgaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogJycgfX1cbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAuZW1haWwoJ1lvdSBzaG91bGQgY2hhbmdlIHNvbWV0aGluZyEnKVxuICAgICAgICAgIC5yZXF1aXJlZCgnWW91JyksXG4gICAgICB9KX1cbiAgICA+XG4gICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5HZXQgSW5mb3JtZWQgRXZlcnkgV2VlayE8L2xhYmVsPlxuICAgICAgICAgIDxGaWVsZCB0eXBlPSdlbWFpbCcgbmFtZT0nZW1haWwnIC8+XG4gICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPSdlbWFpbCcgY29tcG9lbmVudD0nZGl2JyAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/register.js\n");

/***/ })

})