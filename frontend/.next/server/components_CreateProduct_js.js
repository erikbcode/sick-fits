exports.id = "components_CreateProduct_js";
exports.ids = ["components_CreateProduct_js"];
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvdXNlRm9ybS5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsIkNyZWF0ZVByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJ1c2VGb3JtIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZVByb2R1Y3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQUxMX1BST0RVQ1RTX1FVRVJZIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcyIsInB1c2giLCJpZCIsImtleWZyYW1lcyIsIkZvcm0iLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwicmVkIiwiZGlzcGxheU5hbWUiLCJpbml0aWFsIiwic2V0SW5wdXRzIiwidXNlU3RhdGUiLCJldmVudCIsInZhbHVlIiwidHlwZSIsInRhcmdldCIsInBhcnNlSW50IiwiZmlsZXMiLCJibGFua1N0YXRlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsdUJBQXVCLEdBQUdDLG9EQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F2QkE7QUF5QmUsU0FBU0MsYUFBVCxHQUF5QjtBQUN0QyxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLGdCQUFWO0FBQXdCQyxhQUF4QjtBQUFtQ0M7QUFBbkMsTUFBaURDLHFEQUFPLENBQUM7QUFDN0RDLFNBQUssRUFBRSxFQURzRDtBQUU3REMsUUFBSSxFQUFFLFlBRnVEO0FBRzdEQyxTQUFLLEVBQUUsSUFIc0Q7QUFJN0RDLGVBQVcsRUFBRTtBQUpnRCxHQUFELENBQTlEO0FBT0EsUUFBTSxDQUFDQyxhQUFELEVBQWdCO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsR0FBaEIsSUFBNENDLDJEQUFXLENBQzNEbEIsdUJBRDJELEVBRTNEO0FBQ0VtQixhQUFTLEVBQUVkLE1BRGI7QUFFRWUsa0JBQWMsRUFBRSxDQUFDO0FBQUVDLFdBQUssRUFBRUMseURBQWtCQTtBQUEzQixLQUFEO0FBRmxCLEdBRjJELENBQTdEO0FBUUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUNFLGNBQVEsRUFBRSxNQUFPQyxDQUFQLElBQWE7QUFDckJBLFNBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWXJCLE1BQVosRUFGcUIsQ0FHckI7O0FBQ0EsY0FBTXNCLEdBQUcsR0FBRyxNQUFNYixhQUFhLEVBQS9CO0FBQ0FOLGlCQUFTLEdBTFksQ0FNckI7O0FBQ0FMLGNBQU0sQ0FBQ3lCLElBQVAsQ0FBYSxZQUFXRCxHQUFHLENBQUNWLElBQUosQ0FBU0gsYUFBVCxDQUF1QmUsRUFBRyxFQUFsRDtBQUNELE9BVEg7QUFBQSw4QkFXRSw4REFBQyxrREFBRDtBQUFjLGFBQUssRUFBRWI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBWUU7QUFBVSxnQkFBUSxFQUFFRCxPQUFwQjtBQUE2QixxQkFBV0EsT0FBeEM7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUFBLDJDQUVFO0FBQ0Usb0JBQVEsTUFEVjtBQUVFLGdCQUFJLEVBQUMsTUFGUDtBQUdFLGNBQUUsRUFBQyxPQUhMO0FBSUUsZ0JBQUksRUFBQyxPQUpQO0FBS0Usb0JBQVEsRUFBRVQ7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVdFO0FBQU8saUJBQU8sRUFBQyxNQUFmO0FBQUEsMENBRUU7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFFRSxjQUFFLEVBQUMsTUFGTDtBQUdFLGdCQUFJLEVBQUMsTUFIUDtBQUlFLHVCQUFXLEVBQUMsTUFKZDtBQUtFLGlCQUFLLEVBQUVELE1BQU0sQ0FBQ00sSUFMaEI7QUFNRSxvQkFBUSxFQUFFTDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGLGVBc0JFO0FBQU8saUJBQU8sRUFBQyxPQUFmO0FBQUEsMkNBRUU7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSxjQUFFLEVBQUMsT0FGTDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLHVCQUFXLEVBQUMsT0FKZDtBQUtFLGlCQUFLLEVBQUVELE1BQU0sQ0FBQ08sS0FMaEI7QUFNRSxvQkFBUSxFQUFFTjtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRCRixlQWlDRTtBQUFPLGlCQUFPLEVBQUMsYUFBZjtBQUFBLGlEQUVFO0FBQ0UsY0FBRSxFQUFDLGFBREw7QUFFRSxnQkFBSSxFQUFDLGFBRlA7QUFHRSx1QkFBVyxFQUFDLGFBSGQ7QUFJRSxpQkFBSyxFQUFFRCxNQUFNLENBQUNRLFdBSmhCO0FBS0Usb0JBQVEsRUFBRVA7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUF3REU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4REQsQzs7Ozs7Ozs7Ozs7Ozs7QUNqSEQ7QUFFQSxNQUFNUyxPQUFPLEdBQUdlLDREQUFILHNFQUFiO0FBWUEsTUFBTUMsSUFBSSxHQUFHQyx3RUFBSDtBQUFBO0FBQUE7QUFBQSw4dUJBc0JhQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQXRCbkMsRUF1RFNwQixPQXZEVCxDQUFWO0FBNERBZ0IsSUFBSSxDQUFDSyxXQUFMLEdBQW1CLE1BQW5CO0FBRUEsK0RBQWVMLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFFZSxTQUFTdEIsT0FBVCxDQUFpQjRCLE9BQU8sR0FBRyxFQUEzQixFQUErQjtBQUM1QztBQUNBLFFBQU07QUFBQSxPQUFDaEMsTUFBRDtBQUFBLE9BQVNpQztBQUFULE1BQXNCQywrQ0FBUSxDQUFDRixPQUFELENBQXBDOztBQUVBLFdBQVMvQixZQUFULENBQXNCa0MsS0FBdEIsRUFBNkI7QUFDM0IsUUFBSTtBQUFFQyxXQUFGO0FBQVM5QixVQUFUO0FBQWUrQjtBQUFmLFFBQXdCRixLQUFLLENBQUNHLE1BQWxDOztBQUVBLFFBQUlELElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCRCxXQUFLLEdBQUdHLFFBQVEsQ0FBQ0gsS0FBRCxDQUFoQjtBQUNEOztBQUVELFFBQUlDLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CO0FBQ0EsT0FBQ0QsS0FBRCxJQUFVRCxLQUFLLENBQUNHLE1BQU4sQ0FBYUUsS0FBdkI7QUFDRDs7QUFFRFAsYUFBUyxpQ0FFSmpDLE1BRkk7QUFHUDtBQUNBLE9BQUNNLElBQUQsR0FBUThCO0FBSkQsT0FBVDtBQU1EOztBQUVELFdBQVNsQyxTQUFULEdBQXFCO0FBQ25CK0IsYUFBUyxDQUFDRCxPQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTN0IsU0FBVCxHQUFxQjtBQUNuQixVQUFNc0MsVUFBVSxHQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FDakJELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlNUMsTUFBZixFQUF1QjZDLEdBQXZCLENBQTJCLENBQUMsQ0FBQ0MsR0FBRCxFQUFNVixLQUFOLENBQUQsS0FBa0IsQ0FBQ1UsR0FBRCxFQUFNLEVBQU4sQ0FBN0MsQ0FEaUIsQ0FBbkI7QUFHQWIsYUFBUyxDQUFDUSxVQUFELENBQVQ7QUFDRCxHQWpDMkMsQ0FtQzVDOzs7QUFDQSxTQUFPO0FBQ0x6QyxVQURLO0FBRUxDLGdCQUZLO0FBR0xDLGFBSEs7QUFJTEM7QUFKSyxHQUFQO0FBTUQsQyIsImZpbGUiOiJjb21wb25lbnRzX0NyZWF0ZVByb2R1Y3RfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZIH0gZnJvbSAnLi9Qcm9kdWN0cyc7XHJcblxyXG5jb25zdCBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTihcclxuICAgICMgV2hpY2ggdmFyaWFibGVzIGFyZSBnZXR0aW5nIHBhc3NlZCBpbiwgYW5kIHdoYXQgdHlwZXMgYXJlIHRoZXk/XHJcbiAgICAkbmFtZTogU3RyaW5nIVxyXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchXHJcbiAgICAkcHJpY2U6IEludCFcclxuICAgICRpbWFnZTogVXBsb2FkXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVQcm9kdWN0KFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogJG5hbWVcclxuICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uXHJcbiAgICAgICAgcHJpY2U6ICRwcmljZVxyXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIlxyXG4gICAgICAgIHBob3RvOiB7IGNyZWF0ZTogeyBpbWFnZTogJGltYWdlLCBhbHRUZXh0OiAkbmFtZSB9IH1cclxuICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVQcm9kdWN0KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0sIGNsZWFyRm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBpbWFnZTogJycsXHJcbiAgICBuYW1lOiAnTmljZSBzaG9lcycsXHJcbiAgICBwcmljZTogMTIzNCxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2NyZWF0ZVByb2R1Y3QsIHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfV0gPSB1c2VNdXRhdGlvbihcclxuICAgIENSRUFURV9QUk9EVUNUX01VVEFUSU9OLFxyXG4gICAge1xyXG4gICAgICB2YXJpYWJsZXM6IGlucHV0cyxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUlkgfV0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gICAgICAgICAgLy8gc3VibWl0IHRoZSBpbnB1dCBmaWVsZHMgdG8gdGhlIGJhY2tlbmRcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZVByb2R1Y3QoKTtcclxuICAgICAgICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgICAgICAgLy8gR28gdG8gdGhhdCBwcm9kdWN0J3MgcGFnZVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cmVzLmRhdGEuY3JlYXRlUHJvZHVjdC5pZH1gKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICBJbWFnZVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPisgQWRkIFByb2R1Y3Q8L2J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IGxvYWRpbmcgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICAvKiByb3RhdGU6IDA7ICovXHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgICAvKiByb3RhdGU6IDM2MGRlZzsgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgaW5wdXQsXHJcbiAgdGV4dGFyZWEsXHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbixcclxuICBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gIH1cclxuICBmaWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICAjZmYzMDE5IDAlLFxyXG4gICAgICAgICNlMmIwNGEgNTAlLFxyXG4gICAgICAgICNmZjMwMTkgMTAwJVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgJlthcmlhLWJ1c3k9J3RydWUnXTo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcclxuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbkZvcm0uZGlzcGxheU5hbWUgPSAnRm9ybSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XHJcbiAgLy8gY3JlYXRlIGEgc3RhdGUgb2JqZWN0IGZvciBvdXIgaW5wdXRzXHJcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIGxldCB7IHZhbHVlLCBuYW1lLCB0eXBlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgLy8gdmFsdWVbMF0gPSBldmVudC50YXJnZXQuZmlsZXNcclxuICAgICAgW3ZhbHVlXSA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnB1dHMoe1xyXG4gICAgICAvLyBjb3B5IHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgICAuLi5pbnB1dHMsXHJcbiAgICAgIC8vIHVzZSBuYW1lIHByb3BlcnR5IG9mIHRoZSBpbnB1dCBlbGVtZW50IGFuZCBzZXQgdGhlIGNvcnJlc3BvbmRpbmcgc3RhdGUgdmFyaWFibGVcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgJyddKVxyXG4gICAgKTtcclxuICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiB0aGUgdGhpbmdzIHdlIHdhbnQgdG8gc3VyZmFjZSBmcm9tIHRoaXMgY3VzdG9tIGhvb2tcclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRzLFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgcmVzZXRGb3JtLFxyXG4gICAgY2xlYXJGb3JtLFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==