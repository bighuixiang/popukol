<template>
	<div class="margin-auto-1200-box">
    <!-- <div class="pt-title">
      投放平台：{{getReleaseObj.platformName}}
    </div> -->
  <div class="send-title">
    "<span>双十一品牌推广活动</span>"投放需求，已选账号
  </div>
  <div class=" w-1120-auto">
    <div class="tabal-box">
            <el-table
              :data="xuqiuInfo.accountList"
              :stripe="true"
              style="width: 100%">
              <el-table-column prop="date" label="账号信息" width="280">
                <template slot-scope="scope">
                  <div class="avatar-img-box">
                    <img class="avatar-img" :src="scope.row.headImg" alt="">
                    <div class="avatar-info">
                      <span class="avatar-info-name">{{ scope.row.name }}</span>
                      <span class="avatar-info-bj">原创</span>
                    </div>
                  </div>
                  
                </template>
              </el-table-column>
              <el-table-column
                prop="fans"
                label="粉丝数"
                width="280">
              </el-table-column>
              <el-table-column
                prop="adTypeDesc"
                width="280"
                label="广告位">
              </el-table-column>
              <el-table-column
                prop="price"
                label="价格">
              </el-table-column>
            </el-table>
    </div>
    <div class="all-info">
      本次推广： 总账号<span class="red-font"> {{xuqiuInfo.accountCount}} 　</span> 总金额<span class="red-font">￥{{xuqiuInfo.amount}}</span>
    </div>
    <div class="qy-form">
      <el-form ref="form" :label-position="'right'"  :rules="rules" :model="form" label-width="114px">
        <el-form-item label="联系方式:" prop="phone">
            <el-input v-model="form.phone" placeholder="请填写您的手机号，以便我们的投放人员与您联系，完成推广计划"></el-input>
        </el-form-item>
      </el-form>
    </div>
    
    <div class="from-bottom">
        <el-button type="primary" @click="submitForm('form')">确认提交</el-button>
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
      language: "",
      busCategoryList: "",
      imageUrl: "",
      xuqiuInfo: "",
      form: {
        popKey: "",
        phone: ""
      },
      rules: {
        phone: [
          {
            required: true,
            min: 1,
            message: "请填写完整",
            trigger: ["blur", "change"]
          }
        ]
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  beforeCreate() {
    //创建虚拟dom前
  },
  created() {
    //创建虚拟dom后
    var self = this;
    self.increment({ val: "2", type: 2 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
    self.increment({ val: "2", type: 3 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
  },
  beforeMount() {
    //页面加载前
    this.setReleaseObj({
      index: 3
    });
  },
  mounted() {
    let self = this;
    self.SLS();
    self.language = self.getLanguage();
    document.onkeydown = e => {
      if (e.keyCode == 13 && self.submitForm) {
        document.body.focus();
        self.submitForm("form");
      }
    };
    self.form.popKey = self.$route.query.popKey;
    self.getXuqiuInfo();
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
    submitForm(formName) {
      //提交按钮
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sendPhone();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getXuqiuInfo() {
      var self = this;
      this.$http
        .get(self.API.xuqiuAllInfo, {
          params: {
            popKey: self.form.popKey
          }
        })
        .then(response => {
          if (response.data.status == 0) {
            self.xuqiuInfo = response.data.data;
          } else {
            self.$message({
              type: "error",
              message: response.data.msg
            });
          }
        });
    },
    sendPhone() {
      var self = this;
      this.$http.post(self.API.xuqiuSend,
        this.form
      ).then(response => {
        if (response.data.status == 0) {
          this.goToUrl('/WeChatxhtg')
        } else {
          self.$message({
            type: "error",
            message: response.data.msg
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.avatar-img-box {
  overflow: hidden;
  text-align: left;
}
.from-bottom {
  margin:0 auto;
  width: 140px;
  display: block;
  button {
    width: 140px;
    height: 42px;
  margin-bottom: 46px;
  }
}
.avatar-img {
  width: 44px;
  height: 44px;
  margin-left: 48px;
  border-radius: 50%;
  float: left;
}
.avatar-info {
  margin-left: 10px;
  overflow: hidden;
  float: left;
  .avatar-info-name {
    font-size: 14px;
    line-height: 16px;
    color: #333;
    width: 102px;
    overflow: hidden;
    font-weight: bold;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .avatar-info-bj {
    font-size: 14px;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-top: 6px;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 4px 8px;
    background: #dd2025;
  }
}
.all-info {
  font-size: 16px;
  color: #666;
  display: block;
  text-align: right;
  padding: 20px 0px 30px;
  .red-font {
    color: #dd2525;
  }
}
.tabal-box {
  .el-table__header-wrapper {
  }
  .el-table__header {
    .cell {
      text-align: center;
      color: #666666;
    }
  }
  .el-table th {
    background: #e8e8e8 !important;
  }
  .el-table__row {
    height: 100px;
    color: #666666;
    td {
      text-align: center;
    }
  }
}
.qy-form {
  width: 600px;
  margin-left: 220px;
  .position-ab {
    position: absolute;
    opacity: 0;
  }
  .cant-see {
    display: none;
  }
  .width-150 {
    width: 215px;
  }
  .uploadText {
    width: 400px;
    height: 14px;
    font-family: HiraginoSansGB-W3;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 1px;
    text-align: left;
    color: #cccccc;
    position: absolute;
    top: 60px;
    left: 180px;
  }
  .el-form-item.is-required .el-form-item__label:before {
    display: none;
  }
  .el-form-item__label {
    font-size: 16px;
    color: #666;
  }
  .el-form-item__error {
    background: red;
    color: #fff;
    top: 4px;
    padding: 10px 20px;
    left: 515px;
    white-space: nowrap;
    border-radius: 4px;
  }
  .el-form-item__error:after {
    content: "";
    display: block;
    position: absolute;
    height: 0px;
    width: 0px;
    top: 8px;
    left: -8px;
    border-top: 8px solid transparent;
    border-right: 16px solid red;
    border-bottom: 8px solid transparent;
  }
  .el-button--primary {
    display: block;
    width: 360px;
    margin: 35px auto;
  }
}
.w-1120-auto {
  width: 1120px;
  margin: 0 auto;
  .tabal-box {
    border: 1px solid #e8e8e8;
  }
}
</style>

<style lang="scss" scoped>
.send-title {
  font-size: 16px;
  text-align: left;
  color: #666666;
  padding-left: 40px;
  margin: 40px 0px 20px;
  span {
    color: #dd2525;
  }
}
.margin-auto-1200-box {
  width: 1200px;
  margin: 20px auto;
  background: #fff;
  margin-bottom:60px;
}
</style>