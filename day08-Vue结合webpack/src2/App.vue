<template>
  <div>
    <h1>这是App组件</h1>
    <mt-cell title="开关">
      <mt-switch size="small"></mt-switch>
    </mt-cell>
    <mt-button
      size="large"
      type="default"
      @click="show"
    >default</mt-button>
    <mt-button
      disabled
      size="small"
      type="primary"
    >default</mt-button>
    <mt-button
      icon="more"
      size="normal"
      type="danger"
    >default</mt-button>
    <mt-button plain>幽灵按钮</mt-button>
    <router-link to="/account">account</router-link>
    <router-link to="/goodslist">GoodsList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      toastinstance: null
    };
  },
  methods: {
    getList() {
      this.show();
      setTimeout(() => {
        this.toastinstance.close();
      }, 3000);
    },
    show() {
      this.toastinstance = Toast({
        message: "正在加载数据",
        position: "top",
        duration: -1,
        iconClass: "fa fa-apple",
        className: "mytoast"
      });
    }
  },
  created: function() {
    this.getList();
  }
};
</script>

<style lang="scss" scoped>
</style>


