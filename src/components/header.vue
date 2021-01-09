<template>
  <div>
    <div class="head" v-if="$route.path == '/'">手机号登录</div>
    <div class="head" v-if="$route.path == '/home'">许愿墙</div>
  </div>
</template>

<script>
export default {
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
.head {
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: purple;
}
</style>