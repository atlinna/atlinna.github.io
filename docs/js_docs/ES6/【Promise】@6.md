## Promise

### Promise A+  规范

存在三种状态、两个阶段

+ pendding 挂起状态
+ fulfilled     成功
+ rejected    失败

只能从挂起到成功 或者 挂起到失败。

resolve(data) -> 处理成功

reject(reason) -> 处理失败

处理成功的方法为 onResolved

处理失败的方法为 onRejected

#### Promise 对象

```
未决阶段											已决阶段 
unsettled										 settled						data
 									----->		 完成状态 fulfilled =======》 onFulfilled(data)
挂起状态																				reason
pendding					----->     失败状态 rejected ======》 onRejected(reason)
```

### Promise Api

