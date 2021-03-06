## 关于this

**任何足够先进的技术都和魔法无异。 ———— Arthur C.Clarke**

### 对于 this 的误解
我们之后会解释 this 到底是如何工作的，但是首先需要消除一些关于 this 的错误认识。
太拘泥于“this”的字面意思就会产生一些误解。有两种常见的对于 this 的解释，但是它
们都是错误的。

+ 人们很容易把 this 理解成指向函数自身，这个推断从英语的语法角度来说是说得通的。
+ this 指向函数的作用域。需要明确的是， this 在任何情况下都不指向函数的词法作用域。

首先我们先来看下第一种
```
    function sum(num) {
        if (num < 5) {
            return this(num + 1)
        }
        return num
    }
```
我们有一个函数 sum ，这个 sum 呢有一个功能就是判断这个数是不是小于5，如果小于5，则累加到5并返回，如果大于或等于5，则直接返回传入数字。
假设 this 现在指向函数本身，那么逻辑就能说的通了。
但是，事实是，我们调用函数会报错了，他说这个 this 不是一个函数。
根据我们分析，在非严格模式下 this 默认指向全局对象 window 也就是说，我们可以通过 this.sum 调用这个函数。当然这样是有点呆，舍近求远
+ 可以直接通过词法作用域标识符 sum 调用自身
+ 可以通过 arguments.callee 调用自身，但是这种方式已经弃用，不再建议使用。

第二种
```
    function foo() {
        var a = 2;
        this.bar();
    }

    function bar() {
        console.log(this.a);
    }

    foo();
```
我们有这样一个代码块。
书上说 foo 执行会失败，在这里猜测，可能作者运行在严格模式下。
如果是在非严格模式下，调用 this.bar 这个操作是可行的。但是后面，通过调用函数 bar 想要联通 foo 与 bar 的词法作用域。
这个操作就不存在了，因为在函数 bar 中，this 指向的还是 window，由于在全局中没有找到 a 这个变量，于是会帮我们创建一个。

 this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。 this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。
 
 当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。 this 就是记录的
其中一个属性，会在函数执行的过程中用到。

**this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。**
