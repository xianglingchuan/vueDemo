<template>
  <div>
    <h1>Title</h1>
    <p>{{aboutMsg}}</p>


    <h2>*******插入文本*******</h2>
    <p>{{message}}</p>


    <h2>*******v-html指令用于输出html代码*******</h2>
    <div v-html="htmlMessage"></div>


    <h2>*******属性(HTML 属性中的值应使用 v-bind 指令)*******</h2>
    <label for="r1">修改颜色</label><input type="checkbox" v-model="class1" id="r1">
    <br><br>
    <div v-bind:class="{'class1':class1}">
      directiva v-bind:class
    </div>



    <h2>*******表达式*******</h2>
    {{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ messageBy.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">表达式学习</div>


    <h2>*******指令*******</h2>
    <p v-if="seen">现在你看到我了</p>


    <h2>*******参数*******</h2>
    <pre><a v-bind:href="url">百度中国</a></pre>
    <!-- click事件失败 -->
    <!--<a v-on:click="doSomething">-->


    <h2>*******修饰符*******</h2>
    <form v-on:submit.prevent="onSubmit"></form>


    <h2>*******用户输入*******</h2>
    <p>{{ userInputTitle }}</p>
    <input v-model="userInput">


    <h2>*******字符串反转*******</h2>
    <p>{{ reMessage }}</p>
    <button v-on:click="reverseMessage">反转字符串(测试失败)</button>


    <h2>*******过滤器*******</h2>
    <!-- 在两个大括号中 -->
    {{ filterMessage | capitalize }}


    <h2>*******v-bind 缩写*******</h2>
    <!-- 完整语法 -->
    <a v-bind:href="url">百度中国</a>
    <!-- 缩写 -->
    <a :href="url">百度中国</a>


    <h2>*******v-on 缩写*******</h2>
    <!-- 完整语法 -->
    {{vonMessage}}
    <a v-on:click="doSomething">中国人民</a>
    <!-- 缩写 -->
    <a @click="doSomething">人民中国</a>


  </div>
  <!--如果在外面插和div时报错-->
</template>
<script>
  export default {
    data () {
      return {
        aboutMsg: '我是样式',
        message: '我是插入的文本内容',
        htmlMessage: '<h1><font color="red"><a href="">显示html样式</a></font></h1>',
        class1: false,
        ok: true,
        messageBy: 'RUNOOB',
        id : 1,
        seen : true,
        url : 'www.baidu.com',
        userInputTitle : '用户名',
        userInput : '请输入用户名',

        reMessage : 'Runoob',
        filterMessage : 'runoob',

        vonMessage : 'vonMessageTest',


      }
    },
    methods:{
      reverseMessage: function () {
        this.reMessage = this.reMessage.split('').reverse().join('')
      },
      doSomething: function(){
          console.log("doSomething.....");
          //Vue.set(this.vonMessage,"onclick修改信息");
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }

  }
</script>
<style scoped>
  .class1{ color: red;}
</style>
