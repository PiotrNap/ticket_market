webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/header/menu.js":
/*!***********************************!*\
  !*** ./components/header/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_signin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/signin */ \"./components/icons/signin.js\");\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../paths */ \"./paths.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./components/styles/theme.js\");\n/* harmony import */ var _styles_device__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/device */ \"./components/styles/device.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/piotrnapierala/Desktop/microservices/ticketing/client/components/header/menu.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar colors = _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].colors,\n    fontSizes = _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].fontSizes;\nvar StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"menu__StyledMenu\",\n  componentId: \"xpytoq-0\"\n})([\"@media \", \"{flex:0 0 100%;}\"], _styles_device__WEBPACK_IMPORTED_MODULE_6__[\"device\"].mobileL);\n_c = StyledMenu;\nvar StyledList = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ul.withConfig({\n  displayName: \"menu__StyledList\",\n  componentId: \"xpytoq-1\"\n})([\"display:flex;flex-direction:row;align-items:center;@media \", \"{padding:}\"], _styles_device__WEBPACK_IMPORTED_MODULE_6__[\"device\"].mobileL);\n_c2 = StyledList;\nvar StyledListPoint = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].li.withConfig({\n  displayName: \"menu__StyledListPoint\",\n  componentId: \"xpytoq-2\"\n})([\"display:flex;align-items:center;padding:15px 10px;font-size:\", \";font-weight:500;cursor:pointer;@media \", \"{padding:5px 10px;}span{display:flex;align-items:center;}svg{height:1.05rem;width:auto;margin-left:0.6rem;margin-top:-1px;}:hover,:active{color:\", \";}\"], fontSizes.large, _styles_device__WEBPACK_IMPORTED_MODULE_6__[\"device\"].mobileL, colors.purple);\n_c3 = StyledListPoint;\nvar signin = _paths__WEBPACK_IMPORTED_MODULE_3__[\"default\"].signin,\n    signup = _paths__WEBPACK_IMPORTED_MODULE_3__[\"default\"].signup,\n    orders = _paths__WEBPACK_IMPORTED_MODULE_3__[\"default\"].orders,\n    signout = _paths__WEBPACK_IMPORTED_MODULE_3__[\"default\"].signout,\n    ticketNew = _paths__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ticketNew;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var currentUser = _ref.currentUser;\n  var links = [!currentUser && {\n    label: 'Sign Up',\n    href: \"\".concat(signup)\n  }, !currentUser && {\n    label: 'Sign In',\n    href: \"\".concat(signin),\n    icon: __jsx(_icons_signin__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 13\n      }\n    })\n  }, currentUser && {\n    label: 'Sell tickets',\n    href: \"\".concat(ticketNew)\n  }, currentUser && {\n    label: 'My Orders',\n    href: \"\".concat(orders)\n  }, currentUser && {\n    label: 'Sign Out',\n    href: \"\".concat(signout)\n  }].filter(function (linkConfig) {\n    return linkConfig;\n  }) // filter which are falsy\n  .map(function (_ref2) {\n    var label = _ref2.label,\n        href = _ref2.href,\n        icon = _ref2.icon;\n    return __jsx(StyledListPoint, {\n      key: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 11\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }\n    }, label, icon)));\n  });\n  return __jsx(StyledMenu, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }\n  }, __jsx(StyledList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, links));\n});\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"StyledMenu\");\n$RefreshReg$(_c2, \"StyledList\");\n$RefreshReg$(_c3, \"StyledListPoint\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9tZW51LmpzP2M0ZjMiXSwibmFtZXMiOlsiY29sb3JzIiwidGhlbWUiLCJmb250U2l6ZXMiLCJTdHlsZWRNZW51Iiwic3R5bGVkIiwiZGl2IiwiZGV2aWNlIiwibW9iaWxlTCIsIlN0eWxlZExpc3QiLCJ1bCIsIlN0eWxlZExpc3RQb2ludCIsImxpIiwibGFyZ2UiLCJwdXJwbGUiLCJzaWduaW4iLCJwYXRocyIsInNpZ251cCIsIm9yZGVycyIsInNpZ25vdXQiLCJ0aWNrZXROZXciLCJjdXJyZW50VXNlciIsImxpbmtzIiwibGFiZWwiLCJocmVmIiwiaWNvbiIsImZpbHRlciIsImxpbmtDb25maWciLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxNLEdBQXNCQyxxRCxDQUF0QkQsTTtJQUFRRSxTLEdBQWNELHFELENBQWRDLFM7QUFFaEIsSUFBTUMsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9DQUVMQyxxREFBTSxDQUFDQyxPQUZGLENBQWhCO0tBQU1KLFU7QUFPTixJQUFNSyxVQUFVLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsaUZBS0xILHFEQUFNLENBQUNDLE9BTEYsQ0FBaEI7TUFBTUMsVTtBQVVOLElBQU1FLGVBQWUsR0FBR04seURBQU0sQ0FBQ08sRUFBVjtBQUFBO0FBQUE7QUFBQSwwUUFJTlQsU0FBUyxDQUFDVSxLQUpKLEVBUVZOLHFEQUFNLENBQUNDLE9BUkcsRUEwQlJQLE1BQU0sQ0FBQ2EsTUExQkMsQ0FBckI7TUFBTUgsZTtJQThCRUksTSxHQUErQ0MsOEMsQ0FBL0NELE07SUFBUUUsTSxHQUF1Q0QsOEMsQ0FBdkNDLE07SUFBUUMsTSxHQUErQkYsOEMsQ0FBL0JFLE07SUFBUUMsTyxHQUF1QkgsOEMsQ0FBdkJHLE87SUFBU0MsUyxHQUFjSiw4QyxDQUFkSSxTO0FBRTFCLCtFQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDbEMsTUFBTUMsS0FBSyxHQUFHLENBQ1osQ0FBQ0QsV0FBRCxJQUFnQjtBQUNkRSxTQUFLLEVBQUUsU0FETztBQUVkQyxRQUFJLFlBQUtQLE1BQUw7QUFGVSxHQURKLEVBS1osQ0FBQ0ksV0FBRCxJQUFnQjtBQUNkRSxTQUFLLEVBQUUsU0FETztBQUVkQyxRQUFJLFlBQUtULE1BQUwsQ0FGVTtBQUdkVSxRQUFJLEVBQUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFEsR0FMSixFQVVaSixXQUFXLElBQUk7QUFBRUUsU0FBSyxFQUFFLGNBQVQ7QUFBeUJDLFFBQUksWUFBS0osU0FBTDtBQUE3QixHQVZILEVBV1pDLFdBQVcsSUFBSTtBQUFFRSxTQUFLLEVBQUUsV0FBVDtBQUFzQkMsUUFBSSxZQUFLTixNQUFMO0FBQTFCLEdBWEgsRUFZWkcsV0FBVyxJQUFJO0FBQUVFLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFJLFlBQUtMLE9BQUw7QUFBekIsR0FaSCxFQWNYTyxNQWRXLENBY0osVUFBQ0MsVUFBRDtBQUFBLFdBQWdCQSxVQUFoQjtBQUFBLEdBZEksRUFjd0I7QUFkeEIsR0FlWEMsR0FmVyxDQWVQLGlCQUEyQjtBQUFBLFFBQXhCTCxLQUF3QixTQUF4QkEsS0FBd0I7QUFBQSxRQUFqQkMsSUFBaUIsU0FBakJBLElBQWlCO0FBQUEsUUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQzlCLFdBQ0UsTUFBQyxlQUFEO0FBQWlCLFNBQUcsRUFBRUQsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsS0FESCxFQUVHRSxJQUZILENBREYsQ0FERixDQURGO0FBVUQsR0ExQlcsQ0FBZDtBQTRCQSxTQUNFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYUgsS0FBYixDQURGLENBREY7QUFLRCxDQWxDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVhZGVyL21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEljb25TaWduaW4gZnJvbSAnLi4vaWNvbnMvc2lnbmluJztcbmltcG9ydCBwYXRocyBmcm9tICcuLi8uLi9wYXRocyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAnLi4vc3R5bGVzL2RldmljZSc7XG5cbmNvbnN0IHsgY29sb3JzLCBmb250U2l6ZXMgfSA9IHRoZW1lO1xuXG5jb25zdCBTdHlsZWRNZW51ID0gc3R5bGVkLmRpdmBcbiAgXG4gIEBtZWRpYSAke2RldmljZS5tb2JpbGVMfSB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZExpc3QgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZUx9IHtcbiAgICBwYWRkaW5nOlxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRMaXN0UG9pbnQgPSBzdHlsZWQubGlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5sYXJnZX07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlTH0ge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICB9XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBoZWlnaHQ6IDEuMDVyZW07XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICB9XG5cbiAgOmhvdmVyLFxuICA6YWN0aXZlIHtcbiAgICBjb2xvcjogJHtjb2xvcnMucHVycGxlfTtcbiAgfVxuYDtcblxuY29uc3QgeyBzaWduaW4sIHNpZ251cCwgb3JkZXJzLCBzaWdub3V0LCB0aWNrZXROZXcgfSA9IHBhdGhzO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgICFjdXJyZW50VXNlciAmJiB7XG4gICAgICBsYWJlbDogJ1NpZ24gVXAnLFxuICAgICAgaHJlZjogYCR7c2lnbnVwfWAsXG4gICAgfSxcbiAgICAhY3VycmVudFVzZXIgJiYge1xuICAgICAgbGFiZWw6ICdTaWduIEluJyxcbiAgICAgIGhyZWY6IGAke3NpZ25pbn1gLFxuICAgICAgaWNvbjogPEljb25TaWduaW4gLz4sXG4gICAgfSxcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2VsbCB0aWNrZXRzJywgaHJlZjogYCR7dGlja2V0TmV3fWAgfSxcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnTXkgT3JkZXJzJywgaHJlZjogYCR7b3JkZXJzfWAgfSxcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBPdXQnLCBocmVmOiBgJHtzaWdub3V0fWAgfSxcbiAgXVxuICAgIC5maWx0ZXIoKGxpbmtDb25maWcpID0+IGxpbmtDb25maWcpIC8vIGZpbHRlciB3aGljaCBhcmUgZmFsc3lcbiAgICAubWFwKCh7IGxhYmVsLCBocmVmLCBpY29uIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMaXN0UG9pbnQga2V5PXtocmVmfT5cbiAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9TdHlsZWRMaXN0UG9pbnQ+XG4gICAgICApO1xuICAgIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZE1lbnU+XG4gICAgICA8U3R5bGVkTGlzdD57bGlua3N9PC9TdHlsZWRMaXN0PlxuICAgIDwvU3R5bGVkTWVudT5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/menu.js\n");

/***/ })

})