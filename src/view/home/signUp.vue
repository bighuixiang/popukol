<template>
<div class="content signUp">
			<div class="login-head-box">
				<div class="margin-auto-1200-box">
					<img class="login-logo" @click="goToUrl('/home')"  src="../../../static/icon/topandbottomlogo/toplogo.png" alt="">
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
							<el-form-item label="公司名称" prop="company">
								<el-input v-model="form.company" placeholder="请输入4-50位字符（中文，英文，数字）"></el-input>
							</el-form-item>
							<el-form-item label="联系人" prop="contactName">
								<el-input v-model="form.contactName" placeholder="请输入4-50位字符（中文，英文，数字）"></el-input>
							</el-form-item>
							<el-form-item label="联系电话" prop="contactPhone">
								<el-input v-model="form.contactPhone" placeholder="请输入联系人电话"></el-input>
							</el-form-item>
							<el-form-item label="邮箱" prop="email">
								<el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
							</el-form-item>
              <el-form-item label="验证码" prop="code">
                  <el-input v-model="form.code" ref="code" placeholder="请输入邮箱验证码" class="send-code-input"></el-input>
                <el-button type="primary" class="send-code-btn" @click="sendEmailCode()">{{smsText}}</el-button>
							</el-form-item>
							<el-form-item label="创建密码" prop="pwd">
								<el-input type="password" placeholder="密码为6-12位字母和数字组成" v-model="form.pwd"></el-input>
							</el-form-item>
							<el-form-item label="确认密码" prop="confirmPwd">
								<el-input type="password" placeholder="请再次输入密码" v-model="form.confirmPwd">
								</el-input>
							</el-form-item>

							<el-form-item label="" class="more-m-t" prop="type">
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
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            isShowI18n: false,
            smsText: '发送验证码',
            keywords: '', //搜索关键字
            form: {
                email: '',
                company: '',
                contactName: '',
                contactPhone: '',
                language: '',
                pwd: '',
                confirmPwd: '',
                code: '',
                type: []
            },
            rules: {
                email: [
                    { required: true, message: '请填写正确邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请填写正确邮箱地址', trigger: ['blur', 'change'] }
                ],
                company: [{ required: true, message: '请填写公司名称', trigger: 'change' }],
                contactName: [{ required: true, message: '请填写联系人名称', trigger: 'change' }],
                contactPhone: [{ required: true, message: '填写正确电话', trigger: 'change' }],
                code: [{ required: true, validator: this.emailIsTrue, trigger: 'blur' }],
                pwd: [
                    { required: true, validator: this.validatePass, trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                confirmPwd: [{ required: true, validator: this.validatePass2, trigger: 'blur' }],
                type: [
                    {
                        type: 'array',
                        required: true,
                        message: '请阅读并同意协议',
                        trigger: 'change'
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
        self.rules.email[1].message = self.language.rightEmail;
        self.rules.company[0].message = self.language.rightCompany;
        self.rules.contactName[0].message = self.language.rightContactName;
        self.rules.contactPhone[0].message = self.language.rightContactPhone;
        self.rules.pwd[1].message = self.language.length;
        self.rules.type[0].message = self.language.rightType;

        document.onkeydown = e => {
            if (e.keyCode == 13 && self.submitForm) {
                document.body.focus();
                self.submitForm('form');
            }
        };
    },
    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'getNavList',
            'getUserInfo'
            // ...
        ])
    },
    methods: {
        ...mapActions([
            'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
            'decrement',
            'setuserinfo'
        ]),
        sendEmailCode() {
            let self = this;
            var reg = new RegExp(
                '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'
            );
            if (!reg.test(self.form.email)) {
                this.$alert(self.language.rightEmail, self.language.notSend, {
                    confirmButtonText: self.language.yes,
                    closeOnClickModal: true
                });
            } else {
                self.$http
                    .get(self.API.emailApi, {
                        params: {
                            email: self.form.email
                        }
                    })
                    .then(
                        response => {
                            // 响应成功回调
                            self.smsText = '重新发送';
                            if (response.data.status == 0) {
                                self.$message({
                                    type: 'success',
                                    message: `${self.language.yzsSendOk}>>>${self.form.email}`
                                });
                                console.log(response.data);
                            } else {
                                self.$message({
                                    type: 'error',
                                    message: response.data.msg
                                });
                                //                                 this.$alert(response.data.msg, self.language.notSend, {
                                //                                     confirmButtonText: self.language.yes,
                                //                                     closeOnClickModal: true
                                //                                 });
                            }
                        },
                        response => {}
                    );
            }
        },
        submitForm(formName) {
            //提交按钮
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.postFromFn();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        emailIsTrue(rule, value, callback) {
            var self = this;
            if (value === '') {
                callback(new Error(self.language.rightYzm));
            } else {
                if (self.form.email !== '') {
                    callback();
                } else {
                    callback(new Error(self.language.firstEmail));
                }
            }
        },
        validatePass(rule, value, callback) {
            var self = this;
            if (value === '') {
                callback(new Error(self.language.rightPwd));
            } else {
                if (this.rules.confirmPwd !== '') {
                    this.$refs.form.validateField('confirmPwd');
                }
                callback();
            }
        },
        validatePass2(rule, value, callback) {
            var self = this;
            if (value === '') {
                callback(new Error(self.language.rightPwdAegin));
            } else if (value !== this.form.pwd) {
                callback(new Error(self.language.rightPwdAeginError));
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
            const param = Object.assign({}, self.form);
            param.pwd = self.$encrypt(param.pwd);
            param.confirmPwd = self.$encrypt(param.confirmPwd);
            self.$http
                .post(self.API.signUpApi, {
                    ...param
                })
                .then(
                    response => {
                        // 响应成功回调
                        if (response.data.status == 0) {
                            self.$message({
                                type: 'success',
                                message: self.language.signUpOk
                            });
                            setTimeout(() => {
                                self.goToUrl('/home');
                            }, 2000);
                            console.log(response.data);
                        } else {
                            self.$message({
                                type: 'error',
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
.signUp {
    .more-m-t {
        margin: 20px 0px !important;
    }
    .login-logo {
        cursor: pointer;
    }
    .login-head-box {
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
    .send-code-btn {
        position: absolute;
        top: 0px;
        right: 0px;
    }
    .send-code-input .el-input__inner {
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
        .el-form-item {
            margin-bottom: 10px;
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
        .el-form-item__content {
            height: 40px;
        }
        .el-form-item__error:after {
            content: '';
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
