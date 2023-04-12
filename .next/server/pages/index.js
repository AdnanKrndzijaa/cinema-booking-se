"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/auth\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {}\n    };\n}\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Cinema Booking\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-white\",\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                children: \"LogOut\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adoba\\\\OneDrive\\\\Desktop\\\\Fakultet\\\\cinema-booking-se\\\\pages\\\\index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNxRDtBQUU5QyxlQUFlRSxtQkFBbUJDLE9BQXdCLEVBQUU7SUFDakUsTUFBTUMsVUFBVSxNQUFNSiwyREFBVUEsQ0FBQ0c7SUFFakMsSUFBRyxDQUFDQyxTQUFTO1FBQ1gsT0FBTztZQUNMQyxVQUFVO2dCQUNSQyxhQUFhO2dCQUNiQyxXQUFXLEtBQUs7WUFDbEI7UUFDRjtJQUNGLENBQUM7SUFFRCxPQUFPO1FBQ0xDLE9BQU8sQ0FBQztJQUNWO0FBQ0YsQ0FBQztBQUVjLFNBQVNDLE9BQU87SUFDN0IscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFdBQVU7Z0JBQWFDLFNBQVMsSUFBS2Isd0RBQU9BOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFHOUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NpbmVtYS1ib29raW5nLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IE5leHRQYWdlQ29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICBpZighc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogXCIvYXV0aFwiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNpbmVtYSBCb29raW5nPC9oMT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIG9uQ2xpY2s9eygpPT4gc2lnbk91dCgpfT5Mb2dPdXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJzaWduT3V0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiLCJIb21lIiwiZGl2IiwiaDEiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();