const moment = require('moment');

module.exports = {
  base: "/test2021_11_22/",
  title: 'tao的blog',
  description: 'description',
  head: [
    ['meta', { name: 'keywords', content: 'tao,blog' }],
    ['link', { rel: 'icon', href: "$withBase('/favicon.ico')" }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          moment.locale("zh-cn")
          return moment(timestamp).format("LLLL")
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '更新时间',
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
