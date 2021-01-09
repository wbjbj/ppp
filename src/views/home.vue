<template>
  <div>
    <Header></Header>
    <Inputs @chang="(val) => (text = val)" :changText="text"></Inputs>
    <SelectImg
      :changImg="changImg"
      @chang="(val) => (img = changImg = val)"
    ></SelectImg>
    <div class="buttonBox">
      <button v-if="!text" class="no-set">再想想</button>
      <button v-if="text && !edits" class="set" @click="setMessage">
        许愿
      </button>
      <button v-if="edits" class="set" @click="updateMessage">确认修改</button>
    </div>
    <div class="container">
      <div
        class="target"
        v-tz="index"
        v-for="(item, index) in $store.state.messages"
        :key="index"
        :style="
          'background-image:url(' +
          require('@/' + item.img) +
          ');top:' +
          item.positionY +
          ';left:' +
          item.positionX +
          ''
        "
        @click="edit(index)"
      >
        <button class="delButton" @click="removeMessage(...arguments, index)">
          X
        </button>
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import Inputs from "@/components/inputs";
import SelectImg from "@/components/selectImg";
export default {
  components: {
    Header,
    Inputs,
    SelectImg,
  },
  data() {
    return {
      text: "",
      img: "assets/images/img1.jpg",
      changImg: "assets/images/img1.jpg",
      edits: false,
      ins: -1,
    };
  },
  created() {
    let a = JSON.parse(window.sessionStorage.getItem("message"));
    if (a) {
      this.$store.commit("addMessages", a);
    }
  },
  mounted() {},
  methods: {
    setMessage() {
      if (this.$store.state.messages.length < 6) {
        this.$store.commit("addMessages", {
          text: this.text,
          img: this.img,
          positionX: Math.floor(Math.random() * 200) + "px",
          positionY: Math.floor(Math.random() * 200) + "px",
        });
        console.log(this.img);
        window.sessionStorage.setItem(
          "message",
          JSON.stringify(this.$store.state.messages)
        );
      } else {
        alert("最多添加六条");
      }
      this.text = "";
      this.img = this.changImg = "assets/images/img1.jpg";
    },
    edit(index) {
      this.text = this.$store.state.messages[index].text;
      this.img = this.changImg = this.$store.state.messages[index].img;
      this.ins = index;
      this.edits = true;
    },
    updateMessage() {
      this.$store.commit("updateMessage", {
        index: this.ins,
        message: {
          text: this.text,
          img: this.img,
          positionX: this.$store.state.messages[this.ins].positionX,
          positionY: this.$store.state.messages[this.ins].positionY,
        },
      });
      this.text = "";
      this.img = this.changImg = "assets/images/img1.jpg";
      this.ins = -1;
      this.edits = false;
    },
    removeMessage(e, index) {
      e.stopPropagation();
      this.$store.commit("removeMessage", index);
      window.sessionStorage.setItem(
        "message",
        JSON.stringify(this.$store.state.messages)
      );
    },
    bindPosition(index, X, Y) {
      this.$store.commit("changePosition", {
        index: index,
        positionX: X,
        positionY: Y,
      });
    },
  },
  computed: {},
  directives: {
    tz: function (el, binding, vnode) {
      update: {
        var target = el;
        var startX = 0;
        var startY = 0;
        var positionX = 0;
        var positionY = 0;
        el.addEventListener("touchstart", function (e) {
          startX = e.targetTouches[0].pageX - this.offsetLeft;
          startY = e.targetTouches[0].pageY - this.offsetTop;
        });
        el.addEventListener("touchmove", function (e) {
          var leftX = e.targetTouches[0].pageX - startX;
          var topY = e.targetTouches[0].pageY - startY;
          var thisW = e.targetTouches[0].target.clientWidth;
          var parentW = e.targetTouches[0].target.offsetParent.clientWidth;
          var thisH = e.targetTouches[0].target.clientHeight;
          var parentH = e.targetTouches[0].target.offsetParent.clientHeight;
          var parentTop = e.targetTouches[0].target.offsetParent.offsetTop;
          console.log(parentTop);
          leftX -= 0.5 * thisW;
          topY -= parentTop + 0.5 * thisH;
          if (leftX <= 0) {
            leftX = 0;
          }
          if (leftX >= parentW - thisW) {
            leftX = parentW - thisW;
          }
          if (topY <= 0) {
            topY = 0;
          }
          if (topY >= parentH - thisH) {
            topY = parentH - thisH;
          }
          this.style.left = leftX + "px";
          this.style.top = topY + "px";
          vnode.context.$store.commit("changePosition", {
            index: binding.value,
            positionX: leftX + "px",
            positionY: topY + "px",
          });
          window.sessionStorage.setItem(
            "message",
            JSON.stringify(vnode.context.$store.state.messages)
          );
          //   console.log(vnode.context.$store.state.messages[binding.value]);
        });
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.buttonBox {
  text-align: center;
}
.no-set {
  margin: 0 auto;
  background: #ccc;
  margin-top: 50px;
}
.set {
  margin: 0 auto;
  background: #0f0;
  margin-top: 50px;
}
.container {
  margin: auto;
  height: calc(100vh - 200px);
  overflow: hidden;
  position: relative;
}

.target {
  width: 100px;
  height: 100px;
  background: lightcoral;
  position: absolute;
  background-size: 100%;
}
.delButton {
  position: absolute;
  top: 0;
  right: 0;
}
</style>