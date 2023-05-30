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

  var initialValues = Object.values(initial).join('');
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // This function runs when the things we are watching change
    setInputs(initial); // Need to check for initial values to prevent infinite loop due to useState()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIiwicGFyc2VJbnQiLCJmaWxlcyIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImJsYW5rU3RhdGUiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUErQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDNUM7QUFENEMsa0JBRWhCQywrQ0FBUSxDQUFDRCxPQUFELENBRlE7QUFBQSxNQUVyQ0UsTUFGcUM7QUFBQSxNQUU3QkMsU0FGNkI7O0FBRzVDLE1BQU1DLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNOLE9BQWQsRUFBdUJPLElBQXZCLENBQTRCLEVBQTVCLENBQXRCO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0FMLGFBQVMsQ0FBQ0gsT0FBRCxDQUFULENBRmMsQ0FHZDtBQUNELEdBSlEsRUFJTixDQUFDSSxhQUFELENBSk0sQ0FBVCxDQUw0QyxDQVc1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVNLLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUEsd0JBQ0NBLEtBQUssQ0FBQ0MsTUFEUDtBQUFBLFFBQ3JCQyxLQURxQixpQkFDckJBLEtBRHFCO0FBQUEsUUFDZEMsSUFEYyxpQkFDZEEsSUFEYztBQUFBLFFBQ1JDLElBRFEsaUJBQ1JBLElBRFE7O0FBRzNCLFFBQUlBLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCRixXQUFLLEdBQUdHLFFBQVEsQ0FBQ0gsS0FBRCxDQUFoQjtBQUNEOztBQUVELFFBQUlFLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CO0FBRG1CLDJNQUVUSixLQUFLLENBQUNDLE1BQU4sQ0FBYUssS0FGSjs7QUFFbEJKLFdBRmtCO0FBR3BCOztBQUVEVCxhQUFTLGlDQUVKRCxNQUZJLHVMQUlOVyxJQUpNLEVBSUNELEtBSkQsR0FBVDtBQU1EOztBQUVELFdBQVNLLFNBQVQsR0FBcUI7QUFDbkJkLGFBQVMsQ0FBQ0gsT0FBRCxDQUFUO0FBQ0Q7O0FBRUQsV0FBU2tCLFNBQVQsR0FBcUI7QUFDbkIsUUFBTUMsVUFBVSxHQUFHZCxNQUFNLENBQUNlLFdBQVAsQ0FDakJmLE1BQU0sQ0FBQ2dCLE9BQVAsQ0FBZW5CLE1BQWYsRUFBdUJvQixHQUF2QixDQUEyQjtBQUFBO0FBQUEsVUFBRUMsR0FBRjtBQUFBLFVBQU9YLEtBQVA7O0FBQUEsYUFBa0IsQ0FBQ1csR0FBRCxFQUFNLEVBQU4sQ0FBbEI7QUFBQSxLQUEzQixDQURpQixDQUFuQjtBQUdBcEIsYUFBUyxDQUFDZ0IsVUFBRCxDQUFUO0FBQ0QsR0E5QzJDLENBZ0Q1Qzs7O0FBQ0EsU0FBTztBQUNMakIsVUFBTSxFQUFOQSxNQURLO0FBRUxPLGdCQUFZLEVBQVpBLFlBRks7QUFHTFEsYUFBUyxFQUFUQSxTQUhLO0FBSUxDLGFBQVMsRUFBVEE7QUFKSyxHQUFQO0FBTUQ7O0dBdkR1Qm5CLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXBkYXRlLjEzNjM1MDNkNDQ0NmQ3OTM1ODlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcclxuICAvLyBjcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIG91ciBpbnB1dHNcclxuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XHJcbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoaW5pdGlhbCkuam9pbignJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJ1bnMgd2hlbiB0aGUgdGhpbmdzIHdlIGFyZSB3YXRjaGluZyBjaGFuZ2VcclxuICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICAgIC8vIE5lZWQgdG8gY2hlY2sgZm9yIGluaXRpYWwgdmFsdWVzIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCBkdWUgdG8gdXNlU3RhdGUoKVxyXG4gIH0sIFtpbml0aWFsVmFsdWVzXSk7XHJcblxyXG4gIC8vIHtcclxuICAvLyBuYW1lOiAndXNlcidcclxuICAvLyBkZXNjcmlwdGlvbjogJ25pY2Ugc2hvZXMnXHJcbiAgLy8gcHJpY2U6IDEwMDBcclxuICAvLyB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xyXG4gICAgICAvLyB2YWx1ZVswXSA9IGV2ZW50LnRhcmdldC5maWxlc1xyXG4gICAgICBbdmFsdWVdID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElucHV0cyh7XHJcbiAgICAgIC8vIGNvcHkgdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAgIC4uLmlucHV0cyxcclxuICAgICAgLy8gdXNlIG5hbWUgcHJvcGVydHkgb2YgdGhlIGlucHV0IGVsZW1lbnQgYW5kIHNldCB0aGUgY29ycmVzcG9uZGluZyBzdGF0ZSB2YXJpYWJsZVxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XHJcbiAgICBjb25zdCBibGFua1N0YXRlID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pXHJcbiAgICApO1xyXG4gICAgc2V0SW5wdXRzKGJsYW5rU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gcmV0dXJuIHRoZSB0aGluZ3Mgd2Ugd2FudCB0byBzdXJmYWNlIGZyb20gdGhpcyBjdXN0b20gaG9va1xyXG4gIHJldHVybiB7XHJcbiAgICBpbnB1dHMsXHJcbiAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICByZXNldEZvcm0sXHJcbiAgICBjbGVhckZvcm0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9