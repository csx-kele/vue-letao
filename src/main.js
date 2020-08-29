import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
//引入全局的过滤器
import "@/util/filter.js";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


import { Lazyload } from 'vant';

Vue.use(Lazyload);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
