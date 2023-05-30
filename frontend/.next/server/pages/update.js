(function() {
var exports = {};
exports.id = "pages/update";
exports.ids = ["pages/update"];
exports.modules = {

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\UpdateProduct.js";








const SINGLE_PRODUCT_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      id
      description
      price
    }
  }
`;
const UPDATE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

function UpdateProduct({
  id
}) {
  // 1. Get the existing product
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(SINGLE_PRODUCT_QUERY, {
    variables: {
      id
    }
  });
  console.log(data); // 2. Get the mutation to update the product

  const [updateProduct, {
    data: updateData,
    error: updateError,
    loading: updateLoading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(UPDATE_PRODUCT_MUTATION); // 2.5 Create some state for the form inputs:

  const {
    inputs,
    handleChange,
    resetForm,
    clearForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default)(data === null || data === void 0 ? void 0 : data.Product);
  console.log(inputs); // Need the form to handle the updates

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_7__.default, {
      onSubmit: async e => {
        e.preventDefault(); // TODO: Handle submit

        const res = await updateProduct({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price
          }
        }).catch(console.error);
        console.log(res);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__.default, {
        error: error || updateError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
        disabled: updateLoading,
        "aria-busy": updateLoading,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
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
            lineNumber: 83,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
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
            lineNumber: 94,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
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
            lineNumber: 105,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "Update Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UpdateProduct);

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
  const initialValues = Object.values(initial).join('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // This function runs when the things we are watching change
    setInputs(initial); // Need to check for initial values to prevent infinite loop due to useState()
  }, [initialValues]); // {
  // name: 'user'
  // description: 'nice shoes'
  // price: 1000
  // }

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

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdatePage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UpdateProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UpdateProduct */ "./components/UpdateProduct.js");

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\pages\\update.js";




function UpdatePage() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    query
  } = router;
  console.log(query);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpdateProduct__WEBPACK_IMPORTED_MODULE_4__.default, {
      id: query.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/update.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvdXNlRm9ybS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiU0lOR0xFX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVQcm9kdWN0IiwidXBkYXRlRGF0YSIsInVwZGF0ZUVycm9yIiwidXBkYXRlTG9hZGluZyIsInVzZU11dGF0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwidXNlRm9ybSIsIlByb2R1Y3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImNhdGNoIiwia2V5ZnJhbWVzIiwiRm9ybSIsInN0eWxlZCIsInByb3BzIiwidGhlbWUiLCJyZWQiLCJkaXNwbGF5TmFtZSIsImluaXRpYWwiLCJzZXRJbnB1dHMiLCJ1c2VTdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwidXNlRWZmZWN0IiwiZXZlbnQiLCJ2YWx1ZSIsInR5cGUiLCJ0YXJnZXQiLCJwYXJzZUludCIsImZpbGVzIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSIsIlVwZGF0ZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxvQkFBb0IsR0FBR0Msb0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVEE7QUFXQSxNQUFNQyx1QkFBdUIsR0FBR0Qsb0RBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWpCQTs7QUFtQkEsU0FBU0UsYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQStCO0FBQzdCO0FBQ0EsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUM7QUFBZixNQUEyQkMsd0RBQVEsQ0FBQ1Isb0JBQUQsRUFBdUI7QUFDOURTLGFBQVMsRUFBRTtBQUFFTDtBQUFGO0FBRG1ELEdBQXZCLENB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dCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IFVuaXF1ZUlucHV0RmllbGROYW1lc1J1bGUgfSBmcm9tICdncmFwaHFsJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5jb25zdCBTSU5HTEVfUFJPRFVDVF9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTSU5HTEVfUFJPRFVDVF9RVUVSWSgkaWQ6IElEISkge1xyXG4gICAgUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcclxuICAgICAgbmFtZVxyXG4gICAgICBpZFxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwcmljZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVQREFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRuYW1lOiBTdHJpbmdcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXHJcbiAgICAkcHJpY2U6IEludFxyXG4gICkge1xyXG4gICAgdXBkYXRlUHJvZHVjdChcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBkYXRhOiB7IG5hbWU6ICRuYW1lLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLCBwcmljZTogJHByaWNlIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHByaWNlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gVXBkYXRlUHJvZHVjdCh7IGlkIH0pIHtcclxuICAvLyAxLiBHZXQgdGhlIGV4aXN0aW5nIHByb2R1Y3RcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShTSU5HTEVfUFJPRFVDVF9RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIC8vIDIuIEdldCB0aGUgbXV0YXRpb24gdG8gdXBkYXRlIHRoZSBwcm9kdWN0XHJcbiAgY29uc3QgW1xyXG4gICAgdXBkYXRlUHJvZHVjdCxcclxuICAgIHsgZGF0YTogdXBkYXRlRGF0YSwgZXJyb3I6IHVwZGF0ZUVycm9yLCBsb2FkaW5nOiB1cGRhdGVMb2FkaW5nIH0sXHJcbiAgXSA9IHVzZU11dGF0aW9uKFVQREFURV9QUk9EVUNUX01VVEFUSU9OKTtcclxuXHJcbiAgLy8gMi41IENyZWF0ZSBzb21lIHN0YXRlIGZvciB0aGUgZm9ybSBpbnB1dHM6XHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtLCBjbGVhckZvcm0gfSA9IHVzZUZvcm0oZGF0YT8uUHJvZHVjdCk7XHJcbiAgY29uc29sZS5sb2coaW5wdXRzKTtcclxuICAvLyBOZWVkIHRoZSBmb3JtIHRvIGhhbmRsZSB0aGUgdXBkYXRlc1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAvLyBUT0RPOiBIYW5kbGUgc3VibWl0XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgbmFtZTogaW5wdXRzLm5hbWUsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGlucHV0cy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICBwcmljZTogaW5wdXRzLnByaWNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cclxuICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e3VwZGF0ZUxvYWRpbmd9IGFyaWEtYnVzeT17dXBkYXRlTG9hZGluZ30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIFByb2R1Y3Q8L2J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlUHJvZHVjdDtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBsb2FkaW5nID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gICAgLyogcm90YXRlOiAwOyAqL1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIGlucHV0LFxyXG4gIHRleHRhcmVhLFxyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b24sXHJcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcclxuICB9XHJcbiAgZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgI2ZmMzAxOSAwJSxcclxuICAgICAgICAjZTJiMDRhIDUwJSxcclxuICAgICAgICAjZmYzMDE5IDEwMCVcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgICZbYXJpYS1idXN5PSd0cnVlJ106OmJlZm9yZSB7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIGF1dG87XHJcbiAgICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5Gb3JtLmRpc3BsYXlOYW1lID0gJ0Zvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XHJcbiAgLy8gY3JlYXRlIGEgc3RhdGUgb2JqZWN0IGZvciBvdXIgaW5wdXRzXHJcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGluaXRpYWwpLmpvaW4oJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBydW5zIHdoZW4gdGhlIHRoaW5ncyB3ZSBhcmUgd2F0Y2hpbmcgY2hhbmdlXHJcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XHJcbiAgICAvLyBOZWVkIHRvIGNoZWNrIGZvciBpbml0aWFsIHZhbHVlcyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3AgZHVlIHRvIHVzZVN0YXRlKClcclxuICB9LCBbaW5pdGlhbFZhbHVlc10pO1xyXG5cclxuICAvLyB7XHJcbiAgLy8gbmFtZTogJ3VzZXInXHJcbiAgLy8gZGVzY3JpcHRpb246ICduaWNlIHNob2VzJ1xyXG4gIC8vIHByaWNlOiAxMDAwXHJcbiAgLy8gfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIGxldCB7IHZhbHVlLCBuYW1lLCB0eXBlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgLy8gdmFsdWVbMF0gPSBldmVudC50YXJnZXQuZmlsZXNcclxuICAgICAgW3ZhbHVlXSA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnB1dHMoe1xyXG4gICAgICAvLyBjb3B5IHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgICAuLi5pbnB1dHMsXHJcbiAgICAgIC8vIHVzZSBuYW1lIHByb3BlcnR5IG9mIHRoZSBpbnB1dCBlbGVtZW50IGFuZCBzZXQgdGhlIGNvcnJlc3BvbmRpbmcgc3RhdGUgdmFyaWFibGVcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgJyddKVxyXG4gICAgKTtcclxuICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiB0aGUgdGhpbmdzIHdlIHdhbnQgdG8gc3VyZmFjZSBmcm9tIHRoaXMgY3VzdG9tIGhvb2tcclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRzLFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgcmVzZXRGb3JtLFxyXG4gICAgY2xlYXJGb3JtLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBVcGRhdGVQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvVXBkYXRlUHJvZHVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVQYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcclxuICBjb25zb2xlLmxvZyhxdWVyeSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxVcGRhdGVQcm9kdWN0IGlkPXtxdWVyeS5pZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=