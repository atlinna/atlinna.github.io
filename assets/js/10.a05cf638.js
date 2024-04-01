(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{599:function(a,r,t){"use strict";t.r(r);var e=t(10),s=Object(e.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"arkts-router"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arkts-router"}},[a._v("#")]),a._v(" ArkTS Router")]),a._v(" "),t("p",[a._v("ArkTs 的路由管理与 vue-router 非常相似，几乎可以说是无缝衔接了。")]),a._v(" "),t("p",[a._v("router 中的几个方法")]),a._v(" "),t("h3",{attrs:{id:"router-的导航模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-的导航模式"}},[a._v("#")]),a._v(" router 的导航模式")]),a._v(" "),t("ul",[t("li",[a._v("Single")]),a._v(" "),t("li",[a._v("Standard")])]),a._v(" "),t("p",[a._v("Single 模式下，页面实例只会创建一次, 栈内的数量取决于打开的不同页面的数量。")]),a._v(" "),t("p",[a._v("Standard 模式，页面实例会重复创建，栈内元素的数量取决于页面跳转的数量。")]),a._v(" "),t("p",[a._v("默认情况下，router 的跳转模式使用的是 Standard")]),a._v(" "),t("h3",{attrs:{id:"pushurl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pushurl"}},[a._v("#")]),a._v(" pushUrl")]),a._v(" "),t("p",[a._v("pushUrl 可以像路由栈的栈顶添加一个页面。")]),a._v(" "),t("p",[a._v("当然这取决于使用何种模式进行路由跳转。")]),a._v(" "),t("p",[a._v("pushUrl 的第一个参数是一些配置如跳转的页面路径、携带的参数等。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("router.pushUrl({\n\turl:'pages/xxxx',\n\tparams:{}\n})\n")])])]),t("p",[t("strong",[a._v("url")]),a._v(' ,url 是一个以 pages 开始的绝对路径 前面不要加 "/"')]),a._v(" "),t("p",[t("strong",[a._v("params")]),a._v(" , params 是一个引用类型的数据，且只接受引用类型的数据，如果传入基本类型的数据，那么得到的将是 undefined")]),a._v(" "),t("h3",{attrs:{id:"replaceurl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replaceurl"}},[a._v("#")]),a._v(" replaceUrl")]),a._v(" "),t("p",[a._v("与 pushUrl 基本相同，区别在于：")]),a._v(" "),t("p",[a._v("replaceUrl 会替换当前栈顶元素")]),a._v(" "),t("p",[a._v("在 Standard 模式下，会新创建一个页面实例，替换当前的页面，栈内数量不变。")]),a._v(" "),t("p",[a._v("在 Single 模式下，会将离栈顶最近的一个实例移到栈顶，然后销毁当前页面实例，栈内数量 -1")]),a._v(" "),t("p",[a._v("如果栈内不存在跳转页面，则会创建新的页面实例。")]),a._v(" "),t("h3",{attrs:{id:"back"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#back"}},[a._v("#")]),a._v(" back")]),a._v(" "),t("p",[a._v("返回。")]),a._v(" "),t("p",[a._v("可传参，参考 pushUrl 参数配置。")]),a._v(" "),t("h3",{attrs:{id:"clear"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[a._v("#")]),a._v(" clear")]),a._v(" "),t("p",[a._v("清空栈内元素。")]),a._v(" "),t("h3",{attrs:{id:"getparams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getparams"}},[a._v("#")]),a._v(" getParams")]),a._v(" "),t("p",[a._v("获取路由跳转的参数。仅为引用类型的数据。")]),a._v(" "),t("h3",{attrs:{id:"showalertbeforebackpage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#showalertbeforebackpage"}},[a._v("#")]),a._v(" showAlertBeforeBackPage")]),a._v(" "),t("p",[a._v("打开一个询问弹窗。")]),a._v(" "),t("p",[a._v("可配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("router.showAlertBeforeBackPage({message: 'xxxx'});\n")])])]),t("p",[a._v("确定会继续执行下面的代码，")]),a._v(" "),t("p",[a._v("否则跳出当前操作。")])])}),[],!1,null,null,null);r.default=s.exports}}]);