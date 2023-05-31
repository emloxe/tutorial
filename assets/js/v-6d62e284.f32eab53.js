"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[306],{9140:(s,n,a)=>{a.r(n),a.d(n,{data:()=>p});const p={key:"v-6d62e284",path:"/vue/pack.html",title:"vue-cli4设置打包相对路径",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"vue/pack.md",git:{updatedTime:1685524296e3,contributors:[{name:"ZWJ",email:"qwrtyp@live.cn",commits:1}]}}},7876:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="vue-cli4设置打包相对路径" tabindex="-1"><a class="header-anchor" href="#vue-cli4设置打包相对路径" aria-hidden="true">#</a> vue-cli4设置打包相对路径</h1><p>修改配置vue.config.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n publicPath<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;././&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这样在打包时资源引用路径就是相对路径，而开发过程中是绝对路径</p><p>但是这样修改public文件夹下的资源引用会有问题，所以继续改配置</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  publicPath<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',6),e={},t=(0,a(3744).Z)(e,[["render",function(s,n){return p}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,p]of n)a[s]=p;return a}}}]);