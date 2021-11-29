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

## 常用的正则验证
```js
/**
 * 手机验证
 */
export const checkMobile = value => {
  const reg = /^1[3-9][0-9]{9}$/;
  if (value.trim() === '') {
    return { code: 1, msg: '请输入手机号码' };
  }
  if (!reg.test(value)) {
    return { code: 1, msg: '手机号码格式不正确' };
  }
  return { code: 0, msg: '验证通过' };
};
```


```js
/**
 * 密码验证
 */
export const checkPassword = value => {
  if (value.trim() === '') {
    return { code: 1, msg: '请输入密码' };
  }
  if (value.length < 6) {
    return { code: 1, msg: '密码长度不能小于6位' };
  }
  return { code: 0, msg: '验证通过' };
};
```

```js
/**
 * 昵称验证
 */
export const checkNickname = value => {
  if (value.trim() === '') {
    return { code: 1, msg: '请输入昵称' };
  }
  if (value.length < 2) {
    return { code: 1, msg: '昵称太短了' };
  }
  if (value.length > 32) {
    return { code: 1, msg: '昵称太长了' };
  }
  return { code: 0, msg: '验证通过' };
};
```


```js
/**
 * 密码验证
 */
export const checkNewPassword = value => {
  if (value.trim() === '') {
    return { code: 1, msg: '请输入密新码' };
  }
  if (value.length < 6) {
    return { code: 1, msg: '新密码长度不能小于6位' };
  }
  return { code: 0, msg: '验证通过' };
};
```


```js
/**
 * 验证码验证
 */
export const checkVerifyCode = value => {
  const reg = /^\d{4}$/;
  if (value.trim() === '') {
    return { code: 1, msg: '请输入验证码' };
  }
  if (!reg.test(value)) {
    return { code: 1, msg: '验证码不正确' };
  }
  return { code: 0, msg: '验证通过' };
};
```

```js
/**
 * 身份证验证
 */
export const checkIdCard = value => {
  const reg = /^\d{15}|\d{18}$/;
  if (value.trim() === '') {
    return { code: 1, msg: '请输入身份证号码' };
  }
  if (!reg.test(value)) {
    return { code: 1, msg: '身份证必须是15或18位数字' };
  }
  return { code: 0, msg: '验证通过' };
};
```


```js
/**
 * 银行卡验证
 */
export const checkBankCard = value => {
  const reg = /^([1-9]{1})(\d{14}|\d{15}|\d{16}|\d{18})$/;
  if (value.trim() === '') {
    return { code: 1, msg: '请输入银行卡号' };
  }
  if (!reg.test(value)) {
    return { code: 1, msg: '银行卡号格式不正确' };
  }

  return { code: 0, msg: '验证通过' };
};
```



