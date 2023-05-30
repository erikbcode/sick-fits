self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\UpdateProduct.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { name: $name, description: $description, price: $price }\n    ) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      name\n      id\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var SINGLE_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject());
var UPDATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject2());

function UpdateProduct(_ref) {
  _s();

  var id = _ref.id;

  // 1. Get the existing product
  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery)(SINGLE_PRODUCT_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log(data); // 2. Get the mutation to update the product

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation)(UPDATE_PRODUCT_MUTATION),
      _useMutation2 = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      updateProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      updateData = _useMutation2$.data,
      updateError = _useMutation2$.error,
      updateLoading = _useMutation2$.loading; // 2.5 Create some state for the form inputs:


  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default)(data === null || data === void 0 ? void 0 : data.Product),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm,
      clearForm = _useForm.clearForm;

  console.log(inputs); // Need the form to handle the updates

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_8__.default, {
      onSubmit: /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
          var res;
          return C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault(); // TODO: Handle submit

                  _context.next = 3;
                  return updateProduct({
                    variables: {
                      id: id,
                      name: inputs.name,
                      description: inputs.description,
                      price: inputs.price
                    }
                  })["catch"](console.error);

                case 3:
                  res = _context.sent;
                  console.log(res);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__.default, {
        error: error || updateError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("fieldset", {
        disabled: updateLoading,
        "aria-busy": updateLoading,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "name",
          children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "price",
          children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "description",
          children: ["Description", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
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

_s(UpdateProduct, "PNxr0RDo6rFeaSWiLyjjyKM7qUM=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation, _lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default];
});

_c = UpdateProduct;
/* harmony default export */ __webpack_exports__["default"] = (UpdateProduct);

var _c;

$RefreshReg$(_c, "UpdateProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJVcGRhdGVQcm9kdWN0IiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwidXNlTXV0YXRpb24iLCJ1cGRhdGVQcm9kdWN0IiwidXBkYXRlRGF0YSIsInVwZGF0ZUVycm9yIiwidXBkYXRlTG9hZGluZyIsInVzZUZvcm0iLCJQcm9kdWN0IiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxxREFBSCxtQkFBMUI7QUFXQSxJQUFNQyx1QkFBdUIsR0FBR0QscURBQUgsb0JBQTdCOztBQW1CQSxTQUFTRSxhQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNOztBQUM3QjtBQUQ2QixrQkFFSUMseURBQVEsQ0FBQ0wsb0JBQUQsRUFBdUI7QUFDOURNLGFBQVMsRUFBRTtBQUFFRixRQUFFLEVBQUZBO0FBQUY7QUFEbUQsR0FBdkIsQ0FGWjtBQUFBLE1BRXJCRyxJQUZxQixhQUVyQkEsSUFGcUI7QUFBQSxNQUVmQyxLQUZlLGFBRWZBLEtBRmU7QUFBQSxNQUVSQyxPQUZRLGFBRVJBLE9BRlE7O0FBSzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWixFQUw2QixDQU83Qjs7QUFQNkIscUJB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3REQ7O0dBOUVRakIsYTtVQUUwQkUscUQsRUFTN0JPLHdELEVBR21ESyxpRDs7O0tBZGhEZCxhO0FBZ0ZULCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS40Y2YwYTQ3M2YxNDQ1Mzc5NjkzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgVW5pcXVlSW5wdXRGaWVsZE5hbWVzUnVsZSB9IGZyb20gJ2dyYXBocWwnO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IFNJTkdMRV9QUk9EVUNUX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IFNJTkdMRV9QUk9EVUNUX1FVRVJZKCRpZDogSUQhKSB7XHJcbiAgICBQcm9kdWN0KHdoZXJlOiB7IGlkOiAkaWQgfSkge1xyXG4gICAgICBuYW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHByaWNlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJG5hbWU6IFN0cmluZ1xyXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmdcclxuICAgICRwcmljZTogSW50XHJcbiAgKSB7XHJcbiAgICB1cGRhdGVQcm9kdWN0KFxyXG4gICAgICBpZDogJGlkXHJcbiAgICAgIGRhdGE6IHsgbmFtZTogJG5hbWUsIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sIHByaWNlOiAkcHJpY2UgfVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcHJpY2VcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBVcGRhdGVQcm9kdWN0KHsgaWQgfSkge1xyXG4gIC8vIDEuIEdldCB0aGUgZXhpc3RpbmcgcHJvZHVjdFxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9QUk9EVUNUX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgLy8gMi4gR2V0IHRoZSBtdXRhdGlvbiB0byB1cGRhdGUgdGhlIHByb2R1Y3RcclxuICBjb25zdCBbXHJcbiAgICB1cGRhdGVQcm9kdWN0LFxyXG4gICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfSxcclxuICBdID0gdXNlTXV0YXRpb24oVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04pO1xyXG5cclxuICAvLyAyLjUgQ3JlYXRlIHNvbWUgc3RhdGUgZm9yIHRoZSBmb3JtIGlucHV0czpcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0sIGNsZWFyRm9ybSB9ID0gdXNlRm9ybShkYXRhPy5Qcm9kdWN0KTtcclxuICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gIC8vIE5lZWQgdGhlIGZvcm0gdG8gaGFuZGxlIHRoZSB1cGRhdGVzXHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHA+bG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIC8vIFRPRE86IEhhbmRsZSBzdWJtaXRcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZVByb2R1Y3Qoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICBuYW1lOiBpbnB1dHMubmFtZSxcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaW5wdXRzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgIHByaWNlOiBpbnB1dHMucHJpY2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yIHx8IHVwZGF0ZUVycm9yfSAvPlxyXG4gICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17dXBkYXRlTG9hZGluZ30gYXJpYS1idXN5PXt1cGRhdGVMb2FkaW5nfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgUHJpY2VcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgUHJvZHVjdDwvYnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9