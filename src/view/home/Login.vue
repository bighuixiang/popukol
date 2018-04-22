<template>
	<div class="content">
		<div class="search">
			<el-input class="input" placeholder="请输入搜索关键字" prefix-icon="el-icon-search" v-model="keywords"></el-input>
			<el-button class="btn" type="primary">搜索</el-button>
		</div>

		<div class="condition">
			<div class="item">
				<div class="title">账号分类</div>
				<div class="right">
					<div class="buxian cur">
						<span>不限11111111111111</span>
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
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				isShowI18n: false,
				keywords: "", //搜索关键字
			}
		},
		mounted() {
			let self = this
			self.increment(1)
			self.test();
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

			getMessageInfoList() {
				let self = this;
				self.$http.post("pushMessageInfoList").then((response) => { // 响应成功回调 
					if(response.data.code == 0) {
						self.msgTotal = response.data.data.total;
					}
				}, (response) => {});

			},
			test() {
				let self = this;
				self.$http.post(self.API.recordList, {
					params: {
						platformId: 1,
					}
				}).then((response) => { // 响应成功回调
					if(response.data.code == 0) {
						console.log(response.data)
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
						padding-right: 34px;
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