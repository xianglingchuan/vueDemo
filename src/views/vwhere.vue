<template>
  <div>
    <h1>Title</h1>
    <p>{{aboutMsg}}</p>



    <h2>*******v-if*******</h2>
    <p v-if="seen">现在你看到我了</p>
    <template v-if="ok">
      <h1>标题内容</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p>哈哈哈，打字辛苦啊！！！</p>
    </template>


    <h2>*******v-else*******</h2>
    <div v-if="Math.random() > 0.5">
      Sorry
    </div>
    <div v-else>
      Not sorry
    </div>


    <h2>*******v-else-if*******</h2>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>



    <h2>*******v-show*******</h2>
    <h1 v-show="ok">Hello!</h1>





    <h2>*******v-else-if*******</h2>





    <h2>*******v-else-if*******</h2>



  </div>
</template>
<script>
  export default {
    data () {
      return {
        aboutMsg: '练习条件语句',
        seen: true,
        ok: true,
        type: 'C'

      }
    }
  }
</script>













