const fs = require('fs')
const path = require('path')

const arr = require('../routes')

function getSideBar(dir) {
    const bars = []
    let curDir = path.join(path.resolve(__dirname, '../../'), dir)
    let files = fs.readdirSync(curDir, { withFileTypes: false })
    files.forEach(filename => {
        if (filename.indexOf('.') == -1) {
            let path = `${dir}${filename}/`
            let sort = getFolderField(filename);
            bars.push({ title: filename.replace(/[0-9]+[-]/,''), children: getSideBar(path), sort })
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


function getFolderField(name) {
    let i = name.indexOf('-');
    if (i == -1) return 0;
    return parseInt(name.substring(0, i + 1));
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
