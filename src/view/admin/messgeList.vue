<template>
  <div class="content">
      <div class="margin-auto-1200-box">
         <span class="xiaoxi-head">消息</span>
        <div class="xiaoxi-list">
            <ul>
                <li>

                </li>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {},
  created() {
    //创建虚拟dom后
    var self = this;
    self.increment({ val: "2", type: 2 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
    self.increment({ val: "3", type: 3 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
  },
  mounted(){

  },
  methods(){

  }
};
</script>

<style lang="scss" scoped>
.xiaoxi-head {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0px;
}
.xiaoxi-list {
  margin-bottom: 90px;
  ul li {
    width: 1200px;
    height: 70px;
    mix-blend-mode: undefined;
    border-radius: 4px;
    background-color: #bbbbbb;
    border: solid 1px #bbbbbb;
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
</style>

