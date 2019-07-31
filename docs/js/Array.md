# 数组


## 创建指定长度的数组

如果我们要创建长度为2的空数组
常用一下方式
```js
const a = [];
a.length = 2;
console.log(a); // [empty × 2]

Array(2); // [empty × 2]
```

```js
Array.from({length: 2}); // [undefined, undefined]
[...Array(2)]; // [undefined, undefined]
```

```js
Array(2).fill(undefined); // [undefined, undefined]
Array(2).fill([]); // [[], []]
```

```js
Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]
```
`Array.from`相当于两步操作 初始化+遍历