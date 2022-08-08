## Gpu & Layout

gpu 俗称显卡



### reflow

改变html 的结构触发 reflow

+ 改变窗口大小
+ 改变文字大小
+ 内容的改变，输入框输入文字
+ 激活伪类，如:hover
+ 操作 class 属性
+ 脚本操作 dom
+ 计算 offsetWidth 和 offsetHeight
+ 设置 style 属性



### repaint

如果只是改变某个元素的背景色、文字颜色、边框颜色，不影响它周围或内部布局的属性

repaint 速度优于 reflow。



告诉浏览器把 `transform` 这种点阵类型的操作，放到 GPU 去处理。

`will-change:transform`





**浏览器刷新页面的频率 1s 60次**



### 渲染引擎的工作原理

```
+ 下载 html
+ 下载 css									   下载 js
+ 根据css文件构建css规则语法树		 根据 domAPI 构建出 dom 树
+ css规则语法树								 根据 cssomAPI 构建出 cssom 树
+ 生成dom树										cssom树
+ 由dom树和cssom树两者组合成 renderTree
+ renderTree 描述出页面的结构（Layout）
+ 然后对这个 Layout 进行渲染
```

