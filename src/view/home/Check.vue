<template>
<div class="content">
    <div class="qudao-box">
      <div class="qudao-items">
        <div class="qudao-item" @click="checkThis('微信')">
            <img src="../../../static/icon/meitirenzhen/weatch.png" alt="">
            <span>微信</span>
        </div>
        <div class="qudao-item" @click="checkThis('微博')">
            <img src="../../../static/icon/meitirenzhen/sinawb.png" alt="">
            <span>微博</span>
        </div>
        <div class="qudao-item" @click="checkThis('小红书')">
            <img src="../../../static/icon/meitirenzhen/xhs.png" alt="">
            <span>小红书</span>
        </div>
        <div class="qudao-item" @click="checkThis('淘宝/京东达人')">
            <img src="../../../static/icon/meitirenzhen/tbdr.png" alt="">
            <span>淘宝/京东达人</span>
        </div>
        <div class="qudao-item" @click="checkThis('直播/短视频')">
            <img src="../../../static/icon/meitirenzhen/zhiboduanshiping.png" alt="">
            <span>直播/短视频</span>
        </div>
        <div class="qudao-item" @click="checkThis('头条/知乎/豆瓣')">
            <img src="../../../static/icon/meitirenzhen/tt.png" alt="">
            <span>头条/知乎/豆瓣</span>
        </div>
        <div class="qudao-item" @click="checkThis('Facebook/Twitter')">
            <img src="../../../static/icon/meitirenzhen/Facebook.png" alt="">
            <span>Facebook/Twitter</span>
        </div>
        <div class="qudao-item" @click="checkThis('贴吧/论坛')">
            <img src="../../../static/icon/meitirenzhen/tblt.png" alt="">
            <span>贴吧/论坛</span>
        </div>
      </div>
    </div>
</div>

    
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    let self = this;
    self.SLS();
    self.setReleaseObj({
      index: 1,
      platformName: "",
      contentForm: {},
      items: []
    });
    self.increment({ val: "2", type: 2 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
    self.increment({ val: "2", type: 3 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      "getLoginFlag",
      "getNavList",
      "getUserInfo",
      "getReleaseObj"
      // ...
    ])
  },
  methods: {
    ...mapActions([
      "increment", // 映射 this.increment() 为 this.$store.dispatch('increment')
      "decrement",
      "setloginflag",
      "setuserinfo",
      "setReleaseObj"
    ]),
    goToUrl(url) {
      let self = this;
      self.$router.push({
        path: url
      });
    },
    checkThis(name) {
      let self = this;
      self.setReleaseObj({
        index: 2,
        platformName: name,
        contentForm: {},
        items: []
      });
      self.goToUrl('/activities')
    }
  }
};
</script>
<style lang="scss" scoped>
.qudao-box {
  width: 800px;
  padding: 17px 0px;
  height: 256px;
  border-radius: 4px;
  margin: 50px auto;
  background-color: #f5f5f5;
}
.qudao-items {
  width: 570px;
  margin: 0 auto;
}
.qudao-item {
  width: 90px;
  height: 90px;
  margin: 10px;
  display: inline-block;
  border-radius: 2px;
  padding-top: 15px;
}
.qudao-item:hover {
  cursor: pointer;
  background: #e8e8e8;
}
.qudao-item img {
  width: 44px;
  height: 44px;
  display: block;
  margin: 0 auto 5px;
  position: relative;
}
.qudao-item span {
  width: 100%;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>

</style>

