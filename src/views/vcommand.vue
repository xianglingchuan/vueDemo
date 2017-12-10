<template>
  <div>
    <h1>Title</h1>
    <p>{{aboutMsg}}</p>



    <h2>*******引入全局自定义指令*******</h2>
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-focus>


    <h2>*******引入局部自定义指令*******</h2>
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-myFocus>


    <h2>*******钩子函数*******</h2>
    <div v-runoob:hello.a.b="message">
    </div>
    <p></p>



    <div v-myRunoob="{color:'green', text:'菜鸟教程!'}"></div>


  </div>
</template>
<script>
  export default {
    data () {
      return {
        aboutMsg: '练习条件语句',
        message: '菜鸟教程!'
      }
    },

    directives: {
      // 注册一个局部的自定义指令 v-focus
      myFocus: {
        // 指令的定义
        inserted: function (el) {
          // 聚焦元素
          el.focus()
        }
      },
      runoob:{
        bind: function (el, binding, vnode) {
          var s = JSON.stringify;

          el.style.backgroundColor = 'red';

          el.innerHTML =
            'name: '       + s(binding.name) + '<br>' +
            'value: '      + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: '   + s(binding.arg) + '<br>' +
            'modifiers: '  + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ')
        }
      },
      myRunoob:{
        bind: function (el, binding) {
          // 简写方式设置文本及背景颜色
          el.innerHTML = binding.value.text
          el.style.backgroundColor = binding.value.color
        }
      }
    }

  }
</script>













