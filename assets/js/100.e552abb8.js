(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{691:function(_,v,s){"use strict";s.r(v);var t=s(10),a=Object(t.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("p",[_._v("ASCII 转 Base64")]),_._v(" "),s("p",[_._v("btoa()")]),_._v(" "),s("p",[_._v("Base64 转 ASCII")]),_._v(" "),s("p",[_._v("atob()")]),_._v(" "),s("h4",{attrs:{id:"cookie-和-session-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session-的区别"}},[_._v("#")]),_._v(" cookie 和 session 的区别")]),_._v(" "),s("ul",[s("li",[_._v("cookie 的数据保存在浏览器端，session 的数据保存在服务器")]),_._v(" "),s("li",[_._v("coolie 的存储空间有限，session 的存储空间无限")]),_._v(" "),s("li",[_._v("cookie 只能保存字符串，session 可以保存任何类型的数据")]),_._v(" "),s("li",[_._v("cookie 中的数据容易被获取，session 中的数据难以获取")])]),_._v(" "),s("h4",{attrs:{id:"如何消除-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何消除-session"}},[_._v("#")]),_._v(" 如何消除 session")]),_._v(" "),s("ul",[s("li",[_._v("过期时间 当客户端长时间没有传递 sessionId 过来时，服务器可以在过期时间之后自动清除 session")]),_._v(" "),s("li",[_._v("客户端主动通知 可以使用 js 监听客户端页面关闭或其他退出操作，然后通知服务器清除 session （监听 unloaded 事件）")])]),_._v(" "),s("h4",{attrs:{id:"http-缓存协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存协议"}},[_._v("#")]),_._v(" HTTP 缓存协议")]),_._v(" "),s("p",[_._v("首先，客户端发送一个没有缓存的普通请求到服务器，服务器响应该请求，如果需要缓存，会在响应头的 Cache-Control 中添加一个过期时间。然后浏览器将响应内容加入缓存中，后续请求，如果 匹配上路径，则直接使用缓存，如果缓存失效，客户端会发送一条带有缓存的请求，服务器判断如果内容更新，则响应新内容，如果还能继续使用，则不响应任何东西，且状态码是 304 ，然后 Cache-Control 会返回一个新的过期时间。")]),_._v(" "),s("h3",{attrs:{id:"tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[_._v("#")]),_._v(" TCP")]),_._v(" "),s("h4",{attrs:{id:"tcp-和-http-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-和-http-的区别"}},[_._v("#")]),_._v(" TCP  和 HTTP 的区别")]),_._v(" "),s("p",[_._v("HTTP 协议是对内容格式的规定，它使用了 TCP 协议进行可靠传输")]),_._v(" "),s("p",[_._v("HTTP 的内容格式：消息头，消息体，状态码，请求方法等。")]),_._v(" "),s("p",[_._v("TCP 内容是将 HTTP 的内容分段传输，头部加包。")]),_._v(" "),s("p",[_._v("在具体使用 TCP 协议时：")]),_._v(" "),s("ol",[s("li",[_._v("客户端发消息给服务器叫做请求，服务器发消息给客户端叫做响应。")]),_._v(" "),s("li",[_._v("使用 HTTP 协议的服务器不会主动发消息给客户端（尽管TCP 可以），只对请求进行响应")]),_._v(" "),s("li",[_._v("每一个 HTTP 请求～响应，都要建立 TCP 连接（三次握手），然后完成请求～响应后，再销毁连接（四次挥手）。这就导致每次请求～响应都是相互独立的，无法保持状态。")])]),_._v(" "),s("p",[s("strong",[_._v("为了节约服务器的资源（牺牲时间换取空间）；")])]),_._v(" "),s("h4",{attrs:{id:"tcp-连接的过程-三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-连接的过程-三次握手"}},[_._v("#")]),_._v(" TCP 连接的过程（三次握手）")]),_._v(" "),s("p",[_._v("TCP 协议通过三次握手建立可靠的点对点连接，具体过程是：")]),_._v(" "),s("ul",[s("li",[_._v("首先服务器进入监听状态，然后即可处理连接")]),_._v(" "),s("li",[_._v("第一次握手：建立连接时，客户端发送 syn 包到服务器，并进入 SYN_SENT 状态等待服务器确认。在发送的包中，还会包含一个初始序列号 seq 。此次握手的含义是"),s("strong",[_._v("客户端希望与服务器建立连接")]),_._v("。")]),_._v(" "),s("li",[_._v("第二次握手：服务器收到 syn 包，然后回应给客户端一个 SYN + ACK 包，此时服务器进入 SYN_RCVD 状态。此次握手的含义是服务器端回应客户端，表示"),s("strong",[_._v("已收到并统一客户端的连接请求。")])]),_._v(" "),s("li",[_._v("第三次握手：客户端收到服务器的 SYN 包后，向服务器再次发送 ACK 包，并进入 ESTAB_LISHED 状态。")]),_._v(" "),s("li",[_._v("最后，服务器收到客户端的 ACK 包，于是也进入 ESTAB_LISHED 状态，至此，连接建立完成。")])]),_._v(" "),s("h4",{attrs:{id:"tcp-断开连接的过程-四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-断开连接的过程-四次挥手"}},[_._v("#")]),_._v(" TCP 断开连接的过程（四次挥手）")]),_._v(" "),s("p",[_._v("当需要关闭连接时")]),_._v(" "),s("ol",[s("li",[_._v("客户端 向 服务器发送 FIN 包，表示客户端主动要关闭连接，然后进入 FIN_WAIT_1 状态，等待 服务器返回 ACK 包。此后客户端不能再向服务器发送数据，但能读取数据。")]),_._v(" "),s("li",[_._v("服务器收到 FIN 包后，向客户端发送 ACK 包，然后进入 CLOSE_WAIT 状态，此后服务器不能再读取数据，但是能继续向客户端发送数据。")]),_._v(" "),s("li",[_._v("客户端收到服务器返回的 ACK 包后进入 FIN_WAIT_w 状态，等待 服务器发送 FIN 包。")]),_._v(" "),s("li",[_._v("服务器完成数据的发送后，将 FIN 包发送给客户端，然后进入 LAST_ACK 状态，等待客户端返回 ACK 包，此后服务器既不能读取数据，也不能发送数据。")]),_._v(" "),s("li",[_._v("客户端收到 FIN 包后向 服务器发送 ACK 包，然后进入 TIME_WAIT 状态，接着等待足够长的时间（2ML）以确保服务器收到 ACK 包，最后回到 CLOSED 状态，释放网络资源。")]),_._v(" "),s("li",[_._v("服务器收到客户端返回的 ACK 包后便回到 CLOSE D 状态，释放网络资源。")])]),_._v(" "),s("h3",{attrs:{id:"csrf-攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击"}},[_._v("#")]),_._v(" CSRF 攻击")]),_._v(" "),s("p",[_._v("CSRF 是跨站请求伪造，是一种挟制用户在当前已登陆的 Web 应用上执行非本意的操作的攻击方法。")]),_._v(" "),s("p",[_._v("它首先引导用户访问一个危险网站，当用户点击访问网站后，网站会发送请求到被攻击的站点，这次请求会携带用户的 cookie 发送，因此就利用了用户的身份信息完成攻击。")]),_._v(" "),s("p",[_._v("防御：")]),_._v(" "),s("ul",[s("li",[_._v("不实用 cookie")]),_._v(" "),s("li",[_._v("为表单添加娇艳的 token 娇艳")]),_._v(" "),s("li",[_._v("cookie 中使用 sameSite 字段")]),_._v(" "),s("li",[_._v("服务器检查 referer 字段。")])]),_._v(" "),s("h3",{attrs:{id:"xss攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击"}},[_._v("#")]),_._v(" XSS攻击")]),_._v(" "),s("p",[_._v("XSS 是指跨站脚本攻击。攻击者利用站点的漏洞，在表单提交时，内容中加入一些恶意脚本，当其他正常用户浏览页面，而页面中刚好出现攻击者的恶意脚本时，脚本被执行，从而使得页面遭到破坏，或者用户信息被窃取。")]),_._v(" "),s("p",[_._v("防御：")]),_._v(" "),s("p",[_._v("需要在服务器端过滤脚本代码，将一些危险的元素和属性去掉或对元素进行 HTML 实体编码。")])])}),[],!1,null,null,null);v.default=a.exports}}]);