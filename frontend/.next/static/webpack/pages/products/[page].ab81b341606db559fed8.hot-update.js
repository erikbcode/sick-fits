self["webpackHotUpdate_N_E"]("pages/products/[page]",{

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\AddToCart.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  mutation ADD_TO_CART_MUTATION($id: ID!) {\n    addToCart(productId: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ADD_TO_CART_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_6__.default)(_templateObject());

function AddToCart(_ref) {
  _s();

  var id = _ref.id;

  var _useCart = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_5__.useCart)(),
      openCart = _useCart.openCart;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(ADD_TO_CART_MUTATION, {
    variables: {
      id: id
    },
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_4__.CURRENT_USER_QUERY
    }]
  }),
      _useMutation2 = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),
      addToCart = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var handleAdd = function handleAdd() {
    addToCart();
    openCart();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    disabled: loading,
    onClick: handleAdd,
    children: ["Add", loading && 'ing', " To Cart \uD83D\uDED2"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(AddToCart, "YLjPJCRouRLsZd5Zy62iuzVGtRE=", false, function () {
  return [_lib_cartState__WEBPACK_IMPORTED_MODULE_5__.useCart, _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation];
});

_c = AddToCart;
/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

var _c;

$RefreshReg$(_c, "AddToCart");

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


/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStateProvider": function() { return /* binding */ CartStateProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\lib\\cartState.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
var LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider(_ref) {
  _s();

  var children = _ref.children;

  // This is our own custom provider. We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer.
  // Cart should be closed by default
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      cartOpen = _useState[0],
      setCartOpen = _useState[1];

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {
    value: {
      cartOpen: cartOpen,
      setCartOpen: setCartOpen,
      toggleCart: toggleCart,
      openCart: openCart,
      closeCart: closeCart
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
} // make a custom hook for accessing the cart local state


_s(CartStateProvider, "xe1WncxGrJWPKk54fyWehQszVXg=");

_c = CartStateProvider;

function useCart() {
  _s2();

  // use a consumer here to access local state
  var all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);
  return all;
}

_s2(useCart, "k0r6hllA0ZVFTbsvyQUS1AVLOSY=");



var _c;

$RefreshReg$(_c, "CartStateProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRUb0NhcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9jYXJ0U3RhdGUuanMiXSwibmFtZXMiOlsiQUREX1RPX0NBUlRfTVVUQVRJT04iLCJncWwiLCJBZGRUb0NhcnQiLCJpZCIsInVzZUNhcnQiLCJvcGVuQ2FydCIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsImFkZFRvQ2FydCIsImxvYWRpbmciLCJoYW5kbGVBZGQiLCJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsIkNhcnRTdGF0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImNhcnRPcGVuIiwic2V0Q2FydE9wZW4iLCJ0b2dnbGVDYXJ0IiwiY2xvc2VDYXJ0IiwiYWxsIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLG9EQUFILG1CQUExQjs7QUFRQSxTQUFTQyxTQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNOztBQUFBLGlCQUNKQyx1REFBTyxFQURIO0FBQUEsTUFDakJDLFFBRGlCLFlBQ2pCQSxRQURpQjs7QUFBQSxxQkFHUUMsMkRBQVcsQ0FBQ04sb0JBQUQsRUFBdUI7QUFDakVPLGFBQVMsRUFBRTtBQUFFSixRQUFFLEVBQUZBO0FBQUYsS0FEc0Q7QUFFakVLLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLHFEQUFrQkE7QUFBM0IsS0FBRDtBQUZpRCxHQUF2QixDQUhuQjtBQUFBO0FBQUEsTUFHbEJDLFNBSGtCO0FBQUEsTUFHTEMsT0FISyxvQkFHTEEsT0FISzs7QUFRekIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QkYsYUFBUztBQUNUTixZQUFRO0FBQ1QsR0FIRDs7QUFLQSxzQkFDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFlBQVEsRUFBRU8sT0FBaEM7QUFBeUMsV0FBTyxFQUFFQyxTQUFsRDtBQUFBLHNCQUNNRCxPQUFPLElBQUksS0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0FsQlFWLFM7VUFDY0UsbUQsRUFFWUUsdUQ7OztLQUgxQkosUztBQW9CVCwrREFBZUEsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUEsSUFBTVksaUJBQWlCLGdCQUFHQyxvREFBYSxFQUF2QztBQUNBLElBQU1DLGtCQUFrQixHQUFHRixpQkFBaUIsQ0FBQ0csUUFBN0M7O0FBRUEsU0FBU0MsaUJBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ3ZDO0FBRUE7QUFIdUMsa0JBSVBDLCtDQUFRLENBQUMsS0FBRCxDQUpEO0FBQUEsTUFJaENDLFFBSmdDO0FBQUEsTUFJdEJDLFdBSnNCOztBQU12QyxXQUFTQyxVQUFULEdBQXNCO0FBQ3BCRCxlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0Q7O0FBRUQsV0FBU0csU0FBVCxHQUFxQjtBQUNuQkYsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNEOztBQUVELFdBQVNqQixRQUFULEdBQW9CO0FBQ2xCaUIsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUVELHNCQUNFLDhEQUFDLGtCQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVELGNBQVEsRUFBUkEsUUFBRjtBQUFZQyxpQkFBVyxFQUFYQSxXQUFaO0FBQXlCQyxnQkFBVSxFQUFWQSxVQUF6QjtBQUFxQ2xCLGNBQVEsRUFBUkEsUUFBckM7QUFBK0NtQixlQUFTLEVBQVRBO0FBQS9DLEtBRFQ7QUFBQSxjQUdHTDtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9ELEMsQ0FFRDs7O0dBM0JTRCxpQjs7S0FBQUEsaUI7O0FBNEJULFNBQVNkLE9BQVQsR0FBbUI7QUFBQTs7QUFDakI7QUFDQSxNQUFNcUIsR0FBRyxHQUFHQyxpREFBVSxDQUFDWixpQkFBRCxDQUF0QjtBQUNBLFNBQU9XLEdBQVA7QUFDRDs7SUFKUXJCLE87O0FBTVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvW3BhZ2VdLmFiODFiMzQxNjA2ZGI1NTlmZWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcclxuXHJcbmNvbnN0IEFERF9UT19DQVJUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIEFERF9UT19DQVJUX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICBhZGRUb0NhcnQocHJvZHVjdElkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBZGRUb0NhcnQoeyBpZCB9KSB7XHJcbiAgY29uc3QgeyBvcGVuQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG5cclxuICBjb25zdCBbYWRkVG9DYXJ0LCB7IGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihBRERfVE9fQ0FSVF9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkID0gKCkgPT4ge1xyXG4gICAgYWRkVG9DYXJ0KCk7XHJcbiAgICBvcGVuQ2FydCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17bG9hZGluZ30gb25DbGljaz17aGFuZGxlQWRkfT5cclxuICAgICAgQWRke2xvYWRpbmcgJiYgJ2luZyd9IFRvIENhcnQg8J+bklxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9DYXJ0O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCBMb2NhbFN0YXRlUHJvdmlkZXIgPSBMb2NhbFN0YXRlQ29udGV4dC5Qcm92aWRlcjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIC8vIFRoaXMgaXMgb3VyIG93biBjdXN0b20gcHJvdmlkZXIuIFdlIHdpbGwgc3RvcmUgZGF0YSAoc3RhdGUpIGFuZCBmdW5jdGlvbmFsaXR5ICh1cGRhdGVycykgaW4gaGVyZSBhbmQgYW55b25lIGNhbiBhY2Nlc3MgaXQgdmlhIHRoZSBjb25zdW1lci5cclxuXHJcbiAgLy8gQ2FydCBzaG91bGQgYmUgY2xvc2VkIGJ5IGRlZmF1bHRcclxuICBjb25zdCBbY2FydE9wZW4sIHNldENhcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlQ2FydCgpIHtcclxuICAgIHNldENhcnRPcGVuKCFjYXJ0T3Blbik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZUNhcnQoKSB7XHJcbiAgICBzZXRDYXJ0T3BlbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuQ2FydCgpIHtcclxuICAgIHNldENhcnRPcGVuKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2NhbFN0YXRlUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3sgY2FydE9wZW4sIHNldENhcnRPcGVuLCB0b2dnbGVDYXJ0LCBvcGVuQ2FydCwgY2xvc2VDYXJ0IH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIG1ha2UgYSBjdXN0b20gaG9vayBmb3IgYWNjZXNzaW5nIHRoZSBjYXJ0IGxvY2FsIHN0YXRlXHJcbmZ1bmN0aW9uIHVzZUNhcnQoKSB7XHJcbiAgLy8gdXNlIGEgY29uc3VtZXIgaGVyZSB0byBhY2Nlc3MgbG9jYWwgc3RhdGVcclxuICBjb25zdCBhbGwgPSB1c2VDb250ZXh0KExvY2FsU3RhdGVDb250ZXh0KTtcclxuICByZXR1cm4gYWxsO1xyXG59XHJcblxyXG5leHBvcnQgeyBDYXJ0U3RhdGVQcm92aWRlciwgdXNlQ2FydCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9