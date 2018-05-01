<template>
	<div class="content">

		<!-- start 列表 -->
		<div class="biaoge">
			<el-table :data="dataList" tooltip-effect="dark" style="width: 100%">
				<el-table-column label="账号信息" width="286">
					<template slot-scope="scope">
						<el-row>
							<el-col :span="6" class="tableZh">
								<div class="left">
									<img class="userImg" :src="scope.row.headImg" />
									<img v-if="scope.row.officalStatus==1" class="ico" src="/static/icon/meitirenzhen/wxrz.png" />
								</div>
							</el-col>
							<el-col :span="18" class="tableZh">
								<div class="right">
									<div class="name">{{scope.row.name}}
										<div class="erweima">
											<img class="erweimamin" src="../../../static/icon/meitirenzhen/erweima.png" />
											<img class="erweimaMax" :src="scope.row.headImg" />
										</div>
									</div>
									<span class="tag">原创</span>
								</div>
							</el-col>
						</el-row>
					</template>
				</el-table-column>
				<el-table-column prop="fans" label="粉丝数">
				</el-table-column>
				<el-table-column label="阅读数">
					<template slot-scope="scope">
						<div>
							<p>头条:{{ scope.row.extra.viewCount }}+</p>
							<p>次条:{{ scope.row.extra.subViewCount}}+</p>
						</div>
					</template>
				</el-table-column>
				<el-table-column label="报价" width="220">
					<template slot-scope="scope">
						<div>
							<div v-if="getLoginFlag">
								<p>头条:￥{{scope.row.mainPrice}}</p>
								<p>次条:￥{{scope.row.subPrice}}</p>
							</div>
							<div>
								登录广告主账号可查看更多报价
							</div>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="categoryModel" label="账号分类">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<div>
							<el-button @click="yytoufang(scope.row)" class="btnred" plain size="mini">预约投放</el-button>
							<p class="zhDetail" @click="zhDetail(scope.row)">账号详情</p>
							<p class="addCar" @click="addCar(scope.row)">加入选号车</p>
						</div>
					</template>
				</el-table-column>
				<!--<el-table-column prop="address" label="地址" show-overflow-tooltip   此属性表示内容超出隐藏  tip提示>
				</el-table-column>-->
			</el-table>

			<div class="pagination">
				<el-pagination @current-change="currentChange" background layout="total, prev, pager, next, jumper" :current-page="params.page" :total="total">
				</el-pagination>
			</div>
		</div>
		<!-- end 列表 -->

	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				params: {
					//入参	
					page: 1,
					regionId: 0, //地区
					categoryId: 0, //账号分类
				},
				total :0,
				dataList: [],
			}
		},
		async mounted() {
			let self = this
			self.SLS();
			self.increment({
				val: "1",
				type: 2
			}) //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
			self.increment({
				val: "2",
				type: 3
			}) //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
			self.increment({
				val: "0",
				type: 1
			}) //设置左边导航

			self.addRecordType();
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
			currentChange(index) {
				this.params.page = index;
				this.addWechatList();
			},
			addRecordType() {
				let self = this;
				//				12 微信   13微博  14 小红书
				self.$http.get(self.API.recordList, {
					params: {
						platformId: 1,
					}
				}).then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.recordTypeList = response.data.data
					}
				}, (response) => {

				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.content {
		
	}
</style>