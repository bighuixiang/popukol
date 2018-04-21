<template>
	<div>
	<div class="max-content-box">
		<div class="content-box">
			<div class="slider-box">
				<el-carousel height="350px" arrow="never" :interval="50000">
					<el-carousel-item v-for="item in 4" :key="item">
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

			<div class="compentent-box">
        <el-tabs v-model="activeChannelCategory" @tab-click="handleClick">
          <el-tab-pane v-for="(channelCategory,index) in channelCategorys" :label="channelCategory" :name="index+1+''">
              <div v-for="(item,index) in channelCategoryList.weixin">
                姓名：{{item.name}}
                粉丝：{{item.peopleNum}}
                价格：{{item.price}}
              </div>
          </el-tab-pane>
        </el-tabs>
        <img src="https://www.baidu.com/img/baidu_jgylogo3.gif" alt="">
        <div>更多</div>
      </div>


			<div class="compentent-box"></div>

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
      channelCategorys:[
        "微信","微博"
      ],
      channelCategoryList:{
        weixin:[
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        }
      ],
      weibo:[
        {
          name:"小弟弟2",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        },
        {
          name:"小弟弟",
          avatar:"",
          peopleNum:"12000",
          category:"微博-美食",
          price:"10400"
        }
      ]
      }
    };
  },
  mounted() {
    //页面加载完成回调
  },
  methods: {
    // change(value) {
    //   console.log("Dropdown:", value);
    //   this.value = value;
    // }
    handleClick(t,e){
      console.log(e)
    }
  }
};
</script>

<style lang="scss">
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
  .el-tabs__item{
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    outline: none;
    border: 0px;
    color: #333333!important;
    box-shadow:0px 0px 0px #999!important;
  }
  .el-tabs{
    margin-bottom: 18px;
  }
  .el-checkbox__label{
    color:#bbbbbb!important;
    font-size:14px;
  }
  .el-checkbox{
    margin: 6px 0px;
    float: left;
  }
  .login-text-btn{
    width: 100%;
    overflow: hidden;
    clear: both;
  }
  .el-breadcrumb{
    float: right;
    font-size: 14px;
    margin: 10px 0px;
  }
  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    color:#bbbbbb!important;
    font-weight: inherit!important;
  }
  .login-btn{
    width: 100%;
    height: 42px;
    background: #eeeeee;
    margin: 30px 0px;
    border: 0px;
    border-radius: 4px;
    color:#bbbbbb;
    font-size: 16px;
    outline: none;
  }
  .login-btn:hover{
    background: #f3f3f3;
    color:#cccbcb;
    cursor: pointer;
    transition: all 0.2s;
  }
  .login-btn:active{
    opacity: 0.8;
  }
}
.compentent-box{
  .el-tabs__nav-wrap::after{
    display: none;
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
.login-input{
  width: 100%;
    height: 42px;
    border-radius: 4px;
    outline: none;
    background: #f4f4f4;
    margin: 9px 0;
    padding:0px 22px;
    border: 1px solid #e1e1e1;
}

.max-content-box {
  width: 100%;
  height: 100%;
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
  padding:0px 32px;
  top: -10px;
  right: 20px;
  border-radius:4px;
  box-shadow: 0px 0px 20px #00000045;
  background: #fff;
  z-index: 2;
}

</style>