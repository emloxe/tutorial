module.exports =  {
  '/js/': [
    {
      text: '基本',
      collapsable: false,
      children: [
        'Array',
        'Date',
        'dom',
        'RegExp',
      ]
    },
    {
      text: '实例',
      collapsable: false,
      children: ['util', 'upload']
    },
  ],
  '/react/': [
    {
      text: '基本',
      collapsable: false,
      children: [
        'hook',
        'route',
      ]
    },
    {
      text: 'antd',
      collapsable: false,
      children: ['icon']
    },
  ],
  '/vue/': [
    {
      text: '基本',
      collapsable: false,
      children: [
        'pages'
      ]
    },
    {
      text: '插件',
      collapsable: false,
      children: ['vuex']
    },
    {
      text: '其他',
      collapsable: false,
      children: ['pack']
    },
  ],
  '/DataStructures&Algorithms/': [
    {
      text: '数据结构',
      collapsable: false,
      children: []

    },
    {
      text: '算法',
      collapsable: false,
      children: ['sort']
    },
  ],
}