#### Tree Shaking

webpack 会从入口模块出发寻找依赖关系

当分析一个模块时，webpack 会根据 ES6 的模块导入语句来判断，该模块依赖了另一个模块的哪个导出，webpack 之所以选择 ES6 的模块导入语句，是因为 ES6 模块有以下特点：

1. 导入导出语句只能是顶层语句
2. import 的模块名只能是字符串常量
3. import 绑定的变量是不可变的

这些特征都非常有利于分析出稳定的依赖

在具体分析依赖时，webpack 坚持的原则是：**保证代码正常运行，然后在尽量 tree shaking**

所以，如果你依赖的是一个导出对象，由于 js 语言的动态特性，以及 webpack 还不够只能，为了保证代码正常运行，它不会移除对象中的任何信息。

因此，我们在编写代码的时候，尽量：

+ 使用 export xxx 导出，而不是用 export default {} 导出
+ 使用 import  {xxx} from "xxxx" or import * as xxx from "xxx" 导入，而不是使用 import xxx from xxxx 导入

依赖分析完毕后，webpack 会根据每个模块每个导出是否被使用，标记其他导出为 dead code，然后交给代码压缩工具处理。

代码压缩工具最终移除掉那些 dead code 代码。