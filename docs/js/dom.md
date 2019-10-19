# HTML DOM 元素对象


## 获取位置

获得匹配元素相对父元素的偏移

```js
left = el.offsetLeft;
top = el.offsetTop;
```

获得匹配元素相对文档的偏移

```js
function getOffset (el) {
  const box = el.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset - document.documentElement.clientTop,
    left: box.left + window.pageXOffset - document.documentElement.clientLeft
  }
}
```

## 事件

自定义事件的绑定
```js
// 添加一个适当的事件监听器
el.addEventListener("custom-event", function(e) { process(e.detail) })

if (window.CustomEvent) {
  const event = new CustomEvent('custom-event', {detail: {key1: 'data'}});
} else {
  const event = document.createEvent('CustomEvent');
  event.initCustomEvent('custom-event', true, true, {key1: 'data'});
}
el.dispatchEvent(event);
```

## 解析字符串为 DOM 节点数组
```
function parseHTML(string) {
  const context = document.implementation.createHTMLDocument();

  // Set the base href for the created document so any parsed elements with URLs
  // are based on the document's URL
  const base = context.createElement('base');
  base.href = document.location.href;
  context.head.appendChild(base);

  context.body.innerHTML = string;
  return context.body.children;
}
```