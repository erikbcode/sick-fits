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
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/order/".concat(order.id),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "order-meta",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [countItemsInAnOrder(order), " Items"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, _this), order.items.length === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [order.items.length, " Product"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [order.items.length, " Products"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(order.total)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "images",
                children: order.items.map(function (item) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: item.photo.image.publicUrlTransformed,
                    alt: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIlVTRVJfT1JERVJTX1FVRVJZIiwiZ3FsIiwiT3JkZXJVbCIsInN0eWxlZCIsIk9yZGVyc1BhZ2UiLCJ1c2VyIiwidXNlVXNlciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwidXNlcklkIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImFsbE9yZGVycyIsImNvdW50SXRlbXNJbkFuT3JkZXIiLCJvcmRlciIsIml0ZW1Db3VudCIsIml0ZW1zIiwicmVkdWNlIiwidGFsbHkiLCJjdXJyZW50SXRlbSIsInF1YW50aXR5IiwibGVuZ3RoIiwibWFwIiwiZm9ybWF0TW9uZXkiLCJ0b3RhbCIsIml0ZW0iLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxvREFBSCxtQkFBdkI7QUEyQkEsSUFBTUMsT0FBTyxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSw0RkFBYjtLQUFNRCxPOztBQU1OLFNBQVNFLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDcEIsTUFBTUMsSUFBSSxHQUFHQyx5REFBTyxFQUFwQjs7QUFDQSxNQUFJLENBQUNELElBQUwsRUFBVztBQUNULHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDREUsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0ksRUFBakI7O0FBTG9CLGtCQU1hQyx5REFBUSxDQUFDVixpQkFBRCxFQUFvQjtBQUMzRFcsYUFBUyxFQUFFO0FBQ1RDLFlBQU0sRUFBRVAsSUFBSSxDQUFDSTtBQURKO0FB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OGFjYzA4MzQzYzY3Yzg1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE9yZGVyU3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzL09yZGVyU3R5bGVzJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyJztcclxuaW1wb3J0IE9yZGVySXRlbVN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlckl0ZW1TdHlsZXMnO1xyXG5cclxuY29uc3QgVVNFUl9PUkRFUlNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgVVNFUl9PUkRFUlNfUVVFUlkoJHVzZXJJZDogSUQhKSB7XHJcbiAgICBhbGxPcmRlcnM6IGFsbE9yZGVycyh3aGVyZTogeyB1c2VyOiB7IGlkOiAkdXNlcklkIH0gfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBsYWJlbFxyXG4gICAgICB0b3RhbFxyXG4gICAgICBjaGFyZ2VcclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgaXRlbXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIHByaWNlXHJcbiAgICAgICAgcXVhbnRpdHlcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIHBob3RvIHtcclxuICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBPcmRlclVsID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiA0cmVtO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gT3JkZXJzUGFnZSgpIHtcclxuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIDxwPk5vIHVzZXI8L3A+O1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyh1c2VyLmlkKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShVU0VSX09SREVSU19RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgYWxsT3JkZXJzIH0gPSBkYXRhO1xyXG5cclxuICBmdW5jdGlvbiBjb3VudEl0ZW1zSW5Bbk9yZGVyKG9yZGVyKSB7XHJcbiAgICBjb25zdCBpdGVtQ291bnQgPSBvcmRlci5pdGVtcy5yZWR1Y2UoXHJcbiAgICAgICh0YWxseSwgY3VycmVudEl0ZW0pID0+IHRhbGx5ICsgY3VycmVudEl0ZW0ucXVhbnRpdHksXHJcbiAgICAgIDBcclxuICAgICk7XHJcbiAgICByZXR1cm4gaXRlbUNvdW50O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Zb3VyIE9yZGVycyAoe2FsbE9yZGVycy5sZW5ndGh9KTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgyPllvdSBoYXZlIHthbGxPcmRlcnMubGVuZ3RofSBvcmRlcnMhPC9oMj5cclxuICAgICAgPE9yZGVyVWw+XHJcbiAgICAgICAge2FsbE9yZGVycy5tYXAoKG9yZGVyKSA9PiAoXHJcbiAgICAgICAgICA8T3JkZXJJdGVtU3R5bGVzPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL29yZGVyLyR7b3JkZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+e2NvdW50SXRlbXNJbkFuT3JkZXIob3JkZXIpfSBJdGVtczwvcD5cclxuICAgICAgICAgICAgICAgICAge29yZGVyLml0ZW1zLmxlbmd0aCA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cD57b3JkZXIuaXRlbXMubGVuZ3RofSBQcm9kdWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntvcmRlci5pdGVtcy5sZW5ndGh9IFByb2R1Y3RzPC9wPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8cD57Zm9ybWF0TW9uZXkob3JkZXIudG90YWwpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAge29yZGVyLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L09yZGVySXRlbVN0eWxlcz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9PcmRlclVsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==