## transition

`transition` 是一个复合属性包含：

+ Transition-property  								需要过度的属性
+ Transtion-duration                                   动画持续的时间
+ Transition-timing-function                      动画过度的函数
+ Transition-delay                                        延时几秒开始执行动画



### cubic-bezier



### animation

```
@keyframes 动画名 {
	0%{} // from {}
	25%{}
	50%{}
	75%{}
	100%{} // to {}
}

animation: 动画名 4s
```
复合属性
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
animation-name // 动画名
animation-duration // 持续时间
animation-timing-function // 动画函数
animation-delay // 延迟时间
animation-iteration-count // 执行次数
animation-direction // 执行方式
animation-fill-mode //
animation-play-state // 运行状态
