webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/signup */ \"./components/icons/signup.js\");\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paths */ \"./paths.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/theme */ \"./components/styles/theme.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/piotrnapierala/Desktop/microservices/ticketing/client/components/menu.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n\\n  li {\\n    padding: 15px 10px;\\n    font-size: \", \";\\n    font-weight: 500;\\n    cursor: pointer;\\n\\n    :hover,\\n    :active {\\n      color: \", \";\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar colors = _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].colors,\n    fontSizes = _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontSizes;\nvar StyledList = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ul(_templateObject(), fontSizes.large, colors.purple);\n_c = StyledList;\nvar StyledListPoint = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].li(_templateObject2());\n_c2 = StyledListPoint;\nvar StyledAnchor = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].a(_templateObject3());\nvar StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject4());\n_c3 = StyledIcon;\nvar signin = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signin,\n    signup = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signup,\n    orders = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orders,\n    signout = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signout,\n    ticketNew = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ticketNew;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var currentUser = _ref.currentUser;\n  var links = [!currentUser && {\n    label: 'Sign Up',\n    href: \"\".concat(signup),\n    icon: '<IconSignup/>'\n  }, !currentUser && {\n    label: 'Sign In',\n    href: \"\".concat(signin)\n  }, currentUser && {\n    label: 'Sell tickets',\n    href: \"\".concat(ticketNew)\n  }, currentUser && {\n    label: 'My Orders',\n    href: \"\".concat(orders)\n  }, currentUser && {\n    label: 'Sign Out',\n    href: \"\".concat(signout)\n  }].filter(function (linkConfig) {\n    return linkConfig;\n  }) // filter which are falsy\n  .map(function (_ref2) {\n    var label = _ref2.label,\n        href = _ref2.href;\n    return __jsx(StyledListPoint, {\n      key: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }\n    }, label)));\n  });\n  return __jsx(StyledList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, links, __jsx(StyledIcon, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(_icons_signup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  })));\n});\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"StyledList\");\n$RefreshReg$(_c2, \"StyledListPoint\");\n$RefreshReg$(_c3, \"StyledIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUuanM/NDUyYSJdLCJuYW1lcyI6WyJjb2xvcnMiLCJ0aGVtZSIsImZvbnRTaXplcyIsIlN0eWxlZExpc3QiLCJzdHlsZWQiLCJ1bCIsImxhcmdlIiwicHVycGxlIiwiU3R5bGVkTGlzdFBvaW50IiwibGkiLCJTdHlsZWRBbmNob3IiLCJhIiwiU3R5bGVkSWNvbiIsImRpdiIsInNpZ25pbiIsInBhdGhzIiwic2lnbnVwIiwib3JkZXJzIiwic2lnbm91dCIsInRpY2tldE5ldyIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJpY29uIiwiZmlsdGVyIiwibGlua0NvbmZpZyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsTSxHQUFzQkMscUQsQ0FBdEJELE07SUFBUUUsUyxHQUFjRCxxRCxDQUFkQyxTO0FBRWhCLElBQU1DLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixvQkFPQ0gsU0FBUyxDQUFDSSxLQVBYLEVBYUROLE1BQU0sQ0FBQ08sTUFiTixDQUFoQjtLQUFNSixVO0FBa0JOLElBQU1LLGVBQWUsR0FBR0oseURBQU0sQ0FBQ0ssRUFBVixvQkFBckI7TUFBTUQsZTtBQUVOLElBQU1FLFlBQVksR0FBR04seURBQU0sQ0FBQ08sQ0FBVixvQkFBbEI7QUFFQSxJQUFNQyxVQUFVLEdBQUdSLHlEQUFNLENBQUNTLEdBQVYsb0JBQWhCO01BQU1ELFU7SUFFRUUsTSxHQUErQ0MsOEMsQ0FBL0NELE07SUFBUUUsTSxHQUF1Q0QsOEMsQ0FBdkNDLE07SUFBUUMsTSxHQUErQkYsOEMsQ0FBL0JFLE07SUFBUUMsTyxHQUF1QkgsOEMsQ0FBdkJHLE87SUFBU0MsUyxHQUFjSiw4QyxDQUFkSSxTO0FBRTFCLCtFQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDbEMsTUFBTUMsS0FBSyxHQUFHLENBQ1osQ0FBQ0QsV0FBRCxJQUFnQjtBQUFFRSxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsUUFBSSxZQUFLUCxNQUFMLENBQXhCO0FBQXVDUSxRQUFJLEVBQUU7QUFBN0MsR0FESixFQUVaLENBQUNKLFdBQUQsSUFBZ0I7QUFBRUUsU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFFBQUksWUFBS1QsTUFBTDtBQUF4QixHQUZKLEVBR1pNLFdBQVcsSUFBSTtBQUFFRSxTQUFLLEVBQUUsY0FBVDtBQUF5QkMsUUFBSSxZQUFLSixTQUFMO0FBQTdCLEdBSEgsRUFJWkMsV0FBVyxJQUFJO0FBQUVFLFNBQUssRUFBRSxXQUFUO0FBQXNCQyxRQUFJLFlBQUtOLE1BQUw7QUFBMUIsR0FKSCxFQUtaRyxXQUFXLElBQUk7QUFBRUUsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFFBQUksWUFBS0wsT0FBTDtBQUF6QixHQUxILEVBT1hPLE1BUFcsQ0FPSixVQUFDQyxVQUFEO0FBQUEsV0FBZ0JBLFVBQWhCO0FBQUEsR0FQSSxFQU93QjtBQVB4QixHQVFYQyxHQVJXLENBUVAsaUJBQXFCO0FBQUEsUUFBbEJMLEtBQWtCLFNBQWxCQSxLQUFrQjtBQUFBLFFBQVhDLElBQVcsU0FBWEEsSUFBVztBQUN4QixXQUNFLE1BQUMsZUFBRDtBQUFpQixTQUFHLEVBQUVBLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFQSxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9ELEtBQVAsQ0FERixDQURGLENBREY7QUFPRCxHQWhCVyxDQUFkO0FBa0JBLFNBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsS0FESCxFQUVFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQURGO0FBUUQsQ0EzQkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEljb25TaWdudXAgZnJvbSAnLi9pY29ucy9zaWdudXAnO1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uL3BhdGhzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4vc3R5bGVzL3RoZW1lJztcblxuY29uc3QgeyBjb2xvcnMsIGZvbnRTaXplcyB9ID0gdGhlbWU7XG5cbmNvbnN0IFN0eWxlZExpc3QgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbGkge1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLmxhcmdlfTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIDpob3ZlcixcbiAgICA6YWN0aXZlIHtcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5wdXJwbGV9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkTGlzdFBvaW50ID0gc3R5bGVkLmxpYGA7XG5cbmNvbnN0IFN0eWxlZEFuY2hvciA9IHN0eWxlZC5hYGA7XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQuZGl2YGA7XG5cbmNvbnN0IHsgc2lnbmluLCBzaWdudXAsIG9yZGVycywgc2lnbm91dCwgdGlja2V0TmV3IH0gPSBwYXRocztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY3VycmVudFVzZXIgfSkgPT4ge1xuICBjb25zdCBsaW5rcyA9IFtcbiAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gVXAnLCBocmVmOiBgJHtzaWdudXB9YCwgaWNvbjogJzxJY29uU2lnbnVwLz4nIH0sXG4gICAgIWN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIEluJywgaHJlZjogYCR7c2lnbmlufWAgfSxcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2VsbCB0aWNrZXRzJywgaHJlZjogYCR7dGlja2V0TmV3fWAgfSxcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnTXkgT3JkZXJzJywgaHJlZjogYCR7b3JkZXJzfWAgfSxcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBPdXQnLCBocmVmOiBgJHtzaWdub3V0fWAgfSxcbiAgXVxuICAgIC5maWx0ZXIoKGxpbmtDb25maWcpID0+IGxpbmtDb25maWcpIC8vIGZpbHRlciB3aGljaCBhcmUgZmFsc3lcbiAgICAubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMaXN0UG9pbnQga2V5PXtocmVmfT5cbiAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1N0eWxlZExpc3RQb2ludD5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkTGlzdD5cbiAgICAgIHtsaW5rc31cbiAgICAgIDxTdHlsZWRJY29uPlxuICAgICAgICA8SWNvblNpZ251cCAvPlxuICAgICAgPC9TdHlsZWRJY29uPlxuICAgIDwvU3R5bGVkTGlzdD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu.js\n");

/***/ })

})