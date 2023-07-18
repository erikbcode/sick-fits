(function() {
var exports = {};
exports.id = "pages/orders";
exports.ids = ["pages/orders"];
exports.modules = {

/***/ "./components/styles/OrderItemStyles.js":
/*!**********************************************!*\
  !*** ./components/styles/OrderItemStyles.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const OrderItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "OrderItemStyles",
  componentId: "sc-fbwo89-0"
})(["box-shadow:var(--bs);list-style:none;padding:2rem;border:1px solid var(--offWhite);h2{border-bottom:2px solid red;margin-top:0;margin-bottom:2rem;padding-bottom:2rem;}.images{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fit,minmax(0,1fr));margin-top:1rem;img{height:200px;object-fit:cover;width:100%;}}.order-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(20px,1fr));display:grid;grid-gap:1rem;text-align:center;& > *{margin:0;background:rgba(0,0,0,0.03);padding:1rem 0;}strong{display:block;margin-bottom:1rem;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (OrderItemStyles);

/***/ }),

/***/ "./components/styles/OrderStyles.js":
/*!******************************************!*\
  !*** ./components/styles/OrderStyles.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const OrderStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "OrderStyles",
  componentId: "sc-4oqalm-0"
})(["max-width:1000px;margin:0 auto;border:1px solid var(--offWhite);box-shadow:var(--bs);padding:2rem;border-top:10px solid red;& > p{display:grid;grid-template-columns:1fr 5fr;margin:0;border-bottom:1px solid var(--offWhite);span{padding:1rem;&:first-child{font-weight:900;text-align:right;}}}.order-item{border-bottom:1px solid var(--offWhite);display:grid;grid-template-columns:300px 1fr;align-items:center;grid-gap:2rem;margin:2rem 0;padding-bottom:2rem;img{width:100%;height:100%;object-fit:cover;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (OrderStyles);

/***/ }),

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles/OrderStyles */ "./components/styles/OrderStyles.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/User */ "./components/User.js");
/* harmony import */ var _components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styles/OrderItemStyles */ "./components/styles/OrderItemStyles.js");

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\pages\\orders.js";










