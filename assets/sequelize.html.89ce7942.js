import{r as a,o as r,c as l,a as e,e as i,F as p,d as n,b as u}from"./app.0460c160.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const t={},c=n(`<h1 id="sequelize" tabindex="-1"><a class="header-anchor" href="#sequelize" aria-hidden="true">#</a> sequelize</h1><h2 id="\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a> \u6587\u6863</h2><h3 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
Sequelize.STRING                      // VARCHAR(255)
Sequelize.STRING(1234)                // VARCHAR(1234)
Sequelize.STRING.BINARY               // VARCHAR BINARY
Sequelize.TEXT                        // TEXT
Sequelize.TEXT(&#39;tiny&#39;)                // TINYTEXT
 
Sequelize.INTEGER                     // INTEGER
Sequelize.BIGINT                      // BIGINT
Sequelize.BIGINT(11)                  // BIGINT(11)
 
Sequelize.FLOAT                       // FLOAT
Sequelize.FLOAT(11)                   // FLOAT(11)
Sequelize.FLOAT(11, 12)               // FLOAT(11,12)
 
Sequelize.REAL                        // REAL        PostgreSQL only.
Sequelize.REAL(11)                    // REAL(11)    PostgreSQL only.
Sequelize.REAL(11, 12)                // REAL(11,12) PostgreSQL only.
 
Sequelize.DOUBLE                      // DOUBLE
Sequelize.DOUBLE(11)                  // DOUBLE(11)
Sequelize.DOUBLE(11, 12)              // DOUBLE(11,12)
 
Sequelize.DECIMAL                     // DECIMAL
Sequelize.DECIMAL(10, 2)              // DECIMAL(10,2)
 
Sequelize.DATE                        // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
Sequelize.DATE(6)                     // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
Sequelize.DATEONLY                    // DATE without time.
Sequelize.BOOLEAN                     // TINYINT(1)
 
Sequelize.ENUM(&#39;value 1&#39;, &#39;value 2&#39;)  // An ENUM with allowed values &#39;value 1&#39; and &#39;value 2&#39;
Sequelize.ARRAY(Sequelize.TEXT)       // Defines an array. PostgreSQL only.
 
Sequelize.JSON                        // JSON column. PostgreSQL only.
Sequelize.JSONB                       // JSONB column. PostgreSQL only.
 
Sequelize.BLOB                        // BLOB (bytea for PostgreSQL)
Sequelize.BLOB(&#39;tiny&#39;)                // TINYBLOB (bytea for PostgreSQL. Other options are medium and long)
 
Sequelize.UUID                        // UUID datatype for PostgreSQL and SQLite, CHAR(36) BINARY for MySQL (use defaultValue: Sequelize.UUIDV1 or Sequelize.UUIDV4 to make sequelize generate the ids automatically)
 
Sequelize.RANGE(Sequelize.INTEGER)    // Defines int4range range. PostgreSQL only.
Sequelize.RANGE(Sequelize.BIGINT)     // Defined int8range range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DATE)       // Defines tstzrange range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DATEONLY)   // Defines daterange range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DECIMAL)    // Defines numrange range. PostgreSQL only.
 
Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)) // Defines array of tstzrange ranges. PostgreSQL only.
 
Sequelize.GEOMETRY                    // Spatial column.  PostgreSQL (with PostGIS) or MySQL only.
Sequelize.GEOMETRY(&#39;POINT&#39;)           // Spatial column with geometry type. PostgreSQL (with PostGIS) or MySQL only.


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h3 id="\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u6821\u9A8C" aria-hidden="true">#</a> \u6821\u9A8C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>validate: {
  is: /^[a-z]+$/i,          // \u5339\u914D\u8FD9\u4E2A RegExp
  is: [&quot;^[a-z]+$&quot;,&#39;i&#39;],     // \u4E0E\u4E0A\u9762\u76F8\u540C,\u4F46\u662F\u4EE5\u5B57\u7B26\u4E32\u6784\u9020 RegExp
  not: /^[a-z]+$/i,         // \u4E0D\u5339\u914D RegExp
  not: [&quot;^[a-z]+$&quot;,&#39;i&#39;],    // \u4E0E\u4E0A\u9762\u76F8\u540C,\u4F46\u662F\u4EE5\u5B57\u7B26\u4E32\u6784\u9020 RegExp
  isEmail: true,            // \u68C0\u67E5 email \u683C\u5F0F (foo@bar.com)
  isUrl: true,              // \u68C0\u67E5 url \u683C\u5F0F (http://foo.com)
  isIP: true,               // \u68C0\u67E5 IPv4 (129.89.23.1) \u6216 IPv6 \u683C\u5F0F
  isIPv4: true,             // \u68C0\u67E5 IPv4 \u683C\u5F0F (129.89.23.1)
  isIPv6: true,             // \u68C0\u67E5 IPv6 \u683C\u5F0F
  isAlpha: true,            // \u53EA\u5141\u8BB8\u5B57\u6BCD
  isAlphanumeric: true,     // \u5C06\u4EC5\u5141\u8BB8\u4F7F\u7528\u5B57\u6BCD\u6570\u5B57,\u56E0\u6B64 &#39;_abc&#39; \u5C06\u5931\u8D25
  isNumeric: true,          // \u53EA\u5141\u8BB8\u6570\u5B57
  isInt: true,              // \u68C0\u67E5\u6709\u6548\u7684\u6574\u6570
  isFloat: true,            // \u68C0\u67E5\u6709\u6548\u7684\u6D6E\u70B9\u6570
  isDecimal: true,          // \u68C0\u67E5\u4EFB\u4F55\u6570\u5B57
  isLowercase: true,        // \u68C0\u67E5\u5C0F\u5199
  isUppercase: true,        // \u68C0\u67E5\u5927\u5199
  notNull: true,            // \u4E0D\u5141\u8BB8\u4E3A\u7A7A
  isNull: true,             // \u53EA\u5141\u8BB8\u4E3A\u7A7A
  notEmpty: true,           // \u4E0D\u5141\u8BB8\u7A7A\u5B57\u7B26\u4E32
  equals: &#39;specific value&#39;, // \u4EC5\u5141\u8BB8 &#39;specific value&#39;
  contains: &#39;foo&#39;,          // \u5F3A\u5236\u7279\u5B9A\u5B50\u5B57\u7B26\u4E32
  notIn: [[&#39;foo&#39;, &#39;bar&#39;]],  // \u68C0\u67E5\u503C\u4E0D\u662F\u8FD9\u4E9B\u4E4B\u4E00
  isIn: [[&#39;foo&#39;, &#39;bar&#39;]],   // \u68C0\u67E5\u503C\u662F\u5176\u4E2D\u4E4B\u4E00
  notContains: &#39;bar&#39;,       // \u4E0D\u5141\u8BB8\u7279\u5B9A\u7684\u5B50\u5B57\u7B26\u4E32
  len: [2,10],              // \u4EC5\u5141\u8BB8\u957F\u5EA6\u57282\u523010\u4E4B\u95F4\u7684\u503C
  isUUID: 4,                // \u53EA\u5141\u8BB8 uuid
  isDate: true,             // \u53EA\u5141\u8BB8\u65E5\u671F\u5B57\u7B26\u4E32
  isAfter: &quot;2011-11-05&quot;,    // \u4EC5\u5141\u8BB8\u7279\u5B9A\u65E5\u671F\u4E4B\u540E\u7684\u65E5\u671F\u5B57\u7B26\u4E32
  isBefore: &quot;2011-11-05&quot;,   // \u4EC5\u5141\u8BB8\u7279\u5B9A\u65E5\u671F\u4E4B\u524D\u7684\u65E5\u671F\u5B57\u7B26\u4E32
  max: 23,                  // \u4EC5\u5141\u8BB8\u503C &lt;= 23
  min: 23,                  // \u4EC5\u5141\u8BB8\u503C &gt;= 23
  isCreditCard: true,       // \u68C0\u67E5\u6709\u6548\u7684\u4FE1\u7528\u5361\u53F7
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u7684\u95EE\u9898</h2>`,7),o={href:"https://www.chaoswork.cn/1064.html",target:"_blank",rel:"noopener noreferrer"},m=u("sequelize\u5F15\u8D77mysql\u9519\u8BEF\uFF1AToo many keys specified. Max 64 keys allowed"),S=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT CONCAT(&#39;ALTER TABLE &#39;,i.TABLE_NAME,&#39; DROP INDEX &#39;,i.INDEX_NAME,&#39; ;&#39;) 
FROM INFORMATION_SCHEMA.STATISTICS i WHERE TABLE_SCHEMA = &#39;bianjizutai&#39; AND i.INDEX_NAME &lt;&gt; &#39;PRIMARY&#39;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u6587\u6863-1" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863-1" aria-hidden="true">#</a> \u6587\u6863</h2><p>https://www.sequelize.com.cn/</p>`,3);function d(E,q){const s=a("ExternalLinkIcon");return r(),l(p,null,[c,e("p",null,[e("a",o,[m,i(s)])]),S],64)}var I=b(t,[["render",d]]);export{I as default};
