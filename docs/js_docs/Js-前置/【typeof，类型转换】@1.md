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


如果使用typeof 打印未定义的变量，是不报错的且返回 undefined
typeof(typeof a)  --》  “string”