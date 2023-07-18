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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/OrderStyles */ "./components/styles/OrderStyles.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/User */ "./components/User.js");
/* harmony import */ var _components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/OrderItemStyles */ "./components/styles/OrderItemStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\pages\\orders.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  query USER_ORDERS_QUERY($userId: ID!) {\n    allOrders: allOrders(where: { user: { id: $userId } }) {\n      id\n      label\n      total\n      charge\n      user {\n        name\n        id\n      }\n      items {\n        id\n        name\n        price\n        quantity\n        description\n        photo {\n          image {\n            publicUrlTransformed\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var USER_ORDERS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());
var OrderUl = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "orders__OrderUl",
  componentId: "sc-15udvsj-0"
})(["display:grid;grid-template-columns:repeat(2,auto);grid-gap:20px;"]);
_c = OrderUl;

function OrdersPage() {
  _s();

  var _this = this;

  var user = (0,_components_User__WEBPACK_IMPORTED_MODULE_6__.useUser)();

  if (!user) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "No user"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 12
    }, this);
  }

  console.log(user.id);

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery)(USER_ORDERS_QUERY, {
    variables: {
      userId: user.id
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
      lineNumber: 56,
      columnNumber: 12
    }, this);
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 12
    }, this);
  }

  var allOrders = data.allOrders;
  console.log(allOrders);

  function countItemsInAnOrder(orderItems) {
    var itemCount = orderItems.reduce(function (tally, currentItem) {
      return tally + currentItem.quantity;
    }, 0);
    return itemCount;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: ["You have ", allOrders.length, " orders!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderUl, {
      children: allOrders.map(function (order) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: [' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "order-meta",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: [countItemsInAnOrder(order.items), " Items"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: [order.items.length, " Products"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__.default)(order.total)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
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
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

_s(OrdersPage, "2WkuDOyXI9ysOveml3ryr62YFLM=", false, function () {
  return [_components_User__WEBPACK_IMPORTED_MODULE_6__.useUser, _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery];
});

_c2 = OrdersPage;
/* harmony default export */ __webpack_exports__["default"] = (OrdersPage);

var _c, _c2;

$RefreshReg$(_c, "OrderUl");
$RefreshReg$(_c2, "OrdersPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIlVTRVJfT1JERVJTX1FVRVJZIiwiZ3FsIiwiT3JkZXJVbCIsInN0eWxlZCIsIk9yZGVyc1BhZ2UiLCJ1c2VyIiwidXNlVXNlciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwidXNlcklkIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImFsbE9yZGVycyIsImNvdW50SXRlbXNJbkFuT3JkZXIiLCJvcmRlckl0ZW1zIiwiaXRlbUNvdW50IiwicmVkdWNlIiwidGFsbHkiLCJjdXJyZW50SXRlbSIsInF1YW50aXR5IiwibGVuZ3RoIiwibWFwIiwib3JkZXIiLCJpdGVtcyIsImZvcm1hdE1vbmV5IiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0Msb0RBQUgsbUJBQXZCO0FBMkJBLElBQU1DLE9BQU8sR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsd0VBQWI7S0FBTUQsTzs7QUFNTixTQUFTRSxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQ3BCLE1BQU1DLElBQUksR0FBR0MseURBQU8sRUFBcEI7O0FBQ0EsTUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFDVCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0RFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNJLEVBQWpCOztBQUxvQixrQkFNYUMseURBQVEsQ0FBQ1YsaUJBQUQsRUFBb0I7QUFDM0RXLGFBQVMsRUFBRTtBQUNUQyxZQUFNLEVBQUVQLElBQUksQ0FBQ0k7QUFESjtBQURnRCxHQUFwQixDQU5yQjtBQUFBLE1BTVpJLElBTlksYUFNWkEsSUFOWTtBQUFBLE1BTU5DLEtBTk0sYUFNTkEsS0FOTTtBQUFBLE1BTUNDLE9BTkQsYUFNQ0EsT0FORDs7QUFXcEIsTUFBSUEsT0FBSixFQUFhO0FBQ1gsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELE1BQUlELEtBQUosRUFBVztBQUNULHdCQUFPLDhEQUFDLDZEQUFEO0FBQWMsV0FBSyxFQUFFQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFqQm1CLE1BbUJaRSxTQW5CWSxHQW1CRUgsSUFuQkYsQ0FtQlpHLFNBbkJZO0FBb0JwQlQsU0FBTyxDQUFDQyxHQUFSLENBQVlRLFNBQVo7O0FBRUEsV0FBU0MsbUJBQVQsQ0FBNkJDLFVBQTdCLEVBQXlDO0FBQ3ZDLFFBQU1DLFNBQVMsR0FBR0QsVUFBVSxDQUFDRSxNQUFYLENBQ2hCLFVBQUNDLEtBQUQsRUFBUUMsV0FBUjtBQUFBLGFBQXdCRCxLQUFLLEdBQUdDLFdBQVcsQ0FBQ0MsUUFBNUM7QUFBQSxLQURnQixFQUVoQixDQUZnQixDQUFsQjtBQUlBLFdBQU9KLFNBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsOEJBQWNILFNBQVMsQ0FBQ1EsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxPQUFEO0FBQUEsZ0JBQ0dSLFNBQVMsQ0FBQ1MsR0FBVixDQUFjLFVBQUNDLEtBQUQ7QUFBQSw0QkFDYiw4REFBQyx1RUFBRDtBQUFBLGlDQUNFO0FBQUEsdUJBQ0csR0FESCxlQUVFO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0U7QUFBQSwyQkFBU1QsbUJBQW1CLENBQUNTLEtBQUssQ0FBQ0MsS0FBUCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLDJCQUFTRCxLQUFLLENBQUNDLEtBQU4sQ0FBWUgsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBR0U7QUFBQSwwQkFBU0kseURBQVcsQ0FBQ0YsS0FBSyxDQUFDRyxLQUFQO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztHQWpEUXpCLFU7VUFDTUUscUQsRUFLb0JJLHFEOzs7TUFOMUJOLFU7QUFtRFQsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXJzLjhkODIyNmJmZTE3Y2JiMTJiYmJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgT3JkZXJTdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJTdHlsZXMnO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXInO1xyXG5pbXBvcnQgT3JkZXJJdGVtU3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzL09yZGVySXRlbVN0eWxlcyc7XHJcblxyXG5jb25zdCBVU0VSX09SREVSU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBVU0VSX09SREVSU19RVUVSWSgkdXNlcklkOiBJRCEpIHtcclxuICAgIGFsbE9yZGVyczogYWxsT3JkZXJzKHdoZXJlOiB7IHVzZXI6IHsgaWQ6ICR1c2VySWQgfSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGxhYmVsXHJcbiAgICAgIHRvdGFsXHJcbiAgICAgIGNoYXJnZVxyXG4gICAgICB1c2VyIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgICBpdGVtcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgcGhvdG8ge1xyXG4gICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE9yZGVyVWwgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBPcmRlcnNQYWdlKCkge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gPHA+Tm8gdXNlcjwvcD47XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHVzZXIuaWQpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFVTRVJfT1JERVJTX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBhbGxPcmRlcnMgfSA9IGRhdGE7XHJcbiAgY29uc29sZS5sb2coYWxsT3JkZXJzKTtcclxuXHJcbiAgZnVuY3Rpb24gY291bnRJdGVtc0luQW5PcmRlcihvcmRlckl0ZW1zKSB7XHJcbiAgICBjb25zdCBpdGVtQ291bnQgPSBvcmRlckl0ZW1zLnJlZHVjZShcclxuICAgICAgKHRhbGx5LCBjdXJyZW50SXRlbSkgPT4gdGFsbHkgKyBjdXJyZW50SXRlbS5xdWFudGl0eSxcclxuICAgICAgMFxyXG4gICAgKTtcclxuICAgIHJldHVybiBpdGVtQ291bnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPllvdSBoYXZlIHthbGxPcmRlcnMubGVuZ3RofSBvcmRlcnMhPC9oMj5cclxuICAgICAgPE9yZGVyVWw+XHJcbiAgICAgICAge2FsbE9yZGVycy5tYXAoKG9yZGVyKSA9PiAoXHJcbiAgICAgICAgICA8T3JkZXJJdGVtU3R5bGVzPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57Y291bnRJdGVtc0luQW5PcmRlcihvcmRlci5pdGVtcyl9IEl0ZW1zPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPntvcmRlci5pdGVtcy5sZW5ndGh9IFByb2R1Y3RzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPntmb3JtYXRNb25leShvcmRlci50b3RhbCl9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvT3JkZXJJdGVtU3R5bGVzPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L09yZGVyVWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlcnNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9