(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{668:function(n,t,a){"use strict";a.r(t);var s=a(10),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"this全面解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this全面解析"}},[n._v("#")]),n._v(" this全面解析")]),n._v(" "),a("p",[n._v("理解 this 的绑定过程之前，首先要理解调用位置：调用位置就是函数在代码中被调用的位置（而不是声明的位置）。\n"),a("strong",[n._v("分析出真正的调用位置很重要，因为它决定了 this 的绑定。")])]),n._v(" "),a("h2",{attrs:{id:"绑定规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定规则"}},[n._v("#")]),n._v(" 绑定规则")]),n._v(" "),a("h3",{attrs:{id:"默认绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认绑定"}},[n._v("#")]),n._v(" 默认绑定")]),n._v(" "),a("p",[n._v("首先要介绍的是最常用的函数调用类型：独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。\n示例：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function test() {\n        console.log(this.a);\n    }\n\n    var a = 10;\n    test() // 10；\n")])])]),a("p",[n._v("首先我们是在全局作用域中声明的变量 a ，那么这个变量 a 本质上也是全局对象的一个属性，他们是相同的一个东西。\n然后调用了 test 函数发现，this.a 被解析成了全局变量 a。这是什么原因呢？ 因为在调用函数的时候应用了 this 的"),a("strong",[n._v("默认绑定")]),n._v("，因此 this 指向全局对象。\nfoo 是直接使用不带任何修饰的函数引用进行调用的，因此只能使用"),a("strong",[n._v("默认绑定")]),n._v("，无法应用其他规则。\n"),a("strong",[n._v("如果使用严格模式（ strict mode ），那么全局对象将无法使用默认绑定，因为 this 会绑定到 undefined ：")]),n._v("\n虽然 this 的绑定规则完全取决于调用位置，但是只有 foo() 运行在非 strict mode 下时，默认绑定才能绑定到全局对象；严格模式下与 foo()的调用位置无关")]),n._v(" "),a("h3",{attrs:{id:"隐式绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式绑定"}},[n._v("#")]),n._v(" 隐式绑定")]),n._v(" "),a("p",[n._v("另一条需要考虑的规则是调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含，不过这种说法可能会造成一些误导。\n示例：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function test() {\n        console.log(this.a);\n    }\n\n    var obj = {\n        a: 10,\n        test: test\n    }\n    var a = 20;\n    obj.test() // 10\n")])])]),a("p",[n._v("还是上一个 test 函数，这次我们在全局中声明了一个变量 a 和一个对象 obj。对象中也有一个同名属性 a。 和一个函数 test，调用位置会使用 obj 上下文来引用函数，因此你可以说函数被调用时 obj 对象“拥有”或者“包含”它。当 foo() 被调用时，它的落脚点确实指向 obj 对象。\n"),a("strong",[n._v("当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。")]),n._v("\n对象引用链中只有最后一层才会影响调用位置，如下示例：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        function test() {\n            console.log(this.a);\n        }\n\n        var obj = {\n            a: 10,\n            test: test\n        }\n        var obj2 = {\n            a:30,\n            obj:obj\n        }\n        var obj3 = {\n            a:40,\n            obj:obj2\n        }\n        var a = 20;\n        obj3.obj.obj.test() // 10\n")])])]),a("h3",{attrs:{id:"_1-隐式丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-隐式丢失"}},[n._v("#")]),n._v(" 1 - 隐式丢失")]),n._v(" "),a("p",[n._v("一个最常见的 this 绑定问题就是"),a("strong",[n._v("被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。")]),n._v("\n示例：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        function test() {\n            console.log(this.a);\n        }\n\n        var a = 5;\n\n        var obj = {\n            a: 10,\n            test: test\n        }\n\n        var func = obj.test;\n\n        func() // 5\n")])])]),a("p",[n._v("此时控制台打印出的是5，因为我们使用一个新的变量保存了 obj.test 的引用，也就是说 func 直接引用的 test 函数，等同于引用本身。 那么当你不加任何修饰直接调用的话就会使用默认绑定的规则。")]),n._v(" "),a("p",[n._v("同样的情况还会发生在"),a("strong",[n._v("使用回调函数上")]),n._v("，如示例：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        function test() {\n            console.log(this.a);\n        }\n\n        function midTravel(callback) {\n            callback()\n        }\n\n        var a = 5;\n\n        var obj = {\n            a: 10,\n            test: test,\n        }\n\n        midTravel(obj.test)\n")])])]),a("p",[n._v("我们发现当回调函数调用执行后打印出的结果是 5，this 指向的是 window ，应用了"),a("strong",[n._v("默认绑定")]),n._v("，这是为什么呢？\n我们知道参数传递其实就是"),a("strong",[n._v("赋值")]),n._v("，只不过他是隐式的我们看不到。\n"),a("strong",[n._v("参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值，")]),n._v("\n所以平时我们要注意："),a("code",[n._v("调用回调函数的函数可能会修改 this 。")])]),n._v(" "),a("h3",{attrs:{id:"_2-显式绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-显式绑定"}},[n._v("#")]),n._v(" 2 - 显式绑定")]),n._v(" "),a("p",[n._v("显示绑定就是通过内置 api 来帮助我们修改 this 的指向。\n首先介绍的是 call 和 apply；\n从 this 绑定的角度来说， call(..) 和 apply(..) 是一样的，它们的区别体现在其他的参数上，但是现在我们不用考虑这些。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        function test() {\n            console.log(this.a);\n        }\n\n        var a = 5;\n\n        var obj = {\n            a: 10,\n            test: test,\n        }\n\n        test.call(obj) // 10\n")])])]),a("h4",{attrs:{id:"_3-硬绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-硬绑定"}},[n._v("#")]),n._v(" 3 - 硬绑定")]),n._v(" "),a("p",[n._v("故名思意，强行绑定 this 指向，后续无法进行 this 的修改，这是显式绑定的一个变种。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        function test() {\n            console.log(this.a);\n        }\n\n        function func() {\n            test.call(obj)\n        }\n\n        var a = 5;\n\n        var obj = {\n            a: 10,\n            test: test,\n        }\n\n        func() // 10\n        func.call(window) // 10\n")])])]),a("p",[n._v("其实就是通过一个函数使用 call 绑定 this ，然后再由一个中间函数将其包裹。\n硬绑定的应用场景就是创建一个包裹函数，或一个可以重复使用的辅助函数。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 1 - 创建一个包裹函数\n    function test(params) {\n        console.log(this.name + ' like ' + params);\n    }\n\n    var func = function (params) {\n        return test.call(obj, params)\n    }\n\n    var obj = {\n        name:'zhang san'\n    }\n\n    func('football')\n// 2 - 创建可重复使用的辅助函数\n    function test(params) {\n        console.log(this.name + ' like ' + params);\n    }\n\n    function bind(fn, obj) {\n        return function () {\n            return fn.apply(obj, arguments)\n        }\n    }\n\n    var obj = {\n        name: 'zhang san'\n    }\n\n    var obj1 = {\n        name: 'wang wu'\n    }\n\n    var func = bind(test, obj)\n    var func_wang = bind(test, obj1)\n    func('football')\n    func('basketball')\n\n    func_wang('football')\n")])])]),a("p",[n._v("由于硬绑定是一种非常常用的模式，所以在 ES5 中提供了内置的方法 Function.prototype.bind\nbind(..) 会返回一个硬编码的新函数，它会把参数设置为 this 的上下文并调用原始函数。")]),n._v(" "),a("h5",{attrs:{id:"api-调用的上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-调用的上下文"}},[n._v("#")]),n._v(" API 调用的上下文")]),n._v(" "),a("p",[n._v("第三方库的许多函数，以及 JavaScript 语言和宿主环境中许多新的内置函数，都提供了一\n个可选的参数，通常被称为“上下文”（context），其作用和 bind(..) 一样，确保你的回调\n函数使用指定的 this 。\n如 forEach 中第二个参数是传入一个对象，然后将 this 绑定到这个对象上。")]),n._v(" "),a("h4",{attrs:{id:"_4-new-绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-new-绑定"}},[n._v("#")]),n._v(" 4 - new 绑定")]),n._v(" "),a("p",[n._v("在传统的面向类的语言中，“构造函数”是类中的一些特殊方法，使用 new 初始化类时会\n调用类中的构造函数。通常的形式是这样的：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    something = new MyClass(..);\n")])])]),a("p",[n._v("JavaScript 也有一个 new 操作符，使用方法看起来也和那些面向类的语言一样，绝大多数开\n发者都认为 JavaScript 中 new 的机制也和那些语言一样。然而，JavaScript 中 new 的机制实\n际上和面向类的语言完全不同。")]),n._v(" "),a("p",[n._v("在 JavaScript 中，构造函数只是一些\n使用 new 操作符时被调用的函数。它们并不会属于某个类，也不会实例化一个类。实际上，\n它们甚至都不能说是一种特殊的函数类型，它们只是被 new 操作符调用的普通函数而已。")]),n._v(" "),a("p",[n._v("所以，包括内置对象函数（比如 Number(..) ）在内的所有函数都可\n以用 new 来调用，这种函数调用被称为构造函数调用。这里有一个重要但是非常细微的区\n别：实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”。")]),n._v(" "),a("p",[n._v("使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。")]),n._v(" "),a("ul",[a("li",[a("ol",[a("li",[n._v("创建（或者说构造）一个全新的对象。")])])]),n._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[n._v("这个新对象会被执行 [[ 原型 ]] 连接。")])])]),n._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[n._v("这个新对象会绑定到函数调用的 this 。")])])]),n._v(" "),a("li",[a("ol",{attrs:{start:"4"}},[a("li",[n._v("如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。")])])])]),n._v(" "),a("h3",{attrs:{id:"优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[n._v("#")]),n._v(" 优先级")]),n._v(" "),a("ul",[a("li",[a("ol",[a("li",[n._v("函数是否在 new 中调用（ new 绑定）？如果是的话 this 绑定的是新创建的对象。\nvar bar = new foo()")])])]),n._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[n._v("函数是否通过 call 、 apply （显式绑定）或者硬绑定调用？如果是的话， this 绑定的是\n指定的对象。\nvar bar = foo.call(obj2)")])])]),n._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[n._v("函数是否在某个上下文对象中调用（隐式绑定）？如果是的话， this 绑定的是那个上\n下文对象。\nvar bar = obj1.foo()")])])]),n._v(" "),a("li",[a("ol",{attrs:{start:"4"}},[a("li",[n._v("如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined ，否则绑定到\n全局对象。")])])])]),n._v(" "),a("h3",{attrs:{id:"绑定例外"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定例外"}},[n._v("#")]),n._v(" 绑定例外")]),n._v(" "),a("p",[n._v("如果你把 null 或者 undefined 作为 this 的绑定对象传入 call 、 apply 或者 bind ，这些值\n在调用时会被忽略，实际应用的是默认绑定规则\n一种“更安全”的做法是传入一个特殊的对象，把 this 绑定到这个对象不会对你的程序\n产生任何副作用。\nObject.create(null) 和 {} 很像，但是并不会创建 Object.\nprototype 这个委托，所以它比 {} “更空”")]),n._v(" "),a("p",[a("strong",[n._v("间接引用")]),n._v("\n间接引用最容易在赋值时发生")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        function test() {\n            console.log(this.name);\n        }\n\n        var obj = {\n            name: 'zhang san',\n            test: test\n        }\n\n        var obj1 = {\n            name: 'wang wu'\n        };\n\n        var name = 'global here';\n\n        (obj1.test = obj.test)() // golbal here;\n")])])]),a("p",[n._v("原因是因为 这个赋值表达式的返回值是目标函数 test 的引用，因此调用时相当于直接调用，没有任何的修饰。所以会应用默认绑定。")]),n._v(" "),a("p",[a("strong",[n._v("对于默认绑定来说，决定 this 绑定对象的并不是调用位置是否处于严格模式，而是\n函数体是否处于严格模式。如果函数体处于严格模式， this 会被绑定到 undefined ，否则\nthis 会被绑定到全局对象。")])]),n._v(" "),a("p",[a("strong",[n._v("软绑定")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        Function.prototype.softBind = function (obj) {\n            var fn = this;\n            // 捕获所有 curried 参数\n            var curried = [].slice.call(arguments);\n            var bound = function () {\n                console.log(this, obj);\n                return fn.apply(\n                    (!this || this === (window || global)) ?\n                        null : this,\n                    curried.concat.apply(curried, arguments)\n                );\n            };\n            bound.prototype = Object.create(fn.prototype);\n            return bound;\n        };\n")])])]),a("h3",{attrs:{id:"this-词法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-词法"}},[n._v("#")]),n._v(" this 词法")]),n._v(" "),a("p",[n._v("箭头函数\n箭头函数并不是使用 function 关键字定义的，而是使用被称为“胖箭头”的操作符 => 定\n义的。箭头函数不使用 this 的四种标准规则，而是根据外层（函数或者全局）作用域来决\n定 this 。")]),n._v(" "),a("p",[n._v("箭头函数的实质是相当于箭头函数外部存在一个变量保存当前作用域 this")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        function test() {\n            var self = this;\n            return () => {\n                console.log(this, this == self);\n            }\n        }\n\n        var obj = {\n            name:'zhang san'\n        }\n\n        var func = test.call(obj)\n        func()\n")])])]),a("p",[a("strong",[n._v("其重要性还体现在它用更常见的词法作用域取代了传统的 this 机制。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);