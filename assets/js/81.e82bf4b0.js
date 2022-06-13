(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{672:function(n,v,_){"use strict";_.r(v);var e=_(7),t=Object(e.a)({},(function(){var n=this,v=n.$createElement,_=n._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[_("h2",{attrs:{id:"设计模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[n._v("#")]),n._v(" 设计模式")]),n._v(" "),_("p",[n._v("首先如果你只是单纯的为了写一个页面的话，不介意那种强行追求设计模式。强扭的瓜不甜，设计模式使用的场景，是一些大型的项目，比如你要开发一个站点。")]),n._v(" "),_("p",[_("strong",[n._v("什么是设计模式？")])]),n._v(" "),_("p",[n._v("设计模式（Design Pattern）是一套被反复使用、多数人知晓的、经过分类的、代码设计经验的总结。")]),n._v(" "),_("p",[n._v("我们来通过一个例子，了解理解一下上面这段"),_("em",[n._v("非人类的话")]),n._v(" 。")]),n._v(" "),_("p",[n._v("在人类起源开始进步发展的过程中，有一个东西必不可少，那就是房子，一个私有的领域、空间，但是在最开始的时候，人类会建造房子吗？ 肯定是不会的。都是一代人不断的摸索出来的。")]),n._v(" "),_("p",[n._v("假设我们第一个建造成功的是一件草房，我们要干什么？ 是不是要先找到房子的支点，然后有个草制的屋顶。一间简陋的 草屋制成了，但是在使用中发现，这个屋子只能遮挡小雨，且风一吹就倒了，于是，房屋的支点不再随意摆放，开始嵌入地面，成为地基。")]),n._v(" "),_("p",[n._v("这些是什么，是不是建造房子的时候总结的经验。")]),n._v(" "),_("p",[n._v("那这些经验放到同领域其他地方还有用吗？")]),n._v(" "),_("p",[n._v("肯定是能用的。")]),n._v(" "),_("p",[n._v("比方说，我们现在不建草屋了，改成泥瓦房，同样的是不是需要用到地基，屋顶，围墙？")]),n._v(" "),_("p",[n._v("这就是前人总结的经验。")]),n._v(" "),_("p",[n._v("但是要注意，每个领域都有其起源，巅峰。")]),n._v(" "),_("p",[n._v("我们称这个为 "),_("strong",[n._v("黑匣子")])]),n._v(" "),_("p",[n._v("这是什么呢？")]),n._v(" "),_("p",[n._v("比如说，建房子，一开始我们就是建草屋对吧，然后有一个需求，突然让我们整个摩天大厦。 这能做吗？")]),n._v(" "),_("p",[n._v("再比如说，手机，我们日常使用现在已经是不可或缺的东西，但是在古代，是没有手机的，如果我们让 古人做一部手机，他肯定是做不出来的。很困难 。首先他要先了解电路，然后是通信的原理，然后学习如何制作屏幕 等等，需要攻克的技术难关太多了。但是我们现在就不同了。你想做手机对吧，行 ，我在三星订购一个屏幕，然后淘宝买主板、后盖，等一切资源。我们都能得到。 而我们需要做的是什么？ 是不是只需要拼装就可以了。")]),n._v(" "),_("p",[n._v("这就是设计模式的初衷，在日常开发，和项目应用中能够，更加高效的开发，更大可能的复用逻辑代码。")]),n._v(" "),_("p",[n._v("设计模式都是前人总结好的我们直接拿来用就行。")]),n._v(" "),_("p",[n._v("说白了，设计模式就相当于 套路，我们要想出一个套路来针对我们已知的需求问题。")]),n._v(" "),_("p",[n._v("为什么说设计模式像套路呢？")]),n._v(" "),_("p",[n._v("比如，一个三角形，我们知道两条边，如何确定第三条边呢？")]),n._v(" "),_("p",[n._v("我们学过数学肯定知道 "),_("strong",[n._v("勾股定理")]),n._v(" 这个公式对吧。但是这个公式是怎么来的？ 是不是通过不断的实验，不断的总结，才得出的这种结论，然后我们现在，只需要知道我们根据这个数学公式，能够推导出第三条边，这就是我们的目的，对前人经验的使用。以前可能要 1 天才能试出来，但是现在，我们只需要调用这个公式，经过计算，很快就能得到。大大的加快了我们的效率。")]),n._v(" "),_("p",[_("strong",[n._v("设计模式的目的是什么？")])]),n._v(" "),_("p",[n._v("为了代码可重用性、让代码更容易被他人理解、保证代码可靠性。")]),n._v(" "),_("p",[n._v("设计模式使代码编写真正工程化")]),n._v(" "),_("p",[n._v("设计模式是软件工程的基石脉络，如同大厦的结构一样。")]),n._v(" "),_("p",[_("strong",[n._v("设计模式的原则是什么？")])]),n._v(" "),_("p",[n._v("首先，有一个小问题要问下自己，"),_("strong",[n._v("你认为对人类约束力最大的是什么？")])]),n._v(" "),_("p",[n._v("多花点时间好好思考。")]),n._v(" "),_("p",[n._v("ok。")]),n._v(" "),_("p",[n._v("我这里有两种答案，第一：法律约束了我们自身，第二：我们的思想约束了自身。")]),n._v(" "),_("p",[n._v("如果你的想法是法律的话，那和答案的偏差还是有点距离的。为什么这么说呢？")]),n._v(" "),_("p",[n._v("法律应该是一种不得已的情况，就是觉得我没有办法觉得你做的事情是对的错的，因为你已经超过了人类的"),_("strong",[n._v("底线")]),n._v("，有点难懂，我们举个例子。")]),n._v(" "),_("p",[n._v("假设我们是新手，开始直接敲代码。但是我们忽略了一个问题，新手对于代码的规则一窍不通，如果我们违反了这个语言规则，如 我们未声明变量，直接取用。最终的结果是什么？")]),n._v(" "),_("p",[n._v("是不是报错了呀？  但是为什么报错，因为我们 js 引擎不得已，没有办法解析出你写的这是什么。对不对？ 所以他动用法律来惩罚你，报错了，让你焦头烂额。")]),n._v(" "),_("p",[n._v("我们得出了一个结论。 "),_("strong",[n._v("法律是底线（守护和平的红线）")]),n._v("。对应我们程序中来说就是 "),_("strong",[n._v("bug红线。")]),n._v(" 我们的程序不能报错对吧，因为报错说明代码已经执行不下去了，不可信的。")]),n._v(" "),_("p",[n._v("第二，我们的思想约束自身。不完全正确。为什么呢？")]),n._v(" "),_("p",[n._v("我们要明确，我们的思想是怎么来的？ “古人云：人之初，性本善”，我们相信每个新生命都是善良的，那为什么 还会有坏人呢？ 坏人又是怎么来的呢？")]),n._v(" "),_("p",[n._v("这取决于我们的思想，但是我们的思想同时又被其他的因素影响。 环境、人文属性。")]),n._v(" "),_("p",[n._v("儒家思想确立 "),_("strong",[n._v("仁义礼智信")]),n._v(" ，贯穿古今，我们至今也被这种属性约束自身。仁义礼智信 是我们的一种对 "),_("strong",[n._v("伦理道德的理解")]),n._v("， 等同于我们做人的原则。是这种伦理道德的观念时时刻刻的影响着我们。")]),n._v(" "),_("p",[n._v("但是原则最大的影响的地方，是让你如何做好一个人，对吧？ 归根究底，"),_("strong",[n._v("是在权衡利弊")]),n._v("。")]),n._v(" "),_("p",[n._v("假设，小王同学，想做个好人，那么他会怎么样？扶老奶奶过马路，捡到钱交给警察叔叔，坐公交车给老人让座。对吧 等等等等··· 这些都是能让你成为好人的途径。在这个过程中，由于你想成为好人，你在权衡之下，决定做出这些事情，虽然付出了一些代价，但是，你赢得了他人对你的看法，印象。 你想成为坏人同理是吧，你权衡之下觉得名声并不重要···。")]),n._v(" "),_("p",[n._v("再比如，菜市场，如果你的菜又好又便宜是不是都愿意去你家买，但是，如果你的菜都是那种快要变质的，还贵，还给人家缺斤短两。还会有人去吗？")]),n._v(" "),_("p",[n._v("其实，越到后面，就会发现，设计模式更像是一种另类的人文，只不过，是人和机器之间的交流。我们也在时时刻刻的"),_("strong",[n._v("思考权衡利弊")]),n._v("的问题。")]),n._v(" "),_("p",[n._v("所以我们要干什么？ "),_("strong",[n._v("在守住底线，坚持原则的基础上，考虑我们的问题。")])]),n._v(" "),_("p",[n._v("总结来说就是")]),n._v(" "),_("p",[n._v("没有套路做事情没效率，笨拙，重用性小，情况 复杂的时候，所需要攻克的问题太大，成本太高。有了套路，我们就能更容易的解决一些复杂的问题，让开发变得高效、简单。")]),n._v(" "),_("p",[n._v("普及一下知识。")]),n._v(" "),_("p",[n._v("设计模式最早出现是为了解决后端的需求问题，因为早期前端需求并没有这么复杂，他的初衷就是为了解决一些面向对象的问题，虽然 ES6 已经在往面向对象靠拢。")]),n._v(" "),_("p",[n._v("设计模式研究的就是 对象。")]),n._v(" "),_("p",[n._v("比如我们使用的话首先要创建一个对象，就可以用到创建型的工厂模式，有了对象之后我们是不是要描绘他的结构啊，这时候可以从结构型模式中找到适用的 - 代理模式，有了结构之后，还要描述他的行为，行为类型 - 观察者模式。 等等···")]),n._v(" "),_("p",[_("strong",[n._v("谈一下设计模式的六大原则")])]),n._v(" "),_("p",[n._v("减少耦合，增强复用，降低代码的开发维护扩展成本。")]),n._v(" "),_("p",[_("strong",[n._v("什么是耦合呢 ？")])]),n._v(" "),_("p",[n._v("耦合关系是指两个事物之间如果存在一种相互作用、相互影响的关系，那么这种关系叫做“耦合关系”。")]),n._v(" "),_("p",[n._v("举个例子：")]),n._v(" "),_("p",[n._v("假设有一个男生和一个女生，他们在一起了，这时候他们就叫情侣是吧，然后他们每天吃饭睡觉都在一起，男生打游戏的时候女生捣乱，女生化妆的时候男生捣乱，这种相互捣乱相互影响的关系。")]),n._v(" "),_("p",[n._v("对比于我们前端来说")]),n._v(" "),_("p",[n._v("假设有一个函数 A ，这个函数 A 需要做一些操作，但是发现功能不够用，又调用了函数 B。这种直接的关系。")]),n._v(" "),_("p",[n._v("再假设有一个 对象，这个对象呢 有一个行为影响了另外一个对象。 这样的直接的关系我们称之为耦合。")]),n._v(" "),_("p",[n._v("我们说，只要是两个对象也好、函数也好，他们之间有这种相互作用的联系。这就叫做耦合性。像是有一根绳子在牵着他们。")]),n._v(" "),_("p",[_("em",[n._v("但是这种情况不叫耦合")])]),n._v(" "),_("p",[n._v("假设我们有一个函数，这个函数呢有一个功能，会使全局中某个状态发生改变，然后巧合的是存在另外一个函数，这个函数的功能呢是监听这个全局状态，当这个状态发生改变时进行一系列的操作。")]),n._v(" "),_("p",[n._v("这是耦合吗？")]),n._v(" "),_("p",[n._v("虽然他确实是通过一些手段使得两个函数存在了关系，但是里面是不是有个第三者啊，就是这个全局的状态对吧。也就是说，他们两个之间的关系不够存粹。")]),n._v(" "),_("p",[n._v("这不是耦合！")]),n._v(" "),_("p",[_("strong",[n._v("耦合度和复杂度的危害")])]),n._v(" "),_("p",[n._v("什么是复杂度呢？")]),n._v(" "),_("p",[n._v("大家都知道书法对吧？ 什么宋体、隶书、楷书、草书。有的时候你就会发现有的书法，你能看明白，知道是什么字，但是有的字体，哇哦···· 称之为天数不为过吧，格式杂乱，字体飞舞。这个时候你看起来是不是特别费劲？")]),n._v(" "),_("p",[n._v("再比如，  ES6之前，有一个有意思的东西就是 “嵌套地狱”，你就发现一个函数里面，TM 全是 if ··· else ···。")]),n._v(" "),_("p",[n._v("假设你有一个可爱的同事，平时啥事没有，就一个乐趣，写 if else，然后有一天他离职了，然后呢老板把他的需求转给了你，然后你一看代码，人傻了。想改个代码，发现 找括号就找了半天，还不包括看逻辑。那最后怎么办呢？ 是不是只能重构了。")]),n._v(" "),_("p",[n._v("这种代码，就是那种复杂度很高，一个脚本就一个函数，剩下全是 if else。所有的逻辑都放在一个函数里面。 几千行啊··· 你瞅着那个括号眼睛疼不。")]),n._v(" "),_("p",[n._v("复杂度：")]),n._v(" "),_("p",[n._v("复杂度高，表示代码质量不高，可维护性差，复用性差，不易扩展。")]),n._v(" "),_("p",[n._v("耦合度：")]),n._v(" "),_("p",[n._v("耦合度无，是不可能的···，耦合度低，程度合理，过高则不容易维护。但是扩展性、复用性好。")]),n._v(" "),_("h6",{attrs:{id:"所以我们开发时的流程是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#所以我们开发时的流程是什么"}},[n._v("#")]),n._v(" 所以我们开发时的流程是什么")]),n._v(" "),_("p",[n._v("本着优先降低复杂度的思想，尽量的去减少耦合度。但是有一点你要注意，你的复杂度和耦合度是息息相关的，你的复杂度降低，自然而然的你的耦合度就会上升。")]),n._v(" "),_("ul",[_("li",[n._v("通过单一职责原则，开闭原则，里氏替换原则，来降低复杂度（但是会提升耦合度）")]),n._v(" "),_("li",[n._v("通过迪米特法则来减少耦合度")]),n._v(" "),_("li",[n._v("通过依赖倒置原则消除可以没有的耦合度")])]),n._v(" "),_("p",[n._v("读到这里，我们就会发现，"),_("strong",[n._v("权衡")]),n._v("贯穿了整个设计模式的全部。而降低复杂度，减少耦合度就是我们的原则。")]),n._v(" "),_("p",[_("strong",[n._v("应用：")])]),n._v(" "),_("p",[_("strong",[n._v("-- 使用设计模式六大原则 - 单一职责原则")])]),n._v(" "),_("p",[n._v("单一职责原则总体思想就是，各司其职，各做各的。不再同一函数中做其他的事情。避免功能混淆，导致无法复用、扩展。")]),n._v(" "),_("p",[n._v("这种就是典型的通过增加耦合度来降低复杂度的例子，下面我们通过伪代码来模拟一下。")]),n._v(" "),_("p",[n._v("假设我们有一个 ul")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v('  <ul id="chess-list"></ul>\n')])])]),_("p",[n._v("现在的需求是让你通过网络请求，获取列表中的内容，并将其渲染到页面上。\n粗略一看很简单是吧")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v("  function getView(url,data,container){\n    // 网络资源请求数据\n    $.ajax({\n      url:url,\n      data:data,\n      success:function (json){\n        // 在这里我们能够拿到 一个 json 数据对吧 假设格式是[{name:'zhang san'},{name:'li si'}]\n        // 渲染到页面\n        let renderStr = json.reduce((prev,item) => prev + '<li>' + item.name + '</li>','')\n        container.innerHTML = renderStr;\n      }\n    })\n  }\n")])])]),_("p",[n._v("看着实现起来挺简单的对吧，但是某一天，领导说，诶 这个需求变更一下，说首次请求太浪费请求资源了，添加一个缓存机制。\n我们缓存怎么弄？ 是不是整一个副本给他存放到本地，然后当我进来的时候如果有缓存值就取本地的，没有就进行网络请求。\n我们把之前的代码 copy 过来。然后继续添加，为了方便观看 会给注释添加序号。")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v("  function getView(url,data,container){\n    // 2 - 添加缓存\n    let catchStr = localStorage.getItem('list')\n    if(catchStr){\n      // 2 - 缓存值存在，取缓存数据进行渲染\n      let json = JSON.parse(catchStr);\n      // 2-1 - 在这里我们能够拿到 一个 json 数据对吧 假设格式是[{name:'zhang san'},{name:'li si'}]\n      // 2-1 - 渲染到页面\n      let renderStr = json.reduce((prev,item) => prev + '<li>' + item.name + '</li>','')\n      container.innerHTML = renderStr;\n      \n    } else {\n      // 2 - 没有缓存值，则进行网络请求 \n      // 1 - 网络资源请求数据\n      $.ajax({\n        url:url,\n        data:data,\n        success:function (json){\n          // 2 - 也就是说我们在取得网络资源时，先将其存储到 localStorage 中。\n          localStorage.setItem('list',JSON.stringify(json));\n          // 1 - 在这里我们能够拿到 一个 json 数据对吧 假设格式是[{name:'zhang san'},{name:'li si'}]\n          // 1 - 渲染到页面\n          let renderStr = json.reduce((prev,item) => prev + '<li>' + item.name + '</li>','')\n          container.innerHTML = renderStr;\n        }\n      })\n    }\n  }\n")])])]),_("p",[n._v("嗯···我们发现 getView 函数，变得复杂了一些，但是还好对吧。一些逻辑还是能够分的很清楚的，但实际上，我们可以看出，有些代码，他就是重复的比如渲染那块，就直接 control + C ，\ncontrol + V, 这··是不是有点了对吧。")]),n._v(" "),_("p",[n._v("我们发现，这个函数的规模会随着我们的需求更迭不断的变大，复杂度越来越大，当有一天，就加到我们自己都看不懂的时候，就没有办法了，所以，这时候单一职责原则派上了用场。\n各司其职。\n假设我们以函数的形式，")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v("  // 请求网络资源\n  function getSource(){}\n  // 渲染\n  function render(){}\n  // 缓存\n  function cache(){}\n  // 如果再有新的需求，比如离线缓存\n  function onlineCache(){}\n  ··· 等等。\n")])])]),_("p",[n._v("函数之间相互调用，存然增加了耦合度，但是相应的，我们的复杂度也减少了。\n但是这样看起来还是不够直观对吧？，我们可以试一下使用对象的方式。")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v("  function WebSource(callbackArray,url,params){\n    this.callbackArray = callbackArray;\n    this.url = url;\n    this.params = params;\n    this.do = function (){\n      $.ajax({\n        url:this.url,\n        data:this.params,\n        success: function (json){\n          // pass 占位\n        }\n      })\n    }\n  }\n")])])]),_("p",[n._v("写到 success 后面不知道取了数据之后干什么了对吧，我们先进行其他的")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v("  function Cache(key){\n    // do 函数要做的是将传入的数据缓存起来对吧\n    this.do = function (data){\n      localStorage.setItem(key,JSON.stringify(data));\n    }\n    // 然后我们还要能够取到这个缓存值\n    this.getCacheValue = function (){\n      localStorage.getItem(key);\n    }\n  }\n")])])]),_("p",[n._v("缓存的构造函数就 OK 啦。\n然后是渲染")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v("  function Render(container){\n    this.container = container;\n    this.do = function (data){\n      // 这里我就把之前的 copy 过来了\n      let renderStr = data.reduce((prev,item) => prev + '<li>' + item.name + '</li>','')\n      this.container.innerHTML = renderStr;\n    }\n  }\n")])])]),_("p",[n._v("好的 前置工作准备完了，我们看下数据获取那里 如何使用。（再 copy 一份过来）")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v("  function WebSource(callbackArray,url,params){\n    this.callbackArray = callbackArray;\n    this.url = url;\n    this.params = params;\n    this.do = function (){\n      $.ajax({\n        url:this.url,\n        data:this.params,\n        success: function (json){\n          // pass 占位\n        }\n      })\n    }\n  }\n")])])]),_("p",[n._v("首先我们要明确，网络资源请求完毕要做什么？ 是不是要进行数据缓存、视图渲染啊？ 那么我们的 callbackArray 传入的应该是什么呢？\n首先要保证能够进行缓存，然后还要保证能够进行视图的渲染。 我们发现这些功能都存在于他们各自的 do 方法上。\n也就是说，我要传入一个能够调用 do 方法的实例对吧。")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v("  const cacheObj = new Cache('list')\n  const renderObj = new Render(xxx) // xxx 代表你传入的这个容器\n  // 然后呢？ 实例化我们的 WebSource \n  // const sourceObj = new WebSource([],'xxx',{xxx:'xxx'}) 那么这个数组里面放什么？是他们的实例\n  const sourceObj = new WebSource([cacheObj,renderObj],'xxx',{xxx:'xxx'})\n")])])]),_("p",[n._v("相互的一个调用关系就形成了对吧？ 然后我们回到 WebSource 的构造函数中，完成剩余的部分")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v("    function WebSource(callbackArray,url,params){\n    this.callbackArray = callbackArray;\n    this.url = url;\n    this.params = params;\n    this.do = function (){\n      $.ajax({\n        url:this.url,\n        data:this.params,\n        success: function (json){\n          // 拿到数据后进行缓存与渲染\n          callbackArray.forEach(obj => obj.do(json))\n        }\n      })\n    }\n  }\n")])])]),_("p",[n._v("OK ~ 就是这么的简洁，你会发现，当你有其他的需求增加的时候，你只需要再构造函数中扩展，或者修改某个构造函数里面的方法，使其满足你的需求。这样你就能直接定位你的问题位置，不再需要去找逻辑了对吧？")]),n._v(" "),_("p",[_("strong",[n._v("使用设计模式的六大原则二 -- 开闭原则OCP")])]),n._v(" "),_("p",[n._v("一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。")]),n._v(" "),_("p",[n._v("面向扩展开放，面向修改关闭 （jquery extend），同时增强代码复用性。")]),n._v(" "),_("p",[n._v("开闭原则呢其实很像 “腾讯“，为什么这么说呢？不知道大家有没有听过，腾讯对于账号的所属权问题，大致的意思就是，你只保留有账号的使用权，但是这个账号属于腾讯，只是借给你用。如果你想体验那种奇幻的功能是吧 OK啊，充钱呗，冲就完事了。")]),n._v(" "),_("p",[n._v("我们的开闭原则的核心思想就是，希望你通过扩展的方式来丰富其他功能，原有的功能呢不支持你修改。")]),n._v(" "),_("p",[n._v("还记的我们的"),_("a",{attrs:{href:"#%E6%89%80%E4%BB%A5%E6%88%91%E4%BB%AC%E5%BC%80%E5%8F%91%E6%97%B6%E7%9A%84%E6%B5%81%E7%A8%8B%E6%98%AF%E4%BB%80%E4%B9%88"}},[_("strong",[n._v("开发流程吗")])]),n._v("，使用开闭原则可以降低复杂度。")]),n._v(" "),_("p",[n._v("这个和开闭原则的核心思想是相关联的，以  jQuery 为例，假设，jQuery 这个作者发布的时候，所有的方法等等都能够修改，你可以想象一下，你的项目会变成什么样子。 这个地方改一下，那边又改一下，最后你自己都不知道这个函数到底是什么功能了。大大的增加了开发的复杂程度。所以，你可以凭借你的经验，和开发过程，来分析有没有哪些必要的，又是插件里面没有的，然后通过他提供的扩展方法 如 jQuery extend 扩展出来。不允许你修改其内容。")]),n._v(" "),_("p",[_("strong",[n._v("使用设计模式的六大原则三 -- 里氏替换原则 L Subsituation Principle")])]),n._v(" "),_("p",[n._v("任何基类可以出现的地方，子类一定可以出现。通俗来说就是：子类可以扩展父类的 功能，但不能改变父类原有的功能。\n这句话什么意思呢？ 就是让你使用继承的方式来扩展父类，但是不让你重写父类的方法。\n比方说我们有这样两个构造函数，Son 继承 Father,然后重写了 Father 的 eat 方法。")]),n._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[n._v("function Father() {\n    this.eat = function () {\n        console.log('i like eat egg!');\n    }\n}\n\nlet f = new Father()\nSon.prototype = f;\nfunction Son() {\n    this.eat = function () {\n        console.log('i like eat apple');\n    }\n}\nlet s = new Son()\nf.eat()\ns.eat()\nconsole.log(s);\n")])])]),_("p",[n._v("打印出来结果应该是 // i like eat egg! 和 // i like eat apple 对吧？这时候把父类的方法重写了，可能会造成一些不可预测的结果。\n里氏替换原则的核心思想就是，希望你通过继承去扩展的方式降低复杂度，最最最重要的一点就是，他希望你继承的是一个动作，而不是一个行为。\n比方说，刚刚的 Father 和 Son 对吧，如果父类 Father 提供的 eat 只是一个吃的动作，那么他们自身就可以通过扩展其他的方法来实现喜欢吃什么。")]),n._v(" "),_("p",[_("strong",[n._v("使用设计模式的六大原则四 -- 迪米特法则（最小知道原则） LD")])]),n._v(" "),_("p",[n._v("一个接口和一个方法，传入的参数越少越好。降低耦合度的同时也会让复杂度降低。\n形成的关联越少越好，依赖越少越好。\n这个引用一个我听过的例子，就是说谍战大家都知道是吧，假如你抓到了一个间谍，是不是要逼供，让他说出其他同伙的位置啊，但是假设，一共就俩间谍，然后他们还互相不知道，是不是你再怎么问，都没有用，本着那种要死死一个的精神···。")]),n._v(" "),_("p",[_("strong",[n._v("使用设计模式的六大原则五 -- 依赖倒置原则 DIP")])]),n._v(" "),_("p",[n._v("最常用的原则，依赖接口，不依赖方法，底层的东西不用了解，我们只需要知道表现就可以。降低耦合度")]),n._v(" "),_("p",[n._v("前端应用中可以理解成多者之间依赖状态，而不依赖彼此。")]),n._v(" "),_("p",[n._v("JS 中没有接口概念。\n这个依赖倒置原则是怎么回事呢？\n不知道各位还记不记得我们之间说过，如果你依赖第三者，依赖其他的状态，而不是和这个函数或者对象形成直接依赖，我们说他是耦合嘛？不是耦合对吧，这是不是就消除了耦合度？\n这种原则应用再发布订阅模式中， 大致是这样的\n假设我们有两个函数 A、B ，这个 AB函数 本来是相互依赖的，然后呢，我们通过依赖倒置原则，创建了一个全局的状态 C，然后 A 不再依赖 B， 我们切断与 B 的联系，改为修改 全局状态C 的状态。\n然后我们的 B 呢监听这个全局的状态C,只要你的值发生改变，那就执行原有操作。这样之后，虽然 A、B 之间还存在联系，但这个联系是通过 C 来传递的，他们相互都只知道 C 这个状态的变化。")]),n._v(" "),_("p",[_("strong",[n._v("使用设计模式的六大原则六 -- 接口分离原则 LSP")])]),n._v(" "),_("p",[n._v("把大接口拆分为小接口，不能一个接口全部实现增删改查的功能。")]),n._v(" "),_("p",[n._v("这个呢就是属于服务端范畴了，大致的意思就是，如果你把功能通过一个接口全部实现，势必会造成这个接口的复杂度上升，肯定要接收更多的参数和判断，而且，假设你修改的时候这个接口挂了，完蛋，凉了，因为是同一个接口，导致查询也查询不了，删除也删除不了。")]),n._v(" "),_("p",[n._v("所以要将接口分离，保证你在其他功能挂掉的时候，至少你这个查询还是正常的，能够查回来数据的对吧。")]),n._v(" "),_("p",[_("strong",[n._v("设计模式六大原则的使用")]),n._v("\n根据我们"),_("a",{attrs:{href:"#%E6%89%80%E4%BB%A5%E6%88%91%E4%BB%AC%E5%BC%80%E5%8F%91%E6%97%B6%E7%9A%84%E6%B5%81%E7%A8%8B%E6%98%AF%E4%BB%80%E4%B9%88"}},[_("strong",[n._v("开发流程")])]),n._v("\n首先是我们的代码块 S, S 可以经过单一职责原则，开闭原则，里氏替换原则，通过增加耦合度的方式，来降低复杂度。")]),n._v(" "),_("p",[_("strong",[n._v("S")]),n._v(" --\x3e 单一职责原则、开闭原则、里氏替换原则 --\x3e "),_("strong",[n._v("A、B、C、D")]),n._v("\n通过这三个原则我们得到了 A、B、C、D 四个依赖的代码块。\n他们的依赖关系可能是：\nA 依赖 B ，A 依赖 C ，A 依赖 D\nB 依赖 C ，B 依赖 D， B 依赖 A\nC 依赖 D ，D 依赖 B。\n都有可能，这里是随便举例。\n然后可以使用"),_("strong",[n._v("迪米特法则")]),n._v("，降低耦合度。\n这个过程，有可能把 B 对 C、B 对 D 、 C 对 D 、 B 对 A 的依赖消除了，\n此时，经过 A 的改变，对其依赖改变，然后反馈到页面上。")]),n._v(" "),_("p",[n._v("A --\x3e\n|\n--\x3e B  -----------\x3e\n--\x3e C  -----------\x3e  "),_("strong",[n._v("页面")]),n._v("\n--\x3e D  -----------\x3e")]),n._v(" "),_("p",[n._v("最后，我们使用"),_("strong",[n._v("依赖倒置原则")]),n._v("，消除可以不存在的耦合度。")]),n._v(" "),_("p",[n._v("A --\x3e\n|\n|\n--\x3e 全局状态 E\n|\n|（通过监听 E 的状态）\n|\n|--\x3e B  -----------\x3e\n|--\x3e C  -----------\x3e  "),_("strong",[n._v("页面")]),n._v("\n|--\x3e D  -----------\x3e")]),n._v(" "),_("p",[n._v("再上面的过程，通过监听“状态 E”，触发 B、C、D 功能。")]),n._v(" "),_("p",[n._v("这便是设计模式六大原则的应用。")]),n._v(" "),_("p",[_("strong",[n._v("创建型 - 研究高效的创建对象")])]),n._v(" "),_("ul",[_("li",[n._v("单例模式")]),n._v(" "),_("li",[n._v("抽象工厂模式")]),n._v(" "),_("li",[n._v("建造者模式")]),n._v(" "),_("li",[n._v("工厂模式")]),n._v(" "),_("li",[n._v("原型模式")])]),n._v(" "),_("p",[_("strong",[n._v("结构型模式 - 设计对象的结构和关系")])]),n._v(" "),_("ul",[_("li",[n._v("适配器模式")]),n._v(" "),_("li",[n._v("桥接模式")]),n._v(" "),_("li",[n._v("装饰模式")]),n._v(" "),_("li",[n._v("组合模式")]),n._v(" "),_("li",[n._v("外观模式")]),n._v(" "),_("li",[n._v("亨元模式")]),n._v(" "),_("li",[n._v("代理模式")])]),n._v(" "),_("p",[_("strong",[n._v("行为型模式 - 设计对象的行为")])]),n._v(" "),_("ul",[_("li",[n._v("模板方法模式")]),n._v(" "),_("li",[n._v("命令模式")]),n._v(" "),_("li",[n._v("迭代器模式")]),n._v(" "),_("li",[n._v("观察者模式")]),n._v(" "),_("li",[n._v("中介者模式")]),n._v(" "),_("li",[n._v("备忘录模式")]),n._v(" "),_("li",[n._v("解释器模式")]),n._v(" "),_("li",[n._v("状态模式")]),n._v(" "),_("li",[n._v("策略模式")]),n._v(" "),_("li",[n._v("职责链模式")]),n._v(" "),_("li",[n._v("访问者模式")])])])}),[],!1,null,null,null);v.default=t.exports}}]);