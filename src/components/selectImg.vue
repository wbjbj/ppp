<template>
  <div class="imgsBox">
    <div
      class="imgsBox-item"
      v-for="(item, index) in imgsList"
      :key="index"
      :class="index == imgsList.indexOf(changImg) ? 'active' : ''"
      @click="changImgs(item)"
    >
      <img :src="require('@/' + item)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["changImg"],
  data() {
    return {
      imgsList: [
        "assets/images/img1.jpg",
        "assets/images/img2.jpg",
        "assets/images/img3.jpg",
        "assets/images/img4.jpg",
        "assets/images/img5.jpg",
      ],
    };
  },
  created() {},
  mounted() {},
  updated() {},
  methods: {
    changImgs(item) {
      this.$emit("chang", item);
    },
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
.imgsBox {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  .imgsBox-item {
    width: 50px;
    height: 50px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .active {
    border: 5px solid #000;
  }
}
</style>