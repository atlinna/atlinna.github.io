##  Reflect

反射

Reflect 是什么？

Reflect 是一个内置的 JS 对象，它提供了一系列方法，可以让开发者通过调用这些方法，访问一些 JS 底层功能。

使用 Reflect 可以实现如果：属性的赋值与取值、调用普通函数、调用构造函数、判断属性是否存在于对象中··· 等等功能



ES6深度贯彻**减少魔法、让代码更纯粹**。所以将这些底层功能抽离出来再由 Reflect 来映射这些功能。



### ES5中常见的 API

+ Reflect.set(target,key,value) : 为target对象的 key 属性 赋值为 value，为对象的属性赋值。 obj.key = value;
+ Reflect.get(target,key) :    读取对象 target 的属性 key ，读取对象属性值 obj.key
+ Reflect.apply(target,thisArgument,argumentsList) :   调用一个指定的函数，并绑定 this 和 参数列表，等同于函数调用。 function.apply(this,arguments)
+ Reflect.deleteProperty(target,key):  删除一个对象的属性   delete  obj.key
+ Reflect.defineProperty(target,key,attributes):  类似于 Obect.defineProperty ，不同的是如果配置出现问题，返回false 而不是报错。
+ Reflect.construct(target,argumentsList):  用构造函数的方式创建一个对象  new Function()
+ Reflect.has(target,key) :  判断一个对象是否拥有一个属性。   key in obj

