webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/signup */ \"./components/icons/signup.js\");\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paths */ \"./paths.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/piotrnapierala/Desktop/microservices/ticketing/client/components/menu.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  align-itemscen\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-transform: uppercase;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = StyledMenu;\nvar StyledList = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ul(_templateObject2());\n_c2 = StyledList;\nvar StyledListPoint = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].li(_templateObject3());\n_c3 = StyledListPoint;\nvar StyledAnchor = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].a(_templateObject4());\n_c4 = StyledAnchor;\nvar StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject5());\n_c5 = StyledIcon;\nvar signin = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signin,\n    signup = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signup,\n    orders = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orders,\n    signout = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signout,\n    ticketNew = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ticketNew;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var currentUser = _ref.currentUser;\n  var links = [!currentUser && {\n    label: 'Sign Up',\n    href: \"\".concat(signup)\n  }, !currentUser && {\n    label: 'Sign In',\n    href: \"\".concat(signin)\n  }, currentUser && {\n    label: 'Sell tickets',\n    href: \"\".concat(ticketNew)\n  }, currentUser && {\n    label: 'My Orders',\n    href: \"\".concat(orders)\n  }, currentUser && {\n    label: 'Sign Out',\n    href: \"\".concat(signout)\n  }].filter(function (linkConfig) {\n    return linkConfig;\n  }) // filter which are falsy\n  .map(function (_ref2) {\n    var label = _ref2.label,\n        href = _ref2.href;\n    return __jsx(StyledListPoint, {\n      key: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }\n    }, __jsx(StyledAnchor, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }, label)));\n  });\n  return __jsx(StyledMenu, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(StyledList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, links, __jsx(StyledIcon, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(_icons_signup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }))));\n});\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"StyledMenu\");\n$RefreshReg$(_c2, \"StyledList\");\n$RefreshReg$(_c3, \"StyledListPoint\");\n$RefreshReg$(_c4, \"StyledAnchor\");\n$RefreshReg$(_c5, \"StyledIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUuanM/NDUyYSJdLCJuYW1lcyI6WyJTdHlsZWRNZW51Iiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkTGlzdCIsInVsIiwiU3R5bGVkTGlzdFBvaW50IiwibGkiLCJTdHlsZWRBbmNob3IiLCJhIiwiU3R5bGVkSWNvbiIsInNpZ25pbiIsInBhdGhzIiwic2lnbnVwIiwib3JkZXJzIiwic2lnbm91dCIsInRpY2tldE5ldyIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZmlnIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWhCO0tBQU1GLFU7QUFJTixJQUFNRyxVQUFVLEdBQUdGLHlEQUFNLENBQUNHLEVBQVYsb0JBQWhCO01BQU1ELFU7QUFNTixJQUFNRSxlQUFlLEdBQUdKLHlEQUFNLENBQUNLLEVBQVYsb0JBQXJCO01BQU1ELGU7QUFFTixJQUFNRSxZQUFZLEdBQUdOLHlEQUFNLENBQUNPLENBQVYsb0JBQWxCO01BQU1ELFk7QUFFTixJQUFNRSxVQUFVLEdBQUdSLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO01BQU1PLFU7SUFFRUMsTSxHQUErQ0MsOEMsQ0FBL0NELE07SUFBUUUsTSxHQUF1Q0QsOEMsQ0FBdkNDLE07SUFBUUMsTSxHQUErQkYsOEMsQ0FBL0JFLE07SUFBUUMsTyxHQUF1QkgsOEMsQ0FBdkJHLE87SUFBU0MsUyxHQUFjSiw4QyxDQUFkSSxTO0FBRTFCLCtFQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDbEMsTUFBTUMsS0FBSyxHQUFHLENBQ1osQ0FBQ0QsV0FBRCxJQUFnQjtBQUFFRSxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsUUFBSSxZQUFLUCxNQUFMO0FBQXhCLEdBREosRUFFWixDQUFDSSxXQUFELElBQWdCO0FBQUVFLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxRQUFJLFlBQUtULE1BQUw7QUFBeEIsR0FGSixFQUdaTSxXQUFXLElBQUk7QUFBRUUsU0FBSyxFQUFFLGNBQVQ7QUFBeUJDLFFBQUksWUFBS0osU0FBTDtBQUE3QixHQUhILEVBSVpDLFdBQVcsSUFBSTtBQUFFRSxTQUFLLEVBQUUsV0FBVDtBQUFzQkMsUUFBSSxZQUFLTixNQUFMO0FBQTFCLEdBSkgsRUFLWkcsV0FBVyxJQUFJO0FBQUVFLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFJLFlBQUtMLE9BQUw7QUFBekIsR0FMSCxFQU9YTSxNQVBXLENBT0osVUFBQ0MsVUFBRDtBQUFBLFdBQWdCQSxVQUFoQjtBQUFBLEdBUEksRUFPd0I7QUFQeEIsR0FRWEMsR0FSVyxDQVFQLGlCQUFxQjtBQUFBLFFBQWxCSixLQUFrQixTQUFsQkEsS0FBa0I7QUFBQSxRQUFYQyxJQUFXLFNBQVhBLElBQVc7QUFDeEIsV0FDRSxNQUFDLGVBQUQ7QUFBaUIsU0FBRyxFQUFFQSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUEsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZUQsS0FBZixDQURGLENBREYsQ0FERjtBQU9ELEdBaEJXLENBQWQ7QUFrQkEsU0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELEtBREgsRUFFRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FERixDQURGO0FBMEJELENBN0NEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJY29uU2lnbnVwIGZyb20gJy4vaWNvbnMvc2lnbnVwJztcbmltcG9ydCBwYXRocyBmcm9tICcuLi9wYXRocyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkTWVudSA9IHN0eWxlZC5kaXZgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5gO1xuXG5jb25zdCBTdHlsZWRMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtc2NlblxuYDtcblxuY29uc3QgU3R5bGVkTGlzdFBvaW50ID0gc3R5bGVkLmxpYGA7XG5cbmNvbnN0IFN0eWxlZEFuY2hvciA9IHN0eWxlZC5hYGA7XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQuZGl2YGA7XG5cbmNvbnN0IHsgc2lnbmluLCBzaWdudXAsIG9yZGVycywgc2lnbm91dCwgdGlja2V0TmV3IH0gPSBwYXRocztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY3VycmVudFVzZXIgfSkgPT4ge1xuICBjb25zdCBsaW5rcyA9IFtcbiAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gVXAnLCBocmVmOiBgJHtzaWdudXB9YCB9LFxuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBJbicsIGhyZWY6IGAke3NpZ25pbn1gIH0sXG4gICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NlbGwgdGlja2V0cycsIGhyZWY6IGAke3RpY2tldE5ld31gIH0sXG4gICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ015IE9yZGVycycsIGhyZWY6IGAke29yZGVyc31gIH0sXG4gICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gT3V0JywgaHJlZjogYCR7c2lnbm91dH1gIH0sXG4gIF1cbiAgICAuZmlsdGVyKChsaW5rQ29uZmlnKSA9PiBsaW5rQ29uZmlnKSAvLyBmaWx0ZXIgd2hpY2ggYXJlIGZhbHN5XG4gICAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGlzdFBvaW50IGtleT17aHJlZn0+XG4gICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICA8U3R5bGVkQW5jaG9yPntsYWJlbH08L1N0eWxlZEFuY2hvcj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvU3R5bGVkTGlzdFBvaW50PlxuICAgICAgKTtcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRNZW51PlxuICAgICAgPFN0eWxlZExpc3Q+XG4gICAgICAgIHtsaW5rc31cbiAgICAgICAgPFN0eWxlZEljb24+XG4gICAgICAgICAgPEljb25TaWdudXAgLz5cbiAgICAgICAgPC9TdHlsZWRJY29uPlxuICAgICAgPC9TdHlsZWRMaXN0PlxuXG4gICAgICB7LyogPHN0eWxlIGpzeD57YFxuICAgICAgICAubmF2IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgJl9fbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgICZfX2ljb24ge1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+ICovfVxuICAgIDwvU3R5bGVkTWVudT5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu.js\n");

/***/ })

})