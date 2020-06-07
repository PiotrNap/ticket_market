webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/logo.js":
/*!****************************!*\
  !*** ./components/logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/logo.png */ \"./public/logo.png\");\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_logo_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/logoMobile.png */ \"./public/logoMobile.png\");\n/* harmony import */ var _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/piotrnapierala/Desktop/microservices/ticketing/client/components/logo.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar StyledMobileLogo = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img.withConfig({\n  displayName: \"logo__StyledMobileLogo\",\n  componentId: \"sc-1iamlq6-0\"\n})([\"img{content:\", \";width:45px;height:auto;display:none;padding:3px 0 2px 0;}@media screen and (max-width:600px){display:block;}\"], _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default.a);\n_c = StyledMobileLogo;\nvar StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img.withConfig({\n  displayName: \"logo__StyledLogo\",\n  componentId: \"sc-1iamlq6-1\"\n})([\"img{content:\", \";display:block;width:240px;height:auto;padding:8px 0 8px 24px;}img:hover,img:focus{cursor:pointer;}@media screen and (max-width:1000px){img{width:210px;padding:6px 0px 6px 24px;}}\"], _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a); // insert Current\n\n_c2 = StyledLogo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var currentUser = _ref.currentUser;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(StyledLogo, {\n    className: \"logo\",\n    src: _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(StyledMobileLogo, {\n    className: \"logoMobile\",\n    src: _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  })));\n});\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledMobileLogo\");\n$RefreshReg$(_c2, \"StyledLogo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ28uanM/Njg2ZiJdLCJuYW1lcyI6WyJTdHlsZWRNb2JpbGVMb2dvIiwic3R5bGVkIiwiaW1nIiwibG9nb01vYmlsZSIsIlN0eWxlZExvZ28iLCJsb2dvIiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzSUFFUEMsNkRBRk8sQ0FBdEI7S0FBTUgsZ0I7QUFjTixJQUFNSSxVQUFVLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNE1BRURHLHVEQUZDLENBQWhCLEMsQ0F1QkE7O01BdkJNRCxVO0FBd0JTLCtFQUFxQjtBQUFBLE1BQWxCRSxXQUFrQixRQUFsQkEsV0FBa0I7QUFDbEMsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixPQUFHLEVBQUVELHVEQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnQkFBRDtBQUFrQixhQUFTLEVBQUMsWUFBNUI7QUFBeUMsT0FBRyxFQUFFRiw2REFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERjtBQThCRCxDQS9CRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvbG9nby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvIGZyb20gJy4uL3B1YmxpYy9sb2dvLnBuZyc7XG5pbXBvcnQgbG9nb01vYmlsZSBmcm9tICcuLi9wdWJsaWMvbG9nb01vYmlsZS5wbmcnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN0eWxlZE1vYmlsZUxvZ28gPSBzdHlsZWQuaW1nYFxuICBpbWcge1xuICAgIGNvbnRlbnQ6ICR7bG9nb01vYmlsZX07XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcGFkZGluZzogM3B4IDAgMnB4IDA7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkLmltZ2BcbiAgaW1nIHtcbiAgICBjb250ZW50OiAke2xvZ299O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogOHB4IDAgOHB4IDI0cHg7XG4gIH1cblxuICBpbWc6aG92ZXIsXG4gIGltZzpmb2N1cyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgIHBhZGRpbmc6IDZweCAwcHggNnB4IDI0cHg7XG4gICAgfVxuICB9XG5gO1xuXG5cbi8vIGluc2VydCBDdXJyZW50XG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxTdHlsZWRMb2dvIGNsYXNzTmFtZT0nbG9nbycgc3JjPXtsb2dvfSAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxTdHlsZWRNb2JpbGVMb2dvIGNsYXNzTmFtZT0nbG9nb01vYmlsZScgc3JjPXtsb2dvTW9iaWxlfSAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICB7LyogeyFjdXJyZW50VXNlciA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgIDxTdHlsZWRMb2dvIGNsYXNzTmFtZT0nbG9nbycgc3JjPXtsb2dvfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgIDxTdHlsZWRNb2JpbGVMb2dvIGNsYXNzTmFtZT0nbG9nb01vYmlsZScgc3JjPXtsb2dvTW9iaWxlfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQnPlxuICAgICAgICAgICAgPFN0eWxlZExvZ28gY2xhc3NOYW1lPSdsb2dvJyBzcmM9e2xvZ299IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQnPlxuICAgICAgICAgICAgPFN0eWxlZE1vYmlsZUxvZ28gY2xhc3NOYW1lPSdsb2dvTW9iaWxlJyBzcmM9e2xvZ29Nb2JpbGV9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8Lz5cbiAgICAgICl9ICovfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/logo.js\n");

/***/ })

})