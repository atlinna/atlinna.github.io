(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{627:function(a,s,t){"use strict";t.r(s);var n=t(10),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"复杂选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复杂选择器"}},[a._v("#")]),a._v(" 复杂选择器")]),a._v(" "),t("h4",{attrs:{id:"父子选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父子选择器"}},[a._v("#")]),a._v(" 父子选择器")]),a._v(" "),t("p",[a._v("选择父容器内部的子、孙标签\n如下面结构")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" <div id=“container”>\n   <span>123</span>\n   <p class=“para”>\n     <span>456</span>\n   </p>\n   <div id=“section”>\n      <ul class=“list”>\n        <li>苹果</li>\n        <li>橘子</li>\n      </ul>\n   </div>\n </div>\n <span>789</span>\n")])])]),t("p",[a._v("假设我们要选中 div 下面的所有span 而不让外部的 span 选中 （儿孙都有）")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  div span{\n    \n  }\n")])])]),t("p",[a._v("所有选择器都能使用")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" #container .section .list li {\n   \n }\n")])])]),t("h4",{attrs:{id:"直接子元素选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接子元素选择器"}},[a._v("#")]),a._v(" 直接子元素选择器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" <div id=“container”>\n   <span>123</span>\n   <p class=“para”>\n     <span>456</span>\n   </p>\n   <div id=“section”>\n      <ul class=“list”>\n        <li>苹果</li>\n        <li>橘子</li>\n      </ul>\n   </div>\n </div>\n <span>789</span>\n")])])]),t("p",[a._v("假设我们只选中 container 内的第一级 span (只选中儿子)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" #container > span{\n   \n }\n")])])]),t("p",[a._v("假设我们查找下面的一个标签，并添加样式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" .container .section .list li{\n   width:100px;\n   height:100px;\n   background-color:#fff;\n   list-style:none;\n }\n")])])]),t("p",[a._v("那么浏览器的内核是从左向右查找呢？还是从右向左查找？\n"),t("strong",[a._v("是从子元素向父元素延伸！-- 浏览器内核原理")])]),a._v(" "),t("h4",{attrs:{id:"并列选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并列选择器"}},[a._v("#")]),a._v(" 并列选择器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" <div></div>\n <div class=“demo”></div>\n <span class=“demo”></span>\n")])])]),t("p",[a._v("如何选中中间的标签？\n标签类型为 div 并且 class = “demo”")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" div.demo{\n   \n }\n")])])]),t("h4",{attrs:{id:"分组选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分组选择器"}},[a._v("#")]),a._v(" 分组选择器")]),a._v(" "),t("p",[a._v("选择器公用同一代码块")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  div,span,p{\n    \n  }\n")])])]),t("h3",{attrs:{id:"css-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-属性"}},[a._v("#")]),a._v(" CSS 属性")]),a._v(" "),t("p",[a._v("font-size 设置字体大小 （设置的是字体的高度）页面默认字体大小为 16px\nfont-weight 设置字体粗细 （100 - 900）（lighter、normal、bold、bolder）但是字体包不一定支持这些属性\nfont-style 设置字体格式 （italic - 斜体）\nfont-family 设置字体 （arial）\ncolor 设置字体颜色")]),a._v(" "),t("ul",[t("li",[a._v("单词  red\\green\\blue")]),a._v(" "),t("li",[a._v("颜色代码  #xx|xx|xx 每两位代表一种颜色代码 16 进制 分别是 红、绿、蓝。rgb")]),a._v(" "),t("li",[a._v("颜色函数 rgb() 内部是 0 ~ 255,0 ~ 255, 0~ 255 的三个十进制数")]),a._v(" "),t("li")]),a._v(" "),t("p",[a._v("border 边框 1px solid black 这是一个复合属性 border:border-width border-style border-color\ntext-align 文本对齐方式\nline-height 单行文本所占高度\ntext-indent 首行缩进\ntext-decoration 文本装饰\ncursor 光标")]),a._v(" "),t("h3",{attrs:{id:"单位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单位"}},[a._v("#")]),a._v(" 单位")]),a._v(" "),t("p",[a._v("1px 是 1像素\n1 em = 1 font-size")])])}),[],!1,null,null,null);s.default=e.exports}}]);