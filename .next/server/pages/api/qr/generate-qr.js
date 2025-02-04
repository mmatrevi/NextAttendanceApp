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
exports.id = "pages/api/qr/generate-qr";
exports.ids = ["pages/api/qr/generate-qr"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "qrcode":
/*!*************************!*\
  !*** external "qrcode" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("qrcode");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "(api)/./models/CodeStore.js":
/*!*****************************!*\
  !*** ./models/CodeStore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst codeStoreSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    sessionId: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    code: {\n        type: String,\n        required: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.CodeStore) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"CodeStore\", codeStoreSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ29kZVN0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxlQUFlLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUMxQ0csU0FBUyxFQUFFO1FBQUVDLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxNQUFNLEVBQUUsSUFBSTtLQUFFO0lBQ3pEQyxJQUFJLEVBQUU7UUFBRUosSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7Q0FDdkMsQ0FBQztBQUVGLGlFQUFlTixrRUFBeUIsSUFBSUEscURBQWMsQ0FBQyxXQUFXLEVBQUVDLGVBQWUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXNoZWV0cy1mb3JtLy4vbW9kZWxzL0NvZGVTdG9yZS5qcz82MGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb2RlU3RvcmVTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBzZXNzaW9uSWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgY29kZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkNvZGVTdG9yZSB8fCBtb25nb29zZS5tb2RlbCgnQ29kZVN0b3JlJywgY29kZVN0b3JlU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29kZVN0b3JlU2NoZW1hIiwiU2NoZW1hIiwic2Vzc2lvbklkIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwiY29kZSIsIm1vZGVscyIsIkNvZGVTdG9yZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/CodeStore.js\n");

/***/ }),

/***/ "(api)/./pages/api/qr/generate-qr.js":
/*!*************************************!*\
  !*** ./pages/api/qr/generate-qr.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode */ \"qrcode\");\n/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_CodeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/CodeStore */ \"(api)/./models/CodeStore.js\");\n/* harmony import */ var _utils_generateUniqueCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/generateUniqueCode */ \"(api)/./utils/generateUniqueCode.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nasync function handler(req, res) {\n    await (0,_utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (req.method === \"GET\") {\n        try {\n            const uniqueCode = (0,_utils_generateUniqueCode__WEBPACK_IMPORTED_MODULE_4__.generateUniqueCode)(10);\n            const qrCodeData = await qrcode__WEBPACK_IMPORTED_MODULE_0___default().toDataURL(uniqueCode);\n            const sessionId = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();\n            const newCodeEntry = new _models_CodeStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n                sessionId,\n                code: uniqueCode\n            });\n            await newCodeEntry.save();\n            console.log(`Generated Code: ${uniqueCode}, Session ID: ${sessionId}`);\n            res.status(200).json({\n                qrCodeData,\n                sessionId\n            });\n        } catch (error) {\n            console.error(\"Error generating QR code:\", error);\n            res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXIvZ2VuZXJhdGUtcXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNRO0FBQ007QUFDUTtBQUNxQjtBQUV4RCxlQUFlTSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1MLHFEQUFTLEVBQUUsQ0FBQztJQUVsQixJQUFJSSxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsSUFBSTtZQUNGLE1BQU1DLFVBQVUsR0FBR0wsNkVBQWtCLENBQUMsRUFBRSxDQUFDO1lBQ3pDLE1BQU1NLFVBQVUsR0FBRyxNQUFNWCx1REFBZ0IsQ0FBQ1UsVUFBVSxDQUFDO1lBQ3JELE1BQU1HLFNBQVMsR0FBR1gsd0NBQU0sRUFBRTtZQUUxQixNQUFNWSxZQUFZLEdBQUcsSUFBSVYseURBQVMsQ0FBQztnQkFBRVMsU0FBUztnQkFBRUUsSUFBSSxFQUFFTCxVQUFVO2FBQUUsQ0FBQztZQUNuRSxNQUFNSSxZQUFZLENBQUNFLElBQUksRUFBRSxDQUFDO1lBRTFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFUixVQUFVLENBQUMsY0FBYyxFQUFFRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkVMLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVULFVBQVU7Z0JBQUVFLFNBQVM7YUFBRSxDQUFDLENBQUM7UUFDbEQsRUFBRSxPQUFPUSxLQUFLLEVBQUU7WUFDZEosT0FBTyxDQUFDSSxLQUFLLENBQUMsMkJBQTJCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1lBQ2xEYixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsdUJBQXVCO2FBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUM7SUFDSCxPQUFPO1FBQ0xiLEdBQUcsQ0FBQ2MsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUFDLEtBQUs7U0FBQyxDQUFDLENBQUM7UUFDaENkLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVoQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXNoZWV0cy1mb3JtLy4vcGFnZXMvYXBpL3FyL2dlbmVyYXRlLXFyLmpzP2YwNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9kYic7XHJcbmltcG9ydCBDb2RlU3RvcmUgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0NvZGVTdG9yZSc7XHJcbmltcG9ydCB7IGdlbmVyYXRlVW5pcXVlQ29kZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2dlbmVyYXRlVW5pcXVlQ29kZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdW5pcXVlQ29kZSA9IGdlbmVyYXRlVW5pcXVlQ29kZSgxMCk7XHJcbiAgICAgIGNvbnN0IHFyQ29kZURhdGEgPSBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKHVuaXF1ZUNvZGUpO1xyXG4gICAgICBjb25zdCBzZXNzaW9uSWQgPSB1dWlkdjQoKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0NvZGVFbnRyeSA9IG5ldyBDb2RlU3RvcmUoeyBzZXNzaW9uSWQsIGNvZGU6IHVuaXF1ZUNvZGUgfSk7XHJcbiAgICAgIGF3YWl0IG5ld0NvZGVFbnRyeS5zYXZlKCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhgR2VuZXJhdGVkIENvZGU6ICR7dW5pcXVlQ29kZX0sIFNlc3Npb24gSUQ6ICR7c2Vzc2lvbklkfWApO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHFyQ29kZURhdGEsIHNlc3Npb25JZCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdlbmVyYXRpbmcgUVIgY29kZTonLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pO1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlFSQ29kZSIsInY0IiwidXVpZHY0IiwiY29ubmVjdERCIiwiQ29kZVN0b3JlIiwiZ2VuZXJhdGVVbmlxdWVDb2RlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVuaXF1ZUNvZGUiLCJxckNvZGVEYXRhIiwidG9EYXRhVVJMIiwic2Vzc2lvbklkIiwibmV3Q29kZUVudHJ5IiwiY29kZSIsInNhdmUiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/qr/generate-qr.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        // Use current db connection\n        return;\n    }\n    // Use new db connection\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    console.log(\"MongoDB Connected\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsU0FBUyxHQUFHLFVBQVk7SUFDNUIsSUFBSUQsMkVBQWtDLEVBQUU7UUFDdEMsNEJBQTRCO1FBQzVCLE9BQU87SUFDVCxDQUFDO0lBQ0Qsd0JBQXdCO0lBQ3hCLE1BQU1BLHVEQUFnQixDQUFDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1FBQzlDQyxlQUFlLEVBQUUsSUFBSTtRQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtLQUN6QixDQUFDLENBQUM7SUFDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsaUVBQWVWLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zaGVldHMtZm9ybS8uL3V0aWxzL2RiLmpzPzdjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG4gICAgLy8gVXNlIGN1cnJlbnQgZGIgY29ubmVjdGlvblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBVc2UgbmV3IGRiIGNvbm5lY3Rpb25cclxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coJ01vbmdvREIgQ29ubmVjdGVkJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ }),

