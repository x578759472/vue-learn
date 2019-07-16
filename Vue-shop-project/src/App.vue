<template>
  <div class="app-container">
    <mt-header
      fixed
      title="程序员·Vue项目"
    ></mt-header>

    <router-view></router-view>

    <footer>
      <nav class="mui-bar mui-bar-tab">
        <a
          class="mui-tab-item mui-active"
          href="#tabbar"
        >
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a
          class="mui-tab-item"
          href="#tabbar-with-chat"
        >
          <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">会员</span>
        </a>
        <a
          class="mui-tab-item"
          href="#tabbar-with-contact"
        >
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">购物车</span>
        </a>
        <a
          class="mui-tab-item"
          href="#tabbar-with-map"
        >
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">搜索</span>
        </a>
      </nav>
    </footer>
    <h1>我的app</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
}
</style>