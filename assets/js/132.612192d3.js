(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{721:function(e,t,a){"use strict";a.r(t);var n=a(10),l=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"模板变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板变化"}},[e._v("#")]),e._v(" 模板变化")]),e._v(" "),a("p",[e._v("v-model的变化")]),e._v(" "),a("p",[e._v("v-model修饰符")]),e._v(" "),a("p",[e._v("我们先来看 v-model 的变化，以前我们可以通过特定的方式定义组件来使用 v-model 简化代码，如果想要定义第二个 v-model 是无法实现的，只能通过属性定义修饰符（如：:value.sync）来替代这个方式，但是啊 这两种方式虽然看上去不同，但是实现是一样的。所以 vue3 中作者就二选其一去掉了其中一个。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("v-model 的变化")]),e._v(" "),a("p",[e._v("v-model实质")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<ChileComp :value @input="value=$event" />\n')])])]),a("p",[e._v("简写为")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<ChileComp v-model:value />\n")])])]),a("p",[e._v("何为 v-model 就是定义一个 props 和 一个 事件 然后 通过事件修改 props值")]),e._v(" "),a("p",[e._v("这是我们以前的做法")]),e._v(" "),a("p",[e._v("然而 Vue3 觉得 两种方法有些重复就删掉了修饰符替代的那种")]),e._v(" "),a("p",[e._v("大体上还是没变")]),e._v(" "),a("p",[e._v("也是定义一个 props 和 一个事件 只不过 默认情况下，props 是 modelValue，然后我们要修改的是 modelValue 的值 所以事件为 update:modelValue.")]),e._v(" "),a("p",[e._v("father")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<v-modal-test\n    v-for="item in dateRef"\n    :key="item.id"\n    v-model="item.status"\n  />\n')])])]),a("p",[e._v("child")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<template>\n  <input type="checkbox" :checked="modelValue" @change="handleChange" />\n</template>\n<script>\nexport default {\n  props: {\n    modelValue: Boolean,\n    update: Function,\n  },\n};\n<\/script>\n')])])]),a("p",[e._v("继续，")]),e._v(" "),a("p",[e._v("我们通过定义的 handleChange 事件拿到 event.target.checked 这个 checkbox 的值后怎么来触发父组件的事件呢？ 以前是通过 this.$emit  但是现在没有 this 了")]),e._v(" "),a("p",[e._v("setup 存在两个参数")]),e._v(" "),a("p",[e._v("params1：props 这个属性指向的是我们的 props")]),e._v(" "),a("p",[e._v("Params2：这个属性是一些组件内置函数 这里面有emit、slots、attrs")]),e._v(" "),a("p",[e._v("这样可以继续进行了，")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  setup(props, self) {\n    const handleChange = (e) => {\n      self.emit("update:modelValue", e.target.checked);\n    };\n\n    return {\n      handleChange,\n    };\n  },\n')])])]),a("p",[e._v("那么我们如何定义第二个 v-model 呢？")]),e._v(" "),a("p",[e._v("可以通过给 v-model 添加属性的方式 如 v-model:text ， 然后子组件 通过 update 事件修改 text 的属性值 就 ok 了  update:text")]),e._v(" "),a("p",[e._v("father")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<v-modal-test\n    v-for="item in dateRef"\n    :key="item.id"\n    v-model="item.status"\n    v-model:text="item.name"\n  />\n')])])]),a("p",[e._v("child")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<template>\n  <input type="checkbox" :checked="modelValue" @change="handleChange" />\n  <input type="text" :value="text" @input="handleInput" />\n</template>\n<script>\nexport default {\n  props: {\n    modelValue: Boolean,\n    update: Function,\n    text: String,\n  },\n  setup(props, self) {\n    const handleChange = (e) => {\n      self.emit("update:modelValue", e.target.checked);\n    };\n\n    const handleInput = (e) => {\n      let val = e.target.value;\n      self.emit("update:text", val);\n    };\n\n    return {\n      handleChange,\n      handleInput,\n    };\n  },\n};\n<\/script>\n')])])])]),e._v(" "),a("li",[a("p",[e._v("修饰符")]),e._v(" "),a("p",[e._v("Vue3 删除了修饰符功能，改为自定义的方式。")]),e._v(" "),a("p",[e._v("怎么自定义呢？")]),e._v(" "),a("p",[e._v("父组件呢还是和原来保持不变，只不过逻辑全都交由子组件实现。")]),e._v(" "),a("p",[e._v("father")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<v-modal-test\n    v-for="item in dateRef"\n    :key="item.id"\n    v-model="item.status"\n    v-model:text.trim="item.name"\n  />\n')])])]),a("p",[e._v("我们在 text 属性那里添加了修饰符 trim 在 Vue2 中已经内置不需处理，但 Vue3 不同")]),e._v(" "),a("p",[e._v("我们要在子组件的 props 中定义一个 Modifiers 如果你定义了修饰符，会自定帮你放入Modifiers 中。 定义方式是 属性名 + Modifiers")]),e._v(" "),a("p",[e._v("Child")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("props: {\n    modelValue: Boolean,\n    update: Function,\n    text: String,\n    textModifiers: {\n      default: () => ({}),\n    },\n  },\n")])])]),a("p",[e._v("观察结果:我们定义了 trim 修饰符，然后 它就帮我们把 trim 这个属性放入了 textModifiers 很灵活")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("textModifiers:{\n\ttrim: true\n}\n")])])]),a("p",[e._v("接下来我们只需要在使用的时候按需使用就可以了")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    const handleInput = (e) => {\n      let val = e.target.value;\n      if (props.textModifiers.trim) {\n        val = val.trim();\n      }\n      self.emit("update:text", val);\n    };\n')])])]),a("p",[e._v("完整代码：Child")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<template>\n  <input type="checkbox" :checked="modelValue" @change="handleChange" />\n  <input type="text" :value="text" @input="handleInput" />\n</template>\n<script>\nexport default {\n  props: {\n    modelValue: Boolean,\n    update: Function,\n    text: String,\n    textModifiers: {\n      default: () => ({}),\n    },\n  },\n  setup(props, self) {\n    const handleChange = (e) => {\n      self.emit("update:modelValue", e.target.checked);\n    };\n\n    const handleInput = (e) => {\n      let val = e.target.value;\n      if (props.textModifiers.trim) {\n        val = val.trim();\n      }\n      self.emit("update:text", val);\n    };\n\n    return {\n      handleChange,\n      handleInput,\n    };\n  },\n};\n<\/script>\n')])])])])])])}),[],!1,null,null,null);t.default=l.exports}}]);