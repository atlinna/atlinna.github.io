## CMD

CMD规范专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行。

CMD规范整合了CommonJS和AMD规范的特点。

在 Sea.js 中，所有 JavaScript 模块都遵循 CMD模块定义规范。



### 定义模块

```js
define(function (require,exports,module){
    exports.xxx = value;
    module.exports = value;
})
```

```js
// 依赖于其他模块
define(function (require,exports,module){
    var m2 = require('../m2.js');
    require.async('../m3.js',function (m3){
        
    })
    exports.prop = 'something';
})
```

### 引入使用模块

```js
define(function (require){
    var factory = require('./factory.js');
    var animal = require('./animal.js');
    var a = factory(animal,{name:'xxx',age:1});
})
```

