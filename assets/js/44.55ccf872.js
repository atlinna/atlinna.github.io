(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{633:function(a,t,n){"use strict";n.r(t);var v=n(7),e=Object(v.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"词法作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[a._v("#")]),a._v(" 词法作用域")]),a._v(" "),n("p",[a._v("我们将“作用域”定义为一套规则，这套规则用来管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称进行变量查找。")]),a._v(" "),n("p",[a._v("作用域共有两种主要的工作模型。")]),a._v(" "),n("ul",[n("li",[a._v("第一种是最为普遍的，被大多数编程语言所采用的词法作用域，我们会对这种作用域进行深入讨论。")]),a._v(" "),n("li",[a._v("另外一种叫作动态作用域，仍有一些编程语言在使用（比如 Bash 脚本、Perl 中的一些模式等）。")])]),a._v(" "),n("p",[a._v("那么什么是词法作用域呢？\n词法作用域就是定义在词法阶段的作用域（编译原理，词法阶段）。换句话说，词法作用域是由你在写代码时将变量合块作用域写在哪里来决定的。\n作用域查找会在找到第一个匹配的标识符时停止。\n在多层的嵌套作用域中可以定义同名的标识符，这叫作“遮蔽效应”\n如果全局作用域中的变量被遮蔽了但是我们还想使用，可以用 "),n("em",[a._v("window.变量名")]),a._v(" 的方式 间接的通过对全局对象属性的引用来对其进行访问。\n通过这种技术可以访问那些被同名变量所遮蔽的全局变量。但非全局的变量如果被遮蔽了，无论如何都无法被访问到。")]),a._v(" "),n("p",[n("strong",[a._v("无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。")])]),a._v(" "),n("p",[a._v("词法作用域查找只会查找一级标识符，比如 a 、 b 和 c 。如果代码中引用了 foo.bar.baz ，"),n("em",[a._v("词法作用域查找只会试图查找 foo 标识符")]),a._v("，找到这个变量后，"),n("strong",[a._v("对象属性访问规则")]),a._v("会分别接\n管对 bar 和 baz 属性的访问。")]),a._v(" "),n("h3",{attrs:{id:"欺骗词法作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#欺骗词法作用域"}},[a._v("#")]),a._v(" 欺骗词法作用域")]),a._v(" "),n("p",[a._v("如果词法作用域完全由写代码期间函数所声明的位置来定义，怎样才能在运行时来“修改”（也可以说欺骗）词法作用域呢？\nJavaScript 中有两种机制来实现这个目的")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("eval")])]),a._v(" "),n("li",[n("p",[a._v("with\n但是如果使用这两种机制会发生不可逆转的情况：欺骗词法作用域会导致性能下降。")]),a._v(" "),n("h4",{attrs:{id:"eval"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eval"}},[a._v("#")]),a._v(" eval")]),a._v(" "),n("p",[a._v("eval 接受一个字符串，可以将字符串内容当作代码进行编译。\n我们说过，词法作用域是由我们代码、代码块书写的位置决定，那么我们看下面的示例。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('function test(str){\n  eval(str)\n  console.log(b)\n}\n\nvar b = 2;\ntest("var b = 3;")\n')])])]),n("p",[a._v("如果按照正常的词法，打印的应该是 全局作用域中的 b  2 ，但是由于我们的 eval 可以将代码放在那个位置，就像本来卸载那里一样。 所以 在 test 作用域中定义了变量 b 遮蔽了全局。\n于是打印出 3.")]),a._v(" "),n("p",[a._v("eval 在任何情况都可以在运行器件修改 "),n("strong",[a._v("书写期的词法作用域")]),a._v("。\n但是在严格模式下除外，严格模式 eval 在运行时有自己的词法作用域，这意味着其中的代码不会混淆，其中的声明无法修改坐在作用域。")]),a._v(" "),n("p",[a._v("与 eval 相似的 还有 setTimeout 和 setInterval 。他们的第一个参数可以是字符串（功能已过时，不提倡使用）。\nnew Function() 函数的行为也很类似，这种构造函数的语法比 eval 略微安全一些，但尽量避免使用。\n"),n("em",[a._v("在程序中动态生成代码的使用场景非常罕见，因为它所带来的好处无法抵消性能上的损失。")])]),a._v(" "),n("h4",{attrs:{id:"with"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#with"}},[a._v("#")]),a._v(" with")]),a._v(" "),n("p",[a._v("with 通常被当作重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身。\n比如：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var obj = {\n  a:1,\n  b:2,\n  c:3\n}\n")])])]),n("p",[a._v("我们想要修改上面对象内的属性 a、b、c的值，一般我们都会用下面的方法")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("obj.a = 2;\nobj.b = 3;\nobj.c = 4;\n")])])]),n("p",[a._v("但是这样要重复引用对象本身\n但是，如果使用 with：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("with(obj){\n  a = 2;\n  b = 3;\n  c = 4;\n}\n")])])]),n("p",[a._v("这样也是可以的\n但是，需要讨论几种情况")]),a._v(" "),n("ul",[n("li",[a._v("存在属性")]),a._v(" "),n("li",[a._v("不存在属性")]),a._v(" "),n("li",[a._v("严格模式")])]),a._v(" "),n("h5",{attrs:{id:"存在属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#存在属性"}},[a._v("#")]),a._v(" 存在属性")]),a._v(" "),n("p",[a._v("首先我们看对象中存在要修改的属性。\n使用 with 会将该对象中的对应属性的值修改，这其实就是一个 LHS 查找。 属于一个赋值操作。")]),a._v(" "),n("h5",{attrs:{id:"不存在属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不存在属性"}},[a._v("#")]),a._v(" 不存在属性")]),a._v(" "),n("p",[a._v("存在该属性的话会修改，不存在会改嘛？ 肯定不会，应该保持 undefined\n但是他有一个奇怪的副作用。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("    function cache() {\n      var o2 = {\n          b: 3\n      }\n      with (o2) {\n          a = 3\n      }\n      console.log(o2.a)\n      console.log(a);\n    }\n\n    cache()\n")])])]),n("p",[a._v("代码如上，通过结果我们发现 o2.a 确实是 undefined ，但是 作用域中 出现了一个没有定义的 变量 a 且 a 的值就是我们 with 中表达式的赋值。出现了变量泄漏。\n在《你不知道的JS》中，说到\n“with 可以将一个没有或有多个属性的对象处理为一个完全隔离的词法作用域，因此这个对象的属性也会被处理为定义在这个作用域中的词法标识符。”\n“尽管 with 块可以将一个对象处理为词法作用域，但是这个块内部正常的 var声明并不会被限制在这个块的作用域中，而是被添加到 with 所处的函数作用域中。”\n他说我们的这个变量会被放到"),n("strong",[a._v("当前所处的作用域“。")]),a._v("\n但是如果你尝试在 cache 函数外打印 a 结果是一致的。 实际上他被暴露到了全局中。\n如果在本作用域中定义了该变量，然后通过 with 泄漏。确实在 with 所处作用域")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("    function cache() {\n      var a = 1\n      var o2 = {\n          b: 3\n      }\n      with (o2) {\n          a = 3\n      }\n      console.log(o2.a)\n      console.log(a);\n      console.log(window.a);\n    }\n    cache()\n")])])]),n("p",[a._v("这样符合他的解释。\n如果全局中定义了这个变量，而所处作用域中并没有呢？\n他只会做赋值操作，进行 LHS 查找。")]),a._v(" "),n("p",[a._v("即：如果作用域中（包括全局作用域、嵌套作用域）能够找到变量，那么 with 泄漏会赋值到对应变量，如果不存在，则会泄漏到全局中。（仅在修改 对象时，对象中不包含该属性的情况。）")]),a._v(" "),n("h5",{attrs:{id:"严格模式下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#严格模式下"}},[a._v("#")]),a._v(" 严格模式下")]),a._v(" "),n("p",[a._v("严格模式中 with 被完全禁止。")]),a._v(" "),n("p",[n("strong",[a._v("with 声明实际上是根据你传递给它的对象凭空创建了一个全新的词法作用域。")])])])]),a._v(" "),n("h4",{attrs:{id:"性能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[a._v("#")]),a._v(" 性能")]),a._v(" "),n("p",[a._v("你可能会想 eval 和 with 这种扩展性很强的函数，可以扩展出更多复杂功能啊，难道不好嘛？\n那肯定是不好的。")]),a._v(" "),n("p",[n("strong",[a._v("这两个机制的副作用是引擎无法在编译时对作用域查找进行优化，因为引擎只能谨慎地认为这样的优化是无效的。使用这其中任何一个机制都将导致代码运行变慢。不要使用它们。")])]),a._v(" "),n("p",[a._v("词法作用域意味着作用域是由书写代码时函数声明的位置来决定的。编译的词法分析阶段\n基本能够知道全部标识符在哪里以及是如何声明的，从而能够预测在执行过程中如何对它\n们进行查找。")]),a._v(" "),n("p",[a._v("JavaScript 中有两个机制可以“欺骗”词法作用域： eval(..) 和 with 。前者可以对一段包\n含一个或多个声明的“代码”字符串进行演算，并借此来修改已经存在的词法作用域（在\n运行时）。后者本质上是通过将一个对象的引用当作作用域来处理，将对象的属性当作作\n用域中的标识符来处理，从而创建了一个新的词法作用域（同样是在运行时）。")])])}),[],!1,null,null,null);t.default=e.exports}}]);