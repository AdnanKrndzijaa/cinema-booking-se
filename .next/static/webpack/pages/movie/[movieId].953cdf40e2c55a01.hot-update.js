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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useMovie */ \"./hooks/useMovie.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _components_Genre__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Genre */ \"./components/Genre.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Movie = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { movieId  } = router.query;\n    const { data  } = (0,_hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative px-[9.5vw]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[100vh] flex flex-col relative z-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                lineNumber: 20,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-1 items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-4/6 flex flex-col\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-white mb-[24px]\",\n                                            children: data === null || data === void 0 ? void 0 : data.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-text mb-[40px]\",\n                                            children: data === null || data === void 0 ? void 0 : data.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex gap-[12px]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    type: \"primary\",\n                                                    label: \"Buy Tickets\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                    lineNumber: 26,\n                                                    columnNumber: 8\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    type: \"secondary\",\n                                                    label: \"Watch Trailer\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 8\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 6\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                lineNumber: 21,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 19,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full object-cover absolute left-0 top-0 z-[2] movie-overlay-gradient\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-full h-full object-cover absolute left-0 top-0 z-[1]\",\n                        src: data === null || data === void 0 ? void 0 : data.thumbnailUrl\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                lineNumber: 18,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex px-[9.5vw]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/6 pr-[110px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"rounded-[10px]\",\n                            src: data === null || data === void 0 ? void 0 : data.bannerUrl\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                            lineNumber: 43,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 42,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-4/6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-[60px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"mb-[28px] text-white\",\n                                        children: \"Storyline\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 6\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-text\",\n                                        children: data === null || data === void 0 ? void 0 : data.storyline\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 6\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                lineNumber: 46,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-[60px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"mb-[28px] text-white\",\n                                        children: \"Details\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 6\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-4 py-[20px] border-b-[1px] border-primaryvariant1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                className: \"text-white\",\n                                                children: \"Genres\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 7\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex gap-[8px] col-span-3\",\n                                                children: data === null || data === void 0 ? void 0 : data.genre.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Genre__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        title: item\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 9\n                                                    }, undefined))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 7\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 6\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-4 py-[20px] border-b-[1px] border-primaryvariant1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                className: \"text-white\",\n                                                children: \"Duration\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 7\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-white\",\n                                                children: data === null || data === void 0 ? void 0 : data.duration\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 7\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 6\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-4 py-[20px] border-b-[1px] border-primaryvariant1 \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                className: \"text-white\",\n                                                children: \"Release Year\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 7\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-white\",\n                                                children: data === null || data === void 0 ? void 0 : data.releaseYear\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 7\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 6\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-4 py-[20px] border-b-[1px] border-primaryvariant1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                className: \"text-white\",\n                                                children: \"Genres\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 7\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex gap-[8px] col-span-3\",\n                                                children: data === null || data === void 0 ? void 0 : data.writers.map((writer, index)=>{\n                                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-white\",\n                                                        children: [\n                                                            writer,\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"\".concat(index === (data === null || data === void 0 ? void 0 : data.writers.lenght) - 1 ? \"text-black\" : \"flex\"),\n                                                                children: \",\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                                lineNumber: 74,\n                                                                columnNumber: 43\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 9\n                                                    }, undefined);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 7\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 6\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                                lineNumber: 52,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                        lineNumber: 45,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n                lineNumber: 41,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\movie\\\\[movieId].tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Movie, \"+g1mm2T+Ff7l1nWCR9hP96WHZWU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useMovie__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsSUFBQUEsS0FBTXFCLE9BQU8sQ0FBQ0osR0FBRyxDQUFDLENBQUNLLFFBQVFDO2tFQUMzQixxRUFBQ2xCO3dEQUFFSCxXQUFVOzs0REFBY29COzBFQUFPLDhEQUFDakI7Z0VBQUVILFdBQVcsR0FBK0QsT0FBM0RxQixVQUFVdkIsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNcUIsT0FBTyxDQUFDRyxNQUFNLElBQUcsSUFBSSxlQUFlLE1BQU07MEVBQUk7Ozs7Ozs7Ozs7OztrREFDakg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVUO0dBNUVNNUI7O1FBQ1VKLGtEQUFTQTtRQUdQRCx1REFBUUE7OztLQUpwQks7QUE4RU4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW21vdmllSWRdLnRzeD8yYTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZU1vdmllIGZyb20gJ0AvaG9va3MvdXNlTW92aWUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBHZW5yZSBmcm9tICdAL2NvbXBvbmVudHMvR2VucmUnO1xyXG5cclxuY29uc3QgTW92aWUgPSAoKSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgeyBtb3ZpZUlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG5cdGNvbnN0IHsgZGF0YSB9ID0gdXNlTW92aWUobW92aWVJZCBhcyBzdHJpbmcpO1xyXG5cdFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBweC1bOS41dnddJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2gtWzEwMHZoXSBmbGV4IGZsZXgtY29sIHJlbGF0aXZlIHotMTAnPlxyXG5cdFx0XHRcdDxOYXZiYXIvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctNC82IGZsZXggZmxleC1jb2wnPlxyXG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG1iLVsyNHB4XSc+e2RhdGE/LnRpdGxlfTwvaDE+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC10ZXh0IG1iLVs0MHB4XSc+e2RhdGE/LmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLVsxMnB4XSc+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwicHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJCdXkgVGlja2V0c1wiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJzZWNvbmRhcnlcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiV2F0Y2ggVHJhaWxlclwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgei1bMl0gbW92aWUtb3ZlcmxheS1ncmFkaWVudCc+PC9kaXY+XHJcblx0XHRcdDxpbWcgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgei1bMV0nIHNyYz17ZGF0YT8udGh1bWJuYWlsVXJsfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IHB4LVs5LjV2d10nPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy0yLzYgcHItWzExMHB4XSc+XHJcblx0XHRcdFx0PGltZyBjbGFzc05hbWU9J3JvdW5kZWQtWzEwcHhdJyBzcmM9e2RhdGE/LmJhbm5lclVybH0+PC9pbWc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy00LzYnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYi1bNjBweF0nPlxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbWItWzI4cHhdIHRleHQtd2hpdGUnPlN0b3J5bGluZTwvaDQ+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtdGV4dCc+e2RhdGE/LnN0b3J5bGluZX08L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdHsvKkdlbnJlcyovfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYi1bNjBweF0nPlxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nbWItWzI4cHhdIHRleHQtd2hpdGUnPkRldGFpbHM8L2g0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTQgcHktWzIwcHhdIGJvcmRlci1iLVsxcHhdIGJvcmRlci1wcmltYXJ5dmFyaWFudDEnPlxyXG5cdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5HZW5yZXM8L2g2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtWzhweF0gY29sLXNwYW4tMyc+XHJcblx0XHRcdFx0XHRcdFx0e2RhdGE/LmdlbnJlLm1hcCgoaXRlbSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEdlbnJlIHRpdGxlPXtpdGVtfS8+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNCBweS1bMjBweF0gYm9yZGVyLWItWzFweF0gYm9yZGVyLXByaW1hcnl2YXJpYW50MSc+XHJcblx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPkR1cmF0aW9uPC9oNj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57ZGF0YT8uZHVyYXRpb259PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNCBweS1bMjBweF0gYm9yZGVyLWItWzFweF0gYm9yZGVyLXByaW1hcnl2YXJpYW50MSAnPlxyXG5cdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5SZWxlYXNlIFllYXI8L2g2PlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntkYXRhPy5yZWxlYXNlWWVhcn08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy00IHB5LVsyMHB4XSBib3JkZXItYi1bMXB4XSBib3JkZXItcHJpbWFyeXZhcmlhbnQxJz5cclxuXHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+R2VucmVzPC9oNj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLVs4cHhdIGNvbC1zcGFuLTMnPlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRhPy53cml0ZXJzLm1hcCgod3JpdGVyLCBpbmRleDogbnVtYmVyKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPnt3cml0ZXJ9PHAgY2xhc3NOYW1lPXtgJHsgaW5kZXggPT09IGRhdGE/LndyaXRlcnMubGVuZ2h0IC0gMSA/ICd0ZXh0LWJsYWNrJyA6ICdmbGV4J31gfT4sPC9wPjwvcD5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTW92aWUiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJCdXR0b24iLCJHZW5yZSIsIk1vdmllIiwicm91dGVyIiwibW92aWVJZCIsInF1ZXJ5IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwibGFiZWwiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWxVcmwiLCJiYW5uZXJVcmwiLCJoNCIsInN0b3J5bGluZSIsImg2IiwiZ2VucmUiLCJtYXAiLCJpdGVtIiwiZHVyYXRpb24iLCJyZWxlYXNlWWVhciIsIndyaXRlcnMiLCJ3cml0ZXIiLCJpbmRleCIsImxlbmdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movie/[movieId].tsx\n"));

/***/ })

});