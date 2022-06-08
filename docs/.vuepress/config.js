const utils = require('./utils/index.js')
module.exports = {
    title: '每一个不曾起舞的日子，都是对生命的辜负',
    keywords: '前端开发',
    description: '互相探讨，共同学习',
    repo: '',
    base: '',
    theme: 'reco',
    lastUpdated: 'Last Updated',
    themeConfig: {
        sidebar: utils.getContents(),
        logo: '',
        nav: utils.getTableBars()
    },
    plugins: [
        [
            'vuepress-plugin-cursor-effects', {
                size: 2,
                shape: 'star',
                zIndex: 9999999999
            }
        ]
    ]
}
