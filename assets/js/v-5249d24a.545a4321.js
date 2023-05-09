"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[298],{9752:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-5249d24a",path:"/js/util.html",title:"工具类",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"类型监测",slug:"类型监测",children:[]},{level:2,title:"生成随机序列",slug:"生成随机序列",children:[]}],filePathRelative:"js/util.md",git:{updatedTime:1683593958e3,contributors:[{name:"ZWJ",email:"qwrtyp@live.cn",commits:1}]}}},9023:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="工具类" tabindex="-1"><a class="header-anchor" href="#工具类" aria-hidden="true">#</a> 工具类</h1><h2 id="类型监测" tabindex="-1"><a class="header-anchor" href="#类型监测" aria-hidden="true">#</a> 类型监测</h2><p>检测对象的 JavaScript [Class] 内部类型。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * 根据传入的数据，判断其类型\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">item</span>\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">type</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> reTypeOf <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?:^\\[object\\s(.*?)\\]$)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reTypeOf<span class="token punctuation">,</span> <span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token function">type</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">// &quot;number&quot;</span>\n<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;array&quot;</span>\n<span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &quot;date&quot;</span>\n<span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token class-name">b</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;function&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="生成随机序列" tabindex="-1"><a class="header-anchor" href="#生成随机序列" aria-hidden="true">#</a> 生成随机序列</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * js生成随机序列\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">len</span> 需要产生随机序列的长度\n * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> 随机序列\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sid</span><span class="token punctuation">(</span><span class="token parameter">len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> chars <span class="token operator">=</span> <span class="token string">&#39;0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&#39;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> i<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> radix <span class="token operator">=</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>len<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> id<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> chars<span class="token punctuation">[</span><span class="token number">0</span> <span class="token operator">|</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> radix<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> r<span class="token punctuation">;</span>\n    <span class="token comment">// eslint-disable-next-line no-multi-assign</span>\n    id<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> id<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> <span class="token operator">=</span> id<span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span> <span class="token operator">=</span> id<span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>id<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        r <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">|</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16</span><span class="token punctuation">;</span>\n        id<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> chars<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>r <span class="token operator">&amp;</span> <span class="token number">0x3</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0x8</span> <span class="token operator">:</span> r<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> id<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',6),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);