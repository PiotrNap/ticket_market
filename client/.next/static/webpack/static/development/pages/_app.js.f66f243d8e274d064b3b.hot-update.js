webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styles/GlobalStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/GlobalStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ \"./components/styles/theme.js\");\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  html {\\n    box-sizing: border-box;\\n    width: 100%\\n  }\\n\\n  *,\\n  *:before,\\n  *:after {\\n    box-sizing: inherit;\\n  }\\n\\n  body {\\n    margin: 0;\\n    width: 100%;\\n    min-height: 100%;\\n    -moz-osx-font-smoothing: grayscale;\\n    -webkit-font-smoothing: antialiased;\\n    background-color: \", \";\\n    color: \", \";\\n    font-family: \", \";\\n    font-size: \", \";\\n    line-height: 1.5;\\n  }\\n\\n  @media screen and (max-width:)\\n\\n  h1,\\n  h2,\\n  h3 {\\n    font-weight: 600;\\n    color: \", \";\\n    margin: 0 0 10px 0;\\n  }\\n\\n  h1 {\\n      font-size: \", \"\\n  }\\n  h2 {\\n      font-size: \", \"\\n  }\\n  h3 {\\n      font-size: \", \"\\n  }\\n\\n  img {\\n      vertical-align: middle;\\n  }\\n\\n  svg {\\n      fill: currentColor;\\n      vertical-align: middle;\\n  }\\n\\n  button {\\n      cursor: pointer;\\n      border: 0;\\n      border-radius: 0;\\n\\n      &:focus,\\n      &:active {\\n          outline-color: \", \"\\n      }\\n  }\\n\\n  input, textarea {\\n    border-radius: 0;\\n    outline: 0;\\n\\n    &:focus {\\n      outline: 0;\\n    }\\n    &::placeholder {\\n    }\\n    &:focus,\\n    &:active {\\n      &::placeholder {\\n        opacity: 0.5;\\n      }\\n    }\\n  }\\n\\n  a {\\n      text-decoration: none;\\n  }\\n\\n  ul {\\n      list-style: none;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar colors = _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colors,\n    fontSizes = _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fontSizes;\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), colors.white, colors.darkText, _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Inter, fontSizes.normal, colors.darkText, fontSizes.Xbig, fontSizes.big, fontSizes.large, colors.lightPurple);\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9HbG9iYWxTdHlsZXMuanM/MTk3MSJdLCJuYW1lcyI6WyJjb2xvcnMiLCJ0aGVtZSIsImZvbnRTaXplcyIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJ3aGl0ZSIsImRhcmtUZXh0IiwiSW50ZXIiLCJub3JtYWwiLCJYYmlnIiwiYmlnIiwibGFyZ2UiLCJsaWdodFB1cnBsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFFUUEsTSxHQUFzQkMsOEMsQ0FBdEJELE07SUFBUUUsUyxHQUFjRCw4QyxDQUFkQyxTO0FBRWhCLElBQU1DLFdBQVcsR0FBR0MsMkVBQUgsb0JBa0JPSixNQUFNLENBQUNLLEtBbEJkLEVBbUJKTCxNQUFNLENBQUNNLFFBbkJILEVBb0JFTCw4Q0FBSyxDQUFDTSxLQXBCUixFQXFCQUwsU0FBUyxDQUFDTSxNQXJCVixFQStCSlIsTUFBTSxDQUFDTSxRQS9CSCxFQW9DRUosU0FBUyxDQUFDTyxJQXBDWixFQXVDRVAsU0FBUyxDQUFDUSxHQXZDWixFQTBDRVIsU0FBUyxDQUFDUyxLQTFDWixFQTZEVVgsTUFBTSxDQUFDWSxXQTdEakIsQ0FBakI7QUEyRmVULDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zdHlsZXMvR2xvYmFsU3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IHsgY29sb3JzLCBmb250U2l6ZXMgfSA9IHRoZW1lO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBodG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlXG4gIH1cblxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrVGV4dH07XG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuSW50ZXJ9O1xuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMubm9ybWFsfTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDopXG5cbiAgaDEsXG4gIGgyLFxuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogJHtjb2xvcnMuZGFya1RleHR9O1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgfVxuXG4gIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuWGJpZ31cbiAgfVxuICBoMiB7XG4gICAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLmJpZ31cbiAgfVxuICBoMyB7XG4gICAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLmxhcmdlfVxuICB9XG5cbiAgaW1nIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICBzdmcge1xuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIG91dGxpbmUtY29sb3I6ICR7Y29sb3JzLmxpZ2h0UHVycGxlfVxuICAgICAgfVxuICB9XG5cbiAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICB9XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/styles/GlobalStyles.js\n");

/***/ })

})