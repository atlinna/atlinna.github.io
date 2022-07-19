(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{636:function(t,n,s){"use strict";s.r(n);var e=s(7),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),s("p",[t._v("指在父级作用域外存在某个能够访问父级作用域的成员\n将会造成父级的作用域不被销毁，成员能够操作父级作用域")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function test(){\n  var aa = 1;\n  function b(){\n    aa++;\n    console.log(aa);\n  }\n  return b;\n}\n\nvar fn = test();\nfn()\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test define -> [GO]\ntest doing -> [testAO,GO]\n\nb define -> [testAO,GO]\nb doing -> [bAO,testAO,GO]\n")])])]),s("p",[t._v("当 b 被返回时是被保存起来，此时 test 函数执行完毕，那么 test 函数自身将会把 testAO 出栈，自己找不到了，但是此时还没有完，由于我们把b 保存到外部，b能够访问到 testAO 因为 b define 的时候是能够访问到 testAO 的。")]),t._v(" "),s("p",[s("strong",[t._v("闭包的使用会使作用域链不被释放造成内存泄露")])]),t._v(" "),s("h3",{attrs:{id:"闭包的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的应用"}},[t._v("#")]),t._v(" 闭包的应用")]),t._v(" "),s("ul",[s("li",[t._v("实现共有变量 -- 累加器")]),t._v(" "),s("li",[t._v("缓存")]),t._v(" "),s("li",[t._v("实现私有变量")]),t._v(" "),s("li",[t._v("模块化开发，防止全局变量的污染")])]),t._v(" "),s("h2",{attrs:{id:"立即执行函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#立即执行函数"}},[t._v("#")]),t._v(" 立即执行函数")]),t._v(" "),s("p",[t._v("立即执行函数指的是执行完毕后会立即销毁\n表现形式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("（function (){}()) // w3c 标准建议 \n\n (function (){})()\n")])])]),s("p",[s("strong",[t._v("只有表达式才能被执行符号”()”执行")]),t._v("\n也就是说只要我们将函数定义转换为表达式那么他就可以变成一个立即执行函数。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+ function test(){\n            console.log('doing')\n        }()\n\n& function test(){\n            console.log('doing')\n        }();\n\n(function (){\n            console.log('doing')\n        }());\n\n! function test(){\n            console.log('doing')\n        }();\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);