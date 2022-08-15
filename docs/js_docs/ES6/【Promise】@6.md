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