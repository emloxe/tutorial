"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[880],{8231:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-756cddfe",path:"/js/Date.html",title:"时间",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"时间解析",slug:"时间解析",children:[]},{level:2,title:"返回成指定格式的字符串",slug:"返回成指定格式的字符串",children:[]},{level:2,title:"其他",slug:"其他",children:[{level:3,title:"获取当前月有多少天",slug:"获取当前月有多少天",children:[]}]}],filePathRelative:"js/Date.md",git:{updatedTime:1685524296e3,contributors:[{name:"ZWJ",email:"qwrtyp@live.cn",commits:1}]}}},9742:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="时间" tabindex="-1"><a class="header-anchor" href="#时间" aria-hidden="true">#</a> 时间</h1><h2 id="时间解析" tabindex="-1"><a class="header-anchor" href="#时间解析" aria-hidden="true">#</a> 时间解析</h2><p>获取其毫秒数 假设ISO时间为&quot;2019-08-22T07:24:38.298Z&quot;</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;2019-08-22T07:24:38.298Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1566458678298</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1566458678298</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1566458678298</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="返回成指定格式的字符串" tabindex="-1"><a class="header-anchor" href="#返回成指定格式的字符串" aria-hidden="true">#</a> 返回成指定格式的字符串</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Thu Aug 22 2019&quot;</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toGMTString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Thu, 22 Aug 2019 07:24:38 GMT&quot;</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;2019-08-22T07:24:38.298Z&quot;</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;2019-08-22T07:24:38.298Z&quot;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;2019/8/22 下午3:24:38&quot;</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;2019/8/22&quot;</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;下午3:24:38&quot;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Thu Aug 22 2019 15:24:38 GMT+0800 (中国标准时间)&quot;</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;15:24:38 GMT+0800 (中国标准时间)&quot;</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Thu, 22 Aug 2019 07:24:38 GMT&quot;</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2019-08-22T07:24:38.298Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1566458678298</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="获取当前月有多少天" tabindex="-1"><a class="header-anchor" href="#获取当前月有多少天" aria-hidden="true">#</a> 获取当前月有多少天</h3><p><code>new Date(year, month, 0).getDate()</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2016</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 29</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',10),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);