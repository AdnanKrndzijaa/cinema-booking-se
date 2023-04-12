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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "(api)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLFNBQVNDLE9BQU9DLFFBQVEsSUFBSSxJQUFJSCx3REFBWUE7QUFFbEQsSUFBSUksS0FBcUMsRUFBRUYsRUFBeUJEO0FBR3BFLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2luZW1hLWJvb2tpbmcvLi9saWIvcHJpc21hZGIudHM/MGUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBnbG9iYWwucHJpc21hZGIgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsLnByaXNtYWRiID0gY2xpZW50O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY2xpZW50IiwiZ2xvYmFsIiwicHJpc21hZGIiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n\n\nasync function handler(req, res) {\n    try {\n        if (req.method !== \"POST\") {\n            return res.status(405).end();\n        }\n        const { firstName , lastName , email , password  } = req.body;\n        const existingUser = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (existingUser) {\n            return res.status(422).json({\n                error: \"Email taken\"\n            });\n        }\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 12);\n        const user = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n            data: {\n                firstName,\n                lastName,\n                email,\n                hashedPassword\n            }\n        });\n        return res.status(200).json(user);\n    } catch (error) {\n        return res.status(400).json({\n            error: `Something went wrong: ${error}`\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUVVO0FBRXZCLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsSUFBSTtRQUNGLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1lBQ3pCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO1FBQzVCLENBQUM7UUFFRCxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHUixJQUFJUyxJQUFJO1FBRXpELE1BQU1DLGVBQWUsTUFBTVoscUVBQXdCLENBQUM7WUFDbERlLE9BQU87Z0JBQ0xOO1lBQ0Y7UUFDRjtRQUVBLElBQUlHLGNBQWM7WUFDaEIsT0FBT1QsSUFBSUUsTUFBTSxDQUFDLEtBQUtXLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFjO1FBQ3JELENBQUM7UUFFRCxNQUFNQyxpQkFBaUIsTUFBTW5CLGtEQUFXLENBQUNXLFVBQVU7UUFFbkQsTUFBTUcsT0FBTyxNQUFNYixpRUFBb0IsQ0FBQztZQUN0Q3FCLE1BQU07Z0JBQ0pkO2dCQUNBQztnQkFDQUM7Z0JBQ0FTO1lBQ0Y7UUFDRjtRQUVBLE9BQU9mLElBQUlFLE1BQU0sQ0FBQyxLQUFLVyxJQUFJLENBQUNIO0lBQzlCLEVBQUUsT0FBT0ksT0FBTztRQUNkLE9BQU9kLElBQUlFLE1BQU0sQ0FBQyxLQUFLVyxJQUFJLENBQUM7WUFBRUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFQSxNQUFNLENBQUM7UUFBQztJQUN4RTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtYm9va2luZy8uL3BhZ2VzL2FwaS9yZWdpc3Rlci50cz83ZGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnQC9saWIvcHJpc21hZGInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHByaXNtYWRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgZW1haWxcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7IGVycm9yOiAnRW1haWwgdGFrZW4nIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEyKTtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hZGIudXNlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGhhc2hlZFBhc3N3b3JkLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGBTb21ldGhpbmcgd2VudCB3cm9uZzogJHtlcnJvcn1gIH0pO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJiY3J5cHQiLCJwcmlzbWFkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwiZXhpc3RpbmdVc2VyIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImpzb24iLCJlcnJvciIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsImNyZWF0ZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();