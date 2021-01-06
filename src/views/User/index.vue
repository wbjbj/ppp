<template>
  <div>
    <button class="el-button" @click="loginOut">退出登录</button>
    <div
      class="Message success"
      :style="Success ? 'display:block' : 'display:none'"
    >
      {{ Message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Message: "",
      Success: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    loginOut() {
      window.sessionStorage.removeItem("login");
      this.$store.commit("loginOut");
      this.SuccessPush("退出成功!");
    },
    SuccessPush(val) {
      this.Success = true;
      this.Message = val;
      setTimeout(() => {
        this.Success = false;
        this.Message = "";
        this.$router.push("/login");
      }, 1500);
    },
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
.el-button {
  background-color: rgba($color: #fcbedf, $alpha: 0.5);
  border: none;
  color: #ccc;
  width: 80%;
  height: 40px;
  border-radius: 40px;
  position: fixed;
  bottom: 200px;
  left: 10%;
}
.Message {
  width: 100%;
  height: 50px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 14px;
}
.success {
  background-color: #46f549;
}
</style>