# 动态修改billboard内容


```js
const canvas = document.createElement('canvas');
const w = this._w;
canvas.width = w;
canvas.height = w;

const billboard = new mono.Billboard();
billboard.s({'m.texture.image': canvas});
```

```js

new mono.Animate({
  from: 0,
  to: 1,
  dur: 3000 - this._power,
  reverse: false,
  repeat: Number.POSITIVE_INFINITY,
  easing: 'easeNone',
  onUpdate(value) {
    drawCanvas(canvas, value); // canvas绘制函数
    billboard.invalidateTexture();
  },
}).play();
```
