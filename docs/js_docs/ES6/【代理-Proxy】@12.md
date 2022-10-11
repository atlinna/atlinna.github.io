## Proxy

代理

Proxy 提供了一种修改底层实现的方式。

如何使用代理

```
const proxy = new Proxy(target,handler) // 创建出一个代理对象，用来代理target对象
```

```
const user = {
  name: "xiaoming",
  age: 18,
};

const proxy = new Proxy(user, {
  set(target, propertyKey, value) {
    // target[propertyKey] = value;
    Reflect.set(target, propertyKey, value);
  },
  get(target, propertyKey) {
    return Reflect.get(target, propertyKey);
  },
});


console.log(proxy.name);
proxy.age = 1;
console.log(proxy.age)
```

### 应用

1、观察者模式

```

```

2、偷懒的构造函数

```

```

3、可验证的函数参数

```

```

