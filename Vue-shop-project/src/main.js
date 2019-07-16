// 入口文件
import Vue from 'vue';

import { Header, Swipe, SwipeItem } from 'mint-ui';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
const vm = new Vue({
  router,
  render: c => c(App),
}).$mount('#app');
