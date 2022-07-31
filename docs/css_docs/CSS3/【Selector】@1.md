## Selector

浏览器兼容性问题

| **Prefix** |   **浏览器**   |
| :--------: | :------------: |
|  -webkit   | Chrome、Safari |
|    -moz    |    FireFox     |
|     -o     |     Opera      |
|    -ms     |       IE       |



#### E + F

下一个满足条件的兄弟元素节点



#### Div[data~='val']

属性选择器 表示选中 data属性中值等于 a 或者使用空格分隔开的。

```
<style>
        div[data~='a'] {
            width: 100px;
            height: 10px;
            background: #f40;
        }
</style>
<body>
    <div data="a"></div> 						v
    <div data="ab"></div>					
    <div data="a b"></div>					v
    <div data="b a c"></div>				v
</body>
```

#### Div[data |= "val"]

属性选择器 表示选中属性值中以val 或者 val-连接的属性

```
<style>
        div[data|='a'] {
            width: 100px;
            height: 10px;
            background: #f40;
        }
</style>
<body>
    <div data="a"></div>					v
    <div data="a-b"></div>				v
    <div data="a-b"></div>				v
    <div data="b a-c"></div>
</body>
```

#### Div[data ^= 'val']

属性值以 `val`开头

#### Div[data $= 'val']

属性值以`val`结束

#### Div[data *= 'val']

属性值中带有`val`

```
<style>
        div[data*='b'] {
            width: 100px;
            height: 10px;
            background: #f40;
        }
</style>
<body>
    <div data="a"></div>
    <div data="a-b"></div> 				v
    <div data="a-b"></div>				v
    <div data="b a-c"></div>			v
</body>
```

#### input::placeholder

伪类选择器，能够改变 input 的placeholder 的字体颜色

#### Div::selection

表示`DIV`被选中时的样式

只能够修改 color、background-color、text-shadow



#### Div:not()

表示除了满足这个条件的其他标签

```
    <style>
        /* div[data|='a'] {
            background-color: #f40;
        } */
        div:not([data |= 'a']){
            background-color: #f40;
        }
    </style>
<body>
    <div data="a"></div>
    <div data="a-b"></div>
    <div data="a-b"></div>
    <div data="b a-c"></div>			v
</body>
```



#### :root

根标签选择器，在 HTML 中是 html 标签



#### Div:target

表示选中被标记的锚点标签

```
<style>
        div {
            width: 100px;
            height: 10px;
            background-color: grey;
            margin: 10px;
        }

        div:target{
            width: 200px;
        }
</style>
<body>
    <a href="#div1">div</a>
    <a href="#div2">div</a>
    <a href="#div3">div</a>
    <div data="a"></div>
    <div id="div1" data="a-b"></div>
    <div id="div2" data="a-b"></div>
    <div id="div3" data="b a-c"></div>
</body>
```

#### Div:first-child

表示为选中标签，且为第一个子孩子

#### Div:last-child

最后一个子孩子

#### Div:only-child

只有一个子孩子

#### DIV:nth-child(n)

表示从第几个子孩子

#### Div:nth-last-child(n)

表示选择倒数第几个子孩子



#### Div:first-of-type

选中父盒子中第一个类型为 标签类型 的标签

#### Div:last-of-type

选中父盒子中最后一个类型为 标签类型 的标签

#### Div:nth-of-type(n)

选中同类型中的第几个标签

#### Div:nth-last-of-type(n)

选中同类型中的第几个标签(倒着数)



#### div:empty

表示选中标签中没有内容的标签

#### Input:checked

input  checkbox 选中状态

#### Input:enabled

input 正常模式

#### input:disabled

input 禁用模式

#### Input:read-only

input 只读模式

