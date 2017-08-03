webpackJsonp([8],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_helper_modules_base__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(212);



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

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_helper_modules_async_component_factory__ = __webpack_require__(216);





var callAsyncModule = function callAsyncModule() {
  // Async module importing
  __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 540)).then(function (asyncModule) {
    asyncModule.default.loaded();
  }).catch(function (err) {
    console.log('Failed to load the async module!', err);
  });
};

var HelloWorld = function HelloWorld(_ref) {
  var ModuleOne = _ref.ModuleOne,
      ModuleTwo = _ref.ModuleTwo;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModuleOne, { callAsyncModule: callAsyncModule }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModuleTwo, null)
  );
};

HelloWorld.propTypes = {
  ModuleOne: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  ModuleTwo: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

var HelloWorldAsync = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__modules_helper_modules_async_component_factory__["a" /* default */])(HelloWorld, {
  ModuleOne: function ModuleOne() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__modules_helper_modules_async_component_factory__["b" /* importLazy */])(__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 538)));
  },
  ModuleTwo: function ModuleTwo() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__modules_helper_modules_async_component_factory__["b" /* importLazy */])(__webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 539)));
  }
});

var _default = HelloWorldAsync;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(callAsyncModule, 'callAsyncModule', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/hello-world-async/component.jsx');

  __REACT_HOT_LOADER__.register(HelloWorld, 'HelloWorld', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/hello-world-async/component.jsx');

  __REACT_HOT_LOADER__.register(HelloWorldAsync, 'HelloWorldAsync', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/hello-world-async/component.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/hello-world-async/component.jsx');
}();

;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_hello_world_async_component__ = __webpack_require__(209);




var Page = function Page() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_hello_world_async_component__["a" /* default */], null)
  );
};

var _default = Page;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Page, 'Page', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/entries/async-module-demo/component.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/entries/async-module-demo/component.jsx');
}();

;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return importLazy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 The high order component to create component with asynchronously loaded sub modules
 https://webpack.js.org/guides/lazy-load-react/
 */




var AsyncLoad = function (_React$Component) {
  _inherits(AsyncLoad, _React$Component);

  function AsyncLoad() {
    var _ref;

    _classCallCheck(this, AsyncLoad);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = AsyncLoad.__proto__ || Object.getPrototypeOf(AsyncLoad)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      isLoaded: false
    };

    _this.loadPromise = new Promise(function (resolve, reject) {
      _this.loadResolve = resolve;
      _this.loadReject = reject;
    });
    return _this;
  }

  _createClass(AsyncLoad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
      this.load();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(previous) {
      var _this2 = this;

      var shouldLoad = !!Object.keys(this.props.modules).filter(function (key) {
        return _this2.props.modules[key] !== previous.modules[key];
      }).length;
      if (shouldLoad) {
        this.load();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'load',
    value: function load() {
      var _this3 = this;

      this.setState({
        isLoaded: false
      });

      var modules = this.props.modules;

      var keys = Object.keys(modules);

      Promise.all(keys.map(function (key) {
        return modules[key]();
      })).then(function (values) {
        return keys.reduce(function (agg, key, index) {
          return Object.assign({}, agg, _defineProperty({}, key, values[index]));
        }, {});
      }).then(function (result) {
        _this3.loadResolve(result);
        return _this3._isMounted && _this3.setState({ modules: result, isLoaded: true });
      }).catch(function (err) {
        _this3.loadReject(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.isLoaded) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'Loading..'
      );
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children(this.state.modules));
    }
  }]);

  return AsyncLoad;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

AsyncLoad.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  modules: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var AsyncFactory = function AsyncFactory(Component, modules) {
  if (!modules) {
    return Component;
  }

  // eslint-disable-next-line

  var AsyncWrapper = function (_React$Component2) {
    _inherits(AsyncWrapper, _React$Component2);

    function AsyncWrapper() {
      _classCallCheck(this, AsyncWrapper);

      return _possibleConstructorReturn(this, (AsyncWrapper.__proto__ || Object.getPrototypeOf(AsyncWrapper)).apply(this, arguments));
    }

    _createClass(AsyncWrapper, [{
      key: 'render',
      value: function render() {
        var _this5 = this;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          AsyncLoad,
          { ref: function ref(component) {
              _this5.AsyncLoad = component;
            }, modules: modules },
          function (mods) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, mods, _this5.props));
          }
        );
      }
    }]);

    return AsyncWrapper;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  return AsyncWrapper;
};

