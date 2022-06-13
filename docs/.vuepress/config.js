const utils = require('./utils/index.js')
module.exports = {
    title: 'Mr.Zhou（周始）',
    keywords: '前端开发',
    description: '梦开始的地方',
    repo: '',
    base: '',
    author: '周始',
    record: 'not yet haha···',
    startYear: '2022',
    theme: 'reco',
    lastUpdated: 'Last Updated',
    themeConfig: {
        huawei: true,
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
        ],
        ["vuepress-plugin-boxx"],
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功!"
            }
        }],
        [
            "dynamic-title",
            {
                showIcon: "/favicon.ico",
                showText: "欢迎来到梦的起点",
                hideIcon: "/failure.ico",
                hideText: "哦呦~客观不要急",
                recoverTime: 2000
            }
        ]
    ]
}
