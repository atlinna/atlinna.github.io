(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{616:function(n,e,t){"use strict";t.r(e);var s=t(13),a=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"对象继承方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象继承方案"}},[n._v("#")]),n._v(" 对象继承方案")]),n._v(" "),t("h3",{attrs:{id:"_1、原型链继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、原型链继承"}},[n._v("#")]),n._v(" 1、原型链继承")]),n._v(" "),t("p",[n._v("构造函数、实例对象和原型之间的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，每个实例都有一个原型对象的指针\n继承的本质就是 通过父类的实例来重写子构造函数的原型对象。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person() {\n  this.name = 'lisa';\n}\n\nfunction Chinese() {\n  this.color = 'yellow';\n}\nChinese.prototype = new Person()\nChinese.prototype.constructor = Chinese\n\n\n\nvar c = new Chinese()\nconsole.log(c);\n")])])]),t("p",[n._v("存在的缺点：多个实例对引用类型的数据操作冲突")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('function Person() {\n  this.hobbies = [\'football\', \'basketball\', \'baseball\'];\n}\n\nfunction Son() {\n\n}\n\nSon.prototype = new Person();\nSon.prototype.constructor = Son;\n\nvar s = new Son();\nvar c = new Son();\n\nconsole.log(s.hobbies);  // ["football", "basketball", "baseball"]\ns.hobbies.pop();\nconsole.log(c.hobbies);  // ["football", "basketball"]\n')])])]),t("h3",{attrs:{id:"_2、借用构造函数继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、借用构造函数继承"}},[n._v("#")]),n._v(" 2、借用构造函数继承")]),n._v(" "),t("p",[n._v("使用父类的构造函数来增强字类实例，等同于复制弗雷的实例给字类")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('function Person() {\n  this.hobbies = [\'football\', \'basketball\', \'baseball\'];\n}\n\nfunction Son() {\n  Person.call(this)\n}\n\nvar s = new Son();\nvar c = new Son();\n\nconsole.log(s, c);\ns.hobbies.pop();\nconsole.log(s.hobbies);  // ["football", "basketball"]\nconsole.log(c.hobbies);  // ["football", "basketball", "baseball"]\n')])])]),t("p",[n._v("核心代码是 Person.call(this)  new 关键字已经将 this 绑定为新创建的对象 这个时候 我们调用 父类构造函数并将 this 指向我们字类创建的对象 为 子对象添加属性（相当于复制属性）变相的把父类属性复制到子实例中\n这样存在缺点：")]),n._v(" "),t("ul",[t("li",[n._v("只能继承父类的实例属性和方法，不能继承父类的原型。也就是说没有父类原型的属性和方法。")]),n._v(" "),t("li",[n._v("无法实现复用，每个字类都会从父类那里复制，影响性能。")])]),n._v(" "),t("h3",{attrs:{id:"_3、组合继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、组合继承"}},[n._v("#")]),n._v(" 3、组合继承")]),n._v(" "),t("p",[n._v("组合上述两种方法就是组合继承。用原型链实现对原型属性和方法的继承，用借用构造函数计数来来实现实例属性的继承。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person() {\n  this.hobbies = ['football', 'basketball', 'baseball']\n}\n\nfunction Son(age) {\n  Person.call(this)\n  this.age = age;\n}\n\nSon.prototype = new Person()\nSon.prototype.constructor = Son;\n\n\nvar s = new Son(1)\nvar c = new Son(2)\nc.hobbies.pop()\nconsole.log(s); //\nconsole.log(c); //\n")])])]),t("p",[n._v("缺点：")]),n._v(" "),t("ul",[t("li",[n._v("第一次调用 Person 是为了修改 Son 的原型 调用后 给原型添加了 一个属性 hobbies")]),n._v(" "),t("li",[n._v("第二次调用 Person 是创建实例 s 调用后 给实例 s 添加了 属性 hobbies\n实例对象 s 上的 hobbies 属性屏蔽了其原型对象上（Son.prototype）上的同名属性。\n所以，组合模式的缺点就是在使用字类创建实例对象时，其原型中会存在两份相同的属性/方法。")])]),n._v(" "),t("h3",{attrs:{id:"_4、原型式继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、原型式继承"}},[n._v("#")]),n._v(" 4、原型式继承")]),n._v(" "),t("p",[n._v("本质就是利用一个空对象作为中介，将某个对象直接复制给"),t("strong",[n._v("空对象构造函数的原型")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function object(obj) {\n  function F() { }\n  F.prototype = obj\n  return new F()\n}\n\nconsole.log(object({ name: 'zhang san', age: 18 }));\n")])])]),t("p",[n._v("object 对传入其中的函数执行了一次"),t("strong",[n._v("浅复制")]),n._v("，将构造函数 F 的原型直接指向传入对象\n缺点：")]),n._v(" "),t("ul",[t("li",[n._v("同原型链继承相同，存在对引用类型数据的篡改。")]),n._v(" "),t("li",[n._v("不能传入参数。")])]),n._v(" "),t("h3",{attrs:{id:"_5、寄生式继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、寄生式继承"}},[n._v("#")]),n._v(" 5、寄生式继承")]),n._v(" "),t("p",[n._v("核心：在原型式继承的基础上，增强对象，返回构造函数")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function object(obj) {\n  function F() { }\n  F.prototype = obj\n  return new F()\n}\n\nfunction createPalace(origin) {\n  var clone = object(origin)\n  console.log(clone);\n  clone.sayHello = function () {\n    console.log(this.name);\n  }\n  return clone\n}\n\n\np = createPalace({ name: 'zhang san' })\np.sayHello() // zhang san\n")])])]),t("p",[n._v("函数的作用主要是用来为构造函数新增属性，和方法，来增强函数\n缺点（同原型式继承）：")]),n._v(" "),t("ul",[t("li",[n._v("同原型链继承相同，存在对引用类型数据的篡改。")]),n._v(" "),t("li",[n._v("不能传入参数。")])]),n._v(" "),t("h3",{attrs:{id:"寄生组合式继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#寄生组合式继承"}},[n._v("#")]),n._v(" 寄生组合式继承")]),n._v(" "),t("p",[n._v("结合借用构造函数传递参数和寄生模式实现继承")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nPerson.prototype.sayName = function () {\n  console.log('My name is ' + this.name);\n}\n\nfunction Son(name, age, sex) {\n  Person.call(this, name, age);\n  this.sex = sex;\n}\n\n// ---------------------这--是--一--条--分--隔--线--------------------------------------------\n\nfunction inheritPrototype(subType, superType) {\n  var prototype = Object.create(superType.prototype) // 创建一个继承自父类型的空对象\n  prototype.constructor = subType; // 让 constructor 指向要继承的构造函数（子类型）\n  subType.prototype = prototype; // 让子类型的原型对象指向空对象 完成继承\n}\n\ninheritPrototype(Son, Person)\n\nSon.prototype.sayAge = function () {\n  console.log('I am ' + this.age + ' years old');\n}\n\nvar p1 = new Son('zhang san', 18, '男')\nvar p2 = new Son('xiao hong', 19, '女')\n\n\n")])])]),t("p",[n._v("可能有的人觉得这个例子有点长，我们分开来看，代码上有一条分割线，我们先看上半部分\n首先定义了一个父类的构造函数 Person 接受两个参数 name、age 然后再原型又定义了一个方法 sayName 只要字类继承我们就能拿到父类中的属性和方法对吧， 然后定义了一个字类的构造函数 Son 我们发现 Son 继承的方式是借用构造函数的方式对吧。\n然后我们来到下半部分， 一个函数 inheritPrototype 他接受两个参数 一个 subType 一个 superType 父子类型的构造函数，这里又使用了寄生式的继承方案替换了 子构造函数的 prototype\n这样做的好处是\n"),t("strong",[n._v("因为只调用一次 父类构造函数，并且因此避免了在子类型的原型（Son.prototype）上创建不必要、多余的属性。同时还能保持原型链不变；因此能够正常使用 instanceof 和 isPrototypeOf()")])]),n._v(" "),t("p",[n._v("这是最成熟的方法，也是现在库实现的方法")]),n._v(" "),t("h3",{attrs:{id:"混入方式继承多个对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#混入方式继承多个对象"}},[n._v("#")]),n._v(" 混入方式继承多个对象")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Person(name) {\n  this.name = name;\n}\n\nfunction Action(type) {\n  this.type = type;\n}\n\nfunction School(level) {\n  this.level = level;\n}\n\nfunction Son(name, type, level, sex) {\n  Person.call(this, name)\n  Action.call(this, type)\n  School.call(this, level)\n  this.sex = sex;\n}\n\nSon.prototype = Object.create(Person.prototype);\nObject.assign(Son.prototype, Action.prototype, School.prototype)\nSon.prototype.constructor = Son;\n\n\nvar s = new Son('zhang san', 'Chinese', 6, '男')\nconsole.log(s);\n")])])]),t("h3",{attrs:{id:"es6-类继承-extends"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6-类继承-extends"}},[n._v("#")]),n._v(" ES6 类继承 extends")]),n._v(" "),t("p",[n._v("extends 关键字主要用于类声明或者类表达式中，以创建一个类，该类是另一个类的字类。其中 constructor 表示构造函数，一个类中只能有一个构造函数，有多个会报出 SyntaxError 错误，如果没有显式指定构造方法，则会添加默认的 constructor 方法。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Animal {\n  constructor(name, weight) {\n    this.name = name;\n    this.weight = weight;\n  }\n\n  sayHello() {\n    console.log('hello My Name is ' + this.name)\n  }\n}\n\nvar a = new Animal('Tony', 100)\n\nclass Tiger extends Animal {\n  constructor(name, weight, skill) {\n    super(name, weight) // !-1\n    this.skill = skill;\n  }\n\n  get skills() {\n    return this.skill.join(',')\n  }\n}\n\nvar t = new Tiger('Tips', 100, ['bite', 'run', 'power'])\n")])])]),t("p",[n._v("如果子类中存在构造函数，则需要在使用 this 前首先调用一下 super()。")]),n._v(" "),t("p",[n._v("extends 继承的核心代码如下，其实现和寄生组合式继承相同")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function _inherits(subType, superType) {\n  // 创建对象，创建父类原型的一个副本\n  // 增强对象，弥补因重写原型而失去的默认的 constructor 属性\n  // 指定对象，将新创建的对象赋值给子类型的原型\n  subType.prototype = Object.create(superType && superType.prototype, {\n    constructor: {\n      value: subType,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  })\n\n  if (superType) {\n    Object.setPrototypeOf ? Object.setPrototypeOf(subType, superType) : subType.__proto__ = superType;\n  }\n\n}\n")])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),t("h3",{attrs:{id:"_1、函数声明和类声明的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、函数声明和类声明的区别"}},[n._v("#")]),n._v(" 1、函数声明和类声明的区别")]),n._v(" "),t("p",[n._v("函数声明会提升，类声明不会。首先需要你声明一个类，然后再去调用执行这个类，不然就会 ReferenceError。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("let p = new Person()\n\nclass Person{}\n")])])]),t("h3",{attrs:{id:"_2、es6-与-es5-之间继承的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、es6-与-es5-之间继承的区别"}},[n._v("#")]),n._v(" 2、Es6 与 Es5 之间继承的区别")]),n._v(" "),t("ul",[t("li",[n._v("Es5的继承本质就是创建出子类实例的对象，然后将父类的方法添加到 this 上（Parent.call(this)）")]),n._v(" "),t("li",[n._v("Es6的继承实际上是先创建父类的实例对象 this，然后再用字类的构造函数修改 this。因为字类没有自己的 this 对象，所以必须在使用 this 前 先调用 super 方法，不然会报错。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);