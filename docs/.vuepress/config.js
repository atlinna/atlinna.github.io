const utils = require('./utils/index.js')
module.exports = {
    title: 'start to life',
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
            '@vuepress-reco/vuepress-plugin-kan-ban-niang', {
                theme: ['blackCat'],
                clean: false,
                messages: {
                    welcome: '欢迎来到我的博客',
                    home: '这是我家嗷',
                    theme: '你在狗叫什马东西？',
                    close: '玛德，老子不伺候了'
                },
                messageStyle: { right: '68px', bottom: '290px' },
                width: 250,
                height: 320
            }
        ],
        [
            'vuepress-plugin-cursor-effects', {
                size: 2,
                shape: 'star',
                zIndex: 9999999999
            }
        ]
    ]
}
