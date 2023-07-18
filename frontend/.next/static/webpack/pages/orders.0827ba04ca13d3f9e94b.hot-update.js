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
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:4rem;"]);
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

  function countItemsInAnOrder(order) {
    var itemCount = order.items.reduce(function (tally, currentItem) {
      return tally + currentItem.quantity;
    }, 0);
    return itemCount;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Your Orders (", allOrders.length, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: ["You have ", allOrders.length, " orders!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderUl, {
      children: allOrders.map(function (order) {
        var itemCount = countItemsInAnOrder(order);
        var productCount = order.items.length;

        /*#__PURE__*/
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/order/".concat(order.id),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "order-meta",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [itemCount, itemCount === 1 ? 'Item' : 'Items', ' ']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this), order.items.length === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [order.items.length, " Product"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [order.items.length, " Products"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(order.total)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "images",
                children: order.items.map(function (item) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: item.photo.image.publicUrlTransformed,
                    alt: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIlVTRVJfT1JERVJTX1FVRVJZIiwiZ3FsIiwiT3JkZXJVbCIsInN0eWxlZCIsIk9yZGVyc1BhZ2UiLCJ1c2VyIiwidXNlVXNlciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwidXNlcklkIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImFsbE9yZGVycyIsImNvdW50SXRlbXNJbkFuT3JkZXIiLCJvcmRlciIsIml0ZW1Db3VudCIsIml0ZW1zIiwicmVkdWNlIiwidGFsbHkiLCJjdXJyZW50SXRlbSIsInF1YW50aXR5IiwibGVuZ3RoIiwibWFwIiwicHJvZHVjdENvdW50IiwiZm9ybWF0TW9uZXkiLCJ0b3RhbCIsIml0ZW0iLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxvREFBSCxtQkFBdkI7QUEyQkEsSUFBTUMsT0FBTyxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSw0RkFBYjtLQUFNRCxPOztBQU1OLFNBQVNFLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDcEIsTUFBTUMsSUFBSSxHQUFHQyx5REFBTyxFQUFwQjs7QUFDQSxNQUFJLENBQUNELElBQUwsRUFBVztBQUNULHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDREUsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0ksRUFBakI7O0FBTG9CLGtCQU1hQyx5REFBUSxDQUFDVixpQkFBRCxFQUFvQjtBQUMzRFcsYUFBUyxFQUFFO0FBQ1RDLFlBQU0sRUFBRVAsSUFB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QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3Q0Q7O0dBckVROUIsVTtVQUNNRSxxRCxFQUtvQkkscUQ7OztNQU4xQk4sVTtBQXVFVCwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlcnMuMDgyN2JhMDRjYTEzZDNmOWU5NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBPcmRlclN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlclN0eWxlcyc7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcic7XHJcbmltcG9ydCBPcmRlckl0ZW1TdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJJdGVtU3R5bGVzJztcclxuXHJcbmNvbnN0IFVTRVJfT1JERVJTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IFVTRVJfT1JERVJTX1FVRVJZKCR1c2VySWQ6IElEISkge1xyXG4gICAgYWxsT3JkZXJzOiBhbGxPcmRlcnMod2hlcmU6IHsgdXNlcjogeyBpZDogJHVzZXJJZCB9IH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbGFiZWxcclxuICAgICAgdG90YWxcclxuICAgICAgY2hhcmdlXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICAgIGl0ZW1zIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBwcmljZVxyXG4gICAgICAgIHF1YW50aXR5XHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICBwaG90byB7XHJcbiAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJVbCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICBncmlkLWdhcDogNHJlbTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIE9yZGVyc1BhZ2UoKSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiA8cD5ObyB1c2VyPC9wPjtcclxuICB9XHJcbiAgY29uc29sZS5sb2codXNlci5pZCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoVVNFUl9PUkRFUlNfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGFsbE9yZGVycyB9ID0gZGF0YTtcclxuXHJcbiAgZnVuY3Rpb24gY291bnRJdGVtc0luQW5PcmRlcihvcmRlcikge1xyXG4gICAgY29uc3QgaXRlbUNvdW50ID0gb3JkZXIuaXRlbXMucmVkdWNlKFxyXG4gICAgICAodGFsbHksIGN1cnJlbnRJdGVtKSA9PiB0YWxseSArIGN1cnJlbnRJdGVtLnF1YW50aXR5LFxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGl0ZW1Db3VudDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+WW91ciBPcmRlcnMgKHthbGxPcmRlcnMubGVuZ3RofSk8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxoMj5Zb3UgaGF2ZSB7YWxsT3JkZXJzLmxlbmd0aH0gb3JkZXJzITwvaDI+XHJcbiAgICAgIDxPcmRlclVsPlxyXG4gICAgICAgIHthbGxPcmRlcnMubWFwKChvcmRlcikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXRlbUNvdW50ID0gY291bnRJdGVtc0luQW5PcmRlcihvcmRlcik7XHJcbiAgICAgICAgICBjb25zdCBwcm9kdWN0Q291bnQgPSBvcmRlci5pdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICA8T3JkZXJJdGVtU3R5bGVzPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL29yZGVyLyR7b3JkZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1Db3VudH1cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbUNvdW50ID09PSAxID8gJ0l0ZW0nIDogJ0l0ZW1zJ317JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIHtvcmRlci5pdGVtcy5sZW5ndGggPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e29yZGVyLml0ZW1zLmxlbmd0aH0gUHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8cD57b3JkZXIuaXRlbXMubGVuZ3RofSBQcm9kdWN0czwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1hdE1vbmV5KG9yZGVyLnRvdGFsKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtvcmRlci5pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9PcmRlckl0ZW1TdHlsZXM+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L09yZGVyVWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlcnNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9