<template>
  <div>
    <h1>Title</h1>
    <p>{{aboutMsg}}</p>


    <h2>*******v-for*******</h2>
    <ol>
      <li v-for="site in sites">
           {{ site.name }} - {{site.age}}
    </li>
    </ol>

    <ul>
      <template v-for="site in sites">
        <li>{{ site.name }} - {{site.age}}</li>
        <li>--------------</li>
      </template>
    </ul>



    <h2>*******v-for 迭代对象*******</h2>
    <ul>
      <li v-for="value in object">
        {{ value }}
      </li>
    </ul>

    <ul>
      <li v-for="(value, key) in object">
        {{ key }} : {{ value }}
    </li>
    </ul>

    <ul>
        <li v-for="(value, key, index) in object">
          {{ index }}. {{ key }} : {{ value }}
        </li>
    </ul>


    <h2>*******v-for 迭代整数*******</h2>
    <ul>
        <li v-for="n in 10">
          {{ n }}
        </li>
    </ul>

    <ul>
      <li v-for="n in [1,3,5,7,9]">
        {{ n }}
      </li>
    </ul>



  </div>
</template>
<script>
  export default {
    data () {
      return {
        aboutMsg: '练习循环语句',
        sites: [
          { name: 'Runoob', age:'22' },
          { name: 'Google', age:'33' },
          { name: 'Taobao', age:'44' }
        ],
        object: {
           name: 'csdn',
           url: 'http://www.csdn.com',
           slogan: '学的不仅是技术，更是梦想！'
        }

      }
    }
  }
</script>
