"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_alumnos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api/alumnos */ \"./pages/api/alumnos.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,_pages_api_alumnos__WEBPACK_IMPORTED_MODULE_2__.getPosts)().then((data)=>setPosts(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: post.attributes.Nombre_completo\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.attributes.urlLinkedin\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, post.id, true, {\n                fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUE2QjtBQUNvQjtBQUNFO0FBRW5ELE1BQU1LLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDLElBQU07UUFDZEgsNERBQVFBLEdBQ0xPLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUYsU0FBU0U7SUFDM0IsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO2tCQUNFSixNQUFNSyxHQUFHLENBQUNDLENBQUFBLHFCQUNULDhEQUFDRjs7a0NBQ0MsOERBQUNHO2tDQUFJRCxLQUFLRSxVQUFVLENBQUNDLGVBQWU7Ozs7OztrQ0FDcEMsOERBQUNDO2tDQUFHSixLQUFLRSxVQUFVLENBQUNHLFdBQVc7Ozs7Ozs7ZUFGdkJMLEtBQUtNLEVBQUU7Ozs7Ozs7Ozs7QUFPekI7R0FsQk1iO0tBQUFBO0FBb0JOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGdldFBvc3RzICB9IGZyb20gJy4uL3BhZ2VzL2FwaS9hbHVtbm9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBvc3RzKClcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0UG9zdHMoZGF0YSkpXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgPGgyPntwb3N0LmF0dHJpYnV0ZXMuTm9tYnJlX2NvbXBsZXRvfTwvaDI+XG4gICAgICAgICAgPHA+e3Bvc3QuYXR0cmlidXRlcy51cmxMaW5rZWRpbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJIZWFkIiwiZ2V0UG9zdHMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0aGVuIiwiZGF0YSIsImRpdiIsIm1hcCIsInBvc3QiLCJoMiIsImF0dHJpYnV0ZXMiLCJOb21icmVfY29tcGxldG8iLCJwIiwidXJsTGlua2VkaW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});