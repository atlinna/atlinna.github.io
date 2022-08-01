## Border & background

#### border-radius

圆角属性



#### box-shadow



#### border-image



#### background-image

+ background-origin   border-box\padding-box\content-box    表示从哪里开始填充图片
+ background-clip       border-box\padding-box\content-box\text    表示从哪里截断图片
+ background-attachment
  + scroll   相对于内容区进行定位
  + local    相对于内容进行定位
  + fixed   相对于可视区进行定位



#### Border-color

Bordeer-color 颜色 在 css1 css2 中会计算 color 的值

但是 css3 出现了一个中转变量 currentColor ，currentColor 来计算 color 的值，然后让 border-color 等于 currentColor 的值。



#### font-face

```
@font-face{
	font-family:''; // 给字体包起个名字
	src:url();
}
```



