<template>
	<!-- start 侧边栏购物车信息 -->
	<div class="buycar" :class="{'buycarhidde':isShowBuycar}">
		<div class="menu" @click.stop="isShowBuycar=false">
			<div class="btns">
				<div class="car" :class="{'cur':!isShowBuycar}">
					<span>...</span>
				</div>
				<div class="customer"></div>
			</div>
		</div>
		<div class="top">
			<div class="checkedall">选号车</div>
			<div class="close" @click="close"></div>
		</div>
		<div class="list">

			<div class="item" v-for="(item,index) in buyCarList" :key="index">
				<div class="left">
					<img class="userImg" src="../../static/icon/meitirenzhen/weatch.png" />
					<img class="ico" src="../../static/icon/meitirenzhen/weatch.png" />
				</div>
				<div class="center">
					<p>明星圈儿明星圈儿明星圈儿</p>
					<span>798</span>
					<el-select class="selected" size="mini" v-model="value" placeholder="请选择">
						<el-option v-for="(item,index) in ['头条','次条']" :key="item" :label="item" :value="index+1">
						</el-option>
					</el-select>
				</div>
				<div class="right">
					<div class="delete"></div>
					<div class="price">
						￥88000.00
					</div>
				</div>
			</div>

		</div>
	</div>
	<!-- end 侧边栏购物车信息 -->
</template>
<script>
	export default {
		name: 'BuyCar',
		props: {
			buyCarList: {
				type: Array
			},
			isShowBuycar: {
				type: Booleazn,
				default: true,
			},
		},
		mounted() {
			//			this.initDropdown();
		},
		methods: {
			close(){
				this.isShowBuycar = true
			},
		}
	}
</script>

<style lang="scss" scoped>
	.buycar {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 286px;
		background-color: #FFFFFF;
		z-index: 999;
		-webkit-transition: all 0.5s;
		-ms-transition: all 0.5s;
		-moz-transition: all 0.5s;
		transition: all 0.5s;
		.top {
			position: absolute;
			top: 0;
			right: 0;
			height: 36px;
			line-height: 36px;
			background-color: #eeeeee;
			width: 100%;
			z-index: 88;
			width: 250px;
			.checkedall {
				margin-left: 12px;
			}
			.close {
				position: absolute;
				right: 0;
				top: 0;
				width: 36px;
				height: 36px;
				background: url(../../static/icon/admin/close.png) center center no-repeat;
				background-size: 12px;
				cursor: pointer;
			}
		}
		.list {
			position: absolute;
			top: 0;
			left: 36px;
			right: 0;
			bottom: 0;
			width: 250px;
			overflow: auto;
			padding-top: 36px;
			.item {
				position: relative;
				overflow: hidden;
				padding: 12px;
				border-bottom: 1px solid #e8e8e8;
				.left {
					width: 44px;
					position: relative;
					float: left;
					.userImg {
						width: 44px;
						height: 44px;
						border-radius: 50%;
						display: block;
					}
					.ico {
						position: absolute;
						right: 0;
						bottom: 0;
						width: 12px;
						height: auto;
						display: block;
					}
				}
				.center {
					width: 128px;
					position: relative;
					margin-left: 12px;
					float: left;
					p {
						font-weight: bold;
						color: #333333;
						font-size: 14px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					span {
						font-size: 12px;
						color: #666666;
						padding-left: 14px;
						background: url(../../static/icon/wangzhan/finas.png) no-repeat left center;
						background-size: 12px;
					}
					.selected {
						display: block;
						width: 88px;
					}
				}
				.right {
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					width: 128px;
					text-align: right;
					color: #dd2025;
					font-size: 14px;
					.delete {
						position: absolute;
						right: 0;
						bottom: 0;
						width: 32px;
						height: 32px;
						cursor: pointer;
						background: url(../../static/icon/guanggaozhu/clear.png) no-repeat center center;
						background-size: 16px;
					}
					.price {
						position: absolute;
						top: 50%;
						right: 12px;
						-ms-transform: translateY(-50%);
						-webkit-transform: translateY(-50%);
						-moz-transform: translateY(-50%);
						transform: translateY(-50%);
						margin-top: -6px;
					}
				}
			}
		}
		.menu {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			width: 36px;
			background-color: #666666;
			.btns {
				cursor: pointer;
				width: 36px;
				height: 250px;
				position: absolute;
				top: 50%;
				left: 50%;
				-webkit-transform: translate(-50%, -50%);
				-ms-transform: translate(-50%, -50%);
				-moz-transform: translate(-50%, -50%);
				transform: translate( -50%, -50%);
				.customer {
					position: relative;
					height: 36px;
					width: 36px;
					background: url(../../static/icon/cebianlan/kefu.png) center center no-repeat;
					background-size: 20px;
				}
				.car {
					position: relative;
					height: 36px;
					width: 36px;
					background: url(../../static/icon/cebianlan/buycar.png) center center no-repeat;
					background-size: 22px;
					span {
						width: 18px;
						height: 18px;
						text-align: center;
						line-height: 18px;
						font-size: 12px;
						color: #FFFFFF;
						background-color: #D41A20;
						display: block;
						border-radius: 50px;
						right: 6px;
						top: 6px;
						position: absolute;
					}
				}
				.car:hover,
				.cur,
				.customer:hover {
					background-color: rgba(0, 0, 0, 0.6);
				}
			}
		}
	}
	
	.buycarhidde {
		right: -250px;
	}
</style>