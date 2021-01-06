<template>
  <div>
    <div class="showEveryDay">{{ EveryDays }}</div>
    
  </div>
</template>
<script>
import EveryDayAll from "../../assets/EveryDayArticol";
export default {
  data() {
    return {
      EveryDays: "",
    };
  },
  created() {
    this.EveryDays = EveryDayAll[this.getRandom()];
  },
  mounted() {},
  methods: {
    getRandom() {
      return Math.floor(Math.random() * EveryDayAll.length) - 1;
    },
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
.showEveryDay {
  width: 95%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 40px;
  background-color: rgba($color: #662233, $alpha: 0.5);
  margin: 20px auto;
  color: rgba($color: #abcdef, $alpha: 0.8);
  font-size: 17px;
  font-weight: bolder;
}
</style>