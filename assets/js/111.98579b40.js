(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{700:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"为什么-webpack-config-js-使用-cmj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-webpack-config-js-使用-cmj"}},[e._v("#")]),e._v(" 为什么 webpack.config.js 使用 CMJ")]),e._v(" "),a("p",[e._v("因为 webpack 进行打包的时候是运行在 nodejs, 而 nodejs 要开启模块化，需要在 package.js 文件配置 type=“module” ，但是由于开启了 ESM ，我们将失去CMJ 的支持，就找不到需要的 require 函数了。")]),e._v(" "),a("h3",{attrs:{id:"常用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用配置"}},[e._v("#")]),e._v(" 常用配置")]),e._v(" "),a("ul",[a("li",[e._v("mode：指定打包后的运行环境，测试还是生产。（命令行和配置同时存在，将以命令行为准）")]),e._v(" "),a("li",[e._v("entry：默认是’src/index.js")]),e._v(" "),a("li",[e._v("output：是一个对象，默认导出到 dist 目录\n"),a("ul",[a("li",[e._v("name：指导出后的主文件名称默认是 main.js")])])]),e._v(" "),a("li",[e._v("devtool：调试工具\n"),a("ul",[a("li",[e._v("none 指使用 eval 的方式来暴露调试信息")]),e._v(" "),a("li",[e._v("sourcemap ：完整的源代码。")]),e._v(" "),a("li",[e._v("eval-source-map：使用 base64 将源码嵌入进临时文件。")])])]),e._v(" "),a("li",[e._v("entry ：入口 可配置多个入口（出口需要特殊配置）"),a("strong",[e._v("配置的是 chunk")]),e._v(" "),a("ul",[a("li",[e._v("main：‘./scr/index.js’ 默认")]),e._v(" "),a("li",[e._v("app：['./src/index.js','./src/app.js']  // 会按照顺序，执行代码。")])])]),e._v(" "),a("li",[e._v("output ：出口\n"),a("ul",[a("li",[e._v("path ：绝对路径 通过 path 模块  path.resolve(__dirname,'xxx')")]),e._v(" "),a("li",[e._v("filename: 生成文件的内容，")])])])]),e._v(" "),a("p",[e._v("webpack.config.js 还支持使用函数的形式来进行配置。目的是灵活的接受命令行中的参数。")])])}),[],!1,null,null,null);t.default=n.exports}}]);