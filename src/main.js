import Vue from 'vue'
import router from './router'
import axios from 'axios'
//将axios挂在到Vue实例上 从而避免写重复代码
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'
// import env from './env'

//根据前端苦于方式修改
/**
 * 前端跨域方式：①cors跨域
 * ②jsonp跨域
 *③代理接口跨域
 此处使用接口代理
 */
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
//根环境变量获取不同的请求地址
// axios.defaults.baseURL=env.baseURL;


//错误拦截代码-->接口错误拦截  服务器回复拦截  发送请求拦截
axios.interceptors.response.use(function(response){//接口拦截
   let res=response.data;
   let path=location.hash;
   //数据拦截
   if(res.status==0){
     return res.data;
   }else if(res.status==10){
     if(path!='#/index'){
      window.location.href='/#/login';
     }
    //登录拦截 ————未登录跳转到登录界面—
    /**
     * 路由跳转？绑定在vue实例上 所以无法实现
     * */
    return Promise.reject(res);
   }else{
     Message.error(res.msg);
      return Promise.reject(res);
   }
},(error)=>{//http状态码拦截
  let res=error.response;
  Message.error(res.data.message);
  return Promise.reject(res);

})

Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
