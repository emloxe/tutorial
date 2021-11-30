"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[152],{876:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-0e3dfefe",path:"/other/moment.html",title:"moment",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"other/moment.md",git:{updatedTime:1638239818e3,contributors:[{name:"ZWJ",email:"qwrtyp@live.cn",commits:1}]}}},9414:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="moment" tabindex="-1"><a class="header-anchor" href="#moment" aria-hidden="true">#</a> moment</h1><p>配置中文</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">&#39;zh&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\tmonths<span class="token operator">:</span> <span class="token string">&#39;一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月&#39;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\tmonthsShort<span class="token operator">:</span> <span class="token string">&#39;1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月&#39;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\tweekdays<span class="token operator">:</span> <span class="token string">&#39;星期日_星期一_星期二_星期三_星期四_星期五_星期六&#39;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\tweekdaysShort<span class="token operator">:</span> <span class="token string">&#39;周日_周一_周二_周三_周四_周五_周六&#39;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\tweekdaysMin<span class="token operator">:</span> <span class="token string">&#39;日_一_二_三_四_五_六&#39;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\tlongDateFormat<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token constant">LT</span><span class="token operator">:</span> <span class="token string">&#39;Ah点mm分&#39;</span><span class="token punctuation">,</span>\n\t\t<span class="token constant">LTS</span><span class="token operator">:</span> <span class="token string">&#39;Ah点m分s秒&#39;</span><span class="token punctuation">,</span>\n\t\t<span class="token constant">L</span><span class="token operator">:</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">,</span>\n\t\t<span class="token constant">LL</span><span class="token operator">:</span> <span class="token string">&#39;YYYY年MMMD日&#39;</span><span class="token punctuation">,</span>\n\t\t<span class="token constant">LLL</span><span class="token operator">:</span> <span class="token string">&#39;YYYY年MMMD日Ah点mm分&#39;</span><span class="token punctuation">,</span>\n\t\t<span class="token constant">LLLL</span><span class="token operator">:</span> <span class="token string">&#39;YYYY年MMMD日ddddAh点mm分&#39;</span><span class="token punctuation">,</span>\n\t\tl<span class="token operator">:</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">,</span>\n\t\tll<span class="token operator">:</span> <span class="token string">&#39;YYYY年MMMD日&#39;</span><span class="token punctuation">,</span>\n\t\tlll<span class="token operator">:</span> <span class="token string">&#39;YYYY年MMMD日Ah点mm分&#39;</span><span class="token punctuation">,</span>\n\t\tllll<span class="token operator">:</span> <span class="token string">&#39;YYYY年MMMD日ddddAh点mm分&#39;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\tmeridiemParse<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">凌晨|早上|上午|中午|下午|晚上</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n\n\trelativeTime<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tfuture<span class="token operator">:</span> <span class="token string">&#39;%s内&#39;</span><span class="token punctuation">,</span>\n\t\tpast<span class="token operator">:</span> <span class="token string">&#39;%s前&#39;</span><span class="token punctuation">,</span>\n\t\ts<span class="token operator">:</span> <span class="token string">&#39;几秒&#39;</span><span class="token punctuation">,</span>\n\t\tm<span class="token operator">:</span> <span class="token string">&#39;1分钟&#39;</span><span class="token punctuation">,</span>\n\t\tmm<span class="token operator">:</span> <span class="token string">&#39;%d分钟&#39;</span><span class="token punctuation">,</span>\n\t\th<span class="token operator">:</span> <span class="token string">&#39;1小时&#39;</span><span class="token punctuation">,</span>\n\t\thh<span class="token operator">:</span> <span class="token string">&#39;%d小时&#39;</span><span class="token punctuation">,</span>\n\t\td<span class="token operator">:</span> <span class="token string">&#39;1天&#39;</span><span class="token punctuation">,</span>\n\t\tdd<span class="token operator">:</span> <span class="token string">&#39;%d天&#39;</span><span class="token punctuation">,</span>\n\t\t<span class="token constant">M</span><span class="token operator">:</span> <span class="token string">&#39;1个月&#39;</span><span class="token punctuation">,</span>\n\t\t<span class="token constant">MM</span><span class="token operator">:</span> <span class="token string">&#39;%d个月&#39;</span><span class="token punctuation">,</span>\n\t\ty<span class="token operator">:</span> <span class="token string">&#39;1年&#39;</span><span class="token punctuation">,</span>\n\t\tyy<span class="token operator">:</span> <span class="token string">&#39;%d年&#39;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>格式化</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',5),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);