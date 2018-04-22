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
	.el-table .cell,
	.el-table th div {
		overflow: visible !important;
	}
	
	.el-dialog__close:hover,
	.el-dialog__close:focus {
		color: #DE1A20 !important;
	}
	
	.el-button:focus,
	.el-button:hover {
		border-color: #DE1A20 !important;
		color: #DE1A20 !important;
	}
	
	.task_type_list h1 {
		color: #DE1A20 !important;
	}
	
	.task_type .cur {
		border: 1px solid #DE1A20 !important;
		background: #FFF9FB !important;
	}
	
	.step.stepcur {
		border-color: #DE1A20 !important;
	}
	
	.thumbnail .same-text {
		top: 235px !important;
	}
	
	.thumbnail:hover .same-text {
		top: 160px !important;
	}
	
	.thumbnail {
		border-radius: initial !important;
		padding: 0 !important;
	}
	
	.thumbnail:hover {
		border: 1px solid #DE1A20 !important;
		overflow: hidden;
	}
	
	.thumbnail .same-text {
		top: 235px !important;
	}
	
	.thumbnail .same-text h3 {
		color: #1B1B1B;
		border-color: #1B1B1B !important;
	}
	
	.thumbnail .same-text p {
		color: #1B1B1B;
	}
	
	.el-pagination .btn-next:hover {
		color: #DE1A20 !important;
	}
	
	.el-pagination button.disabled:hover {
		color: #e4e4e4 !important;
	}
	
	.el-pagination button.disabled {
		color: #e4e4e4 !important;
	}
	
	.el-pagination .btn-prev:hover {
		color: #DE1A20 !important;
	}
	
	.el-pager li:hover {
		color: #DE1A20 !important;
	}
	
	.el-button:hover {
		border-color: #DE1A20 !important;
		color: #DE1A20 !important;
	}
	
	.el-pager li.active {
		color: #FFFFFF !important;
	}
	
	.el-pagination__editor:focus {
		border-color: #DE1A20 !important;
	}
	
	.el-pager li.active {
		color: #FFFFFF;
	}
	
	.el-button--primary:hover,
	.el-button--primary:focus {
		color: #FFFFFF !important;
	}
	
	.el-input__inner:focus {
		border-color: #DE1A20 !important;
	}
	
	.el-input__inner:active {
		border-color: #DE1A20 !important;
	}
	
	.el-pagination__sizes .el-input .el-input__inner:hover {
		border-color: #DE1A20 !important;
	}
	
	.el-select-dropdown__item.selected.hover,
	.el-select-dropdown__item.selected {
		background-color: #DE1A20 !important;
	}
	
	.el-radio-button__orig-radio:checked+.el-radio-button__inner {
		background-color: #DE1A20 !important;
		border-color: #DE1A20 !important;
		-webkit-box-shadow: -1px 0 0 0 #DE1A20 !important;
		-moz-box-shadow: -1px 0 0 0 #DE1A20 !important;
		box-shadow: -1px 0 0 0 #DE1A20 !important;
	}
	
	.el-radio-button__inner:hover {
		border-color: #DE1A20 !important;
		color: #DE1A20 !important;
		-webkit-box-shadow: -1px 0 0 0 #DE1A20 !important;
		-moz-box-shadow: -1px 0 0 0 #DE1A20 !important;
		box-shadow: -1px 0 0 0 #DE1A20 !important;
	}
	
	.el-radio-button__orig-radio:checked+.el-radio-button__inner:hover {
		color: #FFFFFF !important;
	}
	
	.el-radio__input.is-checked .el-radio__inner,
	.el-pager li.active {
		background-color: #DE1A20 !important;
		border-color: #DE1A20 !important;
	}
	
	.el-radio__inner:hover {
		border-color: #DE1A20 !important;
	}
	
	.el-button--warning {
		background-color: #DE1A20 !important;
		border-color: #DE1A20 !important;
	}
	
	.el-button--warning:hover {
		color: #FFFFFF !important;
	}
	
	.el-step__title.is-finish {
		color: #DE1A20 !important;
	}
	
	.el-step__head.is-finish {
		background-color: #DE1A20 !important;
		border-color: #DE1A20 !important;
	}
	
	.el-tabs__item.is-active {
		color: #DE1A20 !important;
	}
	
	.el-tabs__active-bar {
		background-color: #DE1A20 !important;
	}
	
	.el-button--primary {
		background-color: #DE1A20 !important;
		border-color: #DE1A20 !important;
	}
	
	.el-checkbox__input.is-checked .el-checkbox__inner {
		background-color: #DE1A20 !important;
		border-color: #DE1A20 !important;
	}
	
	.el-checkbox__inner {
		border-color: #bfcbd9 !important;
	}
	
	.el-checkbox__inner:hover {
		border-color: #DE1A20 !important;
	}
	
	[class^="icon-"],
	[class*=" icon-"] {
		/* use !important to prevent issues with browser extensions that change fonts */
		font-family: 'icomoon' !important;
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		/* Better Font Rendering =========== */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.mjx-width {
		width: 1200px;
		margin: 0 auto;
	}
	
	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	
	.bounce-leave-active {
		animation: bounce-out .2s;
	}
	
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
		}
	}
	
	@keyframes bounce-out {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.95);
		}
		100% {
			transform: scale(0);
		}
	}
	
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
		color: #DE1A20 !important;
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
	
	.el-checkbox__input.is-checked .el-checkbox__inner,
	.el-checkbox__input.is-indeterminate .el-checkbox__inner {
		background-color: #DE1A20 !important;
	}
	
	.el-checkbox__input.is-checked+.el-checkbox__label {
		color: #DE1A20 !important;
	}
	
	.el-select .el-input.is-focus .el-input__inner {
		border-color: #DE1A20 !important;
	}
	
	.el-select-dropdown__item.selected {
		color: #FFFFFF !important;
	}
</style>