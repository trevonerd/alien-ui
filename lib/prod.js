(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'styled-components'], factory) :
  (global = global || self, factory(global['trevo-ui'] = {}, global.React, global.styled));
}(this, function (exports, React, styled) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n    background-color: lightgrey;\n    border-radius: 5px;\n    border: 1px solid #333;\n    padding: 10px 30px;\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var ButtonPrimary = styled.button(_templateObject());

  var Button = function Button(props) {
    return React.createElement(ButtonPrimary, {
      type: "button"
    }, props.children);
  };

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["\n    font-size: 1.5em;\n    text-align: center;\n    color: palevioletred;\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var Title = styled.h1(_templateObject$1());

  var HelloWorld =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(HelloWorld, _React$Component);

    function HelloWorld() {
      _classCallCheck(this, HelloWorld);

      return _possibleConstructorReturn(this, _getPrototypeOf(HelloWorld).apply(this, arguments));
    }

    _createClass(HelloWorld, [{
      key: "render",
      value: function render() {
        return React.createElement("div", null, React.createElement(Title, null, "Hello World!"));
      }
    }]);

    return HelloWorld;
  }(React.Component);

  exports.Button = Button;
  exports.HelloWorld = HelloWorld;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
