## CommonJS

+ 暴露模块 `module.exports =  value ` 或 `exports.prop = value`
+ 引入模块 `require(src)`



1. 一个文件就是一个模块，require 方法用来加载模块，该方法读取一个文件并执行，最后返回文件内部的 `module.exports`对象
2. require 是默认读取 .js 文件的，所以 require 可以不写后缀
3. `module.exports` 属性标识当前模块对外输出的接口，其他文件加载该模块，实际上就是读取 `module.exports` 变量；
   1. 为了方便也可以用 exports ， exports 指向 `module.exports`
   2. `exports.prop`相当于在导出的对象上添加 prop 属性，即 `module.exports.prop = 'xxx'`
4. `exports = xxx` 相当重新为 exports 赋值，切断了和 `module.exports`的关联，调用模块就不能访问 `exports`的对象及其属性；

