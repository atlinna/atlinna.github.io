## Symbol

通过 Symbol 函数来生成符号

符号的初衷是为了给对象设置私有变量

特征：

+ 没有字面量
+ 使用 typeof 得到的类型是 symbol
+ 每次调用 Symbol 函数得到的符号永不相等，无论是否用同一个名称生成。
+ 符号可以作为对象的属性名，称之为符号属性
  + 可以让这些属性无法通过常规的方式被外界访问
  + 符号属性不能枚举，for-in 循环无法读取到该属性，Object.keys 方法也无法得到符号属性。
  + Object.getOwnPropertyNames 可以得到所有无法枚举的属性，但是仍然无法使用。
  + ES6 新增 Object.getOwnPropertySymbol 方法，可以读取到符号
+ 符号不能被隐式转换为数字，但是可以通过String 转换为字符串。

## 共享符号

Symbol.for(name) 如果 name 相同则返回相同的 Symbol。



## 知名符号

1、intanceof

实际上调用的是 `F[Symbol.hasIntance](obj)`

2、concat

如果参数中存在数组，则会将数组分隔然后拼接，

`Symbol.isConcatSpreadAble` 如果将他设置为 true 则会分隔，false 则不变。

3、Symbol.toPrimitive

对象在转换时会先调用 valueOf、toString。现在是调用这个 Symbol.toPrimitive 这个函数来转换。

4、Symbol.toStringTag

会影响原生的 toString 方法。[Object Object] 可以改变。

