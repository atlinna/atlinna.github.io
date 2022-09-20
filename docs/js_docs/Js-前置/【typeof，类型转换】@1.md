## Typeof 与 类型转换
typeof(value)
能够返回我们传入数据的类型
typeof能够返回给我们六种类型
+ number
+ string
+ boolean
+ object
+ function
+ undefined

### 类型转换
被运算符包裹的


转换为数字的 Number
true -- 1
false -- 0
“1“ -- 1
null -- 0
undefined -- NaN

parseInt 转换成整形数据


### 隐式类型转换
+ isNaN()   调用了 Number
+ ++、+/-（正负）  Number
+ + （加号：两边有一个字符串就会把另一个也变成字符串 String）
+ *、%、/、-       Number
+ &&、||、！    Boolean
+ </>/<=/>= 
+ == 、 != 

### == 判断
`==` 在判断之前会进行隐式得类型转换。 即**类型不同，但是值相同，等式成立**
+ 字符串与数字比较  --> 会将字符串类型转为数字类型比对
+ 其他类型与布尔类型 --> 会将布尔类型转换为数字类型
+ `null` 和 `undefined` --> `null == undefined 为真` `null === undefined 为假` 
+ 对象与非对象比较 --> 按照 toPrmitive 规则先将对象转换为基本类型得数据在比较 
+ 

如果使用typeof 打印未定义的变量，是不报错的且返回 undefined
typeof(typeof a)  --》  “string”
