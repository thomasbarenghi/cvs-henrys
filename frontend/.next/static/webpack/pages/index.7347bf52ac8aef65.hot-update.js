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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_alumnos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api/alumnos */ \"./pages/api/alumnos.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_alumnos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/alumnos */ \"./components/alumnos.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,_pages_api_alumnos__WEBPACK_IMPORTED_MODULE_2__.getPosts)().then((data)=>setPosts(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                            className: \"d-flex justify-content-between header-pad-t1\",\n                            style: {\n                                paddingTop: 30,\n                                paddingBottom: 30\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"../assets/img/Group%201.svg\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary boton\",\n                                    type: \"button\",\n                                    style: {\n                                        padding: \"0px !important\",\n                                        background: \"#ffffff !important\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"../assets/img/Group.png\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 7\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 25,\n                            columnNumber: 3\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"padding-l-136 padding-r-136 padding-b-80\",\n                            style: {\n                                paddingTop: 20\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"titulo2-regular color-neutral900 margin-b-0\",\n                                        children: [\n                                            \"Sigue a tus compa\\xf1eros de \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"soyHenry \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 35\n                                            }, undefined),\n                                            \"en Linkedin\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"color-body body-regular margin-b-24\",\n                                        children: [\n                                            \"Friendry es una web para compartir tu linkedin con tus compa\\xf1eros de cohorte\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary boton btn-t1\",\n                                        type: \"button\",\n                                        children: \"Ver mi perfil\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 5\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 38,\n                            columnNumber: 3\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"section-padding-t1\",\n                            style: {\n                                background: \"var(--color-neutral150)\",\n                                paddingTop: \"40px !important\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"contenedorComponentes\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex item-t1-inner\",\n                                        id: \"componente\",\n                                        style: {\n                                            gap: 16\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"imagen-redonda\",\n                                                src: \"../assets/img/11062b_d603be77b66b4a91bccb9d62892b4a7a_mv2.jpg\",\n                                                style: {\n                                                    width: 60,\n                                                    height: 60\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"d-flex flex-column justify-content-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                        style: {\n                                                            fontWeight: 400\n                                                        },\n                                                        className: \"subtitulo-regular color-neutral900 margin-b-0\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                style: {\n                                                                    fontWeight: 600\n                                                                },\n                                                                children: \"Maria Gallo\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                                                lineNumber: 77,\n                                                                columnNumber: 13\n                                                            }, undefined),\n                                                            \" FT35A\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 11\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"body-regular color-body margin-b-0\",\n                                                        children: \"linkedin link\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 11\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 7\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 3\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Thomas\\\\Desktop\\\\CVs Proyecto\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDb0I7QUFDRTtBQUNWO0FBRXpDLE1BQU1NLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDLElBQU07UUFDZEgsNERBQVFBLEdBQ0xRLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUYsU0FBU0U7SUFDM0IsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNBLDhEQUFDVixrREFBSUE7O2tDQUNMLDhEQUFDVztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXRCLDhEQUFDQzswQkFFRDs7c0NBQ0YsOERBQUNDOzRCQUNDQyxXQUFVOzRCQUNWQyxPQUFPO2dDQUFFQyxZQUFZO2dDQUFJQyxlQUFlOzRCQUFHOzs4Q0FFM0MsOERBQUNDO29DQUFJQyxLQUFJOzs7Ozs7OENBQ1QsOERBQUNDO29DQUNDTixXQUFVO29DQUNWTyxNQUFLO29DQUNMTixPQUFPO3dDQUFFTyxTQUFTO3dDQUFrQkMsWUFBWTtvQ0FBcUI7OENBRXJFLDRFQUFDTDt3Q0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2IsOERBQUNLOzRCQUNDVixXQUFVOzRCQUNWQyxPQUFPO2dDQUFFQyxZQUFZOzRCQUFHO3NDQUV4Qiw0RUFBQ1M7O2tEQUNDLDhEQUFDQzt3Q0FBR1osV0FBVTs7NENBQThDOzBEQUNoQyw4REFBQ2E7MERBQU87Ozs7Ozs0Q0FBa0I7MERBQ3BELDhEQUFDQzs7Ozs7Ozs7Ozs7a0RBRUgsOERBQUNDO3dDQUFFZixXQUFVOzs0Q0FBc0M7MERBR2pELDhEQUFDYzs7Ozs7Ozs7Ozs7a0RBRUgsOERBQUNSO3dDQUFPTixXQUFVO3dDQUErQk8sTUFBSztrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS25FLDhEQUFDRzs0QkFDQ1YsV0FBVTs0QkFDVkMsT0FBTztnQ0FDTFEsWUFBWTtnQ0FDWlAsWUFBWTs0QkFDZDs7OENBRUEsOERBQUNTOzs7Ozs4Q0FDRCw4REFBQ0E7b0NBQUlLLElBQUc7OENBQ04sNEVBQUNMO3dDQUFJWCxXQUFVO3dDQUF1QmdCLElBQUc7d0NBQWFmLE9BQU87NENBQUVnQixLQUFLO3dDQUFHOzswREFDckUsOERBQUNiO2dEQUNDSixXQUFVO2dEQUNWSyxLQUFJO2dEQUNKSixPQUFPO29EQUFFaUIsT0FBTztvREFBSUMsUUFBUTtnREFBRzs7Ozs7OzBEQUVqQyw4REFBQ1I7Z0RBQUlYLFdBQVU7O2tFQUNiLDhEQUFDWTt3REFDQ1gsT0FBTzs0REFBRW1CLFlBQVk7d0RBQUk7d0RBQ3pCcEIsV0FBVTs7MEVBRVYsOERBQUNxQjtnRUFBS3BCLE9BQU87b0VBQUVtQixZQUFZO2dFQUFJOzBFQUFHOzs7Ozs7NERBQWtCOzs7Ozs7O2tFQUV0RCw4REFBQ0w7d0RBQUVmLFdBQVU7a0VBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWE1RDtHQXRGTWQ7S0FBQUE7QUF3Rk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgZ2V0UG9zdHMgIH0gZnJvbSAnLi4vcGFnZXMvYXBpL2FsdW1ub3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2FsdW1ub3MnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBvc3RzKClcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0UG9zdHMoZGF0YSkpXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICA8L0hlYWQ+XG4gICAgPG1haW4+XG5cbiAgICA8PlxuICA8aGVhZGVyXG4gICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGhlYWRlci1wYWQtdDFcIlxuICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDMwLCBwYWRkaW5nQm90dG9tOiAzMCB9fVxuICA+XG4gICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL0dyb3VwJTIwMS5zdmdcIiAvPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBib3RvblwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4ICFpbXBvcnRhbnRcIiwgYmFja2dyb3VuZDogXCIjZmZmZmZmICFpbXBvcnRhbnRcIiB9fVxuICAgID5cbiAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9Hcm91cC5wbmdcIiAvPlxuICAgIDwvYnV0dG9uPlxuICA8L2hlYWRlcj5cbiAgPHNlY3Rpb25cbiAgICBjbGFzc05hbWU9XCJwYWRkaW5nLWwtMTM2IHBhZGRpbmctci0xMzYgcGFkZGluZy1iLTgwXCJcbiAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAyMCB9fVxuICA+XG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXR1bG8yLXJlZ3VsYXIgY29sb3ItbmV1dHJhbDkwMCBtYXJnaW4tYi0wXCI+XG4gICAgICAgIFNpZ3VlIGEgdHVzIGNvbXBhw7Flcm9zIGRlIDxzdHJvbmc+c295SGVucnkgPC9zdHJvbmc+ZW4gTGlua2VkaW5cbiAgICAgICAgPGJyIC8+XG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29sb3ItYm9keSBib2R5LXJlZ3VsYXIgbWFyZ2luLWItMjRcIj5cbiAgICAgICAgRnJpZW5kcnkgZXMgdW5hIHdlYiBwYXJhIGNvbXBhcnRpciB0dSBsaW5rZWRpbiBjb24gdHVzIGNvbXBhw7Flcm9zIGRlXG4gICAgICAgIGNvaG9ydGVcbiAgICAgICAgPGJyIC8+XG4gICAgICA8L3A+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBib3RvbiBidG4tdDFcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgIFZlciBtaSBwZXJmaWxcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIDxzZWN0aW9uXG4gICAgY2xhc3NOYW1lPVwic2VjdGlvbi1wYWRkaW5nLXQxXCJcbiAgICBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogXCJ2YXIoLS1jb2xvci1uZXV0cmFsMTUwKVwiLFxuICAgICAgcGFkZGluZ1RvcDogXCI0MHB4ICFpbXBvcnRhbnRcIlxuICAgIH19XG4gID5cbiAgICA8ZGl2IC8+XG4gICAgPGRpdiBpZD1cImNvbnRlbmVkb3JDb21wb25lbnRlc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggaXRlbS10MS1pbm5lclwiIGlkPVwiY29tcG9uZW50ZVwiIHN0eWxlPXt7IGdhcDogMTYgfX0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZW4tcmVkb25kYVwiXG4gICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy8xMTA2MmJfZDYwM2JlNzdiNjZiNGE5MWJjY2I5ZDYyODkyYjRhN2FfbXYyLmpwZ1wiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwLCBoZWlnaHQ6IDYwIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDFcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VidGl0dWxvLXJlZ3VsYXIgY29sb3ItbmV1dHJhbDkwMCBtYXJnaW4tYi0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+TWFyaWEgR2FsbG88L3NwYW4+IEZUMzVBXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5LXJlZ3VsYXIgY29sb3ItYm9keSBtYXJnaW4tYi0wXCI+bGlua2VkaW4gbGluazwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuPC8+XG5cblxuXG5cbiAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJIZWFkIiwiZ2V0UG9zdHMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9zdCIsIkhvbWUiLCJwb3N0cyIsInNldFBvc3RzIiwidGhlbiIsImRhdGEiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImhlYWRlciIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJpbWciLCJzcmMiLCJidXR0b24iLCJ0eXBlIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJzZWN0aW9uIiwiZGl2IiwiaDEiLCJzdHJvbmciLCJiciIsInAiLCJpZCIsImdhcCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFdlaWdodCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});