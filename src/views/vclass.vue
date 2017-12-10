<template>
  <div>
    <h1>Title</h1>
    <p>{{aboutMsg}}</p>


    <h2>*******实例 1*******</h2>
    <div v-bind:class="{ active: isActive }">红黄蓝事件</div>


    <h2>*******实例 2*******</h2>
    <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">
      热门事件
    </div>



    <h2>*******实例 3*******</h2>
    <div class="classObject">明日复明日</div>
    <div v-bind:class="classObject">明日复明日</div>


    <h2>*******实例 4*******</h2>
    <div v-bind:class="classObjectFour">明日何其多</div>



    <h2>*******数组语法*******</h2>
    <div v-bind:class="[classObjectFour, errorClass]">数组语法练习</div>



    <h2>*******实例 6*******</h2>
    <div v-bind:class="[errorClass, isActive ? classObjectFour : '']">isActive 为 true 时添加 activeClass 类</div>




    <h2>*******Vue.js style(内联样式)*******</h2>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">菜鸟教程</div>



    <h2>*******实例 8*******</h2>
    <div v-bind:style="styleObject">菜鸟教程</div>


    <h2>*******实例 9*******</h2>
    <div v-bind:style="[styleObject,styleBg]">菜鸟教程</div>




  </div>
</template>
<script>
  export default {
    data () {
      return {
        aboutMsg: '练习样式绑定',
        isActive : true,
        hasError : true,
        classObject : 'active',
        error: null,
        activeColor : 'red',
        fontSize : '18',
        styleObject : 'color: green; font-size: 22px; font-weight: bold;',
        styleBg : 'background: green;'
      }
    },
    computed: {
      classObjectFour: function () {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal',
        }
      },
      errorClass: function () {
        return {
          classObject: true,
        }
      }
    }


  }
</script>
<style scoped>

  .active{ color: red;}
  .classObject{ background: green; color: aquamarine;}
  .styleObject { color: green; font-size: 22px; font-weight: bold;}

</style>
