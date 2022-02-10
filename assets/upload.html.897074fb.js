import{d as n}from"./app.efc96c9b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u4E0A\u4F20\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u6587\u4EF6" aria-hidden="true">#</a> \u4E0A\u4F20\u6587\u4EF6</h1><h2 id="\u521B\u5EFA\u5F39\u6846\u8BFB\u53D6\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5F39\u6846\u8BFB\u53D6\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u5F39\u6846\u8BFB\u53D6\u6587\u4EF6</h2><p>\u5982\u679C\u91C7\u7528a\u6807\u7B7E\u70B9\u51FB\uFF0C\u5F39\u51FA\u9009\u53D6\u6587\u4EF6\u5F39\u6846</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>domA<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fileSelector <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  fileSelector<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  fileSelector<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;multiple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;multiple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5982\u679C\u4E00\u6B21\u9009\u53D6\u591A\u4E2A\u6587\u4EF6\u5C31\u9700\u8981\u8FD9\u4E2A\u53C2\u6570</span>
  fileSelector<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6587\u4EF6\u6570\u636E\u5B58\u50A8\u5728 fileSelector.files \u4E2D</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  fileSelector<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6216\u8005\u76F4\u63A5\u76D1\u542Cinput\u7684change</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">multiple</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload_model<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> ele <span class="token operator">=</span> dom<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.upload_model&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6587\u4EF6\u6570\u636E\u5B58\u50A8\u5728 fileSelector.files \u4E2D</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u6587\u4EF6\u5BA2\u6237\u7AEF\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5BA2\u6237\u7AEF\u8BFB\u53D6" aria-hidden="true">#</a> \u6587\u4EF6\u5BA2\u6237\u7AEF\u8BFB\u53D6</h2><p>file\u4F20\u5165\u7684\u662FfileSelector.files\u6570\u7EC4\u4E2D\u7684\u4E00\u4E2A\u5BF9\u8C61 \u5982<code>file = fileSelector.files[0]</code> file\u662F\u4E00\u4E2A\u53EF\u8BFB\u5BF9\u8C61\uFF0C\u4E0D\u53EF\u4EE5\u4FEE\u6539</p><p>\u4E8C\u8FDB\u5236\u8BFB\u53D6\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
reader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8BFB\u53D6\u56FE\u7247</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  domImg<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
  <span class="token comment">// fileData[id].data = e.target.result;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4E0A\u4F20\u5230\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u5230\u670D\u52A1\u5668" aria-hidden="true">#</a> \u4E0A\u4F20\u5230\u670D\u52A1\u5668</h2><p>\u5982\u679C\u8981\u5C06\u6587\u4EF6\u4E0A\u4F20\u5230\u670D\u52A1\u5668\uFF0C\u9700\u8981\u501F\u52A9\u8868\u5355\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileSelector<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;model&#39;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>post\u8BF7\u6C42\u4F20\u9012formData\u5373\u53EF</p><p>formData\u5305\u542Bappend\uFF0Cset\u65B9\u5F0F\uFF0C\u90FD\u662F\u4F20\u9012\u4E00\u4E2Akey\u4E00\u4E2Avalue\u3002 \u4F46\u662Fset\u65B9\u5F0F\u5177\u6709\u552F\u4E00\u6027\u3002</p>`,17);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};