/***/ "(api)/./utils/generateUniqueCode.js":
/*!*************************************!*\
  !*** ./utils/generateUniqueCode.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateUniqueCode\": () => (/* binding */ generateUniqueCode)\n/* harmony export */ });\nconst generateUniqueCode = (length)=>{\n    const characters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n    let result = \"\";\n    for(let i = 0; i < length; i++){\n        const randomIndex = Math.floor(Math.random() * characters.length);\n        result += characters[randomIndex];\n    }\n    return result;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9nZW5lcmF0ZVVuaXF1ZUNvZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGtCQUFrQixHQUFHLENBQUNDLE1BQU0sR0FBSztJQUMxQyxNQUFNQyxVQUFVLEdBQUcsZ0VBQWdFO0lBQ25GLElBQUlDLE1BQU0sR0FBRyxFQUFFO0lBQ2YsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILE1BQU0sRUFBRUcsQ0FBQyxFQUFFLENBQUU7UUFDL0IsTUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBR04sVUFBVSxDQUFDRCxNQUFNLENBQUM7UUFDakVFLE1BQU0sSUFBSUQsVUFBVSxDQUFDRyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsT0FBT0YsTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zaGVldHMtZm9ybS8uL3V0aWxzL2dlbmVyYXRlVW5pcXVlQ29kZS5qcz9jMmFlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZW5lcmF0ZVVuaXF1ZUNvZGUgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzLmxlbmd0aCk7XHJcbiAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzW3JhbmRvbUluZGV4XTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuICAiXSwibmFtZXMiOlsiZ2VuZXJhdGVVbmlxdWVDb2RlIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsInJlc3VsdCIsImkiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/generateUniqueCode.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/qr/generate-qr.js"));
module.exports = __webpack_exports__;

})();