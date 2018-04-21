<template>
	<el-row class="panel">
		<div class="mjx-header">
			<!-- start 顶部用户信息栏 -->
			<div class="mjx-header-user mjx-clearfix">
				<div class="mjx-header-user-back mjx-width">
					<!-- 左侧 -->
					<div v-show="curIsLogin" class="mjx-header-user-left mjx-left">
						<span style="color: #FB8DB7;">{{getUserInfo.phone}}，欢迎来到快拍秀</span>
						<!--<router-link class="mjx-register" to="/personal">[个人中心]</router-link>
																					<a class="mjx-login" @click="logout" href="javascript:">[退出]</a>-->
					</div>

					<div v-show="!curIsLogin" class="mjx-header-user-left mjx-left">
						<span style="color: #FB8DB7;">您好，欢迎来到快拍秀</span>
						<!--<router-link to="/login" class="mjx-login">[商家登录]</router-link>
																					<router-link to="/signup" class="mjx-register">[商家注册]</router-link>-->
					</div>

					<!-- 右侧 -->
					<ul class="mjx-header-user-right mjx-right mjx-clearfix">
						<li v-show="!curIsLogin">
							<router-link to="/login">商家登录</router-link>
						</li>
						<li v-show="!curIsLogin">
							<router-link style="border: none" to="/signup">商家注册</router-link>
						</li>
						<li v-show="curIsLogin">
							<router-link to="/personal">个人中心</router-link>
						</li>
						<li v-show="curIsLogin">
							<a href="#/MessageInfoList" style="border: none">站内信
								<i class="msginfo-icon" v-show="msgTotal>0"></i>
							</a>
						</li>
						<li @click="logout" v-show="curIsLogin">
							<a href="javascript:" style="border-left:2px solid red">退出</a>
						</li>
						<!--<li >
																						<a style="padding-right: 0;" href="javascript:">帮助中心</a>
																					</li>-->
					</ul>
				</div>
			</div>
			<!-- end 顶部用户信息栏 -->

			<!-- start 顶部标题信息 -->
			<div class="mjx-header-bar mjx-clearfix mjx-width" :class="{'border-none':getNavList[0].isCur}">
				<a class="mjx-header-bar-left mjx-left" href="/">
					<img :src="logoUrl" alt="">
				</a>
				<!-- start 顶部导航 -->
				<div class="mjx-header-nav">
					<ul class="mjx-width-nav">
						<li v-for="item in getNavList" :class="{active:item.isCur}">
							<router-link v-if="item.url!=''" :to="item.url">{{item.name}}</router-link>
							<a v-else @click='showAppDown' href="javascript:">{{item.name}}</a>
						</li>
					</ul>
				</div>
				<!-- end 顶部导航 -->
				<ul class="mjx-header-bar-right mjx-right">
					<li>
						<label class="mjx-img">
							<i class="icon-mjx-select"></i>
						</label>
						<span>海量模特任选</span>
					</li>
				</ul>
			</div>
			<!-- end 顶部标题信息 -->
		</div>
		<el-col :span="24" class="panel-center">
			<section class="panel-c-c">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" style="background-color:#fff;box-sizing: border-box;">
						<transition name="fade">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
			<!--</el-col>-->
		</el-col>
		<el-dialog title="扫码下载快拍秀APP" v-model="isShowAppDown">
			<!--<img src="../assets/img/erweima.png" style="margin: auto;display: block;" />-->
		</el-dialog>
	</el-row>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	import {
		checkLogined,
		logout,
		pushMessageInfoList,
		getSellerStationInfo
	} from '../api'
	export default {
		data() {
			return {
				currentPathName: '快拍秀',
				currentPathNameParent: '首页',
				isShowAppDown: false,
				msgTotal: 0,
				logoUrl: ''
			}
		},
		mounted() {
			let self = this
		},
		watch: {
			'$route' (to, from) { //监听路由改变 
				this.currentPathName = to.name;
				this.currentPathNameParent = to.matched[0].name;
			}
		},
		computed: {
			// 使用对象展开运算符将 getters 混入 computed 对象中
			...mapGetters([
				'getNavList',
				'getUserInfo',
				// ...
			]),
			curIsLogin() {
				return typeof(this.getUserInfo.dmId) != "undefined"
			}
		},
		methods: {
			...mapActions([
				'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
				'decrement',
				'setuserinfo'
			]),
			getLogoUrl() {
				let self = this;
				self.$http.post(getSellerStationInfo, {}).then((response) => { // 响应成功回调 
					self.logoUrl = response.data.data.logo;
				}, (response) => {
					// 响应错误回调
				});
			},
			showAppDown() {
				let self = this
				self.isShowAppDown = true
			},
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			checkLogined() {
				let self = this
				self.$http.post(checkLogined).then((response) => { // 响应成功回调 
					if(response.data.code == 0) {
						self.setuserinfo(response.data.data)
						window.localStorage.setItem('userInfo', response.data.data)
					} else {
						window.localStorage.removeItem('userInfo')
					}
				}, (response) => {
					window.localStorage.removeItem('userInfo')
				});
			},
			handleselect: function(a, b) {},
			//退出登录
			logout: function() {
				var self = this;
				self.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					self.$http.post(logout).then((response) => { // 响应成功回调 
						if(response.data.code == 0) {
							window.localStorage.removeItem('userInfo')
							self.setuserinfo({})
							self.$router.replace('/');
						} else {
							self.$message({
								message: response.data.msg,
								type: 'warning'
							})
						}
					}, (response) => {});
				}).catch(() => {

				});

			},
			getMessageInfoList() {
				let self = this;
				self.$http.post(pushMessageInfoList).then((response) => { // 响应成功回调 
					if(response.data.code == 0) {
						self.msgTotal = response.data.data.total;
					}
				}, (response) => {});

			}
		}
	}
