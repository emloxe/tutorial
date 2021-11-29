# vuex


在目录下创建
store/index.js

```js

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    index: 1,
    array: [1, 2, 3],
  },
  getters: { // 用于计算相关属性
    arrayLen: state => {
      return 'array长度为：' + state.array.length
    }
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.index++;
      state.array.push(1);
    }
  },
  actions: { // 可异步，然后调用mutations
    incrementAsync({
      commit
    }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  }

})

export default store;

```

## 调用
在 main.js 中
```js

Vue.prototype.$store = store;


new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

```


在组件中
```vue
<template>
  <view>
    <view>
      {{index}}
    </view>
    <view>
      {{arrayLen}}
    </view>
    <button  type="default" @click="clickHandle"> 触发mutations  </button>
    <button  type="default" @click="clickHandle2"> 触发actions  </button>
  </view>
</template>

<script>
  import {
    mapState,
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState([
        'index'
      ]),

      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'arrayLen',
      ])
    },
    methods: {
      clickHandle() {
        this.$store.commit('increment');
      },
      clickHandle2() {
        this.$store.dispatch('incrementAsync').then(() => {
          console.log('异步触发完成')
        });
      }
    }
  }
</script>

<style>

</style>

```




## 参考文档

https://vuex.vuejs.org/zh/guide/actions.html
