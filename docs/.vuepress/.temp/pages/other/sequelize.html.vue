<template><h1 id="sequelize" tabindex="-1"><a class="header-anchor" href="#sequelize" aria-hidden="true">#</a> sequelize</h1>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>
<h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2>
<p><a href="https://www.chaoswork.cn/1064.html" target="_blank" rel="noopener noreferrer">sequelize引起mysql错误：Too many keys specified. Max 64 keys allowed<OutboundLink/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SELECT CONCAT('ALTER TABLE ',i.TABLE_NAME,' DROP INDEX ',i.INDEX_NAME,' ;') 
FROM INFORMATION_SCHEMA.STATISTICS i WHERE TABLE_SCHEMA = 'bianjizutai' AND i.INDEX_NAME &lt;> 'PRIMARY';
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
