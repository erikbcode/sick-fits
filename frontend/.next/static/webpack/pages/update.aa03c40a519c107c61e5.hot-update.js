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
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\UpdateProduct.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation UPDATE_PRODUCT_MUTATION($id: ID!, $name: String, $description: String, $price: Int) {\n    updateProduct(id: $id, $data: { id: $id, name: $name, description: $description, price: $price }) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

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






var SINGLE_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());
var UPDATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject2());

function UpdateProduct(_ref) {
  _s();

  var id = _ref.id;

  // Get the existing product
  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(SINGLE_PRODUCT_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log(data);

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id: id // TODO pass in updates to product here

    }
  }),
      _useMutation2 = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      updateProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      updateData = _useMutation2$.data,
      updateError = _useMutation2$.error,
      updateLoading = _useMutation2$.loading; // Get the mutation to update the product
  // Need the form to handle the updates


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_7__.default, {
      onSubmit: /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
          return C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault(); // TODO: Handle submit

                case 1:
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisplayError, {
        error: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
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
            lineNumber: 70,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
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
            lineNumber: 81,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
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
            lineNumber: 92,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "+ Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(UpdateProduct, "N8DX0jY1IZ71NkEUJKFQ5hlO+Ac=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation];
});

_c = UpdateProduct;
/* harmony default export */ __webpack_exports__["default"] = (UpdateProduct);
UpdateProduct.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJVcGRhdGVQcm9kdWN0IiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwidXNlTXV0YXRpb24iLCJ1cGRhdGVQcm9kdWN0IiwidXBkYXRlRGF0YSIsInVwZGF0ZUVycm9yIiwidXBkYXRlTG9hZGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNoYW5nZSIsImlucHV0cyIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLG9EQUFILG1CQUExQjtBQVdBLElBQU1DLHVCQUF1QixHQUFHRCxvREFBSCxvQkFBN0I7O0FBV0EsU0FBU0UsYUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFDN0I7QUFENkIsa0JBRUlDLHdEQUFRLENBQUNMLG9CQUFELEVBQXVCO0FBQzlETSxhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFGQTtBQUFGO0FBRG1ELEdBQXZCLENBRlo7QUFBQSxNQUVyQkcsSUFGcUIsYUFFckJBLElBRnFCO0FBQUEsTUFFZkMsS0FGZSxhQUVmQSxLQUZlO0FBQUEsTUFFUkMsT0FGUSxhQUVSQSxPQUZROztBQUs3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7O0FBTDZCLHFCQVV6QkssMkRBQVcsQ0FBQ1YsdUJBQUQsRUFBMEI7QUFDdkNJLGFBQVMsRUFBRTtBQUNURixRQUFFLEVBQUZBLEVBRFMsQ0FFVDs7QUFGUztBQUQ0QixHQUExQixDQVZjO0FBQUE7QUFBQSxNQVEzQlMsYUFSMkI7QUFBQTtBQUFBLE1BU25CQyxVQVRtQixrQkFTekJQLElBVHlCO0FBQUEsTUFTQVEsV0FUQSxrQkFTUFAsS0FUTztBQUFBLE1BU3NCUSxhQVR0QixrQkFTYVAsT0FUYixFQWdCN0I7QUFFQTs7O0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUNFLGNBQVE7QUFBQSxnWEFBRSxpQkFBT1EsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JBLG1CQUFDLENBQUNDLGNBQUYsR0FEUSxDQUVSOztBQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEVjtBQUFBLDhCQU1FLDhEQUFDLFlBQUQ7QUFBYyxhQUFLLEVBQUVWO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQVUsZ0JBQVEsRUFBRUMsT0FBcEI7QUFBNkIscUJBQVdBLE9BQXhDO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBQSwyQ0FFRTtBQUNFLG9CQUFRLE1BRFY7QUFFRSxnQkFBSSxFQUFDLE1BRlA7QUFHRSxjQUFFLEVBQUMsT0FITDtBQUlFLGdCQUFJLEVBQUMsT0FKUDtBQUtFLG9CQUFRLEVBQUVVO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFXRTtBQUFPLGlCQUFPLEVBQUMsTUFBZjtBQUFBLDBDQUVFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsY0FBRSxFQUFDLE1BRkw7QUFHRSxnQkFBSSxFQUFDLE1BSFA7QUFJRSx1QkFBVyxFQUFDLE1BSmQ7QUFLRSxpQkFBSyxFQUFFQyxNQUFNLENBQUNDLElBTGhCO0FBTUUsb0JBQVEsRUFBRUY7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixlQXNCRTtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUFBLDJDQUVFO0FBQ0UsZ0JBQUksRUFBQyxRQURQO0FBRUUsY0FBRSxFQUFDLE9BRkw7QUFHRSxnQkFBSSxFQUFDLE9BSFA7QUFJRSx1QkFBVyxFQUFDLE9BSmQ7QUFLRSxpQkFBSyxFQUFFQyxNQUFNLENBQUNFLEtBTGhCO0FBTUUsb0JBQVEsRUFBRUg7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QkYsZUFpQ0U7QUFBTyxpQkFBTyxFQUFDLGFBQWY7QUFBQSxpREFFRTtBQUNFLGNBQUUsRUFBQyxhQURMO0FBRUUsZ0JBQUksRUFBQyxhQUZQO0FBR0UsdUJBQVcsRUFBQyxhQUhkO0FBSUUsaUJBQUssRUFBRUMsTUFBTSxDQUFDRyxXQUpoQjtBQUtFLG9CQUFRLEVBQUVKO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBbURFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUREOztHQTVFUWhCLGE7VUFFMEJFLG9ELEVBUTdCTyx1RDs7O0tBVkdULGE7QUE4RVQsK0RBQWVBLGFBQWY7QUFFQUEsYUFBYSxDQUFDcUIsU0FBZCxHQUEwQjtBQUN4QnBCLElBQUUsRUFBRXFCLDBEQUFnQkM7QUFESSxDQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91cGRhdGUuYWEwM2M0MGE1MTljMTA3YzYxZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5cclxuY29uc3QgU0lOR0xFX1BST0RVQ1RfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0lOR0xFX1BST0RVQ1RfUVVFUlkoJGlkOiBJRCEpIHtcclxuICAgIFByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XHJcbiAgICAgIG5hbWVcclxuICAgICAgaWRcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcHJpY2VcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVUERBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBVUERBVEVfUFJPRFVDVF9NVVRBVElPTigkaWQ6IElEISwgJG5hbWU6IFN0cmluZywgJGRlc2NyaXB0aW9uOiBTdHJpbmcsICRwcmljZTogSW50KSB7XHJcbiAgICB1cGRhdGVQcm9kdWN0KGlkOiAkaWQsICRkYXRhOiB7IGlkOiAkaWQsIG5hbWU6ICRuYW1lLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLCBwcmljZTogJHByaWNlIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwcmljZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoeyBpZCB9KSB7XHJcbiAgLy8gR2V0IHRoZSBleGlzdGluZyBwcm9kdWN0XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoU0lOR0xFX1BST0RVQ1RfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICBjb25zdCBbXHJcbiAgICB1cGRhdGVQcm9kdWN0LFxyXG4gICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfSxcclxuICBdID0gdXNlTXV0YXRpb24oVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZCxcclxuICAgICAgLy8gVE9ETyBwYXNzIGluIHVwZGF0ZXMgdG8gcHJvZHVjdCBoZXJlXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8vIEdldCB0aGUgbXV0YXRpb24gdG8gdXBkYXRlIHRoZSBwcm9kdWN0XHJcblxyXG4gIC8vIE5lZWQgdGhlIGZvcm0gdG8gaGFuZGxlIHRoZSB1cGRhdGVzXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAvLyBUT0RPOiBIYW5kbGUgc3VibWl0XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgSW1hZ2VcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgUHJpY2VcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4rIEFkZCBQcm9kdWN0PC9idXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVByb2R1Y3Q7XHJcblxyXG5VcGRhdGVQcm9kdWN0LnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==