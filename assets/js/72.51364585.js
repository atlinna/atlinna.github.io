(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{661:function(n,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[n._v("#")]),n._v(" 继承")]),n._v(" "),a("p",[n._v("1、原型链继承")]),n._v(" "),a("ul",[a("li",[n._v("过多的继承了没用的属性")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('\t\t\t\tFather.prototype.lastName = "Yan"\n        function Father() {\n\n        }\n        var father = new Father()\n        Son.prototype = father;\n        function Son() {\n\n        }\n        var son = new Son()\n')])])]),a("p",[n._v("2、借用构造函数")]),n._v(" "),a("ul",[a("li",[n._v("不能继承借用构造函数的原型")]),n._v(" "),a("li",[n._v("每次构造函数都要多走一个函数")])]),n._v(" "),a("p",[n._v("通过 call 来让 Father 函数替 son 函数打工。帮他添加属性。（前提是 Son 函数是要通过 new 实例化）")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("\t\t\t\t// 借用构造函数\n        Father.prototype.lastName = \"Yan\";\n        function Father(name) {\n            this.name = name;\n        }\n        function Son(name, skill) {\n            Father.call(this,name);\n            this.skill = skill;\n        }\n\n        var son = new Son('xiaoming', 'football')\n        \n")])])]),a("p",[n._v("3、共享原型")]),n._v(" "),a("ul",[a("li",[n._v("不能随便改动自己的原型")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        // 3、共享原型\n        Father.prototype.lastName = 'Yan';\n        function Father(name) {\n            this.name = name;\n        }\n        function Son(age) {\n            this.age = age;\n        }\n        Son.prototype = Father.prototype;\n        // Son.prototype = new Father('chen');\n        var son = new Son(18)\n")])])]),a("p",[n._v("4、圣杯模式")]),n._v(" "),a("p",[n._v("最终模式。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('\t\t\t// 4、圣杯模式\n        Father.prototype.lastName = "yan";\n        function Father(name) {\n            this.name = name;\n        }\n\n        function Son(age) {\n            this.age = age;\n        }\n\n        function extend(Target, Origin) {\n            var Fn = function () { }\n            Fn.prototype = Father.prototype;\n            Target.prototype = new Fn();\n            Target.prototype.constructor = Target;\n        }\n        extend(Son, Father);\n        var son = new Son(18);\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);