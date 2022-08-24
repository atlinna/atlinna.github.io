(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{618:function(t,e,v){"use strict";v.r(e);var r=v(10),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"composition-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#composition-api"}},[t._v("#")]),t._v(" Composition Api")]),t._v(" "),v("p",[t._v("不同于 reactivity api， composition api 提供的函数很多都是与组件深度绑定的，不能脱离组件而存在")]),t._v(" "),v("h3",{attrs:{id:"setup-函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#setup-函数"}},[t._v("#")]),t._v(" setup 函数")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("setup(props,context){\n\treturn {}\n}\n")])])]),v("p",[t._v("setup 函数 你可以把它理解为一个生命周期钩子函数，只会执行一次。 setup 函数呢 执行的事件非常早，有多早呢")]),t._v(" "),v("p",[t._v("是在组件属性被赋值后立即执行，早于所有生命周期钩子函数")]),t._v(" "),v("p",[t._v("然后呢 setup 函数 是有两个参数的。")]),t._v(" "),v("ul",[v("li",[t._v("props")]),t._v(" "),v("li",[t._v("context")])]),t._v(" "),v("p",[t._v("props 是一个对象，包含了所有的组件属性值，就是 传入到组件的props，由于setup函数执行的时候 没有 绑定 this 所以内部指向的是 undefined 拿不到 props 属性。")]),t._v(" "),v("p",[t._v("context 是一个对象，提供了组件所需要的上下文信息。 Context 内部是我们组件所需要的成员方法。很少但足够用。")]),t._v(" "),v("p",[t._v("context 成员：")]),t._v(" "),v("ul",[v("li",[t._v("attrs 同 vue2 this.$attrs")]),t._v(" "),v("li",[t._v("slots 同 vue2 this.$slots")]),t._v(" "),v("li",[t._v("emit 同 vue2 this.$emit")])]),t._v(" "),v("h2",{attrs:{id:"声明周期函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#声明周期函数"}},[t._v("#")]),t._v(" 声明周期函数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("Vue2 options api")]),t._v(" "),v("th",[t._v("Vue3 option api")]),t._v(" "),v("th",[t._v("Vue3 composition api")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("beforeCreate")]),t._v(" "),v("td",[t._v("beforeCreate")]),t._v(" "),v("td",[t._v("不再需要，代码可直接置于setup中")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("craeted")]),t._v(" "),v("td",[t._v("created")]),t._v(" "),v("td",[t._v("不再需要，代码可直接置于setup中")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("beforeMount")]),t._v(" "),v("td",[t._v("beforeMount")]),t._v(" "),v("td",[t._v("onBeforeMount")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("mounted")]),t._v(" "),v("td",[t._v("mounted")]),t._v(" "),v("td",[t._v("onMounted")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("beforeUpdate")]),t._v(" "),v("td",[t._v("beforeUpdate")]),t._v(" "),v("td",[t._v("onBeforeUpdate")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("updated")]),t._v(" "),v("td",[t._v("updated")]),t._v(" "),v("td",[t._v("onUpdated")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("beforeDestory")]),t._v(" "),v("td",[v("strong",[t._v("beforeUnmount")])]),t._v(" "),v("td",[t._v("onBeforeUnmount")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("destroyed")]),t._v(" "),v("td",[v("strong",[t._v("unmounted")])]),t._v(" "),v("td",[t._v("onUnmounted")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("errorCaptured")]),t._v(" "),v("td",[t._v("errorCaptured")]),t._v(" "),v("td",[t._v("onErrorCaptured")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),v("td",[t._v("renderTracked")]),t._v(" "),v("td",[t._v("onRenderTracked")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),v("td",[t._v("renderTriggered")]),t._v(" "),v("td",[t._v("onRenderTriggered")])])])]),t._v(" "),v("p",[t._v("首先我们可以看到，加黑字体为，修改后的名称， Vue3 对一些声明周期的名称进行了修改，")]),t._v(" "),v("p",[t._v("然后我们可以看到有两个新增的 钩子函数。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("renderTracked")]),t._v(" "),v("p",[t._v("这个函数呢可以在我们执行期间查看我们页面搜集了哪些依赖")])]),t._v(" "),v("li",[v("p",[t._v("renderTriggered")]),t._v(" "),v("p",[t._v("这个函数可以查看我们改变的依赖项")])])]),t._v(" "),v("p",[t._v("OK~ 我们来到初始项目的 HelloWorld.vue 这个文件")]),t._v(" "),v("p",[t._v("在这里新增一个 onRenderTracked 方法")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("onRenderTracked((e) => {\n  console.log(e);\n});\n")])])]),v("p",[t._v("我们看到 执行结果存在两个，好，我们删掉 template 中多余的代码")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<template>\n  <h1>{{ msg }}</h1>\n  <button type="button" @click="count++">count is: {{ count }}</button>\n</template>\n')])])]),v("p",[t._v("发现我们的依赖项 也存在两个，这个函数的作用就是帮助我们快速定位 是模板中的哪个依赖项出现了问题")]),t._v(" "),v("p",[t._v("我们再来看 onRenderTriggered")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('onRenderTriggered((e) => {\n  console.log("triggered", e);\n});\n')])])]),v("p",[t._v("我们发现，页面渲染完成并没有 执行结果，这是因为我们的模板依赖项没有改变，我们尝试去修改一下，点击页面的 button。")]),t._v(" "),v("p",[t._v("发现 triggered 执行。")])])}),[],!1,null,null,null);e.default=_.exports}}]);