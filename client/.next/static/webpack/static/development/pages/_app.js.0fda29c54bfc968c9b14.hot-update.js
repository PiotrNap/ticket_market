webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/logo.js":
/*!****************************!*\
  !*** ./components/logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/logo.png */ \"./public/logo.png\");\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_logo_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/logoMobile.png */ \"./public/logoMobile.png\");\n/* harmony import */ var _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/piotrnapierala/Desktop/microservices/ticketing/client/components/logo.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar StyledMobileLogo = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img.withConfig({\n  displayName: \"logo__StyledMobileLogo\",\n  componentId: \"sc-1iamlq6-0\"\n})([\"img{content:\", \";width:45px;height:auto;display:none;padding:3px 0 2px 0;}@media screen and (max-width:600px){display:block;}\"], _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default.a);\n_c = StyledMobileLogo;\nvar StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img.withConfig({\n  displayName: \"logo__StyledLogo\",\n  componentId: \"sc-1iamlq6-1\"\n})([\"img{content:\", \";display:block;width:240px;height:auto;padding:8px 0 8px 24px;}img:hover,img:focus{cursor:pointer;}@media screen and (max-width:1000px){img{width:210px;padding:6px 0px 6px 24px;}}\"], _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a);\n_c2 = StyledLogo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var currentUser = _ref.currentUser;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(StyledLogo, {\n    src: _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(StyledMobileLogo, {\n    src: _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  })));\n});\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledMobileLogo\");\n$RefreshReg$(_c2, \"StyledLogo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ28uanM/Njg2ZiJdLCJuYW1lcyI6WyJTdHlsZWRNb2JpbGVMb2dvIiwic3R5bGVkIiwiaW1nIiwibG9nb01vYmlsZSIsIlN0eWxlZExvZ28iLCJsb2dvIiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzSUFFUEMsNkRBRk8sQ0FBdEI7S0FBTUgsZ0I7QUFjTixJQUFNSSxVQUFVLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNE1BRURHLHVEQUZDLENBQWhCO01BQU1ELFU7QUFzQlMsK0VBQXFCO0FBQUEsTUFBbEJFLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNsQyxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFlBQVEsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUFZLE9BQUcsRUFBRUQsdURBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdCQUFEO0FBQWtCLE9BQUcsRUFBRUYsNkRBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREY7QUE4QkQsQ0EvQkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ28uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvbG9nby5wbmcnO1xuaW1wb3J0IGxvZ29Nb2JpbGUgZnJvbSAnLi4vcHVibGljL2xvZ29Nb2JpbGUucG5nJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTdHlsZWRNb2JpbGVMb2dvID0gc3R5bGVkLmltZ2BcbiAgaW1nIHtcbiAgICBjb250ZW50OiAke2xvZ29Nb2JpbGV9O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmc6IDNweCAwIDJweCAwO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkTG9nbyA9IHN0eWxlZC5pbWdgXG4gIGltZyB7XG4gICAgY29udGVudDogJHtsb2dvfTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCAwIDhweCAyNHB4O1xuICB9XG5cbiAgaW1nOmhvdmVyLFxuICBpbWc6Zm9jdXMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMjEwcHg7XG4gICAgICBwYWRkaW5nOiA2cHggMHB4IDZweCAyNHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY3VycmVudFVzZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxMaW5rIGhyZWY9Jy8nIHBhc3NIcmVmPlxuICAgICAgICA8U3R5bGVkTG9nbyBzcmM9e2xvZ299IC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgPFN0eWxlZE1vYmlsZUxvZ28gc3JjPXtsb2dvTW9iaWxlfSAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICB7LyogeyFjdXJyZW50VXNlciA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgIDxTdHlsZWRMb2dvIGNsYXNzTmFtZT0nbG9nbycgc3JjPXtsb2dvfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgIDxTdHlsZWRNb2JpbGVMb2dvIGNsYXNzTmFtZT0nbG9nb01vYmlsZScgc3JjPXtsb2dvTW9iaWxlfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQnPlxuICAgICAgICAgICAgPFN0eWxlZExvZ28gY2xhc3NOYW1lPSdsb2dvJyBzcmM9e2xvZ299IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQnPlxuICAgICAgICAgICAgPFN0eWxlZE1vYmlsZUxvZ28gY2xhc3NOYW1lPSdsb2dvTW9iaWxlJyBzcmM9e2xvZ29Nb2JpbGV9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8Lz5cbiAgICAgICl9ICovfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/logo.js\n");

/***/ })

})