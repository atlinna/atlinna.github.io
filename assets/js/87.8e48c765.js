(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{676:function(n,t,e){"use strict";e.r(t);var l=e(10),o=Object(l.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("事件传播三个阶段：")]),n._v(" "),e("ul",[e("li",[n._v("事件捕获")]),n._v(" "),e("li",[n._v("处于目标")]),n._v(" "),e("li",[n._v("事件冒泡")])]),n._v(" "),e("p",[n._v("谈一谈事件委托以及冒泡原理\n事件委托，又被称为事件代理。在 js 中，添加到页面上的时间处理程序数量将直接关系到页面整体的运行性能。导致这一问题的原因是多方面的。\n首先每个函数都是对象，都会占用内存。内存中的对象越多，性能越差。其次，必须事先指定所有事件处理程序而导致的DOM 访问次数，会延迟整个页面的交互就绪时间。\n对时间处理程序过多问题的解决方案就是事件委托。\n事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。")]),n._v(" "),e("p",[n._v("事件冒泡，是指事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的点\n如：button  --\x3e div --\x3e document --\x3e window")])])}),[],!1,null,null,null);t.default=o.exports}}]);