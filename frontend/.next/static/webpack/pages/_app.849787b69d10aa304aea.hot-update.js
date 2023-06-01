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
      // If there are items and there aren't enough items to fill the page and we are on the last page, then send it

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

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
    merge: function merge(existing, incoming, _ref2) {
      var args = _ref2.args;
      var skip = args.skip,
          first = args.first; // This runs when the apollo client comes back from the network with our products

      console.log("Merging items from the network ".concat(incoming.length));
      var merged = existing ? existing.slice(0) : [];

      for (var i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      console.log(merged); // Finally we return the merged items from the cache,

      return merged;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwiY29uc29sZSIsImxvZyIsInNraXAiLCJmaXJzdCIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIlBBR0lOQVRJT05fUVVFUlkiLCJjb3VudCIsIl9hbGxQcm9kdWN0c01ldGEiLCJwYWdlIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsIml0ZW1zIiwic2xpY2UiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsZUFBVCxHQUEyQjtBQUN4QyxTQUFPO0FBQ0xDLFdBQU8sRUFBRSxLQURKO0FBQ1c7QUFDaEJDLFFBRkssa0JBRWdDO0FBQUE7O0FBQUEsVUFBaENDLFFBQWdDLHVFQUFyQixFQUFxQjs7QUFBQTtBQUFBLFVBQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLFVBQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDbkNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVKLGdCQUFRLEVBQVJBLFFBQUY7QUFBWUMsWUFBSSxFQUFKQSxJQUFaO0FBQWtCQyxhQUFLLEVBQUxBO0FBQWxCLE9BQVo7QUFEbUMsVUFFM0JHLElBRjJCLEdBRVhKLElBRlcsQ0FFM0JJLElBRjJCO0FBQUEsVUFFckJDLEtBRnFCLEdBRVhMLElBRlcsQ0FFckJLLEtBRnFCLEVBR25DOztBQUNBLFVBQU1DLElBQUksR0FBR0wsS0FBSyxDQUFDTSxTQUFOLENBQWdCO0FBQUVDLGFBQUssRUFBRUMsb0VBQWdCQTtBQUF6QixPQUFoQixDQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHSixJQUFILGFBQUdBLElBQUgsZ0RBQUdBLElBQUksQ0FBRUssZ0JBQVQsMERBQUcsc0JBQXdCRCxLQUF0QztBQUNBLFVBQU1FLElBQUksR0FBR1IsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxVQUFNUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxLQUFLLEdBQUdMLEtBQWxCLENBQWQsQ0FQbUMsQ0FTbkM7O0FBQ0EsVUFBTVcsS0FBSyxHQUFHakIsUUFBUSxDQUFDa0IsS0FBVCxDQUFlYixJQUFmLEVBQXFCQSxJQUFJLEdBQUdDLEtBQTVCLEVBQW1DYSxNQUFuQyxDQUEwQyxVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBUDtBQUFBLE9BQTFDLENBQWQsQ0FWbUMsQ0FVZ0M7QUFFbkU7O0FBQ0EsVUFBSUgsS0FBSyxDQUFDSSxNQUFOLElBQWdCSixLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQWpDLElBQTBDTyxJQUFJLEtBQUtDLEtBQXZELEVBQThEO0FBQzVELGVBQU9HLEtBQVA7QUFDRDs7QUFFRCxVQUFJQSxLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQXJCLEVBQTRCO0FBQzFCO0FBQ0EsZUFBTyxLQUFQO0FBQ0QsT0FwQmtDLENBc0JuQzs7O0FBQ0EsVUFBSVcsS0FBSyxDQUFDSSxNQUFWLEVBQWtCO0FBQ2hCbEIsZUFBTyxDQUFDQyxHQUFSLHFCQUNlYSxLQUFLLENBQUNJLE1BRHJCO0FBR0EsZUFBT0osS0FBUDtBQUNEOztBQUVELGFBQU8sS0FBUCxDQTlCbUMsQ0E4QnJCO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQXJDSTtBQXVDTEssU0F2Q0ssaUJBdUNDdEIsUUF2Q0QsRUF1Q1d1QixRQXZDWCxTQXVDK0I7QUFBQSxVQUFSdEIsSUFBUSxTQUFSQSxJQUFRO0FBQUEsVUFDMUJJLElBRDBCLEdBQ1ZKLElBRFUsQ0FDMUJJLElBRDBCO0FBQUEsVUFDcEJDLEtBRG9CLEdBQ1ZMLElBRFUsQ0FDcEJLLEtBRG9CLEVBRWxDOztBQUNBSCxhQUFPLENBQUNDLEdBQVIsMENBQThDbUIsUUFBUSxDQUFDRixNQUF2RDtBQUNBLFVBQU1HLE1BQU0sR0FBR3hCLFFBQVEsR0FBR0EsUUFBUSxDQUFDa0IsS0FBVCxDQUFlLENBQWYsQ0FBSCxHQUF1QixFQUE5Qzs7QUFDQSxXQUFLLElBQUlPLENBQUMsR0FBR3BCLElBQWIsRUFBbUJvQixDQUFDLEdBQUdwQixJQUFJLEdBQUdrQixRQUFRLENBQUNGLE1BQXZDLEVBQStDLEVBQUVJLENBQWpELEVBQW9EO0FBQ2xERCxjQUFNLENBQUNDLENBQUQsQ0FBTixHQUFZRixRQUFRLENBQUNFLENBQUMsR0FBR3BCLElBQUwsQ0FBcEI7QUFDRDs7QUFDREYsYUFBTyxDQUFDQyxHQUFSLENBQVlvQixNQUFaLEVBUmtDLENBU2xDOztBQUNBLGFBQU9BLE1BQVA7QUFDRDtBQWxESSxHQUFQO0FBb0REIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODQ5Nzg3YjY5ZDEwYWEzMDRhZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBrZXlBcmdzOiBmYWxzZSwgLy8gVGVsbHMgYXBvbGxvIHRoYXQgd2Ugd2lsbCB0YWtlIGNhcmUgb2YgZXZlcnl0aGluZ1xyXG4gICAgcmVhZChleGlzdGluZyA9IFtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcclxuICAgICAgY29uc29sZS5sb2coeyBleGlzdGluZywgYXJncywgY2FjaGUgfSk7XHJcbiAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XHJcbiAgICAgIC8vIFJlYWQgdGhlIG51bWJlciBvZiBpdGVtcyBvbiB0aGUgcGFnZSBmcm9tIHRoZSBjYWNoZVxyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uX2FsbFByb2R1Y3RzTWV0YT8uY291bnQ7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBza2lwIC8gZmlyc3QgKyAxO1xyXG4gICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgZXhpc3RpbmcgaXRlbXNcclxuICAgICAgY29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoeCkgPT4geCk7IC8vIEZpbHRlciBvdXQgdW5kZWZpbmVkIGl0ZW1zXHJcblxyXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgaXRlbXMgYW5kIHRoZXJlIGFyZW4ndCBlbm91Z2ggaXRlbXMgdG8gZmlsbCB0aGUgcGFnZSBhbmQgd2UgYXJlIG9uIHRoZSBsYXN0IHBhZ2UsIHRoZW4gc2VuZCBpdFxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QgJiYgcGFnZSA9PT0gcGFnZXMpIHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggIT09IGZpcnN0KSB7XHJcbiAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSBhbnkgaXRlbXMsIHdlIG11c3QgZ28gdG8gdGhlIG5ldHdvcmsgdG8gZmV0Y2ggdGhlbVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGl0ZW1zLCBqdXN0IHJldHVybiB0aGVtIGZyb20gdGhlIGNhY2hlLCBhbmQgd2UgZG9uJ3QgbmVlZCB0byBnbyB0byB0aGUgbmV0d29ya1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBgVGhlcmUgYXJlICR7aXRlbXMubGVuZ3RofSBpdGVtcyBpbiB0aGUgY2FjaGUhIFNlbmRpbmcgdGhlbSB0byBhcG9sbG9gXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gZmFsbGJhY2sgdG8gbmV0d29ya1xyXG4gICAgICAvLyBGaXJzdCwgYXNrIHRoZSByZWFkIGZ1bmN0aW9uIGZvciBwcm9kdWN0IGl0ZW1zXHJcbiAgICAgIC8vIFdlIGNhbiBlaXRoZXIgZG8gb25lIG9mIHR3byB0aGluZ3M6XHJcbiAgICAgIC8vIEZpcnN0IHRoaW5nIHdlIGNhbiBkbyBpcyByZXR1cm4gdGhlIGl0ZW1zIGJlY2F1c2UgdGhleSBhcmUgYWxyZWFkeSBpbiB0aGUgY2FjaGVcclxuICAgICAgLy8gU2Vjb25kIHRoaW5nIHdlIGNhbiBkbyBpcyByZXR1cm4gZmFsc2UgZnJvbSBoZXJlLCBtYWtpbmcgYSBuZXR3b3JrIHJlcXVlc3RcclxuICAgIH0sXHJcblxyXG4gICAgbWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLCB7IGFyZ3MgfSkge1xyXG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG4gICAgICAvLyBUaGlzIHJ1bnMgd2hlbiB0aGUgYXBvbGxvIGNsaWVudCBjb21lcyBiYWNrIGZyb20gdGhlIG5ldHdvcmsgd2l0aCBvdXIgcHJvZHVjdHNcclxuICAgICAgY29uc29sZS5sb2coYE1lcmdpbmcgaXRlbXMgZnJvbSB0aGUgbmV0d29yayAke2luY29taW5nLmxlbmd0aH1gKTtcclxuICAgICAgY29uc3QgbWVyZ2VkID0gZXhpc3RpbmcgPyBleGlzdGluZy5zbGljZSgwKSA6IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gc2tpcDsgaSA8IHNraXAgKyBpbmNvbWluZy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIG1lcmdlZFtpXSA9IGluY29taW5nW2kgLSBza2lwXTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhtZXJnZWQpO1xyXG4gICAgICAvLyBGaW5hbGx5IHdlIHJldHVybiB0aGUgbWVyZ2VkIGl0ZW1zIGZyb20gdGhlIGNhY2hlLFxyXG4gICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=