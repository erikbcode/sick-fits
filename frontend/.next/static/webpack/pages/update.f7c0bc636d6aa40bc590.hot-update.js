self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function useForm() {
  _s();

  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // create a state object for our inputs
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initial),
      inputs = _useState[0],
      setInputs = _useState[1];

  var initialValues = Object.values(initial);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // This function runs when the things we are watching change
    setInputs(initial);
  }, [initialValues]); // {
  // name: 'user'
  // description: 'nice shoes'
  // price: 1000
  // }

  function handleChange(event) {
    var _event$target = event.target,
        value = _event$target.value,
        name = _event$target.name,
        type = _event$target.type;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      // value[0] = event.target.files
      var _event$target$files = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(event.target.files, 1);

      value = _event$target$files[0];
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value)));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {
      var _ref2 = (0,C_Users_embui_OneDrive_Documents_Coding_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return [key, ''];
    }));
    setInputs(blankState);
  } // return the things we want to surface from this custom hook


  return {
    inputs: inputs,
    handleChange: handleChange,
    resetForm: resetForm,
    clearForm: clearForm
  };
}

_s(useForm, "Ojj4hh6HHOsjtwWnkUaVb5V0o3U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQStCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUM1QztBQUQ0QyxrQkFFaEJDLCtDQUFRLENBQUNELE9BQUQsQ0FGUTtBQUFBLE1BRXJDRSxNQUZxQztBQUFBLE1BRTdCQyxTQUY2Qjs7QUFHNUMsTUFBTUMsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY04sT0FBZCxDQUF0QjtBQUVBTyxrREFBUyxDQUFDLFlBQU07QUFDZDtBQUNBSixhQUFTLENBQUNILE9BQUQsQ0FBVDtBQUNELEdBSFEsRUFHTixDQUFDSSxhQUFELENBSE0sQ0FBVCxDQUw0QyxDQVU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVNJLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUEsd0JBQ0NBLEtBQUssQ0FBQ0MsTUFEUDtBQUFBLFFBQ3JCQyxLQURxQixpQkFDckJBLEtBRHFCO0FBQUEsUUFDZEMsSUFEYyxpQkFDZEEsSUFEYztBQUFBLFFBQ1JDLElBRFEsaUJBQ1JBLElBRFE7O0FBRzNCLFFBQUlBLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCRixXQUFLLEdBQUdHLFFBQVEsQ0FBQ0gsS0FBRCxDQUFoQjtBQUNEOztBQUVELFFBQUlFLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CO0FBRG1CLDJNQUVUSixLQUFLLENBQUNDLE1BQU4sQ0FBYUssS0FGSjs7QUFFbEJKLFdBRmtCO0FBR3BCOztBQUVEUixhQUFTLGlDQUVKRCxNQUZJLHVMQUlOVSxJQUpNLEVBSUNELEtBSkQsR0FBVDtBQU1EOztBQUVELFdBQVNLLFNBQVQsR0FBcUI7QUFDbkJiLGFBQVMsQ0FBQ0gsT0FBRCxDQUFUO0FBQ0Q7O0FBRUQsV0FBU2lCLFNBQVQsR0FBcUI7QUFDbkIsUUFBTUMsVUFBVSxHQUFHYixNQUFNLENBQUNjLFdBQVAsQ0FDakJkLE1BQU0sQ0FBQ2UsT0FBUCxDQUFlbEIsTUFBZixFQUF1Qm1CLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT1gsS0FBUDs7QUFBQSxhQUFrQixDQUFDVyxHQUFELEVBQU0sRUFBTixDQUFsQjtBQUFBLEtBQTNCLENBRGlCLENBQW5CO0FBR0FuQixhQUFTLENBQUNlLFVBQUQsQ0FBVDtBQUNELEdBN0MyQyxDQStDNUM7OztBQUNBLFNBQU87QUFDTGhCLFVBQU0sRUFBTkEsTUFESztBQUVMTSxnQkFBWSxFQUFaQSxZQUZLO0FBR0xRLGFBQVMsRUFBVEEsU0FISztBQUlMQyxhQUFTLEVBQVRBO0FBSkssR0FBUDtBQU1EOztHQXREdUJsQixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS5mN2MwYmM2MzZkNmFhNDBiYzU5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XHJcbiAgLy8gY3JlYXRlIGEgc3RhdGUgb2JqZWN0IGZvciBvdXIgaW5wdXRzXHJcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGluaXRpYWwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBydW5zIHdoZW4gdGhlIHRoaW5ncyB3ZSBhcmUgd2F0Y2hpbmcgY2hhbmdlXHJcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XHJcbiAgfSwgW2luaXRpYWxWYWx1ZXNdKTtcclxuXHJcbiAgLy8ge1xyXG4gIC8vIG5hbWU6ICd1c2VyJ1xyXG4gIC8vIGRlc2NyaXB0aW9uOiAnbmljZSBzaG9lcydcclxuICAvLyBwcmljZTogMTAwMFxyXG4gIC8vIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XHJcbiAgICAgIC8vIHZhbHVlWzBdID0gZXZlbnQudGFyZ2V0LmZpbGVzXHJcbiAgICAgIFt2YWx1ZV0gPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5wdXRzKHtcclxuICAgICAgLy8gY29weSB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgICAgLi4uaW5wdXRzLFxyXG4gICAgICAvLyB1c2UgbmFtZSBwcm9wZXJ0eSBvZiB0aGUgaW5wdXQgZWxlbWVudCBhbmQgc2V0IHRoZSBjb3JyZXNwb25kaW5nIHN0YXRlIHZhcmlhYmxlXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksICcnXSlcclxuICAgICk7XHJcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gdGhlIHRoaW5ncyB3ZSB3YW50IHRvIHN1cmZhY2UgZnJvbSB0aGlzIGN1c3RvbSBob29rXHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0cyxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHJlc2V0Rm9ybSxcclxuICAgIGNsZWFyRm9ybSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=