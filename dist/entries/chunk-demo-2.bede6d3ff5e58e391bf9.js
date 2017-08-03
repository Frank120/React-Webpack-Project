webpackJsonp([6],{

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_helper_modules_base__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(214);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modules_helper_modules_base__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__component__["a" /* default */]);

// Hot Module Replacement API
if (false) {
  import('./template.pug');
  module.hot.accept('./component', function () {
    render(Page);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_react_logo_png__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_react_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_react_logo_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_test_json__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_test_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_test_json__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var HelloWorld = function (_React$Component) {
  _inherits(HelloWorld, _React$Component);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    return _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).apply(this, arguments));
  }

  _createClass(HelloWorld, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // TODO Auto-drop console use on production build
      console.log('component will mount!');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('component did mount!');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('component will unmount!');
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__style_scss___default.a['hello-world'] },
        'Hello World!!! ',
        __WEBPACK_IMPORTED_MODULE_3__data_test_json___default.a.name,
        '(from the full lifecycle component)',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__assets_react_logo_png___default.a, alt: 'logo', className: __WEBPACK_IMPORTED_MODULE_1__style_scss___default.a['logo-img'] })
      );
    }
  }]);

  return HelloWorld;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = HelloWorld;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HelloWorld, 'HelloWorld', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/hello-world2/component.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/hello-world2/component.jsx');
}();

;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_hello_world_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_hello_world2_component__ = __webpack_require__(211);





var Page = function Page() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_hello_world_component__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_hello_world2_component__["a" /* default */], null)
  );
};

var _default = Page;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Page, 'Page', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/entries/chunk-demo-2/component.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/entries/chunk-demo-2/component.jsx');
}();

;

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hello-world":"hello-world-VYL0f","logo-img":"logo-img-1JVvQ"};

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/hello-world2/assets//react-logo.png";

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = {"name":"test"}

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
module.exports = __webpack_require__(205);


