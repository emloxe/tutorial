var navbar = require('./navbar');
var sidebar = require('./sidebar');


module.exports = {
  title: 'TUTORIAL',  // 设置网站标题
  description : 'W.J. Zhang教程教程网站，张雯瑾教程网站，emloxe',
  base : '/tutorial/',
  themeConfig : {
    navbar,
    sidebar,
    sidebarDepth : 1,

    displayAllHeaders: true,
    // sidebar: 'auto',

    lastUpdated: 'Last Updated',

    repo: 'emloxe/tutorial',
    repoLabel: 'GitHub',
    docsRepo: 'emloxe/tutorial',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页'
  }
}