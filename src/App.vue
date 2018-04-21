<template>
		<router-view/>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	@import "./nprogress/qqzxkf.css";
	
	body {
		/*background-color: #324057;*/
		margin: 0px;
		padding: 0px;
		/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
		/*background: #1F2D3D;*/
		font-family: "微软雅黑", Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
		/*font-weight: 400;*/
		-webkit-font-smoothing: antialiased;
	}
	
	a:link {
		/* color: #8d8d8d; */
		text-decoration: none;
		outline: none;
	}
	
	 a:visited {
		/* color: #8d8d8d; */
		text-decoration: none;
	}
	
	html {
		font-size: 14px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		color: rgb(51, 51, 51);
	}
	
	* {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	#app {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	
	.el-submenu [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}
	
	.el-menu-item [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}
	
	ul,
	ol,
	li,
	dl,
	dt,
	dd {
		list-style: none;
	}
	
	a {
		outline: none;
	}
	
	a:hover {
		text-decoration: none;
	}
	
	a:visited {
		/*color: #8d8d8d;*/
		text-decoration: none;
	}
	
	a:active {
		/*color: #8d8d8d;*/
		text-decoration: none;
	}
	
	a:link {
		/*color: #8d8d8d;*/
		text-decoration: none;
		outline: none;
	}
	
	.mjx-clearfix::after {
		display: block;
		content: '';
		height: 0;
		overflow: hidden;
		clear: both;
		zoom: 1;
	}
	
	*:before,
	*:after {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: '';
	}
	
	.clearfix:before,
	.clearfix:after,
	.dl-horizontal dd:before,
	.dl-horizontal dd:after,
	.container:before,
	.container:after,
	.container-fluid:before,
	.container-fluid:after,
	.row:before,
	.row:after,
	.form-horizontal .form-group:before,
	.form-horizontal .form-group:after,
	.btn-toolbar:before,
	.btn-toolbar:after,
	.btn-group-vertical>.btn-group:before,
	.btn-group-vertical>.btn-group:after,
	.nav:before,
	.nav:after,
	.navbar:before,
	.navbar:after,
	.navbar-header:before,
	.navbar-header:after,
	.navbar-collapse:before,
	.navbar-collapse:after,
	.pager:before,
	.pager:after,
	.panel-body:before,
	.panel-body:after,
	.modal-header:before,
	.modal-header:after,
	.modal-footer:before,
	.modal-footer:after {
		display: table;
		content: " ";
	}
</style>