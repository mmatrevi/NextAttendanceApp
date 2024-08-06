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
exports.id = "pages/api/qr/validate-code";
exports.ids = ["pages/api/qr/validate-code"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/CodeStore.js":
/*!*****************************!*\
  !*** ./models/CodeStore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst codeStoreSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    sessionId: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    code: {\n        type: String,\n        required: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.CodeStore) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"CodeStore\", codeStoreSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ29kZVN0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxlQUFlLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUMxQ0csU0FBUyxFQUFFO1FBQUVDLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxNQUFNLEVBQUUsSUFBSTtLQUFFO0lBQ3pEQyxJQUFJLEVBQUU7UUFBRUosSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7Q0FDdkMsQ0FBQztBQUVGLGlFQUFlTixrRUFBeUIsSUFBSUEscURBQWMsQ0FBQyxXQUFXLEVBQUVDLGVBQWUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXNoZWV0cy1mb3JtLy4vbW9kZWxzL0NvZGVTdG9yZS5qcz82MGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb2RlU3RvcmVTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBzZXNzaW9uSWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgY29kZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkNvZGVTdG9yZSB8fCBtb25nb29zZS5tb2RlbCgnQ29kZVN0b3JlJywgY29kZVN0b3JlU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29kZVN0b3JlU2NoZW1hIiwiU2NoZW1hIiwic2Vzc2lvbklkIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwiY29kZSIsIm1vZGVscyIsIkNvZGVTdG9yZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/CodeStore.js\n");

/***/ }),

/***/ "(api)/./pages/api/qr/validate-code.js":
/*!***************************************!*\
  !*** ./pages/api/qr/validate-code.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_CodeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/CodeStore */ \"(api)/./models/CodeStore.js\");\n\n\nasync function handler(req, res) {\n    await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"POST\") {\n        const { enteredCode , sessionId  } = req.body;\n        try {\n            const codeEntry = await _models_CodeStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                sessionId\n            });\n            if (codeEntry) {\n                if (enteredCode === codeEntry.code) {\n                    await _models_CodeStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteOne({\n                        sessionId\n                    });\n                    res.status(200).json({\n                        valid: true\n                    });\n                } else {\n                    res.status(200).json({\n                        valid: false\n                    });\n                }\n            } else {\n                res.status(200).json({\n                    valid: false\n                });\n            }\n        } catch (error) {\n            console.error(\"Error validating code:\", error);\n            res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXIvdmFsaWRhdGUtY29kZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFDUTtBQUVuQyxlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1KLHFEQUFTLEVBQUUsQ0FBQztJQUVsQixJQUFJRyxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTSxFQUFFQyxXQUFXLEdBQUVDLFNBQVMsR0FBRSxHQUFHSixHQUFHLENBQUNLLElBQUk7UUFFM0MsSUFBSTtZQUNGLE1BQU1DLFNBQVMsR0FBRyxNQUFNUixpRUFBaUIsQ0FBQztnQkFBRU0sU0FBUzthQUFFLENBQUM7WUFFeEQsSUFBSUUsU0FBUyxFQUFFO2dCQUNiLElBQUlILFdBQVcsS0FBS0csU0FBUyxDQUFDRSxJQUFJLEVBQUU7b0JBQ2xDLE1BQU1WLG1FQUFtQixDQUFDO3dCQUFFTSxTQUFTO3FCQUFFLENBQUMsQ0FBQztvQkFDekNILEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7d0JBQUVDLEtBQUssRUFBRSxJQUFJO3FCQUFFLENBQUMsQ0FBQztnQkFDeEMsT0FBTztvQkFDTFgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQzt3QkFBRUMsS0FBSyxFQUFFLEtBQUs7cUJBQUUsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0gsT0FBTztnQkFDTFgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsS0FBSyxFQUFFLEtBQUs7aUJBQUUsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDSCxFQUFFLE9BQU9DLEtBQUssRUFBRTtZQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyx3QkFBd0IsRUFBRUEsS0FBSyxDQUFDLENBQUM7WUFDL0NaLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVFLEtBQUssRUFBRSx1QkFBdUI7YUFBRSxDQUFDLENBQUM7UUFDM0QsQ0FBQztJQUNILE9BQU87UUFDTFosR0FBRyxDQUFDYyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQUMsTUFBTTtTQUFDLENBQUMsQ0FBQztRQUNqQ2QsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWhCLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc2hlZXRzLWZvcm0vLi9wYWdlcy9hcGkvcXIvdmFsaWRhdGUtY29kZS5qcz80MGIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGInO1xyXG5pbXBvcnQgQ29kZVN0b3JlIGZyb20gJy4uLy4uLy4uL21vZGVscy9Db2RlU3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGF3YWl0IGNvbm5lY3REQigpO1xyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IGVudGVyZWRDb2RlLCBzZXNzaW9uSWQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNvZGVFbnRyeSA9IGF3YWl0IENvZGVTdG9yZS5maW5kT25lKHsgc2Vzc2lvbklkIH0pO1xyXG5cclxuICAgICAgaWYgKGNvZGVFbnRyeSkge1xyXG4gICAgICAgIGlmIChlbnRlcmVkQ29kZSA9PT0gY29kZUVudHJ5LmNvZGUpIHtcclxuICAgICAgICAgIGF3YWl0IENvZGVTdG9yZS5kZWxldGVPbmUoeyBzZXNzaW9uSWQgfSk7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHZhbGlkOiB0cnVlIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHZhbGlkOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB2YWxpZDogZmFsc2UgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZhbGlkYXRpbmcgY29kZTonLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJDb2RlU3RvcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW50ZXJlZENvZGUiLCJzZXNzaW9uSWQiLCJib2R5IiwiY29kZUVudHJ5IiwiZmluZE9uZSIsImNvZGUiLCJkZWxldGVPbmUiLCJzdGF0dXMiLCJqc29uIiwidmFsaWQiLCJlcnJvciIsImNvbnNvbGUiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/qr/validate-code.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        // Use current db connection\n        return;\n    }\n    // Use new db connection\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    console.log(\"MongoDB Connected\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsU0FBUyxHQUFHLFVBQVk7SUFDNUIsSUFBSUQsMkVBQWtDLEVBQUU7UUFDdEMsNEJBQTRCO1FBQzVCLE9BQU87SUFDVCxDQUFDO0lBQ0Qsd0JBQXdCO0lBQ3hCLE1BQU1BLHVEQUFnQixDQUFDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1FBQzlDQyxlQUFlLEVBQUUsSUFBSTtRQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtLQUN6QixDQUFDLENBQUM7SUFDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsaUVBQWVWLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zaGVldHMtZm9ybS8uL3V0aWxzL2RiLmpzPzdjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG4gICAgLy8gVXNlIGN1cnJlbnQgZGIgY29ubmVjdGlvblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBVc2UgbmV3IGRiIGNvbm5lY3Rpb25cclxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coJ01vbmdvREIgQ29ubmVjdGVkJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/qr/validate-code.js"));
module.exports = __webpack_exports__;

})();