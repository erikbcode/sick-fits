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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/OrderStyles */ "./components/styles/OrderStyles.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/User */ "./components/User.js");
/* harmony import */ var _components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles/OrderItemStyles */ "./components/styles/OrderItemStyles.js");
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











var USER_ORDERS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_9__.default)(_templateObject());
var OrderUl = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div.withConfig({
  displayName: "orders__OrderUl",
  componentId: "sc-15udvsj-0"
})(["display:grid;grid-template-columns:repeat(2,auto);grid-gap:20px;"]);
_c = OrderUl;

function OrdersPage() {
  _s();

  var _this = this;

  var user = (0,_components_User__WEBPACK_IMPORTED_MODULE_7__.useUser)();

  if (!user) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "No user"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 12
    }, this);
  }

  console.log(user.id);

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery)(USER_ORDERS_QUERY, {
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
      lineNumber: 57,
      columnNumber: 12
    }, this);
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderUl, {
      children: allOrders.map(function (order) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/order/".concat(order.id),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(order.total)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

_s(OrdersPage, "2WkuDOyXI9ysOveml3ryr62YFLM=", false, function () {
  return [_components_User__WEBPACK_IMPORTED_MODULE_7__.useUser, _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIlVTRVJfT1JERVJTX1FVRVJZIiwiZ3FsIiwiT3JkZXJVbCIsInN0eWxlZCIsIk9yZGVyc1BhZ2UiLCJ1c2VyIiwidXNlVXNlciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwidXNlcklkIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImFsbE9yZGVycyIsImNvdW50SXRlbXNJbkFuT3JkZXIiLCJvcmRlckl0ZW1zIiwiaXRlbUNvdW50IiwicmVkdWNlIiwidGFsbHkiLCJjdXJyZW50SXRlbSIsInF1YW50aXR5IiwibGVuZ3RoIiwibWFwIiwib3JkZXIiLCJpdGVtcyIsImZvcm1hdE1vbmV5IiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLG9EQUFILG1CQUF2QjtBQTJCQSxJQUFNQyxPQUFPLEdBQUdDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHdFQUFiO0tBQU1ELE87O0FBTU4sU0FBU0UsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUNwQixNQUFNQyxJQUFJLEdBQUdDLHlEQUFPLEVBQXBCOztBQUNBLE1BQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1Qsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNERSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDSSxFQUFqQjs7QUFMb0Isa0JBTWFDLHlEQUFRLENBQUNWLGlCQUFELEVBQW9CO0FBQzNEVyxhQUFTLEVBQUU7QUFDVEMsWUFBTSxFQUFFUCxJQUFJLENBQUNJO0FBREo7QUFEZ0QsR0FBcEIsQ0FOckI7QUFBQSxNQU1aSSxJQU5ZLGFBTVpBLElBTlk7QUFBQSxNQU1OQyxLQU5NLGFBTU5BLEtBTk07QUFBQSxNQU1DQyxPQU5ELGFBTUNBLE9BTkQ7O0FBV3BCLE1BQUlBLE9BQUosRUFBYTtBQUNYLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxNQUFJRCxLQUFKLEVBQVc7QUFDVCx3QkFBTyw4REFBQyw2REFBRDtBQUFjLFdBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBakJtQixNQW1CWkUsU0FuQlksR0FtQkVILElBbkJGLENBbUJaRyxTQW5CWTtBQW9CcEJULFNBQU8sQ0FBQ0MsR0FBUixDQUFZUSxTQUFaOztBQUVBLFdBQVNDLG1CQUFULENBQTZCQyxVQUE3QixFQUF5QztBQUN2QyxRQUFNQyxTQUFTLEdBQUdELFVBQVUsQ0FBQ0UsTUFBWCxDQUNoQixVQUFDQyxLQUFELEVBQVFDLFdBQVI7QUFBQSxhQUF3QkQsS0FBSyxHQUFHQyxXQUFXLENBQUNDLFFBQTVDO0FBQUEsS0FEZ0IsRUFFaEIsQ0FGZ0IsQ0FBbEI7QUFJQSxXQUFPSixTQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDhCQUFjSCxTQUFTLENBQUNRLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsT0FBRDtBQUFBLGdCQUNHUixTQUFTLENBQUNTLEdBQVYsQ0FBYyxVQUFDQyxLQUFEO0FBQUEsNEJBQ2IsOERBQUMsdUVBQUQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLG1CQUFZQSxLQUFLLENBQUNqQixFQUFsQixDQUFWO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLFlBQWY7QUFBQSxzQ0FDRTtBQUFBLDJCQUFTUSxtQkFBbUIsQ0FBQ1MsS0FBSyxDQUFDQyxLQUFQLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsMkJBQVNELEtBQUssQ0FBQ0MsS0FBTixDQUFZSCxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFHRTtBQUFBLDBCQUFTSSx5REFBVyxDQUFDRixLQUFLLENBQUNHLEtBQVA7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBaERRekIsVTtVQUNNRSxxRCxFQUtvQkkscUQ7OztNQU4xQk4sVTtBQWtEVCwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlcnMuMGIxMmMyZDI3OWY4ODU5NmMxZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBPcmRlclN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlclN0eWxlcyc7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcic7XHJcbmltcG9ydCBPcmRlckl0ZW1TdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJJdGVtU3R5bGVzJztcclxuXHJcbmNvbnN0IFVTRVJfT1JERVJTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IFVTRVJfT1JERVJTX1FVRVJZKCR1c2VySWQ6IElEISkge1xyXG4gICAgYWxsT3JkZXJzOiBhbGxPcmRlcnMod2hlcmU6IHsgdXNlcjogeyBpZDogJHVzZXJJZCB9IH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbGFiZWxcclxuICAgICAgdG90YWxcclxuICAgICAgY2hhcmdlXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICAgIGl0ZW1zIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBwcmljZVxyXG4gICAgICAgIHF1YW50aXR5XHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICBwaG90byB7XHJcbiAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJVbCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcclxuICBncmlkLWdhcDogMjBweDtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIE9yZGVyc1BhZ2UoKSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiA8cD5ObyB1c2VyPC9wPjtcclxuICB9XHJcbiAgY29uc29sZS5sb2codXNlci5pZCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoVVNFUl9PUkRFUlNfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGFsbE9yZGVycyB9ID0gZGF0YTtcclxuICBjb25zb2xlLmxvZyhhbGxPcmRlcnMpO1xyXG5cclxuICBmdW5jdGlvbiBjb3VudEl0ZW1zSW5Bbk9yZGVyKG9yZGVySXRlbXMpIHtcclxuICAgIGNvbnN0IGl0ZW1Db3VudCA9IG9yZGVySXRlbXMucmVkdWNlKFxyXG4gICAgICAodGFsbHksIGN1cnJlbnRJdGVtKSA9PiB0YWxseSArIGN1cnJlbnRJdGVtLnF1YW50aXR5LFxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGl0ZW1Db3VudDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+WW91IGhhdmUge2FsbE9yZGVycy5sZW5ndGh9IG9yZGVycyE8L2gyPlxyXG4gICAgICA8T3JkZXJVbD5cclxuICAgICAgICB7YWxsT3JkZXJzLm1hcCgob3JkZXIpID0+IChcclxuICAgICAgICAgIDxPcmRlckl0ZW1TdHlsZXM+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avb3JkZXIvJHtvcmRlci5pZH1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e2NvdW50SXRlbXNJbkFuT3JkZXIob3JkZXIuaXRlbXMpfSBJdGVtczwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57b3JkZXIuaXRlbXMubGVuZ3RofSBQcm9kdWN0czwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57Zm9ybWF0TW9uZXkob3JkZXIudG90YWwpfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L09yZGVySXRlbVN0eWxlcz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9PcmRlclVsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==