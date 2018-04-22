<template>
	<div>
	<div class="max-content-box">
		<div class="content-box">
			<div class="slider-box">
				<el-carousel height="350px" arrow="never" :interval="50000">
					<el-carousel-item v-for="item in sliderList" :key="item.remark">
              <a href=""><img :src="item.imgUrl" alt=""></a>
					</el-carousel-item>
				</el-carousel>
					<div class="user-login-box">
						<div class="login-box">
							<el-tabs v-model="activeName">
								<el-tab-pane label="登录" name="first"></el-tab-pane>
							</el-tabs>
							<input class="login-input" type="text" placeholder="手机号/邮箱">
							<input class="login-input" type="password" placeholder="密码">
							<div class="login-text-btn">
								<el-checkbox v-model="checked">下次自动登录</el-checkbox>
								<el-breadcrumb separator="|">
									<el-breadcrumb-item :to="{ path: '/' }">忘记密码</el-breadcrumb-item>
									<el-breadcrumb-item :to="{ path: '/' }">注册</el-breadcrumb-item>
								</el-breadcrumb>
							</div>
							 <button class="login-btn">登录</button>
						</div>
						<div class="user-box">
						</div>
					</div>
			</div>

      <div class="red-line"></div>

      <div class="compentent-box compentent-big">
        <el-tabs v-model="activeChannelCategory" @tab-click="handleClick">
          <el-tab-pane :key="index" v-for="(channelCategory,index) in channelCategorys" :label="channelCategory.name" :name="channelCategory.id+''">
             
              <div v-for="(item,index) in channelCategoryList" class="user-price-box">
         
                <img class="avatar-box" :src="item.headImg" alt="">
                <i class="avatar-line"></i>
                <span class="name-text">{{item.name}}</span>
                <div class="text-center-box">
                    <span class="people-text"><i class="img-icon people-icon"></i>{{item.fans}}</span>
                    <span class="channel-text"><i class="img-icon channel-icon"></i>{{item.categoryModel}}</span>
                </div>
                <div class="price-group">
                    <span class="price-text"><span>￥</span>{{item.mainPrice}}</span>
                    <span class="user-home"><i class="user-home-icon"></i></span>
                </div>
              </div>
          </el-tab-pane>
        </el-tabs>
        <span class="compentent-title">
          优质资源
        </span>
        <a class="compentent-more">更多></a>
      </div>

			<div class="compentent-box compentent-anli">
        <el-tabs v-model="activeHomeClassicList" @tab-click="handleClickHomeClassicList">
          <el-tab-pane :key="index" v-for="(homeClassicItem,index) in homeClassicList" :label="homeClassicItem.name" :name="homeClassicItem.id+''">
              <div class="homeClassicItems-box" >
                <div class="homeClassicItems-left-box" v-bind:style="{ 'background-image': 'url(' + homeClassicOtherItems.imgUrl + ')'}">
                  <div class="relative-box">
                    <el-button>查看案例详情</el-button>
                  </div>
                </div>
                <div class="homeClassicItems-right-box blur" v-bind:style="{ 'background-image': 'url(' + homeClassicOtherItems.imgUrl + ')'}">
                </div>
                <div class="over-right-box">
                    <div class="right-box-title">{{homeClassicOtherItems.name}}</div>
                    <div  class="right-box-content" v-html="homeClassicOtherItems.remark"></div>
                  </div>
              </div>
          </el-tab-pane>
        </el-tabs>
        <span class="compentent-title">
          精选案例
        </span>
      </div>



      <div class="compentent-box compentent-hezuo">
        <el-row :gutter="20">
          <el-col :span="6" v-for="homePartnerListitem in homePartnerList">
            <el-card shadow="hover">
              <img :src="homePartnerListitem.logo" alt="">
            </el-card>
          </el-col>
    
        </el-row>
        <span class="compentent-title">
          合作伙伴
        </span>
      </div>

		</div>
	</div>

	</div>

	
</template>

