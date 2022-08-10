(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{689:function(v,_,n){"use strict";n.r(_);var a=n(7),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[n("h2",{attrs:{id:"前端比会算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端比会算法"}},[v._v("#")]),v._v(" 前端比会算法")]),v._v(" "),n("p",[v._v("首先是我们的数据结构。")]),v._v(" "),n("p",[v._v("我们先来说一下线性数据结构")]),v._v(" "),n("p",[v._v("什么是线性数据结构呢？")]),v._v(" "),n("p",[v._v("就是说，数据和我们的空间是极度相似的，一维是线，二位是面，三维是立体，四位是立体加时间。")]),v._v(" "),n("p",[v._v("线性数据结构呢，就是描述方式为一条线的结构。")]),v._v(" "),n("p",[v._v("如数组，链表")]),v._v(" "),n("p",[n("strong",[v._v("数组")])]),v._v(" "),n("p",[v._v("首先我们要知道一个概念叫做"),n("strong",[v._v("定长")]),v._v("。数组的长度是固定的。这个时候你是不是就有疑问了？")]),v._v(" "),n("p",[v._v("说我们声明的时候都是直接 var arr = [] ；这样，然后往里面push对吧？")]),v._v(" "),n("p",[v._v("其实你这样的操作是正确的，但是这样会极大的消耗计算机的性能。 为什么这么说呢？")]),v._v(" "),n("p",[v._v("这个要从计算机方面讲起，比如说我们要声明一个变量是不是要向计算机索要内存空间？")]),v._v(" "),n("p",[v._v("计算机会根据自身的情况为我们分配一块内存。")]),v._v(" "),n("p",[v._v("但是这块内存空间并不是要多大就有多大的，他是有一个固定大小的。")]),v._v(" "),n("p",[v._v("假如，我们有一个数组 var arr = [1,2,3,4,5]；我们这块空间容纳的数据数据就是 arr 且刚好容纳。但是这个时候，又来了一个 6，我们想将这个 6 装进数组中，但是内存空间不够大了，这个时候，内存空间会扩容。")]),v._v(" "),n("p",[v._v("达咩达咩 不是你想象的直接在数组最后一项，新增一个空间，他是会重新为我们开辟一个新的内存空间，然后把数组 arr 的前面复制进去，再把新的添加进去，这个叫做扩容。")]),v._v(" "),n("p",[v._v("不是我们想的那种！！！！ 切记。")]),v._v(" "),n("p",[v._v("然后我们的 arr 呢 指向的是我们这个数组的第一项，也就是索引为0的那一项。")]),v._v(" "),n("p",[v._v("如果我们想表示数组中其他的数据要怎么做？ 是不是直接 数组名加中括号下标？")]),v._v(" "),n("p",[v._v("也就是 arr[1],arr[2] 这样对吧？ 这个中括号叫什么呢？")]),v._v(" "),n("p",[n("strong",[v._v("中括号表示的是存储地址偏移")]),v._v("。")]),v._v(" "),n("p",[v._v("我们要取哪个区局就加上相对于第一项数据的偏移量对吧")]),v._v(" "),n("p",[n("strong",[v._v("通过偏移量查询数据性能最好")]),v._v("。记住这句话！")]),v._v(" "),n("p",[v._v("数组的特性：")]),v._v(" "),n("p",[v._v("1、存储在物理空间上是连续的。")]),v._v(" "),n("p",[v._v("2、底层的数组昌都市不可变的。")]),v._v(" "),n("p",[v._v("3、数组的变量，指向了数组第一个元素的位置。")]),v._v(" "),n("p",[v._v("优点：")]),v._v(" "),n("p",[v._v("查询性能好。（指定查询某个位置） 也就是使用偏移量。")]),v._v(" "),n("p",[v._v("就这一个优点···  不好意思哈 让你失望了")]),v._v(" "),n("p",[v._v("虽然我们优点少，但是缺点多呀~")]),v._v(" "),n("p",[v._v("缺点：")]),v._v(" "),n("p",[v._v("1、因为空间必须得是连续的，所以如果数组比较大，当系统的空间碎片较多的时候，容易存不下。")]),v._v(" "),n("p",[v._v("2、因为数组的长度是固定的，所以数组的内容难以被添加和删除。")]),v._v(" "),n("p",[v._v("首先解释一下什么是空间碎片。")]),v._v(" "),n("p",[v._v("嗯比如，我们计算机进程中，有很多打开的 app 对吧？ 但是有时候你总觉得某个 app 不顺眼，于是就把这个 app 的进程杀掉了，这时候 app 的内存空间被释放了对吧。也就是说，被释放的这片空间，没有被利用就像跳过去了一样，当这种情况变多的时候，比如说我们有个 1gb 的内存空间，然后我们想存储 100 mb 的数据。如果我们的空间碎片过多，是不是不连续。那么这个时候相当于没有连续的空间给我们用所以放不下，然后呢计算机会进行一个操作，叫做整理空间碎片，简而言之就是把空间进行规整，将数据挪来挪去，给我们腾出足够大的空间。注意！ 这个过程，非常之消耗性能。")]),v._v(" "),n("h3",{attrs:{id:"链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[v._v("#")]),v._v(" 链表")]),v._v(" "),n("p",[v._v("链表呢也属于线性数据结构，但是和 数组不同的一点是，没有这么矫情，怎么说呢？")]),v._v(" "),n("p",[v._v("我们的数组要的是一个连续的内存空间，但是链表不同，你可以不连续，我呢有办法找到下一个位置。")]),v._v(" "),n("p",[v._v("链表的表示形式呢如下：")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v("function Node(val){\n    this.value = val;\n    this.next = null;\n}\n")])])]),n("p",[v._v("链表呢是一种封装形式的数据结构")]),v._v(" "),n("p",[v._v("在创建的时候它会多要一个内存空间，用来干什么呢？用来存放下一个节点的位置。")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v("var a = new Node(1);\nvar b = new Node(2);\n")])])]),n("p",[v._v("如上代码我们创建了两个节点对吧，现在它还不叫链表只是单一的节点")]),v._v(" "),n("p",[v._v("我们要让他们联系起来就需要让 a 或者 b 存放他们的地址，来找到 a 或者 b")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v("a.next = b;\n")])])]),n("p",[v._v("现在 我们能通过 a 找到 b 节点的位置， 这一段 成为链表。")]),v._v(" "),n("p",[v._v("链表的特点：")]),v._v(" "),n("p",[v._v("1、空间上不是连续的。")]),v._v(" "),n("p",[v._v("2、没存放一个值，都要多开销一个引用空间。")]),v._v(" "),n("p",[v._v("优点：")]),v._v(" "),n("p",[v._v("1、只要内存足够大，就能存的下，不用担心空间碎片的问题。")]),v._v(" "),n("p",[v._v("2、链表的添加和删除非常的容易。")]),v._v(" "),n("p",[v._v("缺点：")]),v._v(" "),n("p",[v._v("1、查询速度慢，（指的查询某个位置。）")]),v._v(" "),n("p",[v._v("2、链表的每一个节点都需要创建一个指向next的引用，浪费一些空间。")]),v._v(" "),n("p",[v._v("当节点内数据越多的时候，这部分多开销的内存影响越少。")]),v._v(" "),n("h3",{attrs:{id:"线性数据的遍历"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线性数据的遍历"}},[v._v("#")]),v._v(" 线性数据的遍历")]),v._v(" "),n("ul",[n("li",[n("p",[v._v("数组的遍历")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v("var arrList = [1, 2, 3, 4, 5, 6];\n\n// 遍历数组\nfunction eachArr(arr) {\n  if (!arr) return;\n  for (var i = 0; i < arr.length; i++) {\n    console.log(arr[i]);\n  }\n}\neachArr(arrList);\n")])])]),n("p",[v._v("一定要记住加入非空判断。不然 null.length 会报错的")])]),v._v(" "),n("li",[n("p",[v._v("链表的遍历")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v('function Node(value) {\n  this.value = value;\n  this.next = null;\n}\n\nvar a = new Node("a");\nvar b = new Node("b");\nvar c = new Node("c");\nvar d = new Node("d");\nvar e = new Node("e");\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = null;\n\n// 遍历链表\nfunction eachList(list) {\n  var cur = list;\n  while (true) {\n    if (cur) {\n      console.log(cur.value);\n    } else {\n      break;\n    }\n    cur = cur.next;\n  }\n}\n\neachList(a);\n')])])]),n("p",[v._v("这个怎么想呢")]),v._v(" "),n("p",[v._v("比如说")]),v._v(" "),n("p",[v._v("我们构建了一个链表")]),v._v(" "),n("p",[v._v("a -> b -> c -> d -> e -> null")]),v._v(" "),n("p",[v._v("然后呢 我们定义一个指针。这个指针呢只负责指向根节点。")]),v._v(" "),n("p",[v._v("a -> b -> c -> d -> e -> null")]),v._v(" "),n("p",[v._v("^")]),v._v(" "),n("p",[v._v("cur")]),v._v(" "),n("p",[v._v("如上面所示的样子")]),v._v(" "),n("p",[v._v("然后我们只需要移到 cur 就能够拿到链表中的所有元素 也就是 cur.value 的值")]),v._v(" "),n("p",[v._v("移动的方法就是让指针指向当前节点的下一个节点，也就是 cur.next。")])])]),v._v(" "),n("h3",{attrs:{id:"递归"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#递归"}},[v._v("#")]),v._v(" 递归")]),v._v(" "),n("p",[v._v("对于初学者，递归可能不是很好理解，这里需要多练习。")]),v._v(" "),n("p",[v._v("首先 递归呢需要有一个出口，这个出口是控制调用的次数。为什么要控制，一会再说！")]),v._v(" "),n("p",[v._v("我们先来看下什么是递归以及递归是如何递归遍历我们的数组和链表的。")]),v._v(" "),n("p",[v._v("递归数组。 数组可以不需要使用递归的方式进行遍历，因为我们清楚的知道数组的长度。")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v("// 递归数组\nfunction recursionArr(arr, i) {\n  // 出口\n  if (i === arr.length) return;\n  console.log(arr[i]);\n  recursionArr(arr, i + 1);\n}\n\nrecursionArr(arrList, 0);\n")])])]),n("p",[v._v("递归呢简单理解就是重复的调用自身，但是你不能一直调用。比如说，人做一件事情做久了会累，计算机也是一样的。所以我们要定义一个出口，一个结束的节点。")]),v._v(" "),n("p",[v._v("我们遍历数组是不是知道数组的长度，也就是说我们的 i 等于数组长度的时候，数组中已经没有元素给我们了，这个时候我们是不是要跳出递归。")]),v._v(" "),n("p",[v._v("然后我们看下链表的递归。")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v("function recursionList(node) {\n  if (!node) return;\n  console.log(node.value)\n  recursionList(node.next);\n}\n\nrecursionList(a);\n")])])]),n("p",[v._v("我们看链表是如何递归的")]),v._v(" "),n("p",[v._v("首先我们要找到出口，是不是当我们的节点为 null 的时候链表就结束了？")]),v._v(" "),n("p",[v._v("也就是说只要我们的node 为 空，就终止遍历，接下来只需要不停的调用函数传入下一个节点就好了。")]),v._v(" "),n("p",[v._v("但是递归呢，能不用就不用，因为存在一种爆栈的风险。")]),v._v(" "),n("p",[v._v("所有递归都能转化为 while 循环")]),v._v(" "),n("p",[v._v("我们来修改一下递归链表的方法")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v("function recursionList(node) {\n  var cur = node;\n  while (cur) {\n    console.log(cur.value);\n    cur = cur.next;\n  }\n}\n\nrecursionList(a);\n")])])]),n("p",[v._v("循环的过程就是当 cur 不为 null 的时候。因为 cur 终究是会走到最后一个节点，最后一个节点的 next 指向的是null。")])])}),[],!1,null,null,null);_.default=r.exports}}]);