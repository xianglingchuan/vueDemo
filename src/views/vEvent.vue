<template>
  <div>

    <h2>*******引入全局组件*******</h2>
    <myChild message="hello event!"></myChild>

    <globalChildTwo v-bind:message="globalChildTwoMessage"></globalChildTwo>

    <ol>
      <todo-item v-for="item in sites" v-bind:todo="item"></todo-item>
    </ol>



    <h1>Title</h1>
    <p>{{aboutMsg}}</p>

    <h2>*******v-on*******</h2>
    <button v-on:click="counter += 1">增加 1</button>
    <p>这个按钮被点击了 {{ counter }} 次。</p>


    <button v-on:click="greet">Greet</button>


    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>



    <h2>*******事件修饰符*******</h2>
    <!-- 阻止单击事件冒泡 -->
    <a v-on:click.stop="doThis">阻止单击事件冒泡</a>
    <br/>


    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit">提交事件不再重载页面</form>
    <!-- 修饰符可以串联  -->
    <a v-on:click.stop.prevent="doThat">修饰符可以串联</a>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent>只有修饰符</form>
    <!-- 添加事件侦听器时使用事件捕获模式 -->
    <div v-on:click.capture="doThis">添加事件侦听器时使用事件捕获模式</div>
    <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
    <div v-on:click.self="doThat">只当事件在该元素本身</div>

    <!-- click 事件只能点击一次，2.1.4版本新增 -->
    <a v-on:click.once="doThis">事件只能点击一次</a>


  </div>
</template>
<script>
  export default {
    data () {
      return {
        aboutMsg: '练习事件处理语句',
        counter: 0,
        globalChildTwoMessage: '父组件内容 by event',
        sites: [
          { text: 'Runoob' },
          { text: 'Google' },
          { text: 'Taobao' }
        ]
      }
    },
    // 在 `methods` 对象中定义方法
    methods: {
      greet: function (event) {
        // `this` 在方法里指当前 Vue 实例
        alert('Hello ===' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      },
      say: function (message) {
        alert(message)
      },
      doThis: function () {
        alert("doThis");
      },
      onSubmit: function () {
        alert("onSubmit");
      },
      doThat: function () {
        alert("doThat");
      }
    }
  }

</script>
