self["webpackHotUpdate_N_E"]("pages/order/[id]",{

/***/ "./components/SingleOrder.js":
/*!***********************************!*\
  !*** ./components/SingleOrder.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _styles_OrderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/OrderStyles */ "./components/styles/OrderStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\SingleOrder.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  query SINGLE_ORDER_QUERY($id: ID!) {\n    Order(where: { id: $id }) {\n      id\n      label\n      total\n      charge\n      user {\n        name\n      }\n      items {\n        name\n        price\n        quantity\n        photo {\n          image {\n            publicUrlTransformed\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var SINGLE_ORDER_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__.default)(_templateObject());

function SingleOrder(_ref) {
  _s();

  var id = _ref.id;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(SINGLE_ORDER_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log('data:', data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Order Id: ", data.Order.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Charge: ", data.Order.charge]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(SingleOrder, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery];
});

_c = SingleOrder;
/* harmony default export */ __webpack_exports__["default"] = (SingleOrder);

var _c;

$RefreshReg$(_c, "SingleOrder");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVPcmRlci5qcyJdLCJuYW1lcyI6WyJTSU5HTEVfT1JERVJfUVVFUlkiLCJncWwiLCJTaW5nbGVPcmRlciIsImlkIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsIk9yZGVyIiwiY2hhcmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0Msb0RBQUgsbUJBQXhCOztBQXdCQSxTQUFTQyxXQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNOztBQUFBLGtCQUNNQyx3REFBUSxDQUFDSixrQkFBRCxFQUFxQjtBQUM1REssYUFBUyxFQUFFO0FBQUVGLFFBQUUsRUFBRkE7QUFBRjtBQURpRCxHQUFyQixDQURkO0FBQUEsTUFDbkJHLElBRG1CLGFBQ25CQSxJQURtQjtBQUFBLE1BQ2JDLEtBRGEsYUFDYkEsS0FEYTtBQUFBLE1BQ05DLE9BRE0sYUFDTkEsT0FETTs7QUFLM0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJKLElBQXJCO0FBQ0Esc0JBQ0UsOERBQUMsd0RBQUQ7QUFBQSw0QkFDRTtBQUFBLCtCQUFjQSxJQUFJLENBQUNLLEtBQUwsQ0FBV1IsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDZCQUFZRyxJQUFJLENBQUNLLEtBQUwsQ0FBV0MsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0FaUVYsVztVQUMwQkUsb0Q7OztLQUQxQkYsVztBQWNULCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVyL1tpZF0uYTFhNTI5ZjU5ZTQyYzY1M2I2NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IE9yZGVyU3R5bGVzIGZyb20gJy4vc3R5bGVzL09yZGVyU3R5bGVzJztcclxuXHJcbmNvbnN0IFNJTkdMRV9PUkRFUl9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTSU5HTEVfT1JERVJfUVVFUlkoJGlkOiBJRCEpIHtcclxuICAgIE9yZGVyKHdoZXJlOiB7IGlkOiAkaWQgfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBsYWJlbFxyXG4gICAgICB0b3RhbFxyXG4gICAgICBjaGFyZ2VcclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGl0ZW1zIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgIHBob3RvIHtcclxuICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTaW5nbGVPcmRlcih7IGlkIH0pIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShTSU5HTEVfT1JERVJfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZygnZGF0YTonLCBkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyU3R5bGVzPlxyXG4gICAgICA8cD5PcmRlciBJZDoge2RhdGEuT3JkZXIuaWR9PC9wPlxyXG4gICAgICA8cD5DaGFyZ2U6IHtkYXRhLk9yZGVyLmNoYXJnZX08L3A+XHJcbiAgICA8L09yZGVyU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZU9yZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9