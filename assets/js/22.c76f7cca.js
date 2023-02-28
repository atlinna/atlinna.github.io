(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{611:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[t._v("#")]),t._v(" CommonJS")]),t._v(" "),a("h3",{attrs:{id:"commonjs-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-规范"}},[t._v("#")]),t._v(" CommonJS 规范：")]),t._v(" "),a("ul",[a("li",[t._v("所有的JS文件均是一个模块")]),t._v(" "),a("li",[t._v("所有的模块中的全局变量、函数、均不会产生污染")]),t._v(" "),a("li",[t._v("当一个模块需要提供一些东西给别的函数使用时，需要把这些东西"),a("strong",[t._v("导出")])]),t._v(" "),a("li",[t._v("当一个模块需要用到别的模块的东西时，需要"),a("strong",[t._v("导入")]),t._v("（模块路径必须以./ 或 ../开头）")]),t._v(" "),a("li",[t._v("模块有缓存，第一次运行模块后，导出结果会被缓存，之后再使用该模块，直接使用缓存结果。")])]),t._v(" "),a("h3",{attrs:{id:"导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出"}},[t._v("#")]),t._v(" 导出")]),t._v(" "),a("p",[t._v("通过 module.exports 来导出。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设有 utils.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[t._v("#")]),t._v(" 导入")]),t._v(" "),a("p",[t._v("通过 require 导入，理论上来讲，你导出的东西是什么，导入的就是什么")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" utils "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./utils.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function")]),t._v("\n")])])]),a("p",[a("strong",[t._v("当js解析到require的时候，会跑到那个路径下面，找到这个js，然后把它执行一遍，然后将结果放到 module 的 exports 这个属性里面。")]),t._v("\n当我们再次引用同一文件时，由于之前已经执行过一次，所以不会再次执行而是直接使用缓存值。")])])}),[],!1,null,null,null);s.default=r.exports}}]);