<template>
	<div>
	<div class="max-content-box">
		<div class="content-box">
			<div class="slider-box">
				<el-carousel height="360px" arrow="nerver" :interval="50000">
					<el-carousel-item v-for="item in 4" :key="item">
					</el-carousel-item>
				</el-carousel>
					<div class="user-login-box">
						<div class="login-box">
							<el-tabs v-model="activeName">
								<el-tab-pane label="登录" name="first"></el-tab-pane>
							</el-tabs>
							<input type="text" placeholder="手机号/邮箱">
							<input type="password" placeholder="密码">
							<div class="">
								<el-checkbox v-model="checked">备选项</el-checkbox>
								<el-breadcrumb separator="|">
									<el-breadcrumb-item :to="{ path: '/' }">忘记密码</el-breadcrumb-item>
									<el-breadcrumb-item><a href="/">注册</a></el-breadcrumb-item>
								</el-breadcrumb>
							</div>
							 <el-button type="primary">主要按钮</el-button>
						</div>
						<div class="user-box">
						</div>
					</div>
			</div>

			<div class="compentent-box"></div>
			<div class="compentent-box"></div>

		</div>
	</div>

	</div>

	
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      list: ["青铜糕", "白银糕", "黄金糕", "铂金糕", "钻石糕", "王者糕"],
      value: "",
	  checked: true,
	  activeName: 'first',
    };
  },
  mounted() {
    //页面加载完成回调
  },
  methods: {
    change(value) {
      console.log("Dropdown:", value);
      this.value = value;
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
}
</style>

<style lang="scss" scoped>
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
  height: 360px;
}
.login-box{
	width:470px;
	height: 370px;
	position: absolute;
	top:-10px;
	right: 20px;
	// box-shadow:
}
</style>