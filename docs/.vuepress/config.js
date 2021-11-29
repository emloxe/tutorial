module.exports = {
  title: 'TUTORIAL',  // 设置网站标题
  description : 'W.J. Zhang教程教程网站，张雯瑾教程网站，emloxe',
  base : '/tutorial/',
  themeConfig : {
    nav : [
      { text: 'js', link: '/js/' },
      { text: 'react', link: '/react/' },
      { text: 'vue', link: '/vue/'},
      { 
        text: '其他',
        items: [
          { text: 'GIT', link: '/other/git' },
          { text: 'AXIOS', link: '/other/axios' },
          { text: 'MYSQL', link: '/other/mysql' },
          { text: 'VSCODE', link: '/other/vscode' },
          { text: '数据结构与算法', link: '/DataStructures&Algorithms/' },
        ]    
      },
      {
        text: '关于',
        items: [
          { text: '本站', link: '/about' },
          // { text: '作者', link: 'https://emloxe.github.io/' },
          { text: '推荐', 
            items: [
              // { text: '博客', link: 'https://emloxe.github.io/blog/' },
              { text: '笔记', link: 'https://emloxe.github.io/note/' }
            ] 
          }
        ]
      },
    ],
    sidebar: {
      '/js/': [
        {
          title: '基本',
          collapsable: false,
          children: [
            'Array',
            'Date',
            'dom',
            'RegExp',
          ]
        },
        {
          title: '实例',
          collapsable: false,
          children: ['util', 'upload']
        },
      ],
      '/react/': [
        {
          title: '基本',
          collapsable: false,
          children: [
            'hook',
            '路由',
          ]
        },
        {
          title: 'and',
          collapsable: false,
          children: ['动态使用Icon']
        },
      ],
      '/vue/': [
        {
          title: '基本',
          collapsable: false,
          children: [
            '多页面入口'
          ]
        },
        {
          title: '插件',
          collapsable: false,
          children: ['vuex']
        },
        {
          title: '其他',
          collapsable: false,
          children: ['打包']
        },
      ],
      '/DataStructures&Algorithms/': [
        {
          title: '数据结构',
          collapsable: false,
          children: []

        },
        {
          title: '算法',
          collapsable: false,
          children: ['sort']
        },
      ],
    },
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