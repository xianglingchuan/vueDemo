<template>
  <div>

    <h2>*******引入全局组件*******</h2>
    <myChild message="hello vform!"></myChild>

    <globalChildTwo v-bind:message="globalChildTwoMessage"></globalChildTwo>

    <ol>
      <todo-item v-for="item in sites" v-bind:todo="item"></todo-item>
    </ol>

    <div id="counter-event-example">
      <p>{{ total }}</p>
      <button-counter v-on:increment="incrementTotal"></button-counter>
      <button-counter v-on:increment="incrementTotal"></button-counter>
    </div>



    <h2>*******引入全局自定义指令*******</h2>
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-focus>



    <h1>Title</h1>
    <p>{{aboutMsg}}</p>


    <h2>*******输入框*******</h2>
    <p>input 元素：</p>
    <input v-model="message" placeholder="编辑我……">
    <p>消息是: {{ message }}</p>

    <p>textarea 元素：</p>
    <p style="white-space: pre">{{ message2 }}</p>
    <textarea placeholder="多行文本输入……"></textarea>




    <h2>*******复选框*******</h2>
    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>



    <h2>*******单选按钮*******</h2>
    <input type="radio" id="runoob" value="Runoob" v-model="picked">
    <label for="runoob">Runoob</label>
    <br>
    <input type="radio" id="google" value="Google" v-model="picked">
    <label for="google">Google</label>
    <br>
    <span>选中值为: {{ picked }}</span>


    <h2>******select列表*******</h2>
    <select v-model="selected" name="fruit">
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>

    <div id="output">
      选择的网站是: {{selected}}
  </div>



    <h2>******修改符 .lazy*******</h2>
    <!-- 在 "change" 而不是 "input" 事件中更新 -->
    <input v-model.lazy="msg" >


    <h2>******修改符 .number*******</h2>
    <input v-model.number="age" type="number">


    <h2>******修改符 .trim*******</h2>
    <input v-model.trim="msg">

    <runoob></runoob>




  </div>
</template>
<script>

  var Child = {
    template: '<h1>自定义局部组件!</h1>'
  }

  export default {
    data () {
      return {
        aboutMsg: '练习表单',
        message: 'Runoob',
        message2: '菜鸟教程\r\nhttp://www.runoob.com',
        checked : false,
        checkedNames: [],
        picked : 'Runoob',
        selected: '',
        globalChildTwoMessage: '父组件内容 by form',
        sites: [
          { text: 'Runoob' },
          { text: 'Google' },
          { text: 'Taobao' }
        ],
        total: 0,

      }
    },
    components: {// <runoob> 将只在父模板可用
      'runoob': Child
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    }

  }
</script>













