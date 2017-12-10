import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from "./router.js"




 //自定义全局组件
 Vue.component('globalComponent', {
      template: '<h1>自定义全局组件组件!</h1>'
 });

// 注册
Vue.component('myChild', {
  // 声明 props
  props: ['message'],
  // 同样也可以在 vm 实例中像 “this.message” 这样使用
  template: '<span>{{ message }}</span>'
});

// 注册
Vue.component('globalChildTwo', {
  // 声明 props
  props: ['message'],
  // 同样也可以在 vm 实例中像 "this.message" 这样使用
  template: '<span>{{ message }}</span>'
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})


//全局指定注册
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})











new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)
})
