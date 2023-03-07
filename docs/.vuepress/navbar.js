module.exports =  [
      { text: 'js', link: '/js/' },
      { text: 'react', link: '/react/' },
      { text: 'vue', link: '/vue/'},
      { 
        text: '其他',
        children: [
          { text: 'css', link: '/other/css' },
          { text: 'GIT', link: '/other/git' },
          { text: 'axios', link: '/other/axios' },
          { text: 'MYSQL', link: '/other/mysql' },
          { text: 'VS code', link: '/other/vscode' },
          { text: 'sequelize', link: '/other/sequelize' },
          // { text: 'yarn', link: '/other/yarn' },
          { text: 'moment', link: '/other/moment' },
          { text: '数据结构与算法', link: '/DataStructures&Algorithms/' },


        ]    
      },
      {
        text: '关于',
        children: [
          { text: '本站', link: '/about' },
          // { text: '作者', link: 'https://emloxe.github.io/' },
          { text: '推荐', 
            children: [
              // { text: '博客', link: 'https://emloxe.github.io/blog/' },
              { text: '笔记', link: 'https://emloxe.github.io/note/' }
            ] 
          }
        ]
      }
    ]