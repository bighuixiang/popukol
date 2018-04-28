<template>
<div class="content">
  <div class="margin-auto-1200-box">
    <div class="create-title">
      创建投放需求
    </div>
    <div class="create-step">
        <el-steps :active="2" :align-center="true" :space="200">
          <el-step title="选择投放平台"></el-step>
          <el-step title="天谢谢活动内容"></el-step>
          <el-step title="选择账号"></el-step>
          <el-step title="提交活动"></el-step>
        </el-steps>
    </div>
  </div>
  
</div>

    
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data(){
      return{

      }
  },
  mounted() {
    let self = this;
    self.SLS();
    self.language = self.getLanguage();
    // self.rules.email[0].message = self.language.rightEmail;
    // self.rules.email[1].message = self.language.rightEmail1;
    // self.rules.pwd[1].message = self.language.rightEmail1;
    // self.bgImage = self.API.captchaApi;
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
    submitForm(formName) {
      //提交按钮
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     this.postFromFn();
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goToUrl(url) {
      let self = this;
      self.$router.push({
        path: url
      });
    },
    postFromFn() {
      let self = this;
      self.$http
        .post(self.API.loginApi, {
          ...self.form
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.code == 0) {
              self.$message({
                type: "success",
                message: self.language.rightLogin
              });
              self.setloginflag(true);
              setTimeout(() => {
                self.goToUrl("/home");
              }, 1000);
            } else {
              self.$message({
                type: "error",
                message: response.data.msg
              });
            }
          },
          response => {}
        );
    }
  }
};
</script>
<style lang="scss">
.create-step{
  .el-steps{
    width:800px;
    margin:0 auto;
  }
  .el-step__title.is-process,.el-step__title.is-wait{
    color: #dddddd;
  }
  .el-step__head.is-finish{
    background-color: rgba(0,0,0,0) !important;
    border-color: rgba(0,0,0,0) !important;
  }
  .el-step__icon.is-text{
    border: 0px;
  }
  .is-finish .el-step__icon{
    background: #dd2525;
  }
  .el-step.is-horizontal .el-step__line{
    top: 19px;
    background-color: #ddd;
  }
  .el-step__icon{
    width: 40px;
    height: 40px;
    background: #ddd;
  }
  .el-step__icon-inner{
    color: #fff;
  }
  .is-finish .el-step__line-inner{
    border-color: #dd2525;
  }
  .el-step__title.is-finish{
    color: #333333 !important;
    font-weight:bold;
  }
  .el-step__title{
    line-height: 56px;
  }
}
</style>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  position: relative;
}

.margin-auto-1200-box {
  width: 1200px;
  margin: 0 auto;
  background:#fff;
}

.create-title{
  font-size:21px;
  line-height:1;
  padding-left:39px;
  font-weight:bold;
  margin:30px 0px;
}
.create-title::before{
  content:"";
  display:inline-block;
  position: relative;
  top:2px;
  width:4px;
  height: 21px;
  background:#dd2525;
}
</style>

