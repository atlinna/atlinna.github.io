事件传播三个阶段：
+ 事件捕获
+ 处于目标
+ 事件冒泡

谈一谈事件委托以及冒泡原理
事件委托，又被称为事件代理。在 js 中，添加到页面上的时间处理程序数量将直接关系到页面整体的运行性能。导致这一问题的原因是多方面的。
首先每个函数都是对象，都会占用内存。内存中的对象越多，性能越差。其次，必须事先指定所有事件处理程序而导致的DOM 访问次数，会延迟整个页面的交互就绪时间。
对时间处理程序过多问题的解决方案就是事件委托。
事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

事件冒泡，是指事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的点
如：button  --> div --> document --> window