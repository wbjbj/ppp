<template>
  <ul class="menu">
    <li class="menu-item" @click="choicNav">首页</li>
    <li class="menu-item" @click="choicNav">相册</li>
    <li class="menu-item" @click="choicNav">sweet</li>
    <li class="menu-item" @click="choicNav">我的</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navList: ["/home", "/photo", "/sweet", "/user"],
    };
  },
  created() {},
  mounted() {
    let p = this.$route.path == "/Photo/main" ? "/photo" : this.$route.path;
    window.document
      .getElementsByClassName("menu")[0]
      .children[this.navList.indexOf(p)].classList.add("active");
  },
  methods: {
    //点击选中切换样式
    choicNav(el) {
      el.currentTarget.classList.add("active");
      let num = this.getSiblings(el.currentTarget);
      if (this.navList[num] == this.$route.path) return true;
      this.$router.push(this.navList[num]);
    },
    //获取元素除自身外所有兄弟节点并删除active类名
    //获取当前元素下标
    getSiblings(el) {
      let num = 0;
      var elseLi = el.parentNode.children;
      for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
        if (elseLi[i] !== el) {
          //判断是否是ele节点，是否与触发事件的节点相同
          elseLi[i].classList.remove("active");
        } else {
          num = i;
        }
      }
      return num;
    },
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
.menu {
  width: 100%;
  height: 50px;
  background-color: rgba($color: #f6f4f5, $alpha: 0.5);
  display: flex;
  .menu-item {
    height: 50px;
    display: inline-block;
    flex: 1;
    box-sizing: border-box;
  }
  .active {
    background-color: rgba($color: #e99, $alpha: 1);
    border-bottom: rgba($color: #c77, $alpha: 0.8) solid 2px;
  }
}
</style>