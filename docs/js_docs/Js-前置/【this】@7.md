## This

```
				var a = {
            name: 1,
            say: function () {
                console.log(this.name)
            }
        }

        var b = {
            name: 'ello',
            say: function (callback) {
             		// this --> b
                callback()
            }
        }
        
        var name = 3;

        b.say(a.say)  // 3
```

将 a 的 say 通过参数传递 隐式丢失 相当于 callback = a.say ;

### 链式调用

通过返回 this 其调用自身的方法。

```
        function jQuery(options) {
            this.options = options;
            this.width = function (width) {
                return this
            }
            this.height = function (){
                return this
            }
            this.solo = function () {
                console.log(this)
            }
        }

        var jq = new jQuery()
        jq.width().height().solo()
```

