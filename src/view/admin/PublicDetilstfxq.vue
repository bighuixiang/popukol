<template>
	<div class="content">
		<div class="kuang">投放活动状态：<span class="red">{{details.popStatusStr}}</span></div>
		<div class="kuang">
			<h1 class="title">投放活动信息</h1>
			<div class="info">
				<div class="item">
					<div class="left">
						推广活动主题：
					</div>
					<div class="right">
						{{details.topic}}
					</div>
					<div class="left">
						公司网站：
					</div>
					<div class="right">
						{{details.companyUrl}}
					</div>
					<div class="left">
						推广产品：
					</div>
					<div class="right">
						{{details.productName}}
					</div>
					<div class="left">
						推广需求：
					</div>
					<div class="right">
						{{details.popCondition}}
					</div>
					<div class="left">
						推广时间：
					</div>
					<div class="right">
						{{details.popTimeStr}}
					</div>
				</div>
				<div class="item">
					<div class="left">
						推广品牌：
					</div>
					<div class="right">
						{{details.brand}}
					</div>
					<div class="left">
						推广产品所属行业：
					</div>
					<div class="right">
						{{details.category}}
					</div>
					<div class="left">
						推广产品链接：
					</div>
					<div class="right">
						{{details.productUrl}}
					</div>
					<div class="left">
						资质证明：
					</div>
					<div class="right">
						<img :src="details.relationUrl" style="width: 120px;height: auto;display: block;" alt="资质证明" />
					</div>
				</div>
			</div>
		</div>

		<div class="kuang">
			<h1 class="title account ">投放账号</h1>
			<span class="accounttitle">投放平台：{{details.platform}}</span>

			<!-- start 列表 -->
			<el-table :data="dataList" tooltip-effect="dark" style="width: 100%;margin-top: 12px;">
				<el-table-column prop="name" label="账号昵称">
				</el-table-column>
				<el-table-column prop="fans" label="粉丝数">
				</el-table-column>
				<el-table-column prop="adTypeDesc" label="广告位">
				</el-table-column>
				<el-table-column label="价格">
					<template slot-scope="scope">
						<div>
							￥{{scope.row.popPrice.toFixed(2)}}
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="categoryModel" label="账号分类">
				</el-table-column>
			</el-table>
			<!-- end 列表 -->
		</div>

		<div class="kuang">
			<h1 class="title time">投放活动信息</h1>
			<div class="info">
				<div class="item timeout">
					<div class="left">
						创建时间：
					</div>
					<div class="right">
						{{details.createTimeStr}}
					</div>
					<div class="left">
						推广时间：
					</div>
					<div class="right">
						{{details.popTimeStr}}
					</div>
					<div class="left">
						沟通时间：
					</div>
					<div class="right">
						{{details.confirmTimeStr}}
					</div>
				</div>
			</div>
		</div>
		
		<div class="kuang">
			<h1 class="title time">投放活动信息</h1>
			<div class="info">
				<div class="item timeout">
					<div class="left">
						投放账号数：
					</div>
					<div class="right">
						{{details.accountCount}}
					</div>
					<div class="left">
						投放金额：
					</div>
					<div class="right">
						￥{{details.amount.toFixed(2)}}
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				pid: 1,
				details: {},
				dataList: [],
			}
		},
		mounted() {
			let self = this
			self.SLS();
			self.initData();
		},
		computed: {
			// 使用对象展开运算符将 getters 混入 computed 对象中
			...mapGetters([
				'getNavList',
				"getLoginFlag",
				'getUserInfo',
				// ...
			])
		},
		methods: {
			...mapActions([
				'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
				'decrement',
				'setuserinfo'
			]),
			initData() {
				let self = this;
				self.pid = self.$route.query.pid
				self.increment({
					val: "2",
					type: 2
				}) //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
				self.increment({
					val: "2",
					type: 3
				}) //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
				self.addProductInfoList()
				self.addProductAccountList()
			},
			addProductInfoList() {
				//产品行业分类
				let self = this;
				self.$http.get(self.API.productInfoListAPI + self.pid + "/info").then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.details = response.data.data
						console.log(self.details)
					}
				}, (response) => {

				});
			},
			addProductAccountList() {
				//产品行业分类
				let self = this;
				self.$http.get(self.API.productAccountListAPI + self.pid + "/account/list").then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.dataList = response.data.data
						console.log(self.dataList)
					}
				}, (response) => {

				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.content {
		padding-top: 24px;
		padding-bottom: 24px;
		.kuang {
			background-color: #FFFFFF;
			padding: 12px 24px;
			color: #666666;
			font-size: 12px;
			margin-bottom: 6px;
			.info {
				position: relative;
				overflow: hidden;
				padding: 12px 0;
				.item {
					width: 50%;
					float: left;
					font-size: 14px;
					.left {
						text-align: right;
						color: #666666;
						width: 148px;
						display: inline-block;
						margin-top: 12px;
					}
					.right {
						width: 378px;
						text-align: left;
						color: #333333;
						display: inline-block;
						margin-top: 12px;
					}
				}
				.timeout {
					.left {
						width: 94px;
					}
					.right{
						width: 438px;
					}
				}
			}
			.title {
				font-size: 14px;
				font-weight: normal;
				color: #333333;
				padding-left: 22px;
				background: url(../../../static/icon/wangzhan/gantanhao.png) no-repeat left center;
				background-size: 16px;
				border-bottom: 2px solid #e8e8e8;
				padding-top: 12px;
				padding-bottom: 12px;
			}
			.account {
				background: url(../../../static/icon/wangzhan/gantanhao.png) no-repeat left center;
				background-size: 16px;
				display: inline-block;
				border-bottom: none;
				position: relative;
				margin-right: 8px;
			}
			.account:before {
				content: '';
				position: absolute;
				top: 15px;
				bottom: 15px;
				right: -6px;
				width: 1px;
				background-color: #dd2025;
			}
			.time {
				background: url(../../../static/icon/wangzhan/gantanhao.png) no-repeat left center;
				background-size: 16px;
			}
			.red {
				font-size: 14px;
				color: #dd2025;
			}
		}
	}
</style>