<script>
export default {
  components: {},
  data() {
    return {
      checked: false,
      activeName: "first",
      activeChannelCategory: "1",
      activeHomeClassicList: "1",
      channelCategorys: [],
      channelCategoryList: {},
      sliderList: {},
      homeClassicList: {},
      homeClassicItems: {},
      homeClassicOtherItems: {},
      homePartnerList: {}
    };
  },
  beforeCreate() {
    //创建虚拟dom前
  },
  created() {
    //创建虚拟dom后
  },
  beforeMount() {
    //页面加载前
  },
  mounted() {
    //页面加载完成回调
    this.getSliderList(); //轮播图
    this.getHomeCategoryList(); //分类
    this.getHomeClassicList(); //案例
    this.getHomePartnerList(); //合作商
  },
  methods: {
    getSliderList() {
      //获取轮播数据
      let self = this;
      self.$http.get(self.API.sliderList).then(
        response => {
          // 响应成功回调
          if (response.data.status == 0) {
            self.sliderList = response.data.data;
            console.log(self.sliderList);
          }
        },
        response => {}
      );
    },
    getHomeCategoryList() {
      //获取优质分类
      let self = this;
      self.$http.get(self.API.homeCategoryList).then(
        response => {
          // 响应成功回调
          if (response.data.status == 0) {
            self.channelCategorys = response.data.data;
            self.activeChannelCategory = response.data.data[0].id + "";
            self.getHomeCategoryItems(response.data.data[0].id);
          }
        },
        response => {}
      );
    },
    getHomeCategoryItems(id) {
      //获取分类详情
      let self = this;
      self.$http
        .get(self.API.homeCategoryItems, {
          params: {
            pid: id
          }
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.status == 0) {
              self.channelCategoryList = response.data.data;
            }
          },
          response => {}
        );
    },
    getHomeClassicList(id) {
      //首页经典案例列表
      let self = this;
      self.$http
        .get(self.API.homeClassicList, {
          params: {}
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.status == 0) {
              self.homeClassicList = response.data.data;
              self.activeHomeClassicList = response.data.data[0].id + "";
              self.getHomeClassicOtherItems(response.data.data[0].id);
              console.log("getHomeClassicOtherItems", response.data.data[0].id);
            }
          },
          response => {}
        );
    },
    getHomeClassicOtherItems(id) {
      //首页经典案例详情2
      let self = this;
      self.$http
        .get(self.API.homeClassicOtherItems, {
          params: {
            categoryId: id
          }
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.status == 0) {
              self.homeClassicOtherItems = response.data.data;
              console.log(response.data.data);
            }
          },
          response => {}
        );
    },
    getHomeClassicItems(id) {
      //经典案例页面详情
      let self = this;
      self.$http
        .get(self.API.homeClassicItems, {
          params: {
            categoryId: id
          }
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.status == 0) {
              self.homeClassicItems = response.data.data;
              console.log(response.data.data);
            }
          },
          response => {}
        );
    },

    getHomePartnerList(id) {
      //首页经典案例列表
      let self = this;
      self.$http
        .get(self.API.homePartnerList, {
          params: {}
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.status == 0) {
              self.homePartnerList = response.data.data;
              console.log(response.data.data);
            }
          },
          response => {}
        );
    },
    handleClick(t, e) {
      this.getHomeCategoryItems(t.name);
    },
    handleClickHomeClassicList(t, e) {
      console.log(e.name);
      this.getHomeClassicOtherItems(t.name);
    }
  }
};
</script>

<style lang="scss">
.relative-box {
  width: 100%;
  height: 100%;
  position: relative;
}
.absolute-box {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
}
.blur {
  -webkit-filter: blur(10px); /* Chrome, Opera */
  -moz-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
  filter: progid:DXImageTransform.Microsoft.Blur(
      PixelRadius=10,
      MakeShadow=false
    ); /* IE6~IE9 */
}
.slider-box {
  .el-carousel__indicators {
    left: 290px;
    transform: translateX(0);
    padding: 14px 4px;
  }
  .el-icon-arrow-right:before {
    color: red;
    margin-right: -3px;
    font-size: 20px;
  }
  .el-icon-arrow-left:before {
    color: red;
    margin-right: -3px;
    font-size: 20px;
  }
  .el-carousel__arrow {
    width: 30px;
    height: 30px;
  }
  .el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 8px;
  }
  .is-active .el-carousel__button {
    width: 16px;
    height: 8px;
    background: #6398ff;
  }
  .el-tabs__item {
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    outline: none;
    border: 0px;
    color: #333333 !important;
    box-shadow: 0px 0px 0px #999 !important;
  }
  .el-tabs {
    margin-bottom: 18px;
  }
  .el-checkbox__label {
    color: #bbbbbb !important;
    font-size: 14px;
  }
  .el-checkbox {
    margin: 6px 0px;
    float: left;
  }
  .login-text-btn {
    width: 100%;
    overflow: hidden;
    clear: both;
  }
  .el-breadcrumb {
    float: right;
    font-size: 14px;
    margin: 10px 0px;
  }
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    color: #bbbbbb !important;
    font-weight: inherit !important;
  }
  .login-btn {
    width: 100%;
    height: 42px;
    background: #eeeeee;
    margin: 30px 0px;
    border: 0px;
    border-radius: 4px;
    color: #bbbbbb;
    font-size: 16px;
    outline: none;
  }
  .login-btn:hover {
    background: #f3f3f3;
    color: #cccbcb;
    cursor: pointer;
    transition: all 0.2s;
  }
  .login-btn:active {
    opacity: 0.8;
  }
}
.compentent-big {
  .el-tabs__content {
    width: 1220px;
    min-height: 601px;
    position: relative;
    margin-left: -10px;
    margin-top: -5px;
  }
   .el-tabs__nav {
    float: right!important;
    margin-right:100px;
    margin-top: 20px;
  }
}

