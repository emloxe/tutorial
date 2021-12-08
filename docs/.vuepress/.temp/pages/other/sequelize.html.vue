<template><h1 id="sequelize" tabindex="-1"><a class="header-anchor" href="#sequelize" aria-hidden="true">#</a> sequelize</h1>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>
<h3 id="校验" tabindex="-1"><a class="header-anchor" href="#校验" aria-hidden="true">#</a> 校验</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>validate: {
  is: /^[a-z]+$/i,          // 匹配这个 RegExp
  is: ["^[a-z]+$",'i'],     // 与上面相同,但是以字符串构造 RegExp
  not: /^[a-z]+$/i,         // 不匹配 RegExp
  not: ["^[a-z]+$",'i'],    // 与上面相同,但是以字符串构造 RegExp
  isEmail: true,            // 检查 email 格式 (foo@bar.com)
  isUrl: true,              // 检查 url 格式 (http://foo.com)
  isIP: true,               // 检查 IPv4 (129.89.23.1) 或 IPv6 格式
  isIPv4: true,             // 检查 IPv4 格式 (129.89.23.1)
  isIPv6: true,             // 检查 IPv6 格式
  isAlpha: true,            // 只允许字母
  isAlphanumeric: true,     // 将仅允许使用字母数字,因此 '_abc' 将失败
  isNumeric: true,          // 只允许数字
  isInt: true,              // 检查有效的整数
  isFloat: true,            // 检查有效的浮点数
  isDecimal: true,          // 检查任何数字
  isLowercase: true,        // 检查小写
  isUppercase: true,        // 检查大写
  notNull: true,            // 不允许为空
  isNull: true,             // 只允许为空
  notEmpty: true,           // 不允许空字符串
  equals: 'specific value', // 仅允许 'specific value'
  contains: 'foo',          // 强制特定子字符串
  notIn: [['foo', 'bar']],  // 检查值不是这些之一
  isIn: [['foo', 'bar']],   // 检查值是其中之一
  notContains: 'bar',       // 不允许特定的子字符串
  len: [2,10],              // 仅允许长度在2到10之间的值
  isUUID: 4,                // 只允许 uuid
  isDate: true,             // 只允许日期字符串
  isAfter: "2011-11-05",    // 仅允许特定日期之后的日期字符串
  isBefore: "2011-11-05",   // 仅允许特定日期之前的日期字符串
  max: 23,                  // 仅允许值 &lt;= 23
  min: 23,                  // 仅允许值 >= 23
  isCreditCard: true,       // 检查有效的信用卡号
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2>
<p><a href="https://www.chaoswork.cn/1064.html" target="_blank" rel="noopener noreferrer">sequelize引起mysql错误：Too many keys specified. Max 64 keys allowed<OutboundLink/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SELECT CONCAT('ALTER TABLE ',i.TABLE_NAME,' DROP INDEX ',i.INDEX_NAME,' ;') 
FROM INFORMATION_SCHEMA.STATISTICS i WHERE TABLE_SCHEMA = 'bianjizutai' AND i.INDEX_NAME &lt;> 'PRIMARY';
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
