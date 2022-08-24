(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{675:function(t,n,v){"use strict";v.r(n);var a=v(10),_=Object(a.a)({},(function(){var t=this,n=t.$createElement,v=t._self._c||n;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"函数作用域-和-块作用域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域-和-块作用域"}},[t._v("#")]),t._v(" 函数作用域 和 块作用域")]),t._v(" "),v("p",[t._v("函数作用域的含义是指，属于这个函数的全部变量都可以在整个函数的范围内使用及复\n用（事实上在嵌套的作用域中也可以使用）。这种设计方案是非常有用的，能充分利用\nJavaScript 变量可以根据需要改变值类型的“动态”特性。")]),t._v(" "),v("p",[t._v("可以把变量和函数包裹在一个函数的作用域中，然后用这个作用域\n来“隐藏”它们。")]),t._v(" "),v("p",[v("strong",[t._v("最小特权原则:")]),t._v("\n也叫最小授权或最小暴露原则.这个原则是指在软件设计中，应该最小限度地暴露必要内容，而将其他内容都“隐藏”起来，比如某个模块或对象的 API 设计。")]),t._v(" "),v("p",[t._v("区分函数声明和表达式最简单的方法是看 function 关键字出现在声明中的位\n置（不仅仅是一行代码，而是整个声明中的位置）。如果 function 是声明中\n的第一个词，那么就是一个函数声明，否则就是一个函数表达式。")]),t._v(" "),v("p",[t._v("匿名函数表达式书写起来简单快捷，很多库和工具也倾向鼓励使用这种风格的代码。但是它也有几个缺点需要考虑。")]),t._v(" "),v("ul",[v("li",[t._v("匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难。")]),t._v(" "),v("li",[t._v("如果没有函数名，当函数需要引用自身时只能使用已经过期的 arguments.callee 引用，比如在递归中。另一个函数需要引用自身的例子，是在事件触发后事件监听器需要解绑自身。")]),t._v(" "),v("li",[t._v("匿名函数省略了对于代码可读性 / 可理解性很重要的函数名。一个描述性的名称可以让代码不言自明。")])]),t._v(" "),v("p",[t._v("行内函数表达式非常强大且有用——匿名和具名之间的区别并不会对这点有任何影响。")]),t._v(" "),v("p",[v("strong",[t._v("立即执行函数表达式")]),t._v("\n几年前社区给它规定了一个术语：IIFE, Immediately Invoked Function Expression\n他有两种描述方式\n1、")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v(" (function (){\n \n })()\n")])])]),v("p",[t._v("2、")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v(" (function (){\n \n }())\n")])])]),v("p",[t._v("3、")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("  void function (){\n  \n  }()\n")])])]),v("p",[t._v("这几种形式功能上是一致的，选择哪个全凭喜好")]),t._v(" "),v("p",[v("strong",[t._v("块作用域")]),t._v(" "),v("em",[t._v("-with")]),t._v("\nwith 是块作用域的一个例子。\n用 with 从对象中创建出的作用域仅在 with 声明中而非外部作用域中有效。")]),t._v(" "),v("p",[v("em",[t._v("-try & catch")]),t._v("\ntry / catch 的 catch 分句会创建一个块作用域，其中声明的变量仅在 catch 内部有效。")]),t._v(" "),v("p",[t._v("在 ES6 中引入了 let 关键字（ var 关键字的表亲），用来在任意代码块中声明变量。 if\n(..) { let a = 2; } 会声明一个劫持了 if 的 { .. } 块的变量，并且将变量添加到这个块\n中。")]),t._v(" "),v("p",[v("strong",[t._v("用 let 将变量附加在一个已经存在的块作用域上的行为是隐式的")])]),t._v(" "),v("p",[t._v("函数是 JavaScript 中最常见的作用域单元。本质上，声明在一个函数内部的变量或函数会\n在所处的作用域中“隐藏”起来，这是有意为之的良好软件的设计原则。")]),t._v(" "),v("p",[t._v("但函数不是唯一的作用域单元。块作用域指的是变量和函数不仅可以属于所处的作用域，\n也可以属于某个代码块（通常指 { .. } 内部）。")]),t._v(" "),v("p",[t._v("有些人认为块作用域不应该完全作为函数作用域的替代方案。两种功能应该同时存在，开\n发者可以并且也应该根据需要选择使用何种作用域，创造可读、可维护的优良代码。")])])}),[],!1,null,null,null);n.default=_.exports}}]);