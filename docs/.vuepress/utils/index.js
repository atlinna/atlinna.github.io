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
            let name = filename.replace('.md', '')
            bars.push({ text: name, title: name, path: `${dir}${name}` })
        }
    })
    return bars;
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
