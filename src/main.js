import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from './router'
import { setLanguageSwitching } from './filters.js'
import { getLanguage } from './language.js'
import Store from './vuex/store'
import Vuex from 'vuex'
import Axios from 'axios'
import NProgress from 'nprogress' //页面顶部进度条
import './nprogress/nprogress.css'
import qs from 'qs'; //使用qs模块转换payload参数为formdata请求参数
import * as APIS from './api.js'
import editor from "vue-html5-editor";

let options = {
	// 全局组件名称，使用new VueHtml5Editor(options)时该选项无效  
	// global component name 
	name: "vue-html5-editor",
	// 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称 
	// if set true,will append module name to toolbar after icon 
	showModuleName: false,
	// 自定义各个图标的class，默认使用的是font-awesome提供的图标 
	// custom icon class of built-in modules,default using font-awesome 
	icons: {
		// text: "fa fa-pencil",
		// color: "fa fa-paint-brush",
		// font: "fa fa-font",
		// align: "fa fa-align-justify",
		// list: "fa fa-list",
		// link: "fa fa-chain",
		// unlink: "fa fa-chain-broken",
		// tabulation: "fa fa-table",
		// image: "fa fa-file-image-o",
		// hr: "fa fa-minus",
		// eraser: "fa fa-eraser",
		// undo: "fa-undo fa",
		// "full-screen": "fa fa-arrows-alt",
		// info: "fa fa-info",
	},
	// 配置图片模块 
	// config image module 
	image: {
		// 文件最大体积，单位字节  max file size 
		sizeLimit: 512 * 1024,
		// 上传参数,默认把图片转为base64而不上传 
		// upload config,default null and convert image to base64 
		upload: {
			url: null,
			headers: {},
			params: {},
			fieldName: {}
		},
		// 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩 
		// compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG) 
		// set null to disable compression 
		compress: {
			width: 1600,
			height: 1600,
			quality: 80
		},
		// 响应数据处理,最终返回图片链接 
		// handle response data，return image url 
		uploadHandler(responseText) {
			//default accept json data like  {ok:false,msg:"unexpected"} or {ok:true,data:"image url"} 
			var json = JSON.parse(responseText)
			if(!json.ok) {
				alert(json.msg)
			} else {
				return json.data
			}
		}
	},
	// 语言，内建的有英文（en-us）和中文（zh-cn） 
	//default en-us, en-us and zh-cn are built-in 
	language: "zh-cn",
	// 自定义语言 
	i18n: {
		//specify your language here 
		"zh-cn": {
			"align": "对齐方式",
			"image": "图片",
			"list": "列表",
			"link": "链接",
			"unlink": "去除链接",
			"table": "表格",
			"font": "文字",
			"full screen": "全屏",
			"text": "排版",
			"eraser": "格式清除",
			"info": "关于",
			"color": "颜色",
			"please enter a url": "请输入地址",
			"create link": "创建链接",
			"bold": "加粗",
			"italic": "倾斜",
			"underline": "下划线",
			"strike through": "删除线",
			"subscript": "上标",
			"superscript": "下标",
			"heading": "标题",
			"font name": "字体",
			"font size": "文字大小",
			"left justify": "左对齐",
			"center justify": "居中",
			"right justify": "右对齐",
			"ordered list": "有序列表",
			"unordered list": "无序列表",
			"fore color": "前景色",
			"background color": "背景色",
			"row count": "行数",
			"column count": "列数",
			"save": "确定",
			"upload": "上传",
			"progress": "进度",
			"unknown": "未知",
			"please wait": "请稍等",
			"error": "错误",
			"abort": "中断",
			"reset": "重置"
		}
	},
	// 隐藏不想要显示出来的模块 
	// the modules you don't want 
	hiddenModules: [],
	// 自定义要显示的模块，并控制顺序 
	// keep only the modules you want and customize the order. 
	// can be used with hiddenModules together 
	visibleModules: [
		"text",
		"color",
		"font",
		"align",
		"list",
		"link",
		"unlink",
		"tabulation",
		"hr",
		"eraser",
		"undo",
	],
	// 扩展模块，具体可以参考examples或查看源码 
	// extended modules 
	modules: {
		//omit,reference to source code of build-in modules 
	}
}

Vue.use(editor, options);
Vue.use(ElementUI)
Vue.use(Vuex)

// 添加请求拦截器
Axios.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	//	NProgress.start();
	config.data = qs.stringify(config.data);
	return config;
}, function(error) {
	// 对请求错误做些什么
	//	NProgress.done();
	return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	//	NProgress.done();
	return response;
}, function(error) {
	// 对响应错误做点什么
	//	NProgress.done();
	return Promise.reject(error);
});

Vue.prototype.API = APIS;
Vue.prototype.$http = Axios;
Vue.prototype.SLS = setLanguageSwitching;
Vue.prototype.getLanguage = getLanguage;

//Vue.filter('timeToNow', filters.timeToNow);
//Vue.config.productionTip = false

//Router.beforeEach((to, from, next) => {
Router.beforeResolve((to, from, next) => {
	NProgress.start();
	//to即将进入的目标路由对象，from当前导航正要离开的路由， next : 下一步执行的函数钩子
	if(to.path === '/login') {
		next()
	} // 如果即将进入登录路由，则直接放行
	else { //进入的不是登录路由
		let vm = Router.app.$root
		let lastTime = window.localStorage.getItem('lastTime')
		let curTime = new Date().getTime()
		if(to.meta.requiresAuth && !vm.$store.getters.getLoginFlag) {
			//下一跳路由需要登录验证，并且还未登录，则路由定向到 登录路由
			//			此处加入  二次判断  是否登录
			window.localStorage.setItem('lastTime', curTime)
			vm.$http.get(vm.API.userInfoApi).then((response) => { // 响应成功回调
				NProgress.done();
				if(response.data.status == 0 && response.data.loginFlag) {
					next()
				} else {
					next({
						path: '/login'
					})
				}
			}, (response) => {
				NProgress.done();
				next({
					path: '/login'
				})
			});
		} else {
			if(lastTime != null && lastTime != null && (curTime - lastTime) <= 60 * 1000 * 25) {
				window.localStorage.setItem('lastTime', curTime)
				next()
			} else {
				window.localStorage.setItem('lastTime', curTime)
				vm.$http.get(vm.API.userInfoApi).then((response) => { // 响应成功回调
					NProgress.done();
					if(response.data.status == 0 && response.data.loginFlag) {
						next()
					} else {
						next({
							path: '/login'
						})
					}
				}, (response) => {
					NProgress.done();
					next({
						path: '/login'
					})
				});
			}
		}
	}
	//如果不需要登录验证，或者已经登录成功，则直接放行
})

Router.afterEach(transition => {
	NProgress.done();
});

/* eslint-disable no-new */
new Vue({
	router: Router,
	store: Store,
	render: h => h(App)
}).$mount('#app');