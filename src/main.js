/*
 * @Author: your name
 * @Date: 2020-12-08 10:05:40
 * @LastEditTime: 2020-12-11 16:02:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/reset.css'
import router from "./router"
import store from './store'
Vue.use(ElementUI)

Vue.use(less);

// Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
