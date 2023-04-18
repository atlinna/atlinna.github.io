### Plugin



plugin 其实就是一个 带有 apply 方法的对象

```
module.exports = class MyPlygin {
	apply(compiler){
		// compilation
	}
}
```



Web pack 会在初始化阶段生成编译对象 compiler ，整个编译过程只会生成一个 compiler（只有一次初始化）。

apply 函数 会在创建好 compiler 对象后运行。

后续的打包流程都是由另一个对象（compilation）负责（生成 chunk，合成资源）



可以通过在 apply 函数中注册事件来参与编译过程。具体格式：

```
compiler.hooks.事件名称.事件类型(name,function (compilation){
		// 
})
```

编译过程的干涉

通过 compiler 注册 beforeRun 在编译前添加一个钩子函数。

拿到 生成的 compilation ，然后注册 compilation 的事件来干涉编译过程。

```
module.exports = class MyPlugin{
	apply(compiler){
		compiler.hooks.beforeRun.tab('add-event',function (compilation){
		 // 注册 compilation 事件。
		})
	}
}
```



**webpack 就是通过各种事件来干预打包的过程。**