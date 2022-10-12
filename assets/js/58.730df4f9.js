(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{647:function(e,t,n){"use strict";n.r(t);var r=n(10),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"proxy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[e._v("#")]),e._v(" Proxy")]),e._v(" "),n("p",[e._v("代理")]),e._v(" "),n("p",[e._v("Proxy 提供了一种修改底层实现的方式。")]),e._v(" "),n("p",[e._v("如何使用代理")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const proxy = new Proxy(target,handler) // 创建出一个代理对象，用来代理target对象\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const user = {\n  name: "xiaoming",\n  age: 18,\n};\n\nconst proxy = new Proxy(user, {\n  set(target, propertyKey, value) {\n    // target[propertyKey] = value;\n    Reflect.set(target, propertyKey, value);\n  },\n  get(target, propertyKey) {\n    return Reflect.get(target, propertyKey);\n  },\n});\n\n\nconsole.log(proxy.name);\nproxy.age = 1;\nconsole.log(proxy.age)\n')])])]),n("h3",{attrs:{id:"应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[e._v("#")]),e._v(" 应用")]),e._v(" "),n("p",[e._v("1、观察者模式")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// ES5-实现方式\nfunction Observer(target, dom) {\n    const ob = {};\n    for (let prop in target) {\n        Object.defineProperty(ob, prop, {\n            get() {\n                return target[prop];\n            },\n            set(val) {\n                target[prop] = val;\n                render(dom, ob);\n            },\n            enumerable: true\n        })\n    }\n    render(dom, ob);\n    return ob;\n}\n\nfunction render(target, data) {\n    const div = target;\n    let h = '';\n    for (let prop in data) {\n        h += `<p><span>${prop}:</span><span>${data[prop]}</span></p>`\n    }\n    div.innerHTML = h;\n}\n\nlet div = document.getElementById('container');\nvar obs = Observer({\n    a: 1,\n    b: 2\n}, div)\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// ES6-实现\nfunction Observer(target, dom) {\n    const ob = new Proxy(target, {\n        get(target, propertyKey) {\n            return Reflect.get(target, propertyKey);\n        },\n        set(target, propertyKey, value) {\n            Reflect.set(target, propertyKey, value);\n            render(dom, target);\n        }\n    });\n\n    render(dom, ob);\n    return ob;\n}\n\nfunction render(target, data) {\n    const div = target;\n    let h = '';\n    for (let prop in data) {\n        h += `<p><span>${prop}:</span><span>${data[prop]}</span></p>`\n    }\n    div.innerHTML = h;\n}\n\nlet div = document.getElementById('container');\nvar obs = Observer({\n    a: 1,\n    b: 2\n}, div)\n")])])]),n("p",[e._v("2、偷懒的构造函数")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n")])])]),n("p",[e._v("3、可验证的函数参数")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);