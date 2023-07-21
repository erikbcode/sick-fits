exports.id = "components_Pagination_js-components_User_js-lib_cartState_js-lib_formatMoney_js";
exports.ids = ["components_Pagination_js-components_User_js-lib_cartState_js-lib_formatMoney_js"];
exports.modules = {

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\ErrorMessage.js";



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorStyles, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        "data-testid": "graphql-error",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Shoot!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), error.message.replace('GraphQL error: ', '')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      "data-testid": "graphql-error",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Shoot!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), error.message.replace('GraphQL error: ', '')]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGINATION_QUERY": function() { return /* binding */ PAGINATION_QUERY; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\Pagination.js";








const PAGINATION_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_4___default())`
  query {
    _allProductsMeta {
      count
    }
  }
`;

function Pagination({
  page
}) {
  const {
    error,
    loading,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(PAGINATION_QUERY);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, this);
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }, this);
  }

  const {
    count
  } = data._allProductsMeta;
  const pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_8__.perPage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__.default, {
    "data-testid": "pagination",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Sick Fits - Page ", page, " of ", pageCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/products/${page - 1}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page <= 1,
        children: "\u2190 Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Page ", page, " of ", pageCount]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [count, " Items Total"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/products/${page + 1}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page >= pageCount,
        children: "Next \u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENT_USER_QUERY": function() { return /* binding */ CURRENT_USER_QUERY; },
/* harmony export */   "useUser": function() { return /* binding */ useUser; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
        # TODO: Query the cart once we have it
      }
    }
  }
`;
function useUser() {
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PaginationStyles",
  componentId: "sc-aduuar-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid var(--lightGray);border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid var(--lightGray);&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpoint": function() { return /* binding */ endpoint; },
/* harmony export */   "prodEndpoint": function() { return /* binding */ prodEndpoint; },
/* harmony export */   "perPage": function() { return /* binding */ perPage; }
/* harmony export */ });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:3000/api/graphql`;
const prodEndpoint = `fill me in when we deploy`;
const perPage = 2;

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStateProvider": function() { return /* binding */ CartStateProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\lib\\cartState.js";

const LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({
  children
}) {
  // This is our own custom provider. We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer.
  // Cart should be closed by default
  const {
    0: cartOpen,
    1: setCartOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

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
      cartOpen,
      setCartOpen,
      toggleCart,
      openCart,
      closeCart
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
} // make a custom hook for accessing the cart local state


function useCart() {
  // use a consumer here to access local state
  const all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);
  return all;
}