</script>

<style scoped>
	/*.fade-enter-active,
	.fade-leave-active {
		transition: opacity .1s
	}*/
	
	.mjx-header {
		width: 100%;
		-webkit-box-shadow: 0 0 10px #0CC;
		-moz-box-shadow: 0 0 10px #0CC;
		box-shadow: 0 0 10px #0CC;
	}
	
	a:hover {
		color: #8d8d8d;
		text-decoration: none
	}
	
	.mjx-header .mjx-header-nav ul li:hover {
		background-color: #FF3B87;
	}
	
	.mjx-header .mjx-header-nav ul li:hover a {
		color: #FFFFFF !important;
	}
	
	.mjx-header .mjx-header-user {
		background-color: #fafafa;
	}
	
	.mjx-header .mjx-header-user .mjx-header-user-left span {
		font-size: 12px;
		font-family: HiraginoSansGB-W3;
		font-size: 12px;
		color: #999999;
		height: 32px;
		line-height: 32px;
	}
	
	.mjx-header .mjx-header-bar .mjx-header-bar-left {
		height: 80px;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.mjx-header-bar-right {
		position: absolute;
		right: 0;
		top: 0;
		height: 80px;
	}
	
	.mjx-header .mjx-header-bar .mjx-header-bar-left img {
		height: 80px;
	}
	
	.mjx-header .mjx-header-bar ul.mjx-header-bar-right li .mjx-img {
		display: inline-block;
		width: 60px;
		height: 80px;
		/*background: url(../assets/img/123456.png) no-repeat center center;*/
		background-size: 80%;
	}
	
	.mjx-header .mjx-header-bar ul.mjx-header-bar-right li span {
		display: inline-block;
		margin-left: 5px;
		font-size: 16px;
		color: #8B8B8B;
		height: 80px;
		line-height: 80px;
		vertical-align: top;
	}
	
	.mjx-header .mjx-header-bar ul.mjx-header-bar-right li .mjx-img i {
		display: block;
		width: 100%;
		height: 100%;
		font-size: 36px;
		text-align: center;
		line-height: 60px;
		color: #fb4b60;
	}
	
	[class^="icon-"],
	[class*=" icon-"] {
		font-family: 'icomoon' !important;
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	i {
		font-style: normal;
	}
	
	label {
		/*display: inline-block;
		max-width: 100%;
		margin-bottom: 5px;
		font-weight: bold;*/
	}
	
	.mjx-header .mjx-header-bar ul.mjx-header-bar-right li {
		/*margin-top: 10px;
		margin-left: 15px;*/
		height: 80px;
		float: left;
	}
	
	.mjx-left {
		float: left;
	}
	
	.mjx-header .mjx-header-user .mjx-header-user-back {
		height: 32px;
		background-color: #fafafa;
	}
	
	.mjx-header .mjx-header-user .mjx-header-user-left span {
		font-size: 14px;
		color: #8d8d8d;
		height: 32px;
		line-height: 32px;
		background-color: #fafafa;
	}
	
	.mjx-header .mjx-header-user .mjx-header-user-left a.mjx-register {
		color: #fb4b60;
	}
	
	.mjx-header .mjx-header-user .mjx-header-user-left a {
		font-size: 14px;
		color: #8d8d8d;
		display: inline-block;
		margin-left: 20px;
	}
	
	.mjx-header .mjx-header-user ul.mjx-header-user-right li a {
		color: #ffffff;
		display: inline-block;
		text-align: center;
		padding-left: 12px;
		padding-right: 12px;
		border-right: 2px solid #FF3B87;
		display: inline;
		position: relative;
	}
	
	.mjx-header .mjx-header-user ul.mjx-header-user-right li a .msginfo-icon {
		position: absolute;
		right: -12px;
		top: -6px;
		width: 10px;
		height: 10px;
		background: red;
		border-radius: 50%;
	}
	
	.mjx-header .mjx-header-user ul.mjx-header-user-right li:last-child a {
		border-right: none;
	}
	
	.mjx-header .mjx-header-user ul.mjx-header-user-right li {
		float: left;
		font-size: 14px;
		line-height: 32px;
	}
	
	.mjx-right {
		float: right;
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
	
	.panel {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	
	.panel-top {
		height: 32px;
		line-height: 32px;
		background: #f5f5f5;
		color: #8d8d8d;
	}
	
	.panel-center {
		background: #FFFFFF;
		position: relative;
		top: 0;
		bottom: 0px;
		/*overflow: hidden;*/
	}
	
	.panel-c-c {
		position: relative;
		right: 0px;
		top: 0px;
		bottom: 0px;
		left: 0;
	}
	
	.logo {
		float: left;
		margin: 22px 10px 10px 18px;
	}
	
	.tip-logout {
		float: right;
		margin-right: 20px;
		padding-top: 5px;
	}
	
	.tip-logout i {
		cursor: pointer;
	}
	
	.admin {
		color: #FFFFFF;
		text-align: center;
	}
	
	.mjx-header .mjx-header-user ul.mjx-header-user-right li a:hover {
		color: #fb4b60;
	}
	
	.icon-mjx-user:before {
		content: "\e902";
	}
	
	.icon-mjx-select:before {
		content: "";
	}
	
	.icon-mjx-manage:before {
		content: "\e900";
	}
	
	.mjx-header .mjx-header-nav {
		position: absolute;
		top: 0;
		left: 50%;
		background-color: #FFFFFF;
		margin-left: -214px;
	}
	
	.mjx-header .mjx-header-nav ul {
		height: 80px;
		line-height: 80px;
		background-color: #FFFFFF;
		color: #1b1b1b;
	}
	
	.mjx-header .mjx-header-nav ul li.active {
		background-color: #FF3B87;
		color: #FFFFFF;
	}
	
	.mjx-header .mjx-header-nav ul li {
		width: 120px;
		height: 80px;
		line-height: 80px;
		float: left;
	}
	
	.mjx-header .mjx-header-nav ul li a {
		display: block;
		width: 100%;
		height: 80px;
		text-align: center;
		color: #1b1b1b !important;
		font-size: 16px;
	}
	
	.mjx-header .mjx-header-nav ul li.active a {
		color: #FFFFFF !important;
	}
	
	.mjx-header-bar {
		position: relative;
		border-bottom: 1px solid #E9E9E9;
		height: 81px;
	}
	
	.border-none {
		border-bottom: none;
		height: 80px;
	}
	
	.mjx-width-nav {}
</style>