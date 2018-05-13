"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("./utils");

var _reactRouterDom = require("react-router-dom");

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Directory = function (_Component) {
  _inherits(Directory, _Component);

  function Directory(props) {
    _classCallCheck(this, Directory);

    // this.top = 22;
    var _this = _possibleConstructorReturn(this, (Directory.__proto__ || Object.getPrototypeOf(Directory)).call(this, props));

    _this.scrollToSelect = function (node, index) {
      window.scrollTo(0, node && node.offsetTop);
      var id = "directory-default" + index;
      var cur = document.getElementById(id);
      if (cur) {
        // this.top = cur.offsetTop;
        _this.setState({ top: cur.offsetTop });
        console.log('cur', cur.offsetTop);
      }
    };

    _this.isActive = function (index, node, nextNode) {
      var current = _this.state.current;

      if (node && nextNode) {
        var precent = node.offsetTop;
        var next = nextNode.offsetTop || current + 1;
        if (index === 0 && current <= precent) {
          return true;
        } else if (precent <= current && next > current) {
          _this.directoryScroll(index);
          return true;
        }
      }
      return false;
    };

    _this._defaultType = true;
    _this.rule = _this.props.rule || ['h1', 'h2', 'h3'];
    _this.customStyle = _this.props.customStyle || {};
    _this.state = {
      directory: [],
      current: 0,
      top: 22
    };
    window.onscroll = function () {
      _this.setState({
        current: (0, _utils.getScrollTop)()
      });
    };
    return _this;
  }

  _createClass(Directory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ directory: (0, _utils.getDirectory)(this.props.directory, this.rule) });
    }
  }, {
    key: "directoryScroll",
    value: function directoryScroll(index) {
      var id = "directory-default" + index;
      var cur = document.getElementById(id);
      var win = document.getElementById("main-default");
      if (cur && win) {
        // this.setState({ top: cur.offsetTop });
        this.top = cur.offsetTop;
        //this.forceUpdate();
        console.log('bianhua', cur.offsetTop);
        win.scrollTo(0, cur.offsetTop - 68);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('sss', this.state.top);
      // this.rule={h1:{},h2:{},h3:{}}
      if (!Array.isArray(this.rule)) {
        this._defaultType = false;
      }
      var defaultStyle = ['first', 'second', 'third', 'fourth'];
      return _react2.default.createElement(
        "div",
        { className: "main-default", id: "main-default", style: this.customStyle },
        _react2.default.createElement(
          "div",
          { style: { fontSize: "16px", fontWeight: 700, textAlign: 'center' } },
          "\u76EE\u5F55"
        ),
        this.state.directory && this.state.directory.map(function (item, index) {
          return _react2.default.createElement(
            _reactRouterDom.HashRouter,
            { key: index },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              {
                style: _this2._defaultType ? {} : _this2.rule[item.type],
                className: 'directory-default directory-default-' + defaultStyle[item.tagIndex] + " directory-" + item.type,
                isActive: _this2.isActive.bind(_this2, index, item.node, item.nextNode),
                id: 'directory-default' + index,
                activeClassName: 'directory-active',
                to: "/header" + index,
                onClick: _this2.scrollToSelect.bind(null, item.node, index)
              },
              item.text
            )
          );
        })
      );
    }
  }]);

  return Directory;
}(_react.Component);

exports.default = Directory;
//# sourceMappingURL=Directory.js.map