# 工具类
## 类型监测

检测对象的 JavaScript [Class] 内部类型。

```
function type(item) {
  const reTypeOf = /(?:^\[object\s(.*?)\]$)/;
  return Object.prototype.toString.call(item)
    .replace(reTypeOf, '$1')
    .toLowerCase();
}
type(123) // "number"
type([]) // "array"
type(new Date()) // "date"
type(class b{}) // "function"
```