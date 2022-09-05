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

### 判断是否为 Promise

只需要判断该对象是否满足 Promise A+ 规范

即对象是否存在且是否含有 then 方法

```
function isPromise(obj) {
  return !!(
    obj && typeof obj === "object" && obj.then && typeof obj.then == "function"
  );
}
```



### Promise 手写

```
const PENDDING = Symbol("pendding");
const FUFILLED = Symbol("fufilled");
const REJECTED = Symbol("rejected");

function onMicroTask(callback) {
    if (process && process.nextTick) {
        process.nextTick(callback);
    } else if (MutationObserver) {
        const ele = document.createElement("p");
        const observer = new MutationObserver(callback);
        observer.observe(ele, { attributes: true });
        ele.style.width = 1;
    } else {
        setTimeout(callback, 0);
    }
}

function isPromise(obj) {
    return !!(
        obj && typeof obj === "object" && obj.then && typeof obj.then == "function"
    );
}

class MyPromise {
    /**
     *
     * @param {Function} excutor 执行器，用来标记任务的状态
     */
    constructor(excutor) {
        this._status = PENDDING; // 任务状态
        this._value = undefined; // 任务数据
        this._handlers = []; // 用来存放 then 的后续操作
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
        this._runHandler();
    }
    /**
     *
     * @param {any} reason 标记任务失败
     */
    _reject(reason) {
        this._changeStatus(REJECTED, reason);
        this._runHandler();
    }
    /**
     * 将后续的处理放入执行栈中
     * @param {*} excutor
     * @param {*} status
     * @param {*} resolve
     * @param {*} reject
     */
    _pushState(excutor, status, resolve, reject) {
        this._handlers.push({
            excutor,
            status,
            resolve,
            reject,
        });
    }
    /**
     * 调用执行栈中的函数。
     */
    _runHandler() {
        if (this._status === PENDDING) return;
        while (this._handlers.length > 0) {
            const handler = this._handlers[0];
            this._callHandler(handler);
            this._handlers.shift();
        }
    }
    /**
     * 执行处理函数
     */
    _callHandler({ excutor, status, resolve, reject }) {
        onMicroTask(() => {
            if (this._status != status) return;
            if (typeof excutor != "function") {
                this._status === FUFILLED ? resolve(this._value) : reject(this_value);
                return;
            }
            try {
                const result = excutor(this._value);
                if (isPromise(result)) {
                    result.then(resolve, reject);
                } else {
                    resolve(result);
                }
            } catch (err) {
                reject(err);
            }
        });
    }
    /**
     *
     * @param {*} onFufilled
     * @param {*} onRejected
     */
    then(onFufilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this._pushState(onFufilled, FUFILLED, resolve, reject);
            this._pushState(onRejected, REJECTED, resolve, reject);
            this._runHandler();
        });
    }
    /**
     * 复用 then 函数
     * @param {Function} onRejected 失败回调 
     * @returns 
     */
    catch(onRejected) {
        return this.then(null, onRejected)
    }

    finally(onSettled) {
        return this.then((data) => {
            onSettled();
            return data;
        }, (reason) => {
            onSettled();
            throw reason;
        })
    }
    /**
     * 特殊情况：
     * 1、传入的data本身就是ES6的Promise对象，直接返回这个Promise
     * 2、传入的data是PromiseLike（即符合Promise A+ 规范的），返回新的Promise，状态和其保持一致。
     * 3、返回一个成功的Promise
     * @param {*} data 
     */
    static resolve(data) {
        if (data instanceof MyPromise) {
            return data;
        }
        return new MyPromise((resolve, reject) => {
            if (isPromise(data)) {
                data.then(resolve, reject)
            } else {
                resolve(data)
            }
        })
    }
    /**
     * 返回一个拒绝的Promise
     * @param {*} reason 
     */
    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }

    /**
     * 返回一个新的Promise
     * 该Promise的状态取决于proArr的执行
     * proArr是一个迭代器，包含多个Promise
     * 全部Promise成功，则返回的Promise成功，数据为所有Promise成功的数据，并且顺序是按照传入的顺序
     * 只要有一个Promise失败，则返回的Promise失败，原因是第一个失败的Promise的原因
     * @param {Iterator} proArr 
     */
    static all(proArr) {
        return new MyPromise((resolve, reject) => {
            try {
                let count = 0;
                let fufilledNums = 0;
                const proResults = new Array();
                for (const p of proArr) {
                    let cur = count;
                    count++;
                    MyPromise.resolve(p).then((data) => {
                        fufilledNums++;
                        proResults[cur] = data;
                        if (fufilledNums == count) {
                            resolve(proResults)
                        }
                    }, reject)
                }
                if (count == 0) {
                    resolve(proResults)
                }
            } catch (reason) {
                reject(reason)
            }
        })
    }
    /**
     * 等待所有的Promise有结果之后
     * 该方法返回的Promise完成
     * 并且按照顺序将所有结果汇总
     * @param {Iterator} proArr 
     */
    static allSettled(proArr) {
        var pros = [];
        for (let p of proArr) {
            pros.push(
                MyPromise.resolve(p).then(data => ({
                    status: FUFILLED,
                    value: data
                }), reason => ({
                    status: REJECTED,
                    reason
                }))
            )
        }
        return MyPromise.all(pros)
    }

    /**
     * 
     * @param {Iterator} proArr 
     */
    static race(proArr) {
        return new MyPromise((resolve, reject) => {
            for (let p of proArr) {
                MyPromise.resolve(p).then(resolve, reject)
            }
        })
    }
}

const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});


MyPromise.all([
    MyPromise.resolve(1),
    MyPromise.resolve(2),
    MyPromise.resolve(3),
    4,
]).then(data => {
    console.log(data);
}, reason => {

})
```



