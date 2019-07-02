module.exports = {
  title: 'Zhang W.J.网站',  // 设置网站标题
  description : '张雯瑾网站',
  base : '/guide/',
  themeConfig : {
    nav : [
        { text: 'test1', link: '/test1/' },
        { text: 'test2', link: '/test2/' },
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
        { text: 'GitHub', link: 'https://github.com/emloxe/guide' }
    ],
    sidebar: {
      '/test1/': [
        '',
        'one',
      ],
      '/test2/': [
        '',
      ]
    },
    sidebarDepth : 3,
  }
}