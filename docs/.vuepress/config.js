module.exports = {
  title: 'tao的blog',
  description: 'description',
  head: [
    ['meta', { name: 'keywords', content: 'tao,blog' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  lastUpdated: '更新时间',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '主题', link: '/css/' },
      { text: '插件', link: '/javascript/' },
      {
        text: '语言',
        items: [
          { text: '中文', link: '#' },
          { text: '英文', link: '#' }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/css/': ['', 'c-a'],
      '/javascript/': ['', 'j-a'],
      '/': [
        'about'
      ]
    }
    // [
    //   ['/css/', '介绍'],
    //   '/css/c-a'
    // ],
    // displayAllHeaders: true
  }
}
