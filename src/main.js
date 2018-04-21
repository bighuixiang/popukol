import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from './router'
import Store from './vuex/store'
import Vuex from 'vuex'
import Axios from 'axios'
import NProgress from 'nprogress' //页面顶部进度条
import './nprogress/nprogress.css'
import qs from 'qs'; //使用qs模块转换payload参数为formdata请求参数
import * as APIS from './api.js'
//import * as filters from './filters';

Vue.use(Vuex)
Vue.use(ElementUI)

// 添加请求拦截器
Axios.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	NProgress.start();
	config.data = qs.stringify(config.data);
	return config;
}, function(error) {
	// 对请求错误做些什么
	NProgress.done();
	return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	NProgress.done();
	return response;
}, function(error) {
	// 对响应错误做点什么
	NProgress.done();
	return Promise.reject(error);
});

Vue.prototype.API = APIS;
Vue.prototype.$http = Axios;

//Vue.filter('timeToNow', filters.timeToNow);
//Vue.config.productionTip = false

Router.beforeEach((to, from, next) => {
	NProgress.start();
	//	$(window).unbind('scroll');
	//	if (to.name == '首页' || to.name == '注册' || to.name == '找回密码' || to.name == '登录') {
	//		next();
	//		return false;
	//	}
	//	Vue.http.post(checkLogined).then((response) => { // 响应成功回调 
	//		if (response.data.code == 8888) {
	//			router.replace('/login')
	//		}
	//	}, (response) => {
	//		router.replace('/login')
	//	});
	next()
})

Router.afterEach(transition => {
	NProgress.done();
});

/* eslint-disable no-new */
new Vue({
	router: Router,
	store:Store,
	render: h => h(App)
}).$mount('#app');