self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\DeleteProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  mutation DELETE_PRODUCT_MUTATION($id: ID!) {\n    deleteProduct(id: $id) {\n      id\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var DELETE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_4__.default)(_templateObject());

function DeleteProduct(_ref) {
  _s();

  var id = _ref.id,
      children = _ref.children;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(DELETE_PRODUCT_MUTATION, {
    variables: {
      id: id
    }
  }),
      _useMutation2 = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),
      deleteProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    onClick: function onClick() {
      if (confirm('Are you sure you want to delete the product?')) {
        // Delete
        console.log('deleting...');
        deleteProduct()["catch"](function (err) {
          return alert(err.message);
        });
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(DeleteProduct, "UKtVPfUn7knxyGC0UBRlZieyfpk=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation];
});

_c = DeleteProduct;
/* harmony default export */ __webpack_exports__["default"] = (DeleteProduct);

var _c;

$RefreshReg$(_c, "DeleteProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkRFTEVURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiRGVsZXRlUHJvZHVjdCIsImlkIiwiY2hpbGRyZW4iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsImRlbGV0ZVByb2R1Y3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHVCQUF1QixHQUFHQyxvREFBSCxtQkFBN0I7O0FBU0EsU0FBU0MsYUFBVCxPQUF5QztBQUFBOztBQUFBLE1BQWhCQyxFQUFnQixRQUFoQkEsRUFBZ0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEscUJBQ1dDLDJEQUFXLENBQzNETCx1QkFEMkQsRUFFM0Q7QUFDRU0sYUFBUyxFQUFFO0FBQ1RILFFBQUUsRUFBRkE7QUFEUztBQURiLEdBRjJELENBRHRCO0FBQUE7QUFBQSxNQUNoQ0ksYUFEZ0M7QUFBQTtBQUFBLE1BQ2ZDLElBRGUsa0JBQ2ZBLElBRGU7QUFBQSxNQUNUQyxPQURTLGtCQUNUQSxPQURTO0FBQUEsTUFDQUMsS0FEQSxrQkFDQUEsS0FEQTs7QUFTdkMsc0JBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNiLFVBQUlDLE9BQU8sQ0FBQyw4Q0FBRCxDQUFYLEVBQTZEO0FBQzNEO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQU4scUJBQWEsV0FBYixDQUFzQixVQUFDTyxHQUFEO0FBQUEsaUJBQVNDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFMLENBQWQ7QUFBQSxTQUF0QjtBQUNEO0FBQ0YsS0FSSDtBQUFBLGNBVUdaO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBdkJRRixhO1VBQzJDRyx1RDs7O0tBRDNDSCxhO0FBeUJULCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEwOWQ5MzYzMzRiMjY1OTFiYzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBERUxFVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBERUxFVEVfUFJPRFVDVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgZGVsZXRlUHJvZHVjdChpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBEZWxldGVQcm9kdWN0KHsgaWQsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbZGVsZXRlUHJvZHVjdCwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgREVMRVRFX1BST0RVQ1RfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvZHVjdD8nKSkge1xyXG4gICAgICAgICAgLy8gRGVsZXRlXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRpbmcuLi4nKTtcclxuICAgICAgICAgIGRlbGV0ZVByb2R1Y3QoKS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlUHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==