<template>
  <div id="box">
    <div class="login-title">
      <img src="../../assets/login/loginTitle.png" />
    </div>
    <form onsubmit="return false">
      <div class="form-item">
        <label for="username">用户名</label>
        <input
          type="text"
          name="username"
          v-model="form.userName"
          placeholder="请输入用户名"
        />
      </div>
      <div class="form-item">
        <label for="password">密码</label>
        <input
          type="password"
          name="password"
          v-model="form.password"
          placeholder="请输入密码"
        />
      </div>
      <div class="form-item">
        <button class="el-button" @click="login">登录</button>
      </div>
    </form>
    <div
      class="Message error"
      :style="Error ? 'display:block' : 'display:none'"
    >
      {{ Message }}
    </div>
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
      form: {
        userName: "",
        password: "",
      },
      Message: "",
      Error: false,
      Success: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    login() {
      if (this.form.userName == "") return this.ErrorPush("用户名不能为空！");
      if (this.form.password == "") return this.ErrorPush("密码不能为空!");
      if (
        this.form.userName != "03130113" ||
        this.form.password != "2267781425"
      )
        return this.ErrorPush("账号或密码错误!");
      this.SuccessPush("登陆成功!");
      window.sessionStorage.setItem("login", true);
      this.$store.commit("loginOn");
    },
    ErrorPush(val) {
      this.Error = true;
      this.Message = val;
      setTimeout(() => {
        this.Error = false;
        this.Message = "";
      }, 2000);
    },
    SuccessPush(val) {
      this.Success = true;
      this.Message = val;
      setTimeout(() => {
        this.Success = false;
        this.Message = "";
        this.$router.push("/");
      }, 1500);
    },
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
#box {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  background: rgba($color: #999, $alpha: 0.8);
  background-image: url("../../assets/login/loginBackImg.jpg");
  background-size: auto;
  .login-title {
    width: 200px;
    height: 80px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -101px;
  }
  form {
    width: 100%;
    height: 170px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -100px;
    background: rgba($color: #ccc, $alpha: 0.8);
    .form-item {
      width: 100%;
      height: 40px;
      margin: 10px 0;
      line-height: 40px;
      text-align: center;
      label {
        color: #4c5c4c;
        display: inline-block;
        padding-right: 20px;
      }
      input {
        height: 35px;
        width: 200px;
        border: 1px solid #444;
        border-radius: 17.5px;
        padding: 0 10px;
      }
      .el-button {
        background-color: rgba($color: #404c45, $alpha: 0.5);
        border: none;
        color: #ccc;
        width: 80%;
        height: 40px;
        border-radius: 40px;
      }
    }
  }
  .Message {
    width: 100%;
    height: 50px;
    background-color: #f54649;
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
  }
  .error {
    background-color: #f54649;
  }
  .success {
    background-color: #46f549;
  }
}
</style>