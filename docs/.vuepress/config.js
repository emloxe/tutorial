module.exports = {
  title: 'TUTORIAL',  // 设置网站标题
  description : 'W.J. Zhang教程教程网站，张雯瑾教程网站，emloxe',
  base : '/tutorial/',
  themeConfig : {
    nav : [
      { text: 'test1', link: '/test1/' },
      { text: 'test2', link: '/DataStructures&Algorithms/' },
      { text: 'test3', link: '/twaver/' },
      {
        text: '关于',
        items: [
          { 
            text: '关于',
            items: [
              { text: '本站', link: '/about' },
              { text: '作者', link: 'https://emloxe.github.io/' },
            ] 
          },
          { text: '推荐', 
            items: [
              { text: '博客', link: 'https://emloxe.github.io/blog/' },
              { text: '笔记', link: 'https://emloxe.github.io/note/' }
            ] 
          }
        ]
      },
    ],
    sidebar: {
      '/test1/': [
        '',
        'one',
        'two',
      ],
      '/test2/': [
        '',
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
      '/twaver/': [
        {
          title: 'twaver',
          collapsable: false,
          children: [],
        },
        {
          title: 't',
          collapsable: false,
          children: ['billboardChange'],
        },
        {
          title: 'tt',
          collapsable: false,
          children: [],
        },
      ],
    },
    sidebarDepth : 3,

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