<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="bottomVideoList clearfix">
      <ul class="listContent clearfix">
        <li v-for="(item, index) in Imgs" :key="index">
          <div class="imgBox">
            <div class="ImgMain">
              <img class="Imgs" :src="item.url" />
            </div>
            <div class="ImgTitle">{{ item.title }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ImgUrl from "../../assets/imggesUrl";
import ImgUrlRule from "../../assets/imgUrlRules";
export default {
  data() {
    return {
      Imgs: [],
      title: "",
    };
  },
  created() {
    let index = ImgUrlRule[this.$route.query.index];
    // this.title = index.imgsTitle;
    ImgUrl[index.id].map((item, i) => {
      this.Imgs.push({
        title: item.title,
        url: require("@/" + index.BaceUrl + item.url),
      });
    });
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style lang='scss' scoped>
.listContent {
  column-count: 2;
  column-gap: 1px;
}
.listContent li {
  display: inline-block;
  margin: 10px 0;
}
#videoList .listContent li {
  padding-bottom: 0.06666667rem;
  margin: 0;
}
.imgBox {
  background-color: rgba($color: #f4c6c9, $alpha: 0.8);
  overflow: hidden;
  border-radius: 20px;
  width: 95%;
  display: block;
  flex-wrap: wrap;
  .ImgMain {
    .Imgs {
      width: 100%;
    }
  }
  .ImgTitle {
    width: 100%;
    height: 20px;
    color: rgba($color: #03130113, $alpha: 0.8);
    font-weight: bolder;
    font-size: 15px;
  }
}
</style>