var importLazy = function importLazy(promise) {
  return promise.then(function (result) {
    return result.default;
  });
};

var _default = AsyncFactory;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AsyncLoad, 'AsyncLoad', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/modules/helper-modules/async-component-factory.jsx');

  __REACT_HOT_LOADER__.register(AsyncFactory, 'AsyncFactory', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/modules/helper-modules/async-component-factory.jsx');

  __REACT_HOT_LOADER__.register(importLazy, 'importLazy', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/modules/helper-modules/async-component-factory.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/modules/helper-modules/async-component-factory.jsx');
}();

;

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
module.exports = __webpack_require__(203);


/***/ })

},[532]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9hc3luYy1tb2R1bGUtZGVtby9lbnRyeS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVsbG8td29ybGQtYXN5bmMvY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9hc3luYy1tb2R1bGUtZGVtby9jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hlbHBlci1tb2R1bGVzL2FzeW5jLWNvbXBvbmVudC1mYWN0b3J5LmpzeCJdLCJuYW1lcyI6WyJyZW5kZXIiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJQYWdlIiwiY2FsbEFzeW5jTW9kdWxlIiwidGhlbiIsImFzeW5jTW9kdWxlIiwiZGVmYXVsdCIsImxvYWRlZCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIkhlbGxvV29ybGQiLCJNb2R1bGVPbmUiLCJNb2R1bGVUd28iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIkhlbGxvV29ybGRBc3luYyIsIkFzeW5jRmFjdG9yeSIsImltcG9ydExhenkiLCJBc3luY0xvYWQiLCJhcmdzIiwic3RhdGUiLCJpc0xvYWRlZCIsImxvYWRQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkUmVzb2x2ZSIsImxvYWRSZWplY3QiLCJfaXNNb3VudGVkIiwibG9hZCIsInByZXZpb3VzIiwic2hvdWxkTG9hZCIsIk9iamVjdCIsImtleXMiLCJwcm9wcyIsIm1vZHVsZXMiLCJmaWx0ZXIiLCJrZXkiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImFsbCIsIm1hcCIsInJlZHVjZSIsImFnZyIsImluZGV4IiwiYXNzaWduIiwidmFsdWVzIiwicmVzdWx0IiwiUmVhY3QiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIm9iamVjdCIsIkFzeW5jV3JhcHBlciIsImNvbXBvbmVu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OztFQXREcUIsNkNBQUFhLENBQU1JLFM7O0FBeUQ5QmxDLFVBQVVQLFNBQVYsR0FBc0I7QUFDcEJ3QyxZQUFVLGtEQUFBdkMsQ0FBVUMsSUFBVixDQUFlQyxVQURMO0FBRXBCcUIsV0FBUyxrREFBQXZCLENBQVV5QyxNQUFWLENBQWlCdkM7QUFGTixDQUF0Qjs7QUFLQSxJQUFNRSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ29DLFNBQUQsRUFBWWpCLE9BQVosRUFBd0I7QUFDM0MsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixXQUFPaUIsU0FBUDtBQUNEOztBQUVEOztBQUwyQyxNQU1yQ0UsWUFOcUM7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQU9oQztBQUFBOztBQUNQLGVBQVE7QUFBQyxtQkFBRDtBQUFBLFlBQVcsS0FBSyxhQUFDQyxTQUFELEVBQWU7QUFBRSxxQkFBS3JDLFNBQUwsR0FBaUJxQyxTQUFqQjtBQUE2QixhQUE5RCxFQUFnRSxTQUFTcEIsT0FBekU7QUFDTDtBQUFBLG1CQUFRLDREQUFDLFNBQUQsZUFBZXFCLElBQWYsRUFBeUIsT0FBS3RCLEtBQTlCLEVBQVI7QUFBQTtBQURLLFNBQVI7QUFHRDtBQVh3Qzs7QUFBQTtBQUFBLElBTWhCLDZDQUFBYyxDQUFNSSxTQU5VOztBQWEzQyxTQUFPRSxZQUFQO0FBQ0QsQ0FkRDs7QUFpQk8sSUFBTXJDLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQ3hCd0MsUUFBUXpELElBQVIsQ0FBYTtBQUFBLFdBQVUrQyxPQUFPN0MsT0FBakI7QUFBQSxHQUFiLENBRHdCO0FBQUEsQ0FBbkI7O2VBSVFjLFk7QUFBZjs7Ozs7Ozs7Z0NBbkZNRSxTOztnQ0E4REFGLFk7O2dDQWlCT0MsVSIsImZpbGUiOiJlbnRyaWVzL2FzeW5jLW1vZHVsZS1kZW1vLjJkODkxM2M5YzNiZjZmYmFlMDhkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlbmRlciBmcm9tICcuLi8uLi9tb2R1bGVzL2hlbHBlci1tb2R1bGVzL2Jhc2UnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL2NvbXBvbmVudCc7XHJcblxyXG5yZW5kZXIoUGFnZSk7XHJcblxyXG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IEFQSVxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gIGltcG9ydCgnLi90ZW1wbGF0ZS5wdWcnKTtcclxuICBtb2R1bGUuaG90LmFjY2VwdCgnLi9jb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgICByZW5kZXIoUGFnZSk7XHJcbiAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJpZXMvYXN5bmMtbW9kdWxlLWRlbW8vZW50cnkuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBBc3luY0ZhY3RvcnksIHsgaW1wb3J0TGF6eSB9IGZyb20gJy4uLy4uL21vZHVsZXMvaGVscGVyLW1vZHVsZXMvYXN5bmMtY29tcG9uZW50LWZhY3RvcnknO1xyXG5cclxuY29uc3QgY2FsbEFzeW5jTW9kdWxlID0gKCkgPT4ge1xyXG4gIC8vIEFzeW5jIG1vZHVsZSBpbXBvcnRpbmdcclxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJhc3luYy10ZXN0XCIgKi8gJy4uLy4uL21vZHVsZXMvaGVscGVyLW1vZHVsZXMvYXN5bmMtdGVzdC5qcycpLnRoZW4oKGFzeW5jTW9kdWxlKSA9PiB7XHJcbiAgICBhc3luY01vZHVsZS5kZWZhdWx0LmxvYWRlZCgpO1xyXG4gIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gbG9hZCB0aGUgYXN5bmMgbW9kdWxlIScsIGVycik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBIZWxsb1dvcmxkID0gKHsgTW9kdWxlT25lLCBNb2R1bGVUd28gfSkgPT4gKFxyXG4gIDxkaXY+PE1vZHVsZU9uZSBjYWxsQXN5bmNNb2R1bGU9e2NhbGxBc3luY01vZHVsZX0gLz48TW9kdWxlVHdvIC8+PC9kaXY+KTtcclxuXHJcbkhlbGxvV29ybGQucHJvcFR5cGVzID0ge1xyXG4gIE1vZHVsZU9uZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBNb2R1bGVUd286IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBIZWxsb1dvcmxkQXN5bmMgPSBBc3luY0ZhY3RvcnkoSGVsbG9Xb3JsZCwge1xyXG4gIE1vZHVsZU9uZTogKCkgPT4gaW1wb3J0TGF6eShcclxuICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFzeW5jLW1vZHVsZS1vbmVcIiAqL1xyXG4gICAgICAnLi9zdWItY29tcG9uZW50cy9hc3luYy1tb2R1bGUtb25lL2NvbXBvbmVudC5qc3gnKSksXHJcbiAgTW9kdWxlVHdvOiAoKSA9PiBpbXBvcnRMYXp5KFxyXG4gICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXN5bmMtbW9kdWxlLXR3b1wiICovXHJcbiAgICAgICcuL3N1Yi1jb21wb25lbnRzL2FzeW5jLW1vZHVsZS10d28vY29tcG9uZW50LmpzeCcpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWxsb1dvcmxkQXN5bmM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2hlbGxvLXdvcmxkLWFzeW5jL2NvbXBvbmVudC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEhlbGxvV29ybGRBc3luYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlbGxvLXdvcmxkLWFzeW5jL2NvbXBvbmVudCc7XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT5cclxuICAoPGRpdj5cclxuICAgIDxIZWxsb1dvcmxkQXN5bmMgLz5cclxuICA8L2Rpdj4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2FzeW5jLW1vZHVsZS1kZW1vL2NvbXBvbmVudC5qc3giLCIvKlxyXG4gVGhlIGhpZ2ggb3JkZXIgY29tcG9uZW50IHRvIGNyZWF0ZSBjb21wb25lbnQgd2l0aCBhc3luY2hyb25vdXNseSBsb2FkZWQgc3ViIG1vZHVsZXNcclxuIGh0dHBzOi8vd2VicGFjay5qcy5vcmcvZ3VpZGVzL2xhenktbG9hZC1yZWFjdC9cclxuICovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY2xhc3MgQXN5bmNMb2FkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9hZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZFJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICB0aGlzLmxvYWRSZWplY3QgPSByZWplY3Q7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZpb3VzKSB7XHJcbiAgICBjb25zdCBzaG91bGRMb2FkID0gISFPYmplY3Qua2V5cyh0aGlzLnByb3BzLm1vZHVsZXMpXHJcbiAgICAgIC5maWx0ZXIoa2V5ID0+IHRoaXMucHJvcHMubW9kdWxlc1trZXldICE9PSBwcmV2aW91cy5tb2R1bGVzW2tleV0pLmxlbmd0aDtcclxuICAgIGlmIChzaG91bGRMb2FkKSB7XHJcbiAgICAgIHRoaXMubG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBtb2R1bGVzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1vZHVsZXMpO1xyXG5cclxuICAgIFByb21pc2UuYWxsKGtleXMubWFwKGtleSA9PiBtb2R1bGVzW2tleV0oKSkpXHJcbiAgICAgIC50aGVuKHZhbHVlcyA9PiAoXHJcbiAgICAgICAga2V5cy5yZWR1Y2UoKGFnZywga2V5LCBpbmRleCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgYWdnLCB7IFtrZXldOiB2YWx1ZXNbaW5kZXhdIH0pLCB7fSkpKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc01vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IG1vZHVsZXM6IHJlc3VsdCwgaXNMb2FkZWQ6IHRydWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVqZWN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzTG9hZGVkKSByZXR1cm4gKDxkaXY+TG9hZGluZy4uPC9kaXY+KTtcclxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5tb2R1bGVzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5Bc3luY0xvYWQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG1vZHVsZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmNvbnN0IEFzeW5jRmFjdG9yeSA9IChDb21wb25lbnQsIG1vZHVsZXMpID0+IHtcclxuICBpZiAoIW1vZHVsZXMpIHtcclxuICAgIHJldHVybiBDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICBjbGFzcyBBc3luY1dyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKDxBc3luY0xvYWQgcmVmPXsoY29tcG9uZW50KSA9PiB7IHRoaXMuQXN5bmNMb2FkID0gY29tcG9uZW50OyB9fSBtb2R1bGVzPXttb2R1bGVzfT5cclxuICAgICAgICB7bW9kcyA9PiA8Q29tcG9uZW50IHsuLi5tb2RzfSB7Li4udGhpcy5wcm9wc30gLz59XHJcbiAgICAgIDwvQXN5bmNMb2FkPik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBBc3luY1dyYXBwZXI7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGltcG9ydExhenkgPSBwcm9taXNlID0+IChcclxuICBwcm9taXNlLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5kZWZhdWx0KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXN5bmNGYWN0b3J5O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9oZWxwZXItbW9kdWxlcy9hc3luYy1jb21wb25lbnQtZmFjdG9yeS5qc3giXSwic291cmNlUm9vdCI6IiJ9