// 如何在webpack构建的项目中 , 使用 Vue 进行开发
import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './App.vue';

import router from './router';

Vue.use(VueRouter);

const vm = new Vue({
  router,
  render: c => c(app),
}).$mount('#app');
