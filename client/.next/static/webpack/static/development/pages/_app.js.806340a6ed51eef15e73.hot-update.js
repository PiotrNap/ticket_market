webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/logo.js":
/*!****************************!*\
  !*** ./components/logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/logo.png */ \"./public/logo.png\");\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_logo_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/logoMobile.png */ \"./public/logoMobile.png\");\n/* harmony import */ var _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/piotrnapierala/Desktop/microservices/ticketing/client/components/logo.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar StyledMobileLogo = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img.withConfig({\n  displayName: \"logo__StyledMobileLogo\",\n  componentId: \"sc-1iamlq6-0\"\n})([\"img{content:\", \";width:45px;height:auto;display:none;padding:3px 0 2px 0;}@media screen and (max-width:600px){display:block;}\"], _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default.a);\n_c = StyledMobileLogo;\nvar StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img.withConfig({\n  displayName: \"logo__StyledLogo\",\n  componentId: \"sc-1iamlq6-1\"\n})([\"img{content:\", \";display:block;width:240px;height:auto;padding:8px 0 8px 24px;}img:hover,img:focus{cursor:pointer;}@media screen and (max-width:1000px){img{width:210px;padding:6px 0px 6px 24px;}}@media screen and (max-width:600px){.logo{display:none;}.logoMobile{display:block;width:45px;height:auto;padding:3px 0;}}\"], _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a);\n_c2 = StyledLogo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var currentUser = _ref.currentUser;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, !currentUser ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(StyledLogo, {\n    className: \"logo\",\n    src: _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, __jsx(StyledMobileLogo, {\n    className: \"logoMobile\",\n    src: _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/dashboard\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, __jsx(StyledLogo, {\n    className: \"logo\",\n    src: _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/dashboard\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, __jsx(StyledMobileLogo, {\n    className: \"logoMobile\",\n    src: _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }))));\n});\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledMobileLogo\");\n$RefreshReg$(_c2, \"StyledLogo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ28uanM/Njg2ZiJdLCJuYW1lcyI6WyJTdHlsZWRNb2JpbGVMb2dvIiwic3R5bGVkIiwiaW1nIiwibG9nb01vYmlsZSIsIlN0eWxlZExvZ28iLCJsb2dvIiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzSUFFUEMsNkRBRk8sQ0FBdEI7S0FBTUgsZ0I7QUFjTixJQUFNSSxVQUFVLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscVVBRURHLHVEQUZDLENBQWhCO01BQU1ELFU7QUFpQ1MsK0VBQXFCO0FBQUEsTUFBbEJFLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNsQyxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNBLFdBQUQsR0FDQyxtRUFDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixPQUFHLEVBQUVELHVEQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnQkFBRDtBQUFrQixhQUFTLEVBQUMsWUFBNUI7QUFBeUMsT0FBRyxFQUFFRiw2REFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERCxHQVVDLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxVQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLE9BQUcsRUFBRUUsdURBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdCQUFEO0FBQWtCLGFBQVMsRUFBQyxZQUE1QjtBQUF5QyxPQUFHLEVBQUVGLDZEQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQVhKLENBREY7QUF1REQsQ0F4REQiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ28uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvbG9nby5wbmcnO1xuaW1wb3J0IGxvZ29Nb2JpbGUgZnJvbSAnLi4vcHVibGljL2xvZ29Nb2JpbGUucG5nJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTdHlsZWRNb2JpbGVMb2dvID0gc3R5bGVkLmltZ2BcbiAgaW1nIHtcbiAgICBjb250ZW50OiAke2xvZ29Nb2JpbGV9O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmc6IDNweCAwIDJweCAwO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkTG9nbyA9IHN0eWxlZC5pbWdgXG4gIGltZyB7XG4gICAgY29udGVudDogJHtsb2dvfTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCAwIDhweCAyNHB4O1xuICB9XG5cbiAgaW1nOmhvdmVyLFxuICBpbWc6Zm9jdXMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMjEwcHg7XG4gICAgICBwYWRkaW5nOiA2cHggMHB4IDZweCAyNHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5sb2dvIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5sb2dvTW9iaWxlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwYWRkaW5nOiAzcHggMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7IWN1cnJlbnRVc2VyID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgPFN0eWxlZExvZ28gY2xhc3NOYW1lPSdsb2dvJyBzcmM9e2xvZ299IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgPFN0eWxlZE1vYmlsZUxvZ28gY2xhc3NOYW1lPSdsb2dvTW9iaWxlJyBzcmM9e2xvZ29Nb2JpbGV9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2Rhc2hib2FyZCc+XG4gICAgICAgICAgICA8U3R5bGVkTG9nbyBjbGFzc05hbWU9J2xvZ28nIHNyYz17bG9nb30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2Rhc2hib2FyZCc+XG4gICAgICAgICAgICA8U3R5bGVkTW9iaWxlTG9nbyBjbGFzc05hbWU9J2xvZ29Nb2JpbGUnIHNyYz17bG9nb01vYmlsZX0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHsvKiA8c3R5bGUganN4PntgXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAwIDRweCAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvTW9iaWxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGltZzpob3ZlcixcbiAgICAgICAgaW1nOmZvY3VzIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkge1xuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvTW9iaWxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT4gKi99XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/logo.js\n");

/***/ })

})