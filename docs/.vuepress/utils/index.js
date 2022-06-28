const fs = require('fs')
const path = require('path')

const arr = [
    // 导航栏
    { text: '首页', link: '/' },
    { text: 'HTML', link: '/html_docs/' },
    { text: 'CSS', link: '/css_docs/' },
    { text: 'JS', link: '/js_docs/' },
    { text: 'Vue', link: '/Vue/' },
    { text: '设计模式', link: '/设计模式/' },
    { text: '数据结构与算法', link: '/problem/' },
    { text: '手写系列', link: '/手写/' },
    { text: '其他', link: '/Other/' },
]

function getSideBar(dir) {
    const bars = []
    let curDir = path.join(path.resolve(__dirname, '../../'), dir)
    let files = fs.readdirSync(curDir, { withFileTypes: false })
    files.forEach(filename => {
        if (filename.indexOf('.') == -1) {
            let path = `${dir}${filename}/`
            bars.push({ title: filename, children: getSideBar(path) })
        }
        if (filename.endsWith('.md') && filename !== 'index.md') {
            let s = getSortField(filename)
            let name = filename.replace('.md', '')
            let art_name = name.replace(`@${s}`, '')
            bars.push({ text: art_name, title: art_name, path: `${dir}${name}`, sort: s })
        }
    })

    return sortBars(bars);
}
/**
 * 添加侧边栏排序功能 
 */
function getSortField(n) {
    return n.substring(n.indexOf('@') + 1, n.length - 3)
}

function sortBars(arr) {
    return arr.sort((a, b) => a.sort - b.sort)
}

function getContents() {
    let sideBars = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].link == '/') continue
        sideBars[arr[i].link] = getSideBar(arr[i].link)
    }

    return sideBars
}

function getTableBars() {
    return arr
}

module.exports = { getContents, getTableBars }
