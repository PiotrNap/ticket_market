webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/logo.js":
/*!****************************!*\
  !*** ./components/logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/logo.png */ \"./public/logo.png\");\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_logo_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/logoMobile.png */ \"./public/logoMobile.png\");\n/* harmony import */ var _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/piotrnapierala/Desktop/microservices/ticketing/client/components/logo.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar StyledMobileLogo = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img.withConfig({\n  displayName: \"logo__StyledMobileLogo\",\n  componentId: \"sc-1iamlq6-0\"\n})([\"img{content:\", \";width:45px;height:auto;display:none;padding:3px 0 2px 0;}@media screen and (max-width:600px){display:block;}\"], _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default.a);\n_c = StyledMobileLogo;\nvar StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a.withConfig({\n  displayName: \"logo__StyledLogo\",\n  componentId: \"sc-1iamlq6-1\"\n})([\"background:url(\", \");display:block;width:240px;height:auto;padding:8px 0 8px 24px;:hover,:focus{cursor:pointer;}@media screen and (max-width:1000px){width:210px;padding:6px 0px 6px 24px;}\"], _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a);\n_c2 = StyledLogo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var currentUser = _ref.currentUser;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(StyledLogo, {\n    src: _public_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(StyledMobileLogo, {\n    src: _public_logoMobile_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  })));\n});\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledMobileLogo\");\n$RefreshReg$(_c2, \"StyledLogo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ28uanM/Njg2ZiJdLCJuYW1lcyI6WyJTdHlsZWRNb2JpbGVMb2dvIiwic3R5bGVkIiwiaW1nIiwibG9nb01vYmlsZSIsIlN0eWxlZExvZ28iLCJhIiwibG9nbyIsImN1cnJlbnRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0lBRVBDLDZEQUZPLENBQXRCO0tBQU1ILGdCO0FBY04sSUFBTUksVUFBVSxHQUFHSCx5REFBTSxDQUFDSSxDQUFWO0FBQUE7QUFBQTtBQUFBLG9NQUVNQyx1REFGTixDQUFoQjtNQUFNRixVO0FBc0JTLCtFQUFxQjtBQUFBLE1BQWxCRyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDbEMsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxZQUFRLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBWSxPQUFHLEVBQUVELHVEQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnQkFBRDtBQUFrQixPQUFHLEVBQUVILDZEQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGO0FBOEJELENBL0JEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sb2dvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZ28gZnJvbSAnLi4vcHVibGljL2xvZ28ucG5nJztcbmltcG9ydCBsb2dvTW9iaWxlIGZyb20gJy4uL3B1YmxpYy9sb2dvTW9iaWxlLnBuZyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkTW9iaWxlTG9nbyA9IHN0eWxlZC5pbWdgXG4gIGltZyB7XG4gICAgY29udGVudDogJHtsb2dvTW9iaWxlfTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nOiAzcHggMCAycHggMDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZExvZ28gPSBzdHlsZWQuYWBcbiAgXG4gICAgYmFja2dyb3VuZDogdXJsKCR7bG9nb30pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogOHB4IDAgOHB4IDI0cHg7XG4gIFxuXG4gIDpob3ZlcixcbiAgOmZvY3VzIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICBcbiAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgIHBhZGRpbmc6IDZweCAwcHggNnB4IDI0cHg7XG4gICAgXG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGluayBocmVmPScvJyBwYXNzSHJlZj5cbiAgICAgICAgPFN0eWxlZExvZ28gc3JjPXtsb2dvfSAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxTdHlsZWRNb2JpbGVMb2dvIHNyYz17bG9nb01vYmlsZX0gLz5cbiAgICAgIDwvTGluaz5cblxuICAgICAgey8qIHshY3VycmVudFVzZXIgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICA8U3R5bGVkTG9nbyBjbGFzc05hbWU9J2xvZ28nIHNyYz17bG9nb30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICA8U3R5bGVkTW9iaWxlTG9nbyBjbGFzc05hbWU9J2xvZ29Nb2JpbGUnIHNyYz17bG9nb01vYmlsZX0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGluayBocmVmPScvZGFzaGJvYXJkJz5cbiAgICAgICAgICAgIDxTdHlsZWRMb2dvIGNsYXNzTmFtZT0nbG9nbycgc3JjPXtsb2dvfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvZGFzaGJvYXJkJz5cbiAgICAgICAgICAgIDxTdHlsZWRNb2JpbGVMb2dvIGNsYXNzTmFtZT0nbG9nb01vYmlsZScgc3JjPXtsb2dvTW9iaWxlfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgICApfSAqL31cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/logo.js\n");

/***/ })

})