## Canvas

Canvas 标签 -- 画布

获取画布

```
		<script>
        var canvas = document.getElementById('canvas')
        var can = canvas.getContext('2d');
    </script>
```

#### canvas的配置方法

moveTo ：移动到某个点

stroke：绘制

fill：填充

closePath：闭合路径

beginPath：重新开启路径

#### 画线条

lineTo：连线

lineWidth: 线条宽度

```
		<script>
        var canvas = document.getElementById('canvas')
        var can = canvas.getContext('2d');

        can.moveTo(100, 100)
        can.lineTo(200, 100)
        can.stroke()
    </script>
```

#### 画矩形

都有4个参数：x,y,width,heightÏ

rect: 描述矩形路径，但是不会进行绘制

strokeRect：绘制矩形

fillRect：绘制填充矩形

```
    <script>
        var canvas = document.getElementById('canvas')
        var can = canvas.getContext('2d');
        can.lineWidth = 10
        can.rect(100, 100, 100, 50)
        can.stroke()
        can.strokeRect(300, 100, 100, 50)
        can.fillRect(100, 300, 100, 50)
    </script>
```

#### 画圆形

arc 参数：

x,y,半径r,起始角度，结束角度，是否逆时针

```
		<script>
        var canvas = document.getElementById('canvas')
        var can = canvas.getContext('2d');

        can.arc(100, 100, 100, 0, Math.PI * 2, 0)
        can.stroke()
    </script>
```

#### 画圆角矩形

arcTo 参数

x,y,偏移点x，偏移点y，半径r

```
    <script>
        var canvas = document.getElementById('canvas')
        var can = canvas.getContext('2d');
        can.moveTo(105, 100)
        can.arcTo(200, 100, 200, 200, 5)
        can.arcTo(200, 200, 100, 200, 5)
        can.arcTo(100, 200, 100, 100, 5)
        can.arcTo(100, 100, 200, 100, 5)
        can.stroke()
    </script>
```

