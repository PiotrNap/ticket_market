webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/signup */ \"./components/icons/signup.js\");\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paths */ \"./paths.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/theme */ \"./components/styles/theme.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/piotrnapierala/Desktop/microservices/ticketing/client/components/menu.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 1.05rem;\\n  width: auto;\\n  margin-left: 0.5rem;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  align-items: center;\\n  padding: 15px 10px;\\n  font-size: \", \";\\n  font-weight: 500;\\n  cursor: pointer;\\n\\n  :hover,\\n  :active {\\n    color: \", \";\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n\\n  li {\\n    display: flex;\\n    align-items: center;\\n    padding: 15px 10px;\\n    font-size: \", \";\\n    font-weight: 500;\\n    cursor: pointer;\\n\\n    span {\\n      display: flex;\\n      align-items: center;\\n    }\\n\\n    svg {\\n      height: 1.05rem;\\n      width: auto;\\n      margin-left: 0.5rem;\\n    }\\n\\n    :hover,\\n    :active {\\n      color: \", \";\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar colors = _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].colors,\n    fontSizes = _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontSizes;\nvar StyledList = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ul(_templateObject(), fontSizes.large, colors.purple);\n_c = StyledList;\nvar StyledListPoint = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].li(_templateObject2(), fontSizes.large, colors.purple);\n_c2 = StyledListPoint;\nvar StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].span(_templateObject3());\nvar StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].IconSignup(_templateObject4());\n_c3 = StyledIcon;\nvar signin = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signin,\n    signup = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signup,\n    orders = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orders,\n    signout = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signout,\n    ticketNew = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ticketNew;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var currentUser = _ref.currentUser;\n  var links = [!currentUser && {\n    label: 'Sign Up',\n    href: \"\".concat(signup)\n  }, !currentUser && {\n    label: 'Sign In',\n    href: \"\".concat(signin),\n    icon: __jsx(StyledIcon, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 13\n      }\n    })\n  }, currentUser && {\n    label: 'Sell tickets',\n    href: \"\".concat(ticketNew)\n  }, currentUser && {\n    label: 'My Orders',\n    href: \"\".concat(orders)\n  }, currentUser && {\n    label: 'Sign Out',\n    href: \"\".concat(signout)\n  }].filter(function (linkConfig) {\n    return linkConfig;\n  }) // filter which are falsy\n  .map(function (_ref2) {\n    var label = _ref2.label,\n        href = _ref2.href,\n        icon = _ref2.icon;\n    return __jsx(StyledListPoint, {\n      key: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 13\n      }\n    }, label, icon)));\n  });\n  return __jsx(StyledList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 10\n    }\n  }, links);\n});\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"StyledList\");\n$RefreshReg$(_c2, \"StyledListPoint\");\n$RefreshReg$(_c3, \"StyledIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUuanM/NDUyYSJdLCJuYW1lcyI6WyJjb2xvcnMiLCJ0aGVtZSIsImZvbnRTaXplcyIsIlN0eWxlZExpc3QiLCJzdHlsZWQiLCJ1bCIsImxhcmdlIiwicHVycGxlIiwiU3R5bGVkTGlzdFBvaW50IiwibGkiLCJTdHlsZWRTcGFuIiwic3BhbiIsIlN0eWxlZEljb24iLCJJY29uU2lnbnVwIiwic2lnbmluIiwicGF0aHMiLCJzaWdudXAiLCJvcmRlcnMiLCJzaWdub3V0IiwidGlja2V0TmV3IiwiY3VycmVudFVzZXIiLCJsaW5rcyIsImxhYmVsIiwiaHJlZiIsImljb24iLCJmaWx0ZXIiLCJsaW5rQ29uZmlnIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxNLEdBQXNCQyxxRCxDQUF0QkQsTTtJQUFRRSxTLEdBQWNELHFELENBQWRDLFM7QUFFaEIsSUFBTUMsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWLG9CQVNDSCxTQUFTLENBQUNJLEtBVFgsRUEwQkROLE1BQU0sQ0FBQ08sTUExQk4sQ0FBaEI7S0FBTUosVTtBQStCTixJQUFNSyxlQUFlLEdBQUdKLHlEQUFNLENBQUNLLEVBQVYscUJBSU5QLFNBQVMsQ0FBQ0ksS0FKSixFQVVSTixNQUFNLENBQUNPLE1BVkMsQ0FBckI7TUFBTUMsZTtBQWNOLElBQU1FLFVBQVUsR0FBR04seURBQU0sQ0FBQ08sSUFBVixvQkFBaEI7QUFHQSxJQUFNQyxVQUFVLEdBQUdSLHlEQUFNLENBQUNTLFVBQVYsb0JBQWhCO01BQU1ELFU7SUFNRUUsTSxHQUErQ0MsOEMsQ0FBL0NELE07SUFBUUUsTSxHQUF1Q0QsOEMsQ0FBdkNDLE07SUFBUUMsTSxHQUErQkYsOEMsQ0FBL0JFLE07SUFBUUMsTyxHQUF1QkgsOEMsQ0FBdkJHLE87SUFBU0MsUyxHQUFjSiw4QyxDQUFkSSxTO0FBRTFCLCtFQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDbEMsTUFBTUMsS0FBSyxHQUFHLENBQ1osQ0FBQ0QsV0FBRCxJQUFnQjtBQUNkRSxTQUFLLEVBQUUsU0FETztBQUVkQyxRQUFJLFlBQUtQLE1BQUw7QUFGVSxHQURKLEVBS1osQ0FBQ0ksV0FBRCxJQUFnQjtBQUNkRSxTQUFLLEVBQUUsU0FETztBQUVkQyxRQUFJLFlBQUtULE1BQUwsQ0FGVTtBQUdkVSxRQUFJLEVBQUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUSxHQUxKLEVBVVpKLFdBQVcsSUFBSTtBQUFFRSxTQUFLLEVBQUUsY0FBVDtBQUF5QkMsUUFBSSxZQUFLSixTQUFMO0FBQTdCLEdBVkgsRUFXWkMsV0FBVyxJQUFJO0FBQUVFLFNBQUssRUFBRSxXQUFUO0FBQXNCQyxRQUFJLFlBQUtOLE1BQUw7QUFBMUIsR0FYSCxFQVlaRyxXQUFXLElBQUk7QUFBRUUsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFFBQUksWUFBS0wsT0FBTDtBQUF6QixHQVpILEVBY1hPLE1BZFcsQ0FjSixVQUFDQyxVQUFEO0FBQUEsV0FBZ0JBLFVBQWhCO0FBQUEsR0FkSSxFQWN3QjtBQWR4QixHQWVYQyxHQWZXLENBZVAsaUJBQTJCO0FBQUEsUUFBeEJMLEtBQXdCLFNBQXhCQSxLQUF3QjtBQUFBLFFBQWpCQyxJQUFpQixTQUFqQkEsSUFBaUI7QUFBQSxRQUFYQyxJQUFXLFNBQVhBLElBQVc7QUFDOUIsV0FDRSxNQUFDLGVBQUQ7QUFBaUIsU0FBRyxFQUFFRCxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUEsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxLQURILEVBRUdFLElBRkgsQ0FERixDQURGLENBREY7QUFVRCxHQTFCVyxDQUFkO0FBNEJBLFNBQU8sTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYUgsS0FBYixDQUFQO0FBQ0QsQ0E5QkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEljb25TaWdudXAgZnJvbSAnLi9pY29ucy9zaWdudXAnO1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uL3BhdGhzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4vc3R5bGVzL3RoZW1lJztcblxuY29uc3QgeyBjb2xvcnMsIGZvbnRTaXplcyB9ID0gdGhlbWU7XG5cbmNvbnN0IFN0eWxlZExpc3QgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5sYXJnZX07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICBoZWlnaHQ6IDEuMDVyZW07XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuXG4gICAgOmhvdmVyLFxuICAgIDphY3RpdmUge1xuICAgICAgY29sb3I6ICR7Y29sb3JzLnB1cnBsZX07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRMaXN0UG9pbnQgPSBzdHlsZWQubGlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5sYXJnZX07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICA6aG92ZXIsXG4gIDphY3RpdmUge1xuICAgIGNvbG9yOiAke2NvbG9ycy5wdXJwbGV9O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW5gXG5gO1xuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLkljb25TaWdudXBgXG4gIGhlaWdodDogMS4wNXJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG5gO1xuXG5jb25zdCB7IHNpZ25pbiwgc2lnbnVwLCBvcmRlcnMsIHNpZ25vdXQsIHRpY2tldE5ldyB9ID0gcGF0aHM7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgIWN1cnJlbnRVc2VyICYmIHtcbiAgICAgIGxhYmVsOiAnU2lnbiBVcCcsXG4gICAgICBocmVmOiBgJHtzaWdudXB9YCxcbiAgICB9LFxuICAgICFjdXJyZW50VXNlciAmJiB7XG4gICAgICBsYWJlbDogJ1NpZ24gSW4nLFxuICAgICAgaHJlZjogYCR7c2lnbmlufWAsXG4gICAgICBpY29uOiA8U3R5bGVkSWNvbiAvPixcbiAgICB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTZWxsIHRpY2tldHMnLCBocmVmOiBgJHt0aWNrZXROZXd9YCB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdNeSBPcmRlcnMnLCBocmVmOiBgJHtvcmRlcnN9YCB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIE91dCcsIGhyZWY6IGAke3NpZ25vdXR9YCB9LFxuICBdXG4gICAgLmZpbHRlcigobGlua0NvbmZpZykgPT4gbGlua0NvbmZpZykgLy8gZmlsdGVyIHdoaWNoIGFyZSBmYWxzeVxuICAgIC5tYXAoKHsgbGFiZWwsIGhyZWYsIGljb24gfSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExpc3RQb2ludCBrZXk9e2hyZWZ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1N0eWxlZExpc3RQb2ludD5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIDxTdHlsZWRMaXN0PntsaW5rc308L1N0eWxlZExpc3Q+O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/menu.js\n");

/***/ })

})