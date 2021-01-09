<template>
  <input
    type="text"
    v-model="text"
    placeholder="请输入你的心愿"
    class="inputs"
  />
</template>

<script>
export default {
  props: ["changText"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  updated() {},
  methods: {},
  computed: {
    text: {
      get() {
        return this.changText;
      },
      set(v) {
        this.$emit("chang", v);
      },
    },
  },
};
</script>

<style lang='scss' scoped>
.inputs {
  margin: 10px 0;
}
</style>