<template>
	<div class="content">
		<div class="login-head-box">
			<div class="margin-auto-1200-box">
				<img class="login-logo" @click="goToUrl('/home')" src="../../../static/icon/topandbottomlogo/toplogo.png" alt="">
				<div class="login-bar">
					<el-breadcrumb separator="|">
						<el-breadcrumb-item><span class="text-btn text-btn-12">登录广告主账号，查看更多专属报价</span></el-breadcrumb-item>
					</el-breadcrumb>
				</div>
        <!-- <span class="login-page-tag"></span> -->
			</div>
		</div>

		<div class="margin-auto-1200-box login-from">
			<div class="page-title">
				<div class="margin-auto-1200-box login-from">
					<div class="page-title">
						广告主登录
					</div>
					<el-row :gutter="24">
						<el-col :span="9" :offset="7">
							<el-form ref="form" :rules="rules" :model="form" label-width="80px">
								<el-form-item label="邮箱账号" prop="email">
									<el-input v-model="form.email" placeholder="请输入您的邮箱账号"></el-input>
								</el-form-item>
								<el-form-item label="登录密码" prop="pwd">
									<el-input type="password" v-model="form.pwd" placeholder="请输入密码"></el-input>
								</el-form-item>
								<el-form-item label="验证码" prop="code">
									<el-input v-model="form.code" placeholder="请输入验证码" ref="code" class="send-code-input"></el-input>
									<el-button type="primary" v-bind:style="{ 'background-image': 'url(' + bgImage + ')'}" class="send-code-btn-login" @click="sendImageCode()"></el-button>
								</el-form-item>
								<div class="from-bottom">
									<el-button type="primary" @click="submitForm('form')">确定</el-button>
								</div>
							</el-form>
						</el-col>
					</el-row>
					<div class="bottom-text" @click="goToUrl('/signUp')">
						还没有账号,<i>去注册</i>
					</div>
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
    return {
      isShowI18n: false,
      keywords: "", //搜索关键字
      form: {
        email: "",
        pwd: "",
        code: ""
      },
      bgImage: "",
      language:{},
      rules: {
        email: [
          {
            required: true,
            message: "请输入正确的邮箱地址",
            trigger: "blur"
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        code: [
          {
            required: true,
            validator: this.emailIsTrue,
            trigger: ["blur"]
          }
        ],
        pwd: [
          {
            required: true,
            validator: this.validatePass,
            trigger: ["blur"]
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  mounted() {
    let self = this;
    self.SLS();
    self.language = self.getLanguage();
    self.rules.email[0].message = self.language.rightEmail;
    self.rules.email[1].message = self.language.rightEmail1;
    self.rules.pwd[1].message = self.language.rightEmail1;
    self.bgImage = self.API.captchaApi;
    document.onkeydown = (e)=>{
      if(e.keyCode == 13 && self.submitForm){
        document.body.focus();
         self.submitForm('form');
      }
    }
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
    sendImageCode() {
      let self = this;
      self.bgImage = self.API.captchaApi + "?index=" + Math.random();
    },
    submitForm(formName) {
      //提交按钮
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.postFromFn();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    emailIsTrue(rule, value, callback) {
      var self = this;
      if (value === "") {
        callback(new Error(self.language.rightYzm));
      } else {
        if (self.form.email !== "") {
          callback();
        } else {
          callback(new Error(self.language.firstEmail));
        }
      }
    },
    validatePass(rule, value, callback) {
      var self = this;
      if (value === "") {
        callback(new Error(self.language.rightPwd));
      } else {
        callback();
      }
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
            if (response.data.status == 0) {
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

<style lang="scss" scoped>
.text-btn-12{
  font-size: 12px!important;
}
.login-logo {
  cursor: pointer;
}
.login-head-box {
  .login-page-tag{
    font-size: 12px;
    color: #f2f2f2;
    text-align: center;
    position: absolute;
    display: block;
    top: 0px;
  }
  .el-breadcrumb {
    font-size: 16px;
    color: #999 !important;
  }
  .el-breadcrumb__inner {
    color: #999 !important;
  }
  .text-btn:hover {
    opacity: 0.8;
    cursor: pointer;
    user-select: none;
  }
}

.isActive-red {
  color: red !important;
}

.send-code-input .el-input__inner {
  float: left;
  width: 232px;
}

.bottom-text {
  font-size: 14px;
  color: #333;
  display: block;
  margin: 54px 0px 120px;
  cursor: pointer;
  text-align: center;
  i {
    font-style: normal;
    color: red;
  }
}

.from-bottom {
  margin: 60px 0px 5px;
  text-align: center;
  .el-button--primary {
    display: inline;
    width: 300px;
    height: 36px;
    margin-left: 62px;
    font-size: 16px;
    padding: 0px;
  }
}

.login-from {
  .el-input__inner {
    height: 40px;
  }
  .el-form-item__label {
    font-size: 14px;
    color: #333;
    line-height: 40px;
    padding: 0 12px 0 0;
  }
  .el-form-item.is-required .el-form-item__label:before {
    display: none;
  }
  .el-form-item__error {
    background: red;
    color: #fff;
    top: 4px;
    padding: 10px 20px;
    left: 380px;
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
}
</style>

<style lang="scss" scoped>

.send-code-btn-login {
  position: absolute;
  border: 0px;
  background-color: #ccc !important;
  top: 0px;
  right: 0px;
  width: 110px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.send-code-btn-login:hover,
.send-code-btn-login:active,
.send-code-btn-login:focus {
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
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

.page-title {
  font-size: 21px;
  color: #666;
  text-align: center;
  margin: 80px 0px 64px;
}

.login-head-box {
  width: 100%;
  background: #f2f2f2;
  text-align: center;
  .login-logo {
    margin-top: 76px;
    width: 240px;
    height: 48px;
  }
  .login-bar {
    display: block;
    text-align: center;
    .el-breadcrumb {
      display: inline-block;
      margin: 21px auto 42px;
    }
  }
}
</style>