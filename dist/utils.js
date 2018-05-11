"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCataLog = getCataLog;
exports.getScrollTop = getScrollTop;
/**
 * 获取文章目录
 * @param {*} element 文章根DOM
 */
function getCataLog(element) {
  var cataLog = [];
  var tag = ["H1", "H2", "H3"];
  cataLog = Array.from(element.querySelectorAll("h1,h2,h3"));
  return cataLog.map(function (item) {
    function getNextNode(el) {
      if (el.nextElementSibling !== null && tag.findIndex(function (_) {
        return _ === el.tagName;
      }) === -1) {
        return getNextNode(el.nextElementSibling);
      } else {
        return el;
      }
    }
    return {
      type: "cataLog-" + item.tagName,
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