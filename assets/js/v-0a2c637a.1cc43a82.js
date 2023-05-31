"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[806],{1921:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-0a2c637a",path:"/other/sequelize.html",title:"sequelize",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"文档",slug:"文档",children:[{level:3,title:"数据类型",slug:"数据类型",children:[]},{level:3,title:"校验",slug:"校验",children:[]}]},{level:2,title:"遇到的问题",slug:"遇到的问题",children:[]},{level:2,title:"文档",slug:"文档-1",children:[]}],filePathRelative:"other/sequelize.md",git:{updatedTime:1685524296e3,contributors:[{name:"ZWJ",email:"qwrtyp@live.cn",commits:1}]}}},1403:(e,n,s)=>{s.r(n),s.d(n,{default:()=>b});var a=s(6252);const l=(0,a.uE)('<h1 id="sequelize" tabindex="-1"><a class="header-anchor" href="#sequelize" aria-hidden="true">#</a> sequelize</h1><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\nSequelize.STRING                      // VARCHAR(255)\nSequelize.STRING(1234)                // VARCHAR(1234)\nSequelize.STRING.BINARY               // VARCHAR BINARY\nSequelize.TEXT                        // TEXT\nSequelize.TEXT(&#39;tiny&#39;)                // TINYTEXT\n \nSequelize.INTEGER                     // INTEGER\nSequelize.BIGINT                      // BIGINT\nSequelize.BIGINT(11)                  // BIGINT(11)\n \nSequelize.FLOAT                       // FLOAT\nSequelize.FLOAT(11)                   // FLOAT(11)\nSequelize.FLOAT(11, 12)               // FLOAT(11,12)\n \nSequelize.REAL                        // REAL        PostgreSQL only.\nSequelize.REAL(11)                    // REAL(11)    PostgreSQL only.\nSequelize.REAL(11, 12)                // REAL(11,12) PostgreSQL only.\n \nSequelize.DOUBLE                      // DOUBLE\nSequelize.DOUBLE(11)                  // DOUBLE(11)\nSequelize.DOUBLE(11, 12)              // DOUBLE(11,12)\n \nSequelize.DECIMAL                     // DECIMAL\nSequelize.DECIMAL(10, 2)              // DECIMAL(10,2)\n \nSequelize.DATE                        // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres\nSequelize.DATE(6)                     // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision\nSequelize.DATEONLY                    // DATE without time.\nSequelize.BOOLEAN                     // TINYINT(1)\n \nSequelize.ENUM(&#39;value 1&#39;, &#39;value 2&#39;)  // An ENUM with allowed values &#39;value 1&#39; and &#39;value 2&#39;\nSequelize.ARRAY(Sequelize.TEXT)       // Defines an array. PostgreSQL only.\n \nSequelize.JSON                        // JSON column. PostgreSQL only.\nSequelize.JSONB                       // JSONB column. PostgreSQL only.\n \nSequelize.BLOB                        // BLOB (bytea for PostgreSQL)\nSequelize.BLOB(&#39;tiny&#39;)                // TINYBLOB (bytea for PostgreSQL. Other options are medium and long)\n \nSequelize.UUID                        // UUID datatype for PostgreSQL and SQLite, CHAR(36) BINARY for MySQL (use defaultValue: Sequelize.UUIDV1 or Sequelize.UUIDV4 to make sequelize generate the ids automatically)\n \nSequelize.RANGE(Sequelize.INTEGER)    // Defines int4range range. PostgreSQL only.\nSequelize.RANGE(Sequelize.BIGINT)     // Defined int8range range. PostgreSQL only.\nSequelize.RANGE(Sequelize.DATE)       // Defines tstzrange range. PostgreSQL only.\nSequelize.RANGE(Sequelize.DATEONLY)   // Defines daterange range. PostgreSQL only.\nSequelize.RANGE(Sequelize.DECIMAL)    // Defines numrange range. PostgreSQL only.\n \nSequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)) // Defines array of tstzrange ranges. PostgreSQL only.\n \nSequelize.GEOMETRY                    // Spatial column.  PostgreSQL (with PostGIS) or MySQL only.\nSequelize.GEOMETRY(&#39;POINT&#39;)           // Spatial column with geometry type. PostgreSQL (with PostGIS) or MySQL only.\n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h3 id="校验" tabindex="-1"><a class="header-anchor" href="#校验" aria-hidden="true">#</a> 校验</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>validate: {\n  is: /^[a-z]+$/i,          // 匹配这个 RegExp\n  is: [&quot;^[a-z]+$&quot;,&#39;i&#39;],     // 与上面相同,但是以字符串构造 RegExp\n  not: /^[a-z]+$/i,         // 不匹配 RegExp\n  not: [&quot;^[a-z]+$&quot;,&#39;i&#39;],    // 与上面相同,但是以字符串构造 RegExp\n  isEmail: true,            // 检查 email 格式 (foo@bar.com)\n  isUrl: true,              // 检查 url 格式 (http://foo.com)\n  isIP: true,               // 检查 IPv4 (129.89.23.1) 或 IPv6 格式\n  isIPv4: true,             // 检查 IPv4 格式 (129.89.23.1)\n  isIPv6: true,             // 检查 IPv6 格式\n  isAlpha: true,            // 只允许字母\n  isAlphanumeric: true,     // 将仅允许使用字母数字,因此 &#39;_abc&#39; 将失败\n  isNumeric: true,          // 只允许数字\n  isInt: true,              // 检查有效的整数\n  isFloat: true,            // 检查有效的浮点数\n  isDecimal: true,          // 检查任何数字\n  isLowercase: true,        // 检查小写\n  isUppercase: true,        // 检查大写\n  notNull: true,            // 不允许为空\n  isNull: true,             // 只允许为空\n  notEmpty: true,           // 不允许空字符串\n  equals: &#39;specific value&#39;, // 仅允许 &#39;specific value&#39;\n  contains: &#39;foo&#39;,          // 强制特定子字符串\n  notIn: [[&#39;foo&#39;, &#39;bar&#39;]],  // 检查值不是这些之一\n  isIn: [[&#39;foo&#39;, &#39;bar&#39;]],   // 检查值是其中之一\n  notContains: &#39;bar&#39;,       // 不允许特定的子字符串\n  len: [2,10],              // 仅允许长度在2到10之间的值\n  isUUID: 4,                // 只允许 uuid\n  isDate: true,             // 只允许日期字符串\n  isAfter: &quot;2011-11-05&quot;,    // 仅允许特定日期之后的日期字符串\n  isBefore: &quot;2011-11-05&quot;,   // 仅允许特定日期之前的日期字符串\n  max: 23,                  // 仅允许值 &lt;= 23\n  min: 23,                  // 仅允许值 &gt;= 23\n  isCreditCard: true,       // 检查有效的信用卡号\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2>',7),r={href:"https://www.chaoswork.cn/1064.html",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("sequelize引起mysql错误：Too many keys specified. Max 64 keys allowed"),u=(0,a.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT CONCAT(&#39;ALTER TABLE &#39;,i.TABLE_NAME,&#39; DROP INDEX &#39;,i.INDEX_NAME,&#39; ;&#39;) \nFROM INFORMATION_SCHEMA.STATISTICS i WHERE TABLE_SCHEMA = &#39;bianjizutai&#39; AND i.INDEX_NAME &lt;&gt; &#39;PRIMARY&#39;;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="文档-1" tabindex="-1"><a class="header-anchor" href="#文档-1" aria-hidden="true">#</a> 文档</h2><p>https://www.sequelize.com.cn/</p>',3),p={},b=(0,s(3744).Z)(p,[["render",function(e,n){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a._)("p",null,[(0,a._)("a",r,[i,(0,a.Wm)(s)])]),u],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}}}]);