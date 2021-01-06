<template>
  <div>
    <div class="timeBox">
      <div class="longer timeBox-item">
        <h3>在一起</h3>
        <div class="times">
          {{
            times.dayDiff +
            "天 " +
            times.hours +
            "小时 " +
            times.minutes +
            " 分钟" +
            times.seconds +
            " 秒"
          }}
        </div>
      </div>
      <div class="start timeBox-item">
        <h3>相遇在</h3>
        <div class="times">2020年08月13日 23时10分21秒</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: "2020/08/13 23:10:21",
      times: {
        dayDiff: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  created() {},
  mounted() {
    setInterval(() => {
      this.timeFn();
    }, 500);
  },
  methods: {
    timeFn(d1 = this.start) {
      let dateEnd = new Date();
      let dateBegin = new Date(d1);
      let dateDiff = dateEnd.getTime() - dateBegin.getTime();
      this.times.dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
      let leave1 = dateDiff % (24 * 3600 * 1000);
      this.times.hours = Math.floor(leave1 / (3600 * 1000));
      let leave2 = leave1 % (3600 * 1000);
      this.times.minutes = Math.floor(leave2 / (60 * 1000));
      let leave3 = leave2 % (60 * 1000);
      this.times.seconds = Math.round(leave3 / 1000);
    },
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
.timeBox {
  width: 100%;
  background-color: rgba($color: #ccc, $alpha: 0.5);
  padding: 10px;
  border-radius: 30px;
  box-sizing: border-box;
  margin-top: 10px;
  .timeBox-item {
    width: 100%;
    height: 130px;
    position: relative;
    border: 1px solid #ddd;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 20px;
    h3 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      color: #fff;
      font-size: 20px;
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .times {
      background-color: rgba($color: #aa5555, $alpha: 0.5);
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      color: #ffff99;
      position: absolute;
      bottom: 20px;
      left: 0;
    }
  }
}
</style>