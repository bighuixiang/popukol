<template>
	<a class="dropdown" tabindex="-1" @click="ok()" @blur="blur">
		<div class="text">{{text}}</div>
		<div class="item" @click="dropdownsub()" v-show="isShowItem">
			<slot></slot>
		</div>
	</a>
</template>
<script>
	export default {
		name: 'Dropdown',
		props: {
			value: {
				type: String,
				default: '请选择'
			}
		},
		data() {
			return {
				isShowItem: false,
				text: '请选择',
			}
		},
		mounted() {
//			this.initDropdown();
		},
		methods: {
			blur: function() {
				let self = this
				self.isShowItem = false;
			},
			ok: function(e) {
				let self = this
				if(self.isShowItem) {
					self.isShowItem = false;
				} else {
					self.isShowItem = true;
				}
			},
			dropdownsub() {
				//事件委托
				let self = this
				if(typeof event.target.attributes.class === 'undefined') {
					let value = event.target.innerHTML;
					self.text = value;
					this.$emit("onchange", value);
				}
			},
//			initDropdown() {
//				let self = this
//			},
		}
	}
</script>

<style lang="scss" scoped>
	.dropdown {
		position: relative;
		display: inline-block;
		color: #fff;
		background-color: #409eff;
		border-color: #409eff;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		text-align: center;
		font-size: 14px;
		.text {
			padding: 6px 24px;
		}
		.item {
			position: absolute;
			left: 0;
			right: 0;
			background: #42B983;
			padding-top: 6px;
			padding-bottom: 6px;
			div {
				padding-top: 6px;
				padding-bottom: 6px;
			}
			div:hover {
				background-color: #000000;
			}
		}
	}
</style>