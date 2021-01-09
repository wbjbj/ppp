<template>
  <div class="phonepass">
    <button type="button" @click="getPass" v-if="!getting">发送验证码</button>
    <button type="button" v-if="getting">({{ times }})发送验证码</button>
  </div>
</template>

<script>
export default {
  props: ["phone"],
  data() {
    return {
      getting: false,
      times: 60,
    };
  },
  created() {},
  mounted() {},
  methods: {
    getPass() {
      if (this.phone == "") {
        return console.log("手机号不能为空!");
      }
      if (this.phone.length > 13 || this.phone.length < 10) {
        return console.log("请输入正确的手机号!");
      }
      this.$emit("setPhonePass", true);
      this.gettingPass();
    },
    gettingPass() {
      this.getting = true;
      this.times = 60;
      let timeInt = setInterval(() => {
        this.times--;
        if (this.times <= 0) {
          this.$emit("setPhonePass", false);
          this.getting = false;
          timeInt = null;
        }
      }, 1000);
    },
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
.phonepass {
  display: inline-block;
  margin-left: 10px;
}
</style>