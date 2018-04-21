<template>
	<div>
		<select>
			<option>青铜糕</option>
			<option>白银糕</option>
			<option>黄金糕</option>
			<option>铂金糕</option>
			<option>钻石糕</option>
			<option>王者糕</option>
		</select>
		<Dropdown @onchange="change" :value="value">
			<div v-for="item in list">{{item}}</div>
		</Dropdown>
		<Dropdown @onchange="change" :value="value">
			<div v-for="item in list">{{item}}</div>
		</Dropdown>
		<Dropdown @onchange="change" :value="value">
			<div v-for="item in list">{{item}}</div>
		</Dropdown>
		<div>sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好sdffffffffffffff联发科的结果的时候了客户经理可视对讲欢乐书客搭建好施蒂利克金黄色的老客户尽快落实到就好了可视对讲菲尼克斯搭建好</div>
	</div>
</template>

<script>
	import Dropdown from '../../components/Dropdown.vue'
	
	export default {
		components: {
			Dropdown,
		},
		data() {
			return {
				list: [
					"青铜糕",
					"白银糕",
					"黄金糕",
					"铂金糕",
					"钻石糕",
					"王者糕",
				],
				value :"",
			};
		},
		mounted() {
			//页面加载完成回调
			
		},
		methods: {
			change(value) {
				console.log("Dropdown:",value)
				this.value = value;
			}
		}
	};
</script>

<style lang="scss" scoped>

</style>