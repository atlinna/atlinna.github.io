(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{693:function(e,t,r){"use strict";r.r(t);var n=r(10),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"二叉搜索树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二叉搜索树"}},[e._v("#")]),e._v(" 二叉搜索树")]),e._v(" "),r("p",[e._v("假设：")]),e._v(" "),r("p",[e._v("有一万个书，写一个方法，进行查找给定的树，返回存在还是不存在。")]),e._v(" "),r("p",[e._v("要求： 尽可能的性能好。")]),e._v(" "),r("p",[e._v("二叉搜索树（二叉排序树）")]),e._v(" "),r("p",[e._v("首先这是一颗二叉树，")]),e._v(" "),r("p",[e._v("其次有排序的效果，左子树的节点逗比当前节点小，右子树的节点都比当前节点大。")]),e._v(" "),r("p",[r("img",{attrs:{src:"/Problem/picture/%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91-1.png",alt:"截屏2022-04-17 21.24.20"}})]),e._v(" "),r("p",[e._v("假设现在有这么一个数列。那么我们怎么来构建二叉搜索树呢?")]),e._v(" "),r("p",[e._v("首先，拿到第一个数字当做根节点，然后后面的数字依次比较，比根节点小的 放左边，比根节点大的，放右边。如下")]),e._v(" "),r("p",[r("img",{attrs:{src:"/Problem/picture/%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91-2.png",alt:"截屏2022-04-17 21.27.23"}})]),e._v(" "),r("p",[e._v("把 3 当做根节点，然后呢 1 和 3 比较 比 3 小 放在 3 的左边，5比3大 放3 的 右边，然后 4 比 3 大 但是比 5 小 放在 5 的左边，这样依次放下放。")]),e._v(" "),r("p",[r("img",{attrs:{src:"/Problem/picture/%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91-3.png",alt:"截屏2022-04-17 21.30.50"}})]),e._v(" "),r("p",[e._v("可以发现构建完成之后的二叉搜索树就是这样的结构，我们可以发现 "),r("strong",[e._v("节点左边的 肯定是比自己小的，节点右边的 肯定是比自己大的")]),e._v("。")]),e._v(" "),r("p",[e._v("这样我们一层一层的遍历是不是最多查找 5 次就可以了")]),e._v(" "),r("p",[e._v("代码实现：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('const { TreeNode } = require("./utils");\nlet arr = [3, 1, 5, 4, 2, 7, 6, 9, 10];\n\nfunction addNode(root, value) {\n  if (!root) return;\n  if (root.value < value) {\n    if (root.right) {\n      addNode(root.right, value);\n    } else {\n      root.right = new TreeNode(value);\n    }\n  } else {\n    if (root.left) {\n      addNode(root.left, value);\n    } else {\n      root.left = new TreeNode(value);\n    }\n  }\n}\n\nfunction buildSearchTree(arr) {\n  if (!arr || arr.length == 0) return null;\n  let root = new TreeNode(arr[0]);\n  for (let i = 1; i < arr.length; i++) {\n    addNode(root, arr[i]);\n  }\n  return root;\n}\n\nconsole.log(buildSearchTree(arr));\n')])])]),r("p",[e._v("那么 二叉搜索树我们构建出来了，要怎么去使用这个数据结构呢？")]),e._v(" "),r("p",[e._v("接下来我们看下如何搜索：")]),e._v(" "),r("p",[e._v("代码：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("function searchByTree(root, target) {\n  if (!root || !target) return false;\n  if (root.value === target) return true;\n  else if (root.value > target) return searchByTree(root.left, target);\n  else return searchByTree(root.right, target);\n}\n")])])]),r("p",[e._v("这样的话我们就能查找到想要的数据了，")]),e._v(" "),r("p",[e._v("这样虽然是快了 ，但是还没有达到极致。")]),e._v(" "),r("p",[e._v("为什么这样说呢？")]),e._v(" "),r("p",[e._v("假设 我们使用 5 当做 根节点 的话")]),e._v(" "),r("p",[r("img",{attrs:{src:"/Problem/picture/%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91-3.png",alt:"截屏2022-04-17 22.14.11"}})]),e._v(" "),r("p",[e._v("我们发现，刚刚我们最多需要查找5次，现在换了个节点，最多只需要查找 4 次 就能找到。")]),e._v(" "),r("p",[e._v("基于这个结构，能缩减查找次数的根本是什么？")]),e._v(" "),r("p",[e._v("是不是 这个二叉树必须是一颗满二叉树。这样能最大限度的缩小我们 整颗二叉树的深度 对吧。")]),e._v(" "),r("p",[r("strong",[e._v("我们希望将二叉搜索树变成二叉平衡树。")])]),e._v(" "),r("h3",{attrs:{id:"平衡二叉树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#平衡二叉树"}},[e._v("#")]),e._v(" 平衡二叉树")]),e._v(" "),r("p",[e._v("首先先看一下平衡二叉树的特点")]),e._v(" "),r("ul",[r("li",[e._v("根节点的左右子树的高度差不能大于1")]),e._v(" "),r("li",[e._v("这颗二叉树的每个子树都符合第一条")])]),e._v(" "),r("p",[e._v("代码实现如何判断一棵树是否为平衡二叉树：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("   /**\n    * \n    * @param {根节点} root \n    * 获取树的深度\n    */\n   function getDeep(root) {\n       if (!root) return 0\n       let l = getDeep(root.left) + 1\n       let r = getDeep(root.right) + 1\n       return Math.max(l, r)\n   }\n\n   function isBalance(root) {\n       if (!root) return true\n       let left_deep = getDeep(root.left)\n       let right_deep = getDeep(root.right)\n       if (Math.abs(left_deep - right_deep) > 1) {\n           return false\n       }\n       let left_ret = isBalance(root.left)\n       let right_ret = isBalance(root.right)\n       return left_ret && right_ret\n   }\n")])])]),r("h3",{attrs:{id:"二叉树单旋"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二叉树单旋"}},[e._v("#")]),e._v(" 二叉树单旋")]),e._v(" "),r("p",[e._v("**左单旋特点:**左边浅右边深，左旋")]),e._v(" "),r("ul",[r("li",[e._v("新根节点为根节点的右子树")]),e._v(" "),r("li",[e._v("根节点的右子树为新根节点的左子树")]),e._v(" "),r("li",[e._v("新根节点的左子树为根节点")])]),e._v(" "),r("p",[e._v("**右单旋特点:**右边浅左边深，右旋")]),e._v(" "),r("ul",[r("li",[e._v("新根节点为根节点的左子树")]),e._v(" "),r("li",[e._v("根节点的右子树为新根节点的右子树")]),e._v(" "),r("li",[e._v("新根节点的右子树为根节点")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    /**\n     * 二叉树左单旋\n     * @param {*} root \n     */\n    function leftRotate(root) {\n        if (!root) return\n        let newRoot = root.right\n        root.right = newRoot.left\n        newRoot.left = root\n        return newRoot\n    }\n\n    /**\n     * 二叉树右单旋\n     * @param {*} root \n     */\n    function rightRotate(root) {\n        if (!root) return\n        let newRoot = root.left\n        root.left = newRoot.right\n        newRoot.right = root\n        return newRoot\n    }\n\n    /**\n     * 将树变为平衡二叉树\n     * @param {*} root \n     * @returns \n     */\n    function changeSearchTree(root) {\n        if (isBalance(root)) return root\n        if (!root) return\n        if (root.left) root.left = changeSearchTree(root.left)\n        if (root.right) root.right = changeSearchTree(root.right)\n        let left_deep = getDeep(root.left)\n        let right_deep = getDeep(root.right)\n        if (left_deep - right_deep > 1) {\n            // 左边深，需要右旋\n            let changeTreeDeep = getDeep(root.left.right)\n            let noChangeTreeDeep = getDeep(root.left.left)\n            if (changeTreeDeep > noChangeTreeDeep) root.left = leftRotate(root.left)\n            let newRoot = rightRotate(root)\n            newRoot = changeSearchTree(newRoot)\n            return newRoot\n        } else if (right_deep - left_deep > 1) {\n            // 右边深，需要左旋\n            let changeTreeDeep = getDeep(root.right.left)\n            let noChangTreeDeep = getDeep(root.right.right)\n            if (changeTreeDeep > noChangeTreeDeep) {\n                root.right = rightRotate(root.right)\n            }\n            let newRoot = leftRotate(root)\n            newRoot = changeSearchTree(newRoot)\n            return newRoot\n        }\n        return root\n    }\n")])])]),r("h3",{attrs:{id:"判断二叉树是否为二叉搜索树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#判断二叉树是否为二叉搜索树"}},[e._v("#")]),e._v(" 判断二叉树是否为二叉搜索树")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    /**\n     * 判断一棵树是否为二叉搜索树\n     * @param {根节点} root \n     */\n    function validTree(root, min_val = -Infinity, max_val = Infinity) {\n        if (!root) return true\n        if (root.value <= min_val || root.value >= max_val) return false;\n        return validTree(root.left, min_val, root.value) && validTree(root.right, root.value, max_val)\n    }\n\n    function isValidBST(root) {\n        return validTree(root)\n    }\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);