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

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {}, [initial]); // {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwidHlwZSIsInBhcnNlSW50IiwiZmlsZXMiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJibGFua1N0YXRlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsR0FBK0I7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQzVDO0FBRDRDLGtCQUVoQkMsK0NBQVEsQ0FBQ0QsT0FBRCxDQUZRO0FBQUEsTUFFckNFLE1BRnFDO0FBQUEsTUFFN0JDLFNBRjZCOztBQUk1Q0Msa0RBQVMsQ0FBQyxZQUFNLENBQUUsQ0FBVCxFQUFXLENBQUNKLE9BQUQsQ0FBWCxDQUFULENBSjRDLENBTTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBU0ssWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQSx3QkFDQ0EsS0FBSyxDQUFDQyxNQURQO0FBQUEsUUFDckJDLEtBRHFCLGlCQUNyQkEsS0FEcUI7QUFBQSxRQUNkQyxJQURjLGlCQUNkQSxJQURjO0FBQUEsUUFDUkMsSUFEUSxpQkFDUkEsSUFEUTs7QUFHM0IsUUFBSUEsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJGLFdBQUssR0FBR0csUUFBUSxDQUFDSCxLQUFELENBQWhCO0FBQ0Q7O0FBRUQsUUFBSUUsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkI7QUFEbUIsMk1BRVRKLEtBQUssQ0FBQ0MsTUFBTixDQUFhSyxLQUZKOztBQUVsQkosV0FGa0I7QUFHcEI7O0FBRURMLGFBQVMsaUNBRUpELE1BRkksdUxBSU5PLElBSk0sRUFJQ0QsS0FKRCxHQUFUO0FBTUQ7O0FBRUQsV0FBU0ssU0FBVCxHQUFxQjtBQUNuQlYsYUFBUyxDQUFDSCxPQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTYyxTQUFULEdBQXFCO0FBQ25CLFFBQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLENBQ2pCRCxNQUFNLENBQUNFLE9BQVAsQ0FBZWhCLE1BQWYsRUFBdUJpQixHQUF2QixDQUEyQjtBQUFBO0FBQUEsVUFBRUMsR0FBRjtBQUFBLFVBQU9aLEtBQVA7O0FBQUEsYUFBa0IsQ0FBQ1ksR0FBRCxFQUFNLEVBQU4sQ0FBbEI7QUFBQSxLQUEzQixDQURpQixDQUFuQjtBQUdBakIsYUFBUyxDQUFDWSxVQUFELENBQVQ7QUFDRCxHQXpDMkMsQ0EyQzVDOzs7QUFDQSxTQUFPO0FBQ0xiLFVBQU0sRUFBTkEsTUFESztBQUVMRyxnQkFBWSxFQUFaQSxZQUZLO0FBR0xRLGFBQVMsRUFBVEEsU0FISztBQUlMQyxhQUFTLEVBQVRBO0FBSkssR0FBUDtBQU1EOztHQWxEdUJmLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXBkYXRlLjE2OWI1ZmVkYWQ5Mzk5Y2FiNWY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcclxuICAvLyBjcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIG91ciBpbnB1dHNcclxuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW2luaXRpYWxdKTtcclxuXHJcbiAgLy8ge1xyXG4gIC8vIG5hbWU6ICd1c2VyJ1xyXG4gIC8vIGRlc2NyaXB0aW9uOiAnbmljZSBzaG9lcydcclxuICAvLyBwcmljZTogMTAwMFxyXG4gIC8vIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XHJcbiAgICAgIC8vIHZhbHVlWzBdID0gZXZlbnQudGFyZ2V0LmZpbGVzXHJcbiAgICAgIFt2YWx1ZV0gPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5wdXRzKHtcclxuICAgICAgLy8gY29weSB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgICAgLi4uaW5wdXRzLFxyXG4gICAgICAvLyB1c2UgbmFtZSBwcm9wZXJ0eSBvZiB0aGUgaW5wdXQgZWxlbWVudCBhbmQgc2V0IHRoZSBjb3JyZXNwb25kaW5nIHN0YXRlIHZhcmlhYmxlXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksICcnXSlcclxuICAgICk7XHJcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gdGhlIHRoaW5ncyB3ZSB3YW50IHRvIHN1cmZhY2UgZnJvbSB0aGlzIGN1c3RvbSBob29rXHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0cyxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHJlc2V0Rm9ybSxcclxuICAgIGNsZWFyRm9ybSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=