<template>
	<el-row >
		大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />大
		<br />
	</el-row>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	
	export default {
		data() {
			return {
				isShowI18n: false,
			}
		},
		mounted() {
			let self = this
			self.increment(1)
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

			}
		}
	}
</script>

<style lang="scss" scoped>

</style>