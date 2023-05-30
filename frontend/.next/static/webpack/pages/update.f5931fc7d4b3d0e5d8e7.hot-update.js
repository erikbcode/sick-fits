self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\UpdateProduct.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  mutation UPDATE_PRODUCT_MUTATION($id: ID!, $name: String, $description: String, $price: Int) {\n    updateProduct(id: $id, $data: { id: $id, name: $name, description: $description, price: $price }) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      name\n      id\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var SINGLE_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject());
var UPDATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject2());

function UpdateProduct(_ref) {
  _s();

  var id = _ref.id;

  // Get the existing product
  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(SINGLE_PRODUCT_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log(data);

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id: id // TODO pass in updates to product here

    }
  }),
      _useMutation2 = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),
      updateProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      updateData = _useMutation2$.data,
      updateError = _useMutation2$.error,
      updateLoading = _useMutation2$.loading; // Get the mutation to update the product
  // Need the form to handle the updates


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Update ", id]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 10
  }, this);
}

_s(UpdateProduct, "N8DX0jY1IZ71NkEUJKFQ5hlO+Ac=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation];
});

_c = UpdateProduct;
/* harmony default export */ __webpack_exports__["default"] = (UpdateProduct);
UpdateProduct.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJVcGRhdGVQcm9kdWN0IiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwidXNlTXV0YXRpb24iLCJ1cGRhdGVQcm9kdWN0IiwidXBkYXRlRGF0YSIsInVwZGF0ZUVycm9yIiwidXBkYXRlTG9hZGluZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0Msb0RBQUgsbUJBQTFCO0FBV0EsSUFBTUMsdUJBQXVCLEdBQUdELG9EQUFILG9CQUE3Qjs7QUFXQSxTQUFTRSxhQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNOztBQUM3QjtBQUQ2QixrQkFFSUMsd0RBQVEsQ0FBQ0wsb0JBQUQsRUFBdUI7QUFDOURNLGFBQVMsRUFBRTtBQUFFRixRQUFFLEVBQUZBO0FBQUY7QUFEbUQsR0FBdkIsQ0FGWjtBQUFBLE1BRXJCRyxJQUZxQixhQUVyQkEsSUFGcUI7QUFBQSxNQUVmQyxLQUZlLGFBRWZBLEtBRmU7QUFBQSxNQUVSQyxPQUZRLGFBRVJBLE9BRlE7O0FBSzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjs7QUFMNkIscUJBVXpCSywyREFBVyxDQUFDVix1QkFBRCxFQUEwQjtBQUN2Q0ksYUFBUyxFQUFFO0FBQ1RGLFFBQUUsRUFBRkEsRUFEUyxDQUVUOztBQUZTO0FBRDRCLEdBQTFCLENBVmM7QUFBQTtBQUFBLE1BUTNCUyxhQVIyQjtBQUFBO0FBQUEsTUFTbkJDLFVBVG1CLGtCQVN6QlAsSUFUeUI7QUFBQSxNQVNBUSxXQVRBLGtCQVNQUCxLQVRPO0FBQUEsTUFTc0JRLGFBVHRCLGtCQVNhUCxPQVRiLEVBZ0I3QjtBQUVBOzs7QUFDQSxzQkFBTztBQUFBLDBCQUFXTCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBcEJRRCxhO1VBRTBCRSxvRCxFQVE3Qk8sdUQ7OztLQVZHVCxhO0FBc0JULCtEQUFlQSxhQUFmO0FBRUFBLGFBQWEsQ0FBQ2MsU0FBZCxHQUEwQjtBQUN4QmIsSUFBRSxFQUFFYywwREFBZ0JDO0FBREksQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXBkYXRlLmY1OTMxZmM3ZDRiM2QwZTVkOGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuY29uc3QgU0lOR0xFX1BST0RVQ1RfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0lOR0xFX1BST0RVQ1RfUVVFUlkoJGlkOiBJRCEpIHtcclxuICAgIFByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XHJcbiAgICAgIG5hbWVcclxuICAgICAgaWRcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcHJpY2VcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVUERBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBVUERBVEVfUFJPRFVDVF9NVVRBVElPTigkaWQ6IElEISwgJG5hbWU6IFN0cmluZywgJGRlc2NyaXB0aW9uOiBTdHJpbmcsICRwcmljZTogSW50KSB7XHJcbiAgICB1cGRhdGVQcm9kdWN0KGlkOiAkaWQsICRkYXRhOiB7IGlkOiAkaWQsIG5hbWU6ICRuYW1lLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLCBwcmljZTogJHByaWNlIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwcmljZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoeyBpZCB9KSB7XHJcbiAgLy8gR2V0IHRoZSBleGlzdGluZyBwcm9kdWN0XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoU0lOR0xFX1BST0RVQ1RfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICBjb25zdCBbXHJcbiAgICB1cGRhdGVQcm9kdWN0LFxyXG4gICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfSxcclxuICBdID0gdXNlTXV0YXRpb24oVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZCxcclxuICAgICAgLy8gVE9ETyBwYXNzIGluIHVwZGF0ZXMgdG8gcHJvZHVjdCBoZXJlXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8vIEdldCB0aGUgbXV0YXRpb24gdG8gdXBkYXRlIHRoZSBwcm9kdWN0XHJcblxyXG4gIC8vIE5lZWQgdGhlIGZvcm0gdG8gaGFuZGxlIHRoZSB1cGRhdGVzXHJcbiAgcmV0dXJuIDxwPlVwZGF0ZSB7aWR9PC9wPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlUHJvZHVjdDtcclxuXHJcblVwZGF0ZVByb2R1Y3QucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9