self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\RemoveFromCart.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {\n    deleteCartItem(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  font-size: 3rem;\n  background: none;\n  border: 0;\n  :hover {\n    color: var(--red);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var RemoveButton = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.button(_templateObject());
_c = RemoveButton;
var REMOVE_FROM_CART_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject2());

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

function RemoveFromCart(_ref) {
  _s();

  var id = _ref.id;
  console.log('id:', id);

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id: id
    },
    update: update // optimisticResponse: {
    // deleteCartItem: {
    //    __typename: 'CartItem',
    //    id,
    //  },
    // },

  }),
      _useMutation2 = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),
      removeFromCart = _useMutation2[0],
      loading = _useMutation2[1].loading;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RemoveButton, {
    type: "button",
    onClick: removeFromCart,
    disabled: loading,
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(RemoveFromCart, "1gobEhNNb1zJTO706ogXU/cmTeU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation];
});

_c2 = RemoveFromCart;
/* harmony default export */ __webpack_exports__["default"] = (RemoveFromCart);

var _c, _c2;

$RefreshReg$(_c, "RemoveButton");
$RefreshReg$(_c2, "RemoveFromCart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcyJdLCJuYW1lcyI6WyJSZW1vdmVCdXR0b24iLCJzdHlsZWQiLCJSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OIiwiZ3FsIiwidXBkYXRlIiwiY2FjaGUiLCJwYXlsb2FkIiwiZXZpY3QiLCJpZGVudGlmeSIsImRhdGEiLCJkZWxldGVDYXJ0SXRlbSIsIlJlbW92ZUZyb21DYXJ0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZW1vdmVGcm9tQ2FydCIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLDZEQUFILG1CQUFsQjtLQUFNRCxZO0FBU04sSUFBTUUseUJBQXlCLEdBQUdDLG9EQUFILG9CQUEvQjs7QUFRQSxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsT0FBdkIsRUFBZ0M7QUFDOUJELE9BQUssQ0FBQ0UsS0FBTixDQUFZRixLQUFLLENBQUNHLFFBQU4sQ0FBZUYsT0FBTyxDQUFDRyxJQUFSLENBQWFDLGNBQTVCLENBQVo7QUFDRDs7QUFFRCxTQUFTQyxjQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNO0FBQzlCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixFQUFuQjs7QUFEOEIscUJBRVFHLDJEQUFXLENBQUNiLHlCQUFELEVBQTRCO0FBQzNFYyxhQUFTLEVBQUU7QUFBRUosUUFBRSxFQUFGQTtBQUFGLEtBRGdFO0FBRTNFUixVQUFNLEVBQU5BLE1BRjJFLENBRzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSMkUsR0FBNUIsQ0FGbkI7QUFBQTtBQUFBLE1BRXZCYSxjQUZ1QjtBQUFBLE1BRUxDLE9BRkssb0JBRUxBLE9BRks7O0FBWTlCLHNCQUNFLDhEQUFDLFlBQUQ7QUFBYyxRQUFJLEVBQUMsUUFBbkI7QUFBNEIsV0FBTyxFQUFFRCxjQUFyQztBQUFxRCxZQUFRLEVBQUVDLE9BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0FqQlFQLGM7VUFFK0JJLHVEOzs7TUFGL0JKLGM7QUFtQlQsK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mYTJlNzVlZWJjOTcyMjkxYzYwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFJlbW92ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZUNhcnRJdGVtKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoY2FjaGUsIHBheWxvYWQpIHtcclxuICBjYWNoZS5ldmljdChjYWNoZS5pZGVudGlmeShwYXlsb2FkLmRhdGEuZGVsZXRlQ2FydEl0ZW0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVtb3ZlRnJvbUNhcnQoeyBpZCB9KSB7XHJcbiAgY29uc29sZS5sb2coJ2lkOicsIGlkKTtcclxuICBjb25zdCBbcmVtb3ZlRnJvbUNhcnQsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgdXBkYXRlLFxyXG4gICAgLy8gb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XHJcbiAgICAvLyBkZWxldGVDYXJ0SXRlbToge1xyXG4gICAgLy8gICAgX190eXBlbmFtZTogJ0NhcnRJdGVtJyxcclxuICAgIC8vICAgIGlkLFxyXG4gICAgLy8gIH0sXHJcbiAgICAvLyB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVtb3ZlQnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZW1vdmVGcm9tQ2FydH0gZGlzYWJsZWQ9e2xvYWRpbmd9PlxyXG4gICAgICAmdGltZXM7XHJcbiAgICA8L1JlbW92ZUJ1dHRvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW1vdmVGcm9tQ2FydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==