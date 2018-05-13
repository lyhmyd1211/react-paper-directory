'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDirectory = getDirectory;
exports.getScrollTop = getScrollTop;
/**
 * 获取文章目录
 * @param {*} element 文章根DOM
 * @param {*} rule    目录生成规则,默认['h1','h2','h3'];
 */
function getDirectory(element, rule) {
  var directory = [];
  console.log('rule', rule);
  var tag = rule || ['h1', 'h2', 'h3'];
  var select = '';
  // tag.map(_=>select=_+','+select);
  if (!Array.isArray(rule)) {
    tag = Object.keys(rule) || [("h1", "h2", "h3")];
  } else {
    tag = rule || ['h1', 'h2', 'h3'];
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tag[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var iterator = _step.value;

      if (select === '') {
        select = iterator;
      } else {
        select += ',' + iterator;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log('select', select);
  directory = Array.from(element.querySelectorAll(select));
  return directory.map(function (item) {
    function getNextNode(el) {
      if (el.nextElementSibling !== null && tag.findIndex(function (_) {
        return _ === el.localName;
      }) === -1) {
        return getNextNode(el.nextElementSibling);
      } else {
        return el;
      }
    }
    return {
      tagIndex: tag.indexOf(item.localName),
      type: item.localName,
      // type: "directory-" + item.tagName,
      text: item.innerText,
      node: item,
      nextNode: getNextNode(item.nextElementSibling)
    };
  });
}
/**
 * 获取当前滚动条所在位置
 */
function getScrollTop() {
  var scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  // console.log('当前', scrollTop);

  return scrollTop;
}
//# sourceMappingURL=utils.js.map