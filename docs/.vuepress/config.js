const utils = require('./utils/index.js')
module.exports = {
    title: 'Mr.Zhou',
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
                showText: "Mr.Designer",
                hideIcon: "/failure.ico",
                hideText: "快回来我的宝",
                recoverTime: 2000
            }
        ]
    ]
}
