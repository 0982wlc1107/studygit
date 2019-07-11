//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/booking/Home.vue"



Vue.use(Router)
export default new Router({
  routes: [
    {path:'/HelloContainer',component:HelloContainer},
    {path:'/Home',component:Home},
  ]
})
