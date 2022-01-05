const e={key:"v-616c639f",path:"/other/git.html",title:"GIT",lang:"en-US",frontmatter:{sidebar:"auto"},excerpt:`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h1>
<h2 id="\u57FA\u7840\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u7840\u64CD\u4F5C</h2>
<h3 id="\u62C9\u53D6\u4ED3\u5E93\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u4ED3\u5E93\u6587\u4EF6" aria-hidden="true">#</a> \u62C9\u53D6\u4ED3\u5E93\u6587\u4EF6</h3>
<p>http</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone https://gitee.com/TWaver/Space.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>ssh</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone git@gitee.com:TWaver/Space.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u62C9\u53D6\u975Emaster\u5206\u652F,\u4F8B\u5982dev\u5206\u652F</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone -b dev git@gitee.com:TWaver/Space.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u63D0\u4EA4\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u4EE3\u7801" aria-hidden="true">#</a> \u63D0\u4EA4\u4EE3\u7801</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git add .
git commit -m &lt;\u5907\u6CE8\u672C\u6B21\u5408\u5E76\u7684\u5185\u5BB9>
git push origin dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5F3A\u5236\u63A8\u9001\u5230\u6307\u5B9A\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u63A8\u9001\u5230\u6307\u5B9A\u5206\u652F" aria-hidden="true">#</a> \u5F3A\u5236\u63A8\u9001\u5230\u6307\u5B9A\u5206\u652F</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git push origin master --force

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u65B0\u4ED3\u5E93\u5F3A\u5236\u63A8\u9001\u5230\u8FDC\u7A0B\u5DF2\u6709\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u65B0\u4ED3\u5E93\u5F3A\u5236\u63A8\u9001\u5230\u8FDC\u7A0B\u5DF2\u6709\u4ED3\u5E93" aria-hidden="true">#</a> \u65B0\u4ED3\u5E93\u5F3A\u5236\u63A8\u9001\u5230\u8FDC\u7A0B\u5DF2\u6709\u4ED3\u5E93</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git init
git add .
git commit -m update

// \u6DFB\u52A0\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u5173\u8054
git remote add origin git@git.com:emloxe/xxx.git

// \u5F3A\u5236\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u4E14\u8986\u76D6\u8FDC\u7A0B\u4EE3\u7801\u5E93
git push -f --set-upstream origin master:master

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --list // \u67E5\u770B\u914D\u7F6E
git config --global user.name "lemon"
git config --global user.email "qwrtyp@live.cn"
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\u5173\u8054\u8FDC\u7A0B\u4ED3\u5E93 git remote add origin git@github.com:\u7528\u6237\u540D/\u4ED3\u5E93\u540D.git
\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u7684\u7ED1\u5B9A git push --set-upstream origin master
\u67E5\u770B\u5206\u652F\uFF1Agit branch
\u521B\u5EFA\u5206\u652F\uFF1Agit branch &lt;name>
\u5207\u6362\u5206\u652F\uFF1Agit checkout &lt;name>
\u521B\u5EFA+\u5207\u6362\u5206\u652F\uFF1Agit checkout -b &lt;name>
\u5408\u5E76\u67D0\u5206\u652F\u5230\u5F53\u524D\u5206\u652F\uFF1Agit merge &lt;name>
\u5220\u9664\u5206\u652F\uFF1Agit branch -d &lt;name>
\u6DFB\u52A0\u5230\u4E00\u4E2A\u6682\u5B58\u533A git add .
\u5C06\u6682\u5B58\u533A\u91CC\u7684\u6539\u52A8\u7ED9\u63D0\u4EA4\u5230\u672C\u5730\u7684\u7248\u672C\u5E93 git commit &lt;\u5907\u6CE8\u672C\u6B21\u5408\u5E76\u7684\u5185\u5BB9>
\u63A8\u9001\u5206\u652F\uFF1Agit push origin &lt;name>
git remote -v\u663E\u793A\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u521B\u5EFA git \u4ED3\u5E93:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/emloxe/cis.git
git push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5DF2\u6709\u4ED3\u5E93?</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git remote add origin https://gitee.com/emloxe/cis.git
git push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="tag\u6253\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#tag\u6253\u7248\u672C" aria-hidden="true">#</a> tag\u6253\u7248\u672C</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// \u547D\u4EE4\u683C\u5F0F
git tag -a \u6807\u7B7E\u540D -m "\u9644\u6CE8\u4FE1\u606F"
// \u793A\u4F8B
git tag -a v1.0.0 -m "\u5B8C\u6210\u4E86\u6587\u7AE0a\u548C\u6587\u7AE0b\u7684\u64B0\u5199\uFF0C\u8017\u8D39\u65F6\u95F42h\uFF0C\u611F\u89C9\u68D2\u68D2\u7684\uFF01"
git push origin v1.0.0 // \u63A8\u9001
git push origin --tags // \u63A8\u9001\u672C\u5730\u6240\u6709\u6807\u7B7E

git tag -d test_tag\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000//\u672C\u5730\u5220\u9664tag
git push origin :refs/tags/test_tag\u3000\u3000\u3000\u3000//\u672C\u5730tag\u5220\u9664\u4E86\uFF0C\u518D\u6267\u884C\u8BE5\u53E5\uFF0C\u5220\u9664\u7EBF\u4E0Atag
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u64A4\u9500" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500" aria-hidden="true">#</a> \u64A4\u9500</h2>
<h3 id="git-\u653E\u5F03\u672C\u5730\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#git-\u653E\u5F03\u672C\u5730\u4FEE\u6539" aria-hidden="true">#</a> git \u653E\u5F03\u672C\u5730\u4FEE\u6539</h3>
<p>\u5982\u679C\u5728\u4FEE\u6539\u65F6\u53D1\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u800C\u8981\u653E\u5F03\u672C\u5730\u4FEE\u6539\u65F6
<strong>\u4E00\uFF0C\u672A\u4F7F\u7528 git add \u7F13\u5B58\u4EE3\u7801\u65F6</strong>
\u53EF\u4EE5\u4F7F\u7528 <code>git checkout -- filepathname</code> (\u6BD4\u5982\uFF1A <code>git checkout -- readme.md</code>  \uFF0C\u4E0D\u8981\u5FD8\u8BB0\u4E2D\u95F4\u7684 \u201C--\u201D \uFF0C\u4E0D\u5199\u5C31\u6210\u4E86\u68C0\u51FA\u5206\u652F\u4E86\uFF01\uFF01)\u3002\u653E\u5F03\u6240\u6709\u7684\u6587\u4EF6\u4FEE\u6539\u53EF\u4EE5\u4F7F\u7528 git checkout .  \u547D\u4EE4\u3002
\u6B64\u547D\u4EE4\u7528\u6765\u653E\u5F03\u6389\u6240\u6709\u8FD8\u6CA1\u6709\u52A0\u5165\u5230\u7F13\u5B58\u533A\uFF08\u5C31\u662F git add \u547D\u4EE4\uFF09\u7684\u4FEE\u6539\uFF1A\u5185\u5BB9\u4FEE\u6539\u4E0E\u6574\u4E2A\u6587\u4EF6\u5220\u9664\u3002\u4F46\u662F\u6B64\u547D\u4EE4\u4E0D\u4F1A\u5220\u9664\u6389\u521A\u65B0\u5EFA\u7684\u6587\u4EF6\u3002\u56E0\u4E3A\u521A\u65B0\u5EFA\u7684\u6587\u4EF6\u8FD8\u6CA1\u5DF2\u6709\u52A0\u5165\u5230 git \u7684\u7BA1\u7406\u7CFB\u7EDF\u4E2D\u3002\u6240\u4EE5\u5BF9\u4E8Egit\u662F\u672A\u77E5\u7684\u3002\u81EA\u5DF1\u624B\u52A8\u5220\u9664\u5C31\u597D\u4E86\u3002</p>
<p><strong>\u4E8C\uFF0C\u5DF2\u7ECF\u4F7F\u7528\u4E86  git add \u7F13\u5B58\u4E86\u4EE3\u7801</strong>
\u53EF\u4EE5\u4F7F\u7528  <code>git reset HEAD filepathname</code> \uFF08\u6BD4\u5982\uFF1A <code>git reset HEAD readme.md</code>\uFF09\u6765\u653E\u5F03\u6307\u5B9A\u6587\u4EF6\u7684\u7F13\u5B58\uFF0C\u653E\u5F03\u6240\u4EE5\u7684\u7F13\u5B58\u53EF\u4EE5\u4F7F\u7528 <code>git reset HEAD .</code> \u547D\u4EE4\u3002
\u6B64\u547D\u4EE4\u7528\u6765\u6E05\u9664 git  \u5BF9\u4E8E\u6587\u4EF6\u4FEE\u6539\u7684\u7F13\u5B58\u3002\u76F8\u5F53\u4E8E\u64A4\u9500 git add \u547D\u4EE4\u6240\u5728\u7684\u5DE5\u4F5C\u3002\u5728\u4F7F\u7528\u672C\u547D\u4EE4\u540E\uFF0C\u672C\u5730\u7684\u4FEE\u6539\u5E76\u4E0D\u4F1A\u6D88\u5931\uFF0C\u800C\u662F\u56DE\u5230\u4E86\u5982\uFF08\u4E00\uFF09\u6240\u793A\u7684\u72B6\u6001\u3002\u7EE7\u7EED\u7528\uFF08\u4E00\uFF09\u4E2D\u7684\u64CD\u4F5C\uFF0C\u5C31\u53EF\u4EE5\u653E\u5F03\u672C\u5730\u7684\u4FEE\u6539\u3002</p>
<p><strong>\u4E09\uFF0C\u5DF2\u7ECF\u7528 git commit  \u63D0\u4EA4\u4E86\u4EE3\u7801</strong>
\u53EF\u4EE5\u4F7F\u7528 <code>git reset --hard HEAD^</code> \u6765\u56DE\u9000\u5230\u4E0A\u4E00\u6B21commit\u7684\u72B6\u6001\u3002\u6B64\u547D\u4EE4\u53EF\u4EE5\u7528\u6765\u56DE\u9000\u5230\u4EFB\u610F\u7248\u672C\uFF1A<code>git reset --hard  &lt;commitid&gt; </code>
\u4F60\u53EF\u4EE5\u4F7F\u7528 git log \u547D\u4EE4\u6765\u67E5\u770Bgit\u7684\u63D0\u4EA4\u5386\u53F2\u3002git log \u7684\u8F93\u51FA\u5982\u4E0B,\u4E4B\u4E00\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\u7B2C\u4E00\u884C\u5C31\u662F commitid\uFF1A</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>commit cf0d692e982d8e372a07aaa6901c395eec73e356 (HEAD -> master)
Author: toyflivver &lt;2440659688@qq.com>
Date: Thu Sep 28 14:07:14 2017 +0800
\u591A\u4F59\u7684\u7A7A\u884C

commit 14aa4d7ad4ac6fba59b4b8261d32e478e8cc99ff
Author: toyflivver &lt;2440659688@qq.com>
Date: Thu Sep 28 14:06:44 2017 +0800
\u6B63\u5E38\u7684\u4EE3\u7801

commit da3a95c84b6a92934ee30b6728e258bcda75f276
Author: toyflivver &lt;2440659688@qq.com>
Date: Thu Sep 28 13:58:12 2017 +0800
qbf

commit 267466352079296520320991a75321485224d6c6
Author: toyflivver &lt;2440659688@qq.com>
Date: Thu Sep 28 13:40:09 2017 +0800
qbf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u53EF\u4EE5\u770B\u51FA\u73B0\u5728\u7684\u72B6\u6001\u5728 commitid \u4E3A cf0d692e982d8e372a07aaa6901c395eec73e356 \u7684\u63D0\u4EA4\u4E0A\uFF08\u6709 HEAD -&gt; master \u6807\u8BB0\uFF09\u3002</p>
<p><strong>\u56DB\uFF0C\u5DF2\u7ECFpush\u5230\u8FDC\u7A0B\u4ED3\u5E93\u4E86</strong>
\u9996\u5148\u5728\u672C\u5730\u5BF9commit\u8FDB\u884C\u56DE\u6EDA\uFF0C\u7136\u540E\u518D\u5F3A\u5236\u6027\u63D0\u4EA4</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git push origin master -f
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u4FEE\u6539commit" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539commit" aria-hidden="true">#</a> \u4FEE\u6539commit</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git commit --amend -m '\u65B0\u7684\u5185\u5BB9'  //\u4FEE\u6539\u521A\u521A\u7684\u63D0\u4EA4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="git\u5FFD\u7565\u89C4\u5219\u548C-gitignore\u89C4\u5219\u4E0D\u751F\u6548\u7684\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#git\u5FFD\u7565\u89C4\u5219\u548C-gitignore\u89C4\u5219\u4E0D\u751F\u6548\u7684\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> Git\u5FFD\u7565\u89C4\u5219\u548C.gitignore\u89C4\u5219\u4E0D\u751F\u6548\u7684\u89E3\u51B3\u529E\u6CD5</h2>
<p>Git\u5FFD\u7565\u89C4\u5219\uFF1A
\u5728git\u4E2D\u5982\u679C\u60F3\u5FFD\u7565\u6389\u67D0\u4E2A\u6587\u4EF6\uFF0C\u4E0D\u8BA9\u8FD9\u4E2A\u6587\u4EF6\u63D0\u4EA4\u5230\u7248\u672C\u5E93\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4FEE\u6539\u6839\u76EE\u5F55\u4E2D .gitignore \u6587\u4EF6\u7684\u65B9\u6CD5\uFF08\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u5219\u9700\u81EA\u5DF1\u624B\u5DE5\u5EFA\u7ACB\u6B64\u6587\u4EF6\uFF09\u3002\u8FD9\u4E2A\u6587\u4EF6\u6BCF\u4E00\u884C\u4FDD\u5B58\u4E86\u4E00\u4E2A\u5339\u914D\u7684\u89C4\u5219\u4F8B\u5982\uFF1A</p>
<h1 id="\u6B64\u4E3A\u6CE8\u91CA-\u2013-\u5C06\u88AB-git-\u5FFD\u7565" tabindex="-1"><a class="header-anchor" href="#\u6B64\u4E3A\u6CE8\u91CA-\u2013-\u5C06\u88AB-git-\u5FFD\u7565" aria-hidden="true">#</a> \u6B64\u4E3A\u6CE8\u91CA \u2013 \u5C06\u88AB Git \u5FFD\u7565</h1>
<p><em>.sample    # \u5FFD\u7565\u6240\u6709 .sample \u7ED3\u5C3E\u7684\u6587\u4EF6
!lib.sample    # \u4F46 lib.sample \u9664\u5916
/TODO    # \u4EC5\u4EC5\u5FFD\u7565\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 TODO \u6587\u4EF6\uFF0C\u4E0D\u5305\u62EC subdir/TODO
build/    # \u5FFD\u7565 build/ \u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6
doc/</em>.txt   # \u4F1A\u5FFD\u7565 doc/notes.txt \u4F46\u4E0D\u5305\u62EC doc/server/arch.txt</p>
<p>.gitignore\u89C4\u5219\u4E0D\u751F\u6548\u7684\u89E3\u51B3\u529E\u6CD5</p>
<p>\u628A\u67D0\u4E9B\u76EE\u5F55\u6216\u6587\u4EF6\u52A0\u5165\u5FFD\u7565\u89C4\u5219\uFF0C\u6309\u7167\u4E0A\u8FF0\u65B9\u6CD5\u5B9A\u4E49\u540E\u53D1\u73B0\u5E76\u672A\u751F\u6548\uFF0C\u539F\u56E0\u662F.gitignore\u53EA\u80FD\u5FFD\u7565\u90A3\u4E9B\u539F\u6765\u6CA1\u6709\u88AB\u8FFD\u8E2A\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u67D0\u4E9B\u6587\u4EF6\u5DF2\u7ECF\u88AB\u7EB3\u5165\u4E86\u7248\u672C\u7BA1\u7406\u4E2D\uFF0C\u5219\u4FEE\u6539.gitignore\u662F\u65E0\u6548\u7684\u3002\u90A3\u4E48\u89E3\u51B3\u65B9\u6CD5\u5C31\u662F\u5148\u628A\u672C\u5730\u7F13\u5B58\u5220\u9664\uFF08\u6539\u53D8\u6210\u672A\u88AB\u8FFD\u8E2A\u72B6\u6001\uFF09\uFF0C\u7136\u540E\u518D\u63D0\u4EA4\uFF1A</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git rm -r --cached .
git add .
git commit -m 'update .gitignore'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5220\u9664\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u8FDC\u7A0B\u5206\u652F</h2>
<p>1.\u5217\u51FA\u672C\u5730\u5206\u652F\uFF1A</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2.\u5220\u9664\u672C\u5730\u5206\u652F\uFF1A</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch -D BranchName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D-D\u4E5F\u53EF\u4EE5\u662F--delete\uFF0C\u5982\uFF1A</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch --delete BranchName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>3.\u5220\u9664\u672C\u5730\u7684\u8FDC\u7A0B\u5206\u652F\uFF1A</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch -r -D origin/BranchName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>4.\u8FDC\u7A0B\u5220\u9664git\u670D\u52A1\u5668\u4E0A\u7684\u5206\u652F\uFF1A</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git push origin -d BranchName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D-d\u4E5F\u53EF\u4EE5\u662F--delete\uFF0C\u5982\uFF1A</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git push origin --delete BranchName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5F53\u524D\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u6307\u5B9A\u5206\u652F\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u6307\u5B9A\u5206\u652F\u5408\u5E76" aria-hidden="true">#</a> \u5F53\u524D\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u6307\u5B9A\u5206\u652F\u5408\u5E76</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git pull https://gitee.com/TWaver/CIS.git lemon20181104
// \u89E3\u51B3\u51B2\u7A81\uFF0C\u7136\u540E\u518D\u63D0\u4EA4
git push origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF" aria-hidden="true">#</a> \u9519\u8BEF</h2>
<h3 id="error-your-local-changes-to-the-following-files-would-be-overwritten-by-merge" tabindex="-1"><a class="header-anchor" href="#error-your-local-changes-to-the-following-files-would-be-overwritten-by-merge" aria-hidden="true">#</a> error:Your local changes to the following files would be overwritten by merge</h3>
<p>\u610F\u601D\u662F\u6211\u65B0\u4FEE\u6539\u7684\u4EE3\u7801\u7684\u6587\u4EF6\uFF0C\u5C06\u4F1A\u88ABgit\u670D\u52A1\u5668\u4E0A\u7684\u4EE3\u7801\u8986\u76D6</p>
<p>\u65B9\u6CD51\uFF1A\u5982\u679C\u4F60\u60F3\u4FDD\u7559\u521A\u624D\u672C\u5730\u4FEE\u6539\u7684\u4EE3\u7801\uFF0C\u5E76\u628Agit\u670D\u52A1\u5668\u4E0A\u7684\u4EE3\u7801pull\u5230\u672C\u5730\uFF08\u672C\u5730\u521A\u624D\u4FEE\u6539\u7684\u4EE3\u7801\u5C06\u4F1A\u88AB\u6682\u65F6\u5C01\u5B58\u8D77\u6765\uFF09</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git stash
git pull origin master
git stash pop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u6B64\u4E00\u6765\uFF0C\u670D\u52A1\u5668\u4E0A\u7684\u4EE3\u7801\u66F4\u65B0\u5230\u4E86\u672C\u5730\uFF0C\u800C\u4E14\u4F60\u672C\u5730\u4FEE\u6539\u7684\u4EE3\u7801\u4E5F\u6CA1\u6709\u88AB\u8986\u76D6\uFF0C\u4E4B\u540E\u4F7F\u7528add\uFF0Ccommit\uFF0Cpush \u547D\u4EE4\u5373\u53EF\u66F4\u65B0\u672C\u5730\u4EE3\u7801\u5230\u670D\u52A1\u5668\u4E86\u3002</p>
<p>\u65B9\u6CD52\u3001\u5982\u679C\u4F60\u60F3\u5B8C\u5168\u5730\u8986\u76D6\u672C\u5730\u7684\u4EE3\u7801\uFF0C\u53EA\u4FDD\u7559\u670D\u52A1\u5668\u7AEF\u4EE3\u7801\uFF0C\u5219\u76F4\u63A5\u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C\uFF0C\u518D\u8FDB\u884Cpull\uFF1A</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git reset --hard
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5176\u4ED6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u914D\u7F6E" aria-hidden="true">#</a> \u5176\u4ED6\u914D\u7F6E</h2>
<h3 id="windows-\u4E0Agit\u5927\u5C0F\u5199\u4E0D\u654F\u611F-\u53EF\u4EE5\u8BBE\u7F6E\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#windows-\u4E0Agit\u5927\u5C0F\u5199\u4E0D\u654F\u611F-\u53EF\u4EE5\u8BBE\u7F6E\u5982\u4E0B" aria-hidden="true">#</a> windows \u4E0Agit\u5927\u5C0F\u5199\u4E0D\u654F\u611F\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5982\u4E0B</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config core.ignorecase false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u89E3\u51B3-windows-git-bash\u3001linux-\u4E0B\u7684\u4E2D\u6587\u8F6C\u7801\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3-windows-git-bash\u3001linux-\u4E0B\u7684\u4E2D\u6587\u8F6C\u7801\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3 Windows git Bash\u3001Linux \u4E0B\u7684\u4E2D\u6587\u8F6C\u7801\u95EE\u9898</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --global core.quotepath false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u914D\u7F6E\u6362\u884C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6362\u884C\u7B26" aria-hidden="true">#</a> \u914D\u7F6E\u6362\u884C\u7B26</h3>
<p>\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u5BF9\u6362\u884C\u7B26\u7684\u5B9A\u4E49\u4F1A\u6709\u6240\u4E0D\u540C\uFF0CUnix\u6216\u7C7BUnix\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6362\u884C\u7B26\u53EB\u505ALF\uFF0C\u800Cwindows\u7CFB\u7EDF\u7684\u53EB\u505ACRLF\uFF0C\u4E8C\u8005\u5177\u6709\u5F88\u5927\u7684\u533A\u522B</p>
`,headers:[{level:2,title:"\u57FA\u7840\u64CD\u4F5C",slug:"\u57FA\u7840\u64CD\u4F5C",children:[{level:3,title:"\u62C9\u53D6\u4ED3\u5E93\u6587\u4EF6",slug:"\u62C9\u53D6\u4ED3\u5E93\u6587\u4EF6",children:[]},{level:3,title:"\u63D0\u4EA4\u4EE3\u7801",slug:"\u63D0\u4EA4\u4EE3\u7801",children:[]},{level:3,title:"\u5F3A\u5236\u63A8\u9001\u5230\u6307\u5B9A\u5206\u652F",slug:"\u5F3A\u5236\u63A8\u9001\u5230\u6307\u5B9A\u5206\u652F",children:[]},{level:3,title:"\u65B0\u4ED3\u5E93\u5F3A\u5236\u63A8\u9001\u5230\u8FDC\u7A0B\u5DF2\u6709\u4ED3\u5E93",slug:"\u65B0\u4ED3\u5E93\u5F3A\u5236\u63A8\u9001\u5230\u8FDC\u7A0B\u5DF2\u6709\u4ED3\u5E93",children:[]}]},{level:2,title:"\u57FA\u672C\u547D\u4EE4",slug:"\u57FA\u672C\u547D\u4EE4",children:[]},{level:2,title:"tag\u6253\u7248\u672C",slug:"tag\u6253\u7248\u672C",children:[]},{level:2,title:"\u64A4\u9500",slug:"\u64A4\u9500",children:[{level:3,title:"git \u653E\u5F03\u672C\u5730\u4FEE\u6539",slug:"git-\u653E\u5F03\u672C\u5730\u4FEE\u6539",children:[]},{level:3,title:"\u4FEE\u6539commit",slug:"\u4FEE\u6539commit",children:[]}]},{level:2,title:"Git\u5FFD\u7565\u89C4\u5219\u548C.gitignore\u89C4\u5219\u4E0D\u751F\u6548\u7684\u89E3\u51B3\u529E\u6CD5",slug:"git\u5FFD\u7565\u89C4\u5219\u548C-gitignore\u89C4\u5219\u4E0D\u751F\u6548\u7684\u89E3\u51B3\u529E\u6CD5",children:[]},{level:2,title:"\u5220\u9664\u8FDC\u7A0B\u5206\u652F",slug:"\u5220\u9664\u8FDC\u7A0B\u5206\u652F",children:[]},{level:2,title:"\u5F53\u524D\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u6307\u5B9A\u5206\u652F\u5408\u5E76",slug:"\u5F53\u524D\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u6307\u5B9A\u5206\u652F\u5408\u5E76",children:[]},{level:2,title:"\u9519\u8BEF",slug:"\u9519\u8BEF",children:[{level:3,title:"error:Your local changes to the following files would be overwritten by merge",slug:"error-your-local-changes-to-the-following-files-would-be-overwritten-by-merge",children:[]}]},{level:2,title:"\u5176\u4ED6\u914D\u7F6E",slug:"\u5176\u4ED6\u914D\u7F6E",children:[{level:3,title:"windows \u4E0Agit\u5927\u5C0F\u5199\u4E0D\u654F\u611F\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5982\u4E0B",slug:"windows-\u4E0Agit\u5927\u5C0F\u5199\u4E0D\u654F\u611F-\u53EF\u4EE5\u8BBE\u7F6E\u5982\u4E0B",children:[]},{level:3,title:"\u89E3\u51B3 Windows git Bash\u3001Linux \u4E0B\u7684\u4E2D\u6587\u8F6C\u7801\u95EE\u9898",slug:"\u89E3\u51B3-windows-git-bash\u3001linux-\u4E0B\u7684\u4E2D\u6587\u8F6C\u7801\u95EE\u9898",children:[]},{level:3,title:"\u914D\u7F6E\u6362\u884C\u7B26",slug:"\u914D\u7F6E\u6362\u884C\u7B26",children:[]}]}],git:{updatedTime:1641347059e3,contributors:[{name:"ZWJ",email:"qwrtyp@live.cn",commits:1}]},filePathRelative:"other/git.md"};export{e as data};
