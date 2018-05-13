/**
 * 获取文章目录
 * @param {*} element 文章根DOM
 * @param {*} rule    目录生成规则,默认['h1','h2','h3'];
 */
export function getDirectory(element,rule) {
  let directory = [];
  console.log('rule',rule);
  let tag = rule || ['h1', 'h2', 'h3'];
  let select ='';
  // tag.map(_=>select=_+','+select);
  if (!Array.isArray(rule)) {
    tag = Object.keys(rule)||[("h1", "h2", "h3")];
  }else{
    tag = rule || ['h1', 'h2', 'h3']
  }
  for (const iterator of tag) {
    if (select==='') {
      select = iterator;
    }else{
      select+= ','+iterator
    }
  }
  console.log('select',select);
  directory = Array.from(element.querySelectorAll(select));
  return directory.map(item => {
    function getNextNode(el) {
      if (
        el.nextElementSibling !== null &&
        tag.findIndex(_ => _ === el.localName) === -1
      ) {
        return getNextNode(el.nextElementSibling);
      } else{
        return el;
      }
    }
    return {
      tagIndex:tag.indexOf(item.localName),
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

