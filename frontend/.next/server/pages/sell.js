(function() {
var exports = {};
exports.id = "pages/sell";
exports.ids = ["pages/sell"];
exports.modules = {

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Products */ "./components/Products.js");

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\CreateProduct.js";







const CREATE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in, and what types are they?
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;
function CreateProduct() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    inputs,
    handleChange,
    resetForm,
    clearForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_4__.default)({
    image: '',
    name: 'Nice shoes',
    price: 1234,
    description: ''
  });
  const [createProduct, {
    loading,
    error,
    data
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{
      query: _Products__WEBPACK_IMPORTED_MODULE_7__.ALL_PRODUCTS_QUERY
    }]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
      onSubmit: async e => {
        e.preventDefault();
        console.log(inputs); // submit the input fields to the backend

        const res = await createProduct();
        clearForm(); // Go to that product's page

        router.push(`/product/${res.data.createProduct.id}`);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {
        error: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
        disabled: loading,
        "aria-busy": loading,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "image",
          children: ["Image", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            required: true,
            type: "file",
            id: "image",
            name: "image",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "name",
          children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "name",
            name: "name",
            placeholder: "Name",
            value: inputs.name,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "price",
          children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number",
            id: "price",
            name: "price",
            placeholder: "Price",
            value: inputs.price,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "description",
          children: ["Description", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
            id: "description",
            name: "description",
            placeholder: "Description",
            value: inputs.description,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "+ Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;box-sizing:border-box;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], props => props.theme.red, loading);
Form.displayName = 'Form';
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useForm(initial = {}) {
  // create a state object for our inputs
  const {
    0: inputs,
    1: setInputs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);

  function handleChange(event) {
    let {
      value,
      name,
      type
    } = event.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      // value[0] = event.target.files
      [value] = event.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      // use name property of the input element and set the corresponding state variable
      [name]: value
    }));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  } // return the things we want to surface from this custom hook


  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}

/***/ }),

/***/ "./pages/sell.js":
/*!***********************!*\
  !*** ./pages/sell.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SellPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_CreateProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreateProduct */ "./components/CreateProduct.js");

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\pages\\sell.js";



function SellPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateProduct__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_link_js","components_Products_js","components_Page_js","components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/sell.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvdXNlRm9ybS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9zZWxsLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsIkNyZWF0ZVByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJ1c2VGb3JtIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZVByb2R1Y3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQUxMX1BST0RVQ1RTX1FVRVJZIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcyIsInB1c2giLCJpZCIsImtleWZyYW1lcyIsIkZvcm0iLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwicmVkIiwiZGlzcGxheU5hbWUiLCJpbml0aWFsIiwic2V0SW5wdXRzIiwidXNlU3RhdGUiLCJldmVudCIsInZhbHVlIiwidHlwZSIsInRhcmdldCIsInBhcnNlSW50IiwiZmlsZXMiLCJibGFua1N0YXRlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiU2VsbFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLHVCQUF1QixHQUFHQyxvREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdkJBO0FBeUJlLFNBQVNDLGFBQVQsR0FBeUI7QUFDdEMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU07QUFBRUMsVUFBRjtBQUFVQyxnQkFBVjtBQUF3QkMsYUFBeEI7QUFBbUNDO0FBQW5DLE1BQWlEQyxxREFBTyxDQUFDO0FBQzdEQyxTQUFLLEVBQUUsRUFEc0Q7QUFFN0RDLFFB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Q0FBQ1EsVUFBRCxDQUFUO0FBQ0QsR0FqQzJDLENBbUM1Qzs7O0FBQ0EsU0FBTztBQUNMekMsVUFESztBQUVMQyxnQkFGSztBQUdMQyxhQUhLO0FBSUxDO0FBSkssR0FBUDtBQU1ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNEO0FBQ0E7QUFDQTtBQUVlLFNBQVM0QyxRQUFULEdBQW9CO0FBQ2pDLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELEM7Ozs7Ozs7Ozs7O0FDVkQsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvc2VsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBBTExfUFJPRFVDVFNfUVVFUlkgfSBmcm9tICcuL1Byb2R1Y3RzJztcclxuXHJcbmNvbnN0IENSRUFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENSRUFURV9QUk9EVUNUX01VVEFUSU9OKFxyXG4gICAgIyBXaGljaCB2YXJpYWJsZXMgYXJlIGdldHRpbmcgcGFzc2VkIGluLCBhbmQgd2hhdCB0eXBlcyBhcmUgdGhleT9cclxuICAgICRuYW1lOiBTdHJpbmchXHJcbiAgICAkZGVzY3JpcHRpb246IFN0cmluZyFcclxuICAgICRwcmljZTogSW50IVxyXG4gICAgJGltYWdlOiBVcGxvYWRcclxuICApIHtcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiAkbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb25cclxuICAgICAgICBwcmljZTogJHByaWNlXHJcbiAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiXHJcbiAgICAgICAgcGhvdG86IHsgY3JlYXRlOiB7IGltYWdlOiAkaW1hZ2UsIGFsdFRleHQ6ICRuYW1lIH0gfVxyXG4gICAgICB9XHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgcHJpY2VcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2R1Y3QoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSwgY2xlYXJGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIGltYWdlOiAnJyxcclxuICAgIG5hbWU6ICdOaWNlIHNob2VzJyxcclxuICAgIHByaWNlOiAxMjM0LFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbY3JlYXRlUHJvZHVjdCwgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczogaW5wdXRzLFxyXG4gICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEFMTF9QUk9EVUNUU19RVUVSWSB9XSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcbiAgICAgICAgICAvLyBzdWJtaXQgdGhlIGlucHV0IGZpZWxkcyB0byB0aGUgYmFja2VuZFxyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlUHJvZHVjdCgpO1xyXG4gICAgICAgICAgY2xlYXJGb3JtKCk7XHJcbiAgICAgICAgICAvLyBHbyB0byB0aGF0IHByb2R1Y3QncyBwYWdlXHJcbiAgICAgICAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3QvJHtyZXMuZGF0YS5jcmVhdGVQcm9kdWN0LmlkfWApO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XHJcbiAgICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+KyBBZGQgUHJvZHVjdDwvYnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgIC8qIHJvdGF0ZTogMDsgKi9cclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICAgIC8qIHJvdGF0ZTogMzYwZGVnOyAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBpbnB1dCxcclxuICB0ZXh0YXJlYSxcclxuICBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUucmVkfTtcclxuICAgIH1cclxuICB9XHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgfVxyXG4gIGZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICNmZjMwMTkgMCUsXHJcbiAgICAgICAgI2UyYjA0YSA1MCUsXHJcbiAgICAgICAgI2ZmMzAxOSAxMDAlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xyXG4gICAgICBhbmltYXRpb246ICR7bG9hZGluZ30gMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuRm9ybS5kaXNwbGF5TmFtZSA9ICdGb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcclxuICAvLyBjcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIG91ciBpbnB1dHNcclxuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xyXG4gICAgICAvLyB2YWx1ZVswXSA9IGV2ZW50LnRhcmdldC5maWxlc1xyXG4gICAgICBbdmFsdWVdID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElucHV0cyh7XHJcbiAgICAgIC8vIGNvcHkgdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAgIC4uLmlucHV0cyxcclxuICAgICAgLy8gdXNlIG5hbWUgcHJvcGVydHkgb2YgdGhlIGlucHV0IGVsZW1lbnQgYW5kIHNldCB0aGUgY29ycmVzcG9uZGluZyBzdGF0ZSB2YXJpYWJsZVxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XHJcbiAgICBjb25zdCBibGFua1N0YXRlID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pXHJcbiAgICApO1xyXG4gICAgc2V0SW5wdXRzKGJsYW5rU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gcmV0dXJuIHRoZSB0aGluZ3Mgd2Ugd2FudCB0byBzdXJmYWNlIGZyb20gdGhpcyBjdXN0b20gaG9va1xyXG4gIHJldHVybiB7XHJcbiAgICBpbnB1dHMsXHJcbiAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICByZXNldEZvcm0sXHJcbiAgICBjbGVhckZvcm0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgQ3JlYXRlUHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsbFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDcmVhdGVQcm9kdWN0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9