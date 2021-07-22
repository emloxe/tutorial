# vscode


安装插件
eslint，prettier，vetur



```
"[vue]": {
"editor.defaultFormatter": "octref.vetur"
},
"vetur.format.defaultFormatter.html": "prettier",
"vetur.format.defaultFormatter.js": "prettier-eslint",
"editor.formatOnSave": true,
"editor.tabSize": 2,
"javascript.preferences.quoteStyle": "single",
"prettier.singleQuote": true
```

## 出现的问题
有时候出现保存vue文件时，自动保存格式化时，js中单引号 格式成双引号
针对以上问题，可以在配置文件中加入`"vetur.format.defaultFormatter.js": "prettier-eslint"`

![images](../../images/20210713a.png)
