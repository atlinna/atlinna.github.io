(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{714:function(e,r,a){"use strict";a.r(r);var t=a(10),s=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"浏览器组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器组成"}},[e._v("#")]),e._v(" 浏览器组成")]),e._v(" "),a("p",[e._v("浏览器由一下几个部分组成：")]),e._v(" "),a("ol",[a("li",[e._v("用户界面（user interface） 用于呈现浏览器窗口部件 如：地址栏、前进后退、书签、顶部菜单等。")]),e._v(" "),a("li",[e._v("浏览器引擎（brower engine）用户在用户界面和渲染引擎之间传递指令，如点击了某个页面的某个按钮。")]),e._v(" "),a("li",[e._v("渲染引擎（rendering engine）负责解析HTML，CSS，并将解析的内容显式到屏幕上。（"),a("strong",[e._v("浏览器内核")]),e._v("）")]),e._v(" "),a("li",[e._v("网络（networking）用户网络调用，如 HTTP 请求")]),e._v(" "),a("li",[e._v("用户界面后端（UI backend）用于绘制基本的窗口小部件，如下拉列表，文本框，按钮等。向上提供公开的接口，向下调用操作系统的用户界面。")]),e._v(" "),a("li",[e._v("JS 解释器（JavaScript interpreter）解释执行JS代码，"),a("strong",[e._v("JS引擎")])]),e._v(" "),a("li",[e._v("数据存储（data storage）用户保存数据到磁盘中，如 cookie、localStorage等。")])]),e._v(" "),a("h3",{attrs:{id:"资源提示关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源提示关键字"}},[e._v("#")]),e._v(" 资源提示关键字")]),e._v(" "),a("h4",{attrs:{id:"defer-和-async"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defer-和-async"}},[e._v("#")]),e._v(" defer 和 async")]),e._v(" "),a("p",[e._v("现代浏览器引入了 defer 和 async")]),e._v(" "),a("p",[e._v("都表示，js 不要阻塞 html 的解析，但是有部分不同\n1、async\nasync 表示的是下载 js 不会阻塞 DOM 树的构建，但是当执行 js 文件的时候，会阻塞 DOM 树的构建。")]),e._v(" "),a("p",[e._v("2、defer\ndefer 表示下载 js 不会阻塞 DOM 树构建，等待 DOM 树构建完成才会执行 js")]),e._v(" "),a("h4",{attrs:{id:"preload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preload"}},[e._v("#")]),e._v(" preload")]),e._v(" "),a("p",[e._v("preload 预加载，它通过声明向浏览器声明一个需要提前加载的资源，当资源真正被使用的时候"),a("strong",[e._v("立即执行")]),e._v("，就无需等待网络的消耗\n使用 preload 需要 link 标签引入")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    \x3c!-- 表示预加载 js 文件 --\x3e\n    <link rel="preload" href="./1.js" as="script"> \n    \x3c!-- 表示预加载 css 文件 --\x3e\n    <link rel="preload" href="./1.css" as="style">\n')])])]),a("p",[e._v("优点：")]),e._v(" "),a("ul",[a("li",[e._v("允许浏览器设置资源优先级，从而允许 Web 开发人员优化某些资源的交付")]),e._v(" "),a("li",[e._v("使浏览器能够确定资源类型，因此它可以判断将来是否可以重用相同的资源")]),e._v(" "),a("li",[e._v("浏览器可以通过引用 as 属性中定义的内容来确定请求是否符合内容安全策略")]),e._v(" "),a("li",[e._v("浏览器可以根据资源类型发送何使的 Accept 头")])]),e._v(" "),a("h4",{attrs:{id:"prefetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefetch"}},[e._v("#")]),e._v(" prefetch")]),e._v(" "),a("p",[e._v("prefetch 是一种利用浏览器的空闲时间加载"),a("strong",[e._v("非当前页面")]),e._v("将来可能用到的资源，以便加快后续页面的首屏速度。")]),e._v(" "),a("p",[e._v("prefetch 加载的资源可以获取非当前页面所需资源，并将其放入缓存至少 5 分钟，当页面跳转时，未完成的 prefetch 请求不会被中断。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    \x3c!-- 表示预加载 js 文件 --\x3e\n    <link rel="prefetch" href="./1.js" as="script"> \n    \x3c!-- 表示预加载 css 文件 --\x3e\n    <link rel="prefetch" href="./1.css" as="style">\n')])])]),a("h5",{attrs:{id:"dns-prefetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-prefetch"}},[e._v("#")]),e._v(" DNS prefetch")]),e._v(" "),a("p",[e._v("DNS prefetch 允许浏览器在用户浏览时在后台对页面进行 DNS 查找，用户一旦点击链接就已经进行了 DNS 查找。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    <link rel="dns-prefetch" href="//baidu.com"> \n')])])]),a("h4",{attrs:{id:"prerender"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerender"}},[e._v("#")]),e._v(" prerender")]),e._v(" "),a("p",[e._v("prerender 与 prefetch 很像，但是 prefetch 只是收集资源，当跳转到页面才会渲染， "),a("strong",[e._v("而 prerender 是收集资源后，直接在后台渲染整个页面")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    <link rel="prerender" href="//baidu.com"> \n')])])]),a("h4",{attrs:{id:"preconnect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preconnect"}},[e._v("#")]),e._v(" preconnect")]),e._v(" "),a("p",[e._v("提前建立网络链接。")])])}),[],!1,null,null,null);r.default=s.exports}}]);