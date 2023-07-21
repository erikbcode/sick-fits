exports.id = "components_Products_js";
exports.ids = ["components_Products_js"];
exports.modules = {

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\AddToCart.js";





const ADD_TO_CART_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

function AddToCart({
  id
}) {
  const {
    openCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_5__.useCart)();
  const [addToCart, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(ADD_TO_CART_MUTATION, {
    variables: {
      id
    },
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_4__.CURRENT_USER_QUERY
    }]
  });

  const handleAdd = () => {
    addToCart();
    openCart();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    disabled: loading,
    onClick: handleAdd,
    children: ["Add", loading && 'ing', " To Cart \uD83D\uDED2"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

/***/ }),

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\DeleteProduct.js";



const DELETE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log('Running update function after deleting...');
  cache.evict(cache.identify(payload.data.deleteProduct));
}

function DeleteProduct({
  id,
  children
}) {
  const [deleteProduct, {
    data,
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_PRODUCT_MUTATION, {
    variables: {
      id
    },
    update
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    disabled: loading,
    onClick: () => {
      if (confirm('Are you sure you want to delete the product?')) {
        // Delete
        console.log('deleting...');
        deleteProduct().catch(err => alert(err.message));
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DeleteProduct);

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeleteProduct */ "./components/DeleteProduct.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\Product.js";








function Product({
  product
}) {
  var _product$photo;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : _product$photo.image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_dist_client_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: `/product/${product.id}`,
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)(product.price)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "buttonList",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_dist_client_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: {
          pathname: '/update',
          query: {
            id: product.id
          }
        },
        children: "Edit \u270F\uFE0F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddToCart__WEBPACK_IMPORTED_MODULE_8__.default, {
        id: product.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteProduct__WEBPACK_IMPORTED_MODULE_7__.default, {
        id: product.id,
        children: "Delete \u274C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
Product.propTypes = {
  product: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

/***/ }),

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_PRODUCTS_QUERY": function() { return /* binding */ ALL_PRODUCTS_QUERY; },
/* harmony export */   "default": function() { return /* binding */ Products; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ "./components/Product.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "C:\\Users\\embui\\OneDrive\\Documents\\Coding\\sick-fits\\frontend\\components\\Products.js";





const ALL_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
const ProductsGrid = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Products__ProductsGrid",
  componentId: "sc-1uv5x8m-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;"]);
function Products({
  page
}) {
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * _config__WEBPACK_IMPORTED_MODULE_5__.perPage - _config__WEBPACK_IMPORTED_MODULE_5__.perPage,
      first: _config__WEBPACK_IMPORTED_MODULE_5__.perPage
    }
  });

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 12
    }, this);
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsGrid, {
      children: data.allProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__.default, {
        product: product
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ItemStyles",
  componentId: "sc-16pk14u-0"
})(["background:white;border:1px solid var(--offWhite);box-shadow:var(--bs);position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid var(--lightGray);grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:var(--lightGray);& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (ItemStyles);

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "PriceTag",
  componentId: "sc-nwbk6t-0"
})(["background:var(--red);transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"]);
/* harmony default export */ __webpack_exports__["default"] = (PriceTag);

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:var(--red);display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0FkZFRvQ2FydC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0RlbGV0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvSXRlbVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QcmljZVRhZy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9UaXRsZS5qcyJdLCJuYW1lcyI6WyJBRERfVE9fQ0FSVF9NVVRBVElPTiIsImdxbCIsIkFkZFRvQ2FydCIsImlkIiwib3BlbkNhcnQiLCJ1c2VDYXJ0IiwiYWRkVG9DYXJ0IiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsImhhbmRsZUFkZCIsIkRFTEVURV9QUk9EVUNUX01VVEFUSU9OIiwidXBkYXRlIiwiY2FjaGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImV2aWN0IiwiaWRlbnRpZnkiLCJkYXRhIiwiZGVsZXRlUHJvZHVjdCIsIkRlbGV0ZVByb2R1Y3QiLCJjaGlsZHJlbiIsImVycm9yIiwiY29uZmlybSIsImNhdGNoIiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwicGF0aG5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJBTExfUFJPRFVDVFNfUVVFUlkiLCJQcm9kdWN0c0dyaWQiLCJzdHlsZWQiLCJQcm9kdWN0cyIsInBhZ2UiLCJ1c2VRdWVyeSIsInNraXAiLCJwZXJQYWdlIiwiZmlyc3QiLCJhbGxQcm9kdWN0cyIsIm1hcCIsIkl0ZW1TdHlsZXMiLCJQcmljZVRhZyIsIlRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsb0JBQW9CLEdBQUdDLG9EQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BOztBQVFBLFNBQVNDLFNBQVQsQ0FBbUI7QUFBRUM7QUFBRixDQUFuQixFQUEyQjtBQUN6QixRQUFNO0FBQUVDO0FBQUYsTUFBZUMsdURBQU8sRUFBNUI7QUFFQSxRQUFNLENBQUNDLFNBQUQsRUFBWTtBQUFFQztBQUFGLEdBQVosSUFBMkJDLDJEQUFXLENBQUNSLG9CQUFELEVBQXVCO0FBQ2pFUyxhQUFTLEVBQUU7QUFBRU47QUFBRixLQURzRDtBQUVqRU8sa0JBQWMsRUFBRSxDQUFDO0FBQUVDLFdBQUssRUFBRUMscURBQWtCQTtBQUEzQixLQUFEO0FBRmlELEdBQXZCLENBQTVDOztBQUtBLFFBQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3RCUCxhQUFTO0FBQ1RGLFlBQVE7QUFDVCxHQUhEOztBQUtBLHNCQUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsWUFBUSxFQUFFRyxPQUFoQztBQUF5QyxXQUFPLEVBQUVNLFNBQWxEO0FBQUEsc0JBQ01OLE9BQU8sSUFBSSxLQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELCtEQUFlTCxTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTVksdUJBQXVCLEdBQUdiLG9EQUFJO0FBQ3BD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QUFFQSxNQUFNcUQsVUFBVSxHQUFHVCx1RUFBSDtBQUFBO0FBQUE7QUFBQSx5ZUFBaEI7QUFtQ0EsK0RBQWVTLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFFQSxNQUFNQyxRQUFRLEdBQUdWLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHFMQUFkO0FBY0EsK0RBQWVVLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQSxNQUFNQyxLQUFLLEdBQUdYLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHVQQUFYO0FBaUJBLCtEQUFlVyxLQUFmLEUiLCJmaWxlIjoiY29tcG9uZW50c19Qcm9kdWN0c19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5cclxuY29uc3QgQUREX1RPX0NBUlRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gQUREX1RPX0NBUlRfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIGFkZFRvQ2FydChwcm9kdWN0SWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIEFkZFRvQ2FydCh7IGlkIH0pIHtcclxuICBjb25zdCB7IG9wZW5DYXJ0IH0gPSB1c2VDYXJ0KCk7XHJcblxyXG4gIGNvbnN0IFthZGRUb0NhcnQsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKEFERF9UT19DQVJUX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGQgPSAoKSA9PiB7XHJcbiAgICBhZGRUb0NhcnQoKTtcclxuICAgIG9wZW5DYXJ0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXtsb2FkaW5nfSBvbkNsaWNrPXtoYW5kbGVBZGR9PlxyXG4gICAgICBBZGR7bG9hZGluZyAmJiAnaW5nJ30gVG8gQ2FydCDwn5uSXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRUb0NhcnQ7XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERFTEVURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIERFTEVURV9QUk9EVUNUX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICBkZWxldGVQcm9kdWN0KGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSwgcGF5bG9hZCkge1xyXG4gIGNvbnNvbGUubG9nKCdSdW5uaW5nIHVwZGF0ZSBmdW5jdGlvbiBhZnRlciBkZWxldGluZy4uLicpO1xyXG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVQcm9kdWN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlbGV0ZVByb2R1Y3QoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtkZWxldGVQcm9kdWN0LCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBERUxFVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvZHVjdD8nKSkge1xyXG4gICAgICAgICAgLy8gRGVsZXRlXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRpbmcuLi4nKTtcclxuICAgICAgICAgIGRlbGV0ZVByb2R1Y3QoKS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlUHJvZHVjdDtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9saW5rJztcclxuaW1wb3J0IEl0ZW1TdHlsZXMgZnJvbSAnLi9zdHlsZXMvSXRlbVN0eWxlcyc7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuL3N0eWxlcy9UaXRsZSc7XHJcbmltcG9ydCBQcmljZVRhZyBmcm9tICcuL3N0eWxlcy9QcmljZVRhZyc7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xyXG5pbXBvcnQgRGVsZXRlUHJvZHVjdCBmcm9tICcuL0RlbGV0ZVByb2R1Y3QnO1xyXG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gJy4vQWRkVG9DYXJ0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEl0ZW1TdHlsZXM+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPFRpdGxlPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QubmFtZX08L0xpbms+XHJcbiAgICAgIDwvVGl0bGU+XHJcbiAgICAgIDxQcmljZVRhZz57Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSl9PC9QcmljZVRhZz5cclxuICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICB7LyogVE9ETzogQWRkIGJ1dHRvbnMgdG8gZWRpdCBhbmQgZGVsZXRlIGl0ZW0gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3VwZGF0ZScsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVkaXQg4pyP77iPXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxBZGRUb0NhcnQgaWQ9e3Byb2R1Y3QuaWR9IC8+XHJcbiAgICAgICAgPERlbGV0ZVByb2R1Y3QgaWQ9e3Byb2R1Y3QuaWR9PkRlbGV0ZSDinYw8L0RlbGV0ZVByb2R1Y3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9JdGVtU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuXHJcblByb2R1Y3QucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3Q6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XHJcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBBTExfUFJPRFVDVFNfUVVFUlkoJHNraXA6IEludCA9IDAsICRmaXJzdDogSW50KSB7XHJcbiAgICBhbGxQcm9kdWN0cyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdHNHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWdhcDogNjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKHsgcGFnZSB9KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxyXG4gICAgICBmaXJzdDogcGVyUGFnZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxwPntlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UHJvZHVjdHNHcmlkPlxyXG4gICAgICAgIHtkYXRhLmFsbFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Byb2R1Y3RzR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBJdGVtU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vZmZXaGl0ZSk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHBhZGRpbmc6IDAgM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICAuYnV0dG9uTGlzdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDFweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0R3JheSk7XHJcbiAgICAmID4gKiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtU3R5bGVzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFByaWNlVGFnID0gc3R5bGVkLnNwYW5gXHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIHJpZ2h0OiAtM3B4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VUYWc7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgbWFyZ2luOiAwIDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogc2tldygtNWRlZykgcm90YXRlKC0xZGVnKTtcclxuICBtYXJnaW4tdG9wOiAtM3JlbTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBhIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9