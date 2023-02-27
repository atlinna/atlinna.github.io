(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{722:function(v,_,t){"use strict";t.r(_);var a=t(10),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"四层、五层、七层网络模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四层、五层、七层网络模型"}},[v._v("#")]),v._v(" 四层、五层、七层网络模型")]),v._v(" "),t("p",[v._v("四层：TCP/IP 四层网络模型")]),v._v(" "),t("ul",[t("li",[v._v("应用层")]),v._v(" "),t("li",[v._v("传输层")]),v._v(" "),t("li",[v._v("网络层")]),v._v(" "),t("li",[v._v("物理链路层")])]),v._v(" "),t("p",[v._v("五层：TCP/IP 五层网络模型")]),v._v(" "),t("ul",[t("li",[v._v("应用层")]),v._v(" "),t("li",[v._v("传输层")]),v._v(" "),t("li",[v._v("网络层")]),v._v(" "),t("li",[v._v("数据链路层")]),v._v(" "),t("li",[v._v("物理层")])]),v._v(" "),t("p",[t("em",[v._v("四五层没有太大区别，只是将四层的物理链路层拆分")])]),v._v(" "),t("p",[v._v("七层：OSI 七层网络模型")]),v._v(" "),t("ul",[t("li",[v._v("应用层")]),v._v(" "),t("li",[v._v("表示层")]),v._v(" "),t("li",[v._v("会话层")]),v._v(" "),t("li",[v._v("传输层")]),v._v(" "),t("li",[v._v("网络层")]),v._v(" "),t("li",[v._v("数据链路层")]),v._v(" "),t("li",[v._v("物理层")])]),v._v(" "),t("p",[t("strong",[v._v("实际中我们可以认为使用的是四层模型，也可以认为是五层模型。")])]),v._v(" "),t("p",[t("strong",[v._v("说说网络的五层模型")])]),v._v(" "),t("p",[v._v("从上到下分别为：应用层，传输层，网络层，数据链路层，物理层。")]),v._v(" "),t("p",[v._v("在发送消息时，消息从上到下进行打包，每一层会在上一层地 基础上加包，而接受消息时，从上到下进行解包，最终得到原始信息。")]),v._v(" "),t("p",[v._v("应用层主要面向互联网中的应用场景，如网页、邮件、文件中心等等，他的代表协议有：http、smtp、pop3、ftp、DNS 等等")]),v._v(" "),t("p",[v._v("传输层主要面向传输过程，如 TCP 协议是为了保证可靠的传输，而 UDP 协议则是一种无链接的广播，他们提供了不同的传输方式")]),v._v(" "),t("p",[v._v("网络层主要解决如何定位目标以及如何寻找最优路径的问题，如IP 等等")]),v._v(" "),t("p",[v._v("数据链路层的作用时将数据在一个字网内有效传输，mac地址、交换机都是属于该层的")]),v._v(" "),t("p",[v._v("物理层是要解决二进制数据到信号之间的互转问题，集线器，双绞线，同轴电缆等都是属于该层的设备。")]),v._v(" "),t("h4",{attrs:{id:"http-常见的请求方法有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-常见的请求方法有哪些"}},[v._v("#")]),v._v(" http 常见的请求方法有哪些？")]),v._v(" "),t("ul",[t("li",[v._v("GET 表示向服务器获取资源")]),v._v(" "),t("li",[v._v("POST 表示向服务器提交信息，通常用于产生新的数据，比如注册")]),v._v(" "),t("li",[v._v("PUT 表示希望修改服务器的数据，通常用于修改")]),v._v(" "),t("li",[v._v("DELETE 表示希望删除服务器数据")]),v._v(" "),t("li",[v._v("OPTIONS 发生在跨域的预检请求中，表示客户端向服务器申请跨域提交")]),v._v(" "),t("li",[v._v("TRACE 回显服务器收到的请求，主要用于测试和诊断")]),v._v(" "),t("li",[v._v("CONNECT 用于建立连接管道，通常在代理场景中使用。")])]),v._v(" "),t("h4",{attrs:{id:"get-和-post-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-的区别"}},[v._v("#")]),v._v(" GET 和 POST 的区别")]),v._v(" "),t("p",[v._v("从 http 协议的角度来说 GET 和 POST 他们都只是请求行中的第一个单词，除了语义不同，其实没有什么本质区别。")]),v._v(" "),t("p",[v._v("之所以在实际开发中会产生各种区别，主要是因为浏览器的默认行为造成的")]),v._v(" "),t("p",[v._v("受浏览器影响，在实际开发中，GET 和 POST 有以下区别：")]),v._v(" "),t("ul",[t("li",[v._v("浏览器在发送 GET 请求时，不会福袋请求体")]),v._v(" "),t("li",[v._v("GET 请求的传递信息量有限，适合少量数据的传递；POST请求的传递信息量是没有限制的")]),v._v(" "),t("li",[v._v("GET 请求只能传递 ASCII 数据，遇到非 ASCII 数据需要进行编码（encodeURIComponent）；POST请求没有限制")]),v._v(" "),t("li",[v._v("大部分GET请求传递的数据都附带在 path 参数中，能够通过分享地址完整的重现页面，但同时也暴露了数据，若有敏感数据传递，不应该使用GET请求，至少不因该放到 path 中。")]),v._v(" "),t("li",[v._v("刷新页面时，若当前页面是通过 POST 请求得到的，则浏览器会提示用户是否重新提交。若是GET请求的到的页面则没有提示。")]),v._v(" "),t("li",[v._v("GET 请求的地址可以被保存为浏览器书签，POST 不可以")])]),v._v(" "),t("p",[t("strong",[v._v("encodeURI 与 encodeURIComponent 区别")]),v._v("\nencodeURI 不会对地址路径中的预留字符 如冒号等，进行编码\nencodeURIComponent 会转码。")]),v._v(" "),t("h4",{attrs:{id:"cookie-sessionstorage-localstorage-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie-sessionstorage-localstorage-的区别"}},[v._v("#")]),v._v(" Cookie/sessionStorage/localStorage 的区别")]),v._v(" "),t("p",[v._v("cookie、sessionStorage、localStorage 都是保存本地数据的方式")]),v._v(" "),t("p",[v._v("其中，cookie 兼容性好，所有浏览器都支持。浏览器针对 cookie 会有一些默认行为，比如当响应头中出现 set-cookie 字段时，浏览器会自动保存 cookie 的值；浏览器发送请求时，会附带匹配的 cookie 到请求头中。这些默认行为是的 cookie 长期以来担任着维持登陆状态的责任。与此同时，也正是因为浏览器的默认行为给了恶意攻击者可乘之机，CSRF 攻击就是一个典型的利用 cookie 的攻击方式。虽然 cookie 不断改进，但前段仍然需要另一种更加安全的保存数据的方式")]),v._v(" "),t("p",[v._v("HTML5 新增了 sessionStorage 和 localStorage，前者用于保存会话级别的数据，后者更持久的保存数据。浏览器针对他们没有任何默认行为，这样以来，就把保存数据、读取数据的工作交给了前段开发者，这就让恶意攻击难以针对登陆状态进行攻击。 Cookie 的大小是有限制的，一般浏览器会限制同一个域下的 cookie 总量为 4M，而sessionStorage 和 localStorage 则没有限制 cookie 会与 domain、path 关联，而sessionStoage 和 localStorage 只与 domain 关联。\n<<<<<<< HEAD")]),v._v(" "),t("h4",{attrs:{id:"对称加密-非对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对称加密-非对称加密"}},[v._v("#")]),v._v(" 对称加密，非对称加密")]),v._v(" "),t("p",[v._v("密钥")]),v._v(" "),t("p",[v._v("密钥是一种参数，它是在明文转换为密文或者将密文转换为明文的算法中输出的参数。密钥分为对称密钥非对称密钥，分别应用在对称加密和非对称加密上。")]),v._v(" "),t("p",[v._v("对称加密")]),v._v(" "),t("p",[v._v("对称加密又叫做私钥加密，即信息的发送方和接收方使用同一个密钥去加密和解密数据。对称加密的特点是算法公开，加密和解密的速度快，适合对大数据量进行加密，常见的加密算法有 DES、3DES、TDEA、Blowfish、RC5 和 IDEA。")]),v._v(" "),t("p",[v._v("非对称加密")]),v._v(" "),t("p",[v._v("非对称加密也叫做公钥加密，非对称加密与对称加密相比，其安全性更好，对称加密的通信双方使用相同的密钥，如果一方的密钥遭泄露，那么整个通信就会被破解。而非对称加密使用一对密钥，即公钥和私钥，且二者成对出现。私钥被自己保存，不能对外泄露。公钥值得是公共的密钥，任何人都可以获得该密钥，用公钥或私钥中的任何一个进行加密，用另一个进行解密。")]),v._v(" "),t("p",[v._v("摘要")]),v._v(" "),t("p",[v._v("摘要算法又称哈希/散列算法。它通过一个函数，把任意长度的数据转换为一个长度固定的数据串（通常用 16 进制的字符串表示）。算法不可逆。")]),v._v(" "),t("h4",{attrs:{id:"jwt令牌格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt令牌格式"}},[v._v("#")]),v._v(" JWT令牌格式")]),v._v(" "),t("p",[v._v("token 分为三段，分别是 header ，payload， signature")]),v._v(" "),t("p",[v._v("其中，header 标识签名算法和令牌类型（一个对象{alg:rsa,type:'jwt'}）;payload 标识主体信息，包含令牌过期时间，发布时间，发行者，主体内容等（也是一个对象）；signature 是使用特定的算法（header中标识的算法）对前面两部分进行加密，得到的加密结果。")]),v._v(" "),t("p",[v._v("token 有防篡改的特点，如果攻击者改动了前面两个部分，就会导致和第三部分对应不上，使得 token 失效。而攻击者不知道加密密钥，因此又无法修改第三部分的值。")]),v._v(" "),t("p",[v._v("所以，在密钥不被泄露的前提下，一个验证通过的 token 是值得被信任的。")]),v._v(" "),t("h4",{attrs:{id:"同源策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[v._v("#")]),v._v(" 同源策略")]),v._v(" "),t("p",[v._v("什么是同源策略？")]),v._v(" "),t("p",[v._v("源指的是 协议、域名（主机）、端口号。两个源相同则称为同源。")]),v._v(" "),t("p",[v._v("同源策略是指 "),t("strong",[v._v("页面的源和页面运行过程中加载的源不一致时，出于安全考虑，浏览器会对跨域的资源访问进行一些限制。")])]),v._v(" "),t("p",[v._v("同源策略对 ajax 的跨域限制最大，默认情况下，它不允许 ajax 访问跨域资源。")]),v._v(" "),t("p",[v._v("有多重解决跨域问题的方法，常见的有：")]),v._v(" "),t("ul",[t("li",[v._v("代理")]),v._v(" "),t("li",[v._v("CORS")]),v._v(" "),t("li",[v._v("JSONP")])]),v._v(" "),t("h5",{attrs:{id:"代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[v._v("#")]),v._v(" 代理")]),v._v(" "),t("p",[v._v("使用场景："),t("strong",[v._v("生产环境")]),v._v("不跨域，但是开发环境跨域。")]),v._v(" "),t("p",[v._v("以 vue 为例，通过 配置 proxy，/api ，当我们向浏览器发送请求的时候，拦截器会拦截我们的请求，看是否以 /API 开头，如果是，则会使用前端开发服务器代替我们请求（服务器之间没有跨域），拿到结果后返回给我们。")]),v._v(" "),t("h4",{attrs:{id:"cors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[v._v("#")]),v._v(" CORS")]),v._v(" "),t("p",[v._v("CORS 是基于 http1.1 的一种跨域解决方案（Cross-Origin-Resource-Sharing）跨域资源共享。")]),v._v(" "),t("p",[v._v("他的总体思想是："),t("strong",[v._v("如果浏览器想要跨域访问服务器的资源，需要得到服务器的允许。")])]),v._v(" "),t("p",[v._v("针对不同请求，CORS 规定了三种不同的交互模式：")]),v._v(" "),t("ul",[t("li",[v._v("简单请求")]),v._v(" "),t("li",[v._v("需要预检的请求")]),v._v(" "),t("li",[v._v("附带身份认证的请求")])]),v._v(" "),t("h5",{attrs:{id:"简单请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[v._v("#")]),v._v(" 简单请求")]),v._v(" "),t("p",[v._v("判定：当请求同时满足以下条件时，浏览器认为它是一个简单请求。")]),v._v(" "),t("ol",[t("li",[v._v("请求方法属于下面的一种\n"),t("ol",[t("li",[v._v("GET")]),v._v(" "),t("li",[v._v("POST")]),v._v(" "),t("li",[v._v("HEAD")])])]),v._v(" "),t("li",[v._v("请求头仅包含安全的字段，常见的安全字段如：\n"),t("ol",[t("li",[v._v("Accept")]),v._v(" "),t("li",[v._v("Accept-Language")]),v._v(" "),t("li",[v._v("Content-Language")]),v._v(" "),t("li",[v._v("Content-Type")]),v._v(" "),t("li",[v._v("DPR")]),v._v(" "),t("li",[v._v("Downlink")])])]),v._v(" "),t("li",[v._v("请求头如果包含 Content-Type，仅限下面的值之一：\n"),t("ol",[t("li",[v._v("text/plain")]),v._v(" "),t("li",[v._v("multipart/form-data")]),v._v(" "),t("li",[v._v("application/x-www-form-urlencoded")])])])]),v._v(" "),t("p",[v._v("当使用 ajax 跨域请求是简单请求的时候：")]),v._v(" "),t("ul",[t("li",[v._v("请求头中会自动添加 Origin 字段（Origin：指当前页面地址 当前源）")]),v._v(" "),t("li",[v._v("服务器响应头中应包含 Access-Control-Allow-Origin\n"),t("ul",[t("li",[v._v("该字段的值可以是")]),v._v(" "),t("li",[v._v("*：表示，什么源都可以访问")]),v._v(" "),t("li",[v._v("指定源 如 https://www.baidu.com 表示指允许百度访问。")])])])]),v._v(" "),t("h5",{attrs:{id:"需要预检的请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需要预检的请求"}},[v._v("#")]),v._v(" 需要预检的请求")]),v._v(" "),t("p",[v._v("如果，浏览器不认为是一个简单请求的话，就会按照下面的流程进行：")]),v._v(" "),t("ol",[t("li",[v._v("浏览器发送预检请求，询问服务器是否允许\n"),t("ol",[t("li",[v._v("请求方法为 OPTIONS")]),v._v(" "),t("li",[v._v("没有请求体")]),v._v(" "),t("li",[v._v("请求头中包含\n"),t("ol",[t("li",[v._v("Origin：请求的源")]),v._v(" "),t("li",[v._v("Access-Control-Request-Method：后续的真实请求将使用的请求方法。")]),v._v(" "),t("li",[v._v("Access-Control-Request-Headers：后续的真实请求会改动的请求头")])])])])]),v._v(" "),t("li",[v._v("服务器允许\n"),t("ol",[t("li",[v._v("对于预检请求，不需要响应任何消息体，只需要在响应头中添加：\n"),t("ol",[t("li",[v._v("Access-Control-Allow-Origin：和简单请求一样，表示允许源")]),v._v(" "),t("li",[v._v("Access-Control-Allow-Methods：表示允许的后续真实的请求方法")]),v._v(" "),t("li",[v._v("Access-Control-Allow-Headers：表示允许改动的请求头")]),v._v(" "),t("li",[v._v("Access-Control-Max-Age：告诉浏览器，多少秒内，对于同样的源不需要再发送预检请求了。")])])])])]),v._v(" "),t("li",[v._v("浏览器发送真实请求")]),v._v(" "),t("li",[v._v("服务器完成真实的响应")])]),v._v(" "),t("p",[t("strong",[v._v("当完成预检后，后续的处理与简单请求相同。")])]),v._v(" "),t("h5",{attrs:{id:"附带身份凭证的请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附带身份凭证的请求"}},[v._v("#")]),v._v(" 附带身份凭证的请求")]),v._v(" "),t("p",[v._v("默认情况下 ajax 跨域请求不会懈怠 cookie ，但是可以通过简单的配置实现。")]),v._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// xhr")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("var")]),v._v(" xhr "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("new")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("XMLHttpRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\nxhr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("withCredentials "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[v._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// ")]),v._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// fetch")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("fetch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[v._v("credentials")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[v._v("'include'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])])]),t("p",[v._v("服务端会在响应头中添加 Access-Control-Allow-Credentials：true，告知客户端需要携带 cookie 信息。")]),v._v(" "),t("p",[v._v("如果服务器没有明确告知，浏览器则视为跨域被拒绝。")]),v._v(" "),t("p",[v._v("如果需要附带身份凭证，那么浏览器不能设置 Access-Control-Allow-Origin：*")]),v._v(" "),t("p",[v._v("不能允许所有源访问。")]),v._v(" "),t("h5",{attrs:{id:"jsonp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[v._v("#")]),v._v(" JSONP")]),v._v(" "),t("p",[v._v("是在CORS没有出现之前的一种跨域的解决方案")]),v._v(" "),t("p",[v._v("实现准备好一个回掉函数，然后通过生成 script 标签去请求接口，服务器响应一段 js 代码，js 代码通过调用回掉函数传入返回结果来解决跨域。")]),v._v(" "),t("p",[v._v("弊端就是只支持 GET 请求。")]),v._v(" "),t("h4",{attrs:{id:"浏览器地址栏输入地址后发生什么事"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器地址栏输入地址后发生什么事"}},[v._v("#")]),v._v(" 浏览器地址栏输入地址后发生什么事？")]),v._v(" "),t("ol",[t("li",[v._v("浏览器自动补全协议，端口号")]),v._v(" "),t("li",[v._v("浏览器自动完成 url 编码（地址栏内不能出现 非 ASCII 编码）")]),v._v(" "),t("li",[v._v("浏览器根据 url 地址查找本地缓存，根据缓存规则看是否命中缓存，若命中缓存，则直接使用缓存，不再发出请求。")]),v._v(" "),t("li",[v._v("通过 DNS 解析找到服务器的 IP 地址")]),v._v(" "),t("li",[v._v("浏览器想服务器发出建立 TCP 连接的申请，完成三次握手后，连接通道建立")]),v._v(" "),t("li",[v._v("若使用了 HTTPS 协议，则还会进行 SSL 握手，建立加密信道（验证SSL证书）。使用 SSL 握手时，会确定是否使用 HTTP2")]),v._v(" "),t("li",[v._v("浏览器决定要附带哪些 cookie 到请求头中。")]),v._v(" "),t("li",[v._v("浏览器自动设置好请求头，协议版本，cookie。发出 GET 请求")]),v._v(" "),t("li",[v._v("服务器处理请求，进入后端处理流程。完成处理后，服务器响应一个 HTTP 报文给浏览器。")]),v._v(" "),t("li",[v._v("浏览器根据使用的协议版本，以及 Connection 字段的约定，决定是否要保留 TCP 连接。")]),v._v(" "),t("li",[v._v("浏览器根据响应状态码决定如何处理这一次响应。")]),v._v(" "),t("li",[v._v("浏览器根据响应头中的 Content-Type 字段识别响应资源是什么类型，如果是 text/html，则对响应体中的内容进行 HTML 解析，否则做其他处理。")]),v._v(" "),t("li",[v._v("浏览器根据响应头的其他内容完成缓存，cookie 的设置。")]),v._v(" "),t("li",[v._v("浏览器将响应内容放入消息队列 -- 开始走浏览器渲染流程。直到页面绘制到用户屏幕。")]),v._v(" "),t("li",[v._v("当 DOM 树完成后会出发 DOM ContentLoaded 事件。当所有资源加载完毕会出发 load 事件。\n=======")])]),v._v(" "),t("blockquote",[t("blockquote",[t("blockquote",[t("blockquote",[t("blockquote",[t("blockquote",[t("blockquote",[t("p",[v._v("ce109911a348828195174314fe8ef9f0195a2635")])])])])])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);