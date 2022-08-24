(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{614:function(t,e,a){"use strict";a.r(e);var s=a(10),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),a("h2",{attrs:{id:"slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("#")]),t._v(" slot")]),t._v(" "),a("p",[t._v("帮助我们传递插槽中的内容到父组件")]),t._v(" "),a("ul",[a("li",[t._v("插槽的内容 如果不指定 传入的是默认插槽")]),t._v(" "),a("li",[t._v("具名插槽 是指定名字的插槽")]),t._v(" "),a("li",[t._v("通过 v-slot:default 的方式来放入指定插槽内")]),t._v(" "),a("li",[a("code",[t._v("<template v-slot:default></template>")])]),t._v(" "),a("li",[a("code",[t._v("<template #default></template>")])])]),t._v(" "),a("h1",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" Vue router")]),t._v(" "),a("ul",[a("li",[t._v("vue-router 提供了三种路由模式")]),t._v(" "),a("li",[t._v("hash 默认值 路由从地址栏中的 hash 部分获取路径，改变路径也是改变 hash 部分的路径，该模式兼容性最好。")]),t._v(" "),a("li",[t._v("history 路由从浏览器地址栏的 location.pathname 获取，改变路径使用的是 H5 的 location Api location.pushState(null,null,'/about')")]),t._v(" "),a("li",[t._v("abstract 路由从内存中获取路径，改变路径也只是改动内存中的值 通常用在非浏览器环境中。")])]),t._v(" "),a("h2",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),a("p",[t._v("1、vue 中开启 Css Module")]),t._v(" "),a("ul",[a("li",[t._v("将文件命名为 xxx.module.css 即可")])]),t._v(" "),a("p",[t._v("2、得到组件生成的根 dom")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  export function getComponentDom(comp, property) {\n  const vm = new Vue({\n  render: (h) => h(comp, { props: property }),\n  });\n  vm.$mount();\n    //   console.log(vm);\n    return vm.$el;\n  }\n")])])]),a("p",[t._v("3、向实例注入成员")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  Vue.prototype.$show = xxx;\n")])])]),a("p",[t._v('4、ref\n组件或 dom 元素属性 refs = ""')]),t._v(" "),a("h2",{attrs:{id:"axios-可以拦截请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios-可以拦截请求"}},[t._v("#")]),t._v(" axios 可以拦截请求")]),t._v(" "),a("p",[t._v("Interceptors\n"),a("strong",[t._v("http://www.axios-js.com/docs/")])]),t._v(" "),a("h1",{attrs:{id:"组件声明周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件声明周期"}},[t._v("#")]),t._v(" 组件声明周期")]),t._v(" "),a("ul",[a("li",[t._v("beforeCreate\n|| --\x3e 注入")]),t._v(" "),a("li",[t._v("created\n|| --\x3e 生成 VNode")]),t._v(" "),a("li",[t._v("beforeMount\n|| --\x3e 挂载 --\x3e 数据更新 |--\x3e 触发 beforeUpdate --\x3e更新完成 |--\x3e 触发 updated --\x3e 重新挂载")]),t._v(" "),a("li",[t._v("mounted\n||")]),t._v(" "),a("li",[t._v("beforeDestroy\n||")]),t._v(" "),a("li",[t._v("destoryed")])]),t._v(" "),a("h1",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),a("h2",{attrs:{id:"定义指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义指令"}},[t._v("#")]),t._v(" 定义指令")]),t._v(" "),a("ul",[a("li",[t._v("全局定义")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   Vue.directive('myDirective',{\n    binding(el,binding){\n\n        }\n\n    inserted(el,binding){\n\n    }\n    update(){\n\n    }\n\n    })\n")])])]),a("h2",{attrs:{id:"组件混入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件混入"}},[t._v("#")]),t._v(" 组件混入")]),t._v(" "),a("p",[t._v("mixins:[]\n可通过导出一个对象来混入公共代码 或者导出一个函数返回一个对象的方式混入代码")]),t._v(" "),a("h2",{attrs:{id:"组件递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件递归"}},[t._v("#")]),t._v(" 组件递归")]),t._v(" "),a("ul",[a("li",[t._v("设置组件的 name 属性")]),t._v(" "),a("li",[t._v('在需要嵌套循环的地方使用该 name name="CorlorList" '),a("ColorList")],1)]),t._v(" "),a("h2",{attrs:{id:"监听器-watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听器-watch"}},[t._v("#")]),t._v(" 监听器 watch")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  watch:{\n      $route:{\n          handler(){\n\n          },\n          immediate:true|false //表示是否初始化立即执行一次\n          deep:true|false, 是否监听数据内部属性的变化\n      }\n\n  }\n")])])]),a("h2",{attrs:{id:"小技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小技巧"}},[t._v("#")]),t._v(" 小技巧")]),t._v(" "),a("ul",[a("li",[t._v("如何点击分页的时候滚动条滚动到顶部 this.$refs.scrollView.scrollTop = 0")]),t._v(" "),a("li",[t._v("平滑的滚动 css scroll-behavior：smooth")])]),t._v(" "),a("h2",{attrs:{id:"vue-动态传入组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-动态传入组件"}},[t._v("#")]),t._v(" Vue 动态传入组件")]),t._v(" "),a("ul",[a("li",[t._v("实验一\n设计一个中间件 MidWare 通过获取组件根 dom 、 v-html 指令来动态传入组件\n获取 outerHTML")])]),t._v(" "),a("h2",{attrs:{id:"listener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listener"}},[t._v("#")]),t._v(" $listener")]),t._v(" "),a("p",[t._v("$listeners 可以获取到父组件传入子组件的事件")]),t._v(" "),a("h2",{attrs:{id:"v-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-model"}},[t._v("#")]),t._v(" v-model")]),t._v(" "),a("p",[t._v('双向绑定\n实质就是 <input :value="xxx" @input="$event.target.value" />')]),t._v(" "),a("h1",{attrs:{id:"组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件通信"}},[t._v("#")]),t._v(" 组件通信")]),t._v(" "),a("ul",[a("li",[t._v("props")]),t._v(" "),a("li",[t._v("router")]),t._v(" "),a("li",[t._v("event（$emit）")]),t._v(" "),a("li",[t._v("$listeners")]),t._v(" "),a("li",[t._v("$refs")]),t._v(" "),a("li",[t._v("事件总线 new Vue({})[ $on $off $emit]")])])])}),[],!1,null,null,null);e.default=r.exports}}]);