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
exports.id = "pages/api/movies/[movieId]";
exports.ids = ["pages/api/movies/[movieId]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLFNBQVNDLE9BQU9DLFFBQVEsSUFBSSxJQUFJSCx3REFBWUE7QUFFbEQsSUFBSUksS0FBcUMsRUFBRUYsRUFBeUJEO0FBR3BFLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2luZW1hLWJvb2tpbmcvLi9saWIvcHJpc21hZGIudHM/MGUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBnbG9iYWwucHJpc21hZGIgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsLnByaXNtYWRiID0gY2xpZW50O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY2xpZW50IiwiZ2xvYmFsIiwicHJpc21hZGIiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/movies/[movieId].ts":
/*!***************************************!*\
  !*** ./pages/api/movies/[movieId].ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).end();\n    }\n    try {\n        const { movieId  } = req.query;\n        if (typeof movieId !== \"string\") {\n            throw new Error(\"Invalid Id\");\n        }\n        if (!movieId) {\n            throw new Error(\"Missing Id\");\n        }\n        const movies = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movie.findUnique({\n            where: {\n                id: movieId\n            }\n        });\n        return res.status(200).json(movies);\n    } catch (error) {\n        console.log({\n            error\n        });\n        return res.status(500).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW92aWVzL1ttb3ZpZUlkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNzQztBQUV2QixlQUFlQyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQzdFLElBQUdELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3JCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzlCLENBQUM7SUFFRCxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR0wsSUFBSU0sS0FBSztRQUU3QixJQUFJLE9BQU9ELFlBQVksVUFBVTtZQUNqQyxNQUFNLElBQUlFLE1BQU0sY0FBYztRQUM5QixDQUFDO1FBRUQsSUFBSSxDQUFDRixTQUFTO1lBQ2QsTUFBTSxJQUFJRSxNQUFNLGNBQWM7UUFDOUIsQ0FBQztRQUVELE1BQU1DLFNBQVMsTUFBTVYsc0VBQXlCLENBQUM7WUFDL0NhLE9BQU87Z0JBQ0hDLElBQUlQO1lBQ1I7UUFDQTtRQUVBLE9BQU9KLElBQUlFLE1BQU0sQ0FBQyxLQUFLVSxJQUFJLENBQUNMO0lBRWhDLEVBQUUsT0FBTU0sT0FBTztRQUNYQyxRQUFRQyxHQUFHLENBQUM7WUFBRUY7UUFBTTtRQUNwQixPQUFPYixJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM5QjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtYm9va2luZy8uL3BhZ2VzL2FwaS9tb3ZpZXMvW21vdmllSWRdLnRzP2ViZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHByaXNtYWRiIGZyb20gJ0AvbGliL3ByaXNtYWRiJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICAgIGlmKHJlcS5tZXRob2QgIT09ICdHRVQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbW92aWVJZCB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1vdmllSWQgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIElkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1vdmllSWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgSWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vdmllcyA9IGF3YWl0IHByaXNtYWRiLm1vdmllLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGlkOiBtb3ZpZUlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24obW92aWVzKVxyXG5cclxuICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh7IGVycm9yIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5lbmQoKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJwcmlzbWFkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJtb3ZpZUlkIiwicXVlcnkiLCJFcnJvciIsIm1vdmllcyIsIm1vdmllIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/movies/[movieId].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/movies/[movieId].ts"));
module.exports = __webpack_exports__;

})();