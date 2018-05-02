<template>
  <div class="content messgeList">
      <div class="margin-auto-1200-box">
         <span class="xiaoxi-head">消息</span>
        <div class="xiaoxi-list">
            <ul>
                <li>
                  <img src="../../../static/icon/meitirenzhen/tblt.png" alt="">
                  <div class="xx-content">
                    <p class="xx-title">
                      <span class="xx-title-content">平台最新公告</span>
                      <span class="xx-title-time">2018-03-03 11：06:47</span>
                    </p>
                    <p class="xx-miaos">
                      <span>POPOKOL:做一个主播最需要的特质</span>
                    </p>
                  </div>
                  <span class="right-jt el-icon-arrow-right">
                  </span>
                </li>
                <li>
                  <img src="../../../static/icon/cebianlan/kefu.png" alt="">
                  <p class="xx-title">
                    <span>平台最新公告</span>
                    <span>2018-03-03 11：06:47</span>
                  </p>
                  <p class="xx-miaos">
                    <span>POPOKOL:做一个主播最需要的特质</span>
                  </p>
                  <span class="right-jt el-icon-arrow-right">
                  </span>
                </li>
            </ul>
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
  created() {
    //创建虚拟dom后
    var self = this;
    self.increment({ val: "2", type: 2 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
    self.increment({ val: "3", type: 3 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
  },
  mounted() {},
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      "getLoginFlag",
      "getNavList",
      "getUserInfo"
      // ...
    ])
  },
  methods: {
    ...mapActions([
      "increment", // 映射 this.increment() 为 this.$store.dispatch('increment')
      "decrement",
      "setloginflag",
      "setuserinfo"
    ])
  }
};
</script>

<style lang="scss" scoped>
.messgeList {
  .xiaoxi-head {
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0px;
    display:block;
  }
  .xiaoxi-list {
    margin-bottom: 90px;
    ul li {
      width: 1200px;
      height: 70px;
      mix-blend-mode: undefined;
      border-radius: 4px;
      background-color: #fff;
      margin-bottom: 10px;
      img {
        width: 40px;
        height: 40px;
        margin-left: 20px;
        margin-top: 15px;
        float: left;
      }
      .xx-content {
        float: left;
        margin-left: 20px;
        margin-top: 15px;
        .xx-title {
          .xx-title-content {
            font-size: 14px;
            color: #666;
          }
          .xx-title-time {
            font-size: 12px;
            color: #999;
          }
        }
        .xx-miaos {
          font-size: 14px;
          color: #999;
        }
      }
    }
    ul li:hover{
      border: solid 1px #bbbbbb;
      cursor: pointer;
    }
    .right-jt{
      font-size: 14px;
      color: #999;
      font-weight: bold;
      float: right;
      margin-right: 20px;
      margin-top: 30px;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .margin-auto-1200-box {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>

