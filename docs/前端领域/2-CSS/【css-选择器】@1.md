## 选择器及优先级

css 是用来装修 html 标签的。

### css 的引入
**1、行间样式**
```
<div style=“
  width:100px;
  height:100px;
  background-color:red;
”></div>
```
**2、页面级css**
```
<html>
  <head>
    <style>
      div{
        width:100px;
        height:100px;
        background-color:green;
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```
**3、外部引入css**
```
<link href=“xxx.css”></link>
```

### 选择器
+ id 选择器 （一个标签只能对应一个id）
```
  #xxx{
    
  }
```

+ class 类选择器 （一个标签能够存在多个 class  | “class1 class2”）
```
  .xxx{
    
  }
```

+ 标签选择器
```
  div{
    
  }
```

+ 通配符选择器
```
  *{
    
  }
```

+ 属性选择器
```
  [id] {
    
  }
```

### css 权重
```
  !important          Infinity
  行间样式              1000
  id                   100
  class|属性|伪类       10
  标签|伪元素            1
  通配符                 0
```