(function() {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 2806:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "default": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2944);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_1__);



async function getServerSideProps({
  query
}) {
  // Auth
  const auth = await googleapis__WEBPACK_IMPORTED_MODULE_1__.google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  });
  const sheets = googleapis__WEBPACK_IMPORTED_MODULE_1__.google.sheets({
    version: 'v4',
    auth
  }); // Query

  const {
    id
  } = query;
  const range = `Sheet1!A${id}:C${id}`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range
  }); // Result

  const [title, content] = response.data.values[0];
  console.log(title, content);
  return {
    props: {
      title,
      content
    }
  };
}
function Post({
  title,
  content
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    })]
  });
}

/***/ }),

/***/ 2944:
/***/ (function(module) {

"use strict";
module.exports = require("googleapis");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(2806));
module.exports = __webpack_exports__;

})();