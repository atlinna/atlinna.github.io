## AMD

CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。

AMD规范则是非同步加载模块，允许指定回调函数。

由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以CommonJS规范比较适用。

但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范。



### 定义模块

```js
define(function (){
    return 'module'
})
```

```js
// 定义有依赖的模块
define(['module1','module2'],function (m1,m2){
    return 'module'
})
```



### 引入模块

```js
require(['module1','module2'],function (m1,m2){
    // use module m1 or m2
})
```

AMD模式可以用于浏览器环境，并且允许非同步加载模块，也可以根据需要动态加载模块。

### 
