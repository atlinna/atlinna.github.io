const utils = require('./utils/index.js')
module.exports = {
    title: 'start to life',
    keywords: '前端开发',
    description: '互相探讨，共同学习',
    repo: '',
    base: '',
    lastUpdated: 'Last Updated',
    themeConfig: {
        sidebar: utils.getContents(),
        logo: '',
        nav: utils.getTableBars()
    }
}
