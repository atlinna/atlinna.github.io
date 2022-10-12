(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{686:function(n,t,o){"use strict";o.r(t);var s=o(10),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h1",{attrs:{id:"闭包"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[n._v("#")]),n._v(" 闭包")]),n._v(" "),o("p",[n._v("当函数可以记住并访问所在的词法作用域时，就产生了闭包，即时函数是在当前词法作用域之外执行。\n假设我们有下面的一个代码块")]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("    function test() {\n        var a = 2;\n        function foo() {\n            console.log(a)\n        }\n        foo()\n    }\n    test();\n")])])]),o("p",[n._v("这段代码看上去和嵌套作用域相差不大，这是闭包嘛？\n从技术上来讲："),o("em",[n._v("maybe")]),n._v(" 它可能是。但确切说它不是一个闭包。\n我们看闭包的定义后面："),o("strong",[n._v("即时函数是在当前词法作用域外执行")]),n._v("。这句话可以说是闭包的灵魂把。\n于是，我们对函数 test 进行一些修改")]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("    function test() {\n        var a = 2;\n        function foo() {\n            console.log(a)\n        }\n        return foo;\n    }\n    const func =  test();\n    func() // 2\n")])])]),o("p",[n._v("上述代码清晰的展现了闭包。\n我们可以看到 foo 函数的词法作用域能够访问到 test 函数的内部作用域，然后将 foo 以值的方式进行传递。在外部，我们通过 func 接收 test 的返回值，也就是 foo 函数。然后运行它。\n实际上只是通过不通的标识符引用调用了内部的函数 foo。\n我们发现 foo 这个函数能够执行，并且"),o("strong",[n._v("它运行在自身定义的词法作用域之外")]),n._v("。\n通常情况下，当我们的 test 函数执行完毕后，内部作用域会销毁，这是因为引擎内部的垃圾回收机制用来释放不再使用的内存空间。\n但是闭包除外，为什么呢？\n我们说垃圾处理机制判断清除的特性是"),o("strong",[n._v("可达性")]),n._v("。\n虽然我们的 foo 运行在自身定义的词法作用域之外，但是他是不是还保留着对原来的作用域中 a 的引用。\n也就是说 foo 函数可达， a 的引用可达。 test 的作用域不会被清除，且永生，目的是供 foo 函数在任何时间调用获取。\nfoo 虽然隔离在外面，但是还保留着对定义时的词法作用域的引用，这个引用就是闭包。")]),n._v(" "),o("p",[o("strong",[n._v("这个函数在定义时的词法作用域以外的地方被调用。闭包使得函数可以继续访问定义时的词法作用域。")]),n._v(" "),o("strong",[n._v("无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。")])]),n._v(" "),o("p",[n._v("无论何时何地，如果将函数（访问它们各自的词法作用域）当作第一\n级的值类型并到处传递，你就会看到闭包在这些函数中的应用。在定时器、事件监听器、\nAjax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中，只要使\n用了回调函数，实际上就是在使用闭包！")])])}),[],!1,null,null,null);t.default=e.exports}}]);