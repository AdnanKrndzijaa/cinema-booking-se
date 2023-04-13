"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie/[movieId]",{

/***/ "./pages/movie/[movieId].tsx":
/*!***********************************!*\
  !*** ./pages/movie/[movieId].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useMovie */ \"./hooks/useMovie.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Button */ \"./components/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Movie = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { movieId  } = router.query;\n    const { data  } = (0,_hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-[9.5vw] relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[100vh] flex flex-col relative z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 18,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-1 items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-4/6 flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-white mb-[24px]\",\n                                    children: data === null || data === void 0 ? void 0 : data.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 6\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-text mb-[40px]\",\n                                    children: data === null || data === void 0 ? void 0 : data.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 6\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-[12px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            type: \"primary\",\n                                            label: \"Buy Tickets\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            type: \"secondary\",\n                                            label: \"Watch Trailer\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 6\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                            lineNumber: 20,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 19,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                lineNumber: 17,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-full object-cover absolute left-0 top-0\",\n                src: data === null || data === void 0 ? void 0 : data.bannerUrl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                lineNumber: 36,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Movie, \"+g1mm2T+Ff7l1nWCR9hP96WHZWU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS9bbW92aWVJZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNjO0FBQ0M7QUFFQztBQUNBO0FBRXpDLE1BQU1LLFFBQVEsSUFBTTs7SUFDbkIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUssUUFBTyxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFaEMsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR1IsMkRBQVFBLENBQUNNO0lBR3pCLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDakIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ1IsMERBQU1BOzs7OztrQ0FDUCw4REFBQ087d0JBQUlDLFdBQVU7a0NBQ2QsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDZCw4REFBQ0M7b0NBQUdELFdBQVU7OENBQXdCRixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1JLEtBQUs7Ozs7Ozs4Q0FDakQsOERBQUNDO29DQUFFSCxXQUFVOzhDQUF1QkYsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNTSxXQUFXOzs7Ozs7OENBQ3JELDhEQUFDTDtvQ0FBSUMsV0FBVTs7c0RBQ2QsOERBQUNQLDBEQUFNQTs0Q0FDUFksTUFBSzs0Q0FDTEMsT0FBTTs7Ozs7O3NEQUVOLDhEQUFDYiwwREFBTUE7NENBQ1BZLE1BQUs7NENBQ0xDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1WLDhEQUFDQztnQkFBSVAsV0FBVTtnQkFBbURRLEtBQUtWLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVcsU0FBUzs7Ozs7Ozs7Ozs7O0FBR3hGO0dBL0JNZjs7UUFDVUgsa0RBQVNBO1FBR1BELHVEQUFRQTs7O0tBSnBCSTtBQWlDTiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZS9bbW92aWVJZF0udHN4PzJhMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlTW92aWUgZnJvbSAnQC9ob29rcy91c2VNb3ZpZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uJztcclxuXHJcbmNvbnN0IE1vdmllID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHsgbW92aWVJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuXHRjb25zdCB7IGRhdGEgfSA9IHVzZU1vdmllKG1vdmllSWQgYXMgc3RyaW5nKTtcclxuXHRcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdweC1bOS41dnddIHJlbGF0aXZlJz5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdoLVsxMDB2aF0gZmxleCBmbGV4LWNvbCByZWxhdGl2ZSB6LTEwJz5cclxuXHRcdFx0PE5hdmJhci8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTQvNiBmbGV4IGZsZXgtY29sJz5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUgbWItWzI0cHhdJz57ZGF0YT8udGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC10ZXh0IG1iLVs0MHB4XSc+e2RhdGE/LmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC1bMTJweF0nPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwicHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiQnV5IFRpY2tldHNcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwic2Vjb25kYXJ5XCJcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJXYXRjaCBUcmFpbGVyXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGltZyBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGFic29sdXRlIGxlZnQtMCB0b3AtMCcgc3JjPXtkYXRhPy5iYW5uZXJVcmx9Lz5cclxuXHQ8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTW92aWUiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJCdXR0b24iLCJNb3ZpZSIsInJvdXRlciIsIm1vdmllSWQiLCJxdWVyeSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwidHlwZSIsImxhYmVsIiwiaW1nIiwic3JjIiwiYmFubmVyVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movie/[movieId].tsx\n"));

/***/ })

});