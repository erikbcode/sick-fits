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

function update(cache, payload) {
  console.log(payload);
  console.log(cache);
  console.log('running the update function after delete');
  cache.evict(cache.identify(payload.data.deleteProduct));
}

function DeleteProduct(_ref) {
  _s();

  var id = _ref.id,
      children = _ref.children;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(DELETE_PRODUCT_MUTATION, {
    variables: {
      id: id
    },
    update: update
  }),
      _useMutation2 = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),
      deleteProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    disabled: loading,
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
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkRFTEVURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwidXBkYXRlIiwiY2FjaGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImV2aWN0IiwiaWRlbnRpZnkiLCJkYXRhIiwiZGVsZXRlUHJvZHVjdCIsIkRlbGV0ZVByb2R1Y3QiLCJpZCIsImNoaWxkcmVuIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJjb25maXJtIiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0Msb0RBQUgsbUJBQTdCOztBQVNBLFNBQVNDLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxPQUF2QixFQUFnQztBQUM5QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVksMENBQVo7QUFDQUgsT0FBSyxDQUFDSSxLQUFOLENBQVlKLEtBQUssQ0FBQ0ssUUFBTixDQUFlSixPQUFPLENBQUNLLElBQVIsQ0FBYUMsYUFBNUIsQ0FBWjtBQUNEOztBQUVELFNBQVNDLGFBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFoQkMsRUFBZ0IsUUFBaEJBLEVBQWdCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLHFCQUNXQywyREFBVyxDQUMzRGQsdUJBRDJELEVBRTNEO0FBQ0VlLGFBQVMsRUFBRTtBQUNUSCxRQUFFLEVBQUZBO0FBRFMsS0FEYjtBQUlFVixVQUFNLEVBQU5BO0FBSkYsR0FGMkQsQ0FEdEI7QUFBQTtBQUFBLE1BQ2hDUSxhQURnQztBQUFBO0FBQUEsTUFDZkQsSUFEZSxrQkFDZkEsSUFEZTtBQUFBLE1BQ1RPLE9BRFMsa0JBQ1RBLE9BRFM7QUFBQSxNQUNBQyxLQURBLGtCQUNBQSxLQURBOztBQVd2QyxzQkFDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsWUFBUSxFQUFFRCxPQUZaO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBSUUsT0FBTyxDQUFDLDhDQUFELENBQVgsRUFBNkQ7QUFDM0Q7QUFDQWIsZUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBSSxxQkFBYSxXQUFiLENBQXNCLFVBQUNTLEdBQUQ7QUFBQSxpQkFBU0MsS0FBSyxDQUFDRCxHQUFHLENBQUNFLE9BQUwsQ0FBZDtBQUFBLFNBQXRCO0FBQ0Q7QUFDRixLQVRIO0FBQUEsY0FXR1I7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0ExQlFGLGE7VUFDMkNHLHVEOzs7S0FEM0NILGE7QUE0QlQsK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDgyZGYxZTFmN2ViYjlhNTEzMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERFTEVURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIERFTEVURV9QUk9EVUNUX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICBkZWxldGVQcm9kdWN0KGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSwgcGF5bG9hZCkge1xyXG4gIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gIGNvbnNvbGUubG9nKGNhY2hlKTtcclxuICBjb25zb2xlLmxvZygncnVubmluZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGFmdGVyIGRlbGV0ZScpO1xyXG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVQcm9kdWN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlbGV0ZVByb2R1Y3QoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtkZWxldGVQcm9kdWN0LCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBERUxFVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvZHVjdD8nKSkge1xyXG4gICAgICAgICAgLy8gRGVsZXRlXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRpbmcuLi4nKTtcclxuICAgICAgICAgIGRlbGV0ZVByb2R1Y3QoKS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlUHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==