## Promise 面试题

进入事件队列的函数有以下几种：
+ `setTimeout` 的回调，宏任务（macro task）
+ `setInterval` 的回调，宏任务（macro task）
+ `Promise` 的 then` 函数回调，微任务（micro task）
+ `requestAnimationFrame` 的回调，宏任务（macro task）
+ 事件处理函数，宏任务（macro task）
**微队列要优先于宏队列**
