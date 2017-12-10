<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <globalComponent></globalComponent>


    <header>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/template">模板语法</router-link> |

      <router-link to="/vwhere">条件语句</router-link> |

      <router-link to="/vfor">循环语句</router-link> |

      <router-link to="/computed">计算属性</router-link> |

      <router-link to="/computed02">计算属性New</router-link> |

      <router-link to="/vclass">样式绑定</router-link> |

      <router-link to="/vEvent">事件处理器</router-link> |

      <router-link to="/vForm">表单</router-link> |

      <router-link to="/about">组件</router-link> |

      <router-link to="/vcommand">自定义指令</router-link> |

    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script>

//  // 注册
//  Vue.component('runoob', {
//    template: '<h1>自定义组件!</h1>'
//  })


  export default {

  }
</script>