.compentent-anli {
  .el-tabs__nav {
    float: right;
    margin-right:0px;
    margin-top: 20px;
  }
}


.compentent-hezuo{
  .el-row{
    padding-top: 80px;
  }
  .el-col-6{
    margin-top: 20px;
  }
  .el-card__body{
    padding: 0px;
    width: 285px;
    height: 100px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}

.compentent-box {
  position: relative;
  
  .el-tabs__nav-wrap::after {
    display: none;
  }

  .compentent-title {
    width: 90px;
    height: 24px;
    font-family: HiraginoSansGB-W3;
    font-size: 21px;
    font-weight: 550;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.95;
    letter-spacing: normal;
    text-align: left;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #dd2025, #f27219);
    border-image-source: linear-gradient(to right, #dd2025, #f27219);
    position: absolute;
    top: 28px;
  }
  .user-price-box {
    width: 224px;
    height: 281px;
    float: left;
    margin: 10px;
    background: #fff;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
  .avatar-box {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    display: block;
    position: relative;
    margin: 20px auto;
  }
  .avatar-line {
    margin: 18px;
    height: 1px;
    display: block;
    background: #f2f2f2;
  }
  .name-text {
    font-size: 18px;
    display: block;
    margin: 10px auto;
    color: #333;
    text-align: center;
    font-weight: 600;
  }
  .text-center-box {
    text-align: center;
    margin: 16px 0px;
  }
  .people-text,
  .channel-text {
    font-size: 16px;
    color: #666;
    margin: 5px;
    display: inline-block;
    max-width: 95px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .img-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    position: relative;
    top: 2px;
    margin-right: 8px;
  }
  .people-icon {
    background-image: url("../../../static/icon/wangzhan/finas.png");
  }
  .channel-icon {
    background-image: url("../../../static/icon/wangzhan/type.png");
  }
  .price-group {
    width: 100%;
    height: 52px;
    background: #fafafa;
  }
  .price-text {
    font-size: 16px;
    color: #666;
    padding-left: 18px;
    line-height: 54px;
    display: inline-block;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    text-align: left;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#dd2025),
      to(#f27219)
    );
    background-image: linear-gradient(to right, #dd2025, #f27219);
    border-image-source: linear-gradient(to right, #dd2025, #f27219);
  }
  .price-text span {
    font-weight: 700;
  }
  .user-home-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    float: right;
    top: 12px;
    position: relative;
    margin-right: 20px;
    background-image: url("../../../static/icon/wangzhan/home.png");
  }
  .el-tabs__item {
    font-size: 16px;
  }
  .compentent-more {
    color: #999999;
    font-size: 16px;
    position: absolute;
    top: 28px;
    right: 0px;
    cursor: pointer;
  }
  .homeClassicItems-box {
    width: 100%;
    height: 360px;
    position: relative;
  }
  .homeClassicItems-left-box {
    width: 720px;
    height: 100%;
    float: left;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    .el-button {
      background: rgba(0, 0, 0, 0.1);
      color: #fff;
      border: 1px solid #fff;
      display: inline-block;
      position: relative;
      top: 50%;
      margin-top: -30px;
    }
    .relative-box {
      transition: all 0.2s;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .relative-box:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .homeClassicItems-right-box {
    width: 480px;
    height: 100%;
    float: left;
    position: relative;
    background-size: cover;
    background-position: 70%;
  }
  .over-right-box {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 480px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    .right-box-title {
      font-size: 21px;
      color: #fff;
      text-align: left;
      display: block;
      line-height: 60px;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      width: 400px;
      overflow: hidden;
      margin: 20px 0px 0px 24px;
      position: relative;
      font-weight: bold;
    }
    .right-box-content {
      margin: 0px 24px;
      font-size: 14px;
      color: #fff;
      max-height: 260px;
      text-overflow: ellipsis;
      white-space: normal;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 8;
      overflow: hidden;
    }
  }
}
</style>

<style lang="scss" scoped type="text/sass">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__indicator .el-carousel__button {
  width: 10px;
}
.login-input {
  width: 100%;
  height: 42px;
  border-radius: 4px;
  outline: none;
  background: #f4f4f4;
  margin: 9px 0;
  padding: 0px 22px;
  border: 1px solid #e1e1e1;
}

.max-content-box {
  width: 100%;
  height: 100%;
  padding-bottom:80px;
  position: relative;
}
.content-box {
  width: 1200px;
  height: auto;
  min-height: 200px;
  margin: 0 auto;
}
.slider-box {
  width: 100%;
  height: 350px;
  margin: 20px 0px;
  position: relative;
}
.user-login-box {
  width: 400px;
  height: 370px;
  position: absolute;
  padding: 0px 32px;
  top: -10px;
  right: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px #00000045;
  background: #fff;
  z-index: 2;
}
.red-line {
  background: red;
  width: 100%;
  height: 4px;
}
</style>