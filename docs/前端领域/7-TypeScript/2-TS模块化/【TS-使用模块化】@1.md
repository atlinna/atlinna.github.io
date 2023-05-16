### TS 如何使用模块化



统一使用 ESM 的导入导出标准

即 export 或 export default 导出

使用 import 导入



但是建议使用 export 来导出，因为默认导出无法进行推导，享受不到智能提示。



**注意：不要在后面添加 .ts 后缀名**



### 编译结果中的模块化

可以在 tsconfig.json 中配置要使用的模块化标准

TS中的模块化在编译结果中：

1. 如果编译结果的模块化标准是 ES6 则没有区别。
2. 如果编译结果的模块化标准是 commonjs，则导出的声明会变成 exports 的属性，默认的导出会变成 exports 的 default 属性；



### 在TS 中使用 CommonJS 模块化规范

可以使用。但是书写方式需要改变

导出：export = xxx

导入：import xxx from xxx



### 模块解析

TS 中有两种模块解析策略

- classic 经典
- node 解析策略 (唯一的区别就是将 js 替换为 ts)
  - 相对路径 require('./xxx')
  - 非相对模块 require('xxx')