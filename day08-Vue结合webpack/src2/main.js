// 如何在webpack构建的项目中 , 使用 Vue 进行开发
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'font-awesome/scss/font-awesome.scss';
// import MintUI from 'mint-ui';
import { Button, Cell, Switch } from 'mint-ui';
import app from './App.vue';
import './css/app.scss';
import router from './router';

import 'mint-ui/lib/style.css';

Vue.use(VueRouter);
// Vue.use(MintUI);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Switch.name, Switch);
const vm = new Vue({
  router,
  render: c => c(app),
}).$mount('#app');
