// 入口文件
import Vue from 'vue';

import { Header } from 'mint-ui';
import App from './App.vue';
import router from './router';
import './lib/mui/css/mui.min.css';

Vue.component(Header.name, Header);
const vm = new Vue({
  router,
  render: c => c(App),
}).$mount('#app');
