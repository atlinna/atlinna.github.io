## Promise 面试题

进入事件队列的函数有以下几种：
+ `setTimeout` 的回调，宏任务（macro task）
+ `setInterval` 的回调，宏任务（macro task）
+ `Promise` 的 then` 函数回调，微任务（micro task）
+ `requestAnimationFrame` 的回调，宏任务（macro task）
+ 事件处理函数，宏任务（macro task）
**微队列要优先于宏队列**



### 异步队列探索

`Promise` 回调与 `MutationObserver` 回调会放入微队列中执行。

```
function onMicroTask(callback) {
	// 判断是否为 node 环境，process.nextTick 会执行微队列
  if (process && process.nextTick) {
    process.nextTick(callback);
  } else if (MutationObserver) {
    // 浏览器 MutationObserver 回调会放入微队列执行。
    const ele = document.createElement("p");
    const observer = new MutationObserver(callback);
    observer.observe(ele, { attributes: true });
    ele.style.width = 1;
  } else {
    setTimeout(callback, 0);
  }
}
```



### Promise 手写

```
const PENDDING = Symbol("pendding");
const FUFILLED = Symbol("fufilled");
const REJECTED = Symbol("rejected");

class MyPromise {
  /**
   *
   * @param {Function} excutor 执行器，用来标记任务的状态
   */
  constructor(excutor) {
    this._status = PENDDING; // 任务状态
    this._value = undefined; // 任务数据
    // 如果 Promise 内部报错，将直接调用 reject
    try {
      // 由于我们的 resolve、reject 是在class中 会启用严格模式，且被直接调用，this 隐式丢失
      excutor(this._resolve.bind(this), this._reject.bind(this));
    } catch (reason) {
      this._reject(reason);
    }
  }
  /**
   * 改变状态
   * @param {Symbol} status
   * @param {any} value
   */
  _changeStatus(status, value) {
    // 状态只能由未决变为已决，且只能改变一次
    if (this._status != PENDDING) return;
    this._status = status;
    this._value = value;
  }
  /**
   *
   * @param {any} data 标记任务成功
   */
  _resolve(data) {
    this._changeStatus(FUFILLED, data);
  }
  /**
   *
   * @param {any} reason 标记任务失败
   */
  _reject(reason) {
    this._changeStatus(REJECTED, reason);
  }
}

const p = new MyPromise((resolve, reject) => {
  reject("hello");
  resolve(1);
});

console.log(p);
```



