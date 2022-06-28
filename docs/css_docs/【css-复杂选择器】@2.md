## 复杂选择器

#### 父子选择器
选择父容器内部的子、孙标签
如下面结构
```
 <div id=“container”>
   <span>123</span>
   <p class=“para”>
     <span>456</span>
   </p>
   <div id=“section”>
      <ul class=“list”>
        <li>苹果</li>
        <li>橘子</li>
      </ul>
   </div>
 </div>
 <span>789</span>
```
假设我们要选中 div 下面的所有span 而不让外部的 span 选中 （儿孙都有）
```
  div span{
    
  }
```
所有选择器都能使用
```
 #container .section .list li {
   
 }
```

#### 直接子元素选择器
```
 <div id=“container”>
   <span>123</span>
   <p class=“para”>
     <span>456</span>
   </p>
   <div id=“section”>
      <ul class=“list”>
        <li>苹果</li>
        <li>橘子</li>
      </ul>
   </div>
 </div>
 <span>789</span>
```
假设我们只选中 container 内的第一级 span (只选中儿子)
```
 #container > span{
   
 }
```

假设我们查找下面的一个标签，并添加样式
```
 .container .section .list li{
   width:100px;
   height:100px;
   background-color:#fff;
   list-style:none;
 }
```
那么浏览器的内核是从左向右查找呢？还是从右向左查找？
**是从子元素向父元素延伸！-- 浏览器内核原理**

#### 并列选择器
```
 <div></div>
 <div class=“demo”></div>
 <span class=“demo”></span>
```
如何选中中间的标签？
标签类型为 div 并且 class = “demo” 
```
 div.demo{
   
 }
```

#### 分组选择器
选择器公用同一代码块
```
  div,span,p{
    
  }
```


### CSS 属性
font-size 设置字体大小 （设置的是字体的高度）页面默认字体大小为 16px
font-weight 设置字体粗细 （100 - 900）（lighter、normal、bold、bolder）但是字体包不一定支持这些属性
font-style 设置字体格式 （italic - 斜体）
font-family 设置字体 （arial）
color 设置字体颜色 
+ 单词  red\green\blue
+ 颜色代码  #xx|xx|xx 每两位代表一种颜色代码 16 进制 分别是 红、绿、蓝。rgb
+ 颜色函数 rgb() 内部是 0~255,0~255,0~255 的三个十进制数
+ 
border 边框 1px solid black 这是一个复合属性 border:border-width border-style border-color
text-align 文本对齐方式
line-height 单行文本所占高度
text-indent 首行缩进
text-decoration 文本装饰
cursor 光标


### 单位
1px 是 1像素
1 em = 1 font-size