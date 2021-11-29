# 正则表达式

## 示例

### 以指定字符结尾
```js
const type = 'jpg';
const re = new RegExp(`${type}$`, 'i');
re.test('123.jpg'); // true
re.test('123.png'); // false
```
如果是判断'.jpg'结尾，`const type = '\.jpg';`

### 字符串中是否包含指定字符

```js
const str = "Visit Runoob!"; 
const n = str.search(/Runoob/i);
const n = str.search('Runoob');
```
