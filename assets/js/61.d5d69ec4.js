(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{650:function(t,n,a){"use strict";a.r(n);var s=a(7),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" This")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t\t\t\tvar a = {\n            name: 1,\n            say: function () {\n                console.log(this.name)\n            }\n        }\n\n        var b = {\n            name: 'ello',\n            say: function (callback) {\n             \t\t// this --\x3e b\n                callback()\n            }\n        }\n        \n        var name = 3;\n\n        b.say(a.say)  // 3\n")])])]),a("p",[t._v("将 a 的 say 通过参数传递 隐式丢失 相当于 callback = a.say ;")]),t._v(" "),a("h3",{attrs:{id:"链式调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链式调用"}},[t._v("#")]),t._v(" 链式调用")]),t._v(" "),a("p",[t._v("通过返回 this 其调用自身的方法。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("        function jQuery(options) {\n            this.options = options;\n            this.width = function (width) {\n                return this\n            }\n            this.height = function (){\n                return this\n            }\n            this.solo = function () {\n                console.log(this)\n            }\n        }\n\n        var jq = new jQuery()\n        jq.width().height().solo()\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);