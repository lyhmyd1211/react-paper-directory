"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("./utils");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Catalog = function (_Component) {
  _inherits(Catalog, _Component);

  function Catalog(props) {
    _classCallCheck(this, Catalog);

    var _this = _possibleConstructorReturn(this, (Catalog.__proto__ || Object.getPrototypeOf(Catalog)).call(this, props));

    _this.scrollToSelect = function (node) {
      window.scrollTo(0, node && node.offsetTop + document.body.offsetHeight - 20);
    };

    _this.isActive = function (index, node, nextNode) {
      var current = _this.props.current;

      if (node && nextNode) {
        var precent = node.offsetTop + document.body.offsetHeight - 20;
        var next = nextNode.offsetTop + document.body.offsetHeight - 20;
        if (index === 0 && current <= precent) {
          return true;
        } else if (precent <= current && next > current) {
          _this.cataLogScroll(index);
          return true;
        }
      }
      return false;
    };

    _this.state = {
      catalog: []
    };
    window.onscroll = function () {
      _this.setState({ current: (0, _utils.getScrollTop)() });
    };
    return _this;
  }

  _createClass(Catalog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ cataLog: (0, _utils.getCataLog)(this.props.catalog) });
    }
  }, {
    key: "cataLogScroll",
    value: function cataLogScroll(index) {
      var id = 'catalog-default' + index;
      var cur = document.getElementById(id);
      var win = document.getElementById('detail-card-catalog');
      if (cur) {
        win.scrollTo(0, cur.offsetTop - 68);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('props', this.props);
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { style: { fontSize: "16px", fontWeight: 700 } },
          "\u76EE\u5F55"
        ),
        this.state.cataLog && this.state.cataLog.map(function (item, index) {
          return _react2.default.createElement(
            "li",
            { key: index },
            _react2.default.createElement(
              "a",
              {
                isActive: _this2.isActive.bind(_this2, index, item.node, item.nextNode),
                className: "catalog-default " + item.type,
                id: "catalog-default" + index,
                activeClassName: "active",

                onClick: _this2.scrollToSelect.bind(_this2, item.node)
              },
              item.text
            )
          );
        })
      );
    }
  }]);

  return Catalog;
}(_react.Component);

exports.default = Catalog;
//# sourceMappingURL=Catalog.js.map