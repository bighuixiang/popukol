<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		font-size: 14px;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}
</style>