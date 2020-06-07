webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styles/GlobalStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/GlobalStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ \"./components/styles/theme.js\");\n/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device */ \"./components/styles/device.js\");\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  html {\\n    box-sizing: border-box;\\n    width: 100%\\n    font-size: 62.5%;\\n    @media \", \" {\\n    font-size: 50%;\\n    line-heigt: 1.2;\\n  }\\n  }\\n\\n  *,\\n  *:before,\\n  *:after {\\n    box-sizing: inherit;\\n  }\\n\\n  body {\\n    margin: 0;\\n    width: 100%;\\n    min-height: 100%;\\n    -moz-osx-font-smoothing: grayscale;\\n    -webkit-font-smoothing: antialiased;\\n    background-color: \", \";\\n    color: \", \";\\n    font-family: \", \";\\n    font-size: 62.5%;\\n    line-height: 1.5;\\n  }\\n\\n  @media \", \" {\\n    font-size: 50%;\\n    line-heigt: 1.2;\\n  }\\n\\n  h1,\\n  h2,\\n  h3 {\\n    font-weight: 600;\\n    color: \", \";\\n    margin: 0 0 10px 0;\\n  }\\n\\n  h1 {\\n      font-size: \", \"\\n  }\\n  h2 {\\n      font-size: \", \"\\n  }\\n  h3 {\\n      font-size: \", \"\\n  }\\n\\n  img {\\n      vertical-align: middle;\\n  }\\n\\n  svg {\\n      fill: currentColor;\\n      vertical-align: middle;\\n  }\\n\\n  button {\\n      cursor: pointer;\\n      border: 0;\\n      border-radius: 0;\\n\\n      &:focus,\\n      &:active {\\n          outline-color: \", \"\\n      }\\n  }\\n\\n  input, textarea {\\n    border-radius: 0;\\n    outline: 0;\\n\\n    &:focus {\\n      outline: 0;\\n    }\\n    &::placeholder {\\n    }\\n    &:focus,\\n    &:active {\\n      &::placeholder {\\n        opacity: 0.5;\\n      }\\n    }\\n  }\\n\\n  a {\\n      text-decoration: none;\\n  }\\n\\n  ul {\\n      list-style: none;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar colors = _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colors,\n    fontSizes = _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fontSizes;\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), _device__WEBPACK_IMPORTED_MODULE_3__[\"device\"].tablet, colors.white, colors.darkText, _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Inter, _device__WEBPACK_IMPORTED_MODULE_3__[\"device\"].tablet, colors.darkText, fontSizes.Xbig, fontSizes.big, fontSizes.large, colors.lightPurple);\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9HbG9iYWxTdHlsZXMuanM/MTk3MSJdLCJuYW1lcyI6WyJjb2xvcnMiLCJ0aGVtZSIsImZvbnRTaXplcyIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJkZXZpY2UiLCJ0YWJsZXQiLCJ3aGl0ZSIsImRhcmtUZXh0IiwiSW50ZXIiLCJYYmlnIiwiYmlnIiwibGFyZ2UiLCJsaWdodFB1cnBsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFFUUEsTSxHQUFzQkMsOEMsQ0FBdEJELE07SUFBUUUsUyxHQUFjRCw4QyxDQUFkQyxTO0FBRWhCLElBQU1DLFdBQVcsR0FBR0MsMkVBQUgsb0JBS0pDLDhDQUFNLENBQUNDLE1BTEgsRUF1Qk9OLE1BQU0sQ0FBQ08sS0F2QmQsRUF3QkpQLE1BQU0sQ0FBQ1EsUUF4QkgsRUF5QkVQLDhDQUFLLENBQUNRLEtBekJSLEVBOEJOSiw4Q0FBTSxDQUFDQyxNQTlCRCxFQXVDSk4sTUFBTSxDQUFDUSxRQXZDSCxFQTRDRU4sU0FBUyxDQUFDUSxJQTVDWixFQStDRVIsU0FBUyxDQUFDUyxHQS9DWixFQWtERVQsU0FBUyxDQUFDVSxLQWxEWixFQXFFVVosTUFBTSxDQUFDYSxXQXJFakIsQ0FBakI7QUFtR2VWLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zdHlsZXMvR2xvYmFsU3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSc7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICcuL2RldmljZSc7XG5cbmNvbnN0IHsgY29sb3JzLCBmb250U2l6ZXMgfSA9IHRoZW1lO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBodG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlXG4gICAgZm9udC1zaXplOiA2Mi41JTtcbiAgICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fSB7XG4gICAgZm9udC1zaXplOiA1MCU7XG4gICAgbGluZS1oZWlndDogMS4yO1xuICB9XG4gIH1cblxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrVGV4dH07XG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuSW50ZXJ9O1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIEBtZWRpYSAke2RldmljZS50YWJsZXR9IHtcbiAgICBmb250LXNpemU6IDUwJTtcbiAgICBsaW5lLWhlaWd0OiAxLjI7XG4gIH1cblxuICBoMSxcbiAgaDIsXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrVGV4dH07XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB9XG5cbiAgaDEge1xuICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5YYmlnfVxuICB9XG4gIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuYmlnfVxuICB9XG4gIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMubGFyZ2V9XG4gIH1cblxuICBpbWcge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgb3V0bGluZS1jb2xvcjogJHtjb2xvcnMubGlnaHRQdXJwbGV9XG4gICAgICB9XG4gIH1cblxuICBpbnB1dCwgdGV4dGFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgIH1cbiAgICAmOmZvY3VzLFxuICAgICY6YWN0aXZlIHtcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgdWwge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/styles/GlobalStyles.js\n");

/***/ })

})