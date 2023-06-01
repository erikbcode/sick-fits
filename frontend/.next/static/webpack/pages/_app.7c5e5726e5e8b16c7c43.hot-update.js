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
      var _data$_allProductsMet;

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
      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      var page = skip / first + 1;
      var pages = Math.ceil(count / first); // Check if we have existing items

      var items = existing.slice(skip, skip + first).filter(function (x) {
        return x;
      }); // Filter out undefined items

      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      } // If there are items, just return them from the cache, and we don't need to go to the network


      if (items.length) {
        console.log("There are ".concat(items.length, " items in the cache! Sending them to apollo"));
        return items;
      }

      return false; // fallback to network
      // First, ask the read function for product items
      // We can either do one of two things:
      // First thing we can do is return the items because they are already in the cache
      // Second thing we can do is return false from here, making a network request
    },
    merge: function merge(existing, incoming, _ref2) {// This runs when the apollo client comes back from the network with our products

      var args = _ref2.args;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwiY29uc29sZSIsImxvZyIsInNraXAiLCJmaXJzdCIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIlBBR0lOQVRJT05fUVVFUlkiLCJjb3VudCIsIl9hbGxQcm9kdWN0c01ldGEiLCJwYWdlIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsIml0ZW1zIiwic2xpY2UiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibWVyZ2UiLCJpbmNvbWluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQ3hDLFNBQU87QUFDTEMsV0FBTyxFQUFFLEtBREo7QUFDVztBQUNoQkMsUUFGSyxrQkFFZ0M7QUFBQTs7QUFBQSxVQUFoQ0MsUUFBZ0MsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNuQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUosZ0JBQVEsRUFBUkEsUUFBRjtBQUFZQyxZQUFJLEVBQUpBLElBQVo7QUFBa0JDLGFBQUssRUFBTEE7QUFBbEIsT0FBWjtBQURtQyxVQUUzQkcsSUFGMkIsR0FFWEosSUFGVyxDQUUzQkksSUFGMkI7QUFBQSxVQUVyQkMsS0FGcUIsR0FFWEwsSUFGVyxDQUVyQkssS0FGcUIsRUFHbkM7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHTCxLQUFLLENBQUNNLFNBQU4sQ0FBZ0I7QUFBRUMsYUFBSyxFQUFFQyxvRUFBZ0JBO0FBQXpCLE9BQWhCLENBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUdKLElBQUgsYUFBR0EsSUFBSCxnREFBR0EsSUFBSSxDQUFFSyxnQkFBVCwwREFBRyxzQkFBd0JELEtBQXRDO0FBQ0EsVUFBTUUsSUFBSSxHQUFHUixJQUFJLEdBQUdDLEtBQVAsR0FBZSxDQUE1QjtBQUNBLFVBQU1RLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVMLEtBQUssR0FBR0wsS0FBbEIsQ0FBZCxDQVBtQyxDQVNuQzs7QUFDQSxVQUFNVyxLQUFLLEdBQUdqQixRQUFRLENBQUNrQixLQUFULENBQWViLElBQWYsRUFBcUJBLElBQUksR0FBR0MsS0FBNUIsRUFBbUNhLE1BQW5DLENBQTBDLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsT0FBMUMsQ0FBZCxDQVZtQyxDQVVnQzs7QUFDbkUsVUFBSUgsS0FBSyxDQUFDSSxNQUFOLEtBQWlCZixLQUFyQixFQUE0QjtBQUMxQjtBQUNBLGVBQU8sS0FBUDtBQUNELE9BZGtDLENBZ0JuQzs7O0FBQ0EsVUFBSVcsS0FBSyxDQUFDSSxNQUFWLEVBQWtCO0FBQ2hCbEIsZUFBTyxDQUFDQyxHQUFSLHFCQUNlYSxLQUFLLENBQUNJLE1BRHJCO0FBR0EsZUFBT0osS0FBUDtBQUNEOztBQUVELGFBQU8sS0FBUCxDQXhCbUMsQ0F3QnJCO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQS9CSTtBQWlDTEssU0FqQ0ssaUJBaUNDdEIsUUFqQ0QsRUFpQ1d1QixRQWpDWCxTQWlDK0IsQ0FDbEM7O0FBRGtDLFVBQVJ0QixJQUFRLFNBQVJBLElBQVE7QUFFbkM7QUFuQ0ksR0FBUDtBQXFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdjNWU1NzI2ZTVlOGIxNmM3YzQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQQUdJTkFUSU9OX1FVRVJZIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb25GaWVsZCgpIHtcclxuICByZXR1cm4ge1xyXG4gICAga2V5QXJnczogZmFsc2UsIC8vIFRlbGxzIGFwb2xsbyB0aGF0IHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmdcclxuICAgIHJlYWQoZXhpc3RpbmcgPSBbXSwgeyBhcmdzLCBjYWNoZSB9KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHsgZXhpc3RpbmcsIGFyZ3MsIGNhY2hlIH0pO1xyXG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG4gICAgICAvLyBSZWFkIHRoZSBudW1iZXIgb2YgaXRlbXMgb24gdGhlIHBhZ2UgZnJvbSB0aGUgY2FjaGVcclxuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBQQUdJTkFUSU9OX1FVRVJZIH0pO1xyXG4gICAgICBjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xyXG4gICAgICBjb25zdCBwYWdlID0gc2tpcCAvIGZpcnN0ICsgMTtcclxuICAgICAgY29uc3QgcGFnZXMgPSBNYXRoLmNlaWwoY291bnQgLyBmaXJzdCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGV4aXN0aW5nIGl0ZW1zXHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gZXhpc3Rpbmcuc2xpY2Uoc2tpcCwgc2tpcCArIGZpcnN0KS5maWx0ZXIoKHgpID0+IHgpOyAvLyBGaWx0ZXIgb3V0IHVuZGVmaW5lZCBpdGVtc1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoICE9PSBmaXJzdCkge1xyXG4gICAgICAgIC8vIFdlIGRvbid0IGhhdmUgYW55IGl0ZW1zLCB3ZSBtdXN0IGdvIHRvIHRoZSBuZXR3b3JrIHRvIGZldGNoIHRoZW1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBpdGVtcywganVzdCByZXR1cm4gdGhlbSBmcm9tIHRoZSBjYWNoZSwgYW5kIHdlIGRvbid0IG5lZWQgdG8gZ28gdG8gdGhlIG5ldHdvcmtcclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgYFRoZXJlIGFyZSAke2l0ZW1zLmxlbmd0aH0gaXRlbXMgaW4gdGhlIGNhY2hlISBTZW5kaW5nIHRoZW0gdG8gYXBvbGxvYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7IC8vIGZhbGxiYWNrIHRvIG5ldHdvcmtcclxuICAgICAgLy8gRmlyc3QsIGFzayB0aGUgcmVhZCBmdW5jdGlvbiBmb3IgcHJvZHVjdCBpdGVtc1xyXG4gICAgICAvLyBXZSBjYW4gZWl0aGVyIGRvIG9uZSBvZiB0d28gdGhpbmdzOlxyXG4gICAgICAvLyBGaXJzdCB0aGluZyB3ZSBjYW4gZG8gaXMgcmV0dXJuIHRoZSBpdGVtcyBiZWNhdXNlIHRoZXkgYXJlIGFscmVhZHkgaW4gdGhlIGNhY2hlXHJcbiAgICAgIC8vIFNlY29uZCB0aGluZyB3ZSBjYW4gZG8gaXMgcmV0dXJuIGZhbHNlIGZyb20gaGVyZSwgbWFraW5nIGEgbmV0d29yayByZXF1ZXN0XHJcbiAgICB9LFxyXG5cclxuICAgIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywgeyBhcmdzIH0pIHtcclxuICAgICAgLy8gVGhpcyBydW5zIHdoZW4gdGhlIGFwb2xsbyBjbGllbnQgY29tZXMgYmFjayBmcm9tIHRoZSBuZXR3b3JrIHdpdGggb3VyIHByb2R1Y3RzXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==