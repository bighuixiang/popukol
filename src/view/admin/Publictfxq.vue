<template>
	<div class="content">
		<div class="biaoge">
			<div class="mr6">
				<el-select v-model="activitiyValue" placeholder="请选择">
					<el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</div>
			<div class="mr6">
				<el-input class="" v-model="input" placeholder="请输入内容"></el-input>
			</div>
			<div class="mr6">
				<span>所属行业: </span>
			</div>
			<div class="mr6">
				<el-select v-model="industryValue" placeholder="请选择">
					<el-option :key="-1" label="全部" :value="''">
					</el-option>
					<el-option v-for="item in productList" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</div>
			<div class="mr6">
				<span>活动状态: </span>
			</div>
			<div class="mr6">
				<el-select v-model="activitiyStatusValue" placeholder="请选择">
					<el-option :key="-1" label="全部" :value="''">
					</el-option>
					<el-option v-for="item in activitiyStatusList" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</div>

			<div class="mr6">
				<span>活动时间: </span>
			</div>
			<div class="mr6">
				<el-date-picker class="pickerOverflow" v-model="startTime" type="date" placeholder="选择日期">
				</el-date-picker>
			</div>
			<div class="mr6" style="margin-left: 22px;">
				<span>至</span>
			</div>
			<div class="mr6">
				<el-date-picker class="pickerOverflow" v-model="endTime" type="date" placeholder="选择日期">
				</el-date-picker>
			</div>
			<div class="mr6"  style="margin-left: 26px;">
				<el-button type="primary" @click="addProductPageList">查询</el-button>
			</div>
		</div>
		<!-- start 列表 -->
		<el-table :data="dataList" tooltip-effect="dark" style="width: 100%;margin-top: 12px;">
			<el-table-column prop="topic" label="推广活动主题">
			</el-table-column>
			<el-table-column prop="brand" label="推广品牌">
			</el-table-column>
			<el-table-column prop="productName" label="推广产品">
			</el-table-column>
			<el-table-column prop="category" label="产品所属行业">
			</el-table-column>
			<el-table-column prop="popTimeStr" label="活动开始时间">
			</el-table-column>
			<el-table-column prop="accountCount" label="总账号数">
			</el-table-column>
			</el-table-column>
			<el-table-column prop="popStatusStr" label="活动状态">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<div>
						<p class="zhDetail" @click="zhDetail(scope.row)">查看详情</p>
					</div>
				</template>
			</el-table-column>
			<!--<el-table-column prop="address" label="地址" show-overflow-tooltip   此属性表示内容超出隐藏  tip提示>
				</el-table-column>-->
		</el-table>
		<!-- end 列表 -->
		<div class="pagination">
			<el-pagination @current-change="currentChange" background layout="total, prev, pager, next, jumper" :current-page="params.page" :total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				platformId: 1,
				params: {
					//入参	
					page: 1,
				},
				total: 0,
				productList: [],
				dataList: [],
				input: "",
				activitiyValue: "topic",
				industryValue: '',
				activitiyStatusValue: '',
				startTime: '',
				endTime: '',
				activitiyStatusList: [{
					name: "创建中",
					id: "0"
				}, {
					name: "待沟通",
					id: "1"
				}, {
					name: "已沟通",
					id: "2	"
				}],
				options: [{
					name: "活动主题",
					id: "topic"
				}, {
					name: "推广品牌",
					id: "brand"
				}, {
					name: "推广产品",
					id: "productName"
				}]
			}
		},
		watch: {
			'$route' (to, from) {
				let self = this
				self.platformId = this.$route.query.pid
				self.initData();
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
				self.params.page = 1
				self.total = 0
				self.input = ""
				self.activitiyValue = "topic"
				self.industryValue = ''
				self.activitiyStatusValue = ''
				self.startTime = ''
				self.endTime = ''
				self.platformId = self.$route.query.pid
				let index = (self.platformId - 1) + ""
				if(self.platformId == 9 || self.platformId == 10) {
					index = (self.platformId - 2) + ""
				}
				self.increment({
					val: "1",
					type: 2
				}) //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
				self.increment({
					val: "2",
					type: 3
				}) //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
				self.increment({
					val: index,
					type: 1
				}) //设置左边导航

				self.addProductList()
				self.addProductPageList()
			},
			currentChange(index) {
				this.params.page = index;
				this.addProductPageList();
			},
			addProductPageList() {
				//产品行业分类
				let self = this;
				let params = {
					page: self.params.page,
					limit: 10,
					categoryId: self.industryValue,
					popStatus: self.activitiyStatusValue,
					startTime: self.startTime != '' ? self.dateFormat(self.startTime.getTime(), 'yyyy-MM-dd') : '',
					endTime: self.endTime != '' ? self.dateFormat(self.endTime.getTime(), 'yyyy-MM-dd') : '',
				}
				params[self.activitiyValue] = encodeURIComponent(self.input)
				self.$http.get(self.API.productPageListAPI + self.platformId + "/record/page", {
					params
				}).then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.dataList = response.data.data
						self.total = response.data.count;
					}
				}, (response) => {

				});
			},
			addProductList() {
				//产品行业分类
				let self = this;
				self.$http.get(self.API.productListAPI).then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.productList = response.data.data
						//						if(self.productList.length > 0) {
						//							self.industryValue = self.productList[0].id
						//						}
					}
				}, (response) => {

				});
			}
		}
	}
</script>
<style lang="scss">
	.pickerOverflow {
		.el-input__inner {
			padding-right: 0 !important;
		}
	}
</style>
<style lang="scss" scoped>
	.zhDetail {
		color: #dd2025;
		cursor: pointer;
	}
	
	.content {
		padding-top: 24px;
		min-height: 453px;
		.pagination {
			padding-top: 32px;
			padding-bottom: 32px;
			float: right;
		}
		.biaoge {
			.mr6 {
				/*margin-right: 6px;*/
				display: inline-block;
				max-width: 106px;
				color: #999999;
				;
			}
			.pickerOverflow {
				width: 128px;
			}
		}
	}
</style>