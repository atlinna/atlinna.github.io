## Web-API
与标准库不通，WebApi是浏览器提供的一套API，用来操作浏览器窗口合界面。

WebApi包含两个部分：
+ BOM （Browser Object Model）浏览器模型，提供合浏览器相关的操作
+ DOM （Document Object Model）文档模型，提供合页面相关的操作

### BOM
#### window.open
打开一个新的标签页

#### window.close
关闭标签页
```
  let win = window.open('https://www.baidu.com')
  win.close()
```


#### window.location （都可重新赋值）
+ href 得到地址栏的地址
+ reload 刷新当前页面
其余为地址信息：协议、域名、端口号、参数、hash

#### window.history
+ back 后退
+ forward 前进
+ go(val) 后退一步 val < 0 为后退步数，大于0 为前进步数。
+ pushState 不刷新页面改变地址
+ replaceState 替换记录

### DOM
#### 获取DOM
+ getElementById
+ getElementsByClassName
+ getElementsByTagName      通过标签名
+ querySelector             根据CSS选择器来选中标签
+ querySelectorAll

##### document.documentElement
获取 html 元素

##### document.head
可以拿到 head 标签，往里面动态加入 script 标签

##### Element.children
可以拿到 Element 中的子元素

##### Element.childNodes
可以拿到 Element 中的子节点（包含文本）


#### 创建DOM
document.createElement()

#### 改变DOM结构
+ remove 自杀，去掉自己
+ removeChild 去掉某个子节点
+ insertBefore 将节点插入到某个节点前
+ appendChild  在末尾添加节点

#### getComputedStyle
获取计算后的样式
