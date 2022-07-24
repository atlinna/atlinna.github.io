(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{691:function(n,e,t){"use strict";t.r(e);var a=t(7),i=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"设计模式-代理模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计模式-代理模式"}},[n._v("#")]),n._v(" 设计模式 - 代理模式")]),n._v(" "),t("p",[n._v("定义：为一个对象添加一种代理来控制对这个对象的访问。")]),n._v(" "),t("p",[n._v("代理对象类似于房产中介，比如说你有一个租房子的需求，但是呢你没有什么时间去自己找房源对吧？于是呢，你找到了房产中介，房产中介有一个好处就是，他帮助房东寻找租客，换句话说就是，我们通过中介的代理找到房东，并且租他的房子对把。")]),n._v(" "),t("h3",{attrs:{id:"代理模式分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代理模式分类"}},[n._v("#")]),n._v(" 代理模式分类")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("虚拟代理：")]),n._v(" "),t("p",[n._v("虚拟代理是吧一些开销很大的对象，延迟到真正需要他的时候才去创建执行")]),n._v(" "),t("p",[n._v("比如说，你有一个对象，有一天你准备回家，你对象给你发语音说，想吃南城的煎饼，")]),n._v(" "),t("p",[n._v("完事你一想估计还有别的要求，于是你等了一会，果不其然嗷，又来一条消息说还想吃哪哪哪的蛋糕，完事还想喝楼下那家店的奶茶。这样你已经知道了所有要做的事情是不是就可以规划一条最佳的路线出来。否则有没有可能就是你到了南城，然后跑到北城，再窜回南城。")]),n._v(" "),t("p",[n._v("图片加载，文件上传。")])]),n._v(" "),t("li",[t("p",[n._v("安全代理：")]),n._v(" "),t("p",[n._v("控制真实对象的访问权限")]),n._v(" "),t("p",[n._v("登录操作后才能看全部功能、权限校验")])]),n._v(" "),t("li",[t("p",[n._v("远程代理：")]),n._v(" "),t("p",[n._v("一个对象将不同空间的对象进行局部代理。")]),n._v(" "),t("p",[n._v("监控多个对象的状态，总机监控分店")])]),n._v(" "),t("li",[t("p",[n._v("智能代理：")]),n._v(" "),t("p",[n._v("调用对象代理处理另外一些事情，如垃圾回收机制增加额外服务。")]),n._v(" "),t("p",[n._v("提供额外的其他服务 火车站代售")])])]),n._v(" "),t("p",[n._v("我们一起来看下代理模式是怎么运作的\n假设，我有一个朋友叫小明，小明呢交友广泛，最喜欢的事情就是找女朋友，然后呢他追女孩的手段就是送花。\n我们构建一个对象出来。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    var XiaoMing = {\n        like: null,\n        findTarget: function (target) {\n            this.like = target;\n        },\n        way: 'flower',\n        sendFlower: function (target) {\n            target.receiveFlower()\n        }\n    }\n")])])]),t("p",[n._v("然后小明呢也不是随便的人，他呢喜欢颜值高的女生。不是见一个爱一个,然后我们粗略的修改一下我们的方法\n我们说这个小明啊，首先会把女孩的研制先筛选一遍，然后从心仪的女孩"),t("strong",[n._v("们")]),n._v("中随便找一个，开启猛烈的攻势。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    function createRandom(max, min) {\n        let t = Math.floor(Math.random() * (max + 1 - min)) + min\n        return t\n    }\n\n    var XiaoMing = {\n        like: null,\n        findTarget: function (targetArr) {\n            if (!targetArr || targetArr.length == 0) return\n            let highYanzhi = targetArr.filter(item => item.yanzhi > 80); // 我们假设小明喜欢颜值高于80的女生\n            let key = createRandom(highYanzhi.length, 0);\n            this.like = highYanzhi[key];\n        },\n        way: 'flower',\n        sendFlower: function (target) {\n            target.receiveFlower()\n        },\n    }\n")])])]),t("p",[n._v("OK ，然后就是女孩，女孩的特性差不多都是相同的，这里我们使用一个构造函数来创建。\n首先，女生需要有颜值对吧，有姓名，然后呢她还能接受小明送出的花。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    function Girl(yanzhi, name) {\n        this.yanzhi = yanzhi;\n        this.name = name;\n        this.receiveFlower = function () {\n          // pass\n        }\n    }\n")])])]),t("p",[n._v("我们假设女孩子会有小脾气对吧，而且呢，这个小脾气阴晴不定，时好时坏的。这时候我们增加一些属性和方法来描述女孩的心情。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    function Girl(yanzhi, name) {\n        this.yanzhi = yanzhi;\n        this.name = name;\n        this.mood = null;\n        this.timer = null;\n        this.receiveFlower = function () {\n            // pass\n        }\n        this.changeMood = function () {\n            this.timer = setInterval(function () {\n                createMood()\n            }, 300);\n        }\n        function createMood() {\n            this.mood = Math.random() > 0.5;\n            console.log(this.name, this.mood);\n        }\n    }\n")])])]),t("p",[n._v("OK,场景差不多搭建好了，我们开始创建演员啦。\n我们通过构造函数 Girl 实例化四个女孩子，然后让她们的心情开始波动，然后将她们放到一个组里。有点非诚勿扰内意思哈···")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    let MissHong = new Girl(97, 'xiaohong')\n    let MissLv = new Girl(80, 'xiaolv');\n    let MissHuang = new Girl(85, 'xiaohuang');\n    let MissLan = new Girl(60, 'xiaolan')\n\n    let girls = [MissHong, MissLv, MissHuang, MissLan];\n\n    for (let girl of girls) {\n        girl.changeMood()\n    }\n")])])]),t("p",[n._v("然后小明开始寻找目标，这里小明找到目标后还会理其他的女孩嘛？应该是不会了，除非他是渣男是吧，我们就暂且认为小明是不是个渣男，他比较专一。\n我们增加方法 dontCare 意思是找到目标后，其他人就不 care 了。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    var XiaoMing = {\n        like: null,\n        findTarget: function (targetArr) {\n            if (!targetArr || targetArr.length == 0) return\n            let highYanzhi = targetArr.filter(item => item.yanzhi > 80);\n            let key = createRandom(highYanzhi.length, 0);\n            this.like = highYanzhi[key];\n            this.dontCare(targetArr);\n        },\n        dontCare: function (targetArr) {\n            targetArr.forEach(girl => {\n                if (girl != this.like) {\n                    clearInterval(girl.timer)\n                }\n            })\n        },\n        way: 'flower',\n        sendFlower: function (target) {\n            target.receiveFlower()\n        },\n    }\n")])])]),t("p",[n._v("然后小明开始送花")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    let MissHong = new Girl(97, 'xiaohong')\n    let MissLv = new Girl(80, 'xiaolv');\n    let MissHuang = new Girl(85, 'xiaohuang');\n    let MissLan = new Girl(60, 'xiaolan')\n\n    let girls = [MissHong, MissLv, MissHuang, MissLan];\n\n    for (let girl of girls) {\n        girl.changeMood()\n    }\n\n    // 小明寻找求爱目标\n    XiaoMing.findTarget(girls)\n    // 小明送花\n    XiaoMing.sendFlower(XiaoMing.like);\n")])])]),t("p",[n._v("好，女孩收到话之后，假设心情好的时候她答应，心情不好的时候就拒绝。\n于是我们回到 Girl 这个构造函数，完成最后的场景。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    this.receiveFlower = function (){\n        clearInterval(this.timer)\n        if (this.mood) {\n            console.log('I agree!');\n        } else {\n            console.log('I refuse');\n        }\n    }\n")])])]),t("p",[n._v("运行之后我们发现，全是拒绝，这是因为我们的 mood 属性是 null，所以我们要在初始的时候创建一下心情。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    function Girl(yanzhi, name) {\n        this.yanzhi = yanzhi;\n        this.name = name;\n        this.mood = null;\n        this.timer = null;\n        // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓\n        // here -----------------\n        createMood.call(this) // 添加初始化创建心情。\n        this.receiveFlower = function () {\n            clearInterval(this.timer)\n            if (this.mood) {\n                console.log('I agree!');\n            } else {\n                console.log('I refuse');\n            }\n        }\n        this.changeMood = function () {\n            let self = this\n            this.timer = setInterval(function () {\n                createMood.call(self)\n            }, 300);\n        }\n        function createMood() {\n            this.mood = Math.random() > 0.5;\n            // console.log(this.name, this.mood);\n        }\n    }\n")])])]),t("p",[n._v("然后我们就发现，有的时候女神会同意，但是有的时候女神会拒绝，如果我们下调女神开心的概率，是不是同意的概率大大减少了。\n这个时候，假设小明有我这么一个高大帅气的朋友对吧，出于保护他的想法呢，我去替小明送花,存在一个问题，就是我能直接去送花嘛？如果我直接去送的话结果是不是差不多的，女生拒绝了小明，完事小明没想开跳楼了是吧，造成了一桩餐具，还连累了我。于是乎，我有一个很 🐂 × 的功能，类似于读心术一样的东西吧，我能看到女孩心里想的是什么。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    var ProxyFriend = {\n        sendFlower: function (protect, target) {\n            this.listenGirlMood(target, protect)\n        },\n        // 首先我要先知道女孩的心思 ，监听她\n        listenGirlMood: function (target, protect) {\n            // 我呢隔一段时间看一下，女孩的心情是不是好的\n            const self = this;\n            let timer = setInterval(function () {\n                if (target.mood) {\n                    clearInterval(timer)\n                    protect.sendFlower(target)\n                }\n            }, 500)\n        }\n    }\n")])])]),t("p",[n._v("然后我们修改一下下方的调用，现在由于我害怕发生悲剧，所以帮小明去送花。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    let MissHong = new Girl(97, 'xiaohong')\n    let MissLv = new Girl(80, 'xiaolv');\n    let MissHuang = new Girl(85, 'xiaohuang');\n    let MissLan = new Girl(60, 'xiaolan')\n\n    let girls = [MissHong, MissLv, MissHuang, MissLan];\n\n    for (let girl of girls) {\n        girl.changeMood()\n    }\n\n    // 小明寻找求爱目标\n    XiaoMing.findTarget(girls)\n    // 小明送花\n    // XiaoMing.sendFlower(XiaoMing.like);\n    ProxyFriend.listenGirlMood(XiaoMing.like, XiaoMing)\n")])])]),t("p",[n._v("现在是不是就百发百中，起到了保护小明的作用。")]),n._v(" "),t("h5",{attrs:{id:"图片加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片加载"}},[n._v("#")]),n._v(" 图片加载")]),n._v(" "),t("p",[n._v("我们能看到一些大型的商城的很多商品图片很多，但是他都是上来就摆在那的吗？肯定不是的，\n他的原理是先放置一个站位图片（灰色的背景图片），然后加载商品图片，当我们的商品图片加载完毕，\n将图片进行替换。\n需要注意的是，我们发现那些图片是随着我们的滚动而加载的，也就是说这个图片加载的方式是使用了"),t("strong",[n._v("预加载和懒加载相结合")]),n._v("\n这样能够在带给用户比较不错的体验的同时，缩减了我们的性能。\n我们的代理模式呢，主要是帮助我们进行图片替换的一系列操作，减少重复代码。\n替换图片资源为什么会成功？主要是因为我们利用了浏览器，当我们的浏览器进行图片请求时，会自动的缓存我们的图片，也就是说，如果我们重复请求的话，\n将会去缓存的文件中找。请求时 状态码那里会显示‘from disk’ 来自硬盘 --"),t("strong",[n._v("利用了浏览器过盛的缓存能力")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('    var pic_url =\n    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G020114924%2F200G0114924-15-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658324349&t=ea0d16d2f6806e53b45eb959e243d1f5";\n\n    var link_url =\n    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-11-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658324349&t=08da488e8e47a1d50ae24100e51391f0";\n\n    function MyImage(_id) {\n        var img = document.createElement("img");\n        this.setSrc = function (src) {\n            img.src = src;\n    };\n    document.getElementById(_id).appendChild(img);\n    }\n\n\n    var ProxyImage = function (src) {\n    var oImg = new Image(); // 要显示的图片\n    var cook_img = new MyImage("con"); // 站位图片\n    cook_img.setSrc(pic_url);\n    oImg.onload = function () {\n        console.log(\'load\')\n        // 模拟网络请求；\n        setTimeout(() => {\n            cook_img.setSrc(src);\n        }, 1000);\n    };\n    oImg.src = src;\n    };\n\n    ProxyImage(link_url)\n')])])]),t("h5",{attrs:{id:"文件上传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件上传"}},[n._v("#")]),n._v(" 文件上传")]),n._v(" "),t("p",[n._v("文件上传的代理思想主要是为了减少服务器的压力。\n他并不是你想象的那种点一次进行一次上传，而是通过一个处理函数（handler）将我们要上传的文件处理成统一的格式，然后通过一个缓存先保存我们的数据，\n当我们需要上传的时候才去上传。\n就像是我们玩游戏的时候，总喜欢买皮肤对吧，我们假设衣服的部件都是分离的也就是上衣是上衣，裤子是裤子。\n当我们点点点，选择了一身衣服时，此时这个东西在我们的购物篮子里面对吧，这个篮子就相当于我们的缓存区，当我们点击购买的时候，此时是不是我们真正的需要他上传了，\n那么，他才进行网络请求，然后服务器只需要对我们上传的需要处理的集合进行统一处理即可，而不是一件一件分别处理。\n模拟一下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    function handler(val){\n        return {id:Math.random(),value:val}\n    }\n\n    function Cache(){\n        this.store = [];\n        this.push = function (val){\n            this.store.push(val);\n        };\n        this.clear = function (){\n            this.store = [];\n        }\n    }\n    var cache = new Cache()\n\n    function ProxyRequest(val){\n        var obj = handler(val)\n        cache.push(obj);\n        setTimeout(()=>{\n            // 网络请求\n            var params = cache.store\n            realRequest(params)\n            cache.clear()\n        },2000)\n    }\n    \n    function realRequest(source){\n        $.ajax({params:source,···})\n    }\n")])])]),t("p",[n._v("handler 函数进行数据格式的处理\nCache 一个暂存区，进行数据的保存\nProxyRequest 进行网络请求的代理,主要是将相关的数据进行缓存，然后进行触发。\nrealRequest 网络请求。")])])}),[],!1,null,null,null);e.default=i.exports}}]);