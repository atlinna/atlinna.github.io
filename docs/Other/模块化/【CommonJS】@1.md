## CommonJS

### CommonJS 规范：
+ 所有的JS文件均是一个模块
+ 所有的模块中的全局变量、函数、均不会产生污染
+ 当一个模块需要提供一些东西给别的函数使用时，需要把这些东西**导出**
+ 当一个模块需要用到别的模块的东西时，需要**导入**（模块路径必须以./ 或 ../开头）
+ 模块有缓存，第一次运行模块后，导出结果会被缓存，之后再使用该模块，直接使用缓存结果。

### 导出
通过 module.exports 来导出。
```js
// 假设有 utils.js
function add(a,b){
  return  a + b;
}

module.exports = {
  add,
}
```

### 导入
通过 require 导入，理论上来讲，你导出的东西是什么，导入的就是什么
```js
const utils = require('./utils.js');
console.log(typeof utils.add) // function
```

**当js解析到require的时候，会跑到那个路径下面，找到这个js，然后把它执行一遍，然后将结果放到 module 的 exports 这个属性里面。**
当我们再次引用同一文件时，由于之前已经执行过一次，所以不会再次执行而是直接使用缓存值。