/***/ })

},[534]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9jaHVuay1kZW1vLTIvZW50cnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlbGxvLXdvcmxkMi9jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2NodW5rLWRlbW8tMi9jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlbGxvLXdvcmxkMi9zdHlsZS5zY3NzPzMwYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVsbG8td29ybGQyL2Fzc2V0cy9yZWFjdC1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90ZXN0Lmpzb24iXSwibmFtZXMiOlsicmVuZGVyIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiUGFnZSIsIkhlbGxvV29ybGQiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJkYXRhIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLG9HQUFBQSxDQUFPLDJEQUFQOztBQUVBO0FBQ0EsSUFBSSxLQUFKLEVBQWdCO0FBQ2QsU0FBTyxnQkFBUDtBQUNBQyxTQUFPQyxHQUFQLENBQVdDLE1BQVgsQ0FBa0IsYUFBbEIsRUFBaUMsWUFBTTtBQUNyQ0gsV0FBT0ksSUFBUDtBQUNELEdBRkQ7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7QUFDQTtBQUNBO0FBQ0E7O0lBRU1DLFU7Ozs7Ozs7Ozs7O3lDQUNpQjtBQUNuQjtBQUNBQyxjQUFRQyxHQUFSLENBQVksdUJBQVo7QUFDRDs7O3dDQUVtQjtBQUNsQkQsY0FBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckJELGNBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsbURBQUFDLENBQU0sYUFBTixDQUFoQjtBQUFBO0FBQXNEQyxRQUFBLHVEQUFBQSxDQUFLQyxJQUEzRDtBQUFBO0FBQ3FDLDZFQUFLLEtBQUssOERBQVYsRUFBZ0IsS0FBSSxNQUFwQixFQUEyQixXQUFXLG1EQUFBRixDQUFNLFVBQU4sQ0FBdEM7QUFEckMsT0FERjtBQUdEOzs7O0VBbEJzQiw2Q0FBQUcsQ0FBTUMsUzs7ZUFzQmhCUCxVOzs7QUFBZjs7Ozs7Ozs7Z0NBdEJNQSxVOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xOOztBQUVBO0FBQ0E7O0FBR0EsSUFBTUQsT0FBTyxTQUFQQSxJQUFPO0FBQUEsU0FDUjtBQUFBO0FBQUE7QUFDQyxnRUFBQyxrRkFBRCxPQUREO0FBRUMsZ0VBQUMsbUZBQUQ7QUFGRCxHQURRO0FBQUEsQ0FBYjs7ZUFNZUEsSTtBQUFmOzs7Ozs7OztnQ0FOTUEsSTs7Ozs7Ozs7Ozs7O0FDTk47QUFDQSxrQkFBa0IsK0Q7Ozs7Ozs7QUNEbEIsNEc7Ozs7Ozs7QUNBQSxrQkFBa0IsYyIsImZpbGUiOiJlbnRyaWVzL2NodW5rLWRlbW8tMi5iZWRlNmQzZmY1ZTU4ZTM5MWJmOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZW5kZXIgZnJvbSAnLi4vLi4vbW9kdWxlcy9oZWxwZXItbW9kdWxlcy9iYXNlJztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9jb21wb25lbnQnO1xyXG5cclxucmVuZGVyKFBhZ2UpO1xyXG5cclxuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBBUElcclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICBpbXBvcnQoJy4vdGVtcGxhdGUucHVnJyk7XHJcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vY29tcG9uZW50JywgKCkgPT4ge1xyXG4gICAgcmVuZGVyKFBhZ2UpO1xyXG4gIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2NodW5rLWRlbW8tMi9lbnRyeS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvcmVhY3QtbG9nby5wbmcnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9kYXRhL3Rlc3QuanNvbic7XHJcblxyXG5jbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAvLyBUT0RPIEF1dG8tZHJvcCBjb25zb2xlIHVzZSBvbiBwcm9kdWN0aW9uIGJ1aWxkXHJcbiAgICBjb25zb2xlLmxvZygnY29tcG9uZW50IHdpbGwgbW91bnQhJyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQgZGlkIG1vdW50IScpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY29tcG9uZW50IHdpbGwgdW5tb3VudCEnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnaGVsbG8td29ybGQnXX0+SGVsbG8gV29ybGQhISEge2RhdGEubmFtZX1cclxuICAgICAgICAoZnJvbSB0aGUgZnVsbCBsaWZlY3ljbGUgY29tcG9uZW50KTxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtzdHlsZVsnbG9nby1pbWcnXX0gLz48L2Rpdj4pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbGxvV29ybGQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2hlbGxvLXdvcmxkMi9jb21wb25lbnQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVsbG8td29ybGQvY29tcG9uZW50JztcclxuaW1wb3J0IEhlbGxvV29ybGQyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVsbG8td29ybGQyL2NvbXBvbmVudCc7XHJcblxyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+XHJcbiAgICAoPGRpdj5cclxuICAgICAgPEhlbGxvV29ybGQgLz5cclxuICAgICAgPEhlbGxvV29ybGQyIC8+XHJcbiAgICA8L2Rpdj4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJpZXMvY2h1bmstZGVtby0yL2NvbXBvbmVudC5qc3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJoZWxsby13b3JsZFwiOlwiaGVsbG8td29ybGQtVllMMGZcIixcImxvZ28taW1nXCI6XCJsb2dvLWltZy0xSlZ2UVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2hlbGxvLXdvcmxkMi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MDFcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcmMvY29tcG9uZW50cy9oZWxsby13b3JsZDIvYXNzZXRzLy9yZWFjdC1sb2dvLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaGVsbG8td29ybGQyL2Fzc2V0cy9yZWFjdC1sb2dvLnBuZ1xuLy8gbW9kdWxlIGlkID0gNTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIm1vZHVsZS5leHBvcnRzID0ge1wibmFtZVwiOlwidGVzdFwifVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RhdGEvdGVzdC5qc29uXG4vLyBtb2R1bGUgaWQgPSA1MzFcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sInNvdXJjZVJvb3QiOiIifQ==