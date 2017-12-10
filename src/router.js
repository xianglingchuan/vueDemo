import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./home.vue";
import about from "./about.vue";
import template from "./views/template.vue";
import vwhere from "./views/vwhere.vue";
import vfor from "./views/vfor.vue"
import computed from "./views/computed.vue"
import computed02 from "./views/computed02.vue"
import vclass from "./views/vclass.vue"
import vEvent from "./views/vEvent.vue"
import vForm from "./views/vform.vue"
import vcommand from "./views/vcommand.vue"



// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path:"/home",
    component: home
  },
  {
    path: "/about",
    component: about
  },
  {
    path: "/template",
    component: template
  },
  {
    path: "/vwhere",
    component: vwhere
  },
  {
    path: "/vfor",
    component: vfor
  },
  {
    path: "/computed",
    component: computed
  },
  {
    path: "/computed02",
    component: computed02
  },
  {
    path: "/vclass",
    component: vclass
  },
  {
    path: "/vEvent",
    component: vEvent
  },
  {
    path: "/vForm",
    component: vForm
  },
  {
    path: "/vcommand",
    component: vcommand
  },
]
var router =  new VueRouter({
  routes
})
export default router;
