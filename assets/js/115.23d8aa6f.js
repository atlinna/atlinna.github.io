(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{705:function(s,_,e){"use strict";e.r(_);var v=e(10),a=Object(v.a)({},(function(){var s=this,_=s.$createElement,e=s._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"编译过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译过程"}},[s._v("#")]),s._v(" 编译过程")]),s._v(" "),e("p",[s._v("将源代码打包的过程。")]),s._v(" "),e("p",[s._v("大致分为三个过程")]),s._v(" "),e("ul",[e("li",[s._v("初始化")]),s._v(" "),e("li",[s._v("编译")]),s._v(" "),e("li",[s._v("输出")])]),s._v(" "),e("h4",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),e("p",[s._v("初始化阶段，由于我们使用的是 webpack-cli，当运行命令时，webpack 会将 webpack.config.js 中的配置，命令行配置，以及package.json 里面的配置合并成一个最终配置。")]),s._v(" "),e("h4",{attrs:{id:"生成-chunk-块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成-chunk-块"}},[s._v("#")]),s._v(" 生成 chunk（块）")]),s._v(" "),e("p",[s._v("然后进入分析阶段")]),s._v(" "),e("p",[s._v("根据入口文件递归遍历文件")]),s._v(" "),e("p",[s._v("拿到模块文件 会先检查一下 chunk 中的模块记录，看是否存在于表中。")]),s._v(" "),e("p",[s._v("如果存在，则遍历下一个，如果不存在，则会读取文件中的内容，然后通过语法分析，将内容转换为 AST 抽象语法树。通过分析 AST 抽象语法树记录依赖。")]),s._v(" "),e("p",[s._v("然后将依赖保存到 dependencies 中，（dependencies中保存的是模块ID ‘./src/xxx.js’, 模块ID 的路径是从 src下开始的。类似于 denpendencies['./src/a.js','./src/b.js'] ）")]),s._v(" "),e("p",[s._v("接着会替换内容的 require 改为自定义名称 _webpack_require 。")]),s._v(" "),e("p",[s._v("保存转换后的模块代码，到chunk 的模块记录中")]),s._v(" "),e("ul",[e("li",[s._v("模块ID ：./src/index.js")]),s._v(" "),e("li",[s._v("转换后的代码：xxxxxx")])]),s._v(" "),e("p",[s._v("然后根据 denpendencies 中的内容 递归加载模块。")]),s._v(" "),e("h4",{attrs:{id:"生成-chunk-assets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成-chunk-assets"}},[s._v("#")]),s._v(" 生成 chunk assets")]),s._v(" "),e("p",[s._v("就是将我们生成的 chunk 列表，转换成编译后的资源：")]),s._v(" "),e("ul",[e("li",[s._v("文件名：./dist/main.js（一般与chunk 的 name 相同（默认是main 生产环境则是一串数字））")]),s._v(" "),e("li",[s._v("文件内容")])]),s._v(" "),e("p",[s._v("同时会生成一个 chunk hash。")]),s._v(" "),e("p",[s._v("将文件内容联合起来，生成一个固定长度的 hash ，来识别内容是否改变。")]),s._v(" "),e("p",[s._v("这就是一个 bundle。")]),s._v(" "),e("p",[s._v("然后将所有的 chunk assets 融合起来，生成一个总的 chunk hash")]),s._v(" "),e("h4",{attrs:{id:"输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[s._v("#")]),s._v(" 输出")]),s._v(" "),e("p",[s._v("由于 webpack 运行在 node 环境，所以 可以通过 fs 模块，将生成的内容写入文件中；")])])}),[],!1,null,null,null);_.default=a.exports}}]);