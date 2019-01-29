<template>
	<div class="content UserCenter">

		<div class="margin-auto-1200-box login-from m-t-20">
            <el-container>
            <el-aside width="260px">
                
                <div class="avater-box">   
                    <img :src="getUserInfo.headImg" class="avater-img" alt="">
                    <span class="avater-phone">{{getUserInfo.username}}</span>
                    <span class="avater-adds">广告主</span>
                    <el-button class="avater-btn" type="primary" @click="">账号管理</el-button>
                </div>

                <div class="selecet-box">
                    <span :class="isPassWord?'':'is-active'" @click="isPassWord=!isPassWord">
                        我的信息
                    </span>
                    <span :class="isPassWord?'is-active':''" @click="isPassWord=!isPassWord">
                        修改密码
                    </span>
                </div>
            </el-aside>
            <el-main>
                <div class="contant-right">
                    <div class=" login-from" v-show="!isPassWord">
                        <div class="page-title">
                            <span>
                                公司信息
                            </span>
                            <el-button class="avater-btn" type="primary" @click="submitForm('form')">{{btn1}}</el-button>
                        </div>
                        <el-row :gutter="24">
                            <el-col :span="15" :offset="0">
                                <el-form class="m-t-b-50" ref="form" :rules="rules" :model="form" label-width="126px">
                                    <el-form-item label="公司名称" prop="company">
                                        <el-input v-model="form.company" :disabled="btn1=='编辑'" placeholder="请输入公司名称"></el-input>
                                    </el-form-item>
                                    <el-form-item label="公司地址" prop="address">
                                        <el-input v-model="form.address" :disabled="btn1=='编辑'" placeholder="请输入公司地址"></el-input>
                                    </el-form-item>
                                    <el-form-item label="公司网站地址" prop="companyUrl">
                                        <el-input v-model="form.companyUrl" :disabled="btn1=='编辑'" placeholder="http：//"></el-input>
                                    </el-form-item>
                                    <el-form-item label="公司官方微博" prop="weibo">
                                        <el-input v-model="form.weibo" :disabled="btn1=='编辑'" placeholder="http://weibo.com/example"></el-input>
                                    </el-form-item>
                                    <el-form-item label="公司描述" prop="description">
                                        <el-input v-model="form.description" :disabled="btn1=='编辑'" placeholder="请对您的公司作出描述"></el-input>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </div>
                    <div class=" login-from" v-show="!isPassWord">
                        <div class="page-title">
                            <span>
                                联系方式
                            </span>
                            <el-button class="avater-btn" type="primary" @click="submitForm1('form1')">{{btn2}}</el-button>
                        </div>
                        <el-row :gutter="24">
                            <el-col :span="15" :offset="0">
                                <el-form class="m-t-b-50" ref="form1" :rules="rules1" :model="form1" label-width="120px">
                                    <el-form-item label="联系人" prop="contactName">
                                        <el-input v-model="form1.contactName" :disabled="btn2=='编辑'" placeholder="请输入联系人姓名"></el-input>
                                    </el-form-item>
                                    <el-form-item label="联系电话" prop="contactPhone">
                                        <el-input v-model="form1.contactPhone" :disabled="btn2=='编辑'" placeholder="请输入联系人电话号码"></el-input>
                                    </el-form-item>
                                    <el-form-item label="E-mail" prop="email">
                                        <el-input v-model="form1.email" :disabled="btn2=='编辑'" placeholder="请输入联系人邮箱地址"></el-input>
                                    </el-form-item>
                                    <el-form-item label="QQ" prop="qq">
                                        <el-input v-model="form1.qq" :disabled="btn2=='编辑'" placeholder="请输入联系人QQ号码"></el-input>
                                    </el-form-item>
                                    <el-form-item label="微信号" prop="wechat">
                                        <el-input v-model="form1.wechat" :disabled="btn2=='编辑'" placeholder="请输入联系人微信号码"></el-input>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </div>
                      <div class=" login-from" v-show="isPassWord">
                        <div class="page-title">
                            <span>
                                修改密码
                            </span>
                            <el-button class="avater-btn" type="primary" @click="submitForm2('form2')">{{btn3}}</el-button>
                        </div>
                        <el-row :gutter="24">
                            <el-col :span="15" :offset="0">
                                <el-form class="m-t-b-50" ref="form2" :rules="rules2" :model="form2" label-width="120px">
                                    <el-form-item label="注册邮箱" prop="email">
                                        <span class="email-show">{{form2.email}}</span>
                                        <el-input v-model="form2.email" style="display:none" :disabled="btn3=='编辑'" placeholder="请输入邮箱地址"></el-input>
                                    </el-form-item>
                                    <el-form-item label="验证码" prop="code">
                                        <el-input v-model="form2.code" :disabled="btn3=='编辑'" placeholder="请输入验证码" ref="code" class="send-code-input"></el-input>
                                        <el-button type="primary" class="send-code-btn" @click="sendEmailCode()">发送验证码</el-button>
                                    </el-form-item>
                                    <el-form-item label="创建密码" prop="pwd">
                                        <el-input type="password" :disabled="btn3=='编辑'" placeholder="请输入新的密码" v-model="form2.pwd"></el-input>
                                    </el-form-item>
                                    <el-form-item label="确认密码" prop="confirmPwd">
                                        <el-input type="password" :disabled="btn3=='编辑'" placeholder="请再次输入密码" v-model="form2.confirmPwd">
                                        </el-input>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-main>
            </el-container>
			
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
let ruleArr = [
  {
    min: 1,
    message: "请填写完整",
    trigger: ["blur", "change"]
  }
];
let ruleArr1 = [
  {
    required: true,
    min: 1,
    message: "请填写完整",
    trigger: ["blur", "change"]
  }
];
export default {
  data() {
    return {
      isShowI18n: false,
      keywords: "", //搜索关键字
      btn1: "编辑",
      btn2: "编辑",
      btn3: "编辑",
      isPassWord: false,
      userInfoGGZ:"",
      bgImage: "",
      language: {},
      form: {
        company: "",
        address: "",
        companyUrl: "",
        weibo: "",
        description: ""
      },
      form1: {
        contactPhone: "",
        contactName: "",
        email: "",
        qq: "",
        wechat: ""
      },
      form2: {
        email: "",
        pwd: "",
        confirmPwd: "",
        code: ""
      },
      rules: {
        company: ruleArr1,
        address: ruleArr,
        companyUrl: ruleArr,
        weibo: ruleArr,
        description: ruleArr
      },
      rules1: {
        contactName: ruleArr1,
        contactPhone: ruleArr1,
        email: ruleArr,
        qq: ruleArr,
        wechat: ruleArr
      },
      rules2: {
        code: [
          { required: true, validator: this.emailIsTrue, trigger: "blur" }
        ],
        pwd: [
          { required: true, validator: this.validatePass, trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        confirmPwd: [
          { required: true, validator: this.validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  created() {
    //创建虚拟dom后
    var self = this;
    self.increment({ val: "2", type: 2 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
    self.increment({ val: "3", type: 3 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
  },
  mounted() {
    let self = this;
    self.SLS();
    self.language = self.getLanguage();
    self.getGGZInfo();
    for (var item in self.rules) {
      self.rules[item].message = self.language.writeOk;
    }
    self.bgImage = self.API.captchaApi;
    console.log(self.getUserInfo);
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
        if (this.btn1 == "编辑") {
          this.btn1 = "保存";
          return;}
          this.$refs[formName].validate(valid => {
                if (valid) {
                this.postFromFn();
                } else {
                console.log("error submit!!");
                return false;
                }
            });
    },
    submitForm1(formName) {
      //提交按钮
        if (this.btn2 == "编辑") {
          this.btn2 = "保存";
          return;}
        this.$refs[formName].validate(valid => {
            if (valid) {
            this.postFromFn1();
            } else {
            console.log("error submit!!");
            return false;
            }
        });
    },
    submitForm2(formName) {
      //提交按钮
        if (this.btn3 == "编辑") {
          this.btn3 = "保存";
          return;
        }
          this.$refs[formName].validate(valid => {
                if (valid) {
                this.postFromFn2();
                } else {
                console.log("error submit!!");
                return false;
                }
            });
    },
    goToUrl(url) {
      let self = this;
      self.$router.push({
        path: url
      });
    },
    getGGZInfo() {
      let self = this;
      self.$http
        .get(self.API.userInfoGGZ, {
          ...self.form
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.status != -1) {
              self.userInfoGGZ = response.data.data;
              self.form.company = response.data.data.extra.company;
              self.form.address = response.data.data.extra.address;
              self.form.companyUrl = response.data.data.extra.companyUrl;
              self.form.weibo = response.data.data.extra.weibo;
              self.form.description = response.data.data.extra.description;
              self.form1.contactName = response.data.data.extra.contactName;
              self.form1.contactPhone = response.data.data.extra.contactPhone;
              self.form1.email = response.data.data.extra.email;
              self.form1.qq = response.data.data.extra.qq;
              self.form1.wechat = response.data.data.extra.wechat;
              self.form2.email = response.data.data.account;
            } else {
              self.$message({
                type: "error",
                message: response.data.msg
              });
            }
          },
          response => {}
        );
    },
    postFromFn() {
      let self = this;
      self.$http
        .post(self.API.companyInfo, {
          ...self.form
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.status == 0) {
              self.$message({
                type: "success",
                message: self.language.sendOk
              });
              self.btn1 = "编辑";
            } else {
              self.$message({
                type: "error",
                message: response.data.msg
              });
            }
          },
          response => {}
        );
    },
    postFromFn1() {
      let self = this;
      self.$http
        .post(self.API.peopleInfo, {
          ...self.form1
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.status == 0) {
              self.$message({
                type: "success",
                message: self.language.sendOk
              });
              self.btn2 = "编辑";
            } else {
              self.$message({
                type: "error",
                message: response.data.msg
              });
            }
          },
          response => {}
        );
    },
    postFromFn2() {
      let self = this;
      self.$http
        .post(self.API.reSetApi, {
          ...self.form2
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.status == 0) {
              self.$message({
                type: "success",
                message: `重置成功`
              });
              self.btn3 = "编辑";
            }
          },
          response => {}
        );
    },
    sendEmailCode() {
      let self = this;
      var reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      );
      if (!reg.test(self.form2.email)) {
        this.$alert(self.language.rightEmail, self.language.notSend, {
          confirmButtonText: self.language.yes,
          closeOnClickModal: true
        });
      } else {
        self.$http
          .get(self.API.reSetEmailApi, {
            params: {
              email: self.form2.email
            }
          })
          .then(
            response => {
              // 响应成功回调
              if (response.data.status == 0) {
                self.$message({
                  type: "success",
                  message: `${self.language.yzsSendOk}>>>${self.form2.email}`
                });
                console.log(response.data);
              } else {
                this.$alert(response.data.msg, self.language.notSend, {
                  confirmButtonText: self.language.yes,
                  closeOnClickModal: true
                });
              }
            },
            response => {}
          );
      }
    },
    emailIsTrue(rule, value, callback) {
      var self = this;
      if (value === "") {
        callback(new Error(self.language.rightYzm));
      } else {
        if (self.form2.email !== "") {
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
        if (this.rules.confirmPwd !== "") {
          this.$refs.form2.validateField("confirmPwd");
        }
        callback();
      }
    },
    validatePass2(rule, value, callback) {
      var self = this;
      if (value === "") {
        callback(new Error(self.language.rightPwdAegin));
      } else if (value !== this.form2.pwd) {
        callback(new Error(self.language.rightPwdAeginError));
      } else {
        callback();
      }
    }
  }
};
</script>

<style lang="scss">
.UserCenter{
.text-btn-12 {
  font-size: 12px !important;
}
.m-t-20 {
  margin-top: 20px !important;
}

.selecet-box span:last-child::after {
  display: none;
}
.m-t-b-50 {
  margin-top: 50px !important;
  margin-bottom: 50px !important;
}
.el-form-item__content {
line-height: 34px !important;
height: 34px !important;
}
.send-code-input .el-input__inner{
    width: 286px!important;
}
.selecet-box {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  background: #fff;
  span {
    position: relative;
    display: block;
    width: 100%;
    line-height: 42px;
    cursor: pointer;
  }
  span::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background: #e8e8e8;
  }
  .is-active {
    color: #dd2025;
  }
  .is-active::before {
    content: "";
    width: 3px;
    height: 26px;
    position: absolute;
    left: 0px;
    top: 8px;
    background: #dd2025;
  }
}
.avater-box {
  width: 260px;
  height: 280px;
  background: #fff;
  padding: 1px;
  text-align: center;
  .avater-img {
    width: 60px;
    height: 60px;
    display: block;
    background: #ccc;
    border-radius: 50%;
    margin: 30px auto;
  }
  .avater-phone {
    display: block;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #333333;
    display: block;
  }
  .avater-adds {
    display: block;
    margin-top: 4px;
    font-size: 14px;
    text-align: center;
    color: #999999;
  }
  .avater-btn {
    width: 200px;
    margin: 30px auto 0px;
    line-height: 32px;
    padding: 0px;
  }
}
.login-logo {
  cursor: pointer;
}
.email-show{
    font-size: 14px;
    font-weight: bold;
    color: #333;
}
.login-head-box {
  .login-page-tag {
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
    height: 36px;
  }
  .el-form-item__label {
    font-size: 14px;
    color: #aaa;
    line-height: 36px;
    padding: 0 18px 0 0;
  }
  .el-form-item__label::-webkit-input-placeholder {
    color: #ccc;
  }
  .el-form-item__error {
    background: red;
    color: #fff;
    top: 4px;
    padding: 10px 20px;
    left: 460px;
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
.send-code-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 0px 32px;
  line-height: 34px;
}

.send-code-btn-login:hover,
.send-code-btn-login:active,
.send-code-btn-login:focus {
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
}
.el-main {
  padding: 0px 20px;
}
.contant-right {
  background: #fff;
  margin-bottom: 90px;
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
.el-form-item {
  margin-bottom: 10px;
}
.page-title {
  font-size: 16px;
  color: #333;
  text-align: left;
  position: relative;
  height: 60px;
  span {
    line-height: 60px;
    padding-left: 20px;
    font-weight: bold;
  }
  button {
    line-height: 34px;
    width: 80px;
    float: right;
    padding: 0px;
    margin-top: 11px;
    margin-right: 10px;
  }
}
.page-title::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: #e8e8e8;
  width: 100%;
  height: 1px;
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