<template>
  <div class="content messgeList">
      <div class="margin-auto-1200-box">
         <span class="xiaoxi-head">消息</span>
        <div class="xiaoxi-list">
            <ul>
                <li v-for="item in messageList" @click='openlist(item.id,item)'>
                  <img :src="item.viewStatus==0?'./../../static/icon/wangzhan/unread.png':'./../../static/icon/wangzhan/read.png'" alt="">
                  <div class="xx-content">
                    <p class="xx-title">
                      <span class="xx-title-content">{{item.title}}</span>
                    </p>
                    <p class="xx-miaos">
                      <span>{{item.sendTime}}</span>
                    </p>
                  </div>
                  <span class="right-jt el-icon-arrow-right">
                  </span>
                </li>
            </ul>
        </div>

<div class="pagination">
			<el-pagination class="xx-fanye" @current-change="handleCurrentChange" background layout="total, prev, pager, next, jumper" :total="count">
			</el-pagination>
		</div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      messageList: "",
      count: 1
    };
  },
  created() {
    //创建虚拟dom后
    var self = this;
    self.increment({ val: "2", type: 2 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
    self.increment({ val: "3", type: 3 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
  },
  mounted() {
    this.getmessageList(1);
  },
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
    ]),
    handleCurrentChange(val) {
      this.getmessageList(val);
    },
    getmessageList(pageNum) {
      this.$http
        .get(this.API.messageList, {
          params: {
            page: pageNum,
            limit: 10
          }
        })
        .then(response => {
          if (response.data.status == 0) {
            this.messageList = response.data.data;
            this.count = response.data.count;
          }
        });
    },
    openlist(id, item) {
      item.viewStatus = 1;
      this.$http.get(this.API.messageInfo + id + "/info").then(response => {
        if (response.data.status == 0) {
          this.messageItem = response.data.data;
          this.$alert(
            `<p class="tck-xx"><span class="xx-tc"><span class="red-xx">消息 </span><span class="xx-jt3"> >> </span> ${
              this.messageItem.title
            }</span>${this.messageItem.content}</p>`,
            "　",
            {
              dangerouslyUseHTMLString: true,
              closeOnClickModal: true,
              closeOnPressEscape: true,
              customClass: "xx-tx-box",
              showConfirmButton: false
            }
          );
          this.checkmessageNum();
        }
      });
    },
    checkmessageNum() {
      var self =this;
      this.$http.get(this.API.newMessageListAPI).then(response => {
        if (response.data.status == 0) {
          if(response.data.data=0){
            self.increment({
              val: false,
              type: 5
            }) //设置消息是否显示红点
              }
        }
      });
    }
  }
};
</script>
<style lang="scss" >
.xx-tx-box {
  width: 580px !important;
  .el-message-box__header {
    padding: 20px 10px 20px;
  }
  .el-message-box__content {
    padding: 20px;
  }
  .el-message-box__message {
    background: #fafafa;
    padding: 20px;
  }
  .el-message-box__headerbtn {
    top: 24px;
  }
  .el-message-box__header::after {
    content: "";
    width: 100%;
    height: 1px;
    left: 0px;
    bottom: 0px;
    background: #e8e8e8;
    position: absolute;
  }
}
.tck-xx {
  max-height: 360px;
  overflow-y: auto;
}
.xx-tc {
  font-size: 18px;
  font-weight: bold;
  color: #666;
  position: absolute;
  top: -36px;
  left: 26px;
}
.red-xx {
  color: #dd2025;
}
.xx-jt3 {
  display: inline-block;
  position: relative;
  top: -1px;
}
</style>

<style lang="scss" scoped>
.messgeList {
  .xx-fanye {
    margin-bottom: 90px;
    float: right;
  }
  .xiaoxi-head {
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0px;
    display: block;
  }
  .xiaoxi-list {
    margin-bottom: 30px;
    ul li {
      width: 1200px;
      height: 70px;
      mix-blend-mode: undefined;
      border-radius: 4px;
      background-color: #fff;
      border: solid 1px #fff;
      transition: all 0.2s;
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
        }
        .xx-miaos {
          font-size: 14px;
          color: #999;
        }
      }
    }
    ul li:hover {
      border: solid 1px #bbbbbb;
      cursor: pointer;
    }
    .right-jt {
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

