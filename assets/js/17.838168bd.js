(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{608:function(e,t,v){"use strict";v.r(t);var r=v(7),u=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"api-与-数据响应式变化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#api-与-数据响应式变化"}},[e._v("#")]),e._v(" API 与 数据响应式变化")]),e._v(" "),v("h3",{attrs:{id:"为什么-vue3-中去掉了-vue-构造函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么-vue3-中去掉了-vue-构造函数"}},[e._v("#")]),e._v(" 为什么 vue3 中去掉了 vue 构造函数")]),e._v(" "),v("p",[e._v("Vue2 的全局构造函数带出来很多问题（设计层面的）：")]),e._v(" "),v("ul",[v("li",[e._v("1、调用构造函数的静态方法会对所有 vue 应用生效，不利于隔离不同应用")]),e._v(" "),v("li",[e._v("2、vue2 的构造函数继承了太多功能，不利于 tree shaking，vue3把这些功能使用普通函数导出，能够充分利用 tree shaking 优化打包体积")]),e._v(" "),v("li",[e._v("3、vue2 没有把组件实例和 vue 应用两个概念区分开，在 vue2 中，通过 new Vue 创建的对象，即是一个 vue 应用，同时又是一个特殊的 vue 组件。vue3 中，把两个概念区分开来，通过 createApp 创建的对象，是一个 vue 应用，它内部提供的方法是针对整个应用的，而不再是一个特殊的组件。")])]),e._v(" "),v("h3",{attrs:{id:"聊聊-vue3-数据响应式的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#聊聊-vue3-数据响应式的理解"}},[e._v("#")]),e._v(" 聊聊 vue3 数据响应式的理解")]),e._v(" "),v("ul",[v("li",[e._v("Vue3 不再使用 Object.defineProperty 的方式定义完成数据响应式，而是使用 Proxy")]),e._v(" "),v("li",[e._v("Proxy 本身效率比 Object.defineProperty 更高，由于不必递归遍历所有属性，而是直接得到一个 Proxy。所以在 vue3 中，对数据的访问是动态的，当访问某个属性的时候，再动态的获取和设置，这就极大的提升了在组件初始阶段的效率。")]),e._v(" "),v("li",[e._v("由于Proxy可以监控到成员的新增和删除，因此，在 vue3 中新增成员、删除成员、索引访问等均可以触发重新渲染，而这些在 vue2 中难以做到。")])])])}),[],!1,null,null,null);t.default=u.exports}}]);