webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/signup */ \"./components/icons/signup.js\");\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paths */ \"./paths.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/theme */ \"./components/styles/theme.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/piotrnapierala/Desktop/microservices/ticketing/client/components/menu.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  align-items: center;\\n  padding: 15px 10px;\\n  font-size: \", \";\\n  font-weight: 500;\\n  cursor: pointer;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n\\n  li {\\n    display: flex;\\n    align-items: center;\\n    padding: 15px 10px;\\n    font-size: \", \";\\n    font-weight: 500;\\n    cursor: pointer;\\n\\n    span {\\n      display: flex;\\n      align-items: center;\\n    }\\n\\n    svg {\\n      height: 1.05rem;\\n      width: auto;\\n      margin-left: 0.5rem;\\n    }\\n\\n    :hover,\\n    :active {\\n      color: \", \";\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar colors = _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].colors,\n    fontSizes = _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontSizes;\nvar StyledList = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ul(_templateObject(), fontSizes.large, colors.purple);\n_c = StyledList;\nvar StyledListPoint = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].li(_templateObject2(), fontSizes.large);\n_c2 = StyledListPoint;\nvar StyledAnchor = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].a(_templateObject3());\nvar StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject4());\nvar signin = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signin,\n    signup = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signup,\n    orders = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orders,\n    signout = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].signout,\n    ticketNew = _paths__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ticketNew;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var currentUser = _ref.currentUser;\n  var links = [!currentUser && {\n    label: 'Sign Up',\n    href: \"\".concat(signup)\n  }, !currentUser && {\n    label: 'Sign In',\n    href: \"\".concat(signin),\n    icon: __jsx(_icons_signup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 13\n      }\n    })\n  }, currentUser && {\n    label: 'Sell tickets',\n    href: \"\".concat(ticketNew)\n  }, currentUser && {\n    label: 'My Orders',\n    href: \"\".concat(orders)\n  }, currentUser && {\n    label: 'Sign Out',\n    href: \"\".concat(signout)\n  }].filter(function (linkConfig) {\n    return linkConfig;\n  }) // filter which are falsy\n  .map(function (_ref2) {\n    var label = _ref2.label,\n        href = _ref2.href,\n        icon = _ref2.icon;\n    return __jsx(StyledListPoint, {\n      key: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 11\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 13\n      }\n    }, label, icon)));\n  });\n  return __jsx(StyledList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 5\n    }\n  }, links);\n});\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledList\");\n$RefreshReg$(_c2, \"StyledListPoint\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUuanM/NDUyYSJdLCJuYW1lcyI6WyJjb2xvcnMiLCJ0aGVtZSIsImZvbnRTaXplcyIsIlN0eWxlZExpc3QiLCJzdHlsZWQiLCJ1bCIsImxhcmdlIiwicHVycGxlIiwiU3R5bGVkTGlzdFBvaW50IiwibGkiLCJTdHlsZWRBbmNob3IiLCJhIiwiU3R5bGVkSWNvbiIsImRpdiIsInNpZ25pbiIsInBhdGhzIiwic2lnbnVwIiwib3JkZXJzIiwic2lnbm91dCIsInRpY2tldE5ldyIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJpY29uIiwiZmlsdGVyIiwibGlua0NvbmZpZyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsTSxHQUFzQkMscUQsQ0FBdEJELE07SUFBUUUsUyxHQUFjRCxxRCxDQUFkQyxTO0FBRWhCLElBQU1DLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixvQkFTQ0gsU0FBUyxDQUFDSSxLQVRYLEVBMEJETixNQUFNLENBQUNPLE1BMUJOLENBQWhCO0tBQU1KLFU7QUErQk4sSUFBTUssZUFBZSxHQUFHSix5REFBTSxDQUFDSyxFQUFWLHFCQUlOUCxTQUFTLENBQUNJLEtBSkosQ0FBckI7TUFBTUUsZTtBQVNOLElBQU1FLFlBQVksR0FBR04seURBQU0sQ0FBQ08sQ0FBVixvQkFBbEI7QUFFQSxJQUFNQyxVQUFVLEdBQUdSLHlEQUFNLENBQUNTLEdBQVYsb0JBQWhCO0lBR1FDLE0sR0FBK0NDLDhDLENBQS9DRCxNO0lBQVFFLE0sR0FBdUNELDhDLENBQXZDQyxNO0lBQVFDLE0sR0FBK0JGLDhDLENBQS9CRSxNO0lBQVFDLE8sR0FBdUJILDhDLENBQXZCRyxPO0lBQVNDLFMsR0FBY0osOEMsQ0FBZEksUztBQUUxQiwrRUFBcUI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ2xDLE1BQU1DLEtBQUssR0FBRyxDQUNaLENBQUNELFdBQUQsSUFBZ0I7QUFDZEUsU0FBSyxFQUFFLFNBRE87QUFFZEMsUUFBSSxZQUFLUCxNQUFMO0FBRlUsR0FESixFQUtaLENBQUNJLFdBQUQsSUFBZ0I7QUFDZEUsU0FBSyxFQUFFLFNBRE87QUFFZEMsUUFBSSxZQUFLVCxNQUFMLENBRlU7QUFHZFUsUUFBSSxFQUFFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhRLEdBTEosRUFVWkosV0FBVyxJQUFJO0FBQUVFLFNBQUssRUFBRSxjQUFUO0FBQXlCQyxRQUFJLFlBQUtKLFNBQUw7QUFBN0IsR0FWSCxFQVdaQyxXQUFXLElBQUk7QUFBRUUsU0FBSyxFQUFFLFdBQVQ7QUFBc0JDLFFBQUksWUFBS04sTUFBTDtBQUExQixHQVhILEVBWVpHLFdBQVcsSUFBSTtBQUFFRSxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxZQUFLTCxPQUFMO0FBQXpCLEdBWkgsRUFjWE8sTUFkVyxDQWNKLFVBQUNDLFVBQUQ7QUFBQSxXQUFnQkEsVUFBaEI7QUFBQSxHQWRJLEVBY3dCO0FBZHhCLEdBZVhDLEdBZlcsQ0FlUCxpQkFBMkI7QUFBQSxRQUF4QkwsS0FBd0IsU0FBeEJBLEtBQXdCO0FBQUEsUUFBakJDLElBQWlCLFNBQWpCQSxJQUFpQjtBQUFBLFFBQVhDLElBQVcsU0FBWEEsSUFBVztBQUM5QixXQUNFLE1BQUMsZUFBRDtBQUFpQixTQUFHLEVBQUVELElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFQSxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELEtBREgsRUFFR0UsSUFGSCxDQURGLENBREYsQ0FERjtBQVVELEdBMUJXLENBQWQ7QUE0QkEsU0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxLQURILENBREY7QUFLRCxDQWxDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSWNvblNpZ251cCBmcm9tICcuL2ljb25zL3NpZ251cCc7XG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vcGF0aHMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi9zdHlsZXMvdGhlbWUnO1xuXG5jb25zdCB7IGNvbG9ycywgZm9udFNpemVzIH0gPSB0aGVtZTtcblxuY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLmxhcmdlfTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgIGhlaWdodDogMS4wNXJlbTtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICB9XG5cbiAgICA6aG92ZXIsXG4gICAgOmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJHtjb2xvcnMucHVycGxlfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZExpc3RQb2ludCA9IHN0eWxlZC5saWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICBmb250LXNpemU6ICR7Zm9udFNpemVzLmxhcmdlfTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgU3R5bGVkQW5jaG9yID0gc3R5bGVkLmFgYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5kaXZgXG5gO1xuXG5jb25zdCB7IHNpZ25pbiwgc2lnbnVwLCBvcmRlcnMsIHNpZ25vdXQsIHRpY2tldE5ldyB9ID0gcGF0aHM7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgIWN1cnJlbnRVc2VyICYmIHtcbiAgICAgIGxhYmVsOiAnU2lnbiBVcCcsXG4gICAgICBocmVmOiBgJHtzaWdudXB9YCxcbiAgICB9LFxuICAgICFjdXJyZW50VXNlciAmJiB7XG4gICAgICBsYWJlbDogJ1NpZ24gSW4nLFxuICAgICAgaHJlZjogYCR7c2lnbmlufWAsXG4gICAgICBpY29uOiA8SWNvblNpZ251cCAvPixcbiAgICB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTZWxsIHRpY2tldHMnLCBocmVmOiBgJHt0aWNrZXROZXd9YCB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdNeSBPcmRlcnMnLCBocmVmOiBgJHtvcmRlcnN9YCB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIE91dCcsIGhyZWY6IGAke3NpZ25vdXR9YCB9LFxuICBdXG4gICAgLmZpbHRlcigobGlua0NvbmZpZykgPT4gbGlua0NvbmZpZykgLy8gZmlsdGVyIHdoaWNoIGFyZSBmYWxzeVxuICAgIC5tYXAoKHsgbGFiZWwsIGhyZWYsIGljb24gfSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExpc3RQb2ludCBrZXk9e2hyZWZ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1N0eWxlZExpc3RQb2ludD5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkTGlzdD5cbiAgICAgIHtsaW5rc31cbiAgICA8L1N0eWxlZExpc3Q+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menu.js\n");

/***/ })

})