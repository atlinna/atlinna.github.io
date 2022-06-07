(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{651:function(t,e,r){"use strict";r.r(e);var n=r(13),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"_234-树的由来"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_234-树的由来"}},[t._v("#")]),t._v(" 234 树的由来")]),t._v(" "),r("p",[t._v("前一节我们通过，左单璇、右单璇、左左双旋、左右双旋、右右双旋、右左双旋，使得一颗不平衡的二叉搜索树变成了一颗 二叉平衡搜索树。")]),t._v(" "),r("p",[r("strong",[t._v("二叉平衡排序树性能是极致了吗？")])]),t._v(" "),r("p",[r("strong",[t._v("我们要提升二叉平衡排序树的性能该如何做呢？")])]),t._v(" "),r("p",[t._v("首先我们先思考几个问题")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("影响二叉平衡排序树的性能点在哪？")]),t._v(" "),r("p",[t._v("在于二叉平衡排序书只能是二叉树，有两个叉，导致在节点铺满的时候也会有很多层。我们希望可以一个节点存多个数。可以提升空间性能。")])]),t._v(" "),r("li",[r("p",[t._v("如何才能让查找的效率尽可能的少？")]),t._v(" "),r("p",[t._v("树的层级越少，查找效率越高。")])]),t._v(" "),r("li",[r("p",[t._v("怎么样才能让二叉平衡排序树的层数变少？")]),t._v(" "),r("p",[t._v("如果不是二叉，层数更少")])])]),t._v(" "),r("p",[t._v("叉越多，层数越少，但是叉越多，树的结构也就越复杂。")]),t._v(" "),r("p",[t._v("数学家经过计算之后，表示 4 个叉是极限。")]),t._v(" "),r("p",[t._v("什么是 234 树呢？")]),t._v(" "),r("p",[t._v("我们希望有这样一棵树，最多有四个叉，")]),t._v(" "),r("p",[t._v("234树 子节点永远在最后一层")]),t._v(" "),r("p",[t._v("234树 永远是平衡的（每个路径高度都相同）")]),t._v(" "),r("p",[t._v("这样 分支变多了，层数变少了。")]),t._v(" "),r("p",[t._v("节点中存的数变多了，节点就减少了。")]),t._v(" "),r("p",[t._v("但是，")]),t._v(" "),r("p",[t._v("因为分支多了，复杂度就上升了")]),t._v(" "),r("p",[t._v("所以我们希望能够简化一下 234树")]),t._v(" "),r("ul",[r("li",[t._v("希望能简化为二叉树")]),t._v(" "),r("li",[t._v("希望依旧保留多叉")]),t._v(" "),r("li",[t._v("希望依旧单节点中存放多个值")])]),t._v(" "),r("h3",{attrs:{id:"红黑树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#红黑树"}},[t._v("#")]),t._v(" 红黑树")]),t._v(" "),r("p",[t._v("红黑树的性质：")]),t._v(" "),r("ul",[r("li",[t._v("性质1：节点是红色或黑色")]),t._v(" "),r("li",[t._v("性质2：根节点是黑色。")]),t._v(" "),r("li",[t._v("性质3：每个红色节点的两个子节点都是黑色。")]),t._v(" "),r("li",[t._v("性质4：从任意节点到其每个叶子的所有路径都包含相同数目的黑色节点。")])]),t._v(" "),r("p",[t._v("炸一看，tm 完全看不懂是吧？")]),t._v(" "),r("p",[t._v("首先别急，我们带着几个问题去看")]),t._v(" "),r("p",[t._v("根据性质1： 节点是红色或黑色 ，我们想下 什么是红色，什么是黑色 ？ 红黑代表着什么样的意义？")]),t._v(" "),r("p",[t._v("根据性质2：为什么根节点是黑色？ 黑色具有什么样的意义？")]),t._v(" "),r("p",[t._v("根据性质3：还是说红色黑色的意义")]),t._v(" "),r("p",[t._v("根据性质4：它只算黑色节点，为什么不算上红色节点呢？")]),t._v(" "),r("p",[r("strong",[t._v("首先")])]),t._v(" "),r("p",[t._v("我们有一个 234 树， 节点中只有一个值， 那么对应 红黑树就是 一个节点 50")]),t._v(" "),r("p",[r("img",{attrs:{src:"/Problem/picture/%E7%BA%A2%E9%BB%91%E6%A0%91-1.png",alt:"截屏2022-04-20 22.19.53"}})]),t._v(" "),r("p",[t._v("这时候，我们节点中新增一个值，得到的红黑树，就是这样一个结构，红色是什么意思呢？")]),t._v(" "),r("p",[t._v("红色的节点就代表，我们将两个红色节点连通了，那么我们的取值范围现在就变成了 比50小、大于50小于80、大于80.这三个，对应红色节点的三个子节点，这也对应234树，多叉同时还是二叉树的理念（将红色节点看做一个节点，此时我们的树是否就变为多叉了，）。")]),t._v(" "),r("p",[t._v("而且我们的树天生就是平衡的。")]),t._v(" "),r("p",[r("img",{attrs:{src:"/Problem/picture/%E7%BA%A2%E9%BB%91%E6%A0%91-2.png",alt:"截屏2022-04-20 22.26.15"}})]),t._v(" "),r("h3",{attrs:{id:"树节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#树节点"}},[t._v("#")]),t._v(" 树节点")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    function Node(value) {\n        this.value = value;\n        this.children = [];\n    }\n\n    let A = new Node('A')\n    let B = new Node('B')\n    let C = new Node('C')\n    let D = new Node('D')\n    let E = new Node('E')\n    let F = new Node('F')\n    let G = new Node('G')\n\n    A.children.push(B)\n    A.children.push(C)\n    A.children.push(D)\n\n    B.children.push(E)\n    B.children.push(F)\n\n    D.children.push(G)\n")])])]),r("h3",{attrs:{id:"树的深度优先搜索"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#树的深度优先搜索"}},[t._v("#")]),t._v(" 树的深度优先搜索")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    /**\n     * 树的深度优先搜索\n     * @param {*} root \n     */\n    function deepSearchTree(root, target) {\n        if (!root || !target) return false\n        if (root.value == target) return true\n        let result = false\n        for (let i = 0; i < root.children.length; i++) {\n            result |= deepSearchTree(root.children[i], target)\n        }\n        return Boolean(result);\n    }\n")])])]),r("h3",{attrs:{id:"树的广度优先搜索"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#树的广度优先搜索"}},[t._v("#")]),t._v(" 树的广度优先搜索")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    /**\n     * 树的广度优先搜索\n     * @param {*} roots \n     * @param {*} target \n     */\n    function dfs(roots, target) {\n        if (!roots || roots.length < 1 || !target) return false\n        let childs = []\n        for (let i = 0; i < roots.length; i++) {\n            if (roots[i].value == target) {\n                return true\n            } else {\n                childs = childs.concat(roots[i].children)\n            }\n        }\n        return dfs(childs, target)\n    }\n")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);