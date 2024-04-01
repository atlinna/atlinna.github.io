(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{690:function(v,_,t){"use strict";t.r(_);var l=t(10),a=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"网络性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络性能优化"}},[v._v("#")]),v._v(" 网络性能优化")]),v._v(" "),t("ul",[t("li",[v._v("优化打包体积\n"),t("ul",[t("li",[v._v("利用一些工具压缩、混淆最终打包代码，减少包体积")])])]),v._v(" "),t("li",[v._v("多目标打包\n"),t("ul",[t("li",[v._v("利用一些打包插件，针对不同的浏览器打包出不同的兼容性版本，这样以来，每个版本中的兼容性代码就会大大减少，从而减少包体积")])])]),v._v(" "),t("li",[v._v("压缩\n"),t("ul",[t("li",[v._v("现代浏览器普遍支持压缩格式，因此服务器的各种文件可以压缩后再响应给客户端，只要解压时间小于优化的传输时间，压缩时可行的。")])])]),v._v(" "),t("li",[v._v("CDN\n"),t("ul",[t("li",[v._v("利用 CDN 可以大幅缩减静态资源的访问时间，特别是对于公共库的访问，可以使用致命的 CDN 资源，这样可以实现跨越站点的缓存")]),v._v(" "),t("li",[v._v("CDN 服务器，就是在世界各地部署多个服务器，客户端访问的时候就访问距离最近的。由于 CDN 服务器需要同步源服务器的资源，所以如果文件有所变更， CDN 服务器需要等待下次同步才能统一。 另外 CDN 服务器的缓存时间长。")])])]),v._v(" "),t("li",[v._v("缓存\n"),t("ul",[t("li",[v._v("对于除 HTML 外的所有静态资源均可以开启协商缓存，利用构建工具打包产生的文件 hash 值来置换缓存。")])])]),v._v(" "),t("li",[v._v("http2\n"),t("ul",[t("li",[v._v("开启 http2 后，利用其多路复用、头部压缩等特点，充分利用带宽传递大量的文件数据。")])])]),v._v(" "),t("li",[v._v("雪碧图\n"),t("ul",[t("li",[v._v("对于不实用 http2 的场景，可以将多个图片合并为雪碧图，以达到减少文件的目的")])])]),v._v(" "),t("li",[v._v("defer 和 async\n"),t("ul",[t("li",[v._v("通过 defer 和 async 属性，可以让页面尽早的加载 js 文件")])])]),v._v(" "),t("li",[v._v("prefetch、preload\n"),t("ul",[t("li",[v._v("通过 prefetch 可以让页面在空闲时间预先下载其他页面可能用到的资源")]),v._v(" "),t("li",[v._v("通过 preload 可以让页面预先加载本页面可能用到的资源")])])]),v._v(" "),t("li",[v._v("多个静态资源域\n"),t("ul",[t("li",[v._v("对于不使用 http2 的场景，将相对独立的静态资源分到多个域中保存，可以让浏览器同时开启多个 TCP 连接，并行下载。")]),v._v(" "),t("li",[v._v("浏览器最多开启 6个 TCP 连接。")])])])]),v._v(" "),t("h3",{attrs:{id:"断点续传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#断点续传"}},[v._v("#")]),v._v(" 断点续传")]),v._v(" "),t("h4",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[v._v("#")]),v._v(" 下载")]),v._v(" "),t("p",[v._v("服务器在响应的时候要在头部加入 "),t("strong",[v._v("Accept-Ranges：bytes")])]),v._v(" "),t("p",[v._v("表示，我这个文件可以支持传输部分数据，你只需要告诉我你需要的是哪一部分的数据即可，单位是字节。")]),v._v(" "),t("p",[v._v("客户端可以在请求时加入 "),t("strong",[v._v("range：bytes=0-5000")])]),v._v(" "),t("p",[v._v("表示请给我传递 0～5000字节范围内的数据即可，无需传输全部数据。")]),v._v(" "),t("p",[v._v("原理：")]),v._v(" "),t("p",[v._v("客户端获取源文件的 md5（文件指纹）以及他的数据块数量和 id，然后分段下载文件最后在浏览器中组装成源文件。")]),v._v(" "),t("h4",{attrs:{id:"上传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传"}},[v._v("#")]),v._v(" 上传")]),v._v(" "),t("p",[v._v("原理是要把上传的文件切分为多个小的数据块然后进行上传")]),v._v(" "),t("p",[v._v("先获取源文件的 md5 ，然后数据分块，拿到每个块的 md5 接着，客户端向浏览器发送请求的时候，服务器拿到你的数据块后响应 "),t("strong",[v._v("状态码 206（表示成功，但是只是一部分）")]),v._v("，然后告诉你我拿到了数据块 x 你还需要传给我数据块 xxx")]),v._v(" "),t("h3",{attrs:{id:"dns-解析过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析过程"}},[v._v("#")]),v._v(" DNS 解析过程")]),v._v(" "),t("ol",[t("li",[v._v("查找本机 hosts 文件中是否有解析记录，如果有，直接使用。")]),v._v(" "),t("li",[v._v("查找本地域名服务器中是否有解析记录，如果有，直接使用")]),v._v(" "),t("li",[v._v("查询根域名服务器，得到顶级域名服务器 ip")]),v._v(" "),t("li",[v._v("根据顶级域名服务器反馈的 ip，查询权限域名服务器，如果有解析记录，直接使用")]),v._v(" "),t("li",[v._v("如果以上都找不到，域名解析失败。")])]),v._v(" "),t("p",[t("strong",[v._v("本机和域名服务器一般都会有告诉缓存，它存在的目的是为了减少查询次数和时间。")])]),v._v(" "),t("h3",{attrs:{id:"https-握手过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https-握手过程"}},[v._v("#")]),v._v(" HTTPS 握手过程")]),v._v(" "),t("ol",[t("li",[v._v("客户端请求服务器，并告诉服务器自身支持的加密算法以及密钥长度等信息")]),v._v(" "),t("li",[v._v("服务器响应公钥和服务器证书")]),v._v(" "),t("li",[v._v("客户端验证证书是否合法，然后生成一个会话密钥，并用服务器的公钥加密密钥，把加密的结果通过请求发送给服务器。")]),v._v(" "),t("li",[v._v("服务器使用私钥解密被加密的会话密钥并保存起来，然后食欲哦那个绘画密钥加密信息响应给客户端，表示自己已经准备就绪")]),v._v(" "),t("li",[v._v("客户端使用绘画密钥解密消息，知道了服务器已经准备就绪。")]),v._v(" "),t("li",[v._v("后续客户端和服务器使用绘画密钥加密信息传递消息。")])]),v._v(" "),t("h3",{attrs:{id:"http-1-0-http-1-1-http-2-0-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0-http-1-1-http-2-0-区别"}},[v._v("#")]),v._v(" HTTP 1.0 HTTP 1.1 HTTP 2.0 区别")]),v._v(" "),t("p",[v._v("http 1.0 特点是每次请求和响应完毕都会笑会 TCP 连接，同时规定前一个响应完成后才能发送下一个请求。存在两个问题：")]),v._v(" "),t("ul",[t("li",[v._v("无法复用连接\n"),t("ul",[t("li",[v._v("每次请求都要创建新的 TCP 连接，完成三次握手和四次挥手，网络利用率低")])])]),v._v(" "),t("li",[v._v("对头阻塞\n"),t("ul",[t("li",[v._v("如果前一个请求被某种原因阻塞了，会导致后续请求无法发送。")])])])]),v._v(" "),t("p",[v._v("http1.1 做出了以下改进：")]),v._v(" "),t("ul",[t("li",[v._v("长连接\n"),t("ul",[t("li",[v._v("http 1.1 允许在请求时增加请求头  connection：keep-alive，这样便允许后续的客户端请求在一段时间内复用之前的 TCP 连接")])])]),v._v(" "),t("li",[v._v("管道化\n"),t("ul",[t("li",[v._v("基于长连接基础，管道化可以不等第一个请求响应继续发送后面的请求，但响应的顺序还是按照请求的顺序返回。")])])]),v._v(" "),t("li",[v._v("新增响应头 cache-control")]),v._v(" "),t("li",[v._v("断点续传")])]),v._v(" "),t("p",[v._v("http 2.0 进一步优化了传输效率，它主要有以下改进：")]),v._v(" "),t("ul",[t("li",[v._v("二进制分帧\n"),t("ul",[t("li",[v._v("将传输的消息分为更小的二进制帧，每个帧有自己的标识序号，即便被随意打乱，也可以在另一端正确组装。")])])]),v._v(" "),t("li",[v._v("多路复用\n"),t("ul",[t("li",[v._v("基于二进制分帧，在同一域名下所有访问都是从同一个 tcp 连接中走，并且不再有对头阻塞问题，也无需遵守响应顺序")])])]),v._v(" "),t("li",[v._v("头部压缩\n"),t("ul",[t("li",[v._v("http 2.0 通过字段形式，将头部中的常见信息替换为更少的字符，极大的减少了头部的数据量，从而实现更小的传输量。")])])]),v._v(" "),t("li",[v._v("服务器推\n"),t("ul",[t("li",[v._v("http 2.0 允许服务器直接推送消息给客户端，无需客户端明确要求。")])])])]),v._v(" "),t("h3",{attrs:{id:"http版本差异及特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http版本差异及特点"}},[v._v("#")]),v._v(" http版本差异及特点")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("HTTP（Hypertext Transfer Protocol，超文本传输协议）是一种用于传输数据的协议，最初由Tim Berners-Lee发明，用于在Web浏览器和Web服务器之间传输文本数据。HTTP协议有多个版本，版本之间有以下区别：\n\n1. HTTP/0.9：最早的版本，只能传输纯文本，没有请求头和响应头，只能请求GET方法。\n\n2. HTTP/1.0：加入了请求头和响应头，支持了POST等方法，但每次请求都要重新建立连接，效率较低。\n\n3. HTTP/1.1：引入持久连接、管线化、缓存等优化机制，大大提高了效率。\n\n4. HTTP/2：引入了多路复用、二进制分帧等优化机制，进一步提高了效率。\n\n5. HTTP/3：基于UDP协议，引入了QUIC协议，加强了安全性和速度，但目前仍然处于实验阶段。\n\n总的来说，HTTP的版本升级都是为了提高效率和安全性，随着物联网和5G技术的发展，HTTP协议也在不断更新和优化，未来的HTTP协议可能会更加高效、安全和智能化。\n")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);