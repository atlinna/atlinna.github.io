(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{646:function(t,e,r){"use strict";r.r(e);var n=r(7),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"object-create"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#object-create"}},[t._v("#")]),t._v(" Object.create")]),t._v(" "),r("h4",{attrs:{id:"描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),r("p",[r("strong",[t._v("参数")])]),t._v(" "),r("ul",[r("li",[t._v("proto:新创建的原型对象")]),t._v(" "),r("li",[t._v("propertiesObject：选。需要传入一个对象，该对象的属性类型参照Object.defineProperties()的第二个参数。\n如果该参数被指定且不为 undefined，该传入对象的自有可枚举属性(即其自身定义的属性，\n而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。")])]),t._v(" "),r("h4",{attrs:{id:"代码实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    Object.myCreate = function (proto, propertiesObject) {\n        if (typeof proto !== 'object' && typeof proto !== 'function') {\n            throw new TypeError('Object prototype may only be an Object: ' + proto);\n        }\n        \n        if(propertiesObject && typeof propertiesObject !== 'object'){\n            throw new TypeError(propertiesObject +'must be a object')\n        }\n          \n        function F() { }\n        F.prototype = proto;\n\n        let f = new F()\n        if (propertiesObject) {\n            Object.defineProperties(f, propertiesObject)\n        }\n\n        if (proto === null) {\n            Object.setPrototypeOf(f, null)\n        }\n\n        return f;\n    };\n")])])]),r("p",[t._v("Object.create 其实就是继承的一种方式。")])])}),[],!1,null,null,null);e.default=o.exports}}]);