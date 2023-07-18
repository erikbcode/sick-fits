self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/OrderStyles */ "./components/styles/OrderStyles.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\pages\\orders.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  query USER_ORDERS_QUERY($userId: ID!) {\n    orders: allOrders(where: { user: { id: $userId } }) {\n      id\n      label\n      total\n      charge\n      user {\n        name\n        id\n      }\n      items {\n        id\n        name\n        price\n        quantity\n        description\n        photo {\n          image {\n            publicUrlTransformed\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var USER_ORDERS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_6__.default)(_templateObject());

function OrdersPage() {
  _s();

  var _this = this;

  var id = context.userId;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(MULTIPLE_ORDERS_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }, this);
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 12
    }, this);
  }

  var order = data.order;
  var quantity = order.items.reduce(function (tally, currentItem) {
    return tally + currentItem.quantity;
  }, 0);
  console.log('data:', data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Sick Fits - Order ", order.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Order Id: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: order.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Charge: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: order.charge
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Order Total: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__.default)(order.total)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "ItemCount: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: quantity
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "items",
      children: order.items.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "order-item",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: item.photo.image.publicUrlTransformed,
            alt: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "item-details",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["Qty: ", item.quantity]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["Each: ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__.default)(item.price)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["Subtotal: ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__.default)(item.quantity * item.price)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["Item Description: ", item.description]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

_s(OrdersPage, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery];
});

_c = OrdersPage;
/* harmony default export */ __webpack_exports__["default"] = (OrdersPage);

var _c;

$RefreshReg$(_c, "OrdersPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIlVTRVJfT1JERVJTX1FVRVJZIiwiZ3FsIiwiT3JkZXJzUGFnZSIsImlkIiwiY29udGV4dCIsInVzZXJJZCIsInVzZVF1ZXJ5IiwiTVVMVElQTEVfT1JERVJTX1FVRVJZIiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsIm9yZGVyIiwicXVhbnRpdHkiLCJpdGVtcyIsInJlZHVjZSIsInRhbGx5IiwiY3VycmVudEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiY2hhcmdlIiwiZm9ybWF0TW9uZXkiLCJ0b3RhbCIsIm1hcCIsIml0ZW0iLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxvREFBSCxtQkFBdkI7O0FBMkJBLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDcEIsTUFBTUMsRUFBRSxHQUFHQyxPQUFPLENBQUNDLE1BQW5COztBQURvQixrQkFFYUMsd0RBQVEsQ0FBQ0MscUJBQUQsRUFBd0I7QUFDL0RDLGFBQVMsRUFBRTtBQUFFTCxRQUFFLEVBQUZBO0FBQUY7QUFEb0QsR0FBeEIsQ0FGckI7QUFBQSxNQUVaTSxJQUZZLGFBRVpBLElBRlk7QUFBQSxNQUVOQyxLQUZNLGFBRU5BLEtBRk07QUFBQSxNQUVDQyxPQUZELGFBRUNBLE9BRkQ7O0FBTXBCLE1BQUlBLE9BQUosRUFBYTtBQUNYLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxNQUFJRCxLQUFKLEVBQVc7QUFDVCx3QkFBTyw4REFBQyw2REFBRDtBQUFjLFdBQUssRUFBRUE7QUFBckI7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RDs7O0tBRjFCSixVO0FBNERULCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVycy5mMjkwYjVjZDM0MmM4YThlYWE2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgT3JkZXJTdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJTdHlsZXMnO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5jb25zdCBVU0VSX09SREVSU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBVU0VSX09SREVSU19RVUVSWSgkdXNlcklkOiBJRCEpIHtcclxuICAgIG9yZGVyczogYWxsT3JkZXJzKHdoZXJlOiB7IHVzZXI6IHsgaWQ6ICR1c2VySWQgfSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGxhYmVsXHJcbiAgICAgIHRvdGFsXHJcbiAgICAgIGNoYXJnZVxyXG4gICAgICB1c2VyIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgICBpdGVtcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgcGhvdG8ge1xyXG4gICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIE9yZGVyc1BhZ2UoKSB7XHJcbiAgY29uc3QgaWQgPSBjb250ZXh0LnVzZXJJZDtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShNVUxUSVBMRV9PUkRFUlNfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBvcmRlciB9ID0gZGF0YTtcclxuXHJcbiAgY29uc3QgcXVhbnRpdHkgPSBvcmRlci5pdGVtcy5yZWR1Y2UoXHJcbiAgICAodGFsbHksIGN1cnJlbnRJdGVtKSA9PiB0YWxseSArIGN1cnJlbnRJdGVtLnF1YW50aXR5LFxyXG4gICAgMFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coJ2RhdGE6JywgZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxPcmRlclN0eWxlcz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNpY2sgRml0cyAtIE9yZGVyIHtvcmRlci5pZH08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIDxzcGFuPk9yZGVyIElkOiA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e29yZGVyLmlkfTwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Bhbj5DaGFyZ2U6IDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57b3JkZXIuY2hhcmdlfTwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Bhbj5PcmRlciBUb3RhbDogPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntmb3JtYXRNb25leShvcmRlci50b3RhbCl9PC9zcGFuPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIDxzcGFuPkl0ZW1Db3VudDogPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntxdWFudGl0eX08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgIHtvcmRlci5pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItaXRlbVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfSBhbHQ9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICA8aDI+e2l0ZW0ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgIDxwPlF0eToge2l0ZW0ucXVhbnRpdHl9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPkVhY2g6IHtmb3JtYXRNb25leShpdGVtLnByaWNlKX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+U3VidG90YWw6IHtmb3JtYXRNb25leShpdGVtLnF1YW50aXR5ICogaXRlbS5wcmljZSl9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPkl0ZW0gRGVzY3JpcHRpb246IHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L09yZGVyU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyc1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=