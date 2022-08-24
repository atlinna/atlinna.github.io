(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{656:function(t,e,s){"use strict";s.r(e);var n=s(10),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[t._v("#")]),t._v(" 对象")]),t._v(" "),s("h3",{attrs:{id:"object-is"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-is"}},[t._v("#")]),t._v(" Object.is")]),t._v(" "),s("p",[t._v("等效于 "),s("code",[t._v("===")])]),t._v(" "),s("p",[t._v("但是除了两种情况")]),t._v(" "),s("ul",[s("li",[t._v("NaN == NaN  // false  \t\t\t\t\t\t\tObject.is(NaN,NaN) \t\t\t\t// true")]),t._v(" "),s("li",[t._v("+0 == -0          // true                               Object.is(+0,-0)                                 // false")])]),t._v(" "),s("h3",{attrs:{id:"object-setprototypeof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-setprototypeof"}},[t._v("#")]),t._v(" Object.setPrototypeof")]),t._v(" "),s("p",[s("code",[t._v("Object.setPrototypeof(obj1,obj2)")]),t._v(" 表示将 obj2 设置为 obj1 的隐式原型")]),t._v(" "),s("h3",{attrs:{id:"object-getownpropertynames"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-getownpropertynames"}},[t._v("#")]),t._v(" Object.getOwnPropertyNames")]),t._v(" "),s("p",[t._v("该 Api 之前就存在，只是 ES6 对其进行了升级，将返回的属性名数组进行了排序。规则如下：")]),t._v(" "),s("ul",[s("li",[t._v("先排序数字 。 -- 先把数字放到前面")]),t._v(" "),s("li",[t._v("再排字母。      -- 按照原来的顺序把字母的key 放到后面")]),t._v(" "),s("li",[t._v("再排其他。      -- 。。。")])]),t._v(" "),s("h2",{attrs:{id:"类-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类-class"}},[t._v("#")]),t._v(" 类 （Class）")]),t._v(" "),s("h3",{attrs:{id:"类的书写方式-class-语法糖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类的书写方式-class-语法糖"}},[t._v("#")]),t._v(" 类的书写方式（Class 语法糖）")]),t._v(" "),s("p",[t._v("使用 Class关键字来声明类，使用 constructor 来定义类的构造函数。定义的函数会放到类的原型中。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Class A{\n\tconstructor(name,age){\n\t\tthis.name = name;\n\t\tthis.age = age;\n\t}\n\t// 方法定义，会放到 A.prototype 上，\n\tprint(){\n\t\n\t}\n}\n")])])]),s("h3",{attrs:{id:"getter-setter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getter-setter"}},[t._v("#")]),t._v(" getter & setter")]),t._v(" "),s("p",[t._v("在方法名前加上 get、set 关键字来定义 getter 和 setter。")]),t._v(" "),s("p",[t._v("使用 getter 和 setter 控制的属性，不在原型上。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Class A{\n\tconstructor(name){\n\t\tthis.name = name;\n\t}\n\t// 使用 get 关键字定义 getter\n\tget age(){\n\t\treturn this.age;\n\t}\n\t// 使用 set 关键字定义 setter\n\tset age(age){\n\t\tthis.age = age;\n\t}\n}\n")])])]),s("p",[t._v("getter 和 setter 的本质实际上是使用 Object.defineProperty 来定义属性的getter 和 setter，只不过是帮你封装成了一个函数。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Class A{\n\tconstructor(name){\n\t\tthis.name = name;\n\t\t// 实质。\n\t\tObject.defineProperty(this,'age',{\n\t\t\tgetter:function (){\n\t\t\t\treturn \n\t\t\t},\n\t\t\tsetter:function (val){\n\t\t\t\tthis.age = val;\n\t\t\t}\n\t\t})\n\t}\n}\n")])])]),s("h3",{attrs:{id:"静态成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态成员"}},[t._v("#")]),t._v(" 静态成员")]),t._v(" "),s("p",[t._v("构造函数本身的成员，自己的成员。")]),t._v(" "),s("p",[t._v("使用 static 关键字来定义。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Class A{\n\tstatic a = 1;\n\tstatic methods(){\n\t\n\t}\n}\nA.a // 1\nA.methods() //\n")])])]),s("h3",{attrs:{id:"字段初始化器-es7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字段初始化器-es7"}},[t._v("#")]),t._v(" 字段初始化器(ES7)")]),t._v(" "),s("ul",[s("li",[t._v("使用 static 的字段初始化器，添加的是静态成员")]),t._v(" "),s("li",[t._v("没有使用 static 的字段初始化器，添加的成员位于对象上，即创建出来的实例每个都有。")]),t._v(" "),s("li",[t._v("箭头函数在字段初始化器位置上，指向当前对象。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Class A{\n \tstatic a = 1; // 静态成员\n \tb = 2;\n \tc = 3;\n \tprint = () =>{\n \t\t\n \t}\n \t// 相当于 下面这种写法。\n \tconstructor(){\n \t\tthis.b = 2;\n \t\tthis.c = 3;\n \t\tthis.print = ()=>{} // 箭头函数的this由定义的位置决定。\n \t}\n \t\n \t\n}\n")])])]),s("h3",{attrs:{id:"类的继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类的继承"}},[t._v("#")]),t._v(" 类的继承")]),t._v(" "),s("ul",[s("li",[t._v("extends   继承，用于类的定义")]),t._v(" "),s("li",[t._v("super\n"),s("ul",[s("li",[t._v("直接当做函数使用，表示父类构造函数。")]),t._v(" "),s("li",[t._v("如果当做对象使用，则表示父类的原型。")])])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('class Person {\n  constructor(height, sex, weight) {\n    this.height = height;\n    this.sex = sex;\n    this.weight = weight;\n  }\n  print() {\n    console.log(`身高：${this.height}`);\n    console.log(`体重：${this.weight}`);\n    console.log(`性别：${this.sex}`);\n  }\n}\n\nclass Chinese extends Person {\n  constructor(country, name, height, sex, weight) {\n    super(height, sex, weight);\n    this.country = country;\n    this.name = name;\n  }\n}\n\nvar p1 = new Chinese("中国", "xiao ming", 185, "男", 140);\nconsole.log(p1);\n')])])]),s("p",[t._v("等同于：借用构造函数添加成员，修改子类 "),s("code",[t._v("prototype")]),t._v(" 的隐式原型指向父类的原型对象。完成继承链。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('function Person(height, sex, weight) {\n  this.height = height;\n  this.sex = sex;\n  this.weight = weight;\n}\nPerson.prototype.print = function () {\n  console.log(`身高：${this.height}`);\n  console.log(`体重：${this.weight}`);\n  console.log(`性别：${this.sex}`);\n};\n\nfunction Chinese(country, name, height, sex, weight) {\n  Person.call(this, height, sex, weight);\n  this.country = country;\n  this.name = name;\n}\nObject.setPrototypeOf(Chinese.prototype, Person.prototype);\n\nvar p2 = new Chinese("中国", "xiao ming", 185, "男", 140);\nconsole.log(p2);\n')])])]),s("p",[t._v("如果子类中没有定义构造函数，则默认使用父类的构造函数。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class Person {\n  constructor(height, sex, weight) {\n    this.height = height;\n    this.sex = sex;\n    this.weight = weight;\n  }\n  print() {\n    console.log(`身高：${this.height}`);\n    console.log(`体重：${this.weight}`);\n    console.log(`性别：${this.sex}`);\n  }\n}\n\nclass Chinese extends Person {\n \t\n}\n\n// 等同于下面的情况，表现为参数错位。！！！！！\nclass Chinese extends Person {\n \tconstructor(country, name, height, sex, weight) {\n    super(country, name, height);\n  }\n}\n")])])]),s("p",[t._v("重写父类的原型方法。")]),t._v(" "),s("p",[t._v("可以直接使用同名方法覆盖的方式全部重写父类的原型方法，也可以通过调用父类的原型方法，加以修改，得到自己的方法。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class Chinese extends Person {\n  constructor(country, name, height, sex, weight) {\n    super(height, sex, weight);\n    this.country = country;\n    this.name = name;\n  }\n  // #1\n  print() {\n    console.log(`姓名：${this.name}`);\n    console.log(`国籍：${this.country}`);\n    console.log(`身高：${this.height}`);\n    console.log(`体重：${this.weight}`);\n    console.log(`性别：${this.sex}`);\n  }\n  // #2\n  print() {\n    console.log(`姓名：${this.name}`);\n    console.log(`国籍：${this.country}`);\n    super.print();\n  }\n}\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);