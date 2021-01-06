<template>
  <div class="container">
    <div class="header">
      <TopNav></TopNav>
    </div>
    <div
      class="main"
      :style="
        'background: url(' +
        ($route.path == '/home'
          ? require('../../assets/backs/mainBackHome.jpg')
          : $route.path == '/photo' || $route.path == '/Photo/main'
          ? require('../../assets/backs/mainBackPhoto.jpg')
          : $route.path == '/sweet'
          ? require('../../assets/backs/mainBackSweet.jpg')
          : require('../../assets/backs/mainBackUser.jpg')) +
        ')'
      "
    >
      <div class="box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../Other/TopNav";
export default {
  components: { TopNav },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style lang='scss' scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #ccc;
  background-image: url("../../assets/backs/mainBackSweet.jpg");
  .header {
    width: 100%;
    height: 50px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    line-height: 50px;
  }
  .main {
    width: 100%;
    text-align: center;
    padding: 50px 0 10px 0;
    box-sizing: border-box;
    height: 100%;
    background-position-x: center;
    .box {
      max-height: 100%;
      overflow: auto;
    }
  }
}
</style>