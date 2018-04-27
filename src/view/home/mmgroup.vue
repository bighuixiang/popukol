<template>
	<div class="content">
        <div class="top-box">
            <div class="margin-auto-1600-box h-350">
                <img src="../../../static/icon/wangzhan/home.png" alt="">
            </div>
        </div>
        <div class="margin-auto-1200-box h-350">
                <img src="../../../static/icon/wangzhan/home.png" alt="">
        </div>
        <div class="margin-auto-1200-box qy-form">
            <h1 class="text-center-box f-21">请广告顾问来电为您介绍</h1>
            <span class="text-center-box f-12">留下您的联系方式，我们的广告顾问将与您联系，免费咨询</span>
            <el-row :gutter="24">
                <el-col :span="9" :offset="7">
                    <el-form ref="form" :label-position="'left'"  :rules="rules" :model="form" label-width="114px">
                        <el-form-item label="企业名称 (必填)" prop="company">
                            <el-input v-model="form.company"></el-input>
                        </el-form-item>
                        <el-form-item label="姓　　名 (必填)" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手　　机 (必填)" prop="phone">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="邮　　箱" prop="email">
                            <el-input v-model="form.email" ></el-input>
                        </el-form-item>
            
                        <div class="from-bottom">
                            <el-button type="primary" @click="submitForm('form')">立即咨询</el-button>
                        </div>
                    </el-form>
                </el-col>
            </el-row>
        </div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      abc: "小垃圾",
      form: {
        company: "",
        name: "",
        phone: "",
        email: ""
      },
      rules: {
        email: [
          {
            message: "请输入正确的邮箱地址",
            trigger: "blur"
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        phone: [
          {
            required: true,
            min: 7,
            max: 11,
            message: "长度在 7 到 11 个字符",
            trigger: ["blur", "change"]
          }
        ],
        company: [
          {
            required: true,
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: ["blur", "change"]
          }
        ],
        name: [
          {
            required: true,
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  mounted() {
    let self = this;
    self.SLS();
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
          //   this.postFromFn();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getHomeClassicList() {
      //首页经典案例列表
      let self = this;
      self.$http.get(self.API.helpList).then(
        response => {
          // 响应成功回调
          if (response.data.status == 0) {
            self.casesList = response.data.data;
          }
        },
        response => {}
      );
    }
  }
};
</script>

<style lang="scss">
.qy-form {
  .el-form-item.is-required .el-form-item__label:before {
    display: none;
  }
  .el-form-item__error {
    background: red;
    color: #fff;
    top: 4px;
    padding: 10px 20px;
    left: 350px;
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
  .el-button--primary{
    display: block;
    width: 206px;
    margin: 35px auto;
  }
}
</style>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  position: relative;
  background: #fafafa;
}
.margin-auto-1200-box {
  width: 1200px;
  margin: 20px auto;
  background: #fff;
}
.margin-auto-1600-box {
  width: 1600px;
  margin: 0px auto;
}
.margin-auto-1600-box,
.margin-auto-1200-box {
  padding: 0px;
  img {
    width: 100%;
    height: 100%;
  }
}
.h-350 {
  height: 350px;
}
.h-360 {
  height: 360px;
}
.text-center-box {
  display: block;
  width: 100%;
  text-align: center;
}
.f-21 {
  font-size: 21px;
  line-height: 1;
  color: #333;
  font-weight: bold;
  margin-bottom: 18px;
  padding-top: 72px;
}
.f-12 {
  font-size: 12px;
  line-height: 1;
  color: #999999;
  margin-bottom: 40px;
}
</style>