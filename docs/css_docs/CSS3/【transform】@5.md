## transform

### rotate

`transform:rotate(0deg)`

rotate 里面值是一个角度值

也可以使用 `transform-origin` 来定义中心位置默认值为：

`transform-origin:center center`

### rotateX

围绕x轴旋转。

### rotateY

围绕y轴旋转

### rotateZ

围绕z轴旋转

**当元素进行旋转之后，它的坐标轴也会跟着旋转。**

### rotate3d

`transform:rotate3d(x,y,z,angle)`

x,y,z 是为了确定一个矢量，就是确定一个围绕的方向轴。



### scale

scale(x,y)可以分成,

大于1是放大，小于1是缩小。

scale 伸缩的是坐标轴的刻度。

+ scaleX
+ scaleY
+ scaleZ



### skew

`skew(x,y)`



transform-origin:0 0; 变换中心

### perspective

`transform:perspective` 景深属性，同时也存在 perspective 这个属性可以作用在父级。两者可以叠加。



### transform-style

preserve-3d，可以将父级内所有空间变为 3d 空间。





#### matrix

矩阵，计算规则如下。

matrix(a,d,b,e,c,f);

```
|a，b，c|		|x| 	|ax，by，cz|
|d，e，f| * |y| = |dx，ey，fz|
|0，0，1|		|z|		| 0， 0, z |
```

