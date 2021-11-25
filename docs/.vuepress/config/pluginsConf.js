const moment = require('moment');
moment.locale("zh-cn")

const secret = require('./config/secret.js')

module.exports = {
  '@vuepress/last-updated':
  {
    transformer: (timestamp, lang) => {
      // 不要忘了安装 moment
      return moment(timestamp).format("LLLL")
    }
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',
    autoCreateIssue: true,
    // 其他的 Vssue 配置
    owner: 'timemachine0820',
    repo: 'test2021_11_22',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
  },
}
