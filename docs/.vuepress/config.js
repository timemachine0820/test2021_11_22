const headConf = require('./config/headConf.js')
const pluginsConf = require('./config/pluginsConf.js')
const navConf = require('./config/navConf.js')



module.exports = {
  base: "/test2021_11_22/",
  title: 'tao的blog',
  description: 'description',
  head: headConf,
  plugins: pluginsConf,
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/logo.png',
    nav: navConf,
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
