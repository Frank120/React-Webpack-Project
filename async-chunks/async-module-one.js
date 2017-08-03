webpackJsonp([0],{

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_react_logo_png__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_react_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_react_logo_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// eslint-disable-next-line

var AsyncComponent = function (_React$Component) {
  _inherits(AsyncComponent, _React$Component);

  function AsyncComponent() {
    var _ref;

    _classCallCheck(this, AsyncComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = AsyncComponent.__proto__ || Object.getPrototypeOf(AsyncComponent)).call.apply(_ref, [this].concat(args)));

    _this.state = { clicked: false };
    return _this;
  }

  _createClass(AsyncComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__style_scss___default.a['hello-world'] },
        this.state.clicked ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: function onClick() {
              _this2.setState({ clicked: false });
            }
          },
          'Clicked!!!'
        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: function onClick() {
              _this2.props.callAsyncModule();
              _this2.setState({ clicked: true });
            }
          },
          'This is a full life cycle async component!!!'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__assets_react_logo_png___default.a, alt: 'logo', className: __WEBPACK_IMPORTED_MODULE_3__style_scss___default.a['logo-img'] })
      );
    }
  }]);

  return AsyncComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

AsyncComponent.defaultProps = {
  callAsyncModule: function callAsyncModule() {
    console.log('No callback assigned!');
  }
};

AsyncComponent.propTypes = {
  callAsyncModule: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

var _default = AsyncComponent;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AsyncComponent, 'AsyncComponent', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/hello-world-async/sub-components/async-module-one/component.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/hello-world-async/sub-components/async-module-one/component.jsx');
}();

;

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hello-world":"hello-world-VTPYa"};

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/hello-world-async/sub-components/async-module-one/assets//react-logo.png";

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxsby13b3JsZC1hc3luYy9zdWItY29tcG9uZW50cy9hc3luYy1tb2R1bGUtb25lL2NvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVsbG8td29ybGQtYXN5bmMvc3ViLWNvbXBvbmVudHMvYXN5bmMtbW9kdWxlLW9uZS9zdHlsZS5zY3NzPzUwZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVsbG8td29ybGQtYXN5bmMvc3ViLWNvbXBvbmVudHMvYXN5bmMtbW9kdWxlLW9uZS9hc3NldHMvcmVhY3QtbG9nby5wbmciXSwibmFtZXMiOlsiQXN5bmNDb21wb25lbnQiLCJhcmdzIiwic3RhdGUiLCJjbGlja2VkIiwic3R5bGUiLCJzZXRTdGF0ZSIsInByb3BzIiwiY2FsbEFzeW5jTW9kdWxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0lBQ01BLGM7OztBQUNKLDRCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsS0FBTCxHQUFhLEVBQUVDLFNBQVMsS0FBWCxFQUFiO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXLG1EQUFBQyxDQUFNLGFBQU4sQ0FBaEI7QUFFSSxhQUFLRixLQUFMLENBQVdDLE9BQVgsR0FBcUI7QUFBQTtBQUFBLFlBQVEsU0FBUyxtQkFBTTtBQUMxQyxxQkFBS0UsUUFBTCxDQUFjLEVBQUVGLFNBQVMsS0FBWCxFQUFkO0FBQ0Q7QUFGb0I7QUFBQTtBQUFBLFNBQXJCLEdBS0E7QUFBQTtBQUFBLFlBQVEsU0FBUyxtQkFBTTtBQUNyQixxQkFBS0csS0FBTCxDQUFXQyxlQUFYO0FBQ0EscUJBQUtGLFFBQUwsQ0FBYyxFQUFFRixTQUFTLElBQVgsRUFBZDtBQUNEO0FBSEQ7QUFBQTtBQUFBLFNBUEo7QUFjRSw2RUFBSyxLQUFLLDhEQUFWLEVBQWdCLEtBQUksTUFBcEIsRUFBMkIsV0FBVyxtREFBQUMsQ0FBTSxVQUFOLENBQXRDO0FBZEYsT0FERjtBQWlCRDs7OztFQXhCMEIsNkNBQUFJLENBQU1DLFM7O0FBMkJuQ1QsZUFBZVUsWUFBZixHQUE4QjtBQUM1QkgsbUJBQWlCLDJCQUFNO0FBQ3JCSSxZQUFRQyxHQUFSLENBQVksdUJBQVo7QUFDRDtBQUgyQixDQUE5Qjs7QUFNQVosZUFBZWEsU0FBZixHQUEyQjtBQUN6Qk4sbUJBQWlCLGtEQUFBTyxDQUFVQztBQURGLENBQTNCOztlQUllZixjO0FBQWY7Ozs7Ozs7O2dDQXJDTUEsYzs7Ozs7Ozs7Ozs7O0FDUE47QUFDQSxrQkFBa0IsbUM7Ozs7Ozs7QUNEbEIsaUoiLCJmaWxlIjoiYXN5bmMtY2h1bmtzL2FzeW5jLW1vZHVsZS1vbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvcmVhY3QtbG9nby5wbmcnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5jbGFzcyBBc3luY0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBjbGlja2VkOiBmYWxzZSB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydoZWxsby13b3JsZCddfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmNsaWNrZWQgPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsaWNrZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgID5DbGlja2VkISEhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGxBc3luY01vZHVsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2xpY2tlZDogdHJ1ZSB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICA+VGhpcyBpcyBhIGZ1bGwgbGlmZSBjeWNsZSBhc3luY1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudCEhITwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIGNsYXNzTmFtZT17c3R5bGVbJ2xvZ28taW1nJ119IC8+XHJcbiAgICAgIDwvZGl2Pik7XHJcbiAgfVxyXG59XHJcblxyXG5Bc3luY0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2FsbEFzeW5jTW9kdWxlOiAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTm8gY2FsbGJhY2sgYXNzaWduZWQhJyk7XHJcbiAgfSxcclxufTtcclxuXHJcbkFzeW5jQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcclxuICBjYWxsQXN5bmNNb2R1bGU6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXN5bmNDb21wb25lbnQ7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9oZWxsby13b3JsZC1hc3luYy9zdWItY29tcG9uZW50cy9hc3luYy1tb2R1bGUtb25lL2NvbXBvbmVudC5qc3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJoZWxsby13b3JsZFwiOlwiaGVsbG8td29ybGQtVlRQWWFcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9oZWxsby13b3JsZC1hc3luYy9zdWItY29tcG9uZW50cy9hc3luYy1tb2R1bGUtb25lL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3NyYy9jb21wb25lbnRzL2hlbGxvLXdvcmxkLWFzeW5jL3N1Yi1jb21wb25lbnRzL2FzeW5jLW1vZHVsZS1vbmUvYXNzZXRzLy9yZWFjdC1sb2dvLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaGVsbG8td29ybGQtYXN5bmMvc3ViLWNvbXBvbmVudHMvYXN5bmMtbW9kdWxlLW9uZS9hc3NldHMvcmVhY3QtbG9nby5wbmdcbi8vIG1vZHVsZSBpZCA9IDU0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9