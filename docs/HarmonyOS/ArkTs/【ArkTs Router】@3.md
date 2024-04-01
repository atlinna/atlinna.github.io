# ArkTS Router

ArkTs 的路由管理与 vue-router 非常相似，几乎可以说是无缝衔接了。

router 中的几个方法



### router 的导航模式

+ Single
+ Standard

Single 模式下，页面实例只会创建一次, 栈内的数量取决于打开的不同页面的数量。

Standard 模式，页面实例会重复创建，栈内元素的数量取决于页面跳转的数量。

默认情况下，router 的跳转模式使用的是 Standard

### pushUrl

pushUrl 可以像路由栈的栈顶添加一个页面。

当然这取决于使用何种模式进行路由跳转。

pushUrl 的第一个参数是一些配置如跳转的页面路径、携带的参数等。

```
router.pushUrl({
	url:'pages/xxxx',
	params:{}
})
```

**url** ,url 是一个以 pages 开始的绝对路径 前面不要加 "/"

**params** , params 是一个引用类型的数据，且只接受引用类型的数据，如果传入基本类型的数据，那么得到的将是 undefined

### replaceUrl

与 pushUrl 基本相同，区别在于：

replaceUrl 会替换当前栈顶元素

在 Standard 模式下，会新创建一个页面实例，替换当前的页面，栈内数量不变。

在 Single 模式下，会将离栈顶最近的一个实例移到栈顶，然后销毁当前页面实例，栈内数量 -1

如果栈内不存在跳转页面，则会创建新的页面实例。



### back

返回。

可传参，参考 pushUrl 参数配置。



### clear

清空栈内元素。



### getParams

获取路由跳转的参数。仅为引用类型的数据。



### showAlertBeforeBackPage

打开一个询问弹窗。

可配置

```
router.showAlertBeforeBackPage({message: 'xxxx'});
```

确定会继续执行下面的代码，

否则跳出当前操作。