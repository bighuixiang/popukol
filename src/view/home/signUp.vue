<template>
<div class="content">
			<div class="login-head-box">
				<div class="margin-auto-1200-box">
					<img class="login-logo" src="../../../static/icon/topandbottomlogo/toplogo.png" alt="">
					<div class="login-bar">
						<el-breadcrumb separator="|">
							<el-breadcrumb-item><span class="text-btn" @click="goToUrl('/login')">登录</span></el-breadcrumb-item>
							<el-breadcrumb-item><span class="text-btn isActive-red" @click="goToUrl('/signup')">注册</span></el-breadcrumb-item>
						</el-breadcrumb>
					</div>
				</div>
				
				
			</div>
			
			<div class="margin-auto-1200-box login-from">
				<div class="page-title">
					广告主注册
				</div>
				<el-row :gutter="24">
					<el-col :span="9" :offset="7">
						<el-form ref="form" :rules="rules" :model="form" label-width="80px">
							<el-form-item label="邮箱" prop="email">
								<el-input v-model="form.email"></el-input>
							</el-form-item>
							<el-form-item label="公司名称" prop="company">
								<el-input v-model="form.company"></el-input>
							</el-form-item>
							<el-form-item label="联系人" prop="contactName">
								<el-input v-model="form.contactName"></el-input>
							</el-form-item>
							<el-form-item label="联系电话" prop="contactPhone">
								<el-input v-model="form.contactPhone"></el-input>
							</el-form-item>
							<el-form-item label="创建密码" prop="pwd">
								<el-input v-model="form.pwd"></el-input>
							</el-form-item>
							<el-form-item label="确认密码" prop="confirmPwd">
								<el-input v-model="form.confirmPwd">
								</el-input>
							</el-form-item>

							<el-form-item label="" prop="type">
								<el-checkbox-group v-model="form.type">
								<el-checkbox label="我已阅读并同意《POPUKOL平台服务协议》" name="type"></el-checkbox>
								</el-checkbox-group>
							</el-form-item>
							<div class="from-bottom">
								<el-button type="primary"  @click="submitForm('form')">立即注册</el-button>
							</div>
						</el-form>
					</el-col>
				</el-row>
				<div class="bottom-text" @click="goToUrl('/login')">
					已有账号，<i>直接登录</i>
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
        company: "",
        contactName: "",
        contactPhone: "",
        pwd: "",
        confirmPwd: "",
        code: "",
        type: []
      },
      rules: {
          email: [
            { type: 'email',required: true, message: '请填写正确邮箱', trigger: 'change' }
          ],
          company: [
            { required: true, message: '请填写公司名称', trigger: 'change' }
          ],
          contactName: [
            { required: true, message: '请填写联系人名称', trigger: 'change' }
          ],
          contactPhone: [
            { type: 'number', required: true, message: '填写正确电话', trigger: 'change' }
          ],
          pwd: [
             { required: true,validator: this.validatePass, trigger: 'blur' }
          ],
          confirmPwd: [
             { required: true,validator: this.validatePass2, trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ],
          type:[
            { type: 'array', required: true, message: '请阅读并同意协议', trigger: 'change' }
          ]
        }
    };
  },
  mounted() {
    let self = this;
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      "getNavList",
      "getUserInfo"
      // ...
    ])
  },
  methods: {
    ...mapActions([
      "increment", // 映射 this.increment() 为 this.$store.dispatch('increment')
      "decrement",
      "setuserinfo"
    ]),
    onSubmit() {
      console.log("submit!", this.form);
    },
    submitForm(formName) {
      //提交按钮
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    validatePass(rule, value, callback){
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.rules.confirmPwd !== '') {
            this.$refs.form.validateField('confirmPwd');
          }
          callback();
        }
      },
      validatePass2(rule, value, callback){
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.pwd) {
          callback(new Error('两次输入密码不一致!'));
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
          path: url,
        });
			},
    test() {
      let self = this;
      self.$http
        .post(self.API.recordList, {
          params: {
            platformId: 1
          }
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.code == 0) {
              console.log(response.data);
            }
          },
          response => {}
        );
    }
  }
};
</script>

<style lang="scss">
.login-head-box {
  .el-breadcrumb {
    font-size: 16px;
    color: #999 !important;
  }
  .el-breadcrumb__inner {
    color: #999 !important;
  }
  .text-btn:hover{
    opacity: 0.8;
    cursor: pointer;
    user-select: none;
  }
}
.isActive-red{
	color:red!important;
}
.bottom-text{
	font-size: 14px;
	color: #333;
	display: block;
	margin: 54px 0px 120px;
	text-align: center;
	i{
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
    height: 40px;
  }
  .el-form-item__label {
    font-size: 14px;
    color: #333;
    line-height: 40px;
    padding: 0 12px 0 0;
  }
  .el-form-item.is-required .el-form-item__label:before{
    display: none;
  }
  .el-form-item__error{
    background: red;
    color: #fff;
    top: 4px;
    padding: 10px 20px;
    left: 380px;
    white-space: nowrap;
    border-radius:4px; 
  }
  .el-form-item__error:after{
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