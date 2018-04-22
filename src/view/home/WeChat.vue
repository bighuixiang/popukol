<template>
	<div class="content">
		<!-- start 搜索 -->
		<div class="search">
			<el-input class="input" placeholder="请输入搜索关键字" prefix-icon="el-icon-search" v-model="keywords"></el-input>
			<el-button class="btn" type="primary">搜索</el-button>
		</div>
		<!-- end 搜索 -->
		<!-- start 账号分类 -->
		<div class="condition">
			<div class="item kuozhan">
				<div class="title">账号分类</div>
				<div class="right">
					<div class="buxian cur">
						<span>不限</span>
					</div>
					<div class="list">
						<!--<div class="cur"><span>母婴</span></div>-->
						<div v-for="item in recordTypeList"><span>{{item.name}}</span></div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="title">粉 丝 数</div>
				<div class="right">
					<div class="buxian cur">
						<span>不限</span>
					</div>
					<div class="list">
						<!--<div class="cur"><span>母婴</span></div>-->
						<div><span>1万以下</span></div>
						<div><span>1万-5万</span></div>
						<div><span>5万-10万</span></div>
						<div><span>10万-20万</span></div>
						<div><span>20万-50万</span></div>
						<div><span>50万-100万</span></div>
						<div><span>100万以上</span></div>
					</div>
					<div class="filter">
						<el-input class="inputwidth" size="mini" v-model="input" placeholder="万"></el-input>
						<div class="hengxian"></div>
						<el-input class="inputwidth" size="mini" v-model="input" placeholder="万"></el-input>
						<el-button class="btn" type="primary" size="mini">确定</el-button>
						<span class="canlen">取消</span>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="title">参考报价</div>
				<div class="right">
					<div class="buxian cur">
						<span>不限</span>
					</div>
					<div class="list">
						<!--<div class="cur"><span>母婴</span></div>-->
						<div><span>美食</span></div>
						<div><span>健康养生</span></div>
						<div><span>幽默搞笑</span></div>
						<div><span>母婴</span></div>
						<div><span>美食</span></div>
						<div><span>幽默搞笑</span></div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="title"><span style="margin-right: 26px;">区</span>域</div>
				<div class="right">
					<div class="buxian cur">
						<span>不限</span>
					</div>
					<div class="list">
						<!--<div class="cur"><span>母婴</span></div>-->
						<div><span>美食</span></div>
						<div><span>健康养生</span></div>
						<div><span>幽默搞笑</span></div>
						<div><span>母婴</span></div>
						<div><span>美食</span></div>
						<div><span>幽默搞笑</span></div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="title">其他筛选</div>
				<div class="right">
					<div class="buxian cur">
						<span>不限</span>
					</div>
					<div class="list">
						<!--<div class="cur"><span>母婴</span></div>-->
						<div><span>美食</span></div>
						<div><span>健康养生</span></div>
						<div><span>幽默搞笑</span></div>
						<div><span>母婴</span></div>
						<div><span>美食</span></div>
						<div><span>幽默搞笑</span></div>
					</div>
				</div>
			</div>
		</div>
		<!-- end 账号分类 -->
		<!-- start 排序 -->
		<div class="sort">
			<div class="defultLeftborder defult" :class="{'cur' :sortIndex=='0'}" @click="dropdownchanage(0)">默认排序</div>
			<el-dropdown trigger="click" style="float: left;" @command="dropdownchanage">
				<span class="el-dropdown-link defult" :class="{'cur' :sortIndex=='1'||sortIndex=='2'}">
			    按粉丝数
			    <i v-if="sortIndex=='1'" class="el-icon-arrow-down el-icon-sort-down marginleft"></i>
			    <i v-if="sortIndex=='2'" class="el-icon-arrow-down el-icon-sort-up marginleft1"></i>
			  </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="1">粉丝数由高到低</el-dropdown-item>
					<el-dropdown-item command="2">粉丝数由低到高</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown trigger="click" style="float: left;" @command="dropdownchanage">
				<span class="el-dropdown-link defult" :class="{'cur' :sortIndex=='3'||sortIndex=='4'}">
			    按阅读数
			      <i v-if="sortIndex=='3'" class="el-icon-arrow-down el-icon-sort-down marginleft"></i>
			    <i v-if="sortIndex=='4'" class="el-icon-arrow-down el-icon-sort-up marginleft1"></i>
			  </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="3">阅读数由高到低</el-dropdown-item>
					<el-dropdown-item command="4">阅读数由低到高</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<div class="defult" :class="{'cur' :sortIndex=='5'}" @click="dropdownchanage(5)">按报价</div>
		</div>
		<!-- end 排序 -->
		<!-- start 列表 -->
		<div class="biaoge">
			<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="日期" width="120">
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120">
				</el-table-column>
				<el-table-column prop="address" label="地址" show-overflow-tooltip>
				</el-table-column>
			</el-table>

			<div class="pagination">
				<el-pagination background layout="total, prev, pager, next, jumper" :total="1000">
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
				keywords: "", //搜索关键字
				sortIndex: "0",
				recordTypeList: [], //账号分类列表
				tableData3: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				multipleSelection: []
			}
		},
		mounted() {
			let self = this
			self.increment(1)
			self.addRecordType();
		},
		computed: {
			// 使用对象展开运算符将 getters 混入 computed 对象中
			...mapGetters([
				'getNavList',
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
			dropdownchanage(val) {
				this.sortIndex = val;
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			getMessageInfoList() {
				let self = this;
				self.$http.post("pushMessageInfoList").then((response) => { // 响应成功回调 
					if(response.data.code == 0) {
						self.msgTotal = response.data.data.total;
					}
				}, (response) => {});

			},
			addRecordType() {
				let self = this;
				//				12 微信   13微博  14 小红书
				self.$http.get(self.API.subRecordList, {
					params: {
						platformId: 12,
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
		width: 1200px;
		margin: auto;
		display: table;
		.condition {
			.filter {
				position: absolute;
				right: 24px;
				top: 0;
				bottom: 0;
				height: 45px;
				line-height: 45px;
				/*border: 1px solid #000000;*/
				.hengxian {
					width: 10px;
					height: 1px;
					background-color: #aaaaaa;
					display: inline-block;
					margin-left: 6px;
					margin-right: 6px;
					margin-top: 22px;
					float: left;
				}
				.inputwidth {
					width: 68px;
					height: 24px;
					border-radius: 2px;
					display: inline-block;
					padding: 0;
					float: left;
				}
				.btn{
					margin-left: 12px;
				}
				.canlen{
					margin-left: 6px;
				}
				.canlen:hover{
					color: #DE1A20;
					cursor:pointer;
				}
			}
			.right {
				width: 1100px;
				/*padding-left: 12px;*/
				color: #888888;
				font-size: 12px;
				float: left;
				overflow: hidden;
				.buxian {
					width: 86px;
					text-align: center;
					position: absolute;
					top: 0;
					bottom: 0;
					padding-top: 12px;
					cursor: pointer;
					span {
						padding: 3px 12px 6px;
					}
				}
				.buxian:hover {
					span {
						color: #FFFFFF;
						background-color: #DE1A20;
						padding: 3px 12px 6px;
						border-radius: 4px;
						line-height: 0;
					}
				}
				.cur {
					span {
						color: #FFFFFF;
						background-color: #DE1A20;
						border-radius: 4px;
						line-height: 0;
						padding: 3px 12px 6px;
					}
				}
				.list {
					float: left;
					padding-left: 86px;
					padding-bottom: 12px;
					div {
						padding-top: 12px;
						cursor: pointer;
						display: inline-block;
						/*padding-right: 34px;*/
						span {
							padding: 3px 12px 6px;
						}
					}
					div:hover {
						span {
							color: #FFFFFF;
							background-color: #DE1A20;
							padding: 3px 12px 6px;
							border-radius: 4px;
							line-height: 0;
						}
					}
				}
			}
			.item:first-child {
				border-top: 1px solid #e8e8e8;
				margin-top: -1px;
			}
			.item {
				position: relative;
				overflow: hidden;
				border-bottom: 1px solid #e8e8e8;
				font-size: 14px;
				padding-left: 100px;
				.title {
					width: 100px;
					background-color: #F2F2F2;
					padding-bottom: 12px;
					padding-top: 12px;
					text-align: center;
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
				}
			}
		}
		.biaoge {
			.pagination {
				padding-top: 32px;
				padding-bottom: 32px;
				float: right;
			}
		}
		.sort {
			margin-top: 19px;
			height: 48px;
			background-color: #F2F2F2;
			padding: 12px;
			border: 1px solid #e8e8e8;
			.defult {
				background-color: #FFFFFF;
				display: inline-block;
				padding: 0px 16px;
				border: 1px solid #e8e8e8;
				border-left: none;
				color: #333333;
				font-size: 12px;
				float: left;
			}
			.defultLeftborder {
				border-left: 1px solid #e8e8e8;
			}
			.marginleft {
				position: absolute;
				right: 0px;
				top: 6px;
				/*margin-left: 6px;*/
			}
			.marginleft1 {
				position: absolute;
				right: 6px;
				top: 6px;
			}
			.defult:hover {
				border-color: #DE1A20;
				color: #FFFFFF;
				background-color: #DE1A20;
				cursor: pointer;
			}
			.cur {
				border-color: #DE1A20;
				color: #FFFFFF;
				background-color: #DE1A20;
				cursor: pointer;
			}
		}
		.search {
			width: auto;
			margin: 29px auto;
			display: table;
			position: relative;
			.input {
				width: 420px;
			}
			.btn {
				position: absolute;
				height: 40px;
				line-height: 40px;
				padding: 0 44px;
				right: 0;
				border-bottom-left-radius: 0;
				border-top-left-radius: 0;
			}
		}
	}
</style>