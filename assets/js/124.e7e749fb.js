(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{710:function(e,a,n){"use strict";n.r(a);var t=n(10),l=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"vue3-效率提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue3-效率提升"}},[e._v("#")]),e._v(" Vue3 效率提升")]),e._v(" "),n("p",[e._v("Vue3 的效率提升主要变现在哪些方面？")]),e._v(" "),n("hr"),e._v(" "),n("h3",{attrs:{id:"静态提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#静态提升"}},[e._v("#")]),e._v(" 静态提升")]),e._v(" "),n("p",[n("strong",[e._v("下面的静态节点会被提升")])]),e._v(" "),n("ul",[n("li",[e._v("元素节点")]),e._v(" "),n("li",[e._v("没有绑定动态内容")])]),e._v(" "),n("p",[e._v("以前 Vue2 的时候我们的template会存在一个预编译过程 就是将 template 里面的内容通过render函数 构建成虚拟 dom")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Vue2\nrender(){\n\tcreateVNode('h1',null,'Hello My friend!')\n}\n")])])]),n("p",[e._v("现在 Vue3呢 认为你这个啥也不是 就是个普普通通的 元素节点 默认他不会改变 就会把这个节点提取出来。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const hoisted = createVNode('h1',null,'Hello My friend!')\n\nfunction render(){\n\t// ... 直接使用 hoisted\n}\n")])])]),n("p",[e._v("这样能保证我们的节点只会创建一个，而不是随着部分内容改变重新创建。")]),e._v(" "),n("p",[e._v("如下：")]),e._v(" "),n("p",[e._v("我们创建一个静态组件（内部全是静态的dom）观察 vite 编译出的资源")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<template>\n  <div>\n    <ul>\n      <li>hello</li>\n      <li>beta</li>\n      <li>gama</li>\n      <li>stupid</li>\n    </ul>\n  </div>\n</template>\n<script>\nexport default {\n    \n}\n<\/script>\n")])])]),n("p",[e._v("![截屏2022-03-23 下午10.00.31](/Users/lucasy/Library/Application Support/typora-user-images/截屏2022-03-23 下午10.00.31.png)")]),e._v(" "),n("p",[n("strong",[e._v("静态属性会被提升")])]),e._v(" "),n("p",[e._v("比如说一个节点虽然他的内容是动态的，但是他的属性是静态的，这个属性会被提升。")]),e._v(" "),n("p",[e._v("将代码做部分修改：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n  <div>\n    <ul>\n      <li class="sofeia">{{ user.name }}</li>\n      <li>beta</li>\n    </ul>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      user: { name: "zhang san" },\n    };\n  },\n};\n<\/script>\n')])])]),n("p",[e._v("观察编译后的资源")]),e._v(" "),n("p",[e._v("![截屏2022-03-23 下午10.06.02](/Users/lucasy/workspace/new_level/note/Vue3/截屏2022-03-23 下午10.06.02.png)")]),e._v(" "),n("hr"),e._v(" "),n("h3",{attrs:{id:"预字符串化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#预字符串化"}},[e._v("#")]),e._v(" 预字符串化")]),e._v(" "),n("p",[e._v("什么是预字符串化呢")]),e._v(" "),n("p",[e._v("就是 当编译器遇到大量连续的静态内容，会直接将其便以为一个普通字符串节点")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// 模板\n<template>\n  <div>\n    <ul>\n      <li class="sofeia">{{ user.name }}</li>\n      <li>beta</li>\n    </ul>\n    <ul>\n      <li>hello</li>\n      <li>hello</li>\n      <li>hello</li>\n    </ul>\n    <ul>\n      <li>kalasica</li>\n      <li>kalasica</li>\n      <li>kalasica</li>\n      <li>kalasica</li>\n      <li>kalasica</li>\n      <li>kalasica</li>\n      <li>kalasica</li>\n      <li>kalasica</li>\n      <li>kalasica</li>\n      <li>kalasica</li>\n    </ul>\n    <ul>\n      <li>music</li>\n      <li>music</li>\n      <li>music</li>\n      <li>music</li>\n      <li>music</li>\n    </ul>\n    <div>{{ user.name }}</div>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      user: { name: "zhang san" },\n    };\n  },\n};\n<\/script>\n')])])]),n("p",[e._v("观察编译后的内容：")]),e._v(" "),n("p",[e._v("![截屏2022-03-23 下午10.11.12](/Users/lucasy/workspace/new_level/note/Vue3/截屏2022-03-23 下午10.11.12.png)")]),e._v(" "),n("p",[e._v("我们看到编译后的代码将连续的静态节点变成了一个字符串")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const _hoisted_3 = /*#__PURE__*/\n_createStaticVNode("<ul><li>hello</li><li>hello</li><li>hello</li></ul><ul><li>kalasica</li><li>kalasica</li><li>kalasica</li><li>kalasica</li><li>kalasica</li><li>kalasica</li><li>kalasica</li><li>kalasica</li><li>kalasica</li><li>kalasica</li></ul><ul><li>music</li><li>music</li><li>music</li><li>music</li><li>music</li></ul>", 3)\n')])])]),n("p",[n("strong",[e._v("限制情况：只有连续的节点且大于二十个")])]),e._v(" "),n("p",[e._v("Vue2 的时候 遇到这样的节点树就是会 render 函数生成虚拟dom···直到构建完整棵树。")]),e._v(" "),n("p",[e._v("这样只需要将关注点放在动态节点，而无需关心静态节点问题。")]),e._v(" "),n("hr"),e._v(" "),n("h3",{attrs:{id:"缓存事件处理函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缓存事件处理函数"}},[e._v("#")]),e._v(" 缓存事件处理函数")]),e._v(" "),n("p",[e._v("Vue3 同理也认为你绑定的事件是不会改变的")]),e._v(" "),n("p",[e._v("Vue3 中有很多个参数 大多数的参数都是 catch对象 用来缓存我们的数据")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n  <button @click="handleClick">click</button>\n</template>\n<script>\nexport default {\n  methods: {\n    handleClick() {},\n  },\n};\n<\/script>\n')])])]),n("p",[e._v("我们来看下编译后的内容：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('_createElementBlock("button", \n{\n    onClick: _cache[0] || \n    (_cache[0] = (...args) =>($options.handleClick && $options.handleClick(...args)))\n }, \n "click")\n')])])]),n("p",[e._v("可以看到在会访问缓存对象，如果缓存中没有 则会保存到缓存中。")]),e._v(" "),n("h3",{attrs:{id:"block-tree"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#block-tree"}},[e._v("#")]),e._v(" Block Tree")]),e._v(" "),n("p",[e._v("Vue2 在比对新旧树的时候，并不知道哪些节点是静态的，哪些是动态的，因此只能一层一层比较，这就浪费了大部分事件在比对静态节点上。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n  <form>\n    <div>\n      <label for="">账号：</label>\n      <input type="text" v-model="user.name" />\n    </div>\n    <div>\n      <label for="">密码：</label>\n      <input type="text" v-model="user.pawd" />\n    </div>\n  </form>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      user: {\n        name: "xxxx",\n        pawd: "xxx",\n      },\n    };\n  },\n};\n<\/script>\n')])])]),n("p",[e._v("在 Vue2 的时候 比对两棵树 会使用 petch 算法 但是 我们来看上面的模板，像 form、div 、label 这些静态节点又不会改变为什么还要比对呢？")]),e._v(" "),n("p",[e._v("但是 Vue3 中就不是这样子啦")]),e._v(" "),n("p",[e._v("Vue3 会在创建VDom 的时候识别动态节点然后将动态节点的信息保存到 根节点中，当我们页面发生改变后，直接找到根节点中存储的动态节点然后循环遍历直接比对动态节点，越过静态节点。")]),e._v(" "),n("p",[n("strong",[e._v("动静比")]),e._v("：静态节点越多动静比越大")]),e._v(" "),n("p",[e._v("这样提升的效率很高。")]),e._v(" "),n("h3",{attrs:{id:"patch-flag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#patch-flag"}},[e._v("#")]),e._v(" Patch Flag")]),e._v(" "),n("p",[e._v("Patch Flag 的作用就是标记我们修改的类型")]),e._v(" "),n("p",[e._v("还是上面的模板")]),e._v(" "),n("p",[e._v("我们看他的编译内容：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (\n    _openBlock(),\n    _createElementBlock("form", null, [\n      _createElementVNode("div", null, [\n        _hoisted_1,\n        _withDirectives(\n          _createElementVNode(\n            "input",\n            {\n              type: "text",\n              "onUpdate:modelValue":\n                _cache[0] ||\n                (_cache[0] = ($event) => ($data.user.name = $event)),\n            },\n            null,\n            512 /* NEED_PATCH */\n          ),\n          [[_vModelText, $data.user.name]]\n        ),\n      ]),\n      _createElementVNode("div", null, [\n        _hoisted_2,\n        _withDirectives(\n          _createElementVNode(\n            "input",\n            {\n              type: "text",\n              "onUpdate:modelValue":\n                _cache[1] ||\n                (_cache[1] = ($event) => ($data.user.pawd = $event)),\n            },\n            null,\n            512 /* NEED_PATCH */\n          ),\n          [[_vModelText, $data.user.pawd]]\n        ),\n      ]),\n    ])\n  );\n}\n\n')])])]),n("p",[e._v("我们看这个地方：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('_createElementVNode(\n            "input",\n            {\n              type: "text",\n              "onUpdate:modelValue":\n                _cache[1] ||\n                (_cache[1] = ($event) => ($data.user.pawd = $event)),\n            },\n            null,\n            512 /* NEED_PATCH */\n          ),\n')])])]),n("p",[e._v("在创建Vdom的时候发现后面跟了一个数字  512 这个数字就是一个标记值，表示我们节点改变的类型")]),e._v(" "),n("p",[e._v("再比如：")]),e._v(" "),n("p",[e._v("我们修改了模板")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n  <form>\n    <div>\n      <label for="">账号：</label>\n      \x3c!-- <input type="text" v-model="user.name" /> --\x3e\n      <span>{{ user.name }}</span>\n    </div>\n    <div>\n      <label for="">密码：</label>\n      \x3c!-- <input type="text" v-model="user.pawd" /> --\x3e\n      <span>{{ user.pawd }}</span>\n    </div>\n  </form>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      user: {\n        name: "xxxx",\n        pawd: "xxx",\n      },\n    };\n  },\n};\n<\/script>\n')])])]),n("p",[e._v("发现后面的数字变成了 1")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {\n    return (_openBlock(),\n    _createElementBlock("form", null, [_createElementVNode("div", null, [_hoisted_1, _createCommentVNode(" <input type=\\"text\\" v-model=\\"user.name\\" /> "), _createElementVNode("span", null, _toDisplayString($data.user.name), 1 /* TEXT */\n    )]), _createElementVNode("div", null, [_hoisted_2, _createCommentVNode(" <input type=\\"text\\" v-model=\\"user.pawd\\" /> "), _createElementVNode("span", null, _toDisplayString($data.user.pawd), 1 /* TEXT */\n    )])]))\n}\n')])])]),n("p",[e._v("后面的注释解释 是 TEXT 意思是 文本类型。")])])}),[],!1,null,null,null);a.default=l.exports}}]);