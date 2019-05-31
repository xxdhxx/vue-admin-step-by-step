// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入 element-ui
import ElementUI from 'element-ui'
//el样式
import 'element-ui/lib/theme-chalk/index.css'
//引入字体图标
import "./assets/iconfont/iconfont.css"
//公共样式
import "./assets/css/public.css"
// 引入echarts
import echarts from 'echarts'
// 导入axios
import axios from 'axios'
import Qs from 'qs'
// 把echarts对象绑定到Vue原型中全局使用
Vue.prototype.$echarts = echarts
// 把axios对象绑定到Vue原型中全局使用
Vue.prototype.axios = axios
//封装全局header处理
Vue.prototype.post = function (url, data) {
  axios({
    headers: {
      'Content-Type': 'application/json',
      'X-Token': localStorage.getItem('myToken')
    },
    method: 'post',
    url: 'https://weimishanghao.com/a/rest',
    data: Qs.stringify(data)
  }).then(function (response) {
    /*console.log(response);*/
    console.log(response);
    alert(JSON.stringify(response));
    this.value = response.data;
  }.bind(this)).catch(function (error) {
    console.log(error);
  });
}
// 把ElementUI对象绑定到Vue原型中全局使用
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
