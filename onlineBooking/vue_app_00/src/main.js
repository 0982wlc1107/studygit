import Vue from 'vue'
import App from './App.vue'
import router from './router'
//第三方组件库在下面引入
//1:完整引入mint-ui
import MintUI from 'mint-ui' 
//2:单引引入mint-ui样式
import 'mint-ui/lib/style.css'
//3:将mint-ui注册vue
Vue.use(MintUI);
//4:引入图标字体样式文件
import "./font/iconfont.css"
//5:引入axios.js文件
import axios from "./axios"

// 6.1 引入vuex
import Vuex from "vuex"
// 6.2 注册vuex组件
Vue.use(Vuex)
// 6.3 创建store->Vuex实例对象
var store=new Vuex.Store({
  // vuex中全局共享的数据
  state:{
    cartCount:0  // 购物车商品数量
  },
  // 修改vuex中全局共享的数据
  // 通过函数修改
  mutations:{
    // 购物车数量+1
    increment(state){    // 将state作为参数
      state.cartCount++; // 修改state中的数据
    },
    // 购物车数量增加指定值c:5  5在调用时作为实参传入
    updateCount(state,c){
      state.cartCount+=c;
    },
    // 清空购物车
    clearCount(state){
      state.cartCount=0;
    }
  },
  // 获取vuex中全局共享的数据
  // 通过函数获取
  getters:{
    getCartCount:function(state){
      return state.cartCount;
    }
  }
})

Vue.config.productionTip = false

// 创建vue实例对象
new Vue({
  router,
  // 创建一个根组件 h是对象  h(App)函数
  render: h => h(App),
  store  // 6.4 将store保存vue实例中
}).$mount('#app')  // index.html中的id为app的div
