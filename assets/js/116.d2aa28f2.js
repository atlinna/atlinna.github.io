(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{705:function(t,a,v){"use strict";v.r(a);var e=v(10),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"组件式开发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件式开发"}},[t._v("#")]),t._v(" 组件式开发")]),t._v(" "),v("h2",{attrs:{id:"小技巧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小技巧"}},[t._v("#")]),t._v(" 小技巧")]),t._v(" "),v("ul",[v("li",[t._v("在 css 中可以使用~@ 表示 src 目录")]),t._v(" "),v("li",[t._v("在 js 中使用@表示 src 目录")])]),t._v(" "),v("h2",{attrs:{id:"问题-v-if-和-v-show-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题-v-if-和-v-show-有什么区别"}},[t._v("#")]),t._v(" 问题 v-if 和 v-show 有什么区别")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v(" v-if能够控制是否生成vnode，简洁控制了是否生成dom元素。 只有当v-if为true的时候才会生成vnode和dom元素。\n v-show始终都会生成vnode，也就是说不管怎样都会生成dom元素，它只是控制dom的display属性，当v-show为true时不作任何处理，为false的时候dom的display属性为none\n\n 作用：\n v-if可以有效的减少树的节点和渲染量。但也会导致树的不稳定。v-show不会导致树的不稳定 但是无法减少节点和渲染量。\n\n应用：\n 开发中显示状态频繁变化的应该使用v-show 来保证树的稳定，变化少的应使用v-if来减少渲染量\n\n")])])]),v("h1",{attrs:{id:"组件通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件通信"}},[t._v("#")]),t._v(" 组件通信")]),t._v(" "),v("ul",[v("li",[t._v("父组件流向子组件")]),t._v(" "),v("li",[t._v("子组件没有权利更改父组件的数据")])]),t._v(" "),v("h1",{attrs:{id:"组件事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件事件"}},[t._v("#")]),t._v(" 组件事件")]),t._v(" "),v("p",[t._v("父组件 --》 数据 --》子组件\n子组件 --》 事件 --》是否修改数据 --》 父组件")]),t._v(" "),v("p",[t._v('定义事件\n@click="handleClick"\n@click="handleClick($event)"')]),t._v(" "),v("p",[t._v("需要用到 vue 的实例成员\n$emit -- 表示抛出一个事件")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("子组件抛出事件 让父组件接收\nthis.$emit('事件名--pageChange',传递的参数--val)；\n\n父组件接收到 子组件抛出的事件然后 注册事件对事件进行处理\n@pageChange=\"注册的事件名($event)\"\n\n")])])]),v("h3",{attrs:{id:"练习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[t._v("#")]),t._v(" 练习")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("分页组件 Pager")]),t._v(" "),v("ul",[v("li",[t._v("属性：\n"),v("ul",[v("li",[t._v("current -- 当前页面")]),t._v(" "),v("li",[t._v("total -- 总数据")]),t._v(" "),v("li",[t._v("limit -- 页容量")]),t._v(" "),v("li",[t._v("visibleNumber -- 可见页码数")])])])])]),t._v(" "),v("li",[v("p",[t._v("Empty")]),t._v(" "),v("ul",[v("li",[t._v("属性：\n"),v("ul",[v("li",[t._v("content -- 内容")])])])])]),t._v(" "),v("li",[v("p",[t._v("ImageLoader")])]),t._v(" "),v("li",[v("p",[t._v("Contact")])]),t._v(" "),v("li",[v("p",[t._v("Menu")])]),t._v(" "),v("li",[v("p",[t._v("SiteASide")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);