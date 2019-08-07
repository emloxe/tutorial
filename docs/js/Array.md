# 数组

## 基本方法

### 遍历

for
```js
const arr = ['w', 'y', 'k', 'o', 'p'];
for(let i = 0, len = arr.length; i < len; i+=1) {
  console.log(arr[i]);
}
```

forEach
```js
const arr = ['w', 'y', 'k', 'o', 'p'];
arr.forEach((v) => {
  console.log(v);
});
```

for of
```js
const arr = ['w', 'y', 'k', 'o', 'p'];
const eArr = arr[Symbol.iterator]();
for (let letter of eArr) {
  console.log(letter);
}
```

### 处理数组

map
```js

```


### 查询


#### 是否存在一个元素

indexOf

lastIndexOf

some

find

findIndex







## 具体事例

### 创建指定长度的数组

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

