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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useMovie */ \"./hooks/useMovie.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Button */ \"./components/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Movie = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { movieId  } = router.query;\n    const { data  } = (0,_hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative px-[9.5vw]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[100vh] flex flex-col relative z-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                lineNumber: 19,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-1 items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-4/6 flex flex-col\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-white mb-[24px]\",\n                                            children: data === null || data === void 0 ? void 0 : data.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-text mb-[40px]\",\n                                            children: data === null || data === void 0 ? void 0 : data.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex gap-[12px]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    type: \"primary\",\n                                                    label: \"Buy Tickets\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                    lineNumber: 25,\n                                                    columnNumber: 8\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    type: \"secondary\",\n                                                    label: \"Watch Trailer\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                    lineNumber: 29,\n                                                    columnNumber: 8\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 6\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                lineNumber: 20,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 18,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full object-cover absolute left-0 top-0 z-[2] movie-overlay-gradient\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 37,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-full h-full object-cover absolute left-0 top-0 z-[1]\",\n                        src: data === null || data === void 0 ? void 0 : data.thumbnailUrl\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                lineNumber: 17,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex px-[9.5vw]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/6 pr-[110px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"rounded-[10px]\",\n                            src: data === null || data === void 0 ? void 0 : data.bannerUrl\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                            lineNumber: 42,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 41,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-4/6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"mb-[28px] text-white\",\n                                children: \"Storyline\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                lineNumber: 45,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-text\",\n                                children: data === null || data === void 0 ? void 0 : data.storyline\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                lineNumber: 46,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 44,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                lineNumber: 40,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Movie, \"+g1mm2T+Ff7l1nWCR9hP96WHZWU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS9bbW92aWVJZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNjO0FBQ0M7QUFFQztBQUNBO0FBRXpDLE1BQU1LLFFBQVEsSUFBTTs7SUFDbkIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUssUUFBTyxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFaEMsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR1IsMkRBQVFBLENBQUNNO0lBR3pCLHFCQUNFLDhEQUFDRzs7MEJBQ0gsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDUiwwREFBTUE7Ozs7OzBDQUNQLDhEQUFDTztnQ0FBSUMsV0FBVTswQ0FDZCw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNkLDhEQUFDQzs0Q0FBR0QsV0FBVTtzREFBd0JGLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUksS0FBSzs7Ozs7O3NEQUNqRCw4REFBQ0M7NENBQUVILFdBQVU7c0RBQXVCRixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1NLFdBQVc7Ozs7OztzREFDckQsOERBQUNMOzRDQUFJQyxXQUFVOzs4REFDZCw4REFBQ1AsMERBQU1BO29EQUNQWSxNQUFLO29EQUNMQyxPQUFNOzs7Ozs7OERBRU4sOERBQUNiLDBEQUFNQTtvREFDUFksTUFBSztvREFDTEMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTVYsOERBQUNQO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNPO3dCQUFJUCxXQUFVO3dCQUF5RFEsS0FBS1YsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVyxZQUFZOzs7Ozs7Ozs7Ozs7MEJBRWhHLDhEQUFDVjtnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDTzs0QkFBSVAsV0FBVTs0QkFBaUJRLEtBQUtWLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVksU0FBUzs7Ozs7Ozs7Ozs7a0NBRXJELDhEQUFDWDt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNXO2dDQUFHWCxXQUFVOzBDQUF1Qjs7Ozs7OzBDQUNyQyw4REFBQ0c7Z0NBQUVILFdBQVU7MENBQWFGLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdDO0dBM0NNbEI7O1FBQ1VILGtEQUFTQTtRQUdQRCx1REFBUUE7OztLQUpwQkk7QUE2Q04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW21vdmllSWRdLnRzeD8yYTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZU1vdmllIGZyb20gJ0AvaG9va3MvdXNlTW92aWUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbic7XHJcblxyXG5jb25zdCBNb3ZpZSA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCB7IG1vdmllSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcblx0Y29uc3QgeyBkYXRhIH0gPSB1c2VNb3ZpZShtb3ZpZUlkIGFzIHN0cmluZyk7XHJcblx0XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHB4LVs5LjV2d10nPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naC1bMTAwdmhdIGZsZXggZmxleC1jb2wgcmVsYXRpdmUgei0xMCc+XHJcblx0XHRcdFx0PE5hdmJhci8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC0xIGl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy00LzYgZmxleCBmbGV4LWNvbCc+XHJcblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQtd2hpdGUgbWItWzI0cHhdJz57ZGF0YT8udGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXRleHQgbWItWzQwcHhdJz57ZGF0YT8uZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtWzEycHhdJz5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJwcmltYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkJ1eSBUaWNrZXRzXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInNlY29uZGFyeVwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJXYXRjaCBUcmFpbGVyXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGFic29sdXRlIGxlZnQtMCB0b3AtMCB6LVsyXSBtb3ZpZS1vdmVybGF5LWdyYWRpZW50Jz48L2Rpdj5cclxuXHRcdFx0PGltZyBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGFic29sdXRlIGxlZnQtMCB0b3AtMCB6LVsxXScgc3JjPXtkYXRhPy50aHVtYm5haWxVcmx9Lz5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggcHgtWzkuNXZ3XSc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTIvNiBwci1bMTEwcHhdJz5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0ncm91bmRlZC1bMTBweF0nIHNyYz17ZGF0YT8uYmFubmVyVXJsfT48L2ltZz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTQvNic+XHJcblx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbWItWzI4cHhdIHRleHQtd2hpdGUnPlN0b3J5bGluZTwvaDQ+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXRleHQnPntkYXRhPy5zdG9yeWxpbmV9PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNb3ZpZSIsInVzZVJvdXRlciIsIk5hdmJhciIsIkJ1dHRvbiIsIk1vdmllIiwicm91dGVyIiwibW92aWVJZCIsInF1ZXJ5IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwibGFiZWwiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWxVcmwiLCJiYW5uZXJVcmwiLCJoNCIsInN0b3J5bGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movie/[movieId].tsx\n"));

/***/ })

});