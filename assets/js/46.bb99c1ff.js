(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{635:function(n,t,e){"use strict";e.r(t);var a=e(7),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[n._v("#")]),n._v(" 作用域")]),n._v(" "),e("h3",{attrs:{id:"预编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预编译"}},[n._v("#")]),n._v(" 预编译")]),n._v(" "),e("p",[n._v("预编译特征")]),n._v(" "),e("ul",[e("li",[n._v("任何没有声明的变量直接赋值，那么这个变量将直接归 window 所有。    暗示全局")]),n._v(" "),e("li",[n._v("全局声明的变量 会直接归属到 window 下")])]),n._v(" "),e("p",[n._v("预编译流程：")]),n._v(" "),e("ul",[e("li",[n._v("创建 AO 对象  （AO --\x3e 函数执行期上下文）")]),n._v(" "),e("li",[n._v("找形参和变量声明，将变量和形参名作为 AO 属性名，值为 undefined")]),n._v(" "),e("li",[n._v("将实参值和形参统一")]),n._v(" "),e("li",[n._v("在函数体里面找函数声明，值赋予函数体。")])]),n._v(" "),e("p",[e("strong",[n._v("预编译决定了函数将要运行时声明的状态（var、function）")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function test(a,b){\n  console.log(a) // function a(){}\n  var a;\n  console.log(b) // 2\n  function a(){}\n  a = 234;\n  console.log(a); // 234\n  var b =123;\n  console.log(c);  // Refference Error c is not define\n}\n\ntest(1,2);\n")])])]),e("p",[n._v("如果预编译放到全局中会形成另一个 GO 对象。 规则相同。")])])}),[],!1,null,null,null);t.default=s.exports}}]);