/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatMoney; }
/* harmony export */ });
function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // Check if clean dollar amount

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
}

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9Vc2VyLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1BhZ2luYXRpb25TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29uZmlnLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi9jYXJ0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vbGliL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9pZ25vcmVkfEM6XFxVc2Vyc1xcZW1idWlcXE9uZURyaXZlXFxEb2N1bWVudHNcXENvZGluZ1xcc2ljay1maXRzXFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkVycm9yU3R5bGVzIiwic3R5bGVkIiwiRGlzcGxheUVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwibmV0d29ya0Vycm9yIiwicmVzdWx0IiwiZXJyb3JzIiwibGVuZ3RoIiwibWFwIiwiaSIsInJlcGxhY2UiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJQQUdJTkFUSU9OX1FVRVJZIiwiZ3FsIiwiUGFnaW5hdGlvbiIsInBhZ2UiLCJsb2FkaW5nIiwiZGF0YSIsInVzZVF1ZXJ5IiwiY291bnQiLCJfYWxsUHJvZHVjdHNNZXRhIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJwZXJQYWdlIiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwidXNlVXNlciIsImF1dGhlbnRpY2F0ZWRJdGVtIiwiUGFnaW5hdGlvblN0eWxlcyIsImVuZHBvaW50IiwicHJvZEVuZHBvaW50IiwiTG9jYWxTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTG9jYWxTdGF0ZVByb3ZpZGVyIiwiUHJvdmlkZXIiLCJDYXJ0U3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydE9wZW4iLCJzZXRDYXJ0T3BlbiIsInVzZVN0YXRlIiwidG9nZ2xlQ2FydCIsImNsb3NlQ2FydCIsIm9wZW5DYXJ0IiwidXNlQ2FydCIsImFsbCIsInVzZUNvbnRleHQiLCJmb3JtYXRNb25leSIsImFtb3VudCIsIm9wdGlvbnMiLCJzdHlsZSIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsc0tBQWpCOztBQWVBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQ2xDLE1BQUksQ0FBQ0EsS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQ0MsT0FBckIsRUFBOEIsT0FBTyxJQUFQOztBQUM5QixNQUNFRCxLQUFLLENBQUNFLFlBQU4sSUFDQUYsS0FBSyxDQUFDRSxZQUFOLENBQW1CQyxNQURuQixJQUVBSCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCQyxNQUExQixDQUFpQ0MsTUFIbkMsRUFJRTtBQUNBLFdBQU9MLEtBQUssQ0FBQ0UsWUFBTixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQTFCLENBQWlDRSxHQUFqQyxDQUFxQyxDQUFDTixLQUFELEVBQVFPLENBQVIsa0JBQzFDLDhEQUFDLFdBQUQ7QUFBQSw2QkFDRTtBQUFHLHVCQUFZLGVB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QUNFLDhEQUFDLGtCQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVELGNBQUY7QUFBWUMsaUJBQVo7QUFBeUJFLGdCQUF6QjtBQUFxQ0UsY0FBckM7QUFBK0NEO0FBQS9DLEtBRFQ7QUFBQSxjQUdHTDtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9ELEMsQ0FFRDs7O0FBQ0EsU0FBU08sT0FBVCxHQUFtQjtBQUNqQjtBQUNBLFFBQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ2QsaUJBQUQsQ0FBdEI7QUFDQSxTQUFPYSxHQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNjLFNBQVNFLFdBQVQsQ0FBcUJDLE1BQU0sR0FBRyxDQUE5QixFQUFpQztBQUM5QyxRQUFNQyxPQUFPLEdBQUc7QUFDZEMsU0FBSyxFQUFFLFVBRE87QUFFZEMsWUFBUSxFQUFFLEtBRkk7QUFHZEMseUJBQXFCLEVBQUU7QUFIVCxHQUFoQixDQUQ4QyxDQU85Qzs7QUFDQSxNQUFJSixNQUFNLEdBQUcsR0FBVCxLQUFpQixDQUFyQixFQUF3QjtBQUN0QkMsV0FBTyxDQUFDRyxxQkFBUixHQUFnQyxDQUFoQztBQUNEOztBQUVELFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0JOLE9BQS9CLENBQWxCO0FBRUEsU0FBT0ksU0FBUyxDQUFDRyxNQUFWLENBQWlCUixNQUFNLEdBQUcsR0FBMUIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7QUNmRCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfUGFnaW5hdGlvbl9qcy1jb21wb25lbnRzX1VzZXJfanMtbGliX2NhcnRTdGF0ZV9qcy1saWJfZm9ybWF0TW9uZXlfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBFcnJvclN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB9XHJcbiAgc3Ryb25nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEaXNwbGF5RXJyb3IgPSAoeyBlcnJvciB9KSA9PiB7XHJcbiAgaWYgKCFlcnJvciB8fCAhZXJyb3IubWVzc2FnZSkgcmV0dXJuIG51bGw7XHJcbiAgaWYgKFxyXG4gICAgZXJyb3IubmV0d29ya0Vycm9yICYmXHJcbiAgICBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0ICYmXHJcbiAgICBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5sZW5ndGhcclxuICApIHtcclxuICAgIHJldHVybiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5tYXAoKGVycm9yLCBpKSA9PiAoXHJcbiAgICAgIDxFcnJvclN0eWxlcyBrZXk9e2l9PlxyXG4gICAgICAgIDxwIGRhdGEtdGVzdGlkPVwiZ3JhcGhxbC1lcnJvclwiPlxyXG4gICAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cclxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvRXJyb3JTdHlsZXM+XHJcbiAgICApKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxFcnJvclN0eWxlcz5cclxuICAgICAgPHAgZGF0YS10ZXN0aWQ9XCJncmFwaHFsLWVycm9yXCI+XHJcbiAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cclxuICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvRXJyb3JTdHlsZXM+XHJcbiAgKTtcclxufTtcclxuXHJcbkRpc3BsYXlFcnJvci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZXJyb3I6IHt9LFxyXG59O1xyXG5cclxuRGlzcGxheUVycm9yLnByb3BUeXBlcyA9IHtcclxuICBlcnJvcjogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlFcnJvcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgUGFnaW5hdGlvblN0eWxlcyBmcm9tICcuL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgX2FsbFByb2R1Y3RzTWV0YSB7XHJcbiAgICAgIGNvdW50XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2UgfSkge1xyXG4gIGNvbnN0IHsgZXJyb3IsIGxvYWRpbmcsIGRhdGEgfSA9IHVzZVF1ZXJ5KFBBR0lOQVRJT05fUVVFUlkpO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGNvdW50IH0gPSBkYXRhLl9hbGxQcm9kdWN0c01ldGE7XHJcbiAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGNvdW50IC8gcGVyUGFnZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdpbmF0aW9uU3R5bGVzIGRhdGEtdGVzdGlkPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICBTaWNrIEZpdHMgLSBQYWdlIHtwYWdlfSBvZiB7cGFnZUNvdW50fVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3BhZ2UgLSAxfWB9PlxyXG4gICAgICAgIDxhIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPD0gMX0+4oaQIFByZXY8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgUGFnZSB7cGFnZX0gb2Yge3BhZ2VDb3VudH1cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD57Y291bnR9IEl0ZW1zIFRvdGFsPC9wPlxyXG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cGFnZSArIDF9YH0+XHJcbiAgICAgICAgPGEgYXJpYS1kaXNhYmxlZD17cGFnZSA+PSBwYWdlQ291bnR9Pk5leHQg4oaSPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L1BhZ2luYXRpb25TdHlsZXM+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIiwiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBDVVJSRU5UX1VTRVJfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgYXV0aGVudGljYXRlZEl0ZW0ge1xyXG4gICAgICAuLi4gb24gVXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBjYXJ0IHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgcGhvdG8ge1xyXG4gICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICMgVE9ETzogUXVlcnkgdGhlIGNhcnQgb25jZSB3ZSBoYXZlIGl0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KENVUlJFTlRfVVNFUl9RVUVSWSk7XHJcbiAgcmV0dXJuIGRhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvblN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJiA+ICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgYVthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uU3R5bGVzO1xyXG4iLCIvLyBUaGlzIGlzIGNsaWVudCBzaWRlIGNvbmZpZyBvbmx5IC0gZG9uJ3QgcHV0IGFueXRoaW5nIGluIGhlcmUgdGhhdCBzaG91bGRuJ3QgYmUgcHVibGljIVxyXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsYDtcclxuZXhwb3J0IGNvbnN0IHByb2RFbmRwb2ludCA9IGBmaWxsIG1lIGluIHdoZW4gd2UgZGVwbG95YDtcclxuZXhwb3J0IGNvbnN0IHBlclBhZ2UgPSAyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCBMb2NhbFN0YXRlUHJvdmlkZXIgPSBMb2NhbFN0YXRlQ29udGV4dC5Qcm92aWRlcjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIC8vIFRoaXMgaXMgb3VyIG93biBjdXN0b20gcHJvdmlkZXIuIFdlIHdpbGwgc3RvcmUgZGF0YSAoc3RhdGUpIGFuZCBmdW5jdGlvbmFsaXR5ICh1cGRhdGVycykgaW4gaGVyZSBhbmQgYW55b25lIGNhbiBhY2Nlc3MgaXQgdmlhIHRoZSBjb25zdW1lci5cclxuXHJcbiAgLy8gQ2FydCBzaG91bGQgYmUgY2xvc2VkIGJ5IGRlZmF1bHRcclxuICBjb25zdCBbY2FydE9wZW4sIHNldENhcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlQ2FydCgpIHtcclxuICAgIHNldENhcnRPcGVuKCFjYXJ0T3Blbik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZUNhcnQoKSB7XHJcbiAgICBzZXRDYXJ0T3BlbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuQ2FydCgpIHtcclxuICAgIHNldENhcnRPcGVuKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2NhbFN0YXRlUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3sgY2FydE9wZW4sIHNldENhcnRPcGVuLCB0b2dnbGVDYXJ0LCBvcGVuQ2FydCwgY2xvc2VDYXJ0IH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIG1ha2UgYSBjdXN0b20gaG9vayBmb3IgYWNjZXNzaW5nIHRoZSBjYXJ0IGxvY2FsIHN0YXRlXHJcbmZ1bmN0aW9uIHVzZUNhcnQoKSB7XHJcbiAgLy8gdXNlIGEgY29uc3VtZXIgaGVyZSB0byBhY2Nlc3MgbG9jYWwgc3RhdGVcclxuICBjb25zdCBhbGwgPSB1c2VDb250ZXh0KExvY2FsU3RhdGVDb250ZXh0KTtcclxuICByZXR1cm4gYWxsO1xyXG59XHJcblxyXG5leHBvcnQgeyBDYXJ0U3RhdGVQcm92aWRlciwgdXNlQ2FydCB9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQgPSAwKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6ICdVU0QnLFxyXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gIH07XHJcblxyXG4gIC8vIENoZWNrIGlmIGNsZWFuIGRvbGxhciBhbW91bnRcclxuICBpZiAoYW1vdW50ICUgMTAwID09PSAwKSB7XHJcbiAgICBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywgb3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGFtb3VudCAvIDEwMCk7XHJcbn1cclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==