const moment = require('moment');

module.exports = {
  base: "/test2021_11_22/",
  title: 'tao的blog',
  description: 'description',
  head: [
    ['meta', { name: 'keywords', content: 'tao,blog' }],
    ['link', { rel: 'icon', href: "$withBase('/favicon.ico')" }]
  ],
  plugins:
  {
    '@vuepress/last-updated':
    {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        moment.locale("zh-cn")
        return moment(timestamp).format("LLLL")
      }
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',
      // autoCreateIssue: true,
      // 其他的 Vssue 配置
      owner: 'timemachine0820',
      repo: 'docs',
      clientId: 'f564fd82c2663c4e46d1',
      clientSecret: '41682c9244f493fa7a8e5854171bbd1ac1d5cb15',
    },
  },
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
