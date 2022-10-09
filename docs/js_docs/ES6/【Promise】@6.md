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
未决阶段										已决阶段 

unsettled								settled	     data
 						----->		 完成状态 fulfilled =======》 onFulfilled(data)
挂起状态
										    reason
pendding					----->    	 失败状态 rejected ========》 onRejected(reason)
```

### Promise Api

###### Promise.all([p1,p2])

全部成功才成功，如果有一个失败则失败。

###### Promise.any([p1,p2])

任何一个任务成功，则成功，全部失败则失败。

###### Promise.allSettled([p1,p2])

全部变为已决状态，则成功。没有失败！

###### Promise.race([p1,p2])

谁先变为已决状态，这个结果就是谁的状态。



### async、await

async 会将函数标记为异步函数，内部会返回一个 Promise

```
async function test(){
	return 123
}
// ====== 等效于=========
function test(){
	return Promise((resolve,reject)=>{
		 resolve(1)
	})
}
```

Await 会等待异步函数执行完毕，并且得到 Promise 中成功的数据，如果失败则抛出异常。

但是 await 必须放到函数中。

```
async function test(){
	return 123
}

async function main(){
	const data = await test();
}
// =========== 等效于 ========
async function main(){
  test().then(res=>{
  	const data = res;
  })
}
```

### Promise的链式调用规则
+ `then` 方法必定会返回一个新的 `Promise`
+ 新任务的状态取决于后续处理：
  + 若没有相关的后续处理，新任务的状态和前任务一致，数据未前任务的数据
  + 若有后续处理但还未执行，新任务挂起。
  + 若后续处理执行了，则根据后续处理的情况确定新任务的状态。
    + 后续处理执行无错，新任务的状态未完成，数据未后续处理的返回值。
    + 后续处理执行有错，新任务的状态为失败，数据为异常对象。
    + 后续执行后返回的是一个任务对象，新任务的状态和数据与该任务对象一致。
