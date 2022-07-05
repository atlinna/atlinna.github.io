## 盒模型

### 行级元素 - inline
+ 内容决定元素占的位置
+ 不可以通过 css 改变宽高
span\ strong \ em\ a\ del

### 块级元素 block
+ 独占一行
+ 可以通过 css 改变宽高
div \ p\ ul \ li \ ol \ form \ address

### 行级块元素 inline-block
+ 内容决定大小
+ 可以通过 css 改变宽高
img

凡是 inline、inline-block 类型 的标签都存在文字特性


### 盒模型的计算
border + padding + width

## margin 塌陷问题
假设我们现在有这样一个结构
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            width: 100px;
            height: 100px;
        }

        .parent {
            background-color: #000;
        }

        .content {
            width: 50px;
            height: 50px;
            background-color: #f00;
        }
    </style>
</head>

<body>
    <div class="parent">
        <div class="content"></div>
    </div>
</body>

</html>
```
然后我们移动父子位置
```
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            width: 100px;
            height: 100px;
        }

        .parent {
            background-color: #000;
            margin-left: 100px;
            margin-top: 100px;
        }

        .content {
            width: 50px;
            height: 50px;
            background-color: #f00;
            margin-left: 50px;
            margin-top: 50px;
        }
    </style>
```
我们发现 子盒子（content）的margin-top 并没有生效。父盒子确实带着子盒子动了。
只有当我们的子盒子的 margin-top 大于父盒子的margin-top 的时候 子盒子的 margin-top 才生效。
这个时候新的问题又出现了，父盒子又随着子盒子一起跑偏了。
### BFC
Block Format Content（块级元素格式化文档流）
如何触发一个盒子的 BFC
+ position：absolute
+ display：inline-block
+ float：left/right
+ overflow：hidden

方式很多但是要找好场景使用。

## margin 合并
 指两个兄弟层级的标签当设置 margin 的时候两个发生合并。
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            width: 100px;
            height: 100px;
        }



        .demo1 {
            background: #000;
            margin-bottom: 100px;
        }

        .demo2 {
            background: #f00;
            margin-bottom: 100px;
        }
    </style>
</head>

<body>
    <div class="demo1"></div>
    <div class="demo2"></div>
</body>

</html>
```
解决方式：
通过计算的方式将 margin 放到同一个盒子上
```
margin-bottom:200px;
```

通过 BFC 的方式使其中一个盒子处于BFC 的规则之下
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        html,body{
            height: 100%;
        }

        div {
            width: 100px;
            height: 100px;
        }



        .demo1 {
            background: #000;
            margin-bottom: 100px;
        }

        .wrapper {
            overflow: hidden;
            width: 200px;
            height: 200px;
        }

        .demo2 {
            background: #f00;
            margin-top: 100px;
        }

        
    </style>
</head>

<body>
    <div class="demo1"></div>
    <div class="wrapper">
        <div class="demo2"></div>
    </div>
</body>

</html>
```
注意：一般我们这种bug 不解决，为什么呢？ 因为BFC需要增加新的 html，我们可以通过其他的方式来绕过这个问题。

## 浮动 float
浮动元素产生了浮动流
所有产生了浮动流的元素，块级元素看不到
产生了bfc的元素和文本类属性的元素以及文本都能看到浮动元素。
文本类属性就是（inline/inline-block/text）

假设我们有这样一个结构：父盒子由子盒子撑开内容区，当我们给子盒子设置 float 的时候产生了“浮动流”，此时父盒子将失去内容区。
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        html,
        body {
            height: 100%;
        }

        div {
            background: #000;
        }

        .parent {
            border: 1px solid #f00;
            background: transparent;
        }

        .parent div {
            width: 100px;
            height: 100px;
            float: left;
        }
    </style>
</head>

<body>
    <div class="parent">
        <div class="demo1"></div>
        <div class="demo2"></div>
        <div class="demo3"></div>
    </div>
</body>

</html>
```
解决：
1、通过直接给盒子设置宽高，但是这样如果盒子的数量超过了父盒子的高度将不适用
2、通过在父盒子末尾添加一个新的标签，通过 clear 清除改标签周围的浮动。
```
<style>
   .parent p {
            clear: both|left; 
        }
</style>

<div class="parent">
        <div class="demo1"></div>
        <div class="demo2"></div>
        <div class="demo3"></div>
        <p></p>
    </div>
```
如果我们将 p 标签的clear 设置为 right 意味着我们将会清除 p 标签周围 float:right  的浮动，但是没有 所以失效，并没有什么体现。 但是如果这样解决我们的结构就变得不合理

3、通过伪元素清除浮动
```
.parent::after {
            content: "";
            display: block;
            clear: both;
        }
```
**注意：如果我们不设置display：block的话没有生效，原因是因为 clear 属性必须作用在块级元素上。**
4、将父盒子设置为 bfc 元素
```
.parent {
            border: 1px solid #f00;
            background: transparent;
            /* float: left; */
            /* position: absolute; */
            /* display: inline-block; */
        }
```
**注意：position:absolute; float：left/right;在内部会将元素转换成 inline-block**