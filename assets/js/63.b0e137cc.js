(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{652:function(t,v,_){"use strict";_.r(v);var e=_(10),o=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"symbol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" Symbol")]),t._v(" "),_("p",[t._v("通过 Symbol 函数来生成符号")]),t._v(" "),_("p",[t._v("符号的初衷是为了给对象设置私有变量")]),t._v(" "),_("p",[t._v("特征：")]),t._v(" "),_("ul",[_("li",[t._v("没有字面量")]),t._v(" "),_("li",[t._v("使用 typeof 得到的类型是 symbol")]),t._v(" "),_("li",[t._v("每次调用 Symbol 函数得到的符号永不相等，无论是否用同一个名称生成。")]),t._v(" "),_("li",[t._v("符号可以作为对象的属性名，称之为符号属性\n"),_("ul",[_("li",[t._v("可以让这些属性无法通过常规的方式被外界访问")]),t._v(" "),_("li",[t._v("符号属性不能枚举，for-in 循环无法读取到该属性，Object.keys 方法也无法得到符号属性。")]),t._v(" "),_("li",[t._v("Object.getOwnPropertyNames 可以得到所有无法枚举的属性，但是仍然无法使用。")]),t._v(" "),_("li",[t._v("ES6 新增 Object.getOwnPropertySymbol 方法，可以读取到符号")])])]),t._v(" "),_("li",[t._v("符号不能被隐式转换为数字，但是可以通过String 转换为字符串。")])]),t._v(" "),_("h2",{attrs:{id:"共享符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#共享符号"}},[t._v("#")]),t._v(" 共享符号")]),t._v(" "),_("p",[t._v("Symbol.for(name) 如果 name 相同则返回相同的 Symbol。")]),t._v(" "),_("h2",{attrs:{id:"知名符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#知名符号"}},[t._v("#")]),t._v(" 知名符号")]),t._v(" "),_("p",[t._v("1、intanceof")]),t._v(" "),_("p",[t._v("实际上调用的是 "),_("code",[t._v("F[Symbol.hasIntance](obj)")])]),t._v(" "),_("p",[t._v("2、concat")]),t._v(" "),_("p",[t._v("如果参数中存在数组，则会将数组分隔然后拼接，")]),t._v(" "),_("p",[_("code",[t._v("Symbol.isConcatSpreadAble")]),t._v(" 如果将他设置为 true 则会分隔，false 则不变。")]),t._v(" "),_("p",[t._v("3、Symbol.toPrimitive")]),t._v(" "),_("p",[t._v("对象在转换时会先调用 valueOf、toString。现在是调用这个 Symbol.toPrimitive 这个函数来转换。")]),t._v(" "),_("p",[t._v("4、Symbol.toStringTag")]),t._v(" "),_("p",[t._v("会影响原生的 toString 方法。[Object Object] 可以改变。")])])}),[],!1,null,null,null);v.default=o.exports}}]);