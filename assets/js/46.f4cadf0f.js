(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{635:function(n,a,e){"use strict";e.r(a);var t=e(7),s=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[n._v("#")]),n._v(" 作用域")]),n._v(" "),e("h3",{attrs:{id:"预编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预编译"}},[n._v("#")]),n._v(" 预编译")]),n._v(" "),e("p",[n._v("预编译特征")]),n._v(" "),e("ul",[e("li",[n._v("任何没有声明的变量直接赋值，那么这个变量将直接归 window 所有。    暗示全局")]),n._v(" "),e("li",[n._v("全局声明的变量 会直接归属到 window 下")])]),n._v(" "),e("p",[n._v("预编译流程：")]),n._v(" "),e("ul",[e("li",[n._v("创建 AO 对象  （AO --\x3e 函数执行期上下文）")]),n._v(" "),e("li",[n._v("找形参和变量声明，将变量和形参名作为 AO 属性名，值为 undefined")]),n._v(" "),e("li",[n._v("将实参值和形参统一")]),n._v(" "),e("li",[n._v("在函数体里面找函数声明，值赋予函数体。")])]),n._v(" "),e("p",[e("strong",[n._v("预编译决定了函数将要运行时声明的状态（var、function）")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function test(a,b){\n  console.log(a) // function a(){}\n  var a;\n  console.log(b) // 2\n  function a(){}\n  a = 234;\n  console.log(a); // 234\n  var b =123;\n  console.log(c);  // Refference Error c is not define\n}\n\ntest(1,2);\n")])])]),e("p",[n._v("如果预编译放到全局中会形成另一个 GO 对象。 规则相同。")]),n._v(" "),e("h3",{attrs:{id:"作用域-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域-2"}},[n._v("#")]),n._v(" 作用域")]),n._v(" "),e("p",[n._v("在预编译阶段会创建出 AO 和 GO （Action Object、Global Object）这叫做函数执行期上下文。发生在函数即将执行"),e("strong",[n._v("之前")]),n._v("，如果多次执行一个函数，就会创建多个函数执行期上下文。\n[[Scope]] 即作用域，里面存储了执行期的上下文\n作用域链：[[Scope]] 中所存储的执行期上下文对象的集合，这个集合呈链式链接，")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("        function a() {\n            var a = 1;\n            function b() {\n                var b = 2;\n                function c() {\n                    var c = 3;\n                }\n                c()\n            }\n            b()\n        }\n\n        a()\n")])])]),e("p",[n._v("每个函数都可以看做是一个对象")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// example a doing \na --\x3e [[Scope]] --\x3e \n[\n  AO -> {\n    arguments:{},\n    this: window,\n    a:1,\n    b:function (){}\n  },\n  GO -> {\n    window,\n    document,\n    a:function (){},\n  }\n]\n")])])]),e("p",[n._v("逐行解析，作用域的在执行期间作用域顶部始终是自己的执行上下文，")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("a-- > define-- > [[Scope]]-- > [0: GO]\na-- > doing-- > [[Scope]]-- > [0: a - AO, 1: GO]\n\nb-- > define-- > [[Scope]]-- > [0: a - AO, 1: GO]\nb-- > doing-- > [[Scope]]-- > [0: b - AO, 1: a - AO, 2: GO]\n\nc-- > define-- > [[Scope]]-- > [0: b - AO, 1: a - AO, 2: GO]\nc-- > doing-- > [[Scope]]-- > [0: c - AO, 1: b - AO, 2: a - AO, 3: GO]\n")])])]),e("p",[n._v("当函数执行完毕，会销毁自身的作用域，"),e("strong",[n._v("将自身的顶部作用域出栈回退回 define 阶段")]),n._v("\n如果函数再次执行将会再次创建执行期上下文。")])])}),[],!1,null,null,null);a.default=s.exports}}]);