---
sidebar: auto
---

# axios

## 请求方法

需要携带的参数是`test: 123`

### GET
```js
axios.get('/test', { params: { test: 123 }}).catch((error) => {
  console.log(error);
}).then(() => {
  // 成功
}, () => {
  // 失败
});
```

### POST
```js
axios.post('/test', { test: 123 });
```

### PUT
```js
axios.put('/test', { test: 123 });
```

### DELETE
```js
axios.delete('/test', {data: { test: 123 }});
```