const USER_ORDERS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query USER_ORDERS_QUERY($userId: ID!) {
    allOrders: allOrders(where: { user: { id: $userId } }) {
      id
      label
      total
      charge
      user {
        name
        id
      }
      items {
        id
        name
        price
        quantity
        description
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
const OrderUl = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "orders__OrderUl",
  componentId: "sc-15udvsj-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:4rem;"]);

function OrdersPage() {
  const user = (0,_components_User__WEBPACK_IMPORTED_MODULE_9__.useUser)();

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
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(USER_ORDERS_QUERY, {
    variables: {
      userId: user.id
    }
  });

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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 12
    }, this);
  }

  const {
    allOrders
  } = data;

  function countItemsInAnOrder(order) {
    const itemCount = order.items.reduce((tally, currentItem) => tally + currentItem.quantity, 0);
    return itemCount;
  }

  const numOrders = allOrders.length;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Your Orders (", allOrders.length, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: ["You have ", numOrders, " ", numOrders === 1 ? 'order!' : 'orders!']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderUl, {
      children: allOrders.map(order => {
        const itemCount = countItemsInAnOrder(order);
        const productCount = order.items.length;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_10__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: `/order/${order.id}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "order-meta",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [itemCount, " ", itemCount === 1 ? 'Item' : 'Items']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [productCount, ' ', productCount === 1 ? 'Product' : 'Products']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__.default)(order.total)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "images",
                children: order.items.map(item => {
                  var _item$photo, _item$photo$image;

                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$image = _item$photo.image) === null || _item$photo$image === void 0 ? void 0 : _item$photo$image.publicUrlTransformed,
                    alt: item.name
                  }, `image-${item.id}`, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (OrdersPage);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js","components_User_js-lib_formatMoney_js"], function() { return __webpack_exec__("./pages/orders.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlckl0ZW1TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vcGFnZXMvb3JkZXJzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiT3JkZXJJdGVtU3R5bGVzIiwic3R5bGVkIiwiT3JkZXJTdHlsZXMiLCJVU0VSX09SREVSU19RVUVSWSIsImdxbCIsIk9yZGVyVWwiLCJPcmRlcnNQYWdlIiwidXNlciIsInVzZVVzZXIiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJ1c2VySWQiLCJhbGxPcmRlcnMiLCJjb3VudEl0ZW1zSW5Bbk9yZGVyIiwib3JkZXIiLCJpdGVtQ291bnQiLCJpdGVtcyIsInJlZHVjZSIsInRhbGx5IiwiY3VycmVudEl0ZW0iLCJxdWFudGl0eSIsIm51bU9yZGVycyIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3RDb3VudCIsImZvcm1hdE1vbmV5IiwidG90YWwiLCJpdGVtIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsZUFBZSxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSx5aUJBQXJCO0FBeUNBLCtEQUFlRCxlQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBRUEsTUFBTUUsV0FBVyxHQUFHRCx1RUFBSDtBQUFBO0FBQUE7QUFBQSw0ZkFBakI7QUFtQ0EsK0RBQWVDLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLGlCQUFpQixHQUFHQyxvREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXpCQTtBQTJCQSxNQUFNQyxPQUFPLEdBQUdKLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUFiOztBQU1BLFNBQVNLLFVBQVQsR0FBc0I7QUFDcEIsUUFBTUMsSUFBSSxHQUFHQyx5REFBTyxFQUFwQjs7QUFDQSxNQUFJLENBQUNELElBQUwsRUFBVztB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QUFBO0FBQUEsc0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUEyQkQsT0E5QkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQ0Q7O0FBRUQsK0RBQWVMLFVBQWYsRTs7Ozs7Ozs7Ozs7QUN4SEEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvb3JkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBPcmRlckl0ZW1TdHlsZXMgPSBzdHlsZWQubGlgXHJcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMpO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vZmZXaGl0ZSk7XHJcbiAgaDIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgfVxyXG5cclxuICAuaW1hZ2VzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAub3JkZXItbWV0YSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHB4LCAxZnIpKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICYgPiAqIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICB9XHJcbiAgICBzdHJvbmcge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckl0ZW1TdHlsZXM7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgT3JkZXJTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9mZldoaXRlKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1icyk7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHJlZDtcclxuICAmID4gcCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW9mZldoaXRlKTtcclxuICAgIHNwYW4ge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5vcmRlci1pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vZmZXaGl0ZSk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC1nYXA6IDJyZW07XHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBPcmRlclN0eWxlcztcclxuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE9yZGVyU3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzL09yZGVyU3R5bGVzJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyJztcclxuaW1wb3J0IE9yZGVySXRlbVN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlckl0ZW1TdHlsZXMnO1xyXG5cclxuY29uc3QgVVNFUl9PUkRFUlNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgVVNFUl9PUkRFUlNfUVVFUlkoJHVzZXJJZDogSUQhKSB7XHJcbiAgICBhbGxPcmRlcnM6IGFsbE9yZGVycyh3aGVyZTogeyB1c2VyOiB7IGlkOiAkdXNlcklkIH0gfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBsYWJlbFxyXG4gICAgICB0b3RhbFxyXG4gICAgICBjaGFyZ2VcclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgaXRlbXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIHByaWNlXHJcbiAgICAgICAgcXVhbnRpdHlcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIHBob3RvIHtcclxuICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBPcmRlclVsID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiA0cmVtO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gT3JkZXJzUGFnZSgpIHtcclxuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIDxwPk5vIHVzZXI8L3A+O1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyh1c2VyLmlkKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShVU0VSX09SREVSU19RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgYWxsT3JkZXJzIH0gPSBkYXRhO1xyXG5cclxuICBmdW5jdGlvbiBjb3VudEl0ZW1zSW5Bbk9yZGVyKG9yZGVyKSB7XHJcbiAgICBjb25zdCBpdGVtQ291bnQgPSBvcmRlci5pdGVtcy5yZWR1Y2UoXHJcbiAgICAgICh0YWxseSwgY3VycmVudEl0ZW0pID0+IHRhbGx5ICsgY3VycmVudEl0ZW0ucXVhbnRpdHksXHJcbiAgICAgIDBcclxuICAgICk7XHJcbiAgICByZXR1cm4gaXRlbUNvdW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbnVtT3JkZXJzID0gYWxsT3JkZXJzLmxlbmd0aDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Zb3VyIE9yZGVycyAoe2FsbE9yZGVycy5sZW5ndGh9KTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgyPlxyXG4gICAgICAgIFlvdSBoYXZlIHtudW1PcmRlcnN9IHtudW1PcmRlcnMgPT09IDEgPyAnb3JkZXIhJyA6ICdvcmRlcnMhJ31cclxuICAgICAgPC9oMj5cclxuICAgICAgPE9yZGVyVWw+XHJcbiAgICAgICAge2FsbE9yZGVycy5tYXAoKG9yZGVyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtQ291bnQgPSBjb3VudEl0ZW1zSW5Bbk9yZGVyKG9yZGVyKTtcclxuICAgICAgICAgIGNvbnN0IHByb2R1Y3RDb3VudCA9IG9yZGVyLml0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxPcmRlckl0ZW1TdHlsZXM+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9vcmRlci8ke29yZGVyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1Db3VudH0ge2l0ZW1Db3VudCA9PT0gMSA/ICdJdGVtJyA6ICdJdGVtcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RDb3VudH17JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RDb3VudCA9PT0gMSA/ICdQcm9kdWN0JyA6ICdQcm9kdWN0cyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntmb3JtYXRNb25leShvcmRlci50b3RhbCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXIuaXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGltYWdlLSR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvT3JkZXJJdGVtU3R5bGVzPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9PcmRlclVsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9