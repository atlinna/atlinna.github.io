### 请介绍一下 Javascript 中的垃圾回收机制
javascript 具有自动垃圾回收机制。垃圾收集器会按照规定的时间间隔周期性的执行。
javascript 常见的垃圾回收方式：标记清除，引用计数。
1、 标记清除：
 工作原理：当变量进入环境时，将这个变量标记为”进入环境“。当变量离开环境，则将其标记为”离开环境“，标记”离开环境“的就回收内存
 流程：
+ 垃圾回收期，在运行的时候会给存储在内存中的所有变量都加上标记；
+ 去掉环境中的变量以及被环境中的变量引用的 变量的标记；
+ 被加上标记的会被视为准备删除的变量；
+ 垃圾回收器完成内存清理工作，销毁那些带标记的值并回收他们所占用的内存空间。

```
function test(){
    var a = 1; // 标记进入
    var b = 2; // 标记进入
}

test() // 执行完毕 a\b又被标记清除
```

2、引用计数：
工作原理：跟踪记录每个值被引用的次数；
流程：
声明一个变量并将一个引用类型的值赋值给变量，这个引用类型的值的引用次数就是1
同一个值又被赋值给另一个变量，这个歌引用类型的引用次数加一
当包含这个引用类型的值的变量又被赋值成另一个值那么这个引用类型值的引用次数减一
当引用次数变成0，说明没办法访问这个值了
当垃圾收集器下一次运行时，它会释放引用次数是0的值所占用的内存

### 什么是内存泄漏
程序的运行需要内存。只要程序提出要求，操作系统或者运行时就必须供给内存。
对于持续运行的服务进程，必须及时释放不在用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。
也就是说，不再用到的内存，如果没有及时释放没救叫做内存泄漏。