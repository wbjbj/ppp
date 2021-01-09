<template>
  <div>
    <Header></Header>
    <form>
      <label for="phone">手机号:</label>
      <input type="text" v-model="phone" name="phone" /> <br />
      <label for="pass">验证码:</label>
      <input type="password" v-model="pass" name="pass" />
      <PhonePass
        :phone="phone"
        @setPhonePass="(val) => (logins = val)"
      ></PhonePass
      ><br />
      <button
        class="login"
        @click="login"
        type="button"
        :style="'background:' + (logins ? '#0f0' : '#ccc')"
      >
        登录
      </button>
    </form>
  </div>
</template>

<script>
import Header from "@/components/header";
import PhonePass from "@/components/phonepass";
export default {
  components: {
    Header,
    PhonePass,
  },
  data() {
    return {
      phone: "",
      pass: "",
      logins: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    login() {
      if (this.phone == "" || !this.logins || this.pass != "1234") {
        return console.log("登录失败!");
      }
      this.$router.push("/home");
    },
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
form {
  width: 350px;
  height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -175px;
}
</style>