/**
 * 获取文章目录
 * @param {*} element 文章根DOM
 */
export function getDirectory(element) {
  let directory = [];
  let tag = ["H1", "H2", "H3"];
  directory = Array.from(element.querySelectorAll("h1,h2,h3"));
  return directory.map(item => {
    function getNextNode(el) {
      if (
        el.nextElementSibling !== null &&
        tag.findIndex(_ => _ === el.tagName) === -1
      ) {
        return getNextNode(el.nextElementSibling);
      } else {
        return el;
      }
    }
    return {
      type: "directory-" + item.tagName,
      text: item.innerText,
      node: item,
      nextNode: getNextNode(item.nextElementSibling)
    };
  });
}
/**
 * 获取当前滚动条所在位置
 */
export function getScrollTop() {
  let scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  // console.log('当前', scrollTop);

  return scrollTop;
}
