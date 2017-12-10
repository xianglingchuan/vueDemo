<template>
  <div>
    <h1>Title</h1>
    <p>{{aboutMsg}}</p>



    <h2>*******反转字符串*******</h2>
    <div>
      {{ message.split('').reverse().join('') }}
    </div>


    <h2>*******反转字符串*******</h2>
    <div>
      {{ message.split('').reverse().join('') }}
    </div>


    <p>原始字符串: {{ sourceMessage }}</p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>


    <!--<p>原始字符串: {{ methodsMessage }}</p>-->
    <!--<p>计算后反转字符串: {{ reversedMessage2 }}</p>-->



  </div>
</template>
<script>
  export default {
    data () {
      return {
        aboutMsg: '练习计算属性',
        message: 'vue前端框架学习',
        sourceMessage: '我爱北京，北京不爱我',
        methodsMessage: '我爱北京天安门',


      }
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.sourceMessage.split('').reverse().join('')
      },
      site: {
        // getter
        get: function () {
          return this.name + ' ' + this.url
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.name = names[0]
          this.url = names[names.length - 1]
        }
      }
    },
    methods: {
      reversedMessage2: function () {
        return this.methodsMessage.split('').reverse().join('')
      }
    }

  }


</script>
