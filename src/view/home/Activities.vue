<template>
	<div class="margin-auto-1200-box">
    <!-- <div class="pt-title">
      投放平台：{{getReleaseObj.platformName}}
    </div> -->
    <div class="qy-form">
            <el-row :gutter="2">
                <el-col :span="11" :offset="6">
                    <el-form ref="form" :label-position="'right'"  :rules="rules" :model="form" label-width="114px">
                        <el-form-item label="推广活动主题" prop="topic">
                            <el-input v-model="form.topic"></el-input>
                        </el-form-item>
                        <el-form-item label="推广品牌" prop="brand">
                            <el-input v-model="form.brand"></el-input>
                        </el-form-item>
                        <el-form-item label="公司官网" prop="companyUrl">
                            <el-input v-model="form.companyUrl"></el-input>
                        </el-form-item>
                        <el-form-item label="推广产品" prop="productName">
                            <el-select class="width-150" v-model="form.categoryId" placeholder="推广活动所属行业">
                              <el-option :key="item.id" v-for="item in busCategoryList" :label="item.name" :value="item.id"></el-option>
                            </el-select>
                            <el-input class="width-150"  v-model="form.productName" ></el-input>
                        </el-form-item>
                        <el-form-item label="产品链接" prop="productUrl">
                            <el-input v-model="form.productUrl" ></el-input>
                        </el-form-item>
                        <el-form-item label="推广需求" prop="popCondition">
                            <el-input v-model="form.popCondition" class="position-ab" :disabled="true"></el-input>
                            <vue-html5-editor :content="''" :height="200" @change="updateData"></vue-html5-editor>
                        </el-form-item>
                        <el-form-item label="预计推广时间" prop="popDate">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.popDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="资质证明" prop="relationUrl">
                          <el-upload
                            class="avatar-uploader"
                            :action="API.uploadImg"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                          </el-upload>
                          <el-input v-model="form.relationUrl" class="cant-see"></el-input>
                          <span class="uploadText">请上传Jpeg、png格式的文件，图片大小不大于5M</span>
                        </el-form-item>
            
                        <div class="from-bottom">
                            <el-button type="primary" @click="submitForm('form')">下一步</el-button>
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
      language: "",
      busCategoryList: "",
      imageUrl: "",
      // form: {
      //   platformId: "",
      //   topic: "",
      //   brand: "",
      //   categoryId: "",
      //   companyUrl: "",
      //   productName: "",
      //   productUrl: "",
      //   popCondition: "",
      //   popDate: "",
      //   relationUrl: "",
      //   singlePopKey:""
      // },
      form: {
        platformId: "",
        topic: "双11推广",
        brand: "联想",
        categoryId: "1",
        companyUrl: "http://www.haida.com",
        productName: "产品名",
        productUrl: "http://www.haida.com",
        popCondition: "活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述",
        popDate: "2012-12-12",
        relationUrl: "http://popukol.oss-cn-beijing.aliyuncs.com/201805/01/657de2de333d4d1799c5dbfe9ea2096f.jpg",
        singlePopKey:""
      },
      rules: {
        topic: [
          {
            required: true,
            min: 1,
            message: "请填写完整",
            trigger: ["blur", "change"]
          }
        ],
        brand: [
          {
            required: true,
            min: 1,
            message: "请填写完整",
            trigger: ["blur", "change"]
          }
        ],
        companyUrl: [
          {
            min: 1,
            message: "请填写完整",
            trigger: ["blur", "change"]
          }
        ],
        popCondition: [
          {
            required: true,
            min: 1,
            message: "请填写完整",
            trigger: ["blur", "change"]
          }
        ],
        productName: [
          {
            required: true,
            min: 1,
            validator: this.validatePass,
            trigger: ["blur", "change"]
          }
        ],
        productUrl: [
          {
            min: 1,
            message: "请填写完整",
            trigger: ["blur", "change"]
          }
        ],
        popDate: [
          {
            required: true,
            message: "请填写完整",
            trigger: ["blur", "change"]
          }
        ],
        relationUrl: [
          {
            min: 1,
            message: "请填写完整",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  beforeCreate() {
    //创建虚拟dom前
   },
  created() {
    //创建虚拟dom后
    var self =this;
    self.increment({ val: "2", type: 2 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
    self.increment({ val: "2", type: 3 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
  },
  beforeMount() {
    //页面加载前
  
  },
  mounted() {
    let self = this;
    self.SLS();
    self.language = self.getLanguage();
    self.getProdList();
    self.rules.topic[0].message = self.language.writeOk;
    self.rules.brand[0].message = self.language.writeOk;
    self.rules.companyUrl[0].message = self.language.writeOk;
    self.rules.productUrl[0].message = self.language.writeOk;
    self.rules.popDate[0].message = self.language.writeOk;
    self.rules.relationUrl[0].message = self.language.writeOk;
    document.onkeydown = e => {
      if (e.keyCode == 13 && self.submitForm) {
        document.body.focus();
        self.submitForm("form");
      }
    };
    let singlePopKey = this.$route.query.singlePopKey
    let platformId = this.$route.query.platformId
    if(singlePopKey){
      this.form.singlePopKey = singlePopKey;
    }
    if(platformId){
      this.form.platformId = platformId;
    }
    self.setReleaseObj({
      index: 2,
    });
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
    validatePass(rule, value, callback) {
      //验证
      var self = this;
      if (self.form.categoryId == "") {
        callback(new Error(self.language.fenleiNotOk));
      } else if (value === "") {
        callback(new Error(self.language.writeOk));
      } else {
        callback();
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.relationUrl = res.data.src;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    getProdList() {
      var self = this;
      this.$http.get(self.API.busCategoryList).then(response => {
        if (response.data.status == 0) {
          self.busCategoryList = response.data.data;
        } else {
          self.$message({
            type: "error",
            message: response.data.msg
          });
        }
      });
    },
    dateFn(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    submitForm(formName) {
      //提交按钮
      var popDate = this.form.popDate;
      if(typeof(popDate)== "object"){
        this.form.popDate=this.dateFn(this.form.popDate);
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sendCreateApi();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    updateData(a) {
      this.form.popCondition = a;
    },
    sendCreateApi() {
      //首页经典案例列表
      let self = this;
      console.log(this.form);
      self.$http.post(self.API.xuqiuCreate, self.form).then(
        response => {
          // 响应成功回调
          if (response.data.status == 0) {
            self.$message({
              type: "success",
              message: self.language.sendOk
            });
            self.$router.push({path:'/SendActivities',query:{popKey:response.data.data.popKey}})
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
.qy-form {
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
  .el-button--primary {
    display: block;
    width: 360px;
    margin: 35px auto;
  }
}
.pt-title {
  font-size: 16px;
  color: #333;
  padding-left: 40px;
  margin: 40px 0px;
  font-weight: bold;
}
</style>

<style lang="scss" scoped>
.margin-auto-1200-box {
  width: 1200px;
  margin: 20px auto;
  background: #fff;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 50px;
  color: #e8e8e8;
  width: 160px;
  height: 160px;
  overflow: hidden;
  line-height: 160px;
  text-align: center;
  border: 1px solid #e8e8e8;
}
.avatar {
  width: 160px;
  height: 160px;
  display: block;
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