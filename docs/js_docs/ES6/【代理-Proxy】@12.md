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
// ES5-实现方式
function Observer(target, dom) {
    const ob = {};
    for (let prop in target) {
        Object.defineProperty(ob, prop, {
            get() {
                return target[prop];
            },
            set(val) {
                target[prop] = val;
                render(dom, ob);
            },
            enumerable: true
        })
    }
    render(dom, ob);
    return ob;
}

function render(target, data) {
    const div = target;
    let h = '';
    for (let prop in data) {
        h += `<p><span>${prop}:</span><span>${data[prop]}</span></p>`
    }
    div.innerHTML = h;
}

let div = document.getElementById('container');
var obs = Observer({
    a: 1,
    b: 2
}, div)
```
```
// ES6-实现
function Observer(target, dom) {
    const ob = new Proxy(target, {
        get(target, propertyKey) {
            return Reflect.get(target, propertyKey);
        },
        set(target, propertyKey, value) {
            Reflect.set(target, propertyKey, value);
            render(dom, target);
        }
    });

    render(dom, ob);
    return ob;
}

function render(target, data) {
    const div = target;
    let h = '';
    for (let prop in data) {
        h += `<p><span>${prop}:</span><span>${data[prop]}</span></p>`
    }
    div.innerHTML = h;
}

let div = document.getElementById('container');
var obs = Observer({
    a: 1,
    b: 2
}, div)
```

2、偷懒的构造函数

```

```

3、可验证的函数参数

```

```

