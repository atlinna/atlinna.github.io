(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{593:function(e,t,r){"use strict";r.r(t);var v=r(13),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[e._v("#")]),e._v(" Vue")]),e._v(" "),r("h2",{attrs:{id:"虚拟-dom-树-vnode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-树-vnode"}},[e._v("#")]),e._v(" 虚拟 dom 树 VNode")]),e._v(" "),r("p",[r("strong",[e._v("虚拟 dom 树实际上是一个对象，当你的数据发生变化的时候，由于在初始阶段 vue 进行了注入进行了数据的监听和绑定，数据改变会通知 vue 然后 vue 会生成一个新的虚拟 dom 树来和原来的虚拟 dom 树进行对比 由于是对象 效率更快。")])]),e._v(" "),r("h2",{attrs:{id:"模板渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#模板渲染"}},[e._v("#")]),e._v(" 模板渲染")]),e._v(" "),r("p",[e._v("template 将数据 --》 Vue --》拿到的是字符串 ——》 处理 --》 生成元素 --》挂载到页面")]),e._v(" "),r("h2",{attrs:{id:"render-方法-生成虚拟-dom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#render-方法-生成虚拟-dom"}},[e._v("#")]),e._v(" render 方法 生成虚拟 dom")]),e._v(" "),r("p",[e._v("创建虚拟 dom（Vdom） vue 中 有一个 render 方法 而 这个 render 方法的返回值 就是我们 要生成的虚拟 dom 树\n初始化的时候会先判断是否存在 render 方法 如果存在 直接运行 render 方法 然后将 render 函数的返回结果直接作为生成的 Vdom 树\n如果没有 render 函数的话 会判断 vue 是否有 template\n如果存在 template 则会将 template 作为模板然后编译为 render 函数\n如果没有 则会将 $el 对应的元素 包含子元素 全部 当做一个模板 然后 进行编译\n总之 -- 不管怎样 都会有一个模板\n树形结构只支持单根节点")]),e._v(" "),r("h2",{attrs:{id:"挂载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[e._v("#")]),e._v(" 挂载")]),e._v(" "),r("p",[e._v("可以通过 el 配置 将生成的元素挂载到页面\n也就是说可以只用 vue 控制部分区域\nVue 实例中 还有一个 $mount 方法 可以用来挂载元素 目前和 el 方式 相同 没有差别")]),e._v(" "),r("p",[e._v("完整流程")]),e._v(" "),r("ul",[r("li",[e._v("实例创建 创建 Vue 的实例")]),e._v(" "),r("li",[e._v("注入 注入 Vue 及 Vue 的一些方法")]),e._v(" "),r("li",[e._v("根据模板编译生成虚拟 dom 树\n"),r("ul",[r("li",[e._v("首次渲染 挂载到元素上")])])])]),e._v(" "),r("p",[e._v("数据发生变化时 --》 数据变动 响应式通知 Vue 重新渲染")]),e._v(" "),r("ul",[r("li",[e._v("重新生成虚拟 dom 树")]),e._v(" "),r("li",[e._v("比较新旧两个 Vdom 树的差异")]),e._v(" "),r("li",[e._v("将差异应用到真实 dom --》完成渲染")])])])}),[],!1,null,null,null);t.default=a.exports}}]);