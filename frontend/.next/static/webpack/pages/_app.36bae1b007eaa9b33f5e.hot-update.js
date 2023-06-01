self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
/* module decorator */ module = __webpack_require__.hmd(module);

function paginationField() {
  return {
    keyArgs: false,
    // Tells apollo that we will take care of everything
    read: function read() {
      var _data$_allProductsMet2;

      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _ref = arguments.length > 1 ? arguments[1] : undefined,
          args = _ref.args,
          cache = _ref.cache;

      console.log({
        existing: existing,
        args: args,
        cache: cache
      });
      var skip = args.skip,
          first = args.first; // Read the number of items on the page from the cache

      var data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY
      });

      var _data$_allProductsMet = data === null || data === void 0 ? void 0 : (_data$_allProductsMet2 = data._allProductsMeta) === null || _data$_allProductsMet2 === void 0 ? void 0 : _data$_allProductsMet2.count,
          count = _data$_allProductsMet.count; // First, ask the read function for product items
      // We can either do one of two things:
      // First thing we can do is return the items because they are already in the cache
      // Second thing we can do is return false from here, making a network request

    },
    merge: function merge() {// This runs when the apollo client comes back from the network with our products
    }
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwiY29uc29sZSIsImxvZyIsInNraXAiLCJmaXJzdCIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIlBBR0lOQVRJT05fUVVFUlkiLCJfYWxsUHJvZHVjdHNNZXRhIiwiY291bnQiLCJtZXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQ3hDLFNBQU87QUFDTEMsV0FBTyxFQUFFLEtBREo7QUFDVztBQUNoQkMsUUFGSyxrQkFFZ0M7QUFBQTs7QUFBQSxVQUFoQ0MsUUFBZ0MsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNuQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUosZ0JBQVEsRUFBUkEsUUFBRjtBQUFZQyxZQUFJLEVBQUpBLElBQVo7QUFBa0JDLGFBQUssRUFBTEE7QUFBbEIsT0FBWjtBQURtQyxVQUUzQkcsSUFGMkIsR0FFWEosSUFGVyxDQUUzQkksSUFGMkI7QUFBQSxVQUVyQkMsS0FGcUIsR0FFWEwsSUFGVyxDQUVyQkssS0FGcUIsRUFHbkM7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHTCxLQUFLLENBQUNNLFNBQU4sQ0FBZ0I7QUFBRUMsYUFBSyxFQUFFQyxvRUFBZ0JBO0FBQXpCLE9BQWhCLENBQWI7O0FBSm1DLGtDQUtqQkgsSUFMaUIsYUFLakJBLElBTGlCLGlEQUtqQkEsSUFBSSxDQUFFSSxnQkFMVywyREFLakIsdUJBQXdCQyxLQUxQO0FBQUEsVUFLM0JBLEtBTDJCLHlCQUszQkEsS0FMMkIsRUFNbkM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0QsS0FaSTtBQWNMQyxTQWRLLG1CQWNHLENBQ047QUFDRDtBQWhCSSxHQUFQO0FBa0JEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzZiYWUxYjAwN2VhYTliMzNmNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBrZXlBcmdzOiBmYWxzZSwgLy8gVGVsbHMgYXBvbGxvIHRoYXQgd2Ugd2lsbCB0YWtlIGNhcmUgb2YgZXZlcnl0aGluZ1xyXG4gICAgcmVhZChleGlzdGluZyA9IFtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcclxuICAgICAgY29uc29sZS5sb2coeyBleGlzdGluZywgYXJncywgY2FjaGUgfSk7XHJcbiAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XHJcbiAgICAgIC8vIFJlYWQgdGhlIG51bWJlciBvZiBpdGVtcyBvbiB0aGUgcGFnZSBmcm9tIHRoZSBjYWNoZVxyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XHJcbiAgICAgIGNvbnN0IHsgY291bnQgfSA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xyXG4gICAgICAvLyBGaXJzdCwgYXNrIHRoZSByZWFkIGZ1bmN0aW9uIGZvciBwcm9kdWN0IGl0ZW1zXHJcbiAgICAgIC8vIFdlIGNhbiBlaXRoZXIgZG8gb25lIG9mIHR3byB0aGluZ3M6XHJcbiAgICAgIC8vIEZpcnN0IHRoaW5nIHdlIGNhbiBkbyBpcyByZXR1cm4gdGhlIGl0ZW1zIGJlY2F1c2UgdGhleSBhcmUgYWxyZWFkeSBpbiB0aGUgY2FjaGVcclxuICAgICAgLy8gU2Vjb25kIHRoaW5nIHdlIGNhbiBkbyBpcyByZXR1cm4gZmFsc2UgZnJvbSBoZXJlLCBtYWtpbmcgYSBuZXR3b3JrIHJlcXVlc3RcclxuICAgIH0sXHJcblxyXG4gICAgbWVyZ2UoKSB7XHJcbiAgICAgIC8vIFRoaXMgcnVucyB3aGVuIHRoZSBhcG9sbG8gY2xpZW50IGNvbWVzIGJhY2sgZnJvbSB0aGUgbmV0d29yayB3aXRoIG91ciBwcm9kdWN